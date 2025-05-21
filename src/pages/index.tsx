import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Oleksiak Consult - Professional Business Consulting</title>
        <meta name="description" content="Expert business consulting services tailored to help your organization grow, innovate, and succeed." />
      </Head>

      <div className="w-full min-h-screen">
        {/* Header/Navbar */}
        <header className="w-full max-w-[1280px] h-16 mx-auto px-6 pt-4 z-50 relative">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-md bg-blue-600 mr-2"></div>
              <span className="text-[#162356] font-semibold">Oleksiak Consult</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-[#162356] text-base font-medium">Services</a>
              <a href="#" className="text-[#162356] text-base font-medium">Solutions</a>
              <a href="#" className="text-[#162356] text-base font-medium">Case Studies</a>
              <a href="#" className="text-[#162356] text-base font-medium">Resources</a>
              <a href="#" className="text-[#162356] text-base font-medium">About Us</a>
            </nav>

            {/* Contact Button */}
            <button className="bg-white text-[#162356] px-5 py-2 rounded-md font-medium border-2 border-[#162356]">
              Contact Us
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="w-full h-[828px] bg-[#162356] mt-4 overflow-hidden relative">
          {/* Background elements */}
          <div className="absolute w-[600px] h-[600px] left-0 top-[228px] opacity-20 bg-gradient-to-r from-[rgba(155,85,198,0.3)] via-[rgba(95,126,232,0.2)] to-transparent rounded-full"></div>
          
          {/* Vertical lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-0.5 h-[200px] absolute left-[216px] top-[82.8px] bg-gradient-to-r from-transparent via-[#4A8DFF] to-transparent"></div>
            <div className="w-0.5 h-[150px] absolute left-[360px] top-[248.39px] bg-gradient-to-r from-transparent via-[#9B55C6] to-transparent"></div>
            <div className="w-0.5 h-[180px] absolute left-[504px] top-[165.59px] bg-gradient-to-r from-transparent via-[#5F7EE8] to-transparent"></div>
            <div className="w-0.5 h-[220px] absolute left-[648px] top-[124.19px] bg-gradient-to-r from-transparent via-[#4A8DFF] to-transparent"></div>
            <div className="w-0.5 h-[170px] absolute left-[792px] top-[207px] bg-gradient-to-r from-transparent via-[#9B55C6] to-transparent"></div>
            <div className="w-0.5 h-[200px] absolute left-[936px] top-[82.8px] bg-gradient-to-r from-transparent via-[#5F7EE8] to-transparent"></div>
            <div className="w-0.5 h-[160px] absolute left-[1080px] top-[248.39px] bg-gradient-to-r from-transparent via-[#4A8DFF] to-transparent"></div>
            <div className="w-0.5 h-[190px] absolute left-[1224px] top-[165.59px] bg-gradient-to-r from-transparent via-[#9B55C6] to-transparent"></div>
          </div>
          
          {/* Content container */}
          <div className="w-full max-w-[1280px] mx-auto px-6 pt-[80px] relative z-10">
            <div className="flex flex-col md:flex-row items-start gap-12">
              {/* Left content */}
              <div className="w-full md:w-1/2 pt-[90px]">
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-16">
                  Bridge The Gap Between Technical Innovation & Customer Acquisition
                </h1>
                
                <div className="space-y-[60px] mb-16">
                  {/* Feature 1 */}
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#9B55C6] to-[#4A8DFF] shadow-lg shadow-purple-500/20 flex items-center justify-center mr-4">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2C2 1.44687 1.55313 1 1 1C0.446875 1 0 1.44687 0 2V12.5C0 13.8813 1.11875 15 2.5 15H15C15.5531 15 16 14.5531 16 14C16 13.4469 15.5531 13 15 13H2.5C2.225 13 2 12.775 2 12.5V2ZM14.7063 4.70625C15.0969 4.31563 15.0969 3.68125 14.7063 3.29063C14.3156 2.9 13.6812 2.9 13.2906 3.29063L10 6.58437L8.20625 4.79063C7.81563 4.4 7.18125 4.4 6.79063 4.79063L3.29063 8.29062C2.9 8.68125 2.9 9.31563 3.29063 9.70625C3.68125 10.0969 4.31563 10.0969 4.70625 9.70625L7.5 6.91562L9.29375 8.70937C9.68438 9.1 10.3188 9.1 10.7094 8.70937L14.7063 4.70625Z" fill="white"/>
                      </svg>
                    </div>
                    <p className="text-lg text-white">
                      <span className="font-bold">42% reduction</span> in acquisition costs
                    </p>
                  </div>
                  
                  {/* Feature 2 */}
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#9B55C6] to-[#4A8DFF] shadow-lg shadow-purple-500/20 flex items-center justify-center mr-4">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 2.5V7.17187C0 7.70312 0.209375 8.2125 0.584375 8.5875L6.08437 14.0875C6.86562 14.8687 8.13125 14.8687 8.9125 14.0875L13.0844 9.91562C13.8656 9.13437 13.8656 7.86875 13.0844 7.0875L7.58437 1.5875C7.20937 1.2125 6.7 1.00312 6.16875 1.00312H1.5C0.671875 0.999999 0 1.67187 0 2.5Z" fill="white"/>
                      </svg>
                    </div>
                    <p className="text-lg text-white">
                      <span className="font-bold">Performance-based</span> pricing
                    </p>
                  </div>
                  
                  {/* Feature 3 */}
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#9B55C6] to-[#4A8DFF] shadow-lg shadow-purple-500/20 flex items-center justify-center mr-4">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.18125 5.53125 7.47188L7 8.94063L10.4687 5.47188C10.7625 5.18125 11.2375 5.18125 11.5281 5.47188C11.8188 5.7625 11.8219 6.2375 11.5312 6.53125Z" fill="white"/>
                      </svg>
                    </div>
                    <p className="text-lg text-white">
                      <span className="font-bold">Positive ROI</span> guaranteed
                    </p>
                  </div>
                </div>
                
                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button className="h-14 px-6 bg-gradient-to-r from-[#9B55C6] to-[#4A8DFF] rounded-lg text-white font-medium flex items-center justify-center shadow-lg">
                    <svg className="mr-2" width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 0C0.896875 0 0 0.896875 0 2V14C0 15.1031 0.896875 16 2 16H10C11.1031 16 12 15.1031 12 14V2C12 0.896875 11.1031 0 10 0H2Z" fill="white"/>
                    </svg>
                    Request Demo
                  </button>
                  
                  <button className="h-14 px-6 border border-white rounded-lg text-white font-medium flex items-center justify-center">
                    Contact Us
                  </button>
                </div>
                
                <div className="mt-8 text-white/70 text-sm">
                  8+ years experience with enterprise clients
                </div>
              </div>
              
              {/* Right content - Dashboard */}
              <div className="w-full md:w-1/2 pt-6">
                <div className="relative p-1 rounded-lg bg-gradient-to-br from-[#9B55C6]/20 via-[#5F7EE8]/10 to-[#4A8DFF]/20">
                  <div className="bg-[#162356]/40 backdrop-blur-sm rounded-lg p-6 text-white">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-medium">CRM & AI Integration Dashboard</h3>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
                    </div>
                    
                    {/* Acquisition Metrics Chart */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-sm text-white/80">Acquisition Metrics</div>
                        <div className="text-sm text-blue-400 font-bold">+28%</div>
                      </div>
                      <div className="h-[112px] flex items-end space-x-1">
                        {[35, 45, 30, 50, 75, 45, 40, 50, 55, 85, 60, 85].map((height, index) => (
                          <div key={index} className="flex-grow">
                            <div 
                              className="w-full bg-gradient-to-t from-[#9B55C6] to-[#4A8DFF] rounded-t-sm opacity-80"
                              style={{ height: `${height}px` }}
                            ></div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {/* CAC Reduction */}
                      <div className="p-4 bg-gradient-to-r from-white/5 to-transparent rounded-lg">
                        <div className="text-sm text-white/70 mb-1">CAC Reduction</div>
                        <div className="text-2xl font-bold">42%</div>
                        <div className="text-xs text-white/70 flex items-center mt-1">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-400 mr-1">
                            <path d="M7 13L12 8L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          vs. Industry Avg
                        </div>
                      </div>
                      
                      {/* ROI */}
                      <div className="p-4 bg-gradient-to-r from-white/5 to-transparent rounded-lg">
                        <div className="text-sm text-white/70 mb-1">ROI</div>
                        <div className="text-2xl font-bold">3.8x</div>
                        <div className="text-xs text-white/70 flex items-center mt-1">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-400 mr-1">
                            <path d="M7 13L12 8L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          90-day Impact
                        </div>
                      </div>
                    </div>
                    
                    {/* Categories */}
                    <div className="grid grid-cols-3 gap-4">
                      {/* Strategy */}
                      <div className="p-4 bg-gradient-to-r from-white/5 to-transparent rounded-lg flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mb-2">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 16V21M12 16L17 21M12 16L7 21M20 4L12 12L4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div className="text-sm">Strategy</div>
                      </div>
                      
                      {/* Technology */}
                      <div className="p-4 bg-gradient-to-r from-white/5 to-transparent rounded-lg flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mb-2">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 21H21M12 3V17M12 17L17 12M12 17L7 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div className="text-sm">Technology</div>
                      </div>
                      
                      {/* Implementation */}
                      <div className="p-4 bg-gradient-to-r from-white/5 to-transparent rounded-lg flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center mb-2">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div className="text-sm">Implementation</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Explore More Button */}
                <div className="mt-4 flex justify-center">
                  <button className="text-white/70 text-sm flex flex-col items-center">
                    Explore More
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
                      <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Trust indicators */}
        <section className="w-full max-w-[1280px] mx-auto px-6 py-6 flex flex-wrap items-center justify-center md:justify-between gap-4">
          <div className="flex items-center bg-gray-100/50 px-4 py-2 rounded-full">
            <div className="w-4 h-4 rounded-full bg-gray-400 mr-2"></div>
            <span className="text-sm text-gray-700">ISO 27001 Certified</span>
          </div>
          <div className="flex items-center bg-gray-100/50 px-4 py-2 rounded-full">
            <div className="w-4 h-4 rounded-full bg-gray-400 mr-2"></div>
            <span className="text-sm text-gray-700">GDPR Compliant</span>
          </div>
          <div className="flex items-center bg-gray-100/50 px-4 py-2 rounded-full">
            <div className="w-4 h-4 rounded-full bg-gray-400 mr-2"></div>
            <span className="text-sm text-gray-700">Top CRM Consultant 2025</span>
          </div>
          <div className="flex items-center bg-gray-100/50 px-4 py-2 rounded-full">
            <div className="w-4 h-4 rounded-full bg-gray-400 mr-2"></div>
            <span className="text-sm text-gray-700">100+ Satisfied Clients</span>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
