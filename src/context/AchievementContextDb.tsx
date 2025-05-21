import React, { createContext, useContext, ReactNode } from 'react';
import { useAchievementsDb } from '@/hooks/useAchievementsDb';
import { AchievementContextType } from '@/types';

// Default context values
const defaultContextValue: AchievementContextType = {
  achievements: [],
  progress: 0,
  level: 'Explorer',
  newAchievement: null,
  recordVisit: () => {},
  recordRead: () => {},
  recordAction: () => {}
};

// Create the context
export const AchievementContext = createContext<AchievementContextType>(defaultContextValue);

// Context provider component
export const AchievementProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Use our custom hook to manage achievement state
  const {
    achievements,
    progress,
    level,
    newAchievement,
    recordVisit,
    recordRead,
    recordAction,
    clearNewAchievement
  } = useAchievementsDb();

  // Log current achievement progress (for development)
  React.useEffect(() => {
    console.log('Achievement progress:', progress);
    console.log('Achievement level:', level);
  }, [progress, level]);

  // Context value to be provided
  const contextValue = {
    achievements,
    progress,
    level,
    newAchievement,
    recordVisit,
    recordRead,
    recordAction,
    clearNewAchievement
  };

  return (
    <AchievementContext.Provider value={contextValue}>
      {children}
    </AchievementContext.Provider>
  );
};

// Custom hook for consuming the context
export const useAchievementContext = () => useContext(AchievementContext);