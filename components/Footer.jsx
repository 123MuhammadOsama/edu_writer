'use client';
import Image from "next/image"
import { PhoneCallIcon } from "lucide-react";
import { MailIcon
 } from "lucide-react";
import { LocateFixedIcon } from "lucide-react";
import Social_Icons from "@/components/Social_Icons";
import { useState } from "react";
import { ArrowUp ,ArrowDown} from "lucide-react";
function Footer() {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
    };

    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
    };

    return (
        <footer className="bg-[#242424] md:grid md:grid-cols-3 z-10  h-min flex flex-col   w-full ">

            <div className="md:mx-20 mx-10 md:mt-4  flex flex-col xl:justify-start xl:items-center justify-center items-center">
                {/* Logo */}
                <Image
                    src="/Logo.png"
                    width="400"
                    height="400"
                  
                />


                {/* Payment Options  */}
                <div className="flex sm:flex-row flex-col  justify-center items-center w-[200px] h-10 xl:w-[600px]  xl:px-40 px-30 gap-3 xl:gap-5 md:justify-start md:items-center sm:my-0 my-2 ">
                   <div className="flex flex-row gap-2"> 

                   <Image
                        src="/footer4.png"
                        height="80"
                        width="80" />
                    <Image
                        src="/footer6.png"
                        height="80"
                        width="80" />
                    <Image
                        src="/footer7.png"
                        height="80"
                        width="80" />


                   </div>
                  

                   <div className="flex flex-row gap-2">

                   <Image
                        src="/footerwesternunion.png"
                        height="80"
                        width="80" />

                    <Image
                        src="/footer3.png"
                        height="80"
                        width="80" />

                    <Image
                        src="/footer2.png"
                        height="80"
                        width="80" />

                   </div>
                   

                </div>

                {/* Social Share Icons  */}
                <Social_Icons />




                {/* Address and Contact Area */}
                <div className=" text-white flex flex-col justify-center items-center 2xl:ml-0 xl:ml-40 gap-5 mt-5 mx-4 md:w-[700px] w-full md:ml-40 " >
                    <div className="flex flex-row gap-2 md:justify-center md:items-center lg:justify-start lg:items-start ">
                        <Image
                            src='/location-dot-solid 1.svg'
                            height="30"
                            width="30"
                        />
                        <p className="md:text-md text-sm  ">Lorem ipsum dolor, sit a</p>
                    </div>
                    <div className="flex flex-row gap-2  md:justify-center md:items-center  lg:justify-start lg:items-start ">
                        <MailIcon className="text-white " height={40} width={40} />
                        <p className="md:text-md text-sm ">Lorem ipsum, dolor sit a</p>
                    </div>
                    <div className="flex flex-row gap-2 md:justify-center md:items-center lg:justify-start lg:items-start  ">
                        <PhoneCallIcon className="text-white" height={40} width={40} />
                        <p className="md:text-md text-sm ">Lorem, ipsum dolor sit amet </p>

                    </div>

                </div>


            </div>

            {/* Dashes */}
            <div className="flex justify-center items-center">
                <div className="w-[1px] h-[300px]  bg-white md:block hidden">

                </div>


            </div>



            {/* Links for Higher Width Screens  */}
            <div className="md:flex flex-row  my-5 gap-1  hidden">
                <div className="text-white flex flex-col justify-center items-center md:-ml-16">
                    <span className="font-bold text-2xl text-white  md:text-center">Useful Links</span>
                    <ul className="underline ">
                        <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
                        <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
                        <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
                        <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
                        <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
                        <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
                        <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
                        <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
                        <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
                        <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
                        <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
                        <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>


                    </ul>
                </div>
                <div className="text-white  flex-col justify-center items-center md:flex hidden">
                    <span className="font-bold text-2xl text-white text-center">Services</span>
                    <ul className="underline flex flex-col justify-center items-center mx-10" >
                        <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
                        <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
                        <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
                        <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
                        <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
                        <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
                        <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
                        <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
                        <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>


                    </ul>
                </div>
                <div className="text-white md:flex  flex-col justify-center items-center  hidden">
                    <span className="font-bold text-2xl text-white ">Other Services </span>
                    <ul className="underline">
                        <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
                        <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
                        <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
                        <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
                        <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
                        <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
                        <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
                        <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
                        <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
                        <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
                        <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
                        <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>


                    </ul>
                </div>
            </div>
            {/* Links for smaller screens  */}
            <div className="mx-auto md:hidden  bg-[#242424]  my-5 flex flex-col ">
                <div className="relative">
                    <button
                        onClick={toggleDropdown1}
                        className={`${isOpen1 ? ' transition-all duration-200 ' : ''}  text-white border-b-2 border-white px-4 py-2 focus:outline-none w-[200px] flex flex-row justify-center items-between gap-5`}
                    >
                        Useful Links
                        {isOpen1 ? <ArrowUp /> : <ArrowDown />}
                    </button>
                    {/* Conditional Rendering for Dropdown 1 */}
                    {isOpen1 && (
                        <div className="right-0 mt-2 w-48 text-white bg-transparent rounded shadow-lg transition-all duration-200">
                            <ul className="flex flex-col justify-center items-center  border-t-0 py-5">
                                <li className="hover:text-tertiaryYellow"><a href="#item1" className="block px-4 py-2 ">Item 1</a></li>
                                <li className="hover:text-tertiaryYellow"><a href="#item2" className="block px-4 py-2">Item 2</a></li>
                                <li className="hover:text-tertiaryYellow"><a href="#item3" className="block px-4 py-2">Item 3</a></li>
                                <li className="hover:text-tertiaryYellow"><a href="#item4" className="block px-4 py-2">Item 4</a></li>

                            </ul>
                        </div>
                    )}
                </div>

                <div className="relative my-20">
                    <button
                        onClick={toggleDropdown2}
                        className={`${isOpen2 ? 'transition-all duration-200  ' : ''}  text-white border-b-2 border-white px-4 py-2 focus:outline-none w-[200px] flex flex-row justify-center items-between gap-5 `}
                    >
                        Services
                        {isOpen2 ? <ArrowUp /> : <ArrowDown />}
                    </button>
                    {/* Conditional Rendering for Dropdown 2 */}
                    {isOpen2 && (
                        <div className="right-0 mt-2 w-48 text-white bg-transparent rounded shadow-lg  transition-all duration-200">
                            <ul className="flex flex-col justify-center items-center py-5">
                                <li className="hover:text-tertiaryYellow"><a href="#item1" className="block px-4 py-2">Item 1</a></li>
                                <li className="hover:text-tertiaryYellow"><a href="#item2" className="block px-4 py-2">Item 2</a></li>
                                <li className="hover:text-tertiaryYellow"><a href="#item3" className="block px-4 py-2">Item 3</a></li>
                                <li className="hover:text-tertiaryYellow"><a href="#item4" className="block px-4 py-2">Item 4</a></li>

                            </ul>
                        </div>
                    )}
                </div>
            </div>

        </footer>

    );
}

export default Footer;