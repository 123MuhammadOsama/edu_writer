'use client';
import Image from 'next/image';
import { useState, useRef, useEffect, useMemo } from 'react';
import CTA1 from '@/components/CTA1';
import Writers from '@/components/Writers';
import FAQ3 from '@/components/Faqs3';
import Experince3 from './Experince3';
import Academic3 from './Academic3';

function Services3() {
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
      heading: 'Perfected to Perfection:',
      text: 'Unlimited free revisions, zero worries. We won’t stop until your ideas shine exactly as you imagined. Because your satisfaction is our top priority!',
    },
    {
      heading: 'Custom Quality Assurance:',
      text: 'From research to final touches, our quality assurance process ensures you get only the best at all times. Turn in your flawless, A+ worthy essays with full confidence!',
    },
    {
      heading: 'No Plagiarism, Promise:',
      text: 'Original work, tailored to perfection! Plagiarism-free, creativity-full. We craft each essay from the ground up to make sure it’s 100% you.',
    },
    {
      heading: 'Instant Relief, Anytime:',
      text: 'No matter the hour, we’re here for you! With our 24/7 support, you get answers, updates, and even some last-minute help right when you need it. Rest easy—our team’s on standby.',
    },
  ];

  return (
    <div className="px-4 lg:px-8 xl:px-16 2xl:px-32 mt-10 w-full overflow-hidden">
      {/* First Section */}
      <div className="flex flex-col lg:flex-row mt-12 lg:mt-24 items-center">
        <div className="w-full xl:w-[750px] 2xl:w-[900px] lg:mr-12 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-[40px] md:text-5xl font-bold text-textColor leading-tight">
            Best <span className="text-red-500">Write My Essay Fast: </span>Quality Papers for 
            <span className="text-primaryBlue"> Busy Students!</span>
          </h1>
          <p className="mt-4 text-base text-[14px] lg:text-[16px] text-textColor">
          When the pressure’s on and you just need someone to ‘write my essay for me,’ we’re the reliable, witty, and skilled writing team who will get it done—exactly how you imagined it, only better! 
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
          Expert Essay Help to Save You Time, Energy, & Stress!
          </h2>
          <p className="mt-4 text-[14px] lg:text-[16px] w-auto 2xl:w-[1000px] xl:w-[600px]">
          Empowering students with our phenomenal Write My Essay UK support that goes above and beyond—no stress, no missed deadlines, just results that impress. Why hesitate then? Opt for us to set you up for a winning finish every time:
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
            Explore our hallmarks of achievement that reflect our commitment to quality and expertise!
            </div>
            <p className="text-center mt-2 mb-8 text-[14px] lg:text-[16px]">
              Explore our hallmarks of achievement that reflect our commitment
              to quality and expertise!
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
          heading="Hit the Button and  "
          span=" Swap Panic for Progress"
          heading2="– Because Your Goals Deserve the Best!"
          paragraph="We get it—deadlines loom, ideas are running low, and to “write an essay” feels daunting. Let our pros craft your A+ paper with creativity, research, and finesse. Your success starts here!"
        />
      </div>
      <div>
        <Academic3 />
      </div>
      <div>
        <Experince3 />
      </div>
      <div className="mt-16">
        <Writers />
      </div>
      <div className="mt-16">
        <FAQ3 />
      </div>
    </div>
  );
}

export default Services3;
