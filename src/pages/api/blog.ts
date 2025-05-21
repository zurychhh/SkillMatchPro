import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { slug, limit = 10, page = 1, tag } = req.query;
      const { db } = await connectToDatabase();
      
      // Convert limit and page to numbers
      const limitNum = parseInt(limit as string, 10);
      const pageNum = parseInt(page as string, 10);
      const skip = (pageNum - 1) * limitNum;
      
      let query: any = {};
      
      // If slug is provided, get a specific post
      if (slug) {
        query.slug = slug;
        const post = await db.collection('blogPosts').findOne(query);
        
        if (!post) {
          return res.status(404).json({ message: 'Blog post not found' });
        }
        
        return res.status(200).json({ success: true, post });
      }
      
      // If tag is provided, filter by tag
      if (tag) {
        query.tags = tag;
      }
      
      // Get posts with pagination
      const posts = await db.collection('blogPosts')
        .find(query)
        .sort({ publishedAt: -1 })
        .skip(skip)
        .limit(limitNum)
        .toArray();
        
      // Get total count for pagination
      const totalPosts = await db.collection('blogPosts').countDocuments(query);
      
      return res.status(200).json({
        success: true,
        posts,
        pagination: {
          total: totalPosts,
          page: pageNum,
          limit: limitNum,
          pages: Math.ceil(totalPosts / limitNum)
        }
      });
    } catch (error) {
      console.error('Error retrieving blog posts:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
