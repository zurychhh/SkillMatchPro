import React from 'react';
import { useResponsive } from '../layout/Responsive';
import { Column, Row, Flex } from '../layout/Flex';
import Container from '../layout/Container';

// SVG dla Technical Mastery
const TechnicalMasteryIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="url(#tech-gradient)" />
    <g transform="translate(5, 8)">
      <path d="M18.4125 0.0562542C17.6156 -0.173433 16.7859 0.290629 16.5563 1.0875L10.5563 22.0875C10.3266 22.8844 10.7906 23.7141 11.5875 23.9438C12.3844 24.1734 13.2141 23.7094 13.4438 22.9125L19.4438 1.9125C19.6734 1.11563 19.2094 0.285942 18.4125 0.0562542ZM22.1906 5.68594C21.6047 6.27188 21.6047 7.22344 22.1906 7.80938L26.3766 12L22.1859 16.1906C21.6 16.7766 21.6 17.7281 22.1859 18.3141C22.7719 18.9 23.7234 18.9 24.3094 18.3141L29.5594 13.0641C30.1453 12.4781 30.1453 11.5266 29.5594 10.9406L24.3094 5.69063C23.7234 5.10469 22.7719 5.10469 22.1859 5.69063L22.1906 5.68594ZM5.80313 5.68594C5.21719 5.10 4.26563 5.10 3.67969 5.68594L0.429688 8.92031C-0.15625 9.50625 -0.15625 10.4578 0.429688 11.0438L7.80469 18.4188C8.39063 19.0047 9.34219 19.0047 9.92813 18.4188C10.5141 17.8328 10.5141 16.8813 9.92813 16.2953L3.60469 9.97969L5.80313 7.80469C6.38906 7.21875 6.38906 6.26719 5.80313 5.68594Z" fill="white"/>
    </g>
    <defs>
      <linearGradient id="tech-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#9B55C6" />
        <stop offset="100%" stopColor="#5F7EE8" />
      </linearGradient>
    </defs>
  </svg>
);

// SVG dla Business Strategy
const BusinessStrategyIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="url(#business-gradient)" />
    <g transform="translate(8, 8)">
      <path d="M7.40625 0.75C7.40625 0.3375 7.06875 0 6.65625 0C6.24375 0 5.90625 0.3375 5.90625 0.75V1.5H5.15625C4.74375 1.5 4.40625 1.8375 4.40625 2.25C4.40625 2.6625 4.74375 3 5.15625 3H5.90625V4.5H3.47813C2.95781 4.5 2.53125 4.92656 2.53125 5.44687C2.53125 5.56406 2.55469 5.67656 2.59219 5.78906L4.11563 9.75H4.03125C3.40781 9.75 2.90625 10.2516 2.90625 10.875C2.90625 11.4984 3.40781 12 4.03125 12H4.21875L3.46875 18H9.84375L9.09375 12H9.28125C9.90469 12 10.4062 11.4984 10.4062 10.875C10.4062 10.2516 9.90469 9.75 9.28125 9.75H9.19687L10.7203 5.78906C10.7578 5.67656 10.7812 5.56406 10.7812 5.44687C10.7812 4.92656 10.3547 4.5 9.83438 4.5H7.40625V3H8.15625C8.56875 3 8.90625 2.6625 8.90625 2.25C8.90625 1.8375 8.56875 1.5 8.15625 1.5H7.40625V0.75Z" fill="white"/>
    </g>
    <defs>
      <linearGradient id="business-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#4F46E5" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
  </svg>
);

