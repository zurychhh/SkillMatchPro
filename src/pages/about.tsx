import React, { useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { useAchievements } from '@/hooks/useAchievements';

const AboutPage: NextPage = () => {
  const { recordVisit } = useAchievements();

  // Record about page visit for achievement tracking
  useEffect(() => {
    recordVisit('about');
  }, [recordVisit]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Head>
        <title>About Us - Oleksiak Consult</title>
        <meta name="description" content="Learn about Oleksiak Consult, our mission, vision, and the expert team behind our business consulting services." />
      </Head>
      <MainLayout>
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-center mb-8">About Oleksiak Consult</h1>
            
            <div className="max-w-4xl mx-auto mb-16">
              <div className="rounded-lg overflow-hidden mb-8">
                <img 
                  src="https://pixabay.com/get/g96527d9205989aba8e7ba60cf0cd6e8d728baaa45e4b231c6841d3b8156baf2e87227db5b8b208ff50ce409f4decdc71eeb7929e80ec73f04f73e89488ad403f_1280.jpg" 
                  alt="Oleksiak Consult team" 
                  className="w-full h-auto"
                />
              </div>
              
              <p className="text-lg mb-6">
                Oleksiak Consult is a premier business consulting firm dedicated to helping organizations 
                achieve sustainable growth, operational excellence, and strategic innovation. Founded in 2010, 
                we've successfully partnered with businesses across industries to navigate complex challenges 
                and capitalize on emerging opportunities.
              </p>
              
              <p className="text-lg mb-6">
                Our approach combines deep industry expertise, data-driven insights, and a client-centric 
                philosophy that ensures we deliver tangible results aligned with your unique business goals.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We operate with transparency and honesty, prioritizing ethical practices in all our client engagements.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We constantly seek creative solutions and fresh perspectives to drive meaningful transformations.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Partnership</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We build collaborative relationships with our clients, working together as true partners in success.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://pixabay.com/get/g51c26c62bf5b3d64255bb1a085fe730ffe496252ab323ab701441414691753929c65cf9aa46afef8a0cda011b2b987969d8f84096a84d37850623068444e65c3_1280.jpg" 
                    alt="CEO Portrait" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">Anna Oleksiak</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">Founder & CEO</p>
                <p className="text-center text-gray-600 dark:text-gray-300">
                  With over 20 years of experience in strategic consulting, Anna leads our firm with 
                  visionary insight and a commitment to client excellence.
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://pixabay.com/get/g8ff92c435b5c017c7758eb71e806477653df0abd0a9de1657b38d93043c34235fb40fa75af1de2ed75a80fd5a8d7184bb97dee0b1a76472f8a1af81e5504f35b_1280.jpg" 
                    alt="COO Portrait" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">Mark Reynolds</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">Chief Operations Officer</p>
                <p className="text-center text-gray-600 dark:text-gray-300">
                  Mark brings extensive operational expertise and innovation to ensure we 
                  deliver consistently exceptional results for our clients.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg mb-6">
                To empower businesses with strategic insights and transformative solutions that drive 
                sustainable growth and competitive advantage in an ever-changing market landscape.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg">
                To be the trusted partner that organizations turn to for innovative business solutions 
                that create lasting value and enable them to thrive in the future.
              </p>
            </div>
          </motion.div>
        </div>
      </MainLayout>
    </>
  );
};

export default AboutPage;
