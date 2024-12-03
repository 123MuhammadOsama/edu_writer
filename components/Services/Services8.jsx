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
    <div className="px-4 md:px-8 lg:px-16 xl:px-24 mt-20 w-full overflow-hidden">
      {/* First Section */}
      <div className="flex flex-col lg:flex-row items-center mt-12 lg:mt-24">
        <div className="w-full xl:w-[750px] 2xl:w-[900px] lg:mr-12 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-[40px] font-bold text-textColor leading-tight">
          Error-free    <span className="text-red-500">Editing and Proofreading Services </span>in       
            <span className="text-primaryBlue"> UK</span>
          </h1>
          <p className="mt-4 text-base text-[14px] lg:text-[16px] text-textColor">
          Enhance your words to a superior level with editing that’s sharp, proofreading that’s precise, and a final touch that makes your writing unforgettable. Because perfection is always in the details and we deliver the absolute best!
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
        <div className="flex-1">
          <h2 className="font-bold text-[26px] lg:text-[28px]">
          Transform Messy Manuscripts into Masterpieces!

          </h2>
          <p className="mt-4 text-[14px] lg:text-[16px] text-textColor">
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
