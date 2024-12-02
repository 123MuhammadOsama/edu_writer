import AboutUs from '@/components/AboutUs';

export const metadata = {
  slug: 'about',
  serviceName: "World's Leading Edu Writers UK - About Us",
  path: '/about',
  title: "World's Leading Edu Writers UK - About Us",
  description:
    'Let us help you write academic papers with real pros and reduce your stress with the assistance of our skilled edu writers.',
  last_modified: '17/11/2024',
  isoDate: new Date('10/23/2024').toISOString(),
  alternates: {
    canonical: 'https://eduwriters.uk/about',
  },
  openGraph: {
    title: "World's Leading Edu Writers UK - About Us",
    description:
      'Let us help you write academic papers with real pros and reduce your stress with the assistance of our skilled edu writers.',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2024-11-11T00:00:00.000Z',
    authors: 'Edu Writers Team',
    site_name: 'Edu Writers',
    url: 'https://eduwriters.uk/about',
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

function about() {
  return (
    <div className="mt-10 overflow-hidden">
      <AboutUs />
    </div>
  );
}

export default about;
