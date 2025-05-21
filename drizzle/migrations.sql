-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  last_active TIMESTAMP NOT NULL DEFAULT NOW(),
  progress INTEGER NOT NULL DEFAULT 0,
  level VARCHAR(50) NOT NULL DEFAULT 'Explorer'
);

-- Create achievements table
CREATE TABLE IF NOT EXISTS achievements (
  id SERIAL PRIMARY KEY,
  achievement_id VARCHAR(255) NOT NULL UNIQUE,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  points INTEGER NOT NULL,
  level VARCHAR(50) NOT NULL,
  criteria TEXT NOT NULL
);

-- Create user_achievements table to track completed achievements
CREATE TABLE IF NOT EXISTS user_achievements (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR(255) NOT NULL REFERENCES users(user_id),
  achievement_id VARCHAR(255) NOT NULL REFERENCES achievements(achievement_id),
  completed_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Create achievement_progress table
CREATE TABLE IF NOT EXISTS achievement_progress (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR(255) NOT NULL REFERENCES users(user_id),
  visits TEXT NOT NULL DEFAULT '{}',
  reads TEXT NOT NULL DEFAULT '[]',
  actions TEXT NOT NULL DEFAULT '{}'
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  cover_image VARCHAR(255),
  author VARCHAR(255) NOT NULL,
  published_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP,
  read_time INTEGER
);

-- Create blog_tags table
CREATE TABLE IF NOT EXISTS blog_tags (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE
);

-- Create blog_post_tags relationship table
CREATE TABLE IF NOT EXISTS blog_post_tags (
  post_id INTEGER NOT NULL REFERENCES blog_posts(id),
  tag_id INTEGER NOT NULL REFERENCES blog_tags(id),
  PRIMARY KEY (post_id, tag_id)
);

-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  name VARCHAR(255),
  source VARCHAR(100),
  subscribed BOOLEAN NOT NULL DEFAULT TRUE,
  subscribed_at TIMESTAMP NOT NULL DEFAULT NOW(),
  confirmed_at TIMESTAMP,
  last_email_sent TIMESTAMP
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  phone VARCHAR(50),
  message TEXT NOT NULL,
  submitted_at TIMESTAMP NOT NULL DEFAULT NOW(),
  status VARCHAR(50) NOT NULL DEFAULT 'new'
);