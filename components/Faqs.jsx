'use client';
import { useState } from "react";
import Image from "next/image";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleAccordion = (id) => {
    setOpen(open === id ? null : id);
  };

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
      answer: `Our writers are carefully chosen based on their qualifications, expertise, and experience in academic writing. They are specialists in their respective fields, ensuring that your work is handled by someone who knows the subject inside out.`,
    },
    {
      question: "What payment options do you offer, and is a deposit required?",
      answer: `We accept various payment methods for your convenience. To get started, you can secure your order with a 50% deposit. This half-payment system ensures accessibility and lets us begin working on your project immediately.`,
    },
    {
      question: "Do you cater to various academic levels like high school, college, or graduate studies?",
      answer: `Yes, we provide assistance across all academic levels—be it high school essays, college papers, or dissertation writing help for advanced studies— we're equipped to handle any challenge.`,
    },
  ];

  return (
    <div className="flex flex-col xl:flex-row items-center justify-center px-4 md:px-10 xl:px-20 2xl:px-28">
      {/* FAQ Content */}
      <div className="flex flex-col gap-6 md:gap-10 w-full xl:w-1/2">
        <h2 className="text-red-500 font-bold text-2xl md:text-3xl text-center xl:text-left">
          Frequently Asked Questions
        </h2>
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md transition-all duration-200"
          >
            <h2>
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className="flex items-center justify-between w-full p-4 text-gray-800 font-medium text-base md:text-lg"
                aria-expanded={open === index}
                aria-controls={`accordion-body-${index}`}
              >
                <span>{item.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </h2>
            <div
              id={`accordion-body-${index}`}
              className={`${
                open === index ? "block" : "hidden"
              } p-4 border-t`}
            >
              <p className="text-gray-600">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Image */}
      <div className="hidden xl:block w-full xl:w-1/2 relative">
        <Image
          src="/faq.png"
          alt="FAQ Illustration"
          width={700}
          height={700}
          className="max-w-full h-auto -bottom-96 absolute ml-32"
        />
      </div>
    </div>
  );
};

export default FAQ;
