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
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8Z" stroke="white" strokeWidth="1.5"/>
    <path d="M8.5 5.5C8.5 5.77614 8.27614 6 8 6C7.72386 6 7.5 5.77614 7.5 5.5C7.5 5.22386 7.72386 5 8 5C8.27614 5 8.5 5.22386 8.5 5.5Z" fill="white"/>
    <path d="M8.5 10.5C8.5 10.7761 8.27614 11 8 11C7.72386 11 7.5 10.7761 7.5 10.5C7.5 10.2239 7.72386 10 8 10C8.27614 10 8.5 10.2239 8.5 10.5Z" fill="white"/>
    <path d="M6 8L8 6L10 8L8 10L6 8Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GuaranteeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.99984 14.6667C11.6818 14.6667 14.6665 11.6819 14.6665 8.00004C14.6665 4.31814 11.6818 1.33337 7.99984 1.33337C4.31794 1.33337 1.33317 4.31814 1.33317 8.00004C1.33317 11.6819 4.31794 14.6667 7.99984 14.6667Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.33317 8.00004L6.99984 9.66671L10.6665 6.00004" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.00008 10C9.1046 10 10.0001 9.10457 10.0001 8C10.0001 6.89543 9.1046 6 8.00008 6C6.89555 6 6.00008 6.89543 6.00008 8C6.00008 9.10457 6.89555 10 8.00008 10Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.9333 8.66671C12.9777 8.45 13 8.22774 13 8.00004C13 7.77235 12.9777 7.55008 12.9333 7.33338L14.3911 6.19338C14.5222 6.09116 14.5659 5.91116 14.4844 5.76449L13.1511 3.23783C13.0695 3.09116 12.8911 3.03116 12.7378 3.09783L11.0044 3.83338C10.6578 3.57783 10.2778 3.36893 9.86664 3.22227L9.56886 1.39116C9.54441 1.22783 9.40442 1.10783 9.23774 1.10783H6.57108C6.4044 1.10783 6.26442 1.22783 6.23996 1.39116L5.94219 3.22227C5.53108 3.36893 5.1511 3.57783 4.80442 3.83338L3.07108 3.09783C2.91775 3.03116 2.73996 3.09116 2.65835 3.23783L1.32501 5.76449C1.24335 5.91116 1.28706 6.09116 1.41814 6.19338L2.8759 7.33338C2.83152 7.55008 2.80925 7.77235 2.80925 8.00004C2.80925 8.22774 2.83152 8.45 2.8759 8.66671L1.41814 9.80671C1.28706 9.90893 1.24335 10.0889 1.32501 10.2356L2.65835 12.7623C2.73996 12.9089 2.91775 12.9689 3.07108 12.9023L4.80442 12.1667C5.1511 12.4223 5.53108 12.6312 5.94219 12.7778L6.23996 14.6089C6.26442 14.7723 6.4044 14.8923 6.57108 14.8923H9.23774C9.40442 14.8923 9.54441 14.7723 9.56886 14.6089L9.86664 12.7778C10.2778 12.6312 10.6578 12.4223 11.0044 12.1667L12.7378 12.9023C12.8911 12.9689 13.0695 12.9089 13.1511 12.7623L14.4844 10.2356C14.5659 10.0889 14.5222 9.90893 14.3911 9.80671L12.9333 8.66671Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const NotificationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5.33325C12 4.27239 11.5786 3.25497 10.8284 2.50482C10.0783 1.75468 9.06087 1.33325 8 1.33325C6.93913 1.33325 5.92172 1.75468 5.17157 2.50482C4.42143 3.25497 4 4.27239 4 5.33325C4 10.0666 2 11.3333 2 11.3333H14C14 11.3333 12 10.0666 12 5.33325Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.15335 14C9.03614 14.2021 8.86791 14.3698 8.6655 14.4864C8.46309 14.6029 8.2336 14.6643 8.00001 14.6643C7.76643 14.6643 7.53694 14.6029 7.33453 14.4864C7.13212 14.3698 6.96389 14.2021 6.84668 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ExperienceBadgeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.6667 8.00004C14.6667 11.6819 11.6819 14.6667 8.00004 14.6667C4.31814 14.6667 1.33337 11.6819 1.33337 8.00004C1.33337 4.31814 4.31814 1.33337 8.00004 1.33337C11.6819 1.33337 14.6667 4.31814 14.6667 8.00004Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.6667 5.33337L7.33337 10.6667L5.33337 8.66671" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Funnel Chart Component
const CustomerFunnel = () => {
  // Używamy dokładnie takich samych wartości i formatowania między serwerem a klientem
  const funnelData = [
    { label: 'Visitors', value: '10 000', color: '#6366F1', percentage: '100%', width: '100%' },
    { label: 'Leads', value: '2 500', color: '#8B5CF6', percentage: '25%', width: '75%' },
    { label: 'Qualified', value: '750', color: '#EC4899', percentage: '30%', width: '50%' },
    { label: 'Customers', value: '188', color: '#F59E0B', percentage: '25%', width: '30%' },
    { label: 'Repeat Buyers', value: '94', color: '#10B981', percentage: '50%', width: '15%' }
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
        gap: '6px'
      }}>
        {funnelData.map((item, index) => (
          <div key={index} style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{ 
              flex: '1',
              height: '36px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '4px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ 
                position: 'absolute',
                left: '0',
                top: '0',
                height: '100%',
                width: item.width,
                backgroundColor: item.color,
                borderRadius: '4px',
                transition: 'width 1s ease-in-out'
              }}></div>
              <div style={{ 
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '12px',
                fontWeight: '500',
                color: 'white',
                zIndex: '1'
              }}>
                {item.label}
              </div>
              <div style={{ 
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '12px',
                fontWeight: '500',
                color: 'white',
                zIndex: '1'
              }}>
                {item.percentage}
              </div>
            </div>
            <div style={{ 
              width: '100px',
              fontSize: '14px',
              fontWeight: '500',
              color: 'white',
              textAlign: 'right'
            }}>
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Uproszczony panel metryk zgodnie z wytycznymi
const SimplifiedMetricsPanel = () => {
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
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '8px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{ 
            fontSize: '24px', 
            fontWeight: '600',
            color: 'white',
            marginBottom: '4px'
          }}>
            {metric.value}
          </div>
          <div style={{ 
            fontSize: '14px', 
            fontWeight: '500',
            color: 'white',
            marginBottom: '6px'
          }}>
            {metric.title}
          </div>
          <div style={{ 
            fontSize: '12px', 
            color: 'rgba(255, 255, 255, 0.7)',
            textAlign: 'center'
          }}>
            {metric.subtext}
          </div>
        </div>
      ))}
    </div>
  );
};

