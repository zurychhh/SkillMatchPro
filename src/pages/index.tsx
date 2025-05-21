import React, { useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import NewHero from '@/components/home/NewHero';
import { useAchievements } from '@/hooks/useAchievements';

const Home: NextPage = () => {
  const { recordVisit } = useAchievements();

  // Record homepage visit for achievement tracking
  useEffect(() => {
    recordVisit('homepage');
  }, [recordVisit]);

  return (
    <>
      <Head>
        <title>Oleksiak Consult - Professional Business Consulting</title>
        <meta name="description" content="Expert business consulting services tailored to help your organization grow, innovate, and succeed." />
      </Head>
      <MainLayout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <NewHero />
        </motion.div>
      </MainLayout>
    </>
  );
};

export default Home;
