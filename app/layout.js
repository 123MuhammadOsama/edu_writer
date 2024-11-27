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
  title: "World's Leading Edu Writers UK - About Us",
  description:
    'Let us help you write academic papers with real pros and reduce your stress with the assistance of our skilled edu writers.',
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
