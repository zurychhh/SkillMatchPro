import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAchievements } from '@/hooks/useAchievements';

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    quote: "Oleksiak Consult transformed our business strategy, resulting in a 35% growth in revenue within just six months. Their insights were game-changing.",
    author: "Sarah Johnson",
    position: "CEO, TechVision Global",
    company: "TechVision Global",
  },
  {
    id: 2,
    quote: "The operational efficiency improvements implemented by the Oleksiak team reduced our costs by 22% while improving quality metrics across all departments.",
    author: "Michael Chen",
    position: "COO, Innovex Manufacturing",
    company: "Innovex Manufacturing",
  },
  {
    id: 3,
    quote: "Their market research was incredibly thorough and provided us with actionable insights that helped us successfully enter three new markets.",
    author: "Alexandra Rodriguez",
    position: "VP of Marketing, Nexus Brands",
    company: "Nexus Brands",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { recordAction } = useAchievements();
  
  const handleTestimonialChange = (index: number) => {
    setActiveIndex(index);
    recordAction('testimonial_view');
  };
  
  const nextTestimonial = () => {
    const newIndex = (activeIndex + 1) % testimonials.length;
    handleTestimonialChange(newIndex);
  };
  
  const prevTestimonial = () => {
    const newIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
    handleTestimonialChange(newIndex);
  };
  
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience working with Oleksiak Consult.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-blue-500 opacity-20">
              <svg className="h-16 w-16" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10,8H6a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h4v6H6a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h4a6,6,0,0,0,6-6V14A6,6,0,0,0,10,8Z" />
                <path d="M26,8H22a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h4v6H22a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h4a6,6,0,0,0,6-6V14A6,6,0,0,0,26,8Z" />
              </svg>
            </div>
            
            {/* Testimonial Content */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <blockquote className="text-xl md:text-2xl mb-8 italic text-gray-700 dark:text-gray-300">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                      {testimonials[activeIndex].author.charAt(0)}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="font-medium text-lg">{testimonials[activeIndex].author}</div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {testimonials[activeIndex].position}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between z-20">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                aria-label="Previous testimonial"
              >
                <svg className="h-5 w-5 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                aria-label="Next testimonial"
              >
                <svg className="h-5 w-5 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleTestimonialChange(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-blue-600 w-6' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
