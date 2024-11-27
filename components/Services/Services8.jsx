'use client';
import Image from 'next/image';
import { useState, useRef, useEffect, useMemo } from 'react';
import CTA1 from '@/components/CTA1';
import Writers from '@/components/Writers';
import FAQ7 from '../Faqs7';
import Academic8 from './Academic8';
import Experince8 from './Experince8';
import FAQ8 from '../Faqs8';

function Services8() {
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
      heading: 'Refinements on Us:',
      text: 'Your satisfaction is our mission. Not happy yet? No worries! We’ll tweak, refine, and polish your work until it’s absolutely flawless—because near-perfect is not perfect enough!',
    },
    {
      heading: 'Verified Success:',
      text: "The thumbs-up says it all! Our services are tried, tested, and loved by students everywhere. With us, every box is checked and every standard is surpassed. High-quality work? 100% Guaranteed.",
    },
    {
      heading: 'Unmatched Uniqueness:',
      text: 'Plagiarism? Not here! Each assignment is crafted from scratch to reflect your unique perspective. Original, creative, and tailored to your needs—because you deserve work as authentic as you are.',
    },
    {
      heading: '24/7 lifesavers:',
      text: "Deadlines at midnight? Panic at dawn? No stress! Our support team works around the clock to ensure you’re never left in the dark. Reach out anytime—we’re always just a message away!",
    },
  ];

  return (
    <div className="px-4 lg:px-8 xl:px-16 2xl:px-32 mt-10 w-full overflow-hidden">
      {/* First Section */}
      <div className="flex flex-col lg:flex-row mt-12 lg:mt-24 items-center">
        <div className="w-full xl:w-[750px] 2xl:w-[900px] lg:mr-12 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-[40px] md:text-5xl font-bold text-textColor leading-tight">
          Error-free    <span className="text-red-500">Editing and Proofreading Services </span>in       
            <span className="text-primaryBlue"> UK</span>
          </h1>
          <p className="mt-4 text-base text-[14px] lg:text-[16px] text-textColor">
          Enhance your words to a superior level with editing that’s sharp, proofreading that’s precise, and a final touch that makes your writing unforgettable. Because perfection is always in the details and we deliver the absolute best!
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
          Transform Messy Manuscripts into Masterpieces!

          </h2>
          <p className="mt-4 text-[14px] lg:text-[16px] w-auto 2xl:w-[1000px] xl:w-[600px]">
          Drop the writing woes, and pick up applause-worthy results—because EduWriters.UK is here to turn your chaos into perfection while you bask in the spotlight like you own it!  

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
          heading="Your Perfect Paper Awaits—Get "
          span=" Excellence Delivered"
          heading2="Right to Your Inbox!"
          paragraph="Let’s turn your good work into outstanding achievements that leave professors speechless—because every idea deserves to be heard loud and clear, without these errors holding it back!"
        />
      </div>
      <div>
        <Academic8 />
      </div>
      <div>
        <Experince8 />
      </div>
      <div className="mt-16">
        <Writers />
      </div>
      <div className="mt-16">
        <FAQ8 />
      </div>
    </div>
  );
}

export default Services8;
