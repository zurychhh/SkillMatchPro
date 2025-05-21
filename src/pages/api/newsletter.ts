import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/lib/db';
import { z } from 'zod';

const newsletterSchema = z.object({
  email: z.string().email('Please provide a valid email address'),
  name: z.string().optional(),
  source: z.string().optional()
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Validate request body
    const validationResult = newsletterSchema.safeParse(req.body);
    
    if (!validationResult.success) {
      return res.status(400).json({ 
        message: 'Invalid data', 
        errors: validationResult.error.issues 
      });
    }
    
    const { email, name, source } = validationResult.data;

    const { db } = await connectToDatabase();
    
    // Check if email already exists
    const existingSubscriber = await db.collection('newsletterSubscribers').findOne({ email });
    
    if (existingSubscriber) {
      return res.status(409).json({ message: 'You are already subscribed to our newsletter' });
    }
    
    // Create new subscriber
    await db.collection('newsletterSubscribers').insertOne({
      email,
      name: name || '',
      source: source || 'website',
      subscribed: true,
      subscribedAt: new Date(),
      confirmedAt: null,
      lastEmailSent: null
    });
    
    // In a real application, you would typically send a confirmation email here
    
    return res.status(201).json({ 
      success: true,
      message: 'Successfully subscribed to the newsletter'
    });
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
