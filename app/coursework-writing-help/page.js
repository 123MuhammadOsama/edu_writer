import Services5 from '@/components/Services/Services5';

export const metadata = {
  slug: 'coursework-writing-help',
  serviceName: 'Get Online Coursework Help from Professionals | Edu Writers UK',
  path: '/coursework-writing-help',
  title: 'Get Online Coursework Help from Professionals | Edu Writers UK',
  description:
    'Struggling with coursework? We provide expert help online at affordable rates. Quality, timely, and tailored to your academic needs. Start today!',
  last_modified: '17/11/2024',
  isoDate: new Date('10/23/2024').toISOString(),
  alternates: {
    canonical: 'https://eduwriters.com',
  },
  openGraph: {
    title: 'Get Online Coursework Help from Professionals | Edu Writers UK',
    description:
      'Struggling with coursework? We provide expert help online at affordable rates. Quality, timely, and tailored to your academic needs. Start today!',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2024-11-11T00:00:00.000Z',
    authors: 'Edu Writers Team',
    site_name: 'Edu Writers',
    url: 'https://eduwriters.com',
    images: [
      {
        url: 'https://eduwriters.com/_next/image?url=%2FLogo.png&w=256&q=75',
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
      <Services5 />
    </>
  );
};

export default ServicePage;
