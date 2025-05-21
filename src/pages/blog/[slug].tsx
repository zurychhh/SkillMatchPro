import { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { connectToDatabase } from '@/lib/db';
import { useAchievements } from '@/hooks/useAchievements';
import { BlogPost } from '@/types';
import { formatDate } from '@/lib/utils';
import NewsletterForm from '@/components/shared/NewsletterForm';

interface BlogPostPageProps {
  post: BlogPost | null;
  relatedPosts: BlogPost[];
}

const BlogPostPage: NextPage<BlogPostPageProps> = ({ post, relatedPosts }) => {
  const router = useRouter();
  const { recordRead } = useAchievements();

  // If the page is still being generated, show loading state
  if (router.isFallback) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-12"></div>
            <div className="h-64 bg-gray-200 rounded w-full max-w-3xl mb-8"></div>
            <div className="h-4 bg-gray-200 rounded w-full max-w-3xl mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full max-w-3xl mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 max-w-3xl"></div>
          </div>
        </div>
      </MainLayout>
    );
  }

  // If post wasn't found, show error state
  if (!post) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <button
            onClick={() => router.push('/blog')}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Return to Blog
          </button>
        </div>
      </MainLayout>
    );
  }

  // Record blog post read for achievement tracking
  React.useEffect(() => {
    if (post) {
      recordRead(post._id);
    }
  }, [post, recordRead]);

  return (
    <>
      <Head>
        <title>{post.title} - Oleksiak Consult Blog</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <MainLayout>
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-16"
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center text-gray-500 dark:text-gray-400 mb-8">
              <span>{formatDate(post.publishedAt)}</span>
              <span className="mx-2">•</span>
              <span>{post.author}</span>
            </div>
            
            {post.coverImage && (
              <div className="mb-8 rounded-lg overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
            
            <div className="prose prose-lg max-w-none dark:prose-invert" 
                 dangerouslySetInnerHTML={{ __html: post.content }}>
            </div>
            
            {post.tags && post.tags.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedPosts.map(relatedPost => (
                  <div key={relatedPost._id} className="border dark:border-gray-700 rounded-lg overflow-hidden">
                    {relatedPost.coverImage && (
                      <img 
                        src={relatedPost.coverImage} 
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{relatedPost.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{relatedPost.excerpt}</p>
                      <button
                        onClick={() => router.push(`/blog/${relatedPost.slug}`)}
                        className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                      >
                        Read More →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Newsletter Signup */}
          <div className="mt-16 max-w-2xl mx-auto bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Subscribe to Our Newsletter</h3>
            <p className="text-center mb-6">Get the latest insights delivered directly to your inbox.</p>
            <NewsletterForm />
          </div>
        </motion.article>
      </MainLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const slug = params?.slug;
    const { db } = await connectToDatabase();
    
    // Find the current post
    const post = await db.collection('blogPosts').findOne({ slug });
    
    if (!post) {
      return { props: { post: null, relatedPosts: [] } };
    }
    
    // Find related posts (posts with similar tags)
    let relatedPosts = [];
    if (post.tags && post.tags.length > 0) {
      relatedPosts = await db.collection('blogPosts')
        .find({ 
          _id: { $ne: post._id },
          tags: { $in: post.tags } 
        })
        .limit(2)
        .toArray();
    }
    
    // If no related posts with matching tags, just get the most recent ones
    if (relatedPosts.length === 0) {
      relatedPosts = await db.collection('blogPosts')
        .find({ _id: { $ne: post._id } })
        .sort({ publishedAt: -1 })
        .limit(2)
        .toArray();
    }
    
    return {
      props: {
        post: JSON.parse(JSON.stringify(post)),
        relatedPosts: JSON.parse(JSON.stringify(relatedPosts)),
      },
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return {
      props: {
        post: null,
        relatedPosts: [],
      },
    };
  }
};

export default BlogPostPage;
