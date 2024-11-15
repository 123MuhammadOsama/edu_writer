
import Image from "next/image";
// import TawktoButton from "./TawkToButton";
import { ArrowRight } from "lucide-react";

import { IoPaperPlaneOutline } from 'react-icons/io5';

function CTA1({ heading, span, heading2, paragraph }) {
  return (
    <div className="w-full h-min relative">
      <div className="flex flex-row shadow-xl border border-gray-100 xl:w-[75%] lg:w-[90%] md:w-[80%] w-[95%] md:h-[370px] xl:h-[400px]
       lg:h-[400px] h-[400px] justify-start items-start md:px-10 my-12 md:mt-20 rounded-3xl mx-auto">
        <div className="flex flex-col 2xl:w-[700px] xl:w-[500px] lg:w-[400px] mx-[12px] xl:mx-[4px] xl:my-[20px] lg:my-[5px] my-[20px] ">
          <h2 className="2xl:text-28px md:text-[24px] text-2xl font-bold md:py-2 sm:px-2 px-0 md:text-start text-center md:w-full">
            {heading} <span className="text-secondaryRed">{span}</span> {heading2}
          </h2>
          <p className="py-1 sm:mx-2 mx-0 w-full 2xl:w-[600px] md:text-[15px] 2xl:text-[16.5px]">
            {paragraph}
          </p>
          <div className="flex flex-row pt-4 md:mx-0 mx-1 gap-4 md:mr-2 md:justify-start md:items-center">
            {/* <TawktoButton  mdWidth={300} Width={150} Height={100}/> */}

            <button className="bg-blue-500 flex items-center  font-bold text-white px-6 sm:px-8 md:px-10
             py-3  rounded-xl hover:bg-blue-900 group">
            <span className="transform transition-transform mr-2 sm:mr-3 duration-500 group-hover:-translate-x-2">
                LIVE CHAT
            </span>
            <IoPaperPlaneOutline className="transform transition-transform duration-500 group-hover:translate-x-2 text-xl" />
        </button>

        {/* py-2 px-2 lg:w-40 md:w-36 md:min-h-max w-[10rem] h-[3rem] */}

            <button className="border-2 font-bold border-secondaryRed text-red hover:bg-secondaryRed text-secondaryRed
             hover:text-white py-3 px-6 sm:px-8 md:px-10 rounded-xl flex flex-row justify-center transition-all group-hover:translate-x-1">
              Order Now
              <div>
                <ArrowRight className="hover:translate-x-1 transition-all" />
              </div>
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 right-10 xl:right-32 2xl:right-72">
          <Image
            src="/Hero_Image.png"
            width="500"
            height="300"
            alt="Image for text area"
            className="lg:block hidden "
          />
          {/* Uncomment if needed for responsive design
          <Image
            src="/Hero_Image.png"
            width="600"
            height="800"
            alt="Image for text area"
            className="lg:hidden md:block hidden"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default CTA1;
