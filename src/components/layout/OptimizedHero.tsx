import React from 'react';
import { useResponsive } from './Responsive';
import { Flex, Column, Row } from './Flex';
import Container from './Container';

// Achievement icons
const TravelerAchievementIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9C5 13.17 9.42 18.92 11.24 21.11C11.64 21.59 12.37 21.59 12.77 21.11C14.58 18.92 19 13.17 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="url(#traveler-gradient)"/>
    <defs>
      <linearGradient id="traveler-gradient" x1="5" y1="2" x2="19" y2="21.11" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3B82F6"/>
        <stop offset="1" stopColor="#1E40AF"/>
      </linearGradient>
    </defs>
  </svg>
);

const ExplorerAchievementIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="url(#explorer-gradient)"/>
    <defs>
      <linearGradient id="explorer-gradient" x1="3" y1="3" x2="20.49" y2="20.49" gradientUnits="userSpaceOnUse">
        <stop stopColor="#10B981"/>
        <stop offset="1" stopColor="#047857"/>
      </linearGradient>
    </defs>
  </svg>
);

const ConquerorAchievementIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="url(#conqueror-gradient)"/>
    <defs>
      <linearGradient id="conqueror-gradient" x1="2" y1="2" x2="22" y2="21.02" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F59E0B"/>
        <stop offset="1" stopColor="#D97706"/>
      </linearGradient>
    </defs>
  </svg>
);

// SVG icons for feature points
const FeatureIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2C2 1.44687 1.55313 1 1 1C0.446875 1 0 1.44687 0 2V12.5C0 13.8813 1.11875 15 2.5 15H15C15.5531 15 16 14.5531 16 14C16 13.4469 15.5531 13 15 13H2.5C2.225 13 2 12.775 2 12.5V2ZM14.7063 4.70625C15.0969 4.31563 15.0969 3.68125 14.7063 3.29063C14.3156 2.9 13.6812 2.9 13.2906 3.29063L10 6.58437L8.20625 4.79063C7.81563 4.4 7.18125 4.4 6.79063 4.79063L3.29063 8.29062C2.9 8.68125 2.9 9.31563 3.29063 9.70625C3.68125 10.0969 4.31563 10.0969 4.70625 9.70625L7.5 6.91562L9.29375 8.70937C9.68438 9.1 10.3188 9.1 10.7094 8.70937L14.7063 4.70625Z" fill="white"/>
  </svg>
);

const PriceIcon = () => (
  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 2.5V7.17187C0 7.70312 0.209375 8.2125 0.584375 8.5875L6.08437 14.0875C6.86562 14.8687 8.13125 14.8687 8.9125 14.0875L13.0844 9.91562C13.8656 9.13437 13.8656 7.86875 13.0844 7.0875L7.58437 1.5875C7.20937 1.2125 6.7 1.00312 6.16875 1.00312H1.5C0.671875 0.999999 0 1.67187 0 2.5Z" fill="white"/>
  </svg>
);

const GuaranteeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.18125 5.53125 7.47188L7 8.94063L10.4687 5.47188C10.7625 5.18125 11.2375 5.18125 11.5281 5.47188C11.8188 5.7625 11.8219 6.2375 11.5312 6.53125Z" fill="white"/>
  </svg>
);

// Funnel Chart Component
const CustomerFunnel = () => {
  const funnelData = [
    { label: 'Visitors', value: 10000, color: '#6366F1', percentage: '100%', width: '100%' },
    { label: 'Leads', value: 2500, color: '#8B5CF6', percentage: '25%', width: '75%' },
    { label: 'Qualified', value: 750, color: '#EC4899', percentage: '30%', width: '50%' },
    { label: 'Customers', value: 188, color: '#F59E0B', percentage: '25%', width: '30%' },
    { label: 'Repeat Buyers', value: 94, color: '#10B981', percentage: '50%', width: '15%' }
  ];

  return (
    <div style={{ marginBottom: '20px' }}>
      <div style={{ 
        fontSize: '14px', 
        marginBottom: '10px',
        color: 'rgba(255, 255, 255, 0.7)'
      }}>
        Customer Acquisition Funnel
      </div>
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        {funnelData.map((item, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '70px', fontSize: '12px', color: 'rgba(255, 255, 255, 0.8)' }}>{item.label}</div>
            <div style={{ 
              flex: 1,
              height: '24px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '4px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <div style={{
                width: item.width,
                height: '100%',
                background: item.color,
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '8px',
                fontSize: '12px',
                color: 'white',
                transition: 'width 1s ease-in-out'
              }}>
                {item.value.toLocaleString()}
              </div>
            </div>
            <div style={{ width: '40px', fontSize: '12px', textAlign: 'right', color: 'rgba(255, 255, 255, 0.8)' }}>
              {item.percentage}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// CAC Reduction Timeline Component
const CACTimeline = () => {
  const timelineData = [
    { month: 'Month 0', value: 250, reduction: 'baseline', color: '#CBD5E1' },
    { month: 'Month 1', value: 230, reduction: '-8%', color: '#93C5FD' },
    { month: 'Month 2', value: 200, reduction: '-20%', color: '#60A5FA' },
    { month: 'Month 3', value: 175, reduction: '-30%', color: '#3B82F6' },
    { month: 'Month 4', value: 155, reduction: '-38%', color: '#2563EB' },
    { month: 'Month 5', value: 145, reduction: '-42%', color: '#1D4ED8' }
  ];

  const maxValue = 250;

  return (
    <div style={{ marginBottom: '20px' }}>
      <div style={{ 
        fontSize: '14px', 
        marginBottom: '10px',
        color: 'rgba(255, 255, 255, 0.7)'
      }}>
        Monthly CAC Reduction Timeline
      </div>
      <div style={{ 
        display: 'flex',
        height: '120px',
        alignItems: 'flex-end',
        gap: '12px',
        paddingTop: '30px',
        position: 'relative'
      }}>
        {timelineData.map((item, index) => (
          <div key={index} style={{ 
            flex: 1, 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
            justifyContent: 'flex-end'
          }}>
            <div style={{ 
              height: `${(item.value / maxValue) * 100}%`, 
              width: '100%', 
              background: item.color,
              borderTopLeftRadius: '4px',
              borderTopRightRadius: '4px',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              transition: 'height 1s ease-in-out'
            }}>
              <div style={{ 
                position: 'absolute', 
                top: '-25px', 
                fontSize: '12px',
                color: 'white'
              }}>
                ${item.value}
              </div>
            </div>
            <div style={{ 
              fontSize: '10px', 
              marginTop: '6px',
              color: 'rgba(255, 255, 255, 0.7)',
              textAlign: 'center'
            }}>
              <div>{item.month}</div>
              <div style={{ color: index > 0 ? '#10B981' : 'white' }}>{item.reduction}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Metrics Panel Components
const MetricsPanel = () => {
  const metricsData = [
    { 
      title: 'CAC Reduction', 
      value: '42%', 
      subtext: 'vs. Industry Average',
      color: '#6366F1'
    },
    { 
      title: 'Lead Quality Score', 
      value: '87/100', 
      subtext: 'Email Open Rate: 38.5%',
      color: '#8B5CF6'
    },
    { 
      title: 'Free-to-Paid Conversion', 
      value: '+12.3pp', 
      subtext: 'Customer LTV: $2,847',
      color: '#EC4899'
    },
    { 
      title: 'ROI Impact', 
      value: '3.8x', 
      subtext: '90-day results',
      color: '#F59E0B'
    }
  ];

  return (
    <div style={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '16px',
      marginBottom: '20px'
    }}>
      {metricsData.map((metric, index) => (
        <div key={index} style={{
          backgroundColor: 'rgba(89, 91, 161, 0.5)',
          borderRadius: '8px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          border: `1px solid ${metric.color}30`
        }}>
          <div style={{ 
            fontSize: '12px', 
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '8px'
          }}>
            {metric.title}
          </div>
          <div style={{ 
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '4px',
            color: metric.color
          }}>
            {metric.value}
          </div>
          <div style={{ 
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 0.7)',
            display: 'flex',
            alignItems: 'center'
          }}>
            {metric.subtext}
          </div>
        </div>
      ))}
    </div>
  );
};

// Achievement Icons Component
const AchievementIcons = () => {
  return (
    <div style={{ 
      display: 'flex',
      gap: '24px',
      margin: '16px 0'
    }}>
      <div style={{ 
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
          backgroundColor: 'rgba(59, 130, 246, 0.2)', // Blue gradient background
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '8px'
        }}>
          <TravelerAchievementIcon />
        </div>
        <div title="Discovered key sections">Traveler</div>
      </div>
      
      <div style={{ 
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
          backgroundColor: 'rgba(16, 185, 129, 0.2)', // Green gradient background
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '8px'
        }}>
          <ExplorerAchievementIcon />
        </div>
        <div title="Used Opportunity Calculator">Explorer</div>
      </div>
      
      <div style={{ 
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
          backgroundColor: 'rgba(245, 158, 11, 0.2)', // Gold gradient background
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '8px'
        }}>
          <ConquerorAchievementIcon />
        </div>
        <div title="Joined our community">Conqueror</div>
      </div>
    </div>
  );
};

// Optimized Hero Section Component
const OptimizedHero = () => {
  const { isMobile, isTablet } = useResponsive();
  
  return (
    <section style={{
      backgroundColor: '#1E293B', // Dark Navy background
      position: 'relative',
      overflow: 'hidden',
      paddingBottom: isMobile ? '60px' : '100px',
      minHeight: isMobile ? 'auto' : '80vh'
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
      
      {/* Vertical lines - subtle background effect */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.05, zIndex: 1 }}>
        <div style={{ position: 'absolute', width: '2px', height: '200px', left: '10%', top: '82px', background: 'linear-gradient(to bottom, transparent, #4A8DFF 50%, transparent)' }}></div>
        <div style={{ position: 'absolute', width: '2px', height: '150px', left: '25%', top: '248px', background: 'linear-gradient(to bottom, transparent, #9B55C6 50%, transparent)' }}></div>
        <div style={{ position: 'absolute', width: '2px', height: '180px', left: '35%', top: '165px', background: 'linear-gradient(to bottom, transparent, #5F7EE8 50%, transparent)' }}></div>
        <div style={{ position: 'absolute', width: '2px', height: '220px', left: '45%', top: '124px', background: 'linear-gradient(to bottom, transparent, #4A8DFF 50%, transparent)' }}></div>
        <div style={{ position: 'absolute', width: '2px', height: '170px', left: '55%', top: '207px', background: 'linear-gradient(to bottom, transparent, #9B55C6 50%, transparent)' }}></div>
        <div style={{ position: 'absolute', width: '2px', height: '200px', left: '65%', top: '82px', background: 'linear-gradient(to bottom, transparent, #5F7EE8 50%, transparent)' }}></div>
        <div style={{ position: 'absolute', width: '2px', height: '160px', left: '75%', top: '248px', background: 'linear-gradient(to bottom, transparent, #4A8DFF 50%, transparent)' }}></div>
        <div style={{ position: 'absolute', width: '2px', height: '190px', left: '85%', top: '165px', background: 'linear-gradient(to bottom, transparent, #9B55C6 50%, transparent)' }}></div>
      </div>
      
      {/* Main content */}
      <Container padding={{ mobile: '0 20px', tablet: '0 30px', desktop: '0 40px' }}>
        <div className="hero-content" style={{ 
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: isMobile ? '40px' : '60px',
          paddingTop: isMobile ? '40px' : '80px',
          position: 'relative',
          zIndex: 2,
          minHeight: isMobile ? 'auto' : '80vh'
        }}>
          {/* Left side content */}
          <div className="hero-text" style={{ 
            flex: 1,
            maxWidth: isMobile ? '100%' : '50%',
            paddingTop: '20px'
          }}>
            <h1 style={{ 
              fontSize: isMobile ? '32px' : '48px',
              fontWeight: '700',
              lineHeight: '1.2',
              color: '#F8FAFC', // Light text color
              marginTop: '0',
              marginBottom: '40px',
            }}>
              Bridge The Gap Between & <br />Technical Innovation <br />Customer Acquisition
            </h1>
            
            {/* Feature points with icons */}
            <div style={{ marginBottom: isMobile ? '40px' : '60px' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '24px'
              }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)', // Primary Indigo
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '16px',
                  boxShadow: '0 10px 15px rgba(99, 102, 241, 0.25)'
                }}>
                  <FeatureIcon />
                </div>
                <div style={{ 
                  fontSize: isMobile ? '16px' : '18px',
                  lineHeight: '20px',
                  color: '#F8FAFC'
                }}>
                  in acquisition costs
                </div>
              </div>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '24px'
              }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)', // Primary Indigo
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '16px',
                  boxShadow: '0 10px 15px rgba(99, 102, 241, 0.25)'
                }}>
                  <PriceIcon />
                </div>
                <div style={{ 
                  fontSize: isMobile ? '16px' : '18px',
                  lineHeight: '20px',
                  color: '#F8FAFC'
                }}>
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
                  background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)', // Primary Indigo
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '16px',
                  boxShadow: '0 10px 15px rgba(99, 102, 241, 0.25)'
                }}>
                  <GuaranteeIcon />
                </div>
                <div style={{ 
                  fontSize: isMobile ? '16px' : '18px',
                  lineHeight: '20px',
                  color: '#F8FAFC'
                }}>
                  guaranteed
                </div>
              </div>
            </div>
            
            {/* CTA Buttons - Updated with 3-button layout */}
            <div className="cta-buttons-container" style={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              margin: '40px 0 60px 0',
              maxWidth: isMobile ? '100%' : '400px'
            }}>
              {/* Primary CTA */}
              <button className="cta-primary" style={{ 
                background: 'linear-gradient(135deg, #6366F1, #4F46E5)',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: '16px',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(99, 102, 241, 0.25)'
              }}>
                <span style={{ marginRight: '10px' }}>📊</span>
                Opportunity Calculator
              </button>
              
              {/* Secondary CTA */}
              <button className="cta-secondary" style={{ 
                background: 'transparent',
                color: '#6366F1',
                border: '2px solid #6366F1',
                padding: '14px 32px',
                borderRadius: '12px',
                fontWeight: '500',
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}>
                <span style={{ marginRight: '10px' }}>👥</span>
                Join Our Community
              </button>
              
              {/* Tertiary CTA - New */}
              <button className="cta-tertiary" style={{ 
                background: 'linear-gradient(135deg, #F59E0B, #D97706)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                fontWeight: '500',
                fontSize: isMobile ? '13px' : '14px',
                textAlign: 'center',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(245, 158, 11, 0.25)'
              }}>
                <span style={{ marginRight: '10px' }}>📚</span>
                Download Free "Marketing Automation 101" Ebook
              </button>
            </div>
            
            {/* Experience tagline */}
            <div style={{ 
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.7)',
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: isMobile ? 'flex-start' : 'center',
              gap: isMobile ? '10px' : '16px',
              marginBottom: '20px'
            }}>
              <span>8+ years experience with enterprise clients</span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ width: '16px', height: '16px', background: '#6366F1', borderRadius: '4px', opacity: 0.5 }}></div>
                <div style={{ width: '16px', height: '16px', background: '#10B981', borderRadius: '4px', opacity: 0.5 }}></div>
                <div style={{ width: '16px', height: '16px', background: '#F59E0B', borderRadius: '4px', opacity: 0.5 }}></div>
              </div>
            </div>
          </div>
          
          {/* Right side - Dashboard visualization */}
          <div className="dashboard-preview" style={{ 
            flex: 1,
            maxWidth: isMobile ? '100%' : '45%',
            paddingTop: isMobile ? '0' : '20px'
          }}>
            <div style={{ 
              width: '100%',
              backgroundColor: 'rgba(30, 41, 59, 0.6)',
              borderRadius: '16px',
              overflow: 'hidden',
              backdropFilter: 'blur(15px)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)',
              position: 'relative',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '24px',
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out'
              // Uwaga: Pseudoklasy jak :hover musiałyby być zaimplementowane przez CSS lub bibliotekę stylów
            }}>
              {/* Dashboard header */}
              <div style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px'
              }}>
                <div style={{ fontSize: '18px', fontWeight: '600', color: 'white' }}>CRM & AI Integration Dashboard</div>
              </div>
              
              {/* Updated Dashboard Components */}
              <CustomerFunnel />
              <MetricsPanel />
              <CACTimeline />
              <AchievementIcons />
              
              {/* Explore more button */}
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '14px',
                marginTop: '20px'
              }}>
                <span>Explore More</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '4px' }}>
                  <path d="M19 9L12 16L5 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OptimizedHero;