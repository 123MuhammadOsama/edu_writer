'use client';
import { useState, useRef, useEffect } from "react";

const Counter = () => {
   const [Writers, setWriters] = useState(300);
   const [Projects, setProjects] = useState(500);
   const [Customers, setCustomers] = useState(750);
   const [Websites, setWebsites] = useState(12);

   const writersTarget = 500;
   const projectsTarget = 750;
   const customersTarget = 1000;
   const websitesTarget = 98;

   const duration = 5000;

   const calculateIncrement = (start, end, duration) => {
     const stepCount = duration / 50;
     return (end - start) / stepCount;
   };

   const writersIncrement = calculateIncrement(300, writersTarget, duration);
   const projectsIncrement = calculateIncrement(500, projectsTarget, duration);
   const customersIncrement = calculateIncrement(750, customersTarget, duration);
   const websitesIncrement = calculateIncrement(12, websitesTarget, duration);

   const writersInterval = useRef(null);
   const projectsInterval = useRef(null);
   const customersInterval = useRef(null);
   const websitesInterval = useRef(null);

   const startCounter = (setCounter, intervalRef, targetValue, increment) => {
     clearInterval(intervalRef.current);
     intervalRef.current = setInterval(() => {
       setCounter(prevValue => {
         const nextValue = prevValue + increment;
         if (nextValue >= targetValue) {
           clearInterval(intervalRef.current);
           return targetValue;
         } else {
           return nextValue;
         }
       });
     }, 20);
   };

   useEffect(() => {
    startCounter(setWriters, writersInterval, writersTarget, writersIncrement);
    startCounter(setProjects, projectsInterval, projectsTarget, projectsIncrement);
    startCounter(setCustomers, customersInterval, customersTarget, customersIncrement);
    startCounter(setWebsites, websitesInterval, websitesTarget, websitesIncrement);
  
    const writerInterval = writersInterval.current;
    const projectInterval = projectsInterval.current;
    const customerInterval = customersInterval.current;
    const websiteInterval = websitesInterval.current;
  
    return () => {
      clearInterval(writerInterval);
      clearInterval(projectInterval);
      clearInterval(customerInterval);
      clearInterval(websiteInterval);
    };
  }, [writersIncrement, projectsIncrement, customersIncrement, websitesIncrement]);
  

   return (
     <div>
       {/* Desktop view */}
       <div className="w-full md:block  xl:justify-center xl:items-center md:justify-center md:items-center py-10">
         <section className="max-w-7xl lg:h-[180px] flex flex-col sm:flex-row justify-between items-center shadow-lg shadow-gray-200 border border-gray-100 rounded-3xl px-20 lg:mx-auto">
           {/* Writers */}
           <article>
             <p className="flex flex-col justify-center items-center">
               <span className="flex tabular-nums text-primaryBlue lg:text-5xl md:text-3xl font-extrabold mb-2 transition md:translate-y-1 text-justify">
               {Math.floor(Writers)}+
               </span>
               <span className="inline-flex font-medium mb-2 text-center">Experienced Writers</span>
             </p>
           </article>

           {/* Projects */}
           <article>
             <p className="flex flex-col justify-center items-center">
               <span className="flex tabular-nums text-primaryBlue lg:text-5xl md:text-3xl font-extrabold mb-2">
                {Math.floor(Projects)}+
               </span>
               <span className="inline-flex font-medium mb-2 text-center">Completed Projects</span>
             </p>
           </article>

           {/* Customers */}
           <article>
             <p className="flex flex-col justify-center items-center">
               <span className="flex tabular-nums text-primaryBlue lg:text-5xl md:text-3xl font-extrabold mb-2">
               {Math.floor(Customers)}+
               </span>
               <span className="inline-flex font-medium mb-2 text-center">Satisfied Customers</span>
             </p>
           </article>

           {/* Websites */}
           <article>
             <p className="flex flex-col justify-center items-center">
               <span className="flex tabular-nums text-primaryBlue lg:text-5xl md:text-3xl font-extrabold mb-2">
               0{Math.floor(Websites)}%
               </span>
               <span className="inline-flex font-medium mb-2 text-center">Completed Websites</span>
             </p>
           </article>
         </section>
       </div>
     </div>
   );
};

export default Counter;
