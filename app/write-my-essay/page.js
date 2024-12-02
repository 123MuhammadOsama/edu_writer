import Services3 from '@/components/Services/Services3';

export const metadata = {
  slug: 'write-my-essay',
  serviceName: 'Write My Essay For Me - With the Help of Edu Writers',
  path: '/write-my-essay',
  title: 'Write My Essay For Me - With the Help of Edu Writers',
  description:
    "We deliver the fastest delivery time and overcomes students' stress by providing well-researched essays in 50+ subjects. Save your time asap.",
  last_modified: '17/11/2024',
  isoDate: new Date('10/23/2024').toISOString(),
  alternates: {
    canonical: 'https://eduwriters.uk/write-my-essay',
  },
  openGraph: {
    title: 'Write My Essay For Me - With the Help of Edu Writers',
    description:
      "We deliver the fastest delivery time and overcomes students' stress by providing well-researched essays in 50+ subjects. Save your time asap.",
    locale: 'en_US',
    type: 'article',
    publishedTime: '2024-11-11T00:00:00.000Z',
    authors: 'Edu Writers Team',
    site_name: 'Edu Writers',
    url: 'http://eduwriters.uk/write-my-essay',
    images: [
      {
        url: 'Logo.png',
        width: 1200,
        height: 628,
        type: 'https://edu-writers.uk/_next/image?url=%2FLogo.png&w=256&q=75',
      },
    ],
  },
};

const ServicePage = () => {
  return (
    <>
      <Services3 />
    </>
  );
};

export default ServicePage;
