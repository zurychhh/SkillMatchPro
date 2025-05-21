import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { services } from '@/data/services';
import { useAchievements } from '@/hooks/useAchievements';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const { recordAction } = useAchievements();
  
  const handleServiceClick = (index: number) => {
    setActiveIndex(index);
    recordAction(`service_view_${services[index].title.toLowerCase().replace(/\s+/g, '_')}`);
  };
  
  const handleLearnMoreClick = (serviceId: string) => {
    recordAction(`service_learn_more_${serviceId}`);
    router.push(`/services#${serviceId}`);
  };
  
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Consulting Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We provide specialized consulting solutions tailored to address your unique business challenges.
            </p>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-lg overflow-hidden shadow-md cursor-pointer transition-all duration-300 ${
                activeIndex === index 
                  ? 'border-2 border-blue-500 transform scale-105' 
                  : 'border border-gray-200 dark:border-gray-700 hover:shadow-lg'
              }`}
              onClick={() => handleServiceClick(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10" />
              
              <div className="h-64 bg-gray-200 dark:bg-gray-700 relative">
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  {React.createElement(service.icon, { className: "h-20 w-20 text-white" })}
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-200 mb-4 text-sm line-clamp-2">{service.description}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLearnMoreClick(service.id);
                    }}
                    className="text-sm font-medium text-blue-300 hover:text-blue-200 transition"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={activeIndex}
          transition={{ duration: 0.3 }}
          className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-lg p-8"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
              <div className="bg-blue-600 text-white p-6 rounded-lg inline-flex">
                {React.createElement(services[activeIndex].icon, { className: "h-12 w-12" })}
              </div>
              <h3 className="text-2xl font-bold mt-4 mb-2">{services[activeIndex].title}</h3>
              <button
                onClick={() => handleLearnMoreClick(services[activeIndex].id)}
                className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                View Details
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <div className="md:w-2/3">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {services[activeIndex].description}
              </p>
              
              <h4 className="font-semibold mb-3">Key Benefits:</h4>
              <ul className="space-y-2">
                {services[activeIndex].benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
        
        <div className="mt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => router.push('/services')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition shadow-md hover:shadow-lg"
            >
              View All Services
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;