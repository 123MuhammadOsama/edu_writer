'use client';
import Image from "next/image";
import { useState, useRef, useEffect, useMemo } from "react";
import CTA1 from "@/components/CTA1";
import Writers from "@/components/Writers";
import Faqs from "@/components/Faqs3";
import Academic from "./Academic4";
import Experince from "./Experince4";
import Academic2 from "./Academic2";
import Experince2 from "./Experince2";
import FAQ2 from "../Faqs2";

function Services2() {
    const [assignments, setAssignments] = useState(0);
    const [projects, setProjects] = useState(0);
    const [customers, setCustomers] = useState(0);

    const duration = 3000;

    const targetValues = useMemo(() => ({
        assignments: 950,
        projects: 500,
        customers: 97,
    }), []);

    const calculateIncrement = (start, end, duration) => {
        const stepCount = duration / 30; // 30ms interval
        return (end - start) / stepCount;
    };

    const intervals = useRef({ assignments: null, projects: null, customers: null });

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

        startCounter(setAssignments, 'assignments', targetValues.assignments, increments.assignments);
        startCounter(setProjects, 'projects', targetValues.projects, increments.projects);
        startCounter(setCustomers, 'customers', targetValues.customers, increments.customers);

        // Copy intervals to a local variable for cleanup
        const currentIntervals = { ...intervals.current };

        return () => {
            Object.values(currentIntervals).forEach(clearInterval);
        };
    }, [targetValues, duration]);

    const content = [
        {
            heading: "Limitless Revisions:",
            text: "Perfection takes time, and we’re here for it! Enjoy unlimited revisions at no extra cost until you’re completely satisfied with your work. Because when it comes to your success, we’re all in!"
        },
        {
            heading: "Top Quality, Every time:",
            text: "The highest standards, guaranteed. We double-check, triple-check, and then deliver the best of the best! You’ll get only top-quality work ready to impress—no ifs, and’s, or but’s about it."
        },
        {
            heading: "100% Original, Always:",
            text: "Nothing but the real deal here! Every dissertation is crafted from scratch, guaranteeing work that’s fresh, unique, and your’s—because originality is in our DNA."
        },
        {
            heading: "Support On-Demand:",
            text: "We’re here on your schedule! Our team’s available around the clock, so whenever that tricky question hits, you know exactly where to go. Late-night homework crisis? Consider them handled."
        }
    ];

    return (
        <div className="px-4 lg:px-8 xl:px-16 2xl:px-32 mt-20 w-full overflow-hidden">
            {/* First Section */}
            <div className="flex flex-col lg:flex-row mt-12 lg:mt-24 items-center">
                <div className="w-full xl:w-[750px] 2xl:w-[900px] lg:mr-12 text-center lg:text-left mb-8 lg:mb-0">
                    <h1 className="text-[40px] font-bold text-textColor leading-tight">
                    Best    <span className="text-red-500">Dissertation Help</span> That Gets You Closer to 
                        <span className="text-primaryBlue"> Graduation!</span> 
                    </h1>
                    <p className="mt-4 text-base text-[14px] lg:text-[16px] text-textColor">
                    From brainstorming to the final edits, get expert dissertation help services that turn frustration into focus, provide clarity over chaos, and give you the edge you need to win that hard-earned degree—without the usual stress and hassle!
                    </p>
                    <div className="mt-6 mx-auto lg:mx-0 w-3/4 lg:w-full">
                        <Image src="/Reviews.png" alt="Reviews" width={600} height={100} className="w-auto" />
                    </div>
                </div>
                <div className="flex justify-center w-full lg:w-auto mx-auto">
                    <Image src="/service5.png" alt="Service" width={600} height={600} className="w-full max-w-md lg:max-w-lg" />
                </div>
            </div>

            {/* Section Container */}
            <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24 mt-28 mx-20">
                {/* Content Section */}
                <div className="flex-1 2xl:pt-14">
                    <h2 className="font-bold text-[26px] lg:text-[28px]">
                    Want an Academic Boost? Let Us Work for You!
                    </h2>
                    <p className="mt-4 text-[14px] lg:text-[16px] w-auto 2xl:w-[1000px] xl:w-[600px]">
                    Get ready to experience exceptional dissertation writing help with a personal touch! Our UK-based experts are here to deliver the quality you need, right on time, helping you turn deadlines into A+ moments without the all-nighters:
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
                                    <h3 className="text-[16px] font-bold lg:text-[18px]">{item.heading}</h3>
                                    <p className="text-[14px] lg:text-[16px]">{item.text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Card Timer Section */}
                <div className="w-full flex-1 flex justify-center md:flex-row items-center">
                    <div className="shadow-lg border rounded-xl p-8 flex flex-col items-center w-full max-w-md h-[600px] md:h-auto">
                        <div className="font-bold text-3xl text-center">Honouring 10+ Years of Scholarly Success!</div>
                        <p className="text-center mt-2 mb-8 text-[14px] lg:text-[16px]">
                            Explore our hallmarks of achievement that reflect our commitment to quality and expertise!
                        </p>
                        <div className="space-y-16">
                            {[
                                { title: "Expert Assignment Specialists", count: assignments, suffix: "+" },
                                { title: "Successful Projects Completed", count: projects, suffix: "+" },
                                { title: "Student Satisfaction Rate", count: customers, suffix: "%" },
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
                    heading="Need Urgent "
                    span="Help with Dissertation?"
                    heading2="Go from Overwhelmed to Outstanding with Just a Click!"
                    paragraph="Conquer the chaos of dissertation writing with expert support that breaks it down, lifts you up, and gets you closer to the finish line one page at a time!"
                />
            </div>
            <div>
                <Academic2 />
            </div>
            <div>
                <Experince2 />
            </div>
            <div className="mt-16">
                <Writers />
            </div>
            <div className="mt-16">
                <FAQ2 />
            </div>
        </div>
    );
}

export default Services2;
