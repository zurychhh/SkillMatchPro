import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AchievementNotification from '@/components/shared/AchievementNotification';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <AchievementNotification />
      <Footer />
    </div>
  );
};

export default MainLayout;
