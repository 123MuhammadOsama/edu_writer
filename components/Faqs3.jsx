'use client';
import { useState } from "react";
import Image from "next/image";

const FAQ3 = () => {
  const [open, setOpen] = useState(null);

  const toggleAccordion = (id) => {
    setOpen(open === id ? null : id);
  };

  const faqItems = [
    {
      question: "Can I pay someone to write my essay for me?",
      answer: `Yes, you can! Our service is designed to provide professional, reliable essay writing assistance for students. By paying for our help, you’ll receive a custom-written essay from an expert writer who understands your needs, deadlines, and academic requirements.`,
    },
    {
      question: "How much does it cost to have an essay written?",
      answer: `The cost of having someone write my essay UK-style depends on factors like the length, urgency, and complexity of the topic. But worry not, we offer competitive pricing + various discounts to sweeten the deal. Get an instant quote on our site to know the exact cost upfront and see how much you can save.`,
    },
    {
      question: "What qualifications do your writers have?",
      answer: `Our team of writers is highly qualified, with academic backgrounds and experience in a variety of fields. Many hold advanced degrees¸ such as PhDs, and all are skilled in academic writing, ensuring that they deliver exceptional, well-researched essays that not meets but exceeds your expectations.`,
    },
    {
      question: "Can someone write my essay in a specific formatting style?",
      answer: `Absolutely! Our professional writers are proficient in all major formatting styles, including APA, MLA, Harvard, Chicago and more. Just let us know your requirements, and we’ll ensure your essay follows the correct style and format perfectly.`,
    },
    {
      question: "Can someone write my essay for free?",
      answer: `While we provide world-class writing services, free essay writing isn’t offered due to the dedication and expertise required to produce top-notch academic work. However, our prices are student-friendly, and you can reach out for affordable options tailored to your needs.`,
    },
    {
      question: "Is there a minimum or maximum word count for essay help?",
      answer: `We’re flexible! There’s no strict minimum or maximum word count for our services. Whether you need a short response or a detailed essay, we’re here to help with any word count that aligns with your academic requirements.
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

export default FAQ3;
