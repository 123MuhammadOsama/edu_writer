'use client';
import Image from 'next/image';
import { useState, useRef, useEffect, useMemo } from 'react';
import CTA1 from '@/components/CTA1';
import Writers from '@/components/Writers';
import Academic4 from './Academic4';
import Experince4 from './Experince4';
import FAQ4 from '../Faqs4';
import Academic5 from './Academic5';
import Experince5 from './Experince5';
import FAQ5 from '../Faqs5';
import Academic6 from './Academic6';
import Experince6 from './Experince6';
import FAQ6 from '../Faqs6';

function Services6() {
  const [assignments, setAssignments] = useState(0);
  const [projects, setProjects] = useState(0);
  const [customers, setCustomers] = useState(0);

  const duration = 3000;

  const targetValues = useMemo(
    () => ({
      assignments: 950,
      projects: 500,
      customers: 97,
    }),
    []
  );

  const calculateIncrement = (start, end, duration) => {
    const stepCount = duration / 30; // 30ms interval
    return (end - start) / stepCount;
  };

  const intervals = useRef({
    assignments: null,
    projects: null,
    customers: null,
  });

  useEffect(() => {
    const increments = {
      assignments: calculateIncrement(0, targetValues.assignments, duration),
      projects: calculateIncrement(0, targetValues.projects, duration),
      customers: calculateIncrement(0, targetValues.customers, duration),
    };

    const startCounter = (setCounter, intervalKey, targetValue, increment) => {
      clearInterval(intervals.current[intervalKey]);
      intervals.current[intervalKey] = setInterval(() => {
        setCounter((prevValue) => {
          const nextValue = prevValue + increment;
          if (nextValue >= targetValue) {
            clearInterval(intervals.current[intervalKey]);
            return targetValue;
          } else {
            return nextValue;
          }
        });
      }, 30);
    };

    startCounter(
      setAssignments,
      'assignments',
      targetValues.assignments,
      increments.assignments
    );
    startCounter(
      setProjects,
      'projects',
      targetValues.projects,
      increments.projects
    );
    startCounter(
      setCustomers,
      'customers',
      targetValues.customers,
      increments.customers
    );

    // Copy intervals to a local variable for cleanup
    const currentIntervals = { ...intervals.current };

    return () => {
      Object.values(currentIntervals).forEach(clearInterval);
    };
  }, [targetValues, duration]);

  const content = [
    {
      heading: 'Tweak, Tune, Triumph:',
      text: 'We believe in getting it just right, and that’s why we offer unlimited revisions. Whether it’s a small tweak or a big change, we’ve got your back until it’s perfect!',
    },
    {
      heading: 'Premium Quality Control:',
      text: 'When it comes to your coursework, we’re all about the gold standard. Trust us to deliver quality that impresses, time after time—because you deserve nothing but the best!',
    },
    {
      heading: 'Authenticity, Assured:',
      text: 'No more sweating over copy-paste worries! Our experts deliver unique content that’s tailored to you, with a strict zero-tolerance policy on plagiarism. Because your originality deserves respect.',
    },
    {
      heading: 'All-Night Assistance:',
      text: "Lost in research details or have a last-minute question? No worries! Our team is here 24/7 to keep you on track, any time, any day. Just a message away, whenever you need us!",
    },
  ];

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-24 mt-20 w-full overflow-hidden">
      {/* First Section */}
      <div className="flex flex-col lg:flex-row items-center mt-12 lg:mt-24">
        <div className="w-full xl:w-[750px] 2xl:w-[900px] lg:mr-12 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-[40px] font-bold text-textColor leading-tight">
          High-quality <span className="text-red-500">Research Paper Writing </span>Service for   
            <span className="text-primaryBlue"> Stress-free Success!</span>
          </h1>
          <p className="mt-4 text-base text-[14px] lg:text-[16px] text-textColor">
          With our specialised research paper help, you’ll get expertly written, polished, ready-to-submit masterpieces that make the grade without the late-night grind. Because you deserve more than just a paper—you deserve peace of mind! 
          </p>
          <div className="mt-10">
            <Image
              src="/Reviews.png"
              width="600"
              height="400"
              alt="Trust Pilot"
            />
          </div>
        </div>
        <div className="flex justify-center w-full lg:w-auto mx-auto">
          <Image
            src="/service5.png"
            alt="Service"
            width={600}
            height={600}
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>
      </div>

      {/* Section Container */}
      <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24 mt-16">
        {/* Content Section */}
        <div className="flex-1 ">
          <h2 className="font-bold text-[26px] lg:text-[28px]">
          Need A+? Get Grade-Saving Research Help for Easy Wins!

          </h2>
          <p className="mt-4 text-[14px] lg:text-[16px] text-textColor">
          From research pros to writing wizards you didn’t know you needed, but can’t live without! Just say “Help write my research paper,” relax and let’s handle all the details with creativity, precision, and a student-first approach, delivering excellence every time!
          </p>
          {/* Additional Content */}
          <ul className="mt-6 space-y-6">
                        {content.map((item, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <Image 
                                    src={`/service${i + 1}.png`} 
                                    alt={`Service icon ${i + 1}`} 
                                    width={50} 
                                    height={50} 
                                    className="flex-shrink-0" 
                                />
                                <div>
                                    <h3 className="text-base md:text-lg font-bold">{item.heading}</h3>
                                    <p className="text-sm md:text-base">{item.text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
        </div>

        {/* Card Timer Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center ">
                    <div className="shadow-lg border rounded-xl p-6 sm:p-8 flex flex-col items-center w-full max-w-md">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-3xl font-bold text-center mt-2 lg:mt-10 xl:mt-6 2xl:mt-0">
                            10+ Years of Scholarly Success!
                        </h3>
                        <p className="text-xl lg:text-2xl 2xl:text-xl mt-2 lg:mt-10 xl:mt-6 2xl:mt-4 mb-6 lg:mb-20 2xl:mb-6  text-center">
                            Explore our hallmarks of achievement that reflect our commitment to quality and expertise!
                        </p>
                        <div className="space-y-12 lg:space-y-24 2xl:space-y-12">
                            {[
                                { title: "Expert Assignment Specialists", count: assignments, suffix: "+" },
                                { title: "Successful Projects Completed", count: projects, suffix: "+" },
                                { title: "Student Satisfaction Rate", count: customers, suffix: "%" },
                            ].map(({ title, count, suffix }, idx) => (
                                <div key={idx} className="text-center">
                                    <span className="text-xl md:text-2xl lg:text-6xl 2xl:text-4xl text-primaryBlue font-bold">
                                        {Math.floor(count)}{suffix}
                                    </span>
                                    <p className="text-2xl md:text-base lg:text-2xl 2xl:text-lg">{title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
      </div>

      {/* Other Sections */}
      <div className="mt-16">
        <CTA1
          heading="Ready to Dominate  "
          span=" Your Research?"
          heading2="Let’s Effortlessly Crush It!"
          paragraph="Revolutionise your research paper into a masterpiece with our out-of-the-box expertise—where brilliance meets creativity, and your A+ is just the beginning!"
        />
      </div>
      <div>
        <Academic6 />
      </div>
      <div>
        <Experince6 />
      </div>
      <div className="mt-16">
        <Writers />
      </div>
      <div className="mt-16">
        <FAQ6 />
      </div>
    </div>
  );
}

export default Services6;
