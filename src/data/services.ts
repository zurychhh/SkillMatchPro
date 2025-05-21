import React from 'react';

// Define the service interface
interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  benefits: string[];
}

// Service icons as React components
const StrategyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2 9.364V2h7.364v7.364H2zm12.636 0V2H22v7.364h-7.364zm0 12.636v-7.364H22v7.364h-7.364zM2 22v-7.364h7.364V22H2z" />
  </svg>
);

const OperationsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  </svg>
);

const DigitalIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const ChangeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 2v6h-6" />
    <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
    <path d="M3 22v-6h6" />
    <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
  </svg>
);

const MarketIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const LeadershipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

// Export services data
export const services: Service[] = [
  {
    id: 'strategy',
    title: 'Strategic Planning',
    description: 'Develop comprehensive business strategies aligned with your vision and market opportunities to drive sustainable growth and competitive advantage.',
    icon: StrategyIcon,
    benefits: [
      'Clear roadmap for business growth',
      'Alignment of resources and capabilities',
      'Improved decision-making framework',
      'Competitive positioning strategies',
      'Risk assessment and mitigation plans'
    ],
  },
  {
    id: 'operations',
    title: 'Operations Optimization',
    description: 'Streamline your business operations to enhance efficiency, reduce costs, and improve overall performance across your organization.',
    icon: OperationsIcon,
    benefits: [
      'Reduced operational costs',
      'Improved process efficiency',
      'Optimized resource allocation',
      'Enhanced quality control systems',
      'Scalable operational frameworks'
    ],
  },
  {
    id: 'digital',
    title: 'Digital Transformation',
    description: 'Leverage digital technologies to transform your business model, processes, and customer experiences to remain competitive in the digital age.',
    icon: DigitalIcon,
    benefits: [
      'Modernized business systems',
      'Enhanced digital customer experience',
      'Data-driven decision making',
      'Improved technological agility',
      'Digital product and service innovation'
    ],
  },
  {
    id: 'change',
    title: 'Change Management',
    description: 'Successfully navigate organizational changes with structured approaches that ensure employee engagement, minimize resistance, and maintain productivity.',
    icon: ChangeIcon,
    benefits: [
      'Smooth transition during transformations',
      'Reduced resistance to change',
      'Improved stakeholder engagement',
      'Enhanced organizational resilience',
      'Cultural alignment with strategic goals'
    ],
  },
  {
    id: 'market',
    title: 'Market Research & Analysis',
    description: 'Gain valuable insights into market trends, customer preferences, and competitive landscapes to inform strategic decisions and identify new opportunities.',
    icon: MarketIcon,
    benefits: [
      'Data-driven market entry strategies',
      'Competitive intelligence',
      'Customer needs assessment',
      'Market trend forecasting',
      'Opportunity identification'
    ],
  },
  {
    id: 'leadership',
    title: 'Leadership Development',
    description: 'Build strong leadership capabilities within your organization to drive innovation, inspire teams, and execute strategic initiatives effectively.',
    icon: LeadershipIcon,
    benefits: [
      'Enhanced leadership competencies',
      'Improved team performance',
      'Succession planning frameworks',
      'Leadership alignment with strategy',
      'Organizational culture enhancement'
    ],
  },
];

export default services;
