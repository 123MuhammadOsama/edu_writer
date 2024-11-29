"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MailIcon, PhoneIcon, ChevronDownIcon } from "lucide-react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const mediaqueries = () => {
      if (window.outerWidth >= 1024) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener("resize", mediaqueries);
    return () => {
      window.removeEventListener("resize", mediaqueries);
    };
  }, []);

  const services = [
    { name: "Assignment Writing Services", link: "/services/assignment-writing-services" },
    { name: "Dissertation Writing Help", link: "/services/dissertation-writing-help" },
    { name: "Write My Essay", link: "/services/write-my-essay" },
    { name: "Thesis Writing Help", link: "/services/thesis-writing-help" },
    { name: "Coursework Writing Help", link: "/services/coursework-writing-help" },
    { name: "Research Paper Help", link: "/services/research-paper-help" },
    { name: "Case Study Help", link: "/services/case-study-help" },
    { name: "Editing and Proofreading Services", link: "/services/editing-and-proofreading-services" },
  ];

  return (
    <section className="w-full fixed h-min z-50 px-10">
      <div className="flex justify-between items-center border-b bg-white z-50">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/Logo.png"
              alt="logo"
              width={240}
              height={160}
              className="object-contain"
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Links Section (Shown on lg and above) */}
        <div className="hidden lg:flex items-center lg:space-x-2 2xl:space-x-12 lg:text-lg xl:text-xl">
          <Link
            href="/about"
            className="text-sm xl:text-lg font-medium hover:text-[#fa2a5e] pb-2"
          >
            About Us
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="text-sm xl:text-lg font-medium hover:text-[#fa2a5e] pb-2 flex items-center space-x-1"
            >
              <span>Services</span>
              <ChevronDownIcon height={16} width={16} />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-48 bg-white shadow-lg border rounded-md mt-2 z-50">
                <ul>
                  {services.map((service, index) => (
                    <li key={index} className="border-b last:border-0">
                      <Link
                        href={service.link}
                        className="block px-3 py-1 text-sm hover:bg-gray-100 hover:text-[#fa2a5e]"
                        onClick={() => setIsDropdownOpen(false)} // Close dropdown on link click
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link
            href="/contactus"
            className="text-sm xl:text-lg font-medium hover:text-[#fa2a5e] pb-2"
          >
            Contact Us
          </Link>

          {/* Email and Phone */}
          <div className="flex items-center space-x-4 pl-4">
            <a href="mailto:info@example.com" className="flex items-center space-x-2">
              <MailIcon height={20} width={20} />
              <span className="text-sm xl:text-base">info@example.com</span>
            </a>
            <a href="tel:+1234567890" className="flex items-center space-x-2">
              <PhoneIcon height={20} width={20} />
              <span className="text-sm xl:text-base">+1(123)456-7890</span>
            </a>
          </div>
        </div>

        {/* Order Now Button */}
        <Link href="/ordernow">
          <button className="border-2 border-black text-black px-4 mx-2 py-2 hover:bg-secondaryRed hover:text-white rounded-lg text-sm">
            Order Now
          </button>
        </Link>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-8">
          {/* Close Button inside Sidebar */}
          <div className="self-end">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="focus:outline-none"
            >
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

          {/* Navigation Links */}
          <Link
            href="/about"
            className="md:text-md font-medium hover:text-secondaryRed"
            onClick={() => setIsSidebarOpen(false)}
          >
            About Us
          </Link>
          
          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="text-sm xl:text-lg font-medium hover:text-[#fa2a5e] pb-2 flex items-center space-x-1"
            >
              <span>Services</span>
              <ChevronDownIcon height={16} width={16} />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-48 bg-white shadow-lg border rounded-md mt-2 z-50">
                <ul>
                  {services.map((service, index) => (
                    <li key={index} className="border-b last:border-0">
                      <Link
                        href={service.link}
                        className="block px-3 py-1 text-sm hover:bg-gray-100 hover:text-[#fa2a5e]"
                        onClick={() => setIsDropdownOpen(false)} // Close dropdown on link click
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <Link
            href="/contactus"
            className="md:text-md font-medium hover:text-secondaryRed"
            onClick={() => setIsSidebarOpen(false)}
          >
            Contact Us
          </Link>

          {/* Email and Phone in Sidebar */}
          <div className="space-y-4">
            <a
              href="mailto:info@example.com"
              className="flex items-center space-x-2 text-sm font-medium hover:text-blue-600"
            >
              <MailIcon height={20} width={20} />
              <span>info@example.com</span>
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-2 text-sm font-medium hover:text-green-600"
            >
              <PhoneIcon height={20} width={20} />
              <span>+1(123)456-7890</span>
            </a>
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
