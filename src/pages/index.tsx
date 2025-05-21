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
          padding: '15px 30px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          backgroundColor: 'white',
          position: 'relative',
          zIndex: 10
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ 
              width: '32px', 
              height: '32px', 
              backgroundColor: '#5F7EE8', 
              borderRadius: '4px',
              marginRight: '10px'
            }}></div>
            <div style={{ 
              fontWeight: 'bold', 
              color: '#162356', 
              fontSize: '16px'
            }}>
              Oleksiak Consult
            </div>
          </div>
          
          <nav style={{ 
            display: 'flex', 
            gap: '25px'
          }}>
            <a href="#" style={{ color: '#162356', fontSize: '15px', fontWeight: '500' }}>Services</a>
            <a href="#" style={{ color: '#162356', fontSize: '15px', fontWeight: '500' }}>Solutions</a>
            <a href="#" style={{ color: '#162356', fontSize: '15px', fontWeight: '500' }}>Case Studies</a>
            <a href="#" style={{ color: '#162356', fontSize: '15px', fontWeight: '500' }}>Resources</a>
            <a href="#" style={{ color: '#162356', fontSize: '15px', fontWeight: '500' }}>About Us</a>
          </nav>
          
          <button style={{ 
            padding: '8px 16px', 
            border: '1px solid #162356', 
            borderRadius: '8px',
            backgroundColor: 'white',
            color: '#162356',
            fontWeight: '500',
            fontSize: '14px'
          }}>
            Contact Us
          </button>
        </header>

        {/* Hero Section */}
        <section style={{
          backgroundColor: '#162356',
          position: 'relative',
          padding: '0',
          overflow: 'hidden',
          height: '720px'
        }}>
          {/* Background gradient oval */}
          <div style={{ 
            position: 'absolute',
            width: '600px',
            height: '600px',
            left: '0',
            top: '200px',
            borderRadius: '50%',
            background: 'linear-gradient(90deg, rgba(155, 85, 198, 0.3) 0%, rgba(95, 126, 232, 0.2) 50%, transparent 100%)',
            opacity: '0.2',
            zIndex: 1
          }}></div>
          
          {/* Vertical lines */}
          <div style={{ position: 'absolute', inset: 0, opacity: 0.1, zIndex: 1 }}>
            <div style={{ position: 'absolute', width: '2px', height: '200px', left: '216px', top: '82px', background: 'linear-gradient(to bottom, transparent, #4A8DFF 50%, transparent)' }}></div>
            <div style={{ position: 'absolute', width: '2px', height: '150px', left: '360px', top: '248px', background: 'linear-gradient(to bottom, transparent, #9B55C6 50%, transparent)' }}></div>
            <div style={{ position: 'absolute', width: '2px', height: '180px', left: '504px', top: '165px', background: 'linear-gradient(to bottom, transparent, #5F7EE8 50%, transparent)' }}></div>
            <div style={{ position: 'absolute', width: '2px', height: '220px', left: '648px', top: '124px', background: 'linear-gradient(to bottom, transparent, #4A8DFF 50%, transparent)' }}></div>
            <div style={{ position: 'absolute', width: '2px', height: '170px', left: '792px', top: '207px', background: 'linear-gradient(to bottom, transparent, #9B55C6 50%, transparent)' }}></div>
            <div style={{ position: 'absolute', width: '2px', height: '200px', left: '936px', top: '82px', background: 'linear-gradient(to bottom, transparent, #5F7EE8 50%, transparent)' }}></div>
            <div style={{ position: 'absolute', width: '2px', height: '160px', left: '1080px', top: '248px', background: 'linear-gradient(to bottom, transparent, #4A8DFF 50%, transparent)' }}></div>
            <div style={{ position: 'absolute', width: '2px', height: '190px', left: '1224px', top: '165px', background: 'linear-gradient(to bottom, transparent, #9B55C6 50%, transparent)' }}></div>
          </div>
          
          {/* Main content */}
          <div style={{ 
            position: 'relative',
            maxWidth: '1200px',
            margin: '0 auto',
            height: '100%',
            display: 'flex',
            zIndex: 2,
            padding: '0 30px'
          }}>
            {/* Left side content */}
            <div style={{ 
              flex: '1',
              paddingTop: '120px',
              paddingRight: '30px',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h1 style={{ 
                fontSize: '48px',
                fontWeight: 'bold',
                lineHeight: '1.2',
                marginTop: '0',
                marginBottom: '60px',
                maxWidth: '600px'
              }}>
                Bridge The Gap Between & Technical Innovation Customer Acquisition
              </h1>
              
              {/* Feature points with icons */}
              <div style={{ marginBottom: '50px' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '30px'
                }}>
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    background: 'linear-gradient(135deg, #9B55C6 0%, #4A8DFF 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '16px',
                    boxShadow: '0 10px 15px rgba(74, 141, 255, 0.25)'
                  }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2C2 1.44687 1.55313 1 1 1C0.446875 1 0 1.44687 0 2V12.5C0 13.8813 1.11875 15 2.5 15H15C15.5531 15 16 14.5531 16 14C16 13.4469 15.5531 13 15 13H2.5C2.225 13 2 12.775 2 12.5V2ZM14.7063 4.70625C15.0969 4.31563 15.0969 3.68125 14.7063 3.29063C14.3156 2.9 13.6812 2.9 13.2906 3.29063L10 6.58437L8.20625 4.79063C7.81563 4.4 7.18125 4.4 6.79063 4.79063L3.29063 8.29062C2.9 8.68125 2.9 9.31563 3.29063 9.70625C3.68125 10.0969 4.31563 10.0969 4.70625 9.70625L7.5 6.91562L9.29375 8.70937C9.68438 9.1 10.3188 9.1 10.7094 8.70937L14.7063 4.70625Z" fill="white"/>
                    </svg>
                  </div>
                  <div style={{ fontSize: '18px' }}>
                    <span style={{ fontWeight: 'bold' }}>42% reduction</span> in acquisition costs
                  </div>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '30px'
                }}>
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    background: 'linear-gradient(135deg, #9B55C6 0%, #4A8DFF 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '16px',
                    boxShadow: '0 10px 15px rgba(74, 141, 255, 0.25)'
                  }}>
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 2.5V7.17187C0 7.70312 0.209375 8.2125 0.584375 8.5875L6.08437 14.0875C6.86562 14.8687 8.13125 14.8687 8.9125 14.0875L13.0844 9.91562C13.8656 9.13437 13.8656 7.86875 13.0844 7.0875L7.58437 1.5875C7.20937 1.2125 6.7 1.00312 6.16875 1.00312H1.5C0.671875 0.999999 0 1.67187 0 2.5Z" fill="white"/>
                    </svg>
                  </div>
                  <div style={{ fontSize: '18px' }}>
                    <span style={{ fontWeight: 'bold' }}>Performance-based</span> pricing
                  </div>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center'
                }}>
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    background: 'linear-gradient(135deg, #9B55C6 0%, #4A8DFF 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '16px',
                    boxShadow: '0 10px 15px rgba(74, 141, 255, 0.25)'
                  }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.18125 5.53125 7.47188L7 8.94063L10.4687 5.47188C10.7625 5.18125 11.2375 5.18125 11.5281 5.47188C11.8188 5.7625 11.8219 6.2375 11.5312 6.53125Z" fill="white"/>
                    </svg>
                  </div>
                  <div style={{ fontSize: '18px' }}>
                    <span style={{ fontWeight: 'bold' }}>Positive ROI</span> guaranteed
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div style={{ 
                display: 'flex', 
                gap: '16px',
                marginBottom: '30px'
              }}>
                <button style={{ 
                  padding: '14px 20px',
                  height: '56px',
                  minWidth: '200px',
                  background: 'linear-gradient(135deg, #9B55C6 0%, #4A8DFF 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '500',
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 20px rgba(74, 141, 255, 0.25)'
                }}>
                  <svg style={{ marginRight: '8px' }} width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 0C0.896875 0 0 0.896875 0 2V14C0 15.1031 0.896875 16 2 16H10C11.1031 16 12 15.1031 12 14V2C12 0.896875 11.1031 0 10 0H2Z" fill="white"/>
                  </svg>
                  Opportunity Calculator
                </button>
                
                <button style={{ 
                  padding: '14px 20px',
                  height: '56px',
                  minWidth: '200px',
                  background: 'transparent',
                  color: 'white',
                  border: '1px solid white',
                  borderRadius: '8px',
                  fontWeight: '500',
                  fontSize: '16px',
                }}>
                  Join Our Community
                </button>
              </div>
              
              {/* Experience tagline */}
              <div style={{ 
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.7)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <span>8+ years experience with enterprise clients</span>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ width: '16px', height: '16px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '4px' }}></div>
                  <div style={{ width: '16px', height: '16px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '4px' }}></div>
                  <div style={{ width: '16px', height: '16px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '4px' }}></div>
                </div>
              </div>
            </div>
            
            {/* Right side - Dashboard visualization */}
            <div style={{ 
              flex: '1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: '80px'
            }}>
              <div style={{ 
                width: '100%',
                maxWidth: '520px',
                backgroundColor: 'rgba(89, 91, 161, 0.25)',
                borderRadius: '16px',
                overflow: 'hidden',
                backdropFilter: 'blur(15px)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                position: 'relative',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '24px',
              }}>
                {/* Dashboard header */}
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px'
                }}>
                  <h3 style={{ 
                    margin: 0,
                    fontSize: '18px',
                    fontWeight: '500',
                  }}>
                    CRM & AI Integration Dashboard
                  </h3>
                  
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#C66D98' }}></div>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#8B74B2' }}></div>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#5F7EE8' }}></div>
                  </div>
                </div>
                
                {/* Chart section */}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '8px'
                  }}>
                    <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px' }}>
                      Acquisition Metrics
                    </div>
                    <div style={{ color: '#4A8DFF', fontWeight: 'bold', fontSize: '14px' }}>
                      +28%
                    </div>
                  </div>
                  
                  {/* Chart bars */}
                  <div style={{ 
                    height: '112px',
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: '4px'
                  }}>
                    {[35, 55, 45, 35, 75, 45, 40, 50, 70, 60, 90, 70].map((height, index) => (
                      <div key={index} style={{ 
                        flex: '1',
                        height: `${height}%`,
                        background: 'linear-gradient(to top, #9B55C6, #4A8DFF)',
                        borderTopLeftRadius: '3px',
                        borderTopRightRadius: '3px',
                        opacity: '0.8'
                      }} />
                    ))}
                  </div>
                </div>
                
                {/* Metrics cards */}
                <div style={{ 
                  display: 'flex',
                  gap: '16px',
                  marginBottom: '20px'
                }}>
                  {/* CAC Reduction */}
                  <div style={{ 
                    flex: '1',
                    background: 'linear-gradient(to right, rgba(255, 255, 255, 0.05), transparent)',
                    borderRadius: '8px',
                    padding: '16px'
                  }}>
                    <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', marginBottom: '4px' }}>
                      CAC Reduction
                    </div>
                    <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                      42%
                    </div>
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '12px',
                      marginTop: '4px'
                    }}>
                      <svg style={{ marginRight: '4px', color: '#4ADE80' }} width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 13L12 8L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      vs. Industry Avg
                    </div>
                  </div>
                  
                  {/* ROI */}
                  <div style={{ 
                    flex: '1',
                    background: 'linear-gradient(to right, rgba(255, 255, 255, 0.05), transparent)',
                    borderRadius: '8px',
                    padding: '16px'
                  }}>
                    <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', marginBottom: '4px' }}>
                      ROI
                    </div>
                    <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                      3.8x
                    </div>
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '12px',
                      marginTop: '4px'
                    }}>
                      <svg style={{ marginRight: '4px', color: '#4ADE80' }} width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 13L12 8L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      90-day Impact
                    </div>
                  </div>
                </div>
                
                {/* Category boxes */}
                <div style={{ display: 'flex', gap: '16px' }}>
                  {/* Strategy */}
                  <div style={{ 
                    flex: '1',
                    background: 'linear-gradient(to right, rgba(255, 255, 255, 0.05), transparent)',
                    borderRadius: '8px',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{ 
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(155, 85, 198, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '8px'
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16V21M12 16L17 21M12 16L7 21M20 4L12 12L4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>Strategy</div>
                  </div>
                  
                  {/* Technology */}
                  <div style={{ 
                    flex: '1',
                    background: 'linear-gradient(to right, rgba(255, 255, 255, 0.05), transparent)',
                    borderRadius: '8px',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{ 
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(95, 126, 232, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '8px'
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 21H21M12 3V17M12 17L17 12M12 17L7 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>Technology</div>
                  </div>
                  
                  {/* Implementation */}
                  <div style={{ 
                    flex: '1',
                    background: 'linear-gradient(to right, rgba(255, 255, 255, 0.05), transparent)',
                    borderRadius: '8px',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{ 
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(74, 141, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '8px'
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>Implementation</div>
                  </div>
                </div>
                
                {/* Explore more */}
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '20px' 
                }}>
                  <button style={{ 
                    background: 'transparent',
                    border: 'none',
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}>
                    Explore More
                    <svg style={{ marginTop: '4px' }} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Trust indicators */}
        <section style={{ 
          backgroundColor: 'white',
          padding: '20px 30px',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#4B5563',
            fontSize: '14px',
            backgroundColor: '#F3F4F6',
            padding: '8px 16px',
            borderRadius: '999px'
          }}>
            <div style={{ 
              width: '16px', 
              height: '16px', 
              borderRadius: '50%', 
              backgroundColor: '#9CA3AF'
            }}></div>
            ISO 27001 Certified
          </div>
          
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#4B5563',
            fontSize: '14px',
            backgroundColor: '#F3F4F6',
            padding: '8px 16px',
            borderRadius: '999px'
          }}>
            <div style={{ 
              width: '16px', 
              height: '16px', 
              borderRadius: '50%', 
              backgroundColor: '#9CA3AF'
            }}></div>
            GDPR Compliant
          </div>
          
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#4B5563',
            fontSize: '14px',
            backgroundColor: '#F3F4F6',
            padding: '8px 16px',
            borderRadius: '999px'
          }}>
            <div style={{ 
              width: '16px', 
              height: '16px', 
              borderRadius: '50%', 
              backgroundColor: '#9CA3AF'
            }}></div>
            Top CRM Consultant 2025
          </div>
          
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#4B5563',
            fontSize: '14px',
            backgroundColor: '#F3F4F6',
            padding: '8px 16px',
            borderRadius: '999px'
          }}>
            <div style={{ 
              width: '16px', 
              height: '16px', 
              borderRadius: '50%', 
              backgroundColor: '#9CA3AF'
            }}></div>
            100+ Satisfied Clients
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
