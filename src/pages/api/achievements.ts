import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { userId, achievements, progress } = req.body;

    if (!userId || !achievements || !progress) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const { db } = await connectToDatabase();

    // Check if user exists
    try {
      const existingUser = await db.collection('users').findOne({ userId });

      if (!existingUser) {
        // Create new user with achievements
        await db.collection('users').insertOne({
          userId,
          createdAt: new Date(),
          lastActive: new Date(),
          achievements,
          progress
        });
      } else {
        // Update existing user achievements
        await db.collection('users').updateOne(
          { userId },
          { 
            $set: { 
              achievements,
              lastActive: new Date(),
              progress
            } 
          }
        );
      }
    } catch (error) {
      console.log('Error updating achievements:', error);
      // Continue with the API response even if database update fails
    }

    // Determine achievement level based on progress
    let level = 'Explorer';
    if (progress >= 33.3 && progress < 66.6) {
      level = 'Strategist';
    } else if (progress >= 66.6) {
      level = 'Partner';
    }

    return res.status(200).json({ 
      success: true, 
      level,
      progress 
    });
  } catch (error) {
    console.error('Error updating achievements:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
