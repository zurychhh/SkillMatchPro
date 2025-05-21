import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useAchievements } from '@/hooks/useAchievements';

const CallToAction = () => {
  const router = useRouter();
  const { recordAction } = useAchievements();
  
  const handleConsultationClick = () => {
    recordAction('cta_consultation_click');
    router.push('/contact');
  };
  
  return (
    <section className="py-20 bg-blue-600 dark:bg-blue-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Schedule a free consultation with our expert consultants and discover how we can help your organization reach its full potential.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={handleConsultationClick}
              className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition shadow-md hover:shadow-lg"
            >
              Schedule a Consultation
            </button>
            
            <button
              onClick={() => {
                recordAction('cta_services_click');
                router.push('/services');
              }}
              className="px-8 py-4 bg-transparent text-white font-medium rounded-lg border border-white hover:bg-blue-700 dark:hover:bg-blue-900 transition"
            >
              Explore Our Services
            </button>
          </div>
          
          {/* Success Stats */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/10 rounded-lg p-6"
            >
              <div className="text-4xl font-bold text-white mb-2">200+</div>
              <p className="text-blue-100">Successful Projects</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 rounded-lg p-6"
            >
              <div className="text-4xl font-bold text-white mb-2">94%</div>
              <p className="text-blue-100">Client Satisfaction</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/10 rounded-lg p-6"
            >
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <p className="text-blue-100">Years of Experience</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
