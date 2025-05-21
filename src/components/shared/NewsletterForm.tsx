import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { useNewsletterSubscription } from '@/hooks/useNewsletterSubscription';
import { useAchievements } from '@/hooks/useAchievements';

// Form validation schema
const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().optional(),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

interface NewsletterFormProps {
  isDark?: boolean;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ isDark = false }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const { subscribe, isLoading, error } = useNewsletterSubscription();
  const { recordAction } = useAchievements();
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });
  
  const onSubmit = async (data: NewsletterFormData) => {
    try {
      await subscribe(data);
      reset();
      setShowSuccess(true);
      recordAction('newsletter_subscribe');
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (err) {
      console.error('Newsletter subscription error:', err);
    }
  };
  
  return (
    <div className={`rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white dark:bg-gray-800'} p-6 shadow-md`}>
      {showSuccess ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="mb-4 text-green-500 flex justify-center">
            <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
            Thank You for Subscribing!
          </h3>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300'}`}>
            You've been added to our newsletter. Stay tuned for expert insights and updates!
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          {error && (
            <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-sm">
              {error}
            </div>
          )}
          
          <div className="mb-4">
            <label 
              htmlFor="email" 
              className={`block text-sm font-medium mb-1 ${
                isDark ? 'text-gray-300' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              placeholder="youremail@example.com"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.email 
                  ? 'border-red-500 dark:border-red-400' 
                  : 'border-gray-300 dark:border-gray-600'
              }`}
              {...register('email')}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
            )}
          </div>
          
          <div className="mb-6">
            <label 
              htmlFor="name" 
              className={`block text-sm font-medium mb-1 ${
                isDark ? 'text-gray-300' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              Name (Optional)
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              {...register('name')}
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </button>
          
          <p className={`mt-4 text-xs ${isDark ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'}`}>
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </form>
      )}
    </div>
  );
};

export default NewsletterForm;
