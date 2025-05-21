import { NextApiRequest, NextApiResponse } from 'next';
import { db, generateAnonymousId } from '@/server/storage';
import { users, userAchievements, achievementProgress, achievements as achievementsTable } from '@/shared/schema';
import { eq } from 'drizzle-orm';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { userId, achievements, progress } = req.body;

    if (!userId || !achievements || progress === undefined) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Check if user exists
    const existingUsers = await db.select().from(users).where(eq(users.userId, userId));
    const existingUser = existingUsers.length > 0 ? existingUsers[0] : null;

    // Determine achievement level based on progress
    let level = 'Explorer';
    if (progress >= 33.3 && progress < 66.6) {
      level = 'Strategist';
    } else if (progress >= 66.6) {
      level = 'Partner';
    }

    if (!existingUser) {
      // Create new user with achievements
      await db.insert(users).values({
        userId,
        createdAt: new Date(),
        lastActive: new Date(),
        progress,
        level
      });

      // Insert user's achievement progress
      const progressData = achievements.progress || { visits: {}, reads: [], actions: {} };
      await db.insert(achievementProgress).values({
        userId,
        visits: JSON.stringify(progressData.visits || {}),
        reads: JSON.stringify(progressData.reads || []),
        actions: JSON.stringify(progressData.actions || {})
      });

      // Insert completed achievements
      for (const achievement of achievements.completed || []) {
        await db.insert(userAchievements).values({
          userId,
          achievementId: achievement.id,
          completedAt: achievement.completedAt || new Date()
        });
      }
    } else {
      // Update existing user achievements
      await db.update(users)
        .set({ 
          lastActive: new Date(),
          progress,
          level
        })
        .where(eq(users.userId, userId));

      // Update achievement progress
      const progressData = achievements.progress || { visits: {}, reads: [], actions: {} };
      
      // Check if progress record exists
      const existingProgress = await db.select()
        .from(achievementProgress)
        .where(eq(achievementProgress.userId, userId));
      
      if (existingProgress.length > 0) {
        await db.update(achievementProgress)
          .set({
            visits: JSON.stringify(progressData.visits || {}),
            reads: JSON.stringify(progressData.reads || []),
            actions: JSON.stringify(progressData.actions || {})
          })
          .where(eq(achievementProgress.userId, userId));
      } else {
        await db.insert(achievementProgress).values({
          userId,
          visits: JSON.stringify(progressData.visits || {}),
          reads: JSON.stringify(progressData.reads || []),
          actions: JSON.stringify(progressData.actions || {})
        });
      }

      // Handle completed achievements
      // First, get existing user achievements
      const existingAchievements = await db.select()
        .from(userAchievements)
        .where(eq(userAchievements.userId, userId));
      
      const existingAchievementIds = existingAchievements.map(a => a.achievementId);
      
      // Add new achievements
      for (const achievement of achievements.completed || []) {
        if (!existingAchievementIds.includes(achievement.id)) {
          await db.insert(userAchievements).values({
            userId,
            achievementId: achievement.id,
            completedAt: achievement.completedAt || new Date()
          });
        }
      }
    }

    // Get all available achievements for response
    const allAchievements = await db.select().from(achievementsTable);
    
    // Transform the achievements data to match the expected format
    const formattedAchievements = allAchievements.map(achievement => ({
      id: achievement.achievementId,
      title: achievement.title,
      description: achievement.description,
      points: achievement.points,
      level: achievement.level,
      criteria: JSON.parse(achievement.criteria)
    }));

    // Get user's completed achievements
    const userCompletedAchievements = await db.select()
      .from(userAchievements)
      .where(eq(userAchievements.userId, userId));
    
    const completedAchievementIds = userCompletedAchievements.map(a => a.achievementId);

    // Add completed status to achievements
    const achievementsWithStatus = formattedAchievements.map(achievement => ({
      ...achievement,
      completed: completedAchievementIds.includes(achievement.id),
      completedAt: userCompletedAchievements.find(a => a.achievementId === achievement.id)?.completedAt
    }));

    return res.status(200).json({
      success: true,
      userId,
      progress,
      level,
      achievements: achievementsWithStatus
    });
  } catch (error) {
    console.error('Error updating achievements:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Error updating achievements', 
      error: String(error) 
    });
  }
}