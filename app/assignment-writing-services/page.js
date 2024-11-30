import Services1 from '@/components/Services/Services1';

export const metadata = {
  slug: '/assignment-writing-services',
  serviceName: 'Assignment Writing Service - Best Edu Writers UK',
  path: '/assignment-writing-services',
  title: 'Assignment Writing Service - Best Edu Writers UK',
  description:
    'We at Edu Writers provide assignment writing services at affordable rates so every student can live stress-free during chaos Choose your expert writer for 24/7 assistance.',
  last_modified: '17/11/2024',
  isoDate: new Date('10/23/2024').toISOString(),
  alternates: {
    canonical: 'https://eduwriters.com',
  },
  openGraph: {
    title: 'Assignment Writing Service - Best Edu Writers UK',
    description:
      'We at Edu Writers provide assignment writing services at affordable rates so every student can live stress-free during chaos Choose your expert writer for 24/7 assistance.',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2024-11-11T00:00:00.000Z',
    authors: 'Edu Writers Team',
    site_name: 'Edu Writers',
    url: 'https://eduwriters.com/assignment-writing-services',
    images: [
      {
        url: 'https://eduwriters.com/_next/image?url=%2FLogo.png&w=256&q=75',
        width: 1200,
        height: 628,
        type: 'image/jpeg',
      },
    ],
  },
};
const ServicePage = () => {
  return (
    <>
      <Services1 />
    </>
  );
};

export default ServicePage;
