import Image from 'next/image'
import React from 'react'

const Experince5 = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* 1st */}
      <div>
        <h2 className='font-bold text-[26px] lg:text-[28px]'>Don’t Just Dream, Achieve It. Claim Your Success Today!</h2>
        <p className='text-[14px] lg:text-[16px]'>Stop worrying about where to start or how to finish – we’ve got you covered. Our tailored coursework help UK company is designed to bring out your best work, on time and on point. Seize the opportunity and see the difference!</p>
      </div>
      {/* niche */}
      <div className='flex'>
        {/* content */}
        <div className='space-y-5 lg:space-y-2 2xl:space-y-5 mt-10 h-auto'>
            <h3 className='font-bold text-[22px] lg:text-[24px]'>Connect Your Way, <span className='text-red-500'>Fast and Flexible!</span></h3>
            <p className='text-[14px] lg:text-[16px] max-w-4xl'>Whether you’re in the mood for a chat, need a quick WhatsApp response, or prefer email, we’ve your back! Our quick-start form is also available if you’re looking for an instant jumpstart. However you get in touch, connecting with us is simple, smooth, and on your terms.</p>
            <h3 className='font-bold text-[22px] lg:text-[24px]'>Get a Free, <span className='text-red-500'>Free Consultation!</span></h3>
            <p className='text-[14px] lg:text-[16px] max-w-4xl'>Curious about how we can help? After you connect, we’ll offer a free consultation custom to your needs. Our team will get to know your assignment needs, walk you through our services, answer any questions and give you all the guidance you need. No commitments, just friendly support to set you up for top scores.
            </p>
            <h3 className='font-bold text-[22px] lg:text-[24px]'>Start with 50% and   <span className='text-red-500'>Soar High</span></h3>
            <p className='text-[14px] lg:text-[16px] max-w-4xl'>Once we’ve laid out your best assignment plan, you’re ready to secure your expert with just a 50% payment. From there, you’re fully in the loop for every step, collaborating and following along as your project gets that pro touch!
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

export default Experince5
