import { MongoClient, Db, Collection } from 'mongodb';

// Connection URI - use environment variable or default to local MongoDB
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/oleksiakConsult';

// MongoDB connection cache
let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

// Define a mock DB type that matches our needs
type MockDb = {
  collection: (name: string) => {
    findOne: () => Promise<null>;
    find: () => Promise<{ toArray: () => Promise<never[]> }>;
    insertOne: () => Promise<{ acknowledged: boolean; insertedId: string }>;
    updateOne: () => Promise<{ acknowledged: boolean; modifiedCount: number }>;
  };
};

// Connection return type
interface DbConnection {
  client: MongoClient | null;
  db: Db | MockDb;
}

// Connection options
const options = {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
};

// Function to connect to MongoDB
export async function connectToDatabase(): Promise<DbConnection> {
  // If we have cached connections, use them
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  try {
    // Connect to MongoDB
    const client = await MongoClient.connect(uri, options);
    const db = client.db();

    // Cache connections
    cachedClient = client;
    cachedDb = db;

    // Return connections
    return { client, db };
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    
    // Return mock client and db for development
    const mockDb: MockDb = {
      collection: () => ({
        findOne: async () => null,
        find: async () => ({ toArray: async () => [] }),
        insertOne: async () => ({ acknowledged: true, insertedId: 'mock-id' }),
        updateOne: async () => ({ acknowledged: true, modifiedCount: 1 })
      })
    };
    
    return { client: null, db: mockDb };
  }
}

// Function to close MongoDB connection (useful for tests)
export async function closeDatabase() {
  if (cachedClient) {
    await cachedClient.close();
    cachedClient = null;
    cachedDb = null;
    console.log('MongoDB connection closed');
  }
}

// Helper function to generate anonymous user ID
export function generateAnonymousId() {
  return 'anon_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

// Initialize database collections if needed
export async function initializeDatabase() {
  try {
    const { client, db } = await connectToDatabase();
    
    // Only initialize if we have a real MongoDB connection
    if (client && 'listCollections' in db) {
      try {
        // Create collections if they don't exist
        const collections = await db.listCollections().toArray();
        const collectionNames = collections.map((c: any) => c.name);
        
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
        const usersCollection = db.collection('users') as Collection;
        const newsletterCollection = db.collection('newsletterSubscribers') as Collection;
        const blogCollection = db.collection('blogPosts') as Collection;
        
        await usersCollection.createIndex({ userId: 1 }, { unique: true });
        await newsletterCollection.createIndex({ email: 1 }, { unique: true });
        await blogCollection.createIndex({ slug: 1 }, { unique: true });
      } catch (error) {
        console.error('Error initializing database collections:', error);
      }
    } else {
      console.log('Using mock database - skipping initialization');
    }
    
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}