// Achievement levels
export const ACHIEVEMENT_LEVELS = {
  EXPLORER: 'Explorer',
  STRATEGIST: 'Strategist',
  PARTNER: 'Partner',
};

// Achievement level thresholds (as percentages)
export const LEVEL_THRESHOLDS = {
  EXPLORER: 0,
  STRATEGIST: 33.3,
  PARTNER: 66.6,
};

// Default achievement definitions
export const DEFAULT_ACHIEVEMENTS = [
  {
    id: 'explore_homepage',
    title: 'First Exploration',
    description: 'Visit the homepage for the first time',
    points: 5,
    level: ACHIEVEMENT_LEVELS.EXPLORER,
    criteria: { visits: { homepage: 1 } },
  },
  {
    id: 'services_explorer',
    title: 'Service Explorer',
    description: 'Learn about our services',
    points: 10,
    level: ACHIEVEMENT_LEVELS.EXPLORER,
    criteria: { visits: { services: 1 } },
  },
  {
    id: 'blog_reader',
    title: 'Blog Reader',
    description: 'Read your first blog post',
    points: 15,
    level: ACHIEVEMENT_LEVELS.EXPLORER,
    criteria: { reads: 1 },
  },
  {
    id: 'knowledge_seeker',
    title: 'Knowledge Seeker',
    description: 'View the blog index page',
    points: 10,
    level: ACHIEVEMENT_LEVELS.EXPLORER,
    criteria: { visits: { blog: 1 } },
  },
  {
    id: 'service_deep_dive',
    title: 'Service Deep Dive',
    description: 'Explore multiple services in detail',
    points: 20,
    level: ACHIEVEMENT_LEVELS.STRATEGIST,
    criteria: { actions: { service_view: 3 } },
  },
  {
    id: 'newsletter_subscriber',
    title: 'Informed Strategist',
    description: 'Subscribe to our newsletter',
    points: 25,
    level: ACHIEVEMENT_LEVELS.STRATEGIST,
    criteria: { actions: { newsletter_subscribe: 1 } },
  },
  {
    id: 'engaged_reader',
    title: 'Engaged Reader',
    description: 'Read 3 blog articles',
    points: 30,
    level: ACHIEVEMENT_LEVELS.STRATEGIST,
    criteria: { reads: 3 },
  },
  {
    id: 'site_explorer',
    title: 'Site Explorer',
    description: 'Visit all main pages of the website',
    points: 30,
    level: ACHIEVEMENT_LEVELS.STRATEGIST,
    criteria: { 
      visits: { 
        homepage: 1, 
        services: 1, 
        about: 1, 
        blog: 1, 
        contact: 1 
      } 
    },
  },
  {
    id: 'contact_made',
    title: 'Connection Established',
    description: 'Reach out via the contact form',
    points: 40,
    level: ACHIEVEMENT_LEVELS.PARTNER,
    criteria: { actions: { contact_form_submit: 1 } },
  },
  {
    id: 'content_enthusiast',
    title: 'Content Enthusiast',
    description: 'Read 5 blog articles',
    points: 45,
    level: ACHIEVEMENT_LEVELS.PARTNER,
    criteria: { reads: 5 },
  },
  {
    id: 'social_connector',
    title: 'Social Connector',
    description: 'Visit our social media profiles',
    points: 35,
    level: ACHIEVEMENT_LEVELS.PARTNER,
    criteria: { actions: { social_click: 1 } },
  },
];

// Total available achievement points (used for progress calculation)
export const TOTAL_ACHIEVEMENT_POINTS = DEFAULT_ACHIEVEMENTS.reduce(
  (total, achievement) => total + achievement.points, 
  0
);

// Page and section paths
export const PATHS = {
  HOME: '/',
  SERVICES: '/services',
  ABOUT: '/about',
  BLOG: '/blog',
  CONTACT: '/contact',
};

// API endpoints
export const API_ENDPOINTS = {
  ACHIEVEMENTS: '/api/simple-achievements',
  NEWSLETTER: '/api/newsletter',
  BLOG: '/api/blog',
};

// Local storage keys
export const STORAGE_KEYS = {
  USER_ID: 'oleksiak_user_id',
  ACHIEVEMENTS: 'oleksiak_achievements',
  LEVEL: 'oleksiak_level',
  PROGRESS: 'oleksiak_progress',
};
