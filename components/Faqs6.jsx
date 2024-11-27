'use client';
import { useState } from 'react';
import Image from 'next/image';

const FAQ6 = () => {
  const [open, setOpen] = useState(null);

  const toggleAccordion = (id) => {
    setOpen(open === id ? null : id);
  };

  const faqItems = [
    {
      question: 'Can you handle undergraduate and postgraduate research papers?',
      answer: `Absolutely! Our professional PhD research paper writing service caters to all academic levels, from undergraduate to postgraduate studies. Whether it's a simple analysis or an advanced thesis, our experienced writers ensure tailored, top-tier quality content that meets your requirements.`,
    },
    {
      question:
        'Can I get help with niche research topics like biotechnology or AI?',
      answer: `Yes, we specialise in niche topics like biotechnology, artificial intelligence, and much more. Our expert writers have diverse academic backgrounds, ensuring well-researched and accurate papers, no matter how complex or unique your subject is.`,
    },
    {
      question:
        'Are your research paper writing services affordable for students?',
      answer: `We understand the financial constraints students face, so we offer budget-friendly options. With flexible pricing and packages, our best research paper writing service ensures you get exceptional help without burning holes in your pockets.`,
    },
    {
      question:
        'What factors influence the cost of a research paper?',
      answer: `The cost depends on various factors, including the paper's complexity, academic level, word count, and deadline. Longer papers or urgent deadlines may cost more, but we always aim to keep our pricing student-friendly.`,
    },
    {
      question:
        'Are there any discounts available for bulk orders?',
      answer: `Yes! When you say, 'Help write my research paper,' we know discounts are part of the deal. That’s why we offer special deals for bulk orders as a token of appreciation for your trust. Whether you're ordering multiple papers or collaborating on a group project, we provide competitive pricing that suits your needs.`,
    },
    {
      question: 'Do you sign an NDA to protect my identity?',
      answer: `Yes, we prioritise your privacy and confidentiality. Our writers sign NDAs to protect your personal information and project details. Plus, with SSL certification, your data is securely encrypted when you place an order, ensuring complete protection. Rest assured, your work remains anonymous and fully secure with us.`,
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

export default FAQ6;