// Optimized Hero Section Component - finalna wersja zgodnie z wytycznymi
const NewOptimizedHero = () => {
  const { isMobile, isTablet } = useResponsive();
  
  return (
    <section style={{
      backgroundColor: '#1E293B', // Dark Navy background
      background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)', // Gradient dark navy
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
              marginBottom: '24px',
            }}>
              Bridge The Gap Between Technical Innovation & Customer Acquisition
            </h1>
            
            {/* Skrócony USP Section - tylko 2 linie */}
            <div style={{
              fontSize: '18px',
              lineHeight: '1.5',
              color: '#E2E8F0',
              maxWidth: '500px',
              margin: '20px 0 32px 0'
            }}>
              We transform AI-native startups into customer acquisition powerhouses.
              Get proven CRM strategies that reduce acquisition costs by 42% in 90 days.
            </div>
            
            {/* CTA Buttons - poziomy layout zgodnie z wytycznymi */}
            <div style={{ 
              display: 'flex', 
              gap: '16px', 
              marginBottom: '40px',
              justifyContent: 'flex-start',
              flexDirection: isMobile ? 'column' : 'row'
            }}>
              {/* Primary CTA - Opportunity Calculator */}
              <button style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: isMobile ? '100%' : '180px',
                padding: '16px 24px',
                background: 'linear-gradient(135deg, #6366F1, #4F46E5)',
                borderRadius: '8px',
                color: 'white',
                fontSize: '16px',
                fontWeight: '600',
                border: 'none',
                boxShadow: '0 10px 25px rgba(99, 102, 241, 0.3)',
                cursor: 'pointer'
              }}>
                <div style={{ marginRight: '8px' }}>📊</div>
                Opportunity Calculator
              </button>
              
              {/* Secondary CTA - Join Community */}
              <button style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: isMobile ? '100%' : '140px',
                padding: '14px 20px',
                backgroundColor: 'transparent',
                borderRadius: '8px',
                color: '#6366F1',
                fontSize: '16px',
                fontWeight: '500',
                border: '2px solid #6366F1',
                cursor: 'pointer'
              }}>
                <div style={{ marginRight: '8px' }}>👥</div>
                Join Community
              </button>
              
              {/* Tertiary CTA - Free Ebook */}
              <button style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: isMobile ? '100%' : '120px',
                padding: '14px 16px',
                background: 'linear-gradient(135deg, #F59E0B, #D97706)',
                borderRadius: '8px',
                color: 'white',
                fontSize: '14px',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer'
              }}>
                <div style={{ marginRight: '8px' }}>📚</div>
                Free Ebook
              </button>
            </div>
            
            {/* Experience Badge */}
            <div style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '100px',
              padding: '8px 16px',
              backdropFilter: 'blur(5px)'
            }}>
              <div style={{ 
                width: '32px', 
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                borderRadius: '50%',
                marginRight: '12px'
              }}>
                <ExperienceBadgeIcon />
              </div>
              <div style={{ 
                fontSize: '14px', 
                color: '#E2E8F0',
                fontWeight: '500'
              }}>
                8+ years experience with enterprise clients
              </div>
            </div>
          </div>
          
          {/* Right side content - Uproszczony Dashboard */}
          <div className="dashboard-container" style={{ 
            flex: 1,
            maxWidth: isMobile ? '100%' : '45%',
          }}>
            <div style={{ 
              width: '100%',
              backgroundColor: 'rgba(15, 23, 42, 0.6)', // Dark transparent background
              borderRadius: '16px',
              overflow: 'hidden',
              backdropFilter: 'blur(15px)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)',
              position: 'relative',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '24px'
            }}>
              {/* Dashboard header */}
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '24px'
              }}>
                <div style={{ 
                  fontSize: '18px',
                  fontWeight: '600',
                  color: 'white'
                }}>
                  CRM & AI Integration Dashboard
                </div>
                <div style={{ 
                  display: 'flex',
                  gap: '12px'
                }}>
                  <div style={{ 
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <SettingsIcon />
                  </div>
                  
                  <div style={{ 
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <NotificationIcon />
                  </div>
                </div>
              </div>
              
              {/* Uproszczony Dashboard content - tylko funnel i metryki */}
              <CustomerFunnel />
              <SimplifiedMetricsPanel />
              
              {/* Achievement Icons - nowe pozycjonowanie */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '40px',
                marginTop: '30px'
              }}>
                {/* Traveler Achievement */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  opacity: 0.5 // Locked state
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    marginBottom: '8px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <TravelerAchievementIcon />
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: '#94A3B8'
                  }}>
                    🗺️ Traveler
                  </div>
                </div>
                
                {/* Explorer Achievement */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  opacity: 1 // Unlocked state
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    marginBottom: '8px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <ExplorerAchievementIcon />
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: '#E2E8F0'
                  }}>
                    🔍 Explorer
                  </div>
                </div>
                
                {/* Conqueror Achievement */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  opacity: 0.5 // Locked state
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    marginBottom: '8px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <ConquerorAchievementIcon />
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: '#94A3B8'
                  }}>
                    👑 Conqueror
                  </div>
                </div>
              </div>
              
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

export default NewOptimizedHero;