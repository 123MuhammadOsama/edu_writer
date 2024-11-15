import Image from 'next/image';
import Hero from '@/components/Hero';
import Writers from '@/components/Writers';
import CTA1 from '@/components/CTA1';
import Services from '@/components/Services';
import CTA2 from '@/components/CTA2';
import Scrollsection from '@/components/Scrollsection';
import Testimonials from '@/components/Testimonials';
import CTA3 from '@/components/CTA3';
import FAQ from '@/components/Faqs';
import Footer from '@/components/Footer';
import Counter from '@/components/Counter';

function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/*  */}
      <Hero />
      <Counter />
      <Writers />
      <CTA1
        heading="Turn Homework Panic into"
        span="Academic Power"
        heading2="with One Click!"
        paragraph="When Life Gets Busy and Assignments Get Tough, We're the Secret to Keeping Your Grades on Top! Because Late Nights and Last-Minute Cramming Are So Last Semester—Let’s Get You Ahead, Stress-Free!"
      />
      <Services />
      <CTA2 />
      <Scrollsection />
      <Testimonials />
      <CTA3 />
      <FAQ />
    </div>
  );
}
export default Home;
