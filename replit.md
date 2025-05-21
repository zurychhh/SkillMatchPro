# Oleksiak Consult - System Architecture Guide

## Overview

Oleksiak Consult is a business consulting website built with Next.js. The application features a modern frontend with Tailwind CSS styling, animations using Framer Motion, and MongoDB integration for data storage. The site includes standard pages like Home, Services, About, Blog, and Contact, with a unique achievement system that tracks user engagement.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

This Next.js application follows a standard file structure with `/src` containing the core application code. The architecture is designed around the following principles:

1. **Component-Based UI**: The UI is built using reusable React components organized by function
2. **Page-based Routing**: Leveraging Next.js for file-based routing
3. **MongoDB Integration**: For data persistence of user achievements, blog posts, and newsletter subscriptions
4. **Achievement System**: A gamification system that tracks user engagement and provides rewards
5. **Responsive Design**: Using Tailwind CSS for a mobile-first approach

### Key Technologies

- **Frontend**: Next.js 15.x, React 19.x, TypeScript
- **Styling**: Tailwind CSS 4.x with custom theme configuration
- **State Management**: React Context API and React Query
- **Form Management**: React Hook Form with Zod for validation
- **Animations**: Framer Motion
- **UI Components**: Radix UI primitives
- **Database**: MongoDB
- **Icons**: Lucide React
- **Charts**: Recharts (for potential data visualization)

## Key Components

### Frontend Components

1. **Layout Components** (`/src/components/layout/`)
   - `MainLayout.tsx`: Wraps all pages with Navbar and Footer
   - `Navbar.tsx`: Navigation bar with mobile responsiveness
   - `Footer.tsx`: Site footer with newsletter sign-up

2. **Home Page Components** (`/src/components/home/`)
   - `Hero.tsx`: Main landing section
   - `Services.tsx`: Service overview section
   - `Testimonials.tsx`: Client testimonials
   - `CallToAction.tsx`: CTA section for conversion

3. **Blog Components** (`/src/components/blog/`)
   - `BlogList.tsx`: Displays a grid of blog posts
   - `BlogCard.tsx`: Individual blog post card component

4. **Shared Components** (`/src/components/shared/`)
   - `Button.tsx`: Reusable button component
   - `NewsletterForm.tsx`: Form for newsletter subscriptions
   - `AchievementBadge.tsx`: Displays user achievement level
   - `AchievementNotification.tsx`: Shows achievement notifications

### Achievement System

The site features a unique achievement system that tracks user engagement:

1. **Achievement Levels**:
   - Explorer (0-33.3%)
   - Strategist (33.3%-66.6%)
   - Partner (66.6%-100%)

2. **Achievement Context** (`/src/context/AchievementContext.tsx`):
   - Manages achievement state
   - Provides methods for tracking user actions

3. **Achievement Hooks** (`/src/hooks/useAchievements.ts`):
   - Custom hook for accessing achievement functionality
   - Provides methods for recording visits, reads, and actions

### API Routes

1. **Achievement API** (`/src/pages/api/achievements.ts`):
   - Saves and updates user achievement progress

2. **Blog API** (`/src/pages/api/blog.ts`):
   - Fetches blog posts with pagination and filtering

3. **Newsletter API** (`/src/pages/api/newsletter.ts`):
   - Handles newsletter subscriptions

## Data Flow

### User Engagement Flow

1. User visits a page → `recordVisit()` is called via `useAchievements` hook
2. User reads a blog post → `recordRead()` is called
3. User performs an action (e.g., newsletter sign-up) → `recordAction()` is called
4. Achievement context checks if criteria for any achievements are met
5. If an achievement is unlocked, notification is displayed
6. Achievement data is stored in localStorage and synced with MongoDB

### Blog Post Flow

1. MongoDB stores blog posts
2. API routes fetch posts with pagination/filtering
3. Blog index page displays posts in a grid
4. Individual blog post pages render post content

### Newsletter Subscription Flow

1. User submits email via `NewsletterForm`
2. Form validation occurs via React Hook Form + Zod
3. API route stores subscription in MongoDB
4. Success/error feedback is shown to the user
5. Action is recorded in achievement system

## External Dependencies

### Frontend Libraries

- `@radix-ui/react-alert-dialog`: For accessible alert dialogs
- `@radix-ui/react-toast`: For toast notifications
- `@hookform/resolvers`: For form validation with Zod
- `@tailwindcss/*`: For Tailwind CSS utilities
- `@tanstack/react-query`: For server state management
- `framer-motion`: For animations
- `lucide-react`: For icons
- `react-hook-form`: For form handling
- `recharts`: For potential data visualization
- `zod`: For schema validation

### Backend Dependencies

- `mongodb`: For database connection and operations

## Deployment Strategy

The application is configured to run on Replit with:

1. **Environment Setup**:
   - Node.js 20 runtime
   - NPM for package management

2. **Build & Runtime**:
   - Development: `npm run dev` (configured in `.replit`)
   - Port: 5000 (configured in `.replit`)

3. **Database**:
   - MongoDB connection string should be stored as an environment variable
   - Connection pooling is implemented for efficient database access

4. **Potential Improvements**:
   - Add environment-specific configuration
   - Implement caching strategies for blog content
   - Add image optimization and CDN integration
   - Complete missing database schemas

## Notes for Implementation

1. The MongoDB connection needs to be properly configured with connection string
2. The achievement system is mostly implemented but needs testing
3. Some API endpoints may need additional error handling
4. The blog post functionality needs a CMS integration or admin panel
5. Newsletter functionality should be connected to an email service
6. The application is set up for Next.js but missing typical Next.js configuration files like `next.config.mjs`
7. Consider implementing Drizzle ORM with Postgres for improved type safety and query building