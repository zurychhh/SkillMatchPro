import { MongoClient, Db } from 'mongodb';

// Connection URI
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/oleksiakConsult';

// MongoDB connection cache
let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

// Connection options
const options = {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
};

// Function to connect to MongoDB
export async function connectToDatabase() {
  // If we have cached connections, use them
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  // Connect to MongoDB
  const client = await MongoClient.connect(uri, options);
  const db = client.db();

  // Cache connections
  cachedClient = client;
  cachedDb = db;

  // Return connections
  return { client, db };
}

// Function to close MongoDB connection (useful for tests)
export async function closeDatabase() {
  if (cachedClient) {
    await cachedClient.close();
    cachedClient = null;
    cachedDb = null;
  }
}

// Create a unique ID for anonymous users
export function generateAnonymousId() {
  return 'anon_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

// Initialize database collections if needed
export async function initializeDatabase() {
  try {
    const { db } = await connectToDatabase();
    
    // Create collections if they don't exist
    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map(c => c.name);
    
    // Define required collections
    const requiredCollections = [
      'users',
      'achievements',
      'newsletterSubscribers',
      'blogPosts'
    ];
    
    // Create missing collections
    for (const collection of requiredCollections) {
      if (!collectionNames.includes(collection)) {
        await db.createCollection(collection);
        console.log(`Created collection: ${collection}`);
      }
    }
    
    // Create indexes for performance
    await db.collection('users').createIndex({ userId: 1 }, { unique: true });
    await db.collection('newsletterSubscribers').createIndex({ email: 1 }, { unique: true });
    await db.collection('blogPosts').createIndex({ slug: 1 }, { unique: true });
    
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}