// SVG dla Data Management
const DataManagementIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="url(#data-gradient)" />
    <g transform="translate(8, 8)">
      <path d="M12 14.4C10.2326 14.4 8.51992 14.0246 7.08739 13.3214C5.65486 12.6182 4.58579 11.6186 4 10.5V13.5C4 14.328 4.41649 15.162 5.20629 15.834C5.98638 16.5 7.08036 17.0508 8.36354 17.4567C9.65905 17.8646 11.0897 18.075 12.5302 18.075C13.9708 18.075 15.4014 17.8646 16.697 17.4567C17.9801 17.0508 19.0741 16.5 19.8542 15.834C20.6439 15.162 21.0604 14.328 21.0604 13.5V10.5C20.4746 11.6186 19.4056 12.6182 17.973 13.3214C16.5405 14.0246 14.8279 14.4 13.0604 14.4H12Z" fill="white"/>
      <path d="M12 10.8C10.2326 10.8 8.51992 10.4246 7.08739 9.72136C5.65486 9.01815 4.58579 8.01864 4 6.9V9.9C4 10.728 4.41649 11.562 5.20629 12.234C5.98638 12.9 7.08036 13.4508 8.36354 13.8567C9.65905 14.2646 11.0897 14.475 12.5302 14.475C13.9708 14.475 15.4014 14.2646 16.697 13.8567C17.9801 13.4508 19.0741 12.9 19.8542 12.234C20.6439 11.562 21.0604 10.728 21.0604 9.9V6.9C20.4746 8.01864 19.4056 9.01815 17.973 9.72136C16.5405 10.4246 14.8279 10.8 13.0604 10.8H12Z" fill="white"/>
      <path d="M12.5302 7.2C15.4367 7.2 18.187 6.30458 20.1232 4.77208C22.0595 3.23958 23.0604 1.18172 23.0604 -4.91258e-07C23.0604 -1.18172 22.0595 -3.23958 20.1232 -4.77208C18.187 -6.30458 15.4367 -7.2 12.5302 -7.2C9.62373 -7.2 6.87346 -6.30458 4.93725 -4.77208C3.00103 -3.23958 2 -1.18172 2 -4.91258e-07C2 1.18172 3.00103 3.23958 4.93725 4.77208C6.87346 6.30458 9.62373 7.2 12.5302 7.2Z" fill="white"/>
    </g>
    <defs>
      <linearGradient id="data-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#6366F1" />
      </linearGradient>
    </defs>
  </svg>
);

// SVG dla Campaign Execution
const CampaignExecutionIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="url(#campaign-gradient)" />
    <g transform="translate(8, 8)">
      <path d="M20.25 5.25H3.75V2.25C3.75 1.42969 4.42969 0.75 5.25 0.75H18.75C19.5703 0.75 20.25 1.42969 20.25 2.25V5.25ZM20.25 6.75V21.75C20.25 22.5703 19.5703 23.25 18.75 23.25H5.25C4.42969 23.25 3.75 22.5703 3.75 21.75V6.75H20.25ZM9 15.75V12.75L6 15.75H9ZM9 15.75H15V12.75L18 15.75H15H9ZM9 15.75V12.75H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <linearGradient id="campaign-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#EC4899" />
        <stop offset="100%" stopColor="#F43F5E" />
      </linearGradient>
    </defs>
  </svg>
);

// SVG dla Project Implementation
const ProjectImplementationIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="url(#project-gradient)" />
    <g transform="translate(11, 11)">
      <path d="M6.5625 7.125H14.625M6.5625 3.375H14.625M6.5625 10.875H14.625M6.5625 14.625H14.625M3.375 7.125H3.3825M3.375 3.375H3.3825M3.375 10.875H3.3825M3.375 14.625H3.3825M16.875 8.4375V15.1875C16.875 15.8684 16.3059 16.4375 15.625 16.4375H2.375C1.69406 16.4375 1.125 15.8684 1.125 15.1875V2.8125C1.125 2.13156 1.69406 1.5625 2.375 1.5625H12.6562" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <linearGradient id="project-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>
  </svg>
);

// SVG dla ROI Specialization
const ROISpecializationIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="url(#roi-gradient)" />
    <g transform="translate(8, 8)">
      <path d="M16 20V4M8 20V4M4 16L20 16M4 8L20 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 21L17 17M20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <linearGradient id="roi-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
    </defs>
  </svg>
);

// SVG dla punktów - dostosowany do kolorów brandbooka
const BulletPoint = () => (
  <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="3" cy="3" r="3" fill="#6366F1"/> {/* Primary: #6366F1 (Indigo) */}
  </svg>
);

// Data dla poszczególnych pilarów - zaktualizowana treść
const compactPillarsData = [
  {
    id: 1,
    title: "Technical Mastery",
    icon: <TechnicalMasteryIcon />,
    items: [
      "Platform integration",
      "Custom APIs",
      "AI implementations"
    ]
  },
  {
    id: 2,
    title: "Business Strategy",
    icon: <BusinessStrategyIcon />,
    items: [
      "ROI focus",
      "Customer lifecycle",
      "B2B/B2C tactics"
    ]
  },
  {
    id: 3,
    title: "Data Management",
    icon: <DataManagementIcon />,
    items: [
      "KPI frameworks",
      "Real-time dashboards",
      "Data quality"
    ]
  },
  {
    id: 4,
    title: "Campaign Execution",
    icon: <CampaignExecutionIcon />,
    items: [
      "150+ tactics",
      "Personalization",
      "Lifecycle optimization"
    ]
  },
  {
    id: 5,
    title: "Project Implementation",
    icon: <ProjectImplementationIcon />,
    items: [
      "Agile methods",
      "Six Sigma",
      "30-60-90 roadmaps"
    ]
  },
  {
    id: 6,
    title: "ROI Specialization",
    icon: <ROISpecializationIcon />,
    items: [
      "Performance pricing",
      "Guaranteed returns",
      "CAC reduction"
    ]
  }
];

