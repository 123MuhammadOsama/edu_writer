import React from 'react'

const Academic = () => {


    const challenges = [
        {
          title: "Time Constraints",
          description: [
            "Are you feeling the pressure of looming deadlines and trying to balance your academic workload with other responsibilities? Fear not! We understand how overwhelming it can be to manage multiple assignments, part-time jobs, social commitments, and whatnot, all the while striving to excel academically. That’s why top-notch assignment help Australia writing services are here to ease the burden!",
            "With our timely assistance, you can wave goodbye to the stress of rushing to meet tight deadlines. A talented team of dedicated writers ensures that your assignments are completed promptly, allowing you to focus on other aspects of your life without sacrificing academic success."
          ]
        },
        {
            title: "Time Constraints",
            description: [
              "Are you feeling the pressure of looming deadlines and trying to balance your academic workload with other responsibilities? Fear not! We understand how overwhelming it can be to manage multiple assignments, part-time jobs, social commitments, and whatnot, all the while striving to excel academically. That’s why top-notch assignment help Australia writing services are here to ease the burden!",
              "With our timely assistance, you can wave goodbye to the stress of rushing to meet tight deadlines. A talented team of dedicated writers ensures that your assignments are completed promptly, allowing you to focus on other aspects of your life without sacrificing academic success."
            ]
          },
        {
          title: "Language Barriers",
          description: [
            "Are language barriers limiting your ability to express yourself effectively in your writing tasks? We recognize that English may not be your first language, and coherently articulating your thoughts can be challenging. That's where our team of online assignment helpers in Australia comes in to save your day! With their linguistic proficiency and expertise in writing, they'll ensure that your assignments are not only grammatically sound but also eloquently written.",
            "So, just sit back and relax! You'll receive papers that reflect your ideas clearly and concisely, helping you overcome language barriers and excel in your academic pursuits."
          ]
        },
        {
          title: "Lack of Resources",
          description: [
            "Are you feeling the pressure of looming deadlines and trying to balance your academic workload with other responsibilities? Fear not! We understand how overwhelming it can be to manage multiple assignments, part-time jobs, social commitments, and whatnot, all the while striving to excel academically. That’s why top-notch assignment help Australia writing services are here to ease the burden!",
            "With our timely assistance, you can wave goodbye to the stress of rushing to meet tight deadlines. A talented team of dedicated writers ensures that your assignments are completed promptly, allowing you to focus on other aspects of your life without sacrificing academic success."
          ]
        }
      ];


  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-5">
        {/* first */}
      <div>
        <h2 className='font-bold text-[26px] lg:text-[28px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
        <p className='text-[14px] lg:text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo soluta fugiat labore aut doloribus neque voluptates voluptatibus laboriosam, impedit reprehenderit est perferendis repellendus hic quisquam ipsa dolorem alias! Ut, odio?</p>
      </div>
            {/* scond */}
      <div>
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-8">
        {challenges.map((challenge, index) => (
          <div key={index} className="bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              <span className="text-red-600">{challenge.title.split(" ")[0]}</span> {challenge.title.split(" ").slice(1).join(" ")}:
            </h2>
            {challenge.description.map((paragraph, idx) => (
              <p key={idx} className="text-gray-700 mb-4">{paragraph}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Academic
