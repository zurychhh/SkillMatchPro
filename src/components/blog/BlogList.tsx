import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import BlogCard from './BlogCard';
import { BlogPost } from '@/types';
import { useAchievements } from '@/hooks/useAchievements';

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  const { recordAction } = useAchievements();
  
  // Record blog list view for achievement tracking
  useEffect(() => {
    if (posts.length > 0) {
      recordAction('blog_list_view');
    }
  }, [posts, recordAction]);
  
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-500 dark:text-gray-400">No blog posts available at this time.</p>
      </div>
    );
  }
  
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <AnimatePresence>
        {posts.map(post => (
          <BlogCard key={post._id} post={post} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default BlogList;
