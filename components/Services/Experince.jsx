import Image from 'next/image'
import React from 'react'

const Experince = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* 1st */}
      <div>
        <h2 className='font-bold text-[26px] lg:text-[28px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
        <p className='text-[14px] lg:text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo soluta fugiat labore aut doloribus neque voluptates voluptatibus    laboriosam, impedit reprehenderit est perferendis repellendus hic quisquam ipsa dolorem alias! Ut, odio?</p>
      </div>
      {/* niche */}
      <div className='flex'>
        {/* content */}
        <div className='space-y-5 lg:space-y-2 2xl:space-y-5 mt-10 h-auto'>
            <h3 className='font-bold text-[22px] lg:text-[24px]'>Time <span className='text-red-500'>Constrains</span></h3>
            <p className='text-[14px] lg:text-[16px] max-w-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo soluta fugiat labore aut doloribus neque voluptates voluptatibus    laboriosam, impedit reprehenderit est perferendis repellendus hic quisquam ipsa dolorem alias! Ut, odio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo soluta fugiat labore aut doloribus neque voluptates voluptatibus    laboriosam, impedit reprehenderit est perferendis repellendus hic quisquam ipsa dolorem alias! Ut, odio?</p>
            <h3 className='font-bold text-[22px] lg:text-[24px]'>Time <span className='text-red-500'>Constrains</span></h3>
            <p className='text-[14px] lg:text-[16px] max-w-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo soluta fugiat labore aut doloribus neque voluptates voluptatibus    laboriosam, impedit reprehenderit est perferendis repellendus hic quisquam ipsa dolorem alias! Ut, odio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo soluta fugiat labore aut doloribus neque voluptates voluptatibus    laboriosam, impedit reprehenderit est perferendis repellendus hic quisquam ipsa dolorem alias! Ut, odio?</p>
            <h3 className='font-bold text-[22px] lg:text-[24px]'>Time <span className='text-red-500'>Constrains</span></h3>
            <p className='text-[14px] lg:text-[16px] max-w-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo soluta fugiat labore aut doloribus neque voluptates voluptatibus    laboriosam, impedit reprehenderit est perferendis repellendus hic quisquam ipsa dolorem alias! Ut, odio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo soluta fugiat labore aut doloribus neque voluptates voluptatibus    laboriosam, impedit reprehenderit est perferendis repellendus hic quisquam ipsa dolorem alias! Ut, odio?</p>
            <h3 className='font-bold text-[22px] lg:text-[24px]'>Time <span className='text-red-500'>Constrains</span></h3>
            <p className='text-[14px] lg:text-[16px] max-w-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo soluta fugiat labore aut doloribus neque voluptates voluptatibus    laboriosam, impedit reprehenderit est perferendis repellendus hic quisquam ipsa dolorem alias! Ut, odio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo soluta fugiat labore aut doloribus neque voluptates voluptatibus    laboriosam, impedit reprehenderit est perferendis repellendus hic quisquam ipsa dolorem alias! Ut, odio?</p>
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

export default Experince
