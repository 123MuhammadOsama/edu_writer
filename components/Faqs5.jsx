'use client';
import { useState } from 'react';
import Image from 'next/image';

const FAQ5 = () => {
  const [open, setOpen] = useState(null);

  const toggleAccordion = (id) => {
    setOpen(open === id ? null : id);
  };

  const faqItems = [
    {
      question: 'Do you offer coursework help for all subjects?',
      answer: `Absolutely! We provide coursework help online services across a wide range of subjects, from humanities to sciences, engineering to business, and everything in between. Whatever your academic focus, we’ve got a handpicked team of talented professionals ready to assist with personalised support.`,
    },
    {
      question:
        'Are your coursework helpers qualified in my subject area?',
      answer: `Yes, all our coursework helpers are highly qualified professionals with expertise in specific subject areas. Each expert has a strong academic background and professional experience in your field, ensuring top-quality assistance relevant to your coursework requirements.`,
    },
    {
      question:
        'How do you match a writer with my coursework subject?',
      answer: `We carefully match each coursework with a writer experienced in that specific subject. By assessing their academic background and area of expertise, we ensure the writer assigned to you fully understands your topic, guaranteeing accurate, relevant, and brilliant work.`,
    },
    {
      question:
        'How much does coursework writing help online assistance cost?',
      answer: `The cost of our coursework help varies depending on factors like deadline, complexity, and academic level. We strive to keep our services affordable for students & you can get a quick quote by contacting us directly. Plus, we offer various discounts and limited offers to sweeten the deal!`,
    },
    {
      question:
        'Is my information kept confidential with your coursework help service?',
      answer: `Yes, confidentiality is our top priority. We protect your personal and order details through secure, SSL-certified platforms and adhere to strict privacy policies, including NDA agreements with our pro writers. This ensures that your information remains confidential, and no one, not even your writer, knows your identity.`,
    },
    {
      question: 'Do you offer coursework help for international students?',
      answer: `Yes, of course! We work with students globally, providing coursework help that meets both UK academic standards and international guidelines. No matter where you study, we’ll support you with tailored coursework assistance that fits your requirements and academic expectations.`,
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
                    open === index ? 'rotate-180' : ''
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
              className={`${open === index ? 'block' : 'hidden'} p-4 border-t`}
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

export default FAQ5;
