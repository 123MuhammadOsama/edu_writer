import Services8 from '@/components/Services/Services8';

export const metadata = {
  slug: 'editing-and-proofreading-services',
  serviceName: 'Editing and Proofreading Services| Edu Writers UK',
  path: '/editing-and-proofreading-services',
  title: 'Editing and Proofreading Services| Edu Writers UK',
  description:
    'Get professional editing and proofreading services at Edu Writers UK. Boost your writing with expert editing, ensuring precision and accuracy',
  last_modified: '17/11/2024',
  isoDate: new Date('10/23/2024').toISOString(),
  alternates: {
    canonical: 'https://eduwriters.uk/editing-and-proofreading-services',
  },
  openGraph: {
    title: 'Editing and Proofreading Services| Edu Writers UK',
    description:
      'Get professional editing and proofreading services at Edu Writers UK. Boost your writing with expert editing, ensuring precision and accuracy',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2024-11-11T00:00:00.000Z',
    authors: 'Edu Writers Team',
    site_name: 'Edu Writers',
    url: 'https://eduwriters.uk/editing-and-proofreading-services',
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
      <Services8 />
    </>
  );
};

export default ServicePage;
