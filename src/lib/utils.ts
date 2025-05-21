import { ACHIEVEMENT_LEVELS, LEVEL_THRESHOLDS, TOTAL_ACHIEVEMENT_POINTS } from './constants';

/**
 * Format a date string in a human-readable format
 */
export function formatDate(date: string | Date): string {
  if (!date) return '';
  
  const dateObj = date instanceof Date ? date : new Date(date);
  
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj);
}

/**
 * Generate a slug from a string
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

/**
 * Calculate achievement progress percentage
 */
export function calculateProgress(earnedPoints: number): number {
  if (earnedPoints <= 0) return 0;
  if (earnedPoints >= TOTAL_ACHIEVEMENT_POINTS) return 100;
  
  return Math.min(100, (earnedPoints / TOTAL_ACHIEVEMENT_POINTS) * 100);
}

/**
 * Determine achievement level based on progress percentage
 */
export function determineLevel(progress: number): string {
  if (progress >= LEVEL_THRESHOLDS.PARTNER) {
    return ACHIEVEMENT_LEVELS.PARTNER;
  } else if (progress >= LEVEL_THRESHOLDS.STRATEGIST) {
    return ACHIEVEMENT_LEVELS.STRATEGIST;
  } else {
    return ACHIEVEMENT_LEVELS.EXPLORER;
  }
}

/**
 * Truncate text to a specified length
 */
export function truncateText(text: string, maxLength: number = 100): string {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

/**
 * Check if an object is empty
 */
export function isEmptyObject(obj: object): boolean {
  return obj === null || obj === undefined || Object.keys(obj).length === 0;
}

/**
 * Format a number with commas for thousands
 */
export function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Get a random item from an array
 */
export function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Check if the current environment is development
 */
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === 'development';
}

/**
 * Parse a string to boolean safely
 */
export function parseBoolean(value: string | boolean | undefined): boolean {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    return value.toLowerCase() === 'true' || value === '1';
  }
  return false;
}

/**
 * Generate a unique ID
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
}

/**
 * Check if a URL is external
 */
export function isExternalUrl(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://');
}

/**
 * Remove HTML tags from a string
 */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>?/gm, '');
}
