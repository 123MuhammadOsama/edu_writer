'use client';
import { useState } from "react";
import Image from "next/image";

const FAQ = () => {
  // States to manage each accordion's open/close status
  const [open, setOpen] = useState(null);

  // Toggle accordion open/close
  const toggleAccordion = (id) => {
    setOpen(open === id ? null : id);
  };

  // Array of FAQ items
  const faqItems = [
    {
      question: "Can I trust Edu Writers UK?",
      answer: `Yes, you can absolutely trust us! While we don't share past assignments due to strict privacy policies, we have built a solid reputation with rave reviews from happy clients. Our online platform consistently earns top ratings for quality, originality, and timely delivery.`,
   
    },
    {
      question: "Can you assist with assignments from different subjects or specialisations?",
      answer: `Absolutely! Whether you need help with science, literature, business, or any other subject, our experts cover a wide range of topics, ensuring every assignment is thoroughly researched and perfectly crafted.`,
    },
   
    {
        question: "Which writing formats do you use (APA, MLA, Chicago, etc.)?",
        answer: `We are experienced in all major writing formats, including APA, MLA, Chicago, Harvard, and much more. When you ask us to “write my essay for me”, rest assured that your paper will follow the correct format according to your specific academic guidelines.`,
      },
      {
        question: "How do you select your writers?",
        answer: `Our writers are carefully chosen based on their qualifications, expertise, & experience in academic writing. They are specialists in their respective fields, ensuring that your work is handled by someone who knows the subject inside out.
`,
      },
      {
        question: "What payment options do you offer, and is a deposit required?",
        answer: `We accept various payment methods for your convenience. To get started, you can secure your order with a 50% deposit. This half-payment system ensures accessibility and lets us begin working on your project immediately.`,
      },
      {
        question: "Do you cater to various academic levels like high school, college, or graduate studies?",
        answer: `Yes, we provide assistance across all academic levels—be it high school essays, college papers, or dissertation writing help for advanced studies— we're equipped to handle any challenge.`,
      }
  ];

  return (
    <div className="flex">   
      
      <div className="md:grid xl:grid-cols-2 md:grid-cols-1 md:mx-10 xl:mx-0 2xl:mx-20 px-2 md:h-[1000px] xl:h-[850px] lg:h-[750px] h-[600px] flex justify-center items-start
       2xl:pb-0 ">
        {/* First Grid */}
        <div id="accordion-open" className="flex flex-col md:gap-10 gap-4 transition-all duration-100 ">
          {faqItems.map((item, index) => (
            <div key={index} className="border rounded-lg shadow md:mx-2  2xl:w-[700px] md:w-full xl:w-[500px] lg:w-[700px] w-[350px]">
              <h2 id={`accordion-open-heading-${index}`}>
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="flex items-center justify-between w-full p-5 font-medium text-gray-800 transition-all duration-700 gap-3"
                  aria-expanded={open === index}
                  aria-controls={`accordion-open-body-${index}`}
                >
                  <span className="flex justify-start items-start text-start text-secondaryRed lg:text-[16px] md:text-[15px] text-[14px] font-semibold">
                    {item.question}
                  </span>
                  {/* svg arrow */}
                  <svg
                    className={`w-5 h-5 shrink-0 transition-transform text-secondaryRed rounded-full p-1 ${
                      open === index ? "rotate-180 transition-all duration-800 bg-red-700 text-white" : ""
                    }`}
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 10 6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id={`accordion-open-body-${index}`}
                className={`${open === index ? "block" : "hidden"}`}
                aria-labelledby={`accordion-open-heading-${index}`}
              >
                <div className="p-5 mx-2 border border-r-0 border-l-0 border-b-0 border-t-1 border-t-red-600">
                  <p className="mb-2 text-red-600">{item.answer}</p>
                  {item.linkText && item.linkHref && (
                    <p className="text-gray-500 dark:text-gray-400">
                      <a
                        href={item.linkHref}
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        {item.linkText}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Grid - Image */}
        {/* <foreignObject x="60" y="450" width="500" height="800">
        <div className=" flex flex-col justify-end items-center h-[800px]">
          <Image src="/faqimage.png" width="2000" height="2000" />
        </div>
        </foreignObject> */}
      </div>

      {/* tasweer */}
      <div className="w-full hidden xl:block relative pr-20">
        <Image
          src="/faq.png"
          alt=""
          width={400}
          height={400}
          
          className="h-[700px] xl:h-[700px] w-[800px] 2xl:w-[700px] absolute bottom-0 -right-2 "
        />
      </div>
    </div>
  );
};

export default FAQ;
