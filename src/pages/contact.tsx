import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import MainLayout from '@/components/layout/MainLayout';
import { useAchievements } from '@/hooks/useAchievements';

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, 'Please enter a message with at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactPage: NextPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const { recordAction } = useAchievements();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Here you would normally send the data to your API
      // For this example, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
      recordAction('contact_form_submit');
      reset();
      
      // After 5 seconds, reset the success message
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('There was an error submitting your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Record contact page visit for achievement tracking
  React.useEffect(() => {
    recordAction('contact_page_visit');
  }, [recordAction]);

  return (
    <>
      <Head>
        <title>Contact Us - Oleksiak Consult</title>
        <meta name="description" content="Get in touch with Oleksiak Consult. Contact us for business consulting services, inquiries, or to schedule a consultation." />
      </Head>
      <MainLayout>
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
            <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              Have questions or ready to start a project? Reach out to our team of expert consultants.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6"
                  >
                    <h3 className="text-green-800 dark:text-green-400 font-semibold text-lg mb-2">Message Sent Successfully!</h3>
                    <p className="text-green-700 dark:text-green-300">
                      Thank you for reaching out. One of our consultants will contact you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {submitError && (
                      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
                        <p className="text-red-700 dark:text-red-300">{submitError}</p>
                      </div>
                    )}
                    
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors.name ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                        }`}
                        {...register('name')}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors.email ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                        }`}
                        {...register('email')}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
                      )}
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-1">
                          Company (Optional)
                        </label>
                        <input
                          id="company"
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          {...register('company')}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1">
                          Phone Number (Optional)
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          {...register('phone')}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors.message ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                        }`}
                        {...register('message')}
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 rounded-full p-3 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 rounded-full p-3 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">info@oleksiakconsult.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 rounded-full p-3 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Office</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        123 Business Avenue<br />
                        Suite 400<br />
                        New York, NY 10001<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
                
                <h2 className="text-2xl font-semibold mb-4">Office Hours</h2>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <div className="flex justify-between py-2 border-b dark:border-gray-700">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2 border-b dark:border-gray-700">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 max-w-6xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-medium mb-2">What types of businesses do you work with?</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We work with businesses of all sizes across various industries, including technology, 
                    healthcare, finance, retail, manufacturing, and professional services.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-medium mb-2">How long do consulting engagements typically last?</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    The duration varies based on the scope and complexity of your needs. Projects can range 
                    from a few weeks for targeted assessments to several months for comprehensive transformations.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-medium mb-2">Do you offer virtual consulting services?</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Yes, we provide both in-person and virtual consulting services to accommodate your 
                    preferences and geographical constraints.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </MainLayout>
    </>
  );
};

export default ContactPage;
