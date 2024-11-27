'use client';
import { useState } from 'react';
import Image from 'next/image';

const FAQ7 = () => {
  const [open, setOpen] = useState(null);

  const toggleAccordion = (id) => {
    setOpen(open === id ? null : id);
  };

  const faqItems = [
    {
      question: 'Who will write my case study?',
      answer: `Your case study will be crafted by an experienced professional specialising in your subject area. Our writers are experts in research, analysis, and writing, ensuring your assignment is tailored to meet academic standards while showcasing quality and insight.`,
    },
    {
      question:
        'Will my case study be tailored to my professor’s requirements?',
      answer: `Absolutely! We carefully follow all the instructions and guidelines you provide, ensuring your case study aligns perfectly with your professor’s expectations. From format to content, our case study writing help providers ensure every detail is customised to your needs.
`,
    },
    {
      question:
        'Do you follow a specific format for case studies?',
      answer: `Yes, we adhere to the required academic formatting style, whether it's APA, MLA, Harvard, Chicago or any other. Simply let us know the format, and we’ll structure your case study accordingly for a professional and polished finish.
`,
    },
    {
      question:
        'What if my case study topic is too niche or uncommon?',
      answer: `No topic is too niche for our team! With diverse subject matter experts, we excel at tackling specialised or uncommon topics, conducting thorough research to deliver a case study that’s both insightful and original.
`,
    },
    {
      question:
        'Will my professor know I used a case study help agency?',
      answer: `Not at all! We maintain complete confidentiality. Even our writers won’t know your identity, ensuring total discretion. Your work is uniquely yours, and our case study writing service takes strict measures to protect your privacy.
`,
    },
    {
      question: 'What payment options do you offer?',
      answer: `e offer multiple secure payment methods, including credit cards, PayPal, and bank transfers. To make it easier for students, you can secure your order with 50% upfront and pay the rest upon completion. Trust us for authentic help to write case study assignments.`,
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

export default FAQ7;
