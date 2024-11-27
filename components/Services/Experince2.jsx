import Image from 'next/image'
import React from 'react'

const Experince2 = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* 1st */}
      <div>
        <h2 className='font-bold text-[26px] lg:text-[28px]'>Serious About Your Grades? Get the Lead Here!</h2>
        <p className='text-[14px] lg:text-[16px]'>Dreading the endless research, writing, and formatting? With our dedicated dissertation help, we’ll take the weight off your shoulders and craft a masterpiece that speaks volumes. Effortlessly reach the finish line with us by your side!</p>
      </div>
      {/* niche */}
      <div className='flex'>
        {/* content */}
        <div className='space-y-5 lg:space-y-2 2xl:space-y-5 mt-10 h-auto'>
            <h3 className='font-bold text-[22px] lg:text-[24px]'>Connect Your  <span className='text-red-500'>Way—It's Easy!</span></h3>
            <p className='text-[14px] lg:text-[16px] max-w-4xl'>Prefer a chat, a WhatsApp message, or an email? We’re ready for it all! Whether it’s a quick question Got a preference? Chat instantly, hit us a quick WhatsApp, or go the detailed email route— or whatever fits your style. Or, to speed up your process, our quick-start form is right at your fingertips. However you like to connect, we’re here to make it simple and seamless for you.</p>
            <h3 className='font-bold text-[22px] lg:text-[24px]'>Start with a Free,  <span className='text-red-500'>No-Pressure Chat!</span></h3>
            <p className='text-[14px] lg:text-[16px] max-w-4xl'>Our team offers a free, no-pressure consultation, so you can get answers, options, and expert Our dedicated team is here to provide a free, no-strings-attached consultation! We’ll dig into your assignment needs, walk you through your options, and answer any questions you might have. It’s all about understanding how we can help you best—no pressure, just solid guidance for your success.</p>
            <h3 className='font-bold text-[22px] lg:text-[24px]'>Kickstart Your Success with 
            <span className='text-red-500'>Half the Payment!</span></h3>
            <p className='text-[14px] lg:text-[16px] max-w-4xl'>After we’ve mapped out your assignment needs, securing your spot is easy. Just make a 50% payment, and we’ll match you with an expert ready to bring your project to life. Stay connected, collaborate, and watch your project evolve exactly how you envision—right up to an A+ finish!</p>
            
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

export default Experince2
