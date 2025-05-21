import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useAchievements } from '@/hooks/useAchievements';

const Hero = () => {
  const router = useRouter();
  const { recordAction } = useAchievements();
  
  const handleServicesClick = () => {
    recordAction('hero_services_click');
    router.push('/services');
  };
  
  const handleContactClick = () => {
    recordAction('hero_contact_click');
    router.push('/contact');
  };
  
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Strategic Solutions for <span className="text-blue-600 dark:text-blue-400">Business Excellence</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
                Expert consulting services tailored to help your organization achieve sustainable growth and competitive advantage.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={handleServicesClick}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300 shadow-md hover:shadow-lg text-center"
                >
                  Our Services
                </button>
                
                <button
                  onClick={handleContactClick}
                  className="px-8 py-3 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-300 dark:border-gray-700 transition duration-300 text-center"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>
          
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://pixabay.com/get/g9728933d63eef8190e26f87aebf5bdb2cd359135ff7db4b80078b571976552644b84b151e45149ed8eeb4051ed4781ec5b2c113ea337104e72ba7605c2034220_1280.jpg"
                  alt="Business consultation meeting"
                  className="w-full h-auto"
                />
              </div>
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg md:max-w-xs hidden md:block"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    <svg className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Client Success Rate</p>
                    <p className="text-2xl font-bold">94%</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <p className="text-center text-gray-500 dark:text-gray-400 mb-6">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            {/* Company logos would go here - using text placeholders instead of images */}
            <div className="text-xl font-bold text-gray-400">ACME Corp</div>
            <div className="text-xl font-bold text-gray-400">TechGlobal</div>
            <div className="text-xl font-bold text-gray-400">Innovex</div>
            <div className="text-xl font-bold text-gray-400">FutureSys</div>
            <div className="text-xl font-bold text-gray-400">Quantum Inc</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