// Interfejs dla danych pilara
interface PillarItem {
  id: number;
  title: string;
  icon: React.ReactNode;
  items: string[];
}

// Interfejs dla props karty pilara
interface CompactPillarCardProps {
  title: string;
  icon: React.ReactNode;
  items: string[];
  style?: React.CSSProperties;
}

// Kompaktowa karta pilarów - zgodna z biblioteką komponentów i brandbook
const CompactPillarCard: React.FC<CompactPillarCardProps> = ({ title, icon, items, style = {} }) => {
  const { isMobile } = useResponsive();
  
  return (
    <div style={{ 
      width: '100%', 
      height: '120px',
      background: 'white',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)', // Shadows wg brandbooka
      borderRadius: '12px', // Border radius: 12px (cards) wg brandbooka
      border: '1px solid #E2E8F0', // Subtelna obramówka zgodna z komponentami
      padding: '16px', // Cards: 16px padding wg brandbooka
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      ...style
    }}>
      {/* Icon */}
      <div style={{ 
        marginRight: '16px', // Spacing system: 16px
        flexShrink: 0
      }}>
        {icon}
      </div>
      
      {/* Content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1
      }}>
        <div style={{ 
          color: '#1E293B', // Background Dark z brandbooka, używane też jako główny kolor tekstu
          fontSize: '16px',
          fontWeight: '600', // Nagłówki kart, nie główne nagłówki
          marginBottom: '8px' // Spacing system: 8px
        }}>
          {title}
        </div>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4px' // Base unit: 4px wg brandbooka
        }}>
          {items.map((item: string, index: number) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px' // Spacing system: 8px
            }}>
              <BulletPoint />
              <div style={{
                fontSize: '14px',
                color: '#6B7280', // Text Gray wg brandbooka
                fontWeight: '400' // Body text: 400-500 wg brandbooka
              }}>
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Kompaktowa sekcja Pillars dostosowana do biblioteki komponentów i brandbooka
const CompactPillarsSection = () => {
  const { isMobile, isTablet } = useResponsive();
  
  return (
    <section style={{
      background: 'white',
      padding: isMobile ? '40px 0' : '60px 0'
    }}>
      <Container>
        {/* Header - zgodnie z wytycznymi brandbooka */}
        <div style={{
          textAlign: 'center',
          marginBottom: '32px' // Spacing system: 32px
        }}>
          <h2 style={{
            fontSize: isMobile ? '24px' : '30px',
            fontWeight: '700', // Headlines: 700 wg brandbooka
            color: '#1E293B', // Background Dark wg brandbooka
            marginBottom: '16px' // Spacing system: 16px
          }}>
            Six Pillars of CRM Success we bring to the table
          </h2>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.5',
            color: '#6B7280', // Text Gray wg brandbooka
            maxWidth: '800px',
            margin: '0 auto',
            fontWeight: '400' // Body text: 400-500 wg brandbooka
          }}>
            Our comprehensive technical approach integrates cutting-edge AI with proven CRM methodologies to deliver measurable business outcomes.
          </p>
        </div>
        
        {/* Cards Grid - dostosowane do biblioteki komponentów */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
          gap: '20px', // Grid gap: 20px standard wg brandbooka
          marginBottom: '32px' // Spacing system: 32px
        }}>
          {compactPillarsData.map((pillar) => (
            <CompactPillarCard
              key={pillar.id}
              title={pillar.title}
              icon={pillar.icon}
              items={pillar.items}
            />
          ))}
        </div>
        
        {/* CTA Button z gradientem zgodnym z Achievement System */}
        <div style={{
          width: '100%',
          marginTop: '32px' // Spacing system: 32px
        }}>
          <button style={{
            width: '100%',
            padding: '16px', // Buttons: 16px vertical padding
            background: 'linear-gradient(90deg, #3B82F6, #1E40AF)', // Traveler gradient wg brandbooka
            color: '#F8FAFC', // Text Light wg brandbooka
            fontSize: '16px',
            fontWeight: '600', // CTA buttons: font-weight 600 wg brandbooka
            border: 'none',
            borderRadius: '8px', // Border radius: 8px (buttons) wg brandbooka
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)' // Shadows wg brandbooka
          }}>
            Join Our Community - Unlock achievements and exclusive resources
          </button>
        </div>
      </Container>
    </section>
  );
};

export default CompactPillarsSection;