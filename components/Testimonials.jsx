
  import Image from "next/image";
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  
  function Testimonials() {
    return (
      <div className="flex flex-col mx-auto">

        <div className="flex flex-col justify-start items-start mt-8 2xl:mx-60 mx-10 ">
        <h2 className="text-secondaryRed text-[28px] font-bold">
        Why Clients Keep Coming Back—Straight from the Source!
        </h2>


        </div>
        
        <div
          className="h-[600px] w-full mx-auto bg-auto bg-no-repeat bg-center flex justify-center items-center"
          style={{
            backgroundImage: `url('/Group 65.png')`,
          }}
        >
          <Carousel className="md:w-[500px] w-[300px] ">
            <CarouselContent className="flex md:w-full  ">
              <CarouselItem className="flex flex-col justify-center items-center w-full h-[500px]">
                <Image
                  src="/review1.png"
                  alt="Mask Image"
                  width={300}
                  height={300}
                  className=""
                />
                <span className="font-bold italic text-2xl mt-4">
                Axel Baxter
                </span>
                <p className="text-center mt-2">
                I was buried in assignments and racing against time, but their coursework help UK pull off a miracle! The paper was spot-on, and my grades didn&apos;t suffer. I&apos;m grateful for their support—it made all the difference without the stress!"

                </p>
              </CarouselItem>
              <CarouselItem className="flex flex-col justify-center items-center w-full h-[500px]">
                <Image
                  src="/review2.png"
                  alt="Mask Image"
                  width={300}
                  height={300}
                  className="transition-transform duration-200 hover:scale-95"
                />
                <span className="font-bold italic text-2xl mt-4">
                Simon Wells
                </span>
                <p className="text-center mt-2">
                "I was hesitant to hire an expert, but I&apos;m so glad I did! They helped me write my paper, and the quality was beyond expectations. The process was smooth, and my professor&apos;s feedback was great. I&apos;ll definitely return!

                </p>
              </CarouselItem>
              <CarouselItem className="flex flex-col justify-center items-center w-full h-[500px]">
                <Image
                  src="/review3.png"
                  alt="Mask Image"
                  width={300}
                  height={300}
                  className="transition-transform duration-200 hover:scale-95"
                />
                <span className="font-bold italic text-2xl mt-4">
                Rachel Harper
                </span>
                <p className="text-center mt-2">
                "I&apos;ve always struggled with fleshing out my ideas, but after finding them, I&apos;m finally at ease. I chose to pay for essay writing & they didn&apos;t disappoint. Got a perfectly tailored copy that hit all the right marks—definitely A-grade quality!

                </p>
              </CarouselItem>
              <CarouselItem className="flex flex-col justify-center items-center w-full h-[500px]">
                <Image
                  src="/review4.png"
                  alt="Mask Image"
                  width={300}
                  height={300}
                  className="transition-transform duration-200 hover:scale-95"
                />
                <span className="font-bold italic text-2xl mt-4">
                Maya Reed
                </span>
                <p className="text-center mt-2">
                "Managing multiple deadlines has always been my worst nightmare, especially with my thesis. Thankfully, I found the best thesis helper here & they delivered top-notch work right on time. They took all the pressure off, and I couldn&apos;t be more relieved! 

                </p>
              </CarouselItem>
              <CarouselItem className="flex flex-col justify-center items-center w-full h-[500px]">
                <Image
                  src="/review5.png"
                  alt="Mask Image"
                  width={300}
                  height={300}
                  className="transition-transform duration-200 hover:scale-95"
                />
                <span className="font-bold italic text-2xl mt-4">
                Lloyd Hearth
                </span>
                <p className="text-center mt-2">
                "With too many assignments and not enough time, Eduwriters.uk came through like a hero! They handled my thesis and coursework perfectly, lifting a huge weight off my shoulders. My grades improved, and I&apos;m glad I relied on them!”



                </p>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className=" text-red-800 text-3xl font-extrabold border-2 shadow md:h-20 md:w-20  h-10 w-10 flex justify-center items-center md:ml-0 ml-10" />
            <CarouselNext className=" text-red-800 text-3xl border-2 font-extrabold shadow md:h-20 md:w-20 flex h-10 w-10 justify-center items-center md:mr-0 mr-10" />
          </Carousel>
        </div>
      </div>
    );
   
  }
  
  export default Testimonials;
  