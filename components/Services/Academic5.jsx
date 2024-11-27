import React from 'react'

const Academic5 = () => {


    const challenges = [
        {
          title: "Struggling with Complex Topics? Let Our Experts Simplify It for You!",
          description: [
            "Ever feel like your coursework is written in another language? Complex topics can make even the most dedicated student feel lost. Whether it’s complicated theories, advanced math, or tricky historical events, understanding it all can be incredibly frustrating. But don’t worry, our team of subject-matter experts is here to help.",
            "With professional coursework help UK platform, we break down the most difficult concepts, crafting coursework that’s clear, well-researched, and academically sound. No more staring at the screen, hoping it will make sense! You’ll get coursework that’s written to impress, and you’ll even gain a better understanding of the material itself. So, why worry? Let us handle the complexity while you breathe a sigh of relief!"
          ]
        },
        {
            title: "Running Out of Time? Let Us Meet Your Deadline Stress-Free!",
            description: [
              "Time management: the ultimate student struggle. With classes, jobs, family obligations, and a social life, where does coursework fit in? When you’re down to the wire and facing impossible deadlines, panic can quickly set in. But that’s where exceptional coursework help online service providers step in.",
              "Our agency is designed to meet tight deadlines without sacrificing quality. Just tell us your timeline, and our team will work efficiently to deliver polished, A-worthy papers right on time. So if the clock is ticking, the stress rises and you’re thinking, “Can someone urgently help with coursework? let us save the day by taking that deadline off your shoulders."
            ]
          },
        {
          title: "Finding Research Exhausting? We’re Here to Do the Heavy Lifting!",
          description: [
            "Hours in the library, endless scrolling through databases, and analysing sources can be downright exhausting. And after all that, there’s still the challenge of synthesising the information into a coherent piece of writing.",
            "That’s where the best coursework writing help comes to the rescue. We do all the legwork, from deep research to expertly crafted arguments. You’ll receive a masterpiece that’s well-researched, well-structured, and reflective of the latest academic standards. All you have to do is review it and see if it's to your liking! So, why wait any longer? Save yourself time and mental strain—let EduWriters.UK takes on the research burden for you! "
          ]
        },
        {
          title: "Unsure of Formatting and Citation Styles? Leave That to Us!",
          description: [
            "APA, MLA, Chicago, Harvard style…sound familiar? Proper formatting and citations are crucial, but mastering each style is time-consuming and tedious. One mistake in formatting can make your coursework look sloppy, affecting your grades even if your content is solid.",
            "Let us handle the formatting details! With our reliable online coursework help UK support, we ensure your coursework follows the required citation style perfectly. From precise in-text citations to a flawless bibliography, we’ve got it all covered. Just submit your requirements, and we’ll make sure everything aligns with the highest academic standards."
          ]
        },
        {
          title: "Lack Confidence in Your Writing Skills? We’ll Polish Your Work!",
          description: [
            "aybe writing isn’t your strong suit, or perhaps you’re just struggling with the specific tone and style required for academic coursework. Either way, weak writing can undermine even the most well-researched paper. But don’t worry—our writing experts are here to help. ",
            "Through our affordable coursework help service, we bring polished, professional writing to every project, enhancing clarity, style, and overall presentation. Our pros will meticulously craft your work, ensuring it's not just good, but exceptional. So, stress over nothing? By choosing us, you'll gain the confidence to submit high-quality work that will impress your professors and peers!"
          ]
        }
      ];


  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-5">
        {/* first */}
      <div>
        <h2 className='font-bold text-[26px] lg:text-[28px]'>Get High-quality Help with Coursework!
        </h2>
        <p className='text-[14px] lg:text-[16px]'>Our specialised coursework writing help online service empowers you to achieve big, keeping you at the top of your academic game without breaking a sweat.

        </p>
      </div>
            {/* scond */}
      <div>
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-2">
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

export default Academic5
