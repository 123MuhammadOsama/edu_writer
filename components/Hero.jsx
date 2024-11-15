"use client"; // Ensures that the component runs in a client-side environment

import Link from "next/link";
import Image from "next/image";
import { ArrowBigRight, ArrowRight, MousePointer } from "lucide-react";
import TawktoButton from "./TawkToButton";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useState, useRef } from "react"; // Grouping imports together
import { verifyCaptcha } from "@/app/api/recaptcha/server_action";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Hero() {
  const [isVerified, setIsverified] = useState(false);
  const recaptchaRef = useRef(null);

  async function handleCaptchaSubmission(token) {
    try {
      await verifyCaptcha(token);
      setIsverified(true);
    } catch {
      setIsverified(false);
    }
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = toast.loading("Query is being sent ...", { autoClose: false });

    const response = await fetch("/api/heroform", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast.update(id, {
        render: "Query sent successfully!",
        type: "success",
        isLoading: false,
        autoClose: 5000,
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      toast.update(id, {
        render: "Failed to send Contact Info. Please try again.",
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <div className="md:mx-0 w-full ">
      <section className="xl:mt-24 lg:mt-32 md:mt-36 mt-36 flex md:flex-row flex-col lg:justify-center lg:items-center
       justify-center items-center 2xl:px-10 xl:px-10 lg:mr-5 md:mx-3 w-full">
        <div className="2xl:max-w-5xl xl:max-w-2xl lg:max-w-xl  sm:max-w-sm max-w-xs md:ml-0 sm:mx-0 mx-4 ">
          <h1 className="lg:text-[40px] md:text-3xl  font-bold text-textColor text-2xl  pb-2    ">
          Expert  
            <span className="text-red-500"> Edu Writers UK </span>  Bringing
            <span className="text-primaryBlue"> <br className="sm:block hidden"/>A+  </span> Right to Your Desk
          </h1>
          <p className="md:text-[16px] text-[14px] text-textColor pb-2 ">
          Extreme academic stress? Consider it gone! Magic happens when the right words meet the right minds. We &apos;re here to ensure excellence in every word and success in every assignment – every single time. Watch your grades soar with our custom-tailored assignment writing service today!

          </p>
          <div className="mt-10">
            <Image
              src="/Reviews.png"
              width="600"
              height="400"
              alt="Trust Pilot"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-6 md:justify-start md:items-center justify-center items-center gap-4 ">
            <TawktoButton mdWidth={200} Height={45} Width={150} />
            <Link href="/ordernow">
            <button className="border-2 font-bold border-secondaryRed text-red hover:bg-secondaryRed text-secondaryRed hover:text-white py-2 px-2 w-[12rem]  min-h-max  rounded-md flex flex-row justify-center transition-all group-hover:translate-x-1">
              Order Now
              <div>
                <ArrowRight className="hover:translate-x-1 transition-all" />
              </div>
            </button>
            </Link>
          </div>
        </div>

        <div className="xl:w-[1800px] sm:my-0 my-12 p-5 max-w-full flex-1 p-4: 2xl:max-w-xl 2xl:ml-10  bg-transparent font-serif border border-1 rounded-xl  lg:max-w-md md:w-[70%] w-[300px] md:mx-0 lg:mx-5 md:m-8 mb-10  shadow-md shadow-gray-400 ">
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-md py-3 px-4 text-gray-800 hover:text-blue-400 bg-white focus:bg-transparent text-sm outline-blue-800 border-2 border-gray-300 hover:border-2 hover:border-blue-500"
            />
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-md py-3 px-4 text-gray-800 hover:text-blue-500 bg-white focus:bg-transparent text-sm outline-blue-800 border-2 border-gray-300"
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full rounded-md py-3 px-4 text-gray-800 bg-white focus:bg-transparent text-sm outline-blue-800 border-2 border-gray-300"
            />
            <textarea
              placeholder="Message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full rounded-md px-4 text-gray-800 bg-white focus:bg-transparent text-sm pt-3 outline-blue-800 border-2 border-gray-300"
            ></textarea>
            <div className="w-full object-contain flex justify-center items-center">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LdlnyIpAAAAAO3jl8iqrfTTTKr8Y3t3vcuqv6p9"
                onChange={handleCaptchaSubmission}
              />
            </div>
          
            <div className="flex flex-col justify-center items-center">
              <button
                type="submit"
                className="relative w-full h-12 text-4xl pt-2 pb-1 text-white font-bold bg-primaryBlue border border-blue rounded-lg overflow-hidden transition-colors duration-500 ease-out group"
                disabled={!isVerified}
              >
                <span className="absolute inset-1 bg-tertiaryYellow transition-transform duration-500 ease-out transform scale-0 group-hover:scale-[3] rounded-full"></span>
                <span className="relative z-10">Submit</span>

                
              </button>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        theme="dark"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
