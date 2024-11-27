import Image from 'next/image'
import React from 'react'

const Experince8 = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* 1st */}
      <div>
        <h2 className='font-bold text-[26px] lg:text-[28px]'>Don’t Just Wish for Top Scores—Order Now</h2>
        <p className='text-[14px] lg:text-[16px]'>Tired of chasing A+? It’s time to catch it with just a few steps! Hit the button now and let reliable editing and proofreading services get your academic game on point:
        </p>
      </div>
      {/* niche */}
      <div className='flex'>
        {/* content */}
        <div className='space-y-5 lg:space-y-2 2xl:space-y-5 mt-10 h-auto'>
            <h3 className='font-bold text-[22px] lg:text-[24px]'>Reach Out,  <span className='text-red-500'>Your Way</span></h3>
            <p className='text-[14px] lg:text-[16px] max-w-4xl'>Pick your preferred channel—WhatsApp for quick chats, email for detailed queries, Chabot for instant support, or our user-friendly form. Whatever works for you, works for us! Your journey starts the moment you say hello, and we’re here to make it as smooth as possible.
            </p>
            <h3 className='font-bold text-[22px] lg:text-[24px]'>Free & Friendly   <span className='text-red-500'>Consultation!</span></h3>
            <p className='text-[14px] lg:text-[16px] max-w-4xl'>Our support team is ready to chat! With our free consultation, we’ll dig into your assignment’s requirements, address all your worries, and outline how we’ll transform your task into exceptional work. No pressure, just friendly guidance to ensure everything is crystal clear.
            </p>
            <h3 className='font-bold text-[22px] lg:text-[24px]'>Lock It In and  <span className='text-red-500'>Relax!</span></h3>
            <p className='text-[14px] lg:text-[16px] max-w-4xl'>A 50% deposit secures your order and sets our wheels in motion. We’ll pair you with a dedicated editor who will keep you in the loop, answer your questions, and fine-tune your work to tailored perfection. Sit back, relax, and see the difference yourself!
                     </p>
            
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

export default Experince8
