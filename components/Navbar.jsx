"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MailIcon, PhoneIcon } from "lucide-react";



const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [LiActive, setLiActive] = useState("");

  


  //RESPONISVE TOGGLE BEHAVIOUR  //
  useEffect(()=>{
  const mediaqueries = () =>{
    if (window.outerWidth >= 1024) {
      setIsSidebarOpen(false);
    } else if (window.outerWidth <= 1023) {
      setLiActive("");
    }
  }
  window.addEventListener("resize", mediaqueries);
    return () => {
      window.removeEventListener("resize", mediaqueries);
    };
  }, []);

  


  return (
    <section className="w-full fixed h-min z-50">


      {/*  */}
      <div className="flex justify-between items-center border-b bg-white z-50 ">

        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link href='/'>
            <Image
              src="/Logo.png"
              alt="logo"
              width={240}
              height={160}
              className="object-contain "
            />
          </Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="lg:hidden mx-2">
          {!isSidebarOpen && (
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="focus:outline-none text-gray-600"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          )}
        </div>

        {/* Links Section (Shown on lg and above) */}
        <div className=" hidden lg:flex space-x-4 md:space-x-2 lg:space-x-4 lg:text-lg xl:text-2xl ">
          <Link href="/about" className="text-xs md:text-sm xl:text-lg font-medium hover:text-[#fa2a5e] pb-2" >About Us</Link>
          <Link href="/services" className="text-xs md:text-sm xl:text-lg font-medium hover:text-[#fa2a5e] pb-2" >Services</Link>
          <Link href="/contactus" className="text-xs md:text-sm xl:text-lg font-medium hover:text-[#fa2a5e] pb-2" >Contact Us</Link>
        </div>

        {/* Contact Section (Shown on sm and above) */}
        {!isSidebarOpen && (

          <div className="flex flex-row justify-center w-1/2">
            <div className="hidden lg:flex relative flex-col group overflow-hidden mt-4  lg:text-lg">
              <div className="flex items-center space-x-2 z-10 transition-all duration-300 group-hover:-translate-y-8 group-hover:opacity-0">
                <a href="mailto:info@eduwriter.com">
                  <span className="flex items-center  space-x-2 z-10 transition-all duration-300 group-hover:-translate-y-8 group-hover:opacity-0">
                    <MailIcon height={20} width={20} />
                    <p className="text-black  ">info@eduwriter.com</p>
                  </span>
                </a>
              </div>

              <div className="flex items-center space-x-2 absolute top-0 transition-all duration-300 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:text-blue-700">
                <a href="mailto:info@eduwriter.com">
                  <span className="flex items-center space-x-2 absolute top-0 transition-all duration-300 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:text-blue-700">
                    <MailIcon height={20} width={20} />
                    <p className="">info@eduwriter.com</p>
                  </span>
                </a>
              </div>
            </div>

            <div className="hidden lg:flex relative flex-col group overflow-hidden mt-4 ">
              <div className="flex items-center space-x-2 z-10 transition-all duration-300 group-hover:-translate-y-8 group-hover:opacity-0">
                <a href="tel:+1 206 746-7149">
                  <span className="px-2 flex items-center space-x-2 z-10 transition-all duration-300 group-hover:-translate-y-8 group-hover:opacity-0">
                    <Image
                      src="/whatsapp-black.png"
                      alt=""
                      width="25"
                      height="25"
                      className="object-contain mx-2"

                    />
                    +1(206)746-7149
                  </span>
                </a>
              </div>

              <div className="flex items-center space-x-2  xl:-mt-8 transition-all duration-300 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:text-green-700 pt-2">
                <a href="tel:+1 246 246 ">
                  <span className="flex items-center px-2 space-x-2 transition-all duration-300 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:text-green-700 w-[200px]">
                    <Image
                      src="/greenWhatsapp.png"
                      alt=""
                      width="22"
                      height="22"
                      className="object-contain mx-2"
                    />
                    +1(206)746-7149
                  </span>



                </a>

              </div>


            </div>
            <Link href="/ordernow">
              <button className=" border-2 border-black text-black lg:px-4 md:px-2 px-2 mx-1 py-4 hover:bg-secondaryRed hover:text-white md:h-10 md:w-36 h-6 flex justify-center items-center rounded-lg mt-1 md:mt-4 lg:text-lg md:text-sm text-xs ">
                Order Now

              </button>

            </Link>

          </div>
        )}
      </div>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80  bg-white z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col p-6 space-y-8">

          {/* Close Button inside Sidebar */}
          <div className="self-end">
            <button onClick={() => setIsSidebarOpen(false)} className="focus:outline-none">
              {/* Close Icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href='/'>
              <Image
                src="/Logo.png"
                alt="logo"
                width={280}
                height={180}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <Link href="/about" className="md:text-md font-medium hover:text-secondaryRed" onClick={() => setIsSidebarOpen(false)}>About Us</Link>
          <Link href="/services" className="md:text-md font-medium hover:text-secondaryRed" onClick={() => setIsSidebarOpen(false)}>Services</Link>
          <Link href="/contactus" className="md:text-md font-medium hover:text-secondaryRed" onClick={() => setIsSidebarOpen(false)}>Contact Us</Link>

          {/* Contact Section in the Sidebar */}
          <div className="space-y-4">
            {/* Phone */}
            <span className="flex flex-row h-10 gap-x-2 md:gap-x-1 text-sm text-black font-bold hover:text-green-600">
              <PhoneIcon height={20} width={20} />
              +1(206)746-7149
            </span>
            <span className="flex flex-row h-10 gap-x-2  w-full text-sm text-black font-bold  hover:text-green-600">
              <MailIcon height={20} width={20} />
              info@proghostwritingservices.com
            </span>
          </div>
        </div>
      </div>

      {/* Overlay when Sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)} // Close sidebar when overlay is clicked
        ></div>
      )}
    </section>
  );
};

export default Navbar;