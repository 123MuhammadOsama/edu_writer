import Services2 from '@/components/Services/Services2';

export const metadata = {
  slug: 'dissertation-writing-help',
  serviceName: 'Edu Writers UK High-Quality Dissertation Writing Help Services',
  path: '/dissertation-writing-help',
  title: 'Edu Writers UK High-Quality Dissertation Writing Help Services',
  description:
    '﻿Get first-rate dissertation writing help from Edu Writers UK. Our expert writers offer dependable and expert assistance to make sure your academic success.',
  last_modified: '17/11/2024',
  isoDate: new Date('10/23/2024').toISOString(),
  alternates: {
    canonical: 'https://eduwriters.com/dissertation-writing-help',
  },
  openGraph: {
    title: 'Edu Writers UK High-Quality Dissertation Writing Help Services',
    description:
      '﻿Get first-rate dissertation writing help from Edu Writers UK. Our expert writers offer dependable and expert assistance to make sure your academic success.',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2024-11-11T00:00:00.000Z',
    authors: 'Edu Writers Team',
    site_name: 'Edu Writers',
    url: 'http://eduwriters.com/_next/image?url=%2FLogo.png&w=256&q=75',
    images: [
      {
        url: 'Logo.png',
        width: 1200,
        height: 628,
        type: 'image/png',
      },
    ],
  },
};

const ServicePage = () => {
  return (
    <>
      <Services2 />
    </>
  );
};

export default ServicePage;
