import { useState } from 'react';
import { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import BlogList from '@/components/blog/BlogList';
import { connectToDatabase } from '@/lib/db';
import { useAchievements } from '@/hooks/useAchievements';
import { BlogPost } from '@/types';

interface BlogPageProps {
  posts: BlogPost[];
}

const BlogPage: NextPage<BlogPageProps> = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { recordVisit } = useAchievements();

  // Record blog visit for achievement tracking
  React.useEffect(() => {
    recordVisit('blog');
  }, [recordVisit]);

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Blog - Oleksiak Consult</title>
        <meta name="description" content="Latest insights, tips, and expert advice on business consulting, strategy, and growth." />
      </Head>
      <MainLayout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-16"
        >
          <h1 className="text-4xl font-bold text-center mb-6">Our Blog</h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Expert insights and advice to help your business thrive in today's competitive environment.
          </p>
          
          <div className="mb-8 max-w-lg mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          <BlogList posts={filteredPosts} />
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500 dark:text-gray-400">No posts found matching your search criteria.</p>
            </div>
          )}
        </motion.div>
      </MainLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { db } = await connectToDatabase();
    const posts = await db.collection('blogPosts').find({}).sort({ publishedAt: -1 }).toArray();
    
    return {
      props: {
        posts: JSON.parse(JSON.stringify(posts)),
      },
    };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return {
      props: {
        posts: [],
      },
    };
  }
};

export default BlogPage;
