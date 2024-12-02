import Services5 from '@/components/Services/Services5';
import Services7 from '@/components/Services/Services7';

export const metadata = {
  slug: 'case-study-help',
  serviceName: 'Case Study Help UK - Expert Writing Services by Edu Writers',
  path: '/case-study-help',
  title: 'Case Study Help UK - Expert Writing Services by Edu Writers',
  description:
    'Need case study help in the UK? Edu Writers UK offers expert writing services customized to your needs, ensuring academic success with good insights.',
  last_modified: '17/11/2024',
  isoDate: new Date('10/23/2024').toISOString(),
  alternates: {
    canonical: 'https://eduwriters.uk/case-study-help',
  },
  openGraph: {
    title: 'Case Study Help UK - Expert Writing Services by Edu Writers',
    description:
      'Need case study help in the UK? Edu Writers UK offers expert writing services customized to your needs, ensuring academic success with good insights.',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2024-11-11T00:00:00.000Z',
    authors: 'Edu Writers Team',
    site_name: 'Edu Writers',
    url: 'https://eduwriters.uk/case-study-help',
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
      <Services7 />
    </>
  );
};

export default ServicePage;
