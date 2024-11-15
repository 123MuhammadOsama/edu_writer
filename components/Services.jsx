import Image from "next/image";

function Services() {
  // Data array for services
  const servicesData = [
    { title: "Assignment Writing Service", description: "Stop worrying; expert assignment writers will handle the hard work while you chill. Original, top-quality assignments delivered on time, every time—just how you like it. Because acing your classes shouldn’t mean losing sleep!", imageSrc: "/AHUK ICONS1-02.svg" },
    { title: "Dissertation Help", description: "We know dissertations are a headache! Let us provide you with dissertation writing help while you focus on, well, anything else! Detailed research, flawless structure, & zero effort from you. Sounds like a plan?", imageSrc: "/AHUK ICONS1-04.svg" },
    { title: "Essay Writing Help", description: "Need an A+ essay without the stress? Reliable essay writing service got you! We create custom essays that’ll leave your professors speechless. Brainstorming, writing, and referencing—handled. You get the grade; we do the grind!", imageSrc: "/AHUK ICONS1-05.svg" },
    { title: "Thesis Help", description: "Forget the thesis panic—we’ve got you covered! We’ll create a solid, well-researched thesis that stands out, so you don’t have to sweat the details. Leave the heavy lifting to us and excel effortlessly.", imageSrc: "/AHUK ICONS1-06.svg" },
    { title: "Coursework Help", description: "Overwhelmed by coursework? No worries! We’ll handle your assignments, quizzes, or projects while you enjoy a breather. No matter the subject or difficulty level, we’ll nail it while you take it easy!", imageSrc: "/AHUK ICONS1-07.svg" },
    { title: "Research Paper Help", description: "Research papers giving you nightmares? We’ll turn those rough ideas into a perfectly polished paper that hits all the right academic notes. Research, writing, and edits are done for you—just kick back and watch the grades roll in!", imageSrc: "/AHUK ICONS1-08.svg" },
    { title: "Case Study Writing Help", description: "Stuck on your case study? Not anymore! We craft engaging, well-analysed case studies that make you look like a pro, minus the hassle. Deep insights, sharp analysis, and on-point conclusions delivered to your inbox!", imageSrc: "/AHUK ICONS1-09.svg" },
    { title: "Editing and Proofreading Service", description: "Already done with your work but need it to be perfect? We’ll clean it up, sharpen it, and make sure it’s submission-ready. Typos, grammar slips, and awkward phrases? Gone. Your work will shine!", imageSrc: "/AHUK ICONS1-02.svg" },
   
  ];

  return (
    <div className="flex flex-col ">
      <h2 className=" md:text-[28px] text-[26px] font-bold text-textColor text-3xl  pb-2  tracking-wide leading-relaxed  text-center flex-wrap mx-auto lg:w-[800px] w-full">

      <span className="text-tertiaryYellow"> Efficient </span>,
        <span className="text-secondaryRed">  Reliable </span>
      ,and   <span className="text-primaryBlue"> Always Ready </span>  Academic Lifeline You Can Trust!
      </h2>
      

      <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-8 h-min mt-10 md:bg-white mx-auto "
       >
        {/* Left Side Boxes (First 3 services) */}
      
        <div className="flex flex-col mx-auto mt-6 2xl:ml-36 md:ml-0  ">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          {servicesData.slice(0, 4).map((service, index) => (
            <div key={index} className="lg:h-min md:h-[240px] h-min  lg:w-[460px] md:w-[350px] w-[340px] shadow-lg rounded-xl flex flex-row gap-4 mb-6 border border-gray-100 border-t-2 p-6">
              <div className="flex flex-col w-[300px] ">
                <span className="font-bold text-lg">{service.title}</span>
                <p className="mt-1 lg:text-[16px] text-[13px]">{service.description}</p>
              </div>
              <div className="flex justify-center items-center">
                <Image src={service.imageSrc} width={100} height={100} alt={service.title} />
              </div>
            </div>
          ))}
        </div>

        {/* Image in the middle, hidden on small screens */}
        <div className="hidden xl:flex justify-center items-end -mx-6 ">
          <Image
            src="/Red_Girl.png"
            width={400}
            height={1000}
            alt="Girl Holding Books"
            className="2xl:h-[1000px] 2xl:w-[400px] xl:h-[800px] xl:w-[450px]  "
          />
        </div>

        {/* Right Side Boxes (Last 3 services) */}
        <div className="flex flex-col mx-auto md:mt-6 -mt-6 2xl:mr-36" >
            {/* eslint-disable-next-line react/no-unescaped-entities */}
          {servicesData.slice(4).map((service, index) => (
            <div key={index} className="lg:h-min md:h-[240px] h-min lg:w-[460px] md:w-[350px] w-[340px] shadow-lg rounded-xl flex flex-row gap-4 mb-6 border border-gray-100 border-t-2 p-6">
              <div className="flex flex-col w-[300px] ">
                <span className="font-bold text-lg">{service.title}</span>
                <p className="mt-1 lg:text-[16px] text-[13px]">{service.description}</p>
              </div>
              <div className="flex justify-center items-center">
                <Image src={service.imageSrc} width={100} height={100} alt={service.title} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex lg:hidden md:justify-center justify-between items-center mx-auto md:mx-[400px] ">
         <Image
            src="/Red_Girl.png"
            width={200}
            height={500}
            alt="Girl Holding Books"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
