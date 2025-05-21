import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProps } from 'next/app';
import { AchievementProvider } from '@/context/AchievementContextDb';
import '@/styles/globals.css';
import { Toaster } from '@/components/ui/toaster';

// Create a client for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  // Sync with AIToolkit integration if available
  useEffect(() => {
    // Check if AIToolkit context providers exist in window
    // Integration will be done here when the AIToolkit is available
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AchievementProvider>
        <Component {...pageProps} />
        <Toaster />
      </AchievementProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
