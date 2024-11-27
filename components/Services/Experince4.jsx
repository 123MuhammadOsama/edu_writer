import Image from 'next/image'
import React from 'react'

const Experince4 = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* 1st */}
      <div>
        <h2 className='font-bold text-[26px] lg:text-[28px]'>Time’s Ticking, Take the Leap – Get Started Now!</h2>
        <p className='text-[14px] lg:text-[16px]'>Need a push in the right direction? From finding the right sources to nailing that perfect conclusion, we offer comprehensive thesis writing help UK support, whenever you need it. The opportunity knocks, invest in yourself!</p>
      </div>
      {/* niche */}
      <div className='flex'>
        {/* content */}
        <div className='space-y-5 lg:space-y-2 2xl:space-y-5 mt-10 h-auto'>
            <h3 className='font-bold text-[22px] lg:text-[24px]'>Get in Touch in    <span className='text-red-500'>Your Style!</span></h3>
            <p className='text-[14px] lg:text-[16px] max-w-4xl'>Prefer a chat, a WhatsApp message, or an email? We’re ready for it all! Whether it’s a quick question or detailed help, connect your way. And if speed’s your vibe, our instant-start form is ready and waiting. However you roll, we’re here to make it easy, flexible, and centered around you.</p>
            <h3 className='font-bold text-[22px] lg:text-[24px]'>Start with a   <span className='text-red-500'>Free Consultation!</span></h3>
            <p className='text-[14px] lg:text-[16px] max-w-4xl'>Our team offers a free, no-pressure consultation, so you can get answers, options, and expert insights on thesis dissertation help. From your goals to your concerns, we’ll cover it all —no commitment needed. It’s all about finding the best way we can support you, setting you up for a smooth, successful experience.</p>
            <h3 className='font-bold text-[22px] lg:text-[24px]'>Lock in Your Expert with  <span className='text-red-500'>Just 50%! </span></h3>
            <p className='text-[14px] lg:text-[16px] max-w-4xl'>When you say, “help me write my thesis,” we’re ready to handle every detail. Once your goals are set, securing your order is simple—just half the payment, and you’re on your way! You’ll work closely with a dedicated expert, staying in the loop as your project progresses all the way to an exceptional finish.</p>
            
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

export default Experince4
