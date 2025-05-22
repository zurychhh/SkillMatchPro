import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import ResponsiveHero from '../components/layout/ResponsiveHero';

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
        {/* Header/Navigation */}
        <header style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '15px 40px',
          backgroundColor: 'white',
          position: 'relative',
          zIndex: 10
        }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'flex-start',
            minWidth: '250px' 
          }}>
            <svg 
              width="300" 
              height="90" 
              viewBox="0 0 400 120" 
              style={{
                height: '50px',
                width: 'auto'
              }}
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Main logo text */}
              <text x="10" y="50" style={{ 
                fill: '#162356', 
                fontSize: '36px', 
                fontWeight: 'bold', 
                fontFamily: 'Inter, sans-serif'
              }}>OLEKSIAK</text>
              
              <text x="220" y="50" style={{ 
                fill: '#162356', 
                fontSize: '36px', 
                fontWeight: '500', 
                fontFamily: 'Inter, sans-serif'
              }}>CONSULT</text>
              
              {/* Gradient bar */}
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9B55C6" />
                <stop offset="50%" stopColor="#5F7EE8" />
                <stop offset="100%" stopColor="#4A8DFF" />
              </linearGradient>
              
              <rect x="10" y="60" width="350" height="8" rx="4" fill="url(#logoGradient)" />
              <circle cx="320" cy="64" r="6" fill="#5F7EE8" />
              
              {/* Subtitle */}
              <text x="10" y="90" style={{ 
                fill: '#162356', 
                fontSize: '16px', 
                fontWeight: '400', 
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '0.5px'
              }}>AI EMPOWERED CRM SOLUTIONS</text>
            </svg>
          </div>
          
          <nav style={{ 
            display: 'flex', 
            gap: '30px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            <a href="#" style={{ color: '#162356', fontSize: '16px', fontWeight: '500' }}>Services</a>
            <a href="#" style={{ color: '#162356', fontSize: '16px', fontWeight: '500' }}>Solutions</a>
            <a href="#" style={{ color: '#162356', fontSize: '16px', fontWeight: '500' }}>Case Studies</a>
            <a href="#" style={{ color: '#162356', fontSize: '16px', fontWeight: '500' }}>Resources</a>
            <a href="#" style={{ color: '#162356', fontSize: '16px', fontWeight: '500' }}>About Us</a>
          </nav>
          
          <button style={{ 
            padding: '9px 18px', 
            border: '1px solid #162356', 
            borderRadius: '6px',
            backgroundColor: 'white',
            color: '#162356',
            fontWeight: '500',
            fontSize: '14px'
          }}>
            Contact Us
          </button>
        </header>

        {/* Hero Section - Responsywna wersja */}
        <ResponsiveHero />
        
        {/* Trust badges */}
        <section style={{ 
          backgroundColor: 'white', 
          color: '#333',
          padding: '60px 40px',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '32px', marginBottom: '40px' }}>Zaufali nam</h2>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '40px'
          }}>
            {/* Placeholder dla logo klientów */}
            <div style={{ width: '160px', height: '60px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}></div>
            <div style={{ width: '160px', height: '60px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}></div>
            <div style={{ width: '160px', height: '60px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}></div>
            <div style={{ width: '160px', height: '60px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}></div>
            <div style={{ width: '160px', height: '60px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;