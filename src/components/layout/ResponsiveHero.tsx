import React from 'react';
import { Flex, Column, Row } from './Flex';
import Container from './Container';
import { useResponsive } from './Responsive';

const ResponsiveHero: React.FC = () => {
  const { isMobile, isTablet } = useResponsive();
  
  return (
    <section style={{
      backgroundColor: '#162356',
      position: 'relative',
      padding: '0 0 60px 0',
      overflow: 'hidden',
      minHeight: isMobile ? '900px' : '780px',
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
      <Container padding={{ mobile: '20px', tablet: '30px', desktop: '40px' }}>
        <Flex 
          direction={{ mobile: 'column', desktop: 'row' }} 
          align="flex-start"
          style={{ position: 'relative', zIndex: 2 }}
        >
          {/* Left side content */}
          <Column 
            width={{ mobile: '100%', desktop: '50%' }}
            padding={{ 
              mobile: '60px 0 40px',
              tablet: '80px 0 40px',
              desktop: '120px 30px 40px 0' 
            }}
          >
            <h1 style={{ 
              fontSize: isMobile ? '36px' : isTablet ? '42px' : '48px',
              fontWeight: 'bold',
              lineHeight: '1.2',
              marginTop: '0',
              marginBottom: isMobile ? '40px' : '70px',
              maxWidth: '600px'
            }}>
              Bridge The Gap Between & <br />Technical Innovation <br />Customer Acquisition
            </h1>
            
            {/* Feature points with icons */}
            <div style={{ marginBottom: isMobile ? '40px' : '60px' }}>
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
                <div style={{ fontSize: isMobile ? '16px' : '18px' }}>
                  in acquisition costs
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
                <div style={{ fontSize: isMobile ? '16px' : '18px' }}>
                  pricing
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
                <div style={{ fontSize: isMobile ? '16px' : '18px' }}>
                  guaranteed
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <Flex 
              gap={{ mobile: '15px', desktop: '20px' }}
              direction={{ mobile: isMobile ? 'column' : 'row', desktop: 'row' }}
              style={{ marginBottom: '40px' }}
              width={{ mobile: '100%', desktop: 'auto' }}
            >
              <button style={{ 
                padding: '14px 20px',
                height: '56px',
                minWidth: isMobile ? '100%' : '200px',
                background: 'linear-gradient(135deg, #9B55C6 0%, #5F7EE8 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '500',
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 15px rgba(155, 85, 198, 0.25)'
              }}>
                <svg style={{ marginRight: '8px' }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 5.5C16 4.39688 15.6031 3.39062 14.9344 2.72188C14.2656 2.05312 13.2562 1.65625 12.1562 1.65625H3.84375C2.74375 1.65625 1.73438 2.05312 1.06562 2.72188C0.396875 3.39062 0 4.39688 0 5.5V11.8125C0 14.0219 1.79063 15.8125 4 15.8125H12C14.2094 15.8125 16 14.0219 16 11.8125V5.5ZM12.1562 3.03125C13.75 3.03125 15.0312 4.3125 15.0312 5.90625C15.0312 7.5 13.75 8.78125 12.1562 8.78125C10.5625 8.78125 9.28125 7.5 9.28125 5.90625C9.28125 4.3125 10.5625 3.03125 12.1562 3.03125ZM4.46875 14.4375C2.85 14.4375 1.54375 13.1406 1.54375 11.5312C1.54375 9.92188 2.85 8.625 4.46875 8.625C6.0875 8.625 7.39375 9.92188 7.39375 11.5312C7.39375 13.1406 6.0875 14.4375 4.46875 14.4375ZM7.90625 9C7.44688 8.35938 6.71875 7.91875 5.875 7.77812C6.79688 7.2875 7.40625 6.36875 7.40625 5.3125C7.40625 3.69375 6.08125 2.375 4.4625 2.375C2.84375 2.375 1.51875 3.69375 1.51875 5.3125C1.51875 6.36875 2.1125 7.2875 3.04688 7.78125C2.20313 7.91875 1.45625 8.36562 1 9.00625C0.64375 8.275 0.4375 7.43125 0.4375 6.53125V6.1875C0.4375 3.85 2.34375 1.9375 4.6875 1.9375H11.3125C13.6562 1.9375 15.5625 3.85 15.5625 6.1875V6.53125C15.5625 7.43125 15.3531 8.275 15 9.00625C14.5375 8.36875 13.7906 7.91875 12.9437 7.78125C13.8875 7.2875 14.5 6.36875 14.5 5.3125C14.5 3.69375 13.175 2.375 11.5563 2.375C9.9375 2.375 8.6125 3.69375 8.6125 5.3125C8.6125 6.36875 9.21875 7.2875 10.1531 7.78125C9.30625 7.91875 8.56562 8.35938 8.10625 9H7.90625Z" fill="white"/>
                </svg>
                Opportunity Calculator
              </button>
              
              <button style={{ 
                padding: '14px 20px',
                height: '56px',
                minWidth: isMobile ? '100%' : '200px',
                background: 'transparent',
                color: 'white',
                border: '1px solid white',
                borderRadius: '8px',
                fontWeight: '500',
                fontSize: '16px',
              }}>
                Join Our Community
              </button>
            </Flex>
            
            {/* Experience tagline */}
            <div style={{ 
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.7)',
              display: 'flex',
              alignItems: isMobile ? 'flex-start' : 'center',
              flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? '10px' : '16px',
              marginBottom: '20px'
            }}>
              <span>8+ years experience with enterprise clients</span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ width: '16px', height: '16px', background: '#5F7EE8', borderRadius: '4px', opacity: 0.5 }}></div>
                <div style={{ width: '16px', height: '16px', background: '#9B55C6', borderRadius: '4px', opacity: 0.5 }}></div>
                <div style={{ width: '16px', height: '16px', background: '#4A8DFF', borderRadius: '4px', opacity: 0.5 }}></div>
              </div>
            </div>
          </Column>
          
          {/* Right side - Dashboard visualization */}
          <Column 
            width={{ mobile: '100%', desktop: '50%' }}
            padding={{ 
              mobile: '20px 0 40px',
              tablet: '40px 0 40px',
              desktop: '80px 0 40px' 
            }}
            align={{ mobile: 'center', desktop: 'flex-start' }}
            justify={{ mobile: 'center', desktop: 'flex-start' }}
          >
            <div style={{ 
              width: '100%',
              maxWidth: isMobile ? '100%' : '520px',
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
                <div style={{ fontSize: '18px', fontWeight: '600' }}>CRM & AI Integration Dashboard</div>
              </div>
              
              {/* Charts section */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ 
                  fontSize: '14px', 
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.7)'
                }}>Acquisition Metrics</div>
                
                {/* Bar chart */}
                <div style={{ 
                  display: 'flex',
                  alignItems: 'flex-end',
                  height: '100px',
                  gap: '8px',
                  marginBottom: '24px'
                }}>
                  {[60, 40, 80, 45, 70, 35, 90, 55, 65, 75, 60, 95].map((height, index) => (
                    <div 
                      key={index} 
                      style={{ 
                        flex: 1,
                        height: `${height}%`,
                        background: 'linear-gradient(180deg, #9B55C6 0%, #4A8DFF 100%)',
                        borderRadius: '3px',
                        minWidth: '4px'
                      }} 
                    />
                  ))}
                </div>
                
                {/* Stats boxes */}
                <div style={{ 
                  display: 'flex',
                  gap: '20px',
                  marginBottom: '24px'
                }}>
                  {/* CAC Reduction */}
                  <div style={{ 
                    flex: 1,
                    backgroundColor: 'rgba(89, 91, 161, 0.5)',
                    borderRadius: '8px',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <div style={{ 
                      fontSize: '12px', 
                      color: 'rgba(255, 255, 255, 0.7)',
                      marginBottom: '8px'
                    }}>CAC Reduction</div>
                    <div style={{ 
                      fontSize: '24px',
                      fontWeight: 'bold',
                      marginBottom: '4px'
                    }}>42%</div>
                    <div style={{ 
                      fontSize: '12px',
                      color: 'rgba(255, 255, 255, 0.7)',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8L18 14H6L12 8Z" fill="#4ADE80"/>
                      </svg>
                      <span style={{ marginLeft: '4px' }}>vs. Industry Avg</span>
                    </div>
                  </div>
                  
                  {/* ROI */}
                  <div style={{ 
                    flex: 1,
                    backgroundColor: 'rgba(89, 91, 161, 0.5)',
                    borderRadius: '8px',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <div style={{ 
                      fontSize: '12px', 
                      color: 'rgba(255, 255, 255, 0.7)',
                      marginBottom: '8px'
                    }}>ROI</div>
                    <div style={{ 
                      fontSize: '24px',
                      fontWeight: 'bold',
                      marginBottom: '4px'
                    }}>3.8x</div>
                    <div style={{ 
                      fontSize: '12px',
                      color: 'rgba(255, 255, 255, 0.7)',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8L18 14H6L12 8Z" fill="#4ADE80"/>
                      </svg>
                      <span style={{ marginLeft: '4px' }}>90-day Impact</span>
                    </div>
                  </div>
                </div>
                
                {/* Feature icons */}
                <div style={{ 
                  display: 'flex',
                  gap: '20px'
                }}>
                  {/* Strategy */}
                  <div style={{ 
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.9)'
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
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.9)'
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
                        <path d="M9.25 7L9.25 17M14.75 7V17M8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>Technology</div>
                  </div>
                  
                  {/* Implementation */}
                  <div style={{ 
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.9)'
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
                        <path d="M5.63605 18.364L18.364 5.63603M18.364 5.63603L8.46446 5.63604M18.364 5.63603L18.364 15.5355" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>Implementation</div>
                  </div>
                </div>
              </div>
              
              {/* Explore more */}
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '14px'
              }}>
                <span>Explore More</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '4px' }}>
                  <path d="M19 9L12 16L5 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </Column>
        </Flex>
      </Container>
      
      {/* Trust badges */}
      <Container 
        padding={{ mobile: '20px', tablet: '20px', desktop: '0 40px' }}
        margin={{ mobile: '0', desktop: '0 auto' }}
        style={{ position: 'relative', zIndex: 2 }}
      >
        <Flex 
          direction={{ mobile: 'column', tablet: 'row' }}
          justify="center"
          align="center"
          gap={{ mobile: '15px', tablet: '30px' }}
          padding={{ mobile: '20px 0', desktop: '15px 0' }}
          style={{
            backgroundColor: isMobile ? 'transparent' : 'rgba(255, 255, 255, 0.05)',
            borderRadius: '8px',
            justifyContent: 'center',
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}
        >
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.7)',
            margin: '0 10px'
          }}>
            <div style={{ 
              width: '12px', 
              height: '12px', 
              borderRadius: '50%', 
              backgroundColor: '#5F7EE8',
              marginRight: '8px' 
            }}></div>
            ISO 27001 Certified
          </div>
          
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.7)',
            margin: '0 10px'
          }}>
            <div style={{ 
              width: '12px', 
              height: '12px', 
              borderRadius: '50%', 
              backgroundColor: '#9B55C6',
              marginRight: '8px' 
            }}></div>
            GDPR Compliant
          </div>
          
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.7)',
            margin: '0 10px'
          }}>
            <div style={{ 
              width: '12px', 
              height: '12px', 
              borderRadius: '50%', 
              backgroundColor: '#4A8DFF',
              marginRight: '8px' 
            }}></div>
            Top CRM Consultant 2025
          </div>
          
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.7)',
            margin: '0 10px'
          }}>
            <div style={{ 
              width: '12px', 
              height: '12px', 
              borderRadius: '50%', 
              backgroundColor: '#4A8DFF',
              marginRight: '8px' 
            }}></div>
            100+ Satisfied Clients
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default ResponsiveHero;