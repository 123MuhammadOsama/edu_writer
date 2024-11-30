import React from 'react'

const Academic8 = () => {


  const challenges = [
    {
      title: (
        <>
          Spotting <span className="text-red-600">Mistakes</span>, a Challenge? Let’s Catch What You Miss
        </>
      ),
      description: [
        "Have you ever felt so familiar with your writing that spotting mistakes becomes impossible? You read it over and over, and yet glaring errors somehow slip through the cracks. It’s frustrating, isn’t it? Those small typos, misplaced commas, or wrong word choices can ruin the impression you worked so hard to create. Unfortunately, professors notice these things—and deduct points for them too.",
        "That’s why professional proofreading and editing services are your lifesaver. Our experts are trained to catch even the tiniest of errors. With a fresh pair of eyes and years of experience, we’ll clean up your assignments to make them spotless. So, why worry? Let us do the heavy lifting while you focus on the next big task on your to-do list!"
      ]
    },
    {
      title: (
        <>
          Facing <span className="text-red-600">Grammar Troubles</span>? We’re Here to Fix Every Slip
        </>
      ),
      description: [
        "Let’s face it: grammar rules can feel like an ancient puzzle that no one has the time or energy to solve. Subject-verb agreement, sentence structure, and punctuation placement can easily trip you up, no matter how confident you are in your writing. And when your professors are grammar hawks, those small mistakes can cost you big marks.",
        "With the #1 academic proofreading and editing service by your side, you don’t have to struggle anymore. Our skilled team takes your paper and ensures every grammatical hiccup is resolved in absolutely no time. So, why wait any longer? We don’t just edit for correctness; we make sure your paper reads smoothly, professionally, and in a way that makes you look like a pro!"
      ]
    },
    {
      title: (
        <>
          Struggle to Maintain <span className="text-red-600">Consistency</span>? Time to Ditch Awkward Transitions
        </>
      ),
      description: [
        "Consistency in academic writing is a huge challenge. One moment you’re writing in British English, and the next, you’re accidentally throwing in American spellings. Or maybe your formatting is all over the place—headings in different sizes, random fonts, and mismatched citation styles. Keeping everything uniform and polished is exhausting and takes a level of attention to detail you just don’t have time for.",
        "UK’s best proofreading and editing service ensures your paper has a cohesive style, tone, and format. We’ll standardise your document so that every detail aligns perfectly, whether it’s your citations, headings, or even your bullet points. So, why stress over nothing? Trust us to make your work look seamless and professional!"
      ]
    },
    {
      title: (
        <>
          Running Out of <span className="text-red-600">Time and Patience</span>? Relax, We’ve Got This Covered
        </>
      ),
      description: [
        "You’ve been juggling deadlines, assignments, and personal responsibilities, and now editing is just another thing on your already full plate. The clock is ticking, and the panic is real. You’re exhausted, and honestly, who can blame you? The last thing you want to do is spend hours nitpicking your work after putting so much effort into writing it.",
        "Rely on our low-cost proofreading and editing service. We save you precious time and energy by taking over the final touches. No awkward phrasing, no unintentional copying, our team thrives under pressure. While you catch up on sleep or prepare for that next exam, we’ll ensure your assignment is polished and ready to submit—right on time."
      ]
    },
    {
      title: (
        <>
          Lack Confidence in <span className="text-red-600">Writing</span>? Let Experts Bring Out Your Best
        </>
      ),
      description: [
        "The expert proofreading and editing services UK platform is here to save the day! We don’t just fix errors; we elevate your work to its full potential. From refining transitions to improving clarity and structure, we make sure your paper doesn’t just pass but shines. Confidence in your assignment? Consider it done."
      ]
    }
  ];
  


  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-5">
        {/* first */}
      <div>
        <h2 className='font-bold text-[26px] lg:text-[28px]'>Perfect Your Prose with Online Editing and Proofreading Service!
        </h2>
        <p className='text-[14px] lg:text-[16px]'>Let highly qualified proofreading and editing experts work their magic! From turning clunky sentences into fluid gold to making your ideas sing with clarity, we’ll transform your work into a masterpiece:


        </p>
      </div>
            {/* scond */}
      <div>
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-2">
        {challenges.map((challenge, index) => (
          <div key={index} className="bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {challenge.title}:
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

export default Academic8
