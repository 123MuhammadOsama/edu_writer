'use client';
import { useState } from "react";
import Image from "next/image";

const FAQ2 = () => {
  const [open, setOpen] = useState(null);

  const toggleAccordion = (id) => {
    setOpen(open === id ? null : id);
  };

  const faqItems = [
    {
      question: "What is dissertation help, and how can it benefit me?",
      answer: `Dissertation help UK providers offer expert guidance, writing support, and resources to assist you in crafting a well-researched, structured dissertation. Using our service can be invaluable, saving time, reducing stress, and ensuring academic standards are met.
`,
    },
    {
      question: "Is my information kept confidential when using dissertation help?",
      answer: `Absolutely! We prioritize your privacy and follow strict policies. Backed by SSL certification and ironclad NDA, your personal data and project details are securely managed, ensuring your work remains completely private and protected throughout the process.`,
    },
    {
      question: "What’s the cost of dissertation help online services?",
      answer: `Our services are priced flexibly and tailored to fit different needs and budgets, with costs based on the project’s complexity, length, and deadline. Moreover, you can access our various discounts and sweet deals too. For more details, contact customer support for a free quote.`,
    },
    {
      question: "What if I only need help with one section of my dissertation",
      answer: `No problem! We offer targeted assistance for individual sections, including literature reviews, methodology, conclusions, and much more. Whether you need specific help or comprehensive support, we’re here to ensure each part meets your demands.
`,
    },
    {
      question: "Can I use a dissertation help service for proofreading only?",
      answer: `Certainly! We offer a standalone proofreading service to provide a final polish; catching errors, improving flow, and refining your dissertation for submission. It’s ideal if you want expert editing without full writing assistance.`,
    },
    {
      question: "Are dissertation help services available internationally?",
      answer: `Yes! Our online platform is designed to assist students worldwide, adapting to various university standards. No matter where you’re located, our team is equipped to provide top-notch help writing dissertations so you can better achieve your goals.
`,
    },
  ];

  return (
    <div className="flex flex-col xl:flex-row items-center justify-center px-4 md:px-10 xl:px-20 2xl:px-28 py-10">
      {/* FAQ Content */}
      <div className="flex flex-col gap-6 md:gap-10 w-full xl:w-1/2">
        <h2 className="text-red-500 font-bold text-2xl md:text-3xl text-center ">
          Frequently Asked Questions
        </h2>
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md transition-all duration-200"
          >
            <p>
            <button
  type="button"
  onClick={() => toggleAccordion(index)}
  className="flex items-center justify-between w-full p-4 text-gray-800 font-medium text-start md:text-lg"
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

            </p>
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

export default FAQ2;
