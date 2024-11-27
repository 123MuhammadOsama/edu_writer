'use client';
import { useState } from 'react';
import Image from 'next/image';

const FAQ8 = () => {
  const [open, setOpen] = useState(null);

  const toggleAccordion = (id) => {
    setOpen(open === id ? null : id);
  };

  const faqItems = [
    {
      question: 'Are your proofreading and editing experts qualified to handle my field of study?',
      answer: `Absolutely! Our trusted professionals have expertise across a wide range of academic disciplines. Whether you're working on an engineering report, a literary analysis, or a business case study, we've got specialists to ensure your work shines.`,
    },
    {
      question:
        'Are your team of editors native English speakers?',
      answer: `Yes, our handpicked team includes highly skilled native English speakers who ensure your assignments are fluent, precise, and professional. They excel in catching language nuances and crafting polished work that meets academic standards.
`,
    },
    {
      question:
        'Do you check for compliance with academic citation styles like APA, MLA, or Chicago?',
      answer: `Of course! We carefully verify your citations and formatting to ensure they align with your required academic style. From APA to MLA to Chicago to Harvard, rest assured, our efficient online proofreading and editing services handle it all seamlessly.
`,
    },
    {
      question:
        'Can I trust your service to keep my work confidential?',
      answer: `Absolutely. We prioritise your privacy and ensure strict confidentiality for every project. Our editors never know whose work they’re handling and our SSL-certified platform guarantees secure transactions and data protection at all times.
`,
    },
    {
      question:
        'What is your turnaround time for editing and proofreading?',
      answer: `We understand deadlines are crucial. That’s why our top-notch academic proofreading and editing service offers fast turnarounds tailored to your needs. Whether you need a quick polish or in-depth editing, we’ve got you covered—on time, every single time.
`,
    },
    {
      question: 'Are there affordable proofreading and editing services for students on a budget?',
      answer: `Yes! We provide budget-friendly prices without compromising quality. Our top-rated proofreading and editing services UK agency aims to make professional academic assistance accessible to students, ensuring your assignments are error-free and polished without burning holes in your pockets.`,
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

export default FAQ8;
