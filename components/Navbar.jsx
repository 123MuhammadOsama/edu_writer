"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MailIcon, PhoneIcon, ChevronDownIcon } from "lucide-react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarDropdownOpen, setIsSidebarDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.outerWidth >= 1024) {
        setIsSidebarOpen(false);
        setIsSidebarDropdownOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const services = [
    { name: "Assignment Writing Services", link: "/assignment-writing-services" },
    { name: "Dissertation Writing Help", link: "/dissertation-writing-help" },
    { name: "Write My Essay", link: "/write-my-essay" },
    { name: "Thesis Writing Help", link: "/thesis-writing-help" },
    { name: "Coursework Writing Help", link: "/coursework-writing-help" },
    { name: "Research Paper Help", link: "/research-paper-help" },
    { name: "Case Study Help", link: "/case-study-help" },
    { name: "Editing and Proofreading Services", link: "/editing-and-proofreading-services" },
  ];

  return (
    <section className="w-full fixed top-0 z-50 bg-white">
      <div className="flex justify-between items-center border-b px-4 lg:px-10">
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
        <div className="lg:hidden">
          <button
            onClick={() => setIsSidebarOpen((prev) => !prev)}
            className="focus:outline-none text-gray-600"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Links Section (Visible on Large Screens) */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link href="/about" className="hover:text-[#fa2a5e]">
            About Us
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="hover:text-[#fa2a5e] flex items-center space-x-1"
            >
              <span>Services</span>
              <ChevronDownIcon className="h-4 w-4" />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-56 bg-white shadow-md border rounded-md mt-2">
                <ul className="divide-y">
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link
                        href={service.link}
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-[#fa2a5e]"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link href="/contactus" className="hover:text-[#fa2a5e]">
            Contact Us
          </Link>

          {/* Email and Phone */}
          <div className="flex items-center space-x-6 pl-6">
            <a
              href="mailto:info@example.com"
              className="flex items-center space-x-2 text-sm hover:text-blue-600"
            >
              <MailIcon className="h-5 w-5" />
              <span>info@example.com</span>
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-2 text-sm hover:text-green-600"
            >
              <PhoneIcon className="h-5 w-5" />
              <span>+1(123)456-7890</span>
            </a>
          </div>
        </div>

        {/* Order Now Button */}
        <Link href="/ordernow">
          <button className="border-2 border-black px-4 py-2 hover:bg-secondaryRed hover:text-white rounded-lg">
            Order Now
          </button>
        </Link>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
          <div className="fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-md p-4 overflow-y-auto">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="mb-6 focus:outline-none"
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
            <nav className="space-y-4">
              <Link href="/about" className="block hover:text-secondaryRed">
                About Us
              </Link>
              
          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="hover:text-[#fa2a5e] flex items-center space-x-1"
            >
              <span>Services</span>
              <ChevronDownIcon className="h-4 w-4" />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-56 bg-white shadow-md border rounded-md mt-2">
                <ul className="divide-y">
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link
                        href={service.link}
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-[#fa2a5e]"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
              <Link href="/contactus" className="block hover:text-secondaryRed">
                Contact Us
              </Link>
            </nav>

            {/* Email and Phone in Sidebar */}
            <div className="mt-6 space-y-4">
              <a
                href="mailto:info@example.com"
                className="flex items-center space-x-2 text-sm hover:text-blue-600"
              >
                <MailIcon className="h-5 w-5" />
                <span>info@example.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-2 text-sm hover:text-green-600"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>+1(123)456-7890</span>
              </a>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Navbar;
