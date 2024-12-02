import TawktoButton from "./TawkToButton";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
function CTA3() {
    return (
      <div className="flex flex-col">
        
        
        <div className="flex md:flex-row mx-3 flex-col md:mx-5 justify-center items-center gap-2  " >
          <div className="flex flex-col justify-start items-start 2xl:ml-20 mt-1 lg:max-w-6xl md:w-[900px]  max-w-full ">
          <h2 className=" text-[28px] font-bold py-2  ">Facts About Our <span className="text-secondaryRed">UK Writing Services!</span></h2>
          <div className="lg:text-[16px] md:text-[15px] text-[14px]  md:w-[250px] lg:w-full 2xl:w-[90%]">
            <p>EduWritersUK is not just about ticking off your assignments—it is about giving you total peace of mind. We know juggling deadlines, research, & everyday life can be a lot. That  &apos;s why we're here to make your worries vanish with original, timely, and flawless showstoppers.</p>
            <p>Designed around you, we offer a seamless experience from start to finish, smashing deadlines while guaranteeing outstanding results. Need a change? We're on it! Craving an essay writing service that puts your priorities first? Stop searching—time to get ahead without breaking a sweat!
            </p>

          </div>

          <div className="hidden flex-row md:w-full justify-start items-center md:mx-[20px] 2xl:mx-[100px] lg:mx-[10px]  gap-2 mx-auto 2xl:hidden lg:flex  ">
            <TawktoButton mdWidth={200} mdHeight={42} Width={160} Height={45}/>
            <Link href="/ordernow"
            >
              <button className=" border-2 font-bold border-secondaryRed text-red hover:bg-secondaryRed text-secondaryRed hover:text-white py-2 px-2  lg:w-48 md:w-38 w-36 lg:h-[45px] md:h-[38px] h-[45px] mb-4 rounded-md flex flex-row justify-center items-center transition-all group-hover:translate-x-1  md:text-md text-sm md:mt-4 lg:my-3 my-5">
                Order Now
                <div>
                  <ArrowRight className="hover:translate-x-1 transition-all text-sm" />
                </div>
              </button>
            </Link>
          </div>

    

                   
            
            </div>
            <div className =" shadow-md md:w-[700px] w-[310px] md:h-[400px] xl:h-[400px] 2xl:h-[300px] h-min  border border-gray-100 md:flex flex-col lg:p-5 p-2 md:my-auto md:mt-[100px] 2xl:mt-2">
              <div className="flex flex-row pb-5">
                {/* Icon */}
                <div className="bg-primaryBlue md:w-20 lg:h-20 lg:w-20 flex justify-center items-center">
                <Image 
                src="/frame-1.png"
                height="50"
                width="50"
                className=""
                />

                </div>
                <p className="px-5">
                 <span className="text-primaryBlue font-bold text-lg">Zero Plagiarism  </span>  <br/>
                <span className="font-bold text-lg "> Tolerance</span> 
                </p>
                
              </div>
              <div className="lg:text-[16px] md:text-[15px] text-[14px]">
                <p>We prove it! Every piece is 100% original, and human-written from scratch, ensuring your work is one-of-a-kind. No reused templates, no shortcuts. Plus, we offer a complimentary plagiarism report with each order.
                </p>
              </div>
            </div>
            <div className ="shadow-md md:w-[700px] md:h-[400px] xl:h-[400px] 2xl:h-[300px] h-min w-[310px] border border-gray-100 md:flex flex-col lg:p-5 p-2 md:my-auto md:mt-[100px] 2xl:mt-2">
            <div className="flex flex-row pb-5">
              <div className="bg-tertiaryYellow md:w-20 lg:h-20 lg:w-20  flex justify-center items-center">
              <Image 
                src="/frames.png"
                height="50"
                width="50"
                className=""
                />

              </div>
                <p className="px-5">
                 <span className="text-tertiaryYellow text-lg font-bold"> Rock-Solid</span>  <br/>
                <span className="font-bold text-lg ">  Security</span> 
                </p>
                
              </div>
              <div  className="lg:text-[16px] md:text-[15px] text-[14px]">
                <p>Your privacy and security are non-negotiable. Our SSL certification ensures that every transaction and piece of data is protected, so you can share your information with total confidence. 
                </p>
              </div>
            </div>


          
        </div>

        <div className="flex flex-row md:w-full justify-start items-center md:mx-[20px] 2xl:mx-[100px] lg:mx-[10px]  gap-2 mx-auto 2xl:flex lg:hidden  ">
            <TawktoButton mdWidth={200} mdHeight={42} Width={160} Height={45}/>
            <Link href="/ordernow"
            >
              <button className=" border-2 font-bold border-secondaryRed text-red hover:bg-secondaryRed text-secondaryRed hover:text-white py-2 px-2  lg:w-48 md:w-38 w-36 lg:h-[45px] md:h-[38px] h-[45px] mb-4 rounded-md flex flex-row justify-center items-center transition-all group-hover:translate-x-1  md:text-md text-sm md:mt-4 lg:my-3 my-5">
                Order Now
                <div>
                  <ArrowRight className="hover:translate-x-1 transition-all text-sm" />
                </div>
              </button>
            </Link>
          </div>

      </div>
    );
}

export default CTA3;


