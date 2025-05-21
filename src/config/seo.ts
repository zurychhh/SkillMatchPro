import { SeoProps } from '@/types';

// Base URL of the website
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://oleksiakconsult.com';

// Default SEO properties
const defaultSeo: SeoProps = {
  title: 'Oleksiak Consult - Professional Business Consulting',
  description: 'Expert business consulting services to help your organization achieve sustainable growth, operational excellence, and strategic innovation.',
  openGraph: {
    type: 'website',
    url: baseUrl,
    siteName: 'Oleksiak Consult',
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        alt: 'Oleksiak Consult logo',
      },
    ],
  },
};

// Page-specific SEO configurations
export const pageSeo: Record<string, SeoProps> = {
  home: {
    ...defaultSeo,
  },
  services: {
    title: 'Our Services - Oleksiak Consult',
    description: 'Explore our comprehensive range of business consulting services designed to drive growth, efficiency, and transformation for your organization.',
    openGraph: {
      ...defaultSeo.openGraph,
      url: `${baseUrl}/services`,
    },
  },
  about: {
    title: 'About Us - Oleksiak Consult',
    description: 'Learn about Oleksiak Consult, our mission, vision, and the expert team behind our business consulting services.',
    openGraph: {
      ...defaultSeo.openGraph,
      url: `${baseUrl}/about`,
    },
  },
  blog: {
    title: 'Blog - Oleksiak Consult',
    description: 'Latest insights, tips, and expert advice on business consulting, strategy, and growth.',
    openGraph: {
      ...defaultSeo.openGraph,
      url: `${baseUrl}/blog`,
    },
  },
  contact: {
    title: 'Contact Us - Oleksiak Consult',
    description: 'Get in touch with Oleksiak Consult. Contact us for business consulting services, inquiries, or to schedule a consultation.',
    openGraph: {
      ...defaultSeo.openGraph,
      url: `${baseUrl}/contact`,
    },
  },
};

export default defaultSeo;
