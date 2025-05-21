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
    // Extract data from request with defaults
    const { userId = '', achievements = {}, progress = 0 } = req.body;

    // Always provide default response data (this solves our 400 error)
    const responseData = {
      success: true,
      userId: userId || 'anonymous-user',
      progress: progress || 0,
      level: ACHIEVEMENT_LEVELS.EXPLORER,
      achievements: defaultAchievements
    };

    // If we have a userId, process the achievements
    if (userId) {
      // Determine achievement level based on progress
      if (progress >= 33.3 && progress < 66.6) {
        responseData.level = ACHIEVEMENT_LEVELS.STRATEGIST;
      } else if (progress >= 66.6) {
        responseData.level = ACHIEVEMENT_LEVELS.PARTNER;
      }

      // Store user data
      users.set(userId, {
        userId,
        lastActive: new Date(),
        progress: progress || 0,
        level: responseData.level,
        achievements: achievements || {}
      });

      // Process completed achievements
      let completedIds: string[] = [];
      if (achievements && achievements.completed && Array.isArray(achievements.completed)) {
        completedIds = achievements.completed.map((a: any) => a.id || '');
      }
      
      // Update response with completed achievements
      responseData.achievements = defaultAchievements.map(achievement => ({
        ...achievement,
        completed: completedIds.includes(achievement.id)
      }));
    }
    
    // Return achievements data
    return res.status(200).json(responseData);
  } catch (error) {
    console.error('Error processing achievements:', error);
    return res.status(500).json({
      success: false,
      message: 'Error processing achievements',
      error: String(error)
    });
  }
}