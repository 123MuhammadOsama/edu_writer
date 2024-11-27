'use client';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

import Image from "next/image";

// Data array
const data = [
    {
        name: "Oliver Brookes",
        paragraph: "Finance Pro",
        src: "/writer1.png",
        id: "1"
    },
    {
        name: "Aiden Hawthorne ",
        paragraph: "Business Expert",
        src: "/writer3.png",
        id: "2"
    },
    {
        name: "Harper Lane",
        paragraph: "Psychology Expert",
        src: "/writer5.png",
        id: "3"
    },
    {
        name: "Leo Whitfield ",
        paragraph: "Tech Writer",
        src: "/writer4.png",
        id: "4"
    },
    {
        name: "Daisy Winslow",
        paragraph: "Education Specialist",
        src: "/writer2.png",
        id: "5"
    },
];

function Writers() {
    return (
        <div className="flex flex-col justify-center items-center mt-10 md:mx-0 mx-5">
            <div className="flex flex-col justify-center items-center gap-1">
            <h2 className="text-[26px] lg:text-[28px] font-bold mb-10 text-center ">Take the Content from <span className="text-secondaryRed"> EduWritersUK</span> Home Page</h2>
            <p className=" text-[14px] lg:text-[16px] mb-10 text-center mx-auto">Behind Every Masterpiece is a Team of Geniuses You Didn&apos;t Know You Needed, but Can&apos;t Live Without—Delivering Quality with Creativity, Precision, and a Student-first Approach!</p>
            </div>
            <div className="md:w-fit md:justify-center md:items-center md:mx-auto  mx-12 flex ">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                          delay: 2000,
                        }),
                      ]}
                      className=" xl:w-full md:w-[900px] w-[350px] "
                    >

                    <CarouselContent className=" xl:mx-8 mx-auto  xl:-mr-5 md:mx-10 md:px-12 p">

                        {/* Manually access each writer */}
                        <CarouselItem className="xl:basis-1/4 md:basis-1/2  lg:basis-1/2 ">
                            <div className="h-[350px] w-[280px] shadow-lg border border-gray-100 p-0 bg-white rounded-2xl mb-9 md:m-0  mx-4 ">                   
                                             <div className="w-full rounded-t-2xl">
                                    <Image
                                        src={data[0].src}
                                        alt={`Image of ${data[0].name}`}
                                        width="400"
                                        height="300"
                                    />
                                </div>
                                <div className="flex flex-col justify-center items-start p-4">
                                    <span className="font-bold text-md text-slate-900">{data[0].name}</span>
                                    <span className="">{data[0].paragraph}</span>
                                </div>
                            </div>
                        </CarouselItem>

                        <CarouselItem className="xl:basis-1/4 md:basis-1/2 lg:basis-1/2 ">

                            <div className="h-[350px] w-[280px] shadow-lg border border-gray-100 p-0 bg-white rounded-2xl mb-9 md:mx-0 mx-4  ">
                                <div className="w-full rounded-t-2xl">
                                    <Image
                                        src={data[1].src}
                                        alt={`Image of ${data[1].name}`}
                                        width="400"
                                        height="300"
                                    />
                                </div>
                                <div className="flex flex-col justify-center items-start p-4">
                                    <span className="font-bold text-md text-slate-900">{data[1].name}</span>
                                    <span className="">{data[1].paragraph}</span>
                                </div>
                            </div>
                        </CarouselItem>

                        <CarouselItem className="xl:basis-1/4 md:basis-1/2 lg:basis-1/2 ">
                            <div className="h-[350px] w-[280px] shadow-lg border border-gray-100 p-0 bg-white rounded-2xl mb-9 md:m-0  mx-4  ">               
                                                 <div className="w-full rounded-t-2xl">
                                    <Image
                                        src={data[2].src}
                                        alt={`Image of ${data[2].name}`}
                                        width="400"
                                        height="300"
                                    />
                                </div>
                                <div className="flex flex-col justify-center items-start p-4">
                                    <p className="font-bold text-md text-slate-900">{data[2].name}</p>
                                    <p className="">{data[2].paragraph}</p>
                                </div>
                            </div>
                        </CarouselItem>

                        <CarouselItem className="xl:basis-1/4 md:basis-1/2 lg:basis-1/2 ">
                            <div className="h-[350px] w-[280px] shadow-lg border border-gray-100 p-0 bg-white rounded-2xl mb-9 md:m-0  mx-4  ">               
                                <div className="w-full rounded-t-2xl">
                                    <Image
                                        src={data[3].src}
                                        alt={`Image of ${data[3].name}`}
                                        width="400"
                                        height="300"
                                    />
                                </div>
                                <div className="flex flex-col justify-center items-start p-4">
                                    <p className="font-bold text-md text-slate-900">{data[3].name}</p>
                                    <p className="">{data[3].paragraph}</p>
                                </div>
                            </div>
                        </CarouselItem>

                        
                        <CarouselItem className="xl:basis-1/4 md:basis-1/2 lg:basis-1/2 ">
                            <div className="h-[350px] w-[280px] shadow-lg border border-gray-100 p-0 bg-white rounded-2xl mb-9 md:m-0  mx-4  ">               
                                <div className="w-full rounded-t-2xl">
                                    <Image
                                        src={data[4].src}
                                        alt={`Image of ${data[4].name}`}
                                        width="400"
                                        height="300"
                                    />
                                </div>
                                <div className="flex flex-col justify-center items-start p-4">
                                    <p className="font-bold text-md text-slate-900">{data[4].name}</p>
                                    <p className="">{data[4].paragraph}</p>
                                </div>
                            </div>
                        </CarouselItem>

                        

                       
                    </CarouselContent>
                     {/* Navigation Buttons */}
                     <CarouselPrevious className="bg-white text-red-800 text-3xl font-extrabold border-2 shadow md:h-20 md:w-20 
                     flex justify-center items-center 2xl:ml-0 ml-12  lg:ml-10 " />
                     <CarouselNext className="bg-white text-red-800 text-3xl border-2 font-extrabold shadow md:h-20 md:w-20 flex
                      justify-center items-center 2xl:mr-10 xl:mr-96 mr-12  lg:mr-10 md:mr-48" />

                </Carousel>
            </div>
        </div>
    );
}

export default Writers;
