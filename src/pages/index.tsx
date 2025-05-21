import React, { useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';
import NewsletterForm from '@/components/shared/NewsletterForm';
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
          <Hero />
          <Services />
          <Testimonials />
          <section className="py-16 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Stay Updated with Our Newsletter</h2>
              <div className="max-w-lg mx-auto">
                <NewsletterForm />
              </div>
            </div>
          </section>
          <CallToAction />
        </motion.div>
      </MainLayout>
    </>
  );
};

export default Home;
