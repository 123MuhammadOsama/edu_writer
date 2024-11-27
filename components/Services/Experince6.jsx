import Image from 'next/image'
import React from 'react'

const Experince6 = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* 1st */}
      <div>
        <h2 className='font-bold text-[26px] lg:text-[28px]'>Click, Relax—Ordering Has Never Been This Easy!</h2>
        <p className='text-[14px] lg:text-[16px]'>Good enough isn’t good enough for us. Our UK-based experts go the extra mile to provide high-quality, plagiarism-free work that leaves an impression. Get ready for an experience that’s a cut above the rest!
        </p>
      </div>
      {/* niche */}
      <div className='flex'>
        {/* content */}
        <div className='space-y-5 lg:space-y-2 2xl:space-y-5 mt-10 h-auto'>
            <h3 className='font-bold text-[22px] lg:text-[24px]'>How You Want,  <span className='text-red-500'>When You Want!</span></h3>
            <p className='text-[14px] lg:text-[16px] max-w-4xl'>Chat? Message? Email? If you like to connect, we’re ready! Our team is available to assist you through your preferred communication channel. Even if you’re in a rush, our quick-start form will get you going in no time.</p>
            <h3 className='font-bold text-[22px] lg:text-[24px]'>No-Risk,  <span className='text-red-500'>No-Obligation Chat!</span></h3>
            <p className='text-[14px] lg:text-[16px] max-w-4xl'>After you connect, we’ll dig into your needs with a free consultation. We’ll help you explore options, answer your questions, and give you an overview of what to expect—pure and simple. It’s all about getting you the right support, your way.

            </p>
            <h3 className='font-bold text-[22px] lg:text-[24px]'>Book Your Spot with <span className='text-red-500'>Just Half Upfront!</span></h3>
            <p className='text-[14px] lg:text-[16px] max-w-4xl'>Once we’re on the same page, locking in your project is simple: just a 50% payment, and we’ll match you with a pro to bring your project to life. Stay engaged, track progress, and see your assignment reach A+ potential.

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

export default Experince6
