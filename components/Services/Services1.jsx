'use client';
import Image from "next/image";
import { useState, useRef, useEffect, useMemo } from "react";
import CTA1 from "@/components/CTA1";
import Writers from "@/components/Writers";
import Academic1 from "./Academic1";
import Experince1 from "./Experince1";
import FAQ1 from "../Faqs1";

function Services1() {
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
    
        const currentIntervals = { ...intervals.current }; // Copy ref value
    
        const startCounter = (setCounter, intervalKey, targetValue, increment) => {
            clearInterval(currentIntervals[intervalKey]); // Use the local copy here
            currentIntervals[intervalKey] = setInterval(() => {
                setCounter((prevValue) => {
                    const nextValue = prevValue + increment;
                    if (nextValue >= targetValue) {
                        clearInterval(currentIntervals[intervalKey]);
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
    
        return () => {
            Object.values(currentIntervals).forEach(clearInterval); // Cleanup with the local copy
        };
    }, [targetValues, duration]);
    

    const content = [
        {
            heading: "Fine-Tune Without Limits:",
            text: "Need adjustments? We've got you covered! We provide unlimited revisions to ensure every detail aligns with your vision. Your satisfaction is our priority, and we won't stop until you're delighted with the outcome.",
        },
        {
            heading: "First-Class Quality:",
            text: "A+ Quality is our standard! From thorough research to flawless execution, our work speaks for itself. Submit with confidence, knowing excellence is guaranteed.",
        },
        {
            heading: "Uncompromised Authenticity:",
            text: "Completely original, zero hassle! Every assignment is crafted uniquely for you—no templates, no shortcuts, just authentic content tailored to impress.",
        },
        {
            heading: "24/7 at Your Service:",
            text: "Deadline closing in? Our non-stop support means you’re never alone in the assignment game. Reach out whenever—day or night—and we’ll be ready to help you succeed!",
        },
    ];

    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-24 mt-20 w-full overflow-hidden">
            {/* First Section */}
            <div className="flex flex-col lg:flex-row items-center mt-12 lg:mt-24">
                <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
                    <h1 className="text-3xl md:text-4xl font-bold text-textColor leading-tight">
                        Expert <span className="text-red-500">Assignment Writing Service</span> That 
                        <span className="text-primaryBlue"> Impresses!</span>
                    </h1>
                    <p className="mt-4 text-sm md:text-base text-textColor">
                        Dream of acing that paper without the all-nighters? From research-heavy essays to quick homework help, professional assignment writers are here around the clock to deliver assignments that make the grade and let you keep your life!
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
                <div className="w-full lg:w-1/2 flex justify-center">
                    <Image src="/service5.png" alt="Service" width={600} height={600} className="w-full max-w-sm lg:max-w-lg" />
                </div>
            </div>

            {/* Features Section */}
            <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24 mt-16">
                <div className="flex-1">
                    <h2 className="font-bold text-[26px] lg:text-[28px] lg:text-2xl">
                        The Edge You Need: Reliable, Quality-Driven UK Assignment Writing Service
                    </h2>
                    <p className="mt-4 text-[14px] lg:text-[16px] text-textColor">
                        Effortlessly boost your grades with England’s finest pros—quick, dependable, and prepared for any challenge. So, why wait? Swap stress for success and watch your academic goals come to life!
                    </p>
                    <ul className="mt-6 space-y-6">
                        {content.map((item, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <Image 
                                    src={`/service${i + 1}.png`} 
                                    alt={`Service icon ${i + 1}`} 
                                    width={50} 
                                    height={50} 
                                    className="" 
                                />
                                <div>
                                    <h3 className="text-base md:text-lg font-bold">{item.heading}</h3>
                                    <p className="text-sm md:text-base">{item.text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Stats Section */}
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
                    heading="Get "
                    span="Professional Support"
                    heading2=" That Lifts Your Grades!"
                    paragraph="From Last-Minute Rescues to Long-Term Wins—We're Your Ultimate Assignment Ally, Crafting Award-worthy Masterpieces with Zero Stress and 100% Precision."
                />
            </div>
            <div className="mt-16">
                <Academic1 />
            </div>
            <div className="mt-16">
                <Experince1 />
            </div>
            <div className="mt-16">
                <Writers />
            </div>
            <div className="mt-16">
                <FAQ1 />
            </div>
        </div>
    );
}

export default Services1;
