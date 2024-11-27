import Image from 'next/image'
import React from 'react'

const Experince1 = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* 1st */}
      <div>
        <h2 className='font-bold text-[26px] lg:text-[28px]'>Connect with Us & Let’s Go!</h2>
        <p className='text-[14px] lg:text-[16px]'>Take control of your schedule with our cheap assignment writing service UK platform. We’ll bring the knowledge and polish you need so you can leave late-night cramming, hit submit with confidence, and rise to the top!        </p>
      </div>
      {/* niche */}
      <div className='flex'>
        {/* content */}
        <div className='space-y-5 lg:space-y-2 2xl:space-y-5 mt-10 h-auto'>
            <h3 className='font-bold text-[22px] lg:text-[24px]'>Choose Your  <span className='text-red-500'>WCommunication Style</span></h3>
            <p className='text-[14px] lg:text-[16px] max-w-4xl'>Whether you're up for a quick chat or prefer a thorough message, connecting with us is a piece of cake! Reach out via our user-friendly Chabot, drop us a message on WhatsApp, or just shoot us a detailed email. Want to keep things simple? Fill out our quick-start form then.</p>
            <h3 className='font-bold text-[22px] lg:text-[24px]'>Enjoy a <span className='text-red-500'>Free Consultation</span></h3>
            <p className='text-[14px] lg:text-[16px] max-w-4xl'>Once you reach out, our super supportive customer service team will provide you with a free consultation! We’ll dig deep into your assignment details, answer your questions & discuss how we can best assist you.</p>
            <h3 className='font-bold text-[22px] lg:text-[24px]'>Secure Your 
            <span className='text-red-500'>A+ with Ease</span></h3>
            <p className='text-[14px] lg:text-[16px] max-w-4xl'>After yoYou can secure your order with just a half payment, and then we’ll assign a top-notch writer to your project. Throughout the process, you’ll have the opportunity to collaborate, ensuring that the final result aligns with your expectations and puts you on the path to perfect scores!</p>
            
        </div>
        {/* image */}
        <div className='hidden lg:flex justify-center items-center px-4'>
            <Image
                src='/experience.png'
                alt='Experience Image'
                height={1300}
                width={1000}
            />
        </div>
      </div>
    </div>
  )
}

export default Experince1
