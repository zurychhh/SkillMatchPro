import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { BlogPost } from '@/types';
import { formatDate } from '@/lib/utils';
import { useAchievements } from '@/hooks/useAchievements';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const router = useRouter();
  const { recordAction } = useAchievements();
  
  const handlePostClick = () => {
    recordAction('blog_post_click');
    router.push(`/blog/${post.slug}`);
  };
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition duration-300"
      onClick={handlePostClick}
    >
      {post.coverImage && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
          <span>{formatDate(post.publishedAt)}</span>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400 transition">{post.title}</h3>
        
        <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">{post.excerpt}</p>
        
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map(tag => (
              <span 
                key={tag} 
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs text-gray-600 dark:text-gray-300"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/blog?tag=${tag}`);
                }}
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs text-gray-600 dark:text-gray-300">
                +{post.tags.length - 3}
              </span>
            )}
          </div>
        )}
        
        <button
          className="text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center"
          onClick={(e) => {
            e.stopPropagation();
            handlePostClick();
          }}
        >
          Read More
          <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </motion.article>
  );
};

export default BlogCard;
