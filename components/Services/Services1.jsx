'use client';
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import CTA1 from "@/components/CTA1";
import Writers from "@/components/Writers";
import Faqs from "@/components/Faqs";
import Academic from "./Academic";
import Experince from "./Experince";

function Services1() {
    const [assignments, setAssignments] = useState(0);
    const [projects, setProjects] = useState(0);
    const [customers, setCustomers] = useState(0);
    const targetValue = 75;
    const duration = 3000;

    const calculateIncrement = (start, end, duration) => {
        const stepCount = duration / 30; // 30ms interval
        return (end - start) / stepCount;
    };

    const assignmentsInterval = useRef(null);
    const projectsInterval = useRef(null);
    const customersInterval = useRef(null);

    useEffect(() => {
        const assignmentsIncrement = calculateIncrement(0, targetValue, duration);
        const projectsIncrement = calculateIncrement(0, targetValue, duration);
        const customersIncrement = calculateIncrement(0, targetValue, duration);

        const startCounter = (setCounter, intervalRef, targetValue, increment) => {
            clearInterval(intervalRef.current);
            intervalRef.current = setInterval(() => {
                setCounter((prevValue) => {
                    const nextValue = prevValue + increment;
                    if (nextValue >= targetValue) {
                        clearInterval(intervalRef.current);
                        return targetValue;
                    } else {
                        return nextValue;
                    }
                });
            }, 30);
        };

        startCounter(setAssignments, assignmentsInterval, targetValue, assignmentsIncrement);
        startCounter(setProjects, projectsInterval, targetValue, projectsIncrement);
        startCounter(setCustomers, customersInterval, targetValue, customersIncrement);

        const assignmentsRef = assignmentsInterval.current;
        const projectsRef = projectsInterval.current;
        const customersRef = customersInterval.current;

        return () => {
            clearInterval(assignmentsRef);
            clearInterval(projectsRef);
            clearInterval(customersRef);
        };
    }, [targetValue, duration]);

    return (
        <div className="px-4 lg:px-8 xl:px-16 2xl:px-32 mt-10 w-full overflow-hidden">
            {/* First Section */}
            <div className="flex flex-col lg:flex-row mt-12 lg:mt-24 items-center">
                <div className="w-full xl:w-[750px] 2xl:w-[900px] lg:mr-12 text-center lg:text-left mb-8 lg:mb-0">
                    <h1 className="text-[40px] md:text-5xl font-bold text-textColor leading-tight">
                        Lorem ipsum dolor sit amet <span className="text-red-500">consectetur</span> adipisicing elit.
                        <span className="text-primaryBlue">Quam,</span> tenetur?
                    </h1>
                    <p className="mt-4 text-base text-[14px] lg:text-[16px] text-textColor">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                        eligendi, omnis delectus adipisci sint consequatur, veritatis
                        molestiae modi, natus aliquam soluta eius? Facere harum blanditiis
                        hic dolorem laboriosam earum cupiditate.
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
            {/* Section Container */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24 mt-28 mx-20">
            {/* Content Section */}
            <div className="flex-1 2xl:pt-14 ">
            <h2 className="font-bold text-[26px] lg:text-[28px]">
            Revolutionize your experience with our modern offerings:
        </h2>
        <p className="mt-4 text-[14px] lg:text-[16px] w-auto 2xl:w-[1000px] xl:w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, molestiae sequi voluptate sapiente earum maiores ab voluptatem exercitationem modi! Libero explicabo iusto vel dignissimos odit, asperiores in animi totam aperiam aut. Amet voluptas harum sunt aliquam assumenda, officiis similique eaque!
        </p>
        <ul className="mt-6 space-y-6">
            {[1, 2, 3, 4].map((i) => (
                <li key={i} className="flex items-start gap-4">
                    <Image src={`/service${i}.png`} alt="" width="50" height="50" className="flex-shrink-0" />
                    <p className="w-auto 2xl:w-[900px] xl:w-[600px] text-[14px] lg:text-[16px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste numquam explicabo maiores officiis nostrum esse dignissimos, sequi enim minus alias repellat deleniti laboriosam rerum incidunt velit, mollitia sint? Dolorem, aliquam?
                    </p>
                </li>
            ))}
        </ul>
    </div>

    {/* Card Timer Section */}
    <div className="w-full flex-1 flex justify-center md:flex-row  items-center ">
        <div className="shadow-lg border rounded-xl p-8 flex flex-col items-center w-full max-w-md h-[600px] md:h-auto">
            <div className="font-bold text-3xl text-center">15+ Years of Excellence</div>
            <p className="text-center mt-2 mb-8 text-[14px] lg:text-[16px]">Lorem ipsum, dolor sit amet consectetu</p>
            <div className="space-y-16">
                {[
                    { title: "Assignments Experts", count: assignments, suffix: "+" },
                    { title: "Successful Projects", count: projects, suffix: "+" },
                    { title: "Customer Satisfaction", count: customers, suffix: "%" },
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
                    heading="Turn Homework Panic into"
                    span="Academic Power"
                    heading2="with One Click!"
                    paragraph="When Life Gets Busy and Assignments Get Tough, We're the Secret to Keeping Your Grades on Top! Because Late Nights and Last-Minute Cramming Are So Last Semester—Let’s Get You Ahead, Stress-Free!"
                />
            </div>
            <div>
                <Academic />
            </div>
            <div>
                <Experince />
            </div>
            <div className="mt-16">
                <Writers />
            </div>
            <div className="mt-16">
                <Faqs />
            </div>
        </div>
    );
}

export default Services1;
