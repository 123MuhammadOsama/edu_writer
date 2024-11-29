
import Image from 'next/image'
import React from 'react'

import { FaLocationDot } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='bg-black p-10 lg:p-2 flex flex-col lg:flex-row text-white '>
      {/* lefttt */}
      <div className='items-center justify-center space-y-4 w-auto lg:w-[500px] xl:w-[800px] 2xl:w-1/2'>
        <div>
            <Image
              src='/Logo.png'
              alt='Edu-writers'
              height='400'
              width='400'
            />
        </div>
        <div className='pl-0 lg:pl-10'>
            <p className='text-[14px] lg:text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consectetur eveniet nemo deserunt delectus. Quibusdam, aliquam neque enim et odio ad autem iure beatae mollitia dolor quidem placeat. Architecto, vero?</p>
        </div>
        <div className='flex gap-2 pl-0 lg:pl-10'>
            <FaLocationDot  className='text-2xl'/> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ducimus.</span>
            
        </div>

        <div className='flex gap-2 pl-0 lg:pl-10'>
        <IoMailSharp  className='text-2xl'/> <span>theassignmnethelp@gmail.com</span>
        </div>

        <div className='flex gap-2 pl-0 lg:pl-10'>
        <FaPhoneAlt className='text-2xl' /> <span>+44 000000</span>

        </div>
      </div>

      {/* bich ki lineey */}
      <div className="flex justify-center items-center mx-10">
                <div className="w-[1px] h-[300px]  bg-white lg:block hidden">

                </div>


            </div>

      {/* sidha */}
      <div className='flex flex-col md:flex-row gap-2 md:gap-32 lg:gap-10 2xl:gap-32 2xl:pl-52 pt-10 lg:pt-20 space-y-5 lg:space-y-0 pr-0 lg:pr-4'>
        <div className='text-center'>
        <span className="font-bold text-2xl text-white">Useful Links</span>
        <ul className="underline">
            <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
            <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
            <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
            <li className="hover:text-tertiaryYellow">Lorem, ipsum.</li>
        </ul>

        <div className='space-y-2 pl-20 md:pl-8 lg:pl-4 pt-6'>
        <div className='flex gap-2'>
            <Image
                src='/footer2.png'
                alt=''
                height={50}
                width={50}
            />
            <Image
                src='/footer3.png'
                alt=''
                height={50}
                width={50}
            />
            <Image
                src='/footer4.png'
                alt=''
                height={50}
                width={50}
            />
        </div>

        <div className='flex gap-2'>
            
            <Image
                src='/footer5.png'
                alt=''
                height={50}
                width={50}
            />
            <Image
                src='/footer6.png'
                alt=''
                height={50}
                width={50}
            />
            <Image
                src='/footer7.png'
                alt=''
                height={50}
                width={50}
            />
        </div>

       
        </div>
        </div>

        <div className='text-center'>
        <span className="font-bold text-2xl text-white">Services</span>
        <ul className="underline">
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
    </div>
  )
}

export default Footer
