import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import NewOptimizedHero from '../components/layout/NewOptimizedHero';
import CompactPillarsSection from '../components/sections/CompactPillarsSection';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Oleksiak Consult</title>
        <meta name="description" content="Expert business consulting services" />
        <style dangerouslySetInnerHTML={{ __html: `
          body, html {
            margin: 0;
            padding: 0;
            font-family: Inter, Arial, sans-serif;
            color: white;
            height: 100%;
            width: 100%;
            overflow-x: hidden;
          }
          * {
            box-sizing: border-box;
          }
          a {
            text-decoration: none;
          }
          button {
            cursor: pointer;
          }
        `}} />
      </Head>

      <div style={{ position: 'relative' }}>
        {/* Header/Navigation - zoptymalizowana wersja zgodnie z wytycznymi */}
        <header style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 40px',
          backgroundColor: 'white',
          position: 'relative',
          zIndex: 10,
          height: '80px'
        }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'flex-start'
          }}>
            <svg 
              width="300" 
              height="90" 
              viewBox="0 0 400 120" 
              style={{
                height: '60px',
                width: 'auto'
              }}
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Main logo text - zwiększony rozmiar czcionki */}
              <text x="10" y="50" style={{ 
                fill: '#162356', 
                fontSize: '24px', 
                fontWeight: '700', 
                fontFamily: 'Inter, sans-serif'
              }}>OLEKSIAK</text>
              
              <text x="165" y="50" style={{ 
                fill: '#162356', 
                fontSize: '24px', 
                fontWeight: '700', 
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '4px'
              }}>CONSULT</text>
              
              {/* Gradient bar */}
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9B55C6" />
                <stop offset="50%" stopColor="#5F7EE8" />
                <stop offset="100%" stopColor="#4A8DFF" />
              </linearGradient>
              
              <rect x="10" y="60" width="300" height="8" rx="4" fill="url(#logoGradient)" />
              <circle cx="270" cy="64" r="6" fill="#5F7EE8" />
              
              {/* Subtitle */}
              <text x="10" y="85" style={{ 
                fill: '#162356', 
                fontSize: '14px', 
                fontWeight: '400', 
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '0.5px'
              }}>AI EMPOWERED CRM SOLUTIONS</text>
            </svg>
          </div>
          
          {/* Nawigacja przeniesiona na prawą stronę */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <nav style={{ 
              display: 'flex', 
              gap: '32px',
              marginRight: '20px'
            }}>
              <a href="#" style={{ color: '#162356', fontSize: '16px', fontWeight: '500' }}>Services</a>
              <a href="#" style={{ color: '#162356', fontSize: '16px', fontWeight: '500' }}>Solutions</a>
              <a href="#" style={{ color: '#162356', fontSize: '16px', fontWeight: '500' }}>Case Studies</a>
              <a href="#" style={{ color: '#162356', fontSize: '16px', fontWeight: '500' }}>Resources</a>
              <a href="#" style={{ color: '#162356', fontSize: '16px', fontWeight: '500' }}>About Us</a>
            </nav>
            
            <button style={{ 
              padding: '12px 24px', 
              border: 'none', 
              borderRadius: '8px',
              backgroundColor: '#1E293B',
              color: 'white',
              fontWeight: '500',
              fontSize: '14px'
            }}>
              Contact Us
            </button>
          </div>
        </header>

        {/* Hero Section - Finalna wersja zgodnie z wytycznymi */}
        <NewOptimizedHero />
        
        {/* Pillars Section - kompaktowa wersja */}
        <CompactPillarsSection />
      </div>
    </>
  );
};

export default Home;