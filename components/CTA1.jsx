
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { IoPaperPlaneOutline } from 'react-icons/io5';

function CTA1({ heading, span, heading2, paragraph }) {
  return (
    <div className="w-full h-min relative">
      <div className="flex flex-row shadow-xl border border-gray-100 xl:w-[90%] lg:w-[100%] md:w-[80%] w-[95%] sm:h-[300px] 
        h-[400px] justify-start items-start md:px-10 my-12 md:mt-20 rounded-3xl mx-auto">
        <div className="flex flex-col 2xl:w-[700px] xl:w-[500px] lg:w-[400px] mx-[12px] xl:mx-[4px] xl:my-[20px] lg:my-[5px] my-[20px] ">
          <div className="2xl:text-28px md:text-[24px] text-2xl font-bold md:py-2 sm:px-2 px-0 md:text-start text-center md:w-full">
            {heading} <span className="text-secondaryRed">{span}</span> {heading2}
          </div>
          <p className="py-1 sm:mx-2 mx-0 w-full xl:w-[450px] 2xl:w-[600px]  text-[14px] lg:text-[16px]">
            {paragraph}
          </p>
          <div className="flex flex-row pt-4 md:mx-0 mx-1 gap-4 md:mr-2 md:justify-start md:items-center">
           

            <button className="bg-blue-500 flex items-center  font-bold text-white px-2 sm:px-8 md:px-10 lg:px-4
             py-3  rounded-xl hover:bg-blue-900 group">
            <span className="transform transition-transform mr-2 sm:mr-3 duration-500 group-hover:-translate-x-2">
                LIVE CHAT
            </span>
            <IoPaperPlaneOutline className="transform transition-transform duration-500 group-hover:translate-x-2 text-xl" />
        </button>

        

            <button className="border-2 font-bold border-secondaryRed text-red hover:bg-secondaryRed text-secondaryRed
             hover:text-white py-3 px-2 sm:px-8 md:px-10 lg:px-4 rounded-xl flex flex-row justify-center transition-all group-hover:translate-x-1">
              Order Now
              <div>
                <ArrowRight className="hover:translate-x-1 transition-all" />
              </div>
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 right-5 xl:right-10 2xl:right-28">
          <Image
            src="/Hero_Image.png"
            width="500"
            height="300"
            alt="Image for text area"
            className="lg:block hidden "
          />
          
        </div>
      </div>
    </div>
  );
}

export default CTA1;
