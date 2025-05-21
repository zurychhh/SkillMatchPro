import { NextApiRequest, NextApiResponse } from 'next';
import { ACHIEVEMENT_LEVELS, DEFAULT_ACHIEVEMENTS } from '@/lib/constants';

// Sample achievements data (defaults)
const defaultAchievements = DEFAULT_ACHIEVEMENTS.map(a => ({
  ...a,
  completed: false
}));

// Simple in-memory store for user data (will be replaced with PostgreSQL in production)
const users = new Map();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { userId, achievements, progress } = req.body;

    if (!userId) {
      return res.status(400).json({ message: 'Missing userId field' });
    }

    // Determine achievement level based on progress
    let level = 'Explorer';
    if (progress >= 33.3 && progress < 66.6) {
      level = 'Strategist';
    } else if (progress >= 66.6) {
      level = 'Partner';
    }

    // Store user data in memory (would be database in production)
    users.set(userId, {
      userId,
      lastActive: new Date(),
      progress: progress || 0,
      level,
      achievements: achievements || {}
    });

    // For development, we'll just use default achievements
    // In production, this would come from the database
    const responseAchievements = defaultAchievements.map(achievement => {
      // Check if this achievement is completed in the user data
      const completed = achievements?.completed?.some(a => a.id === achievement.id) || false;
      return {
        ...achievement,
        completed
      };
    });
    
    // Return achievements data
    return res.status(200).json({
      success: true,
      userId,
      progress: progress || 0,
      level,
      achievements: responseAchievements
    });
  } catch (error) {
    console.error('Error processing achievements:', error);
    return res.status(500).json({
      success: false,
      message: 'Error processing achievements',
      error: String(error)
    });
  }
}