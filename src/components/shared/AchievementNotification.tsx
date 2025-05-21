import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAchievements } from '@/hooks/useAchievements';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon?: string;
  level: 'Explorer' | 'Strategist' | 'Partner';
}

const AchievementNotification = () => {
  const { newAchievement } = useAchievements();
  const [visible, setVisible] = useState(false);
  const [currentAchievement, setCurrentAchievement] = useState<Achievement | null>(null);
  
  useEffect(() => {
    if (newAchievement) {
      setCurrentAchievement(newAchievement);
      setVisible(true);
      
      // Hide after 5 seconds
      const timer = setTimeout(() => {
        setVisible(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [newAchievement]);
  
  // Handle close notification
  const handleClose = () => {
    setVisible(false);
  };
  
  // Get badge color based on achievement level
  const getBadgeColor = (level: string) => {
    switch (level) {
      case 'Explorer':
        return 'bg-green-500';
      case 'Strategist':
        return 'bg-blue-500';
      case 'Partner':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };
  
  return (
    <AnimatePresence>
      {visible && currentAchievement && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 50, x: '-50%' }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-sm"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className={`h-2 ${getBadgeColor(currentAchievement.level)}`}></div>
            <div className="p-4">
              <div className="flex items-start">
                <div className={`flex-shrink-0 w-10 h-10 rounded-full ${getBadgeColor(currentAchievement.level)} flex items-center justify-center text-white`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <div className="ml-3 w-0 flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        Achievement Unlocked!
                      </p>
                      <h3 className="text-base font-semibold mt-1">
                        {currentAchievement.title}
                      </h3>
                    </div>
                    <button
                      className="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-500 focus:outline-none"
                      onClick={handleClose}
                    >
                      <span className="sr-only">Close</span>
                      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {currentAchievement.description}
                  </p>
                  
                  <p className="mt-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                    {currentAchievement.level} Level
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AchievementNotification;
