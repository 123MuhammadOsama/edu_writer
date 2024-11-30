import Services4 from '@/components/Services/Services4';

export const metadata = {
  slug: 'thesis-writing-help',
  serviceName: 'Thesis Writing Help - By Professional Thesis Writing Experts',
  path: '/thesis-writing-help',
  title: 'Thesis Writing Help - By Professional Thesis Writing Experts',
  description:
    'Leading thesis writing help company provides quickest turnaround time by providing custom-written papers with 100% originality before the deadline.',
  last_modified: '17/11/2024',
  isoDate: new Date('10/23/2024').toISOString(),
  alternates: {
    canonical: 'https://eduwriters.com/dissertation-writing-help',
  },
  openGraph: {
    title: 'Thesis Writing Help - By Professional Thesis Writing Experts',
    description:
      'Leading thesis writing help company provides quickest turnaround time by providing custom-written papers with 100% originality before the deadline.',
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
      <Services4 />
    </>
  );
};

export default ServicePage;
