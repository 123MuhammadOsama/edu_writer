import Image from 'next/image'
import React from 'react'

const Experince7 = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* 1st */}
      <div>
        <h2 className='font-bold text-[26px] lg:text-[28px]'>A Simple Click Separates You from Success: Order Today!</h2>
        <p className='text-[14px] lg:text-[16px]'>Struggling? Don’t sweat it—reaching out to us for urgent help with case study is as simple as it gets. We’ve designed a process that’s quick, student-friendly and gets your work into expert hands in no time:
        </p>
      </div>
      {/* niche */}
      <div className='flex'>
        {/* content */}
        <div className='space-y-5 lg:space-y-2 2xl:space-y-5 mt-10 h-auto'>
            <h3 className='font-bold text-[22px] lg:text-[24px]'>Reach Out: <span className='text-red-500'>We’re Just a Click Away!</span></h3>
            <p className='text-[14px] lg:text-[16px] max-w-4xl'>Whether you prefer filling out a form, chatting on WhatsApp, shooting us a quick email, or using our handy Chabot, we’re here for you. No long queues or frustrating delays—just instant access to a support team that’s eager to help.
            </p>
            <h3 className='font-bold text-[22px] lg:text-[24px]'>Free Consultation?  <span className='text-red-500'>Yes, Please!</span></h3>
            <p className='text-[14px] lg:text-[16px] max-w-4xl'>Once you contact us, our friendly customer support team will guide you through the process, free of charge. We’ll discuss your case study details, answer your questions, and ensure every requirement is crystal clear. When you’re ready, secure your order with just half the payment.

            </p>
            <h3 className='font-bold text-[22px] lg:text-[24px]'>Collaborative Writing for <span className='text-red-500'>Top Grades!</span></h3>
            <p className='text-[14px] lg:text-[16px] max-w-4xl'>Your assignment is then assigned to a skilled writer who specialises in your subject. It’s a team effort—you stay in the loop and can provide input along the way. The result? A stellar case study that reflects your needs and secures top scores.
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

export default Experince7
