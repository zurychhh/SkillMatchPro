// This file contains API functions to access the database,
// ensuring database operations only happen on the server-side

/**
 * Update user achievement data in the PostgreSQL database
 */
export async function updateUserAchievements(userId: string, achievementsData: any, progressValue: number) {
  try {
    const response = await fetch('/api/simple-achievements', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        achievements: achievementsData,
        progress: progressValue,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to update achievements: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error updating achievements:', error);
    throw error;
  }
}

/**
 * Fetch blog posts from the PostgreSQL database
 */
export async function fetchBlogPosts(page = 1, limit = 10, tag?: string) {
  try {
    let url = `/api/blog-pg?page=${page}&limit=${limit}`;
    if (tag) {
      url += `&tag=${encodeURIComponent(tag)}`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch blog posts: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
}

/**
 * Subscribe to newsletter using PostgreSQL database
 */
export async function subscribeToNewsletter(email: string, name?: string, source?: string) {
  try {
    const response = await fetch('/api/newsletter-pg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        name,
        source,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to subscribe to newsletter: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    throw error;
  }
}

/**
 * Submit contact form data to PostgreSQL database
 */
export async function submitContactForm(formData: any) {
  try {
    const response = await fetch('/api/contact-pg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Failed to submit contact form: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}