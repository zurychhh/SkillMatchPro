import { useContext, useEffect } from 'react';
import { AchievementContext } from '@/context/AchievementContext';

export const useAchievements = () => {
  const context = useContext(AchievementContext);
  
  if (!context) {
    throw new Error('useAchievements must be used within an AchievementProvider');
  }
  
  // Log only in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Achievement progress:', context.progress);
      console.log('Achievement level:', context.level);
    }
  }, [context.progress, context.level]);
  
  // Format achievement data for display
  const getAchievementsByLevel = () => {
    const result = {
      Explorer: context.achievements.filter(a => a.level === 'Explorer'),
      Strategist: context.achievements.filter(a => a.level === 'Strategist'),
      Partner: context.achievements.filter(a => a.level === 'Partner'),
    };
    
    return result;
  };
  
  // Calculate completion percentage for each level
  const getLevelCompletionPercentages = () => {
    const achievementsByLevel = getAchievementsByLevel();
    
    return {
      Explorer: calculateLevelPercentage(achievementsByLevel.Explorer),
      Strategist: calculateLevelPercentage(achievementsByLevel.Strategist),
      Partner: calculateLevelPercentage(achievementsByLevel.Partner),
    };
  };
  
  // Calculate completion percentage for achievements in a level
  const calculateLevelPercentage = (levelAchievements: any[]) => {
    if (!levelAchievements.length) return 0;
    
    const completedCount = levelAchievements.filter(a => a.completed).length;
    return Math.round((completedCount / levelAchievements.length) * 100);
  };
  
  // Get only completed achievements
  const getCompletedAchievements = () => {
    return context.achievements.filter(a => a.completed);
  };
  
  // Get achievement by ID
  const getAchievementById = (id: string) => {
    return context.achievements.find(a => a.id === id);
  };
  
  // Is a specific achievement completed?
  const isAchievementCompleted = (id: string) => {
    const achievement = getAchievementById(id);
    return achievement?.completed || false;
  };
  
  return {
    ...context,
    getAchievementsByLevel,
    getLevelCompletionPercentages,
    getCompletedAchievements,
    getAchievementById,
    isAchievementCompleted,
  };
};
