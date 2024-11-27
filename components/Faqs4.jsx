'use client';
import { useState } from "react";
import Image from "next/image";

const FAQ4 = () => {
  const [open, setOpen] = useState(null);

  const toggleAccordion = (id) => {
    setOpen(open === id ? null : id);
  };

  const faqItems = [
    {
      question: "What qualifications do your thesis writers have?",
      answer: `Our thesis writers hold master’s and PhDs across various fields, with extensive experience in academic writing, research, and data analysis. They ensure your thesis meets top academic standards, so if you're Googling, "Can I pay someone to help me write a thesis?"—our experts got you.`,
    },
    {
      question: "Can I get assistance with both qualitative and quantitative research?",
      answer: `Absolutely! Our team includes experts skilled in both qualitative and quantitative research methodologies. Whether you need help with in-depth interviews or statistical analysis, we can assist you through every aspect of your research process, making it smoother and more manageable.`,
    },
    {
      question: "Can you help with formatting my thesis in APA/MLA/Harvard style?",
      answer: `Yes, we specialise in formatting theses to meet specific academic style guides, including APA, MLA, Harvard, Chicago and more. Our writers ensure that citations, references, and formatting align with your university’s guidelines, giving your work a polished, professional finish.`,
    },
    {
      question: "How do you ensure confidentiality in your thesis writing service?",
      answer: `We prioritise confidentiality with secure, SSL-certified platforms, protecting all client data. Only your assigned writer sees project details, and personal information is never shared. With strict NDA policies, our commitment to privacy ensures your academic work stays completely safeguarded.`,
    },
    {
      question: "Are there any discounts for students seeking thesis assistance?",
      answer: `Yes, we offer various discounts for students seeking thesis help, making our services more accessible. From early bird and referral bonuses to seasonal and yearly offers, we strive to provide affordable options to support students on a budget.`,
    },
    {
      question: "What payment methods do you accept for thesis writing help?",
      answer: `We accept a range of payment methods, including credit and debit cards, PayPal, and bank transfers, ensuring flexibility for students worldwide. This makes securing thesis assistance simple and convenient, giving you peace of mind from the start.
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

export default FAQ4;
