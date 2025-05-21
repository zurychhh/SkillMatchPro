import { pgTable, serial, text, varchar, timestamp, integer, boolean, primaryKey } from 'drizzle-orm/pg-core';

// Users table - stores user information and achievement progress
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  userId: varchar('user_id', { length: 255 }).notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  lastActive: timestamp('last_active').defaultNow().notNull(),
  progress: integer('progress').default(0).notNull(),
  level: varchar('level', { length: 50 }).default('Explorer').notNull()
});

// Achievements table - stores available achievements
export const achievements = pgTable('achievements', {
  id: serial('id').primaryKey(),
  achievementId: varchar('achievement_id', { length: 255 }).notNull().unique(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description').notNull(),
  points: integer('points').notNull(),
  level: varchar('level', { length: 50 }).notNull(),
  criteria: text('criteria').notNull() // JSON string of criteria
});

// User achievements - tracks which achievements each user has completed
export const userAchievements = pgTable('user_achievements', {
  id: serial('id').primaryKey(),
  userId: varchar('user_id', { length: 255 }).notNull().references(() => users.userId),
  achievementId: varchar('achievement_id', { length: 255 }).notNull().references(() => achievements.achievementId),
  completedAt: timestamp('completed_at').defaultNow().notNull()
});

// Achievement progress - tracks user's progress towards achievements
export const achievementProgress = pgTable('achievement_progress', {
  id: serial('id').primaryKey(),
  userId: varchar('user_id', { length: 255 }).notNull().references(() => users.userId),
  visits: text('visits').default('{}').notNull(), // JSON string of page visits
  reads: text('reads').default('[]').notNull(), // JSON string of blog posts read
  actions: text('actions').default('{}').notNull() // JSON string of actions taken
});

// Blog posts table
export const blogPosts = pgTable('blog_posts', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  excerpt: text('excerpt').notNull(),
  content: text('content').notNull(),
  coverImage: varchar('cover_image', { length: 255 }),
  author: varchar('author', { length: 255 }).notNull(),
  publishedAt: timestamp('published_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at'),
  readTime: integer('read_time')
});

// Blog post tags
export const blogTags = pgTable('blog_tags', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull().unique()
});

// Blog post to tags relationship
export const blogPostTags = pgTable('blog_post_tags', {
  postId: integer('post_id').notNull().references(() => blogPosts.id),
  tagId: integer('tag_id').notNull().references(() => blogTags.id),
}, (t) => ({
  pk: primaryKey({ columns: [t.postId, t.tagId] })
}));

// Newsletter subscribers
export const newsletterSubscribers = pgTable('newsletter_subscribers', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  name: varchar('name', { length: 255 }),
  source: varchar('source', { length: 100 }),
  subscribed: boolean('subscribed').default(true).notNull(),
  subscribedAt: timestamp('subscribed_at').defaultNow().notNull(),
  confirmedAt: timestamp('confirmed_at'),
  lastEmailSent: timestamp('last_email_sent')
});

// Contact form submissions
export const contactSubmissions = pgTable('contact_submissions', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  company: varchar('company', { length: 255 }),
  phone: varchar('phone', { length: 50 }),
  message: text('message').notNull(),
  submittedAt: timestamp('submitted_at').defaultNow().notNull(),
  status: varchar('status', { length: 50 }).default('new').notNull()
});