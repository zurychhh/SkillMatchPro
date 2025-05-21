// User type
export interface User {
  _id?: string;
  userId: string;
  createdAt: Date;
  lastActive: Date;
  achievements: Achievement[];
  progress: number;
  level: string;
}

// Achievement type
export interface Achievement {
  id: string;
  title: string;
  description: string;
  points: number;
  level: string; // 'Explorer', 'Strategist', 'Partner'
  criteria: AchievementCriteria;
  completed?: boolean;
  completedAt?: Date;
}

// Achievement criteria
export interface AchievementCriteria {
  visits?: Record<string, number>; // e.g., { homepage: 1, services: 2 }
  reads?: number; // Number of blog posts read
  actions?: Record<string, number>; // e.g., { newsletter_subscribe: 1 }
}

// Achievement progress data
export interface AchievementProgress {
  visits: Record<string, number>;
  reads: string[]; // Array of blog post IDs read
  actions: Record<string, number>;
}

// Blog post type
export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  author: string;
  publishedAt: Date | string;
  updatedAt?: Date | string;
  tags?: string[];
  readTime?: number;
}

// Newsletter subscriber
export interface NewsletterSubscriber {
  _id?: string;
  email: string;
  name?: string;
  source?: string;
  subscribed: boolean;
  subscribedAt: Date;
  confirmedAt?: Date | null;
  lastEmailSent?: Date | null;
}

// Service type
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  benefits: string[];
}

// SEO metadata
export interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    siteName?: string;
    images?: Array<{ url: string; alt?: string }>;
    type?: string;
  };
}

// Form submission response
export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  errors?: Record<string, string[]>;
}

// Achievement context type
export interface AchievementContextType {
  achievements: Achievement[];
  progress: number;
  level: string;
  newAchievement: Achievement | null;
  recordVisit: (page: string) => void;
  recordRead: (postId: string) => void;
  recordAction: (action: string) => void;
}

// Newsletter subscription hook return type
export interface UseNewsletterSubscriptionReturn {
  subscribe: (data: { email: string; name?: string }) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}
