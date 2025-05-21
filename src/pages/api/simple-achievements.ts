import { NextApiRequest, NextApiResponse } from 'next';
import { ACHIEVEMENT_LEVELS, DEFAULT_ACHIEVEMENTS } from '@/lib/constants';

// Sample achievements data (default values)
const defaultAchievements = DEFAULT_ACHIEVEMENTS.map(a => ({
  ...a,
  completed: false
}));

// Simple in-memory store for user data
const users = new Map();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    // Extract data from request
    const { userId, achievements, progress } = req.body;

    // Validate required fields
    if (!userId) {
      return res.status(400).json({ success: false, message: 'Missing userId field' });
    }

    // Determine achievement level based on progress
    let level = ACHIEVEMENT_LEVELS.EXPLORER;
    if (progress >= 33.3 && progress < 66.6) {
      level = ACHIEVEMENT_LEVELS.STRATEGIST;
    } else if (progress >= 66.6) {
      level = ACHIEVEMENT_LEVELS.PARTNER;
    }

    // Store or update user data
    users.set(userId, {
      userId,
      lastActive: new Date(),
      progress: progress || 0,
      level,
      achievements: achievements || {}
    });

    // Process achievements data for response
    const completedIds = achievements?.completed?.map(a => a.id) || [];
    
    const responseAchievements = defaultAchievements.map(achievement => ({
      ...achievement,
      completed: completedIds.includes(achievement.id)
    }));
    
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