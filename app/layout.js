import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  slug: 'home',
  serviceName: "World's Leading Edu Writers UK",
  path: '/',
  title: 'Professional Essay Writing Services | Edu Writers UK For Hire',
  description:
    'Hand over your stress to Edu Writers UK at fair costs. We provide the best assistance, 100% confidentiality, plagiarism-free content & unlimited revisions.',
  last_modified: '17/11/2024',
  isoDate: new Date('10/23/2024').toISOString(),
  alternates: {
    canonical: 'https://eduwriters.com',
  },
  openGraph: {
    title: 'Professional Essay Writing Services | Edu Writers UK For Hire',
    description:
      'Hand over your stress to Edu Writers UK at fair costs. We provide the best assistance, 100% confidentiality, plagiarism-free content & unlimited revisions.',
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col ">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
