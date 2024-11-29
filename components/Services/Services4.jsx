'use client';
import Image from 'next/image';
import { useState, useRef, useEffect, useMemo } from 'react';
import CTA1 from '@/components/CTA1';
import Writers from '@/components/Writers';
import Academic4 from './Academic4';
import Experince4 from './Experince4';
import FAQ4 from '../Faqs4';

function Services4() {
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
      heading: 'Your Vision, Perfected:',
      text: 'Need adjustments or a new perspective? Just let us know, and we’ll make it right exactly how you want—no limits, no extra fees, just unwavering support for your satisfaction!',
    },
    {
      heading: 'Quality, No Compromise:',
      text: 'Precision, perfection, and a bit of polish. Our team brings out the best in your thesis, ensuring it’s flawless and up to high academic standards. Because we don’t settle for “good enough.”',
    },
    {
      heading: 'No Copies, Just Originality:',
      text: 'Your work, your way! Each thesis is crafted uniquely for you, with careful research and zero plagiarism—guaranteed fresh, authentic, and totally yours.',
    },
    {
      heading: 'Ready to Help, 24/7:',
      text: 'Sacrificing sleep? We’re right there with you. Get answers, updates, and support anytime with our round-the-clock service. No more waiting or stressing—just reach out and get set ready to succeed!',
    },
  ];

  return (
    <div className="px-4 lg:px-8 xl:px-16 2xl:px-32 mt-10 w-full overflow-hidden">
      {/* First Section */}
      <div className="flex flex-col lg:flex-row mt-12 lg:mt-24 items-center">
        <div className="w-full xl:w-[750px] 2xl:w-[900px] lg:mr-12 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-[40px] md:text-5xl font-bold text-textColor leading-tight">
          Professional   <span className="text-red-500">Thesis Writing Help </span>to Bring  
            <span className="text-primaryBlue"> Your Ideas to Life!</span>
          </h1>
          <p className="mt-4 text-base text-[14px] lg:text-[16px] text-textColor">
          With our personalised help with thesis writing, we’ll simplify the journey, ease the stress, and help you craft a masterpiece you can be proud of. No all-nighters, no endless revisions –  just real results! 
          </p>
          <div className="mt-6 mx-auto lg:mx-0 w-3/4 lg:w-full">
            <Image
              src="/Reviews.png"
              alt="Reviews"
              width={600}
              height={100}
              className="w-auto"
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
      <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24 mt-28 mx-20">
        {/* Content Section */}
        <div className="flex-1 2xl:pt-14">
          <h2 className="font-bold text-[26px] lg:text-[28px]">
          Achieve Academic Success the Smart Way—Faster, Better, Stress-Free!
          </h2>
          <p className="mt-4 text-[14px] lg:text-[16px] w-auto 2xl:w-[1000px] xl:w-[600px]">
          Our trusted UK-based thesis help online team is here to get you ahead, leaving late-night cramming behind and setting you up for a winning finish every time effortlessly:
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
                <div className="w-auto 2xl:w-[900px] xl:w-[600px]">
                  <h3 className="text-[16px] font-bold lg:text-[18px]">
                    {item.heading}
                  </h3>
                  <p className="text-[14px] lg:text-[16px]">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Card Timer Section */}
        <div className="w-full flex-1 flex justify-center md:flex-row items-center">
          <div className="shadow-lg border rounded-xl p-8 flex flex-col items-center w-full max-w-md h-[600px] md:h-auto">
            <div className="font-bold text-3xl text-center">
            Honouring 10+ Years of Scholarly Success!
            </div>
            <p className="text-center mt-2 mb-8 text-[14px] lg:text-[16px]">
            Explore our hallmarks of achievement that reflect our commitment to quality and expertise!

            </p>
            <div className="space-y-16">
              {[
                {
                  title: 'Expert Assignment Specialists',
                  count: assignments,
                  suffix: '+',
                },
                {
                  title: 'Successful Projects Completed',
                  count: projects,
                  suffix: '+',
                },
                {
                  title: 'Student Satisfaction Rate',
                  count: customers,
                  suffix: '%',
                },
              ].map(({ title, count, suffix }, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-6xl text-primaryBlue font-bold">
                    {Math.floor(count)}
                    {suffix}
                  </span>
                  <p className="text-center">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <div className="mt-16">
        <CTA1
          heading="Dreaming of  "
          span=" Perfect Submission?"
          heading2="Get Ahead with UK’s Finest Thesis Help!"
          paragraph="Don’t let the weight of your thesis pull you down. Your search ends now. From tight deadlines to top grades, our skilled team handles each section with care and precision. Let’s turn your ‘help me write my thesis for me’ into victories!"
        />
      </div>
      <div>
        <Academic4 />
      </div>
      <div>
        <Experince4 />
      </div>
      <div className="mt-16">
        <Writers />
      </div>
      <div className="mt-16">
        <FAQ4 />
      </div>
    </div>
  );
}

export default Services4;
