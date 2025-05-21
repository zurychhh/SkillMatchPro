import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Oleksiak Consult</title>
        <meta name="description" content="Expert business consulting services" />
        <style dangerouslySetInnerHTML={{ __html: `
          body {
            margin: 0;
            padding: 0;
            font-family: Inter, Arial, sans-serif;
            line-height: 1.5;
          }
          a {
            text-decoration: none;
          }
        `}} />
      </Head>

      <div style={{ maxWidth: '100%', overflowX: 'hidden' }}>
        {/* Header */}
        <header style={{ 
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #eee'
        }}>
          <div style={{ 
            fontWeight: 'bold', 
            fontSize: '18px',
            color: '#162356'
          }}>
            Oleksiak Consult
          </div>
          
          <nav style={{ 
            display: 'flex', 
            gap: '20px'
          }}>
            <a href="#" style={{ 
              color: '#162356', 
              fontSize: '16px', 
              fontWeight: '500'
            }}>Services</a>
            <a href="#" style={{ 
              color: '#162356', 
              fontSize: '16px', 
              fontWeight: '500'
            }}>Solutions</a>
            <a href="#" style={{ 
              color: '#162356', 
              fontSize: '16px', 
              fontWeight: '500'
            }}>Case Studies</a>
            <a href="#" style={{ 
              color: '#162356', 
              fontSize: '16px', 
              fontWeight: '500'
            }}>Resources</a>
            <a href="#" style={{ 
              color: '#162356', 
              fontSize: '16px', 
              fontWeight: '500'
            }}>About Us</a>
          </nav>
          
          <button style={{ 
            padding: '8px 16px', 
            border: '2px solid #162356', 
            borderRadius: '6px',
            backgroundColor: 'white',
            color: '#162356',
            fontWeight: '500',
            fontSize: '14px',
            cursor: 'pointer'
          }}>
            Contact Us
          </button>
        </header>

        {/* Hero Section */}
        <section style={{
          backgroundColor: '#162356',
          padding: '40px 20px',
          color: 'white',
          minHeight: '600px'
        }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            display: 'flex',
            flexDirection: 'column',
            gap: '40px'
          }}>
            <h1 style={{ 
              fontSize: '36px', 
              fontWeight: 'bold',
              maxWidth: '800px',
              lineHeight: '1.2',
              margin: '0'
            }}>
              Bridge The Gap Between Technical Innovation & Customer Acquisition
            </h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <strong>42% reduction</strong> in acquisition costs
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <strong>Performance-based</strong> pricing
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <strong>Positive ROI</strong> guaranteed
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button style={{ 
                padding: '12px 24px', 
                backgroundColor: '#5F7EE8', 
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                fontWeight: '500',
                fontSize: '16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                Request Demo
              </button>
              
              <button style={{ 
                padding: '12px 24px', 
                backgroundColor: 'transparent', 
                border: '1px solid white',
                borderRadius: '8px',
                color: 'white',
                fontWeight: '500',
                fontSize: '16px',
                cursor: 'pointer'
              }}>
                Contact Us
              </button>
            </div>
            
            <div style={{ 
              fontSize: '14px', 
              color: 'rgba(255, 255, 255, 0.7)', 
              marginTop: '20px'
            }}>
              8+ years experience with enterprise clients
            </div>
            
            {/* Dashboard area - simplified */}
            <div style={{ 
              marginTop: '40px', 
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              padding: '24px',
              borderRadius: '12px',
              maxWidth: '600px'
            }}>
              <h3 style={{ 
                margin: '0 0 16px 0',
                fontSize: '20px',
                fontWeight: '500'
              }}>
                CRM & AI Integration Dashboard
              </h3>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '8px'
              }}>
                <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px' }}>
                  Acquisition Metrics
                </span>
                <span style={{ color: '#4A8DFF', fontWeight: 'bold', fontSize: '14px' }}>
                  +28%
                </span>
              </div>
              
              {/* Simple chart visualization */}
              <div style={{ 
                height: '100px', 
                display: 'flex', 
                alignItems: 'flex-end', 
                gap: '4px',
                marginBottom: '24px'
              }}>
                {[40, 60, 30, 45, 70, 50, 45, 65, 75, 55, 80, 60].map((height, index) => (
                  <div key={index} style={{ 
                    flexGrow: 1,
                    height: `${height}%`,
                    background: 'linear-gradient(to top, #9B55C6, #4A8DFF)',
                    borderTopLeftRadius: '3px',
                    borderTopRightRadius: '3px',
                    opacity: '0.8'
                  }} />
                ))}
              </div>
              
              {/* Stats cards */}
              <div style={{ 
                display: 'flex', 
                gap: '16px', 
                marginBottom: '24px' 
              }}>
                <div style={{ 
                  flex: '1', 
                  padding: '16px', 
                  background: 'linear-gradient(to right, rgba(255,255,255,0.05), transparent)',
                  borderRadius: '8px'
                }}>
                  <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>
                    CAC Reduction
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '4px' }}>
                    42%
                  </div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>
                    vs. Industry Avg
                  </div>
                </div>
                
                <div style={{ 
                  flex: '1', 
                  padding: '16px', 
                  background: 'linear-gradient(to right, rgba(255,255,255,0.05), transparent)',
                  borderRadius: '8px'
                }}>
                  <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>
                    ROI
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '4px' }}>
                    3.8x
                  </div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>
                    90-day Impact
                  </div>
                </div>
              </div>
              
              {/* Category cards */}
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ 
                  flex: '1', 
                  padding: '16px', 
                  background: 'linear-gradient(to right, rgba(255,255,255,0.05), transparent)',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '14px' }}>Strategy</div>
                </div>
                
                <div style={{ 
                  flex: '1', 
                  padding: '16px', 
                  background: 'linear-gradient(to right, rgba(255,255,255,0.05), transparent)',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '14px' }}>Technology</div>
                </div>
                
                <div style={{ 
                  flex: '1', 
                  padding: '16px', 
                  background: 'linear-gradient(to right, rgba(255,255,255,0.05), transparent)',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '14px' }}>Implementation</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
