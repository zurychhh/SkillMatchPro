import React, { createContext, useState, useEffect, useCallback, useMemo } from 'react';
import { 
  DEFAULT_ACHIEVEMENTS, 
  STORAGE_KEYS, 
  API_ENDPOINTS, 
  TOTAL_ACHIEVEMENT_POINTS 
} from '@/lib/constants';
import { 
  Achievement, 
  AchievementContextType, 
  AchievementProgress 
} from '@/types';
import { calculateProgress, determineLevel, generateId } from '@/lib/utils';

// Default context value
const defaultContextValue: AchievementContextType = {
  achievements: [],
  progress: 0,
  level: 'Explorer',
  newAchievement: null,
  recordVisit: () => {},
  recordRead: () => {},
  recordAction: () => {},
};

// Create the achievement context
export const AchievementContext = createContext<AchievementContextType>(defaultContextValue);

export const AchievementProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State for achievements and progress
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [progress, setProgress] = useState<number>(0);
  const [level, setLevel] = useState<string>('Explorer');
  const [userId, setUserId] = useState<string>('');
  const [newAchievement, setNewAchievement] = useState<Achievement | null>(null);
  const [progressData, setProgressData] = useState<AchievementProgress>({
    visits: {},
    reads: [],
    actions: {},
  });
  
  // Initialize user ID and load achievements from localStorage
  useEffect(() => {
    // Get or create user ID
    let id = localStorage.getItem(STORAGE_KEYS.USER_ID);
    if (!id) {
      id = generateId();
      localStorage.setItem(STORAGE_KEYS.USER_ID, id);
    }
    setUserId(id);
    
    // Load achievement data from localStorage
    const storedAchievements = localStorage.getItem(STORAGE_KEYS.ACHIEVEMENTS);
    if (storedAchievements) {
      try {
        const parsedAchievements = JSON.parse(storedAchievements);
        setAchievements(parsedAchievements);
      } catch (error) {
        console.error('Error parsing stored achievements:', error);
        setAchievements(DEFAULT_ACHIEVEMENTS);
      }
    } else {
      setAchievements(DEFAULT_ACHIEVEMENTS);
    }
    
    // Load progress from localStorage
    const storedProgress = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    if (storedProgress) {
      const progressValue = parseFloat(storedProgress);
      setProgress(progressValue);
      setLevel(determineLevel(progressValue));
    }
    
    // Load progress data
    const storedProgressData = localStorage.getItem('oleksiak_progress_data');
    if (storedProgressData) {
      try {
        setProgressData(JSON.parse(storedProgressData));
      } catch (error) {
        console.error('Error parsing progress data:', error);
      }
    }
  }, []);
  
  // Save achievements to localStorage when they change
  useEffect(() => {
    if (achievements.length > 0) {
      localStorage.setItem(STORAGE_KEYS.ACHIEVEMENTS, JSON.stringify(achievements));
    }
  }, [achievements]);
  
  // Save progress data to localStorage
  useEffect(() => {
    localStorage.setItem('oleksiak_progress_data', JSON.stringify(progressData));
  }, [progressData]);
  
  // Save progress and level to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROGRESS, progress.toString());
    localStorage.setItem(STORAGE_KEYS.LEVEL, level);
  }, [progress, level]);
  
  // Sync achievements with the server
  const syncWithServer = useCallback(async () => {
    if (!userId) return;
    
    try {
      const response = await fetch(API_ENDPOINTS.ACHIEVEMENTS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          achievements,
          progress,
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Update level if server has a different value
        if (data.level !== level) {
          setLevel(data.level);
        }
      }
    } catch (error) {
      console.error('Error syncing achievements:', error);
    }
  }, [userId, achievements, progress, level]);
  
  // Sync with server when achievements or progress change
  useEffect(() => {
    if (achievements.length > 0 && userId) {
      syncWithServer();
    }
  }, [achievements, progress, userId, syncWithServer]);
  
  // Check achievements and update progress
  const checkAchievements = useCallback(() => {
    let updated = false;
    let totalEarnedPoints = 0;
    
    const updatedAchievements = achievements.map(achievement => {
      // Skip already completed achievements
      if (achievement.completed) {
        totalEarnedPoints += achievement.points;
        return achievement;
      }
      
      // Check if criteria are met
      let criteriaFulfilled = true;
      
      // Check visit criteria
      if (achievement.criteria.visits) {
        for (const [page, count] of Object.entries(achievement.criteria.visits)) {
          const userVisits = progressData.visits[page] || 0;
          if (userVisits < count) {
            criteriaFulfilled = false;
            break;
          }
        }
      }
      
      // Check read criteria
      if (criteriaFulfilled && achievement.criteria.reads) {
        if (progressData.reads.length < achievement.criteria.reads) {
          criteriaFulfilled = false;
        }
      }
      
      // Check action criteria
      if (criteriaFulfilled && achievement.criteria.actions) {
        for (const [action, count] of Object.entries(achievement.criteria.actions)) {
          const userActions = progressData.actions[action] || 0;
          if (userActions < count) {
            criteriaFulfilled = false;
            break;
          }
        }
      }
      
      // Update achievement if criteria are fulfilled
      if (criteriaFulfilled && !achievement.completed) {
        updated = true;
        
        // Set newly completed achievement for notification
        setNewAchievement({ ...achievement });
        
        // Clear notification after 5 seconds
        setTimeout(() => {
          setNewAchievement(null);
        }, 5000);
        
        totalEarnedPoints += achievement.points;
        
        return {
          ...achievement,
          completed: true,
          completedAt: new Date(),
        };
      }
      
      return achievement;
    });
    
    if (updated) {
      setAchievements(updatedAchievements);
    }
    
    // Update progress
    const newProgress = calculateProgress(totalEarnedPoints);
    if (newProgress !== progress) {
      setProgress(newProgress);
      setLevel(determineLevel(newProgress));
    }
  }, [achievements, progressData, progress]);
  
  // Record a page visit
  const recordVisit = useCallback((page: string) => {
    setProgressData(prev => {
      const visits = { ...prev.visits };
      visits[page] = (visits[page] || 0) + 1;
      return { ...prev, visits };
    });
  }, []);
  
  // Record a blog post read
  const recordRead = useCallback((postId: string) => {
    setProgressData(prev => {
      // Only add the post ID if it's not already in the array
      if (!prev.reads.includes(postId)) {
        return { ...prev, reads: [...prev.reads, postId] };
      }
      return prev;
    });
  }, []);
  
  // Record a user action
  const recordAction = useCallback((action: string) => {
    setProgressData(prev => {
      const actions = { ...prev.actions };
      actions[action] = (actions[action] || 0) + 1;
      return { ...prev, actions };
    });
  }, []);
  
  // Check achievements when progress data changes
  useEffect(() => {
    checkAchievements();
  }, [progressData, checkAchievements]);
  
  // Context value
  const contextValue = useMemo(() => ({
    achievements,
    progress,
    level,
    newAchievement,
    recordVisit,
    recordRead,
    recordAction,
  }), [achievements, progress, level, newAchievement, recordVisit, recordRead, recordAction]);
  
  return (
    <AchievementContext.Provider value={contextValue}>
      {children}
    </AchievementContext.Provider>
  );
};
