import React, { useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { services } from '@/data/services';
import { useAchievements } from '@/hooks/useAchievements';

const ServicesPage: NextPage = () => {
  const { recordVisit } = useAchievements();

  // Record services page visit for achievement tracking
  useEffect(() => {
    recordVisit('services');
  }, [recordVisit]);

  return (
    <>
      <Head>
        <title>Our Services - Oleksiak Consult</title>
        <meta name="description" content="Explore our comprehensive range of business consulting services designed to drive growth, efficiency, and transformation for your organization." />
      </Head>
      <MainLayout>
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-center mb-6">Our Services</h1>
            <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              We offer a comprehensive range of consulting services tailored to meet your business needs and drive sustainable growth.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                >
                  <div className="h-48 bg-blue-600 flex items-center justify-center text-white">
                    <service.icon className="h-24 w-24" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-4">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Our Consulting Process</h2>
              
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg md:mr-6 mx-auto md:mx-0 mb-4 md:mb-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Discovery & Assessment</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We begin by deeply understanding your business, goals, and challenges through 
                      comprehensive discovery sessions and data analysis. This establishes a baseline and 
                      identifies key opportunity areas.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg md:mr-6 mx-auto md:mx-0 mb-4 md:mb-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Strategy Development</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Based on our findings, we collaborate with your team to develop tailored strategies 
                      and solutions that align with your business objectives, market position, and resources.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg md:mr-6 mx-auto md:mx-0 mb-4 md:mb-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Implementation</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We support you through the implementation phase, providing guidance, resources, and 
                      expertise to ensure successful execution of the agreed strategies and initiatives.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg md:mr-6 mx-auto md:mx-0 mb-4 md:mb-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Measurement & Optimization</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We continuously track progress against key metrics, making data-driven adjustments 
                      to optimize results and ensure sustained performance improvements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <button
                onClick={() => window.location.href = '/contact'}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-lg font-medium"
              >
                Schedule a Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </MainLayout>
    </>
  );
};

export default ServicesPage;
