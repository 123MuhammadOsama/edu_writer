import Image from "next/image"
import Writers from "@/components/Writers"
import CTA1 from "./CTA1";


function AboutUs() {
    return (
        <div>
            <div className="lg:mx-0
             ">
      <>

      {/* Section 1  */}
        <section className="mt-20 flex lg:flex-row flex-col lg:justify-start lg:items-center justify-center items-center xl:px-36 px-5 w-full" >
        
          <div className="xl:max-w-3xl md:max-w-3xl lg:max-w-lg">
            <h1 className="md:text-[40px] font-bold text-textColor text-3xl pb-2 ">From   
            < span className="text-red-500"> Overwhelmed </span>to  <span className="text-primaryBlue">On-Top-Not, </span> a Dream, Just What We Do!</h1>
            <p className="md:text-[16px] text-textColor text-[14px]">From messy drafts to polished perfection, we craft your path to non-stop excellence with a magical flair. Let’s turn your brilliant words into an A+ masterpiece, one assignment at a time. No more sleepless nights—just results that put you back on top!
            </p>
            <div className="mt-10">
              <Image
                src="/Reviews.png"
                width="600"
                height="200"
                alt="Trust Pilot"
              />
            </div>
          

          </div>

          <div className="max-w-full flex-1 p-4 lg:mx-auto 2xl:max-w-xl 2xl:ml-10 xl:max-w-md bg-transparent font-serif   lg:w-fit  mb-10 ">
            {/* <p className="text-center underline underline-offset-8 text-transparent bg-clip-text bg-gradient-to-r to-blue from-darkblue text-lg font-semibold">Your Story is One <span className="decoration decoration-dashed decoration-slate-200"> Click Away</span> From Being Told</p> */}
           
            <Image
              src="/Aboutus1.png"
              className="lg:h-[400px] lg:w-[500px] 2xl:h-[400px] 2xl:w-[600px] xl:h-[200px] xl:w-[700px] "
              height="600"
              width="600"
              />

          </div>


        </section>

        {/* Section2 */}

        <section className="mt-09 flex lg:flex-row flex-col lg:justify-start lg:items-center justify-center items-center xl:px-36 px-5  w-full" >
        
      

          <div className="max-w-full flex-1 p-4 lg:mx-auto 2xl:max-w-xl 2xl:ml-10 xl:max-w-md bg-transparent font-serif   lg:w-fit md:w-[700px] md:mx-auto  mb-10 ">
            {/* <p className="text-center underline underline-offset-8 text-transparent bg-clip-text bg-gradient-to-r to-blue from-darkblue text-lg font-semibold">Your Story is One <span className="decoration decoration-dashed decoration-slate-200"> Click Away</span> From Being Told</p> */}
           
            <Image
              src="/Aboutus.png"
              className=" md:flex md:justify-center md:items-center md:mx-auto lg:h-[400px] lg:w-[600px] 2xl:h-[400px] 2xl:w-[600px] xl:h-[310px] xl:w-[540px] "
              height="400"
              width="500"
              />

          </div>
          <div className="xl:max-w-3xl md:max-w-3xl lg:max-w-xl  ">
            <h2 className="text-4xl font-bold "> <span className="text-primaryBlue ">
            Academic MVPs  </span> You Didn’t Know You Needed
            </h2>
          
          <p className="md:text-[16px] text-textColor pb-2 text-[14px]">Have you ever found yourself buried under a mountain of homework, wondering if you’ll ever see the light of day again? You’re not alone! Whether you're stuck with a never-ending research paper or desperately asking folks “Write my essay for me?', every student knows the feeling of being overwhelmed. But what if we told you there’s a hidden squad of academic MVPs up and ready to swoop in and save the day? At our core, we’re not just about getting your work done; we’re about transforming your entire academic experience. With our talented team of writers in your corner, you’ll go from feeling the pressure to enjoying the ride. No more survival mode—it's time to rise and conquer your studies!

          </p>
          <p className="md:text-[16px] text-textColor pb-2 text-[14px]">
          Our crew of experts isn’t just a bunch of writers. They’re like the all-star athletes of the academic world. Each one brings their unique skills and knowledge to the table, ensuring you receive top-notch assistance tailored to your specific needs. Whether you're tackling a tricky dissertation, a challenging case study, or even seeking the best essay writing service, we’ve got your back. So, why stay on the sidelines? Let us help you score those A+ grades and make your academic journey a slam dunk! 
 

          </p>
          <p className="md:text-[16px] text-textColor pb-2 text-[14px]">
          Prepare to turn those headaches into high-fives with every assignment—bringing you closer to that well-deserved A+!


          </p>
       


            </div>


          </section>
          {/* Writers */}
          <Writers />
          <section className="flex md:flex-row md:gap-1 flex-col ">
            <div className="px-5 lg:w-1/2 ">
              <h2 className=" text-3xl"> <span className="text-primaryBlue font-bold "> Mission Possible: </span> Helping You <span className="text-secondaryRed">Crush Your Goals </span> Since Day One!
              </h2>
              <p className="md:text-[16px] text-[14px]">Student life can feel like one giant balancing act with no time to breathe. But at Edu Writers UK, we’ve got one mission: making sure you don’t just make it through, but actually own it! We’re here to give you the academic edge you need to hit those goals without breaking a sweat (or pulling an all-nighter… again).

              </p>
              <p className="md:text-[16px] text-[14px]">
                <span className="font-bold"> Everything is about YOU—your goals, your schedule , your success. </span> We don’t just churn out assignments; we listen, understand, and tailor our support to fit your unique vision. Whether you're aiming to ace your next assignment, Googling for online essay writing help, or simply make it through the semester with your sanity intact, we’re here to make sure your academic experience is personalised and pressure-free. After all, it’s not just about getting the grades—it’s about empowering you to shine every step of the way. Why? Because you deserve to be at the centre of your success story!

              </p>
             

              <p className="text-3xl text-primaryBlue font-bold">This Right Here? It's the Plot Twist Every Student Dreams Of!
              </p>
              <p className="md:text-[16px] text-[14px]" > Edu Writers UK is flipping the script on what it means to be a student. Think of us as your ultimate sidekick—ready to transform those tough challenges into next-level wins. Need to upgrade your essay? We’ve got the secret ingredient. Looking to polish that boring research project? Consider it officially done! We’re here to sprinkle a little magic on your academic journey and ensure you’re not just another face in the crowd but a standout star!
              </p>
              <p className="md:text-[16px] text-[14px]">So why stick to the same old routine when you’ve got us? Let us handle the tough stuff while you sit back and relax. Whether it’s a single paper or your whole degree or just needing the essay writing service experience, we’ve got the expertise, humour, and heart to carry you across the finish line—no sweat required. Because what’s in our DNA? Excellence, Trust, and You!
              </p>

              
              <ul>
                
                
                </ul>
            </div>



            <div className="px-5 lg:w-1/2 ">
              
            
              <ul>
              <h2 className=" text-3xl text-primaryBlue font-bold">What’s Our Edge? Let’s Break It Down!</h2>
              <p className="md:text-[16px] text-[14px]">Let’s be real—life as a student can feel like a never-ending juggling act: deadlines, complex assignments, and trying to fit in some actual life. Sounds strikingly familiar, right? That’s exactly where WE come in. We envision a world where students like you feel fully supported and confident in their future pursuits. Forget sleepless nights or last-minute panic attacks! Because luckily for you, we don’t just write papers but rewrite the rulebook on academic help.

              </p>
              <p className="font-bold md:text-[20px] text-[16px]"> Here’s Why We’re Anything but Ordinary:
              </p>
              <li className="md:text-[16px] text-[14px] ">
                 <span className="text-secondaryRed font-bold ">Integrity: </span>  We promise originality and authenticity in every piece of work. That’s right—real humans with real expertise crafting original content for you.  No shortcuts, no compromises. Transparency? We’re all about it.
                </li>
                <li className="md:text-[16px] text-[14px] ">
                 <span className="text-secondaryRed font-bold">Quality: </span>  Excellence is our standard! No matter how tight the deadline or how tricky the subject, we ensure your work is always on point. Trust us; you’ll get results that impress!

                </li>
                <li className="md:text-[16px] text-[14px] ">
                 <span className="text-secondaryRed font-bold ">Accessibility: </span>  Top quality doesn’t have to mean top dollar. Academic support should be within reach for every student, regardless of budget. Want premium help, minus the high cost? Yes, please!
                </li>
                <li className="md:text-[16px] text-[14px]">
                  <span className="text-secondaryRed font-bold">Flexibility: </span>
                   Stuck on an idea at 2 a.m.? No problem! We adapt to your needs, timeline, and style because your academic journey is unique. You call the shots; we’re here to support you!

                </li>
                <li className="md:text-[16px] text-[14px]">
                <span className="text-secondaryRed font-bold">Collaboration:  </span>  
                  We believe in a hands-on, interactive approach that keeps you involved and in control every step of the way. Your input matters, and we work together to bring your vision to life!
                </li>
                <li className="md:text-[16px] text-[14px]">
                  <span className="text-secondaryRed font-bold">Super-Fast Turnaround:  </span>
                  Procrastination happens to the best of us. That’s why we offer lightning-fast delivery without cutting corners. Whether you need a paper tomorrow or an essay next week, we’re here to make it happen—without sacrificing quality.
                </li>
                <li>

                </li>
              </ul>
             
            </div>
          </section>
          {/* SECTION4 */}
          <CTA1 
          heading="Ready to Ace Your Courses?"
          span=" Transform Your Study Game"
          heading2="with the Ultimate Academic Assist!"
          paragraph="Who Needs Superheroes When You’ve Got Us? Move Past the Bare Minimum and Step into a Whole New Level of Academic Awesomeness. Life Gets Busy, Assignments Get Tough and ‘Good Enough’ Just Don’t Cut It!"
          
          />

        </>
      </div>
    </div>
  );
}

export default AboutUs;