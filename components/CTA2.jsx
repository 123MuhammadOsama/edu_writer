'use client';
import Image from 'next/image';

function CTA2() {
    const data = [
        {
            src: "/frame-1.png",
            description: "Stuck on how to express your ideas? We will transform your unique vision into a knockout paper that is 100% you!"
        },
        {
            src: "/frame-2.png",
            description: "In a rush? We spring into action with lightning-fast help so you're never left scrambling before the clock hits"
        },
        {
            src: "/frame-5.png",
            description: "Our PhD-level writers bring next-level expertise. Expect nothing less than mind-blowing papers you will be dying to flaunt!"
        },
        {
            src: "/frame-3.png",
            description: "Why pay a fortune? We deliver A+ worthy assignments for prices that would not empty your bank account!"
        },
        {
            src: "/frame-4.png",
            description: "Turn in every assignment with confidence! We guarantee top-quality work that smashes academic standards every single time."
        },
        {
            src: "/frame-6.png",
            description: "Unlimited revisions until perfection. You are in control—revise and refine until your paper is flawless, at no extra cost!"
        },
    ];

    return (
        <div className="bg-[#630009] xl:h-[400px] lg:h-[500px] md:h-[500px] overflow-hidden">
            {/* Use grid for smaller screens and flex for larger screens */}
            <div className="grid grid-cols-2 gap-5 px-5 py-5 md:grid-cols-3 md:justify-between lg:px-12 lg:py-10">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-col justify-center items-center lg:gap-5 gap-3 p-5 border-2 md:border-none">
                        {/* Icon */}
                        <Image 
                            src={item.src}
                            alt="Icon"
                            height="30"
                            width="30"
                            className="lg:h-[40px] lg:w-[40px]"
                        />
                        {/* Paragraph */}
                        <p className="text-white text-center mx-auto lg:px-5 md:text-[16px] text-[14px]">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CTA2;

