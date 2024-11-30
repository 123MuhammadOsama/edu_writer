'use client';
import Image from 'next/image';
import { useState, useRef, useEffect, useMemo } from 'react';
import CTA1 from '@/components/CTA1';
import Writers from '@/components/Writers';
import Academic7 from './Academic7';
import Experince7 from './Experince7';
import FAQ7 from '../Faqs7';

function Services7() {
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
      heading: 'Polished to Perfection:',
      text: 'Your vision, your standards. Need a few adjustments? No problem! Our unlimited revision policy means we keep going until you’re thrilled with the result. No limits, just results!',
    },
    {
      heading: 'Trusted Excellence:',
      text: "Your case study deserves the highest standards. We're committed to delivering meticulous research, insightful analysis, and impeccable writing, ensuring your work shines no matter what!",
    },
    {
      heading: '100% Human Content:',
      text: 'Authenticity is our promise. Each project is meticulously researched and written from scratch, giving you a 100% original, plagiarism-free guarantee every single time.',
    },
    {
      heading: 'Non-Stop Support:',
      text: "Need answers at midnight? We've got you covered. Our friendly support team is ready around the clock, so you never feel stuck or alone, no matter when inspiration (or frustration) strikes!",
    },
  ];

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-24 mt-20 w-full overflow-hidden">
      {/* First Section */}
      <div className="flex flex-col lg:flex-row items-center mt-12 lg:mt-24">
        <div className="w-full xl:w-[750px] 2xl:w-[900px] lg:mr-12 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-[40px] font-bold text-textColor leading-tight">
          Affordable   <span className="text-red-500">Case Study Help </span>Designed to    
            <span className="text-primaryBlue"> Exceed Expectations</span>
          </h1>
          <p className="mt-4 text-base text-[14px] lg:text-[16px] text-textColor">
          Step by step, stage by stage, expert help with case study transforms your struggles into academic triumphs—delivering sharp analysis, compelling insights, and a standout paper that speaks volumes. 
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
          Stress-Free Academics? It’s Not a Dream—It’s What We Do!


          </h2>
          <p className="mt-4 text-[14px] lg:text-[16px] text-textColor">
          Let us handle the heavy lifting! Professional case study help online platform is crafted for students who refuse to settle, ensuring every paper, project, and problem is a step toward success:

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
        <div className="w-full lg:w-1/2 flex flex-col items-center">
                    <div className="shadow-lg border rounded-xl p-6 sm:p-8 flex flex-col items-center w-full max-w-md">
                        <h3 className="text-2xl md:text-3xl font-bold text-center">
                            10+ Years of Scholarly Success!
                        </h3>
                        <p className="mt-2 mb-6 text-sm md:text-base text-center">
                            Explore our hallmarks of achievement that reflect our commitment to quality and expertise!
                        </p>
                        <div className="space-y-6">
                            {[
                                { title: "Expert Assignment Specialists", count: assignments, suffix: "+" },
                                { title: "Successful Projects Completed", count: projects, suffix: "+" },
                                { title: "Student Satisfaction Rate", count: customers, suffix: "%" },
                            ].map(({ title, count, suffix }, idx) => (
                                <div key={idx} className="text-center">
                                    <span className="text-xl md:text-2xl lg:text-3xl text-primaryBlue font-bold">
                                        {Math.floor(count)}{suffix}
                                    </span>
                                    <p className="text-sm md:text-base">{title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
      </div>

      {/* Other Sections */}
      <div className="mt-16">
        <CTA1
          heading="Your Shortcut to  
"
          span=" Perfect Scores—Expert"
          heading2="Case Study Help for Big Dreamers!"
          paragraph="Let us handle the complexities of your case study while you focus on getting that perfect score. We write with precision, creativity, and expertise, ensuring you shine in every assignment!"
        />
      </div>
      <div>
        <Academic7 />
      </div>
      <div>
        <Experince7 />
      </div>
      <div className="mt-16">
        <Writers />
      </div>
      <div className="mt-16">
        <FAQ7 />
      </div>
    </div>
  );
}

export default Services7;
