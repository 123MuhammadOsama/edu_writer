import Services2 from '@/components/Services/Services2';
import Services6 from '@/components/Services/Services6';

export const metadata = {
  slug: 'research-paper-help',
  serviceName: 'Get Affordable Research Paper Help From UK Professionals',
  path: '/research-paper-help',
  title: 'Get Affordable Research Paper Help From UK Professionals',
  description:
    'Need help with research papers? Get affordable, expert assistance for custom, plagiarism-free research papers delivered on time. Order Now!',
  last_modified: '17/11/2024',
  isoDate: new Date('10/23/2024').toISOString(),
  alternates: {
    canonical: 'https://eduwriters.uk/research-paper-help',
  },
  openGraph: {
    title: 'Get Affordable Research Paper Help From UK Professionals',
    description:
      'Need help with research papers? Get affordable, expert assistance for custom, plagiarism-free research papers delivered on time. Order Now!',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2024-11-11T00:00:00.000Z',
    authors: 'Edu Writers Team',
    site_name: 'Edu Writers',
    url: 'https://eduwriters.uk/research-paper-help',
    images: [
      {
        url: 'https://eduwriters.uk/_next/image?url=%2FLogo.png&w=256&q=75',
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
      <Services6 />
    </>
  );
};

export default ServicePage;
