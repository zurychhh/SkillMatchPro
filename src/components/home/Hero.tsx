import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useAchievements } from '@/hooks/useAchievements';

const Hero = () => {
  const router = useRouter();
  const { recordAction } = useAchievements();
  
  const handleContactClick = () => {
    recordAction('hero_contact_click');
    router.push('/contact');
  };

  const handleRequestDemoClick = () => {
    recordAction('hero_demo_click');
    router.push('/contact');
  };
  
  return (
    <section className="w-full h-[828px] bg-blue-950 overflow-hidden relative">
      {/* Background patterns and effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full"></div>
      </div>
      
      {/* Gradient circle */}
      <div className="absolute w-[600px] h-[600px] left-0 top-[228px] opacity-20 bg-gradient-to-r from-purple-600/30 via-indigo-500/20 to-transparent rounded-full"></div>
      
      {/* Vertical lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-0.5 h-48 absolute left-[216px] top-[82.80px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="w-0.5 h-36 absolute left-[360px] top-[248.39px] bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>
        <div className="w-0.5 h-44 absolute left-[504px] top-[165.59px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
        <div className="w-0.5 h-56 absolute left-[648px] top-[124.19px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="w-0.5 h-44 absolute left-[792px] top-[207px] bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>
        <div className="w-0.5 h-48 absolute left-[936px] top-[82.80px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
        <div className="w-0.5 h-40 absolute left-[1080px] top-[248.39px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="w-0.5 h-48 absolute left-[1224px] top-[165.59px] bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>
      </div>
      
      {/* Main content container */}
      <div className="w-full max-w-[1280px] h-[668px] mx-auto px-6 pt-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-start">
          {/* Left content - heading and features */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 lg:pr-8 mb-12 lg:mb-0"
          >
            <h1 className="text-5xl font-bold text-white leading-tight mb-12">
              Bridge The Gap Between Technical Innovation & Customer Acquisition
            </h1>
            
            <div className="space-y-6 mb-12">
              {/* Feature 1 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full shadow-[0px_10px_15px_0px_rgba(155,85,198,0.20)] shadow-[0px_4px_6px_0px_rgba(155,85,198,0.20)] flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white">
                    <path d="M2 2C2 1.44687 1.55313 1 1 1C0.446875 1 0 1.44687 0 2V12.5C0 13.8813 1.11875 15 2.5 15H15C15.5531 15 16 14.5531 16 14C16 13.4469 15.5531 13 15 13H2.5C2.225 13 2 12.775 2 12.5V2ZM14.7063 4.70625C15.0969 4.31563 15.0969 3.68125 14.7063 3.29063C14.3156 2.9 13.6812 2.9 13.2906 3.29063L10 6.58437L8.20625 4.79063C7.81563 4.4 7.18125 4.4 6.79063 4.79063L3.29063 8.29062C2.9 8.68125 2.9 9.31563 3.29063 9.70625C3.68125 10.0969 4.31563 10.0969 4.70625 9.70625L7.5 6.91562L9.29375 8.70937C9.68438 9.1 10.3188 9.1 10.7094 8.70937L14.7063 4.70625Z" fill="white"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-lg text-white">
                    <span className="font-bold">42% reduction</span> in acquisition costs
                  </p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full shadow-[0px_10px_15px_0px_rgba(155,85,198,0.20)] shadow-[0px_4px_6px_0px_rgba(155,85,198,0.20)] flex items-center justify-center">
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-4 text-white">
                    <path d="M0 2.5V7.17187C0 7.70312 0.209375 8.2125 0.584375 8.5875L6.08437 14.0875C6.86562 14.8687 8.13125 14.8687 8.9125 14.0875L13.0844 9.91562C13.8656 9.13437 13.8656 7.86875 13.0844 7.0875L7.58437 1.5875C7.20937 1.2125 6.7 1.00312 6.16875 1.00312H1.5C0.671875 0.999999 0 1.67187 0 2.5ZM3.5 3.5C3.76522 3.5 4.01957 3.60536 4.20711 3.79289C4.39464 3.98043 4.5 4.23478 4.5 4.5C4.5 4.76522 4.39464 5.01957 4.20711 5.20711C4.01957 5.39464 3.76522 5.5 3.5 5.5C3.23478 5.5 2.98043 5.39464 2.79289 5.20711C2.60536 5.01957 2.5 4.76522 2.5 4.5C2.5 4.23478 2.60536 3.98043 2.79289 3.79289C2.98043 3.60536 3.23478 3.5 3.5 3.5Z" fill="white"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-lg text-white">
                    <span className="font-bold">Performance-based</span> pricing
                  </p>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full shadow-[0px_10px_15px_0px_rgba(155,85,198,0.20)] shadow-[0px_4px_6px_0px_rgba(155,85,198,0.20)] flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white">
                    <path d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.18125 5.53125 7.47188L7 8.94063L10.4687 5.47188C10.7625 5.18125 11.2375 5.18125 11.5281 5.47188C11.8188 5.7625 11.8219 6.2375 11.5312 6.53125Z" fill="white"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-lg text-white">
                    <span className="font-bold">Positive ROI</span> guaranteed
                  </p>
                </div>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleRequestDemoClick}
                className="w-60 h-14 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg shadow-[0px_10px_15px_0px_rgba(155,85,198,0.20)] shadow-[0px_4px_6px_0px_rgba(155,85,198,0.20)] flex items-center justify-center text-white font-medium transition-all hover:shadow-lg"
              >
                <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-4 mr-2">
                  <path d="M2 0C0.896875 0 0 0.896875 0 2V14C0 15.1031 0.896875 16 2 16H10C11.1031 16 12 15.1031 12 14V2C12 0.896875 11.1031 0 10 0H2ZM3 2H9C9.55313 2 10 2.44688 10 3V4C10 4.55312 9.55313 5 9 5H3C2.44688 5 2 4.55312 2 4V3C2 2.44688 2.44688 2 3 2ZM3 7C3.26522 7 3.51957 7.10536 3.70711 7.29289C3.89464 7.48043 4 7.73478 4 8C4 8.26522 3.89464 8.51957 3.70711 8.70711C3.51957 8.89464 3.26522 9 3 9C2.73478 9 2.48043 8.89464 2.29289 8.70711C2.10536 8.51957 2 8.26522 2 8C2 7.73478 2.10536 7.48043 2.29289 7.29289C2.48043 7.10536 2.73478 7 3 7ZM6 7H9C9.26522 7 9.51957 7.10536 9.70711 7.29289C9.89464 7.48043 10 7.73478 10 8C10 8.26522 9.89464 8.51957 9.70711 8.70711C9.51957 8.89464 9.26522 9 9 9H6C5.73478 9 5.48043 8.89464 5.29289 8.70711C5.10536 8.51957 5 8.26522 5 8C5 7.73478 5.10536 7.48043 5.29289 7.29289C5.48043 7.10536 5.73478 7 6 7ZM3 11C3.26522 11 3.51957 11.1054 3.70711 11.2929C3.89464 11.4804 4 11.7348 4 12C4 12.2652 3.89464 12.5196 3.70711 12.7071C3.51957 12.8946 3.26522 13 3 13C2.73478 13 2.48043 12.8946 2.29289 12.7071C2.10536 12.5196 2 12.2652 2 12C2 11.7348 2.10536 11.4804 2.29289 11.2929C2.48043 11.1054 2.73478 11 3 11ZM6 11H9C9.26522 11 9.51957 11.1054 9.70711 11.2929C9.89464 11.4804 10 11.7348 10 12C10 12.2652 9.89464 12.5196 9.70711 12.7071C9.51957 12.8946 9.26522 13 9 13H6C5.73478 13 5.48043 12.8946 5.29289 12.7071C5.10536 12.5196 5 12.2652 5 12C5 11.7348 5.10536 11.4804 5.29289 11.2929C5.48043 11.1054 5.73478 11 6 11Z" fill="white"/>
                </svg>
                Request Demo
              </button>
              
              <button
                onClick={handleContactClick}
                className="w-60 h-14 text-white font-medium border border-white rounded-lg flex items-center justify-center transition-all hover:bg-white/10"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
          
          {/* Right content - dashboard image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="rounded-lg overflow-hidden bg-gradient-to-r from-indigo-700 to-blue-600 p-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-xl">
                  <div className="h-12 bg-indigo-800/50 rounded-md mb-4 flex items-center px-4">
                    <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
                    <div className="h-6 w-40 bg-white/20 rounded-md ml-auto"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="h-32 bg-white/20 rounded-lg"></div>
                    <div className="h-32 bg-white/20 rounded-lg"></div>
                  </div>
                  <div className="h-40 bg-white/20 rounded-lg mb-4"></div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-20 bg-white/20 rounded-lg"></div>
                    <div className="h-20 bg-white/20 rounded-lg"></div>
                    <div className="h-20 bg-white/20 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
