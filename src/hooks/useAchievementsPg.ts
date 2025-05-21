import { useState, useEffect, useCallback } from 'react';
import { Achievement, AchievementProgress } from '@/types';
import { generateAnonymousId } from '@/server/storage';
import { ACHIEVEMENT_LEVELS, DEFAULT_ACHIEVEMENTS, TOTAL_ACHIEVEMENT_POINTS } from '@/lib/constants';
import { calculateProgress, determineLevel } from '@/lib/utils';

const STORAGE_KEY = 'oleksiak_achievements';

export const useAchievementsPg = () => {
  // State for tracking achievements, progress, and level
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [progress, setProgress] = useState<number>(0);
  const [level, setLevel] = useState<string>(ACHIEVEMENT_LEVELS.EXPLORER);
  const [userId, setUserId] = useState<string>('');
  const [newAchievement, setNewAchievement] = useState<Achievement | null>(null);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  
  // State for tracking user actions
  const [achievementProgress, setAchievementProgress] = useState<AchievementProgress>({
    visits: {},
    reads: [],
    actions: {}
  });

  // Initialize achievements from localStorage or create new profile
  useEffect(() => {
    const initializeAchievements = async () => {
      try {
        // Try to load from localStorage first
        const storedData = localStorage.getItem(STORAGE_KEY);
        let userData;

        if (storedData) {
          userData = JSON.parse(storedData);
          setUserId(userData.userId);
          setAchievements(userData.achievements || []);
          setProgress(userData.progress || 0);
          setLevel(userData.level || ACHIEVEMENT_LEVELS.EXPLORER);
          setAchievementProgress(userData.achievementProgress || {
            visits: {},
            reads: [],
            actions: {}
          });
        } else {
          // Create new anonymous profile
          const newUserId = generateAnonymousId();
          setUserId(newUserId);
          
          // Initialize with default achievements (all uncompleted)
          const defaultAchievements = DEFAULT_ACHIEVEMENTS.map(a => ({
            ...a,
            completed: false
          }));
          
          setAchievements(defaultAchievements);
          userData = {
            userId: newUserId,
            achievements: defaultAchievements,
            progress: 0,
            level: ACHIEVEMENT_LEVELS.EXPLORER,
            achievementProgress: {
              visits: {},
              reads: [],
              actions: {}
            }
          };
          
          // Save to localStorage
          localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
        }

        // Sync with server
        await syncWithServer(userData);
        
        setIsInitialized(true);
      } catch (error) {
        console.error('Error initializing achievements:', error);
        setIsInitialized(true);
      }
    };

    initializeAchievements();
  }, []);

  // Sync achievements with server
  const syncWithServer = async (userData: any) => {
    try {
      const response = await fetch('/api/achievements-pg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: userData.userId,
          achievements: {
            completed: userData.achievements.filter((a: Achievement) => a.completed),
            progress: userData.achievementProgress
          },
          progress: userData.progress
        })
      });

      if (response.ok) {
        const data = await response.json();
        
        // Update with server data
        if (data.achievements) {
          setAchievements(data.achievements);
          
          // Save updated achievements to localStorage
          localStorage.setItem(STORAGE_KEY, JSON.stringify({
            userId: userData.userId,
            achievements: data.achievements,
            progress: data.progress,
            level: data.level,
            achievementProgress: userData.achievementProgress
          }));
        }
      }
    } catch (error) {
      console.error('Error syncing with server:', error);
    }
  };

  // Check for newly completed achievements
  const checkAchievements = useCallback(() => {
    const updatedAchievements = achievements.map(achievement => {
      // Skip already completed achievements
      if (achievement.completed) return achievement;

      // Check if criteria is met
      let completed = false;
      const criteria = achievement.criteria;

      // Check page visits
      if (criteria.visits) {
        completed = true;
        for (const page in criteria.visits) {
          const requiredVisits = criteria.visits[page];
          const actualVisits = achievementProgress.visits[page] || 0;
          if (actualVisits < requiredVisits) {
            completed = false;
            break;
          }
        }
      }

      // Check blog post reads
      if (!completed && criteria.reads) {
        const requiredReads = criteria.reads;
        const actualReads = achievementProgress.reads.length;
        completed = actualReads >= requiredReads;
      }

      // Check user actions
      if (!completed && criteria.actions) {
        completed = true;
        for (const action in criteria.actions) {
          const requiredActions = criteria.actions[action];
          const actualActions = achievementProgress.actions[action] || 0;
          if (actualActions < requiredActions) {
            completed = false;
            break;
          }
        }
      }

      // If newly completed, add completion data
      if (completed && !achievement.completed) {
        const updatedAchievement = {
          ...achievement,
          completed: true,
          completedAt: new Date()
        };
        
        // Set the new achievement for notification
        setNewAchievement(updatedAchievement);
        
        return updatedAchievement;
      }

      return achievement;
    });

    // Calculate total progress (points earned / total possible points)
    const completedAchievements = updatedAchievements.filter(a => a.completed);
    const earnedPoints = completedAchievements.reduce((sum, a) => sum + a.points, 0);
    const newProgress = calculateProgress(earnedPoints);
    const newLevel = determineLevel(newProgress);

    // Update state
    setAchievements(updatedAchievements);
    setProgress(newProgress);
    setLevel(newLevel);

    // Save to localStorage
    const userData = {
      userId,
      achievements: updatedAchievements,
      progress: newProgress,
      level: newLevel,
      achievementProgress
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));

    // Sync with server
    syncWithServer(userData);

    return {
      achievements: updatedAchievements,
      progress: newProgress,
      level: newLevel
    };
  }, [achievements, achievementProgress, userId]);

  // Record a page visit
  const recordVisit = useCallback((page: string) => {
    if (!isInitialized) return;
    
    console.log('Recording visit to:', page);
    
    setAchievementProgress(prev => {
      const visits = { ...prev.visits };
      visits[page] = (visits[page] || 0) + 1;
      return { ...prev, visits };
    });
    
    // We need to use setTimeout to ensure the state update has processed
    setTimeout(() => {
      checkAchievements();
    }, 0);
  }, [checkAchievements, isInitialized]);

  // Record a blog post read
  const recordRead = useCallback((postId: string) => {
    if (!isInitialized) return;
    
    console.log('Recording read:', postId);
    
    setAchievementProgress(prev => {
      // Only add if not already read
      if (prev.reads.includes(postId)) return prev;
      
      const reads = [...prev.reads, postId];
      return { ...prev, reads };
    });
    
    setTimeout(() => {
      checkAchievements();
    }, 0);
  }, [checkAchievements, isInitialized]);

  // Record a user action
  const recordAction = useCallback((action: string) => {
    if (!isInitialized) return;
    
    console.log('Recording action:', action);
    
    setAchievementProgress(prev => {
      const actions = { ...prev.actions };
      actions[action] = (actions[action] || 0) + 1;
      return { ...prev, actions };
    });
    
    setTimeout(() => {
      checkAchievements();
    }, 0);
  }, [checkAchievements, isInitialized]);

  // Clear new achievement notification
  const clearNewAchievement = useCallback(() => {
    setNewAchievement(null);
  }, []);

  return {
    achievements,
    progress,
    level,
    newAchievement,
    recordVisit,
    recordRead,
    recordAction,
    clearNewAchievement
  };
};