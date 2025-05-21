import { useState } from 'react';
import { API_ENDPOINTS } from '@/lib/constants';
import { UseNewsletterSubscriptionReturn } from '@/types';

interface SubscriptionData {
  email: string;
  name?: string;
  source?: string;
}

export const useNewsletterSubscription = (): UseNewsletterSubscriptionReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const subscribe = async (data: SubscriptionData): Promise<void> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(API_ENDPOINTS.NEWSLETTER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          source: data.source || 'website',
        }),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to subscribe to newsletter');
      }
      
      // Success
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while subscribing');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };
  
  return {
    subscribe,
    isLoading,
    error,
  };
};
