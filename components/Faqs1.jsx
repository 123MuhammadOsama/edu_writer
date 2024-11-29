'use client';
import { useState } from "react";
import Image from "next/image";

const FAQ1 = () => {
  const [open, setOpen] = useState(null);

  const toggleAccordion = (id) => {
    setOpen(open === id ? null : id);
  };

  const faqItems = [
    {
      question: "Is your assignment writing services confidential?",
      answer: `Absolutely. We prioritise your privacy and keep all information completely confidential. Our site is SSL-certified and your details are never shared with third parties. Even our writers work anonymously, without knowing the client’s identity.
`,
    },
    {
      question: "Who will write my assignment?",
      answer: `Your assignment will be handled by a qualified, experienced writer with expertise in your subject area, ensuring top-quality work that meets your academic standards.`,
    },
    {
      question: "What subjects can you help me with?",
      answer: `Your assignment will be handled by a qualified, experienced writer with expertise in your subject area, ensuring top-quality work that meets your academic standards.`,
    },
    {
      question: "How much does your assignment service cost?",
      answer: `Costs vary depending on complexity, length, and urgency. However, rest assured, we offer affordable assignment writing services. Our rates are competitive, and you can get a quick quote by filling out our order form online.`,
    },
    {
      question: "Do you offer discounts for students?",
      answer: `Yes, we regularly offer promotions and discounts for students, such as early-bird, referral, seasonal, and yearly deals to make our services more accessible! Check our website or reach out to our support team to learn about current deals.
`,
    },
    {
      question: "What payment methods do you accept?",
      answer: `For your convenience, we accept multiple secure payment options, including credit cards, debit cards, PayPal, and other online methods. Keep an eye on our website and follow us on social media to stay updated on our latest offers!.
`,
    }
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

export default FAQ1;
