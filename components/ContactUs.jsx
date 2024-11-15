'use client'
import Image from "next/image"
import { Phone} from "lucide-react";
import { Mail} from "lucide-react";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { useState , useRef} from 'react';
import { ToastContainer,toast } from "react-toastify";
import { verifyCaptcha } from "@/app/api/recaptcha/server_action";
import ReCAPTCHA from "react-google-recaptcha";

function ContactUs() {


 const [isVerified, setIsverified] = useState(false);
 const recaptchaRef = useRef(null);


  // REcaptcha Function 

  async function handleCaptchaSubmission(token) {
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false));
  }
 


  // Setting up form variables in a FormData
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    city: '',
    query: '',
    email:''
    
});
//HANDLING THE CHANGE IN EACH FIELD

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
      ...formData,
      [name]: value
  });
}

const handleSubmit = async (e) => {
  e.preventDefault(); // Prevents the default form submission behavior (reloading the page)

    // Log the formData to the console before submitting
  console.log("Form Data:", formData);


  const id = toast.loading("Query is being sent ...", { autoClose: false }); // Display loading notification

  try {
    // Send form data to the server via a POST request
    const response = await fetch('/api/contactus', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set request headers to JSON format
      },
      body: JSON.stringify(formData), 
    });


   

    // Check if the response from the server was successful
    if (response.ok) {
   

      // Update the toast notification and clear the form
      toast.update(id, {
        render: "Query sent successfully!",
        type: "success",
        isLoading: false, // Stop loading state in the toast notification
        autoClose: 5000, // Close the notification after 5 seconds
      });

      setFormData({  // Reset the form after successful submission
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        city: '',
        query: ''
      });
    } else {
      throw new Error("Failed to send contact info");
    }
  } catch (error) {
    // If failed, update the toast notification and clear all fields
    toast.update(id, {
      render: "Failed to send Contact Info. Please try again.",
      type: "error",
      isLoading: false,
      autoClose: 5000,
    });

    setFormData({city:"", query: '',phoneNumber:'', lastName:'',firstName:'' }); // Reset the form
  }
};


  return (
    <div className=" ">
      <div className="flex flex-wrap lg:flex-nowrap justify-between items-start p-6 2xl:p-12">
        <ToastContainer
          />  
      



        <form
          onSubmit={handleSubmit}
          className="w-full lg:max-w-2xl bg-white p-8 rounded-xl 2xl:ml-52 border-2 border-primaryBlue mt-52 h-full]"

        >
          <h2 className="text-4xl font-bold mb-4 text-start text-blue-950">Contact Our Expert Edu Writers</h2>
          <div className='w-20 mb-4 border-b-4 border-primaryBlue text-blue-950'></div>
          <p className="text-start mb-4 text-blue-950">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit amet debitis quaerat deleniti natus ea ipsam inventore iusto distinctio eaque.</p>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <input
              className="w-full p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-tertiaryYellow border border-blue text-blue-950"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              className="w-full p-2 border border-bluetext-blue-950 rounded-xl focus:outline-none focus:ring-2 focus:ring-tertiaryYellow"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <input
              className="w-full p-2 border border-bluetext-blue-950 rounded-xl focus:outline-none focus:ring-2 focus:ring-tertiaryYellow"
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <input
              className="w-full p-2 border border-bluetext-blue-950 rounded-xl focus:outline-none focus:ring-2 focus:ring-tertiaryYellow"
              type="tel"
              name="phoneNumber"  // Ensure this matches the state key
              placeholder="Phone Number"
              value={formData.phoneNumber}  // Ensure this is bound to the correct state property
              onChange={handleChange}  // This should now correctly update the `phoneNumber` field in state
              required
            />
          </div>


          <div className="mb-4">
            <input
              className="w-full p-2 border border-bluetext-blue-950 rounded-xl focus:outline-none focus:ring-2 focus:ring-tertiaryYellow"
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <textarea
              className="w-full p-2 border border-bluetext-blue-950 rounded-xl focus:outline-none focus:ring-2 focus:ring-tertiaryYellow"
              name="query"
              placeholder="Tell us your Query"
              value={formData.query}
              onChange={handleChange}
              rows={2}
              required
            ></textarea>
          </div>
          <div className="flex justify-center items-center">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LdlnyIpAAAAAO3jl8iqrfTTTKr8Y3t3vcuqv6p9"
              onChange={handleCaptchaSubmission}
            />
          </div>

          <div>
            <button
              className="w-full px-4 py-2 text-white bg-primaryBlue rounded-xl hover:bg-tertiaryYellow focus:outline-none focus:ring-2 focus:ring-tertiaryYellow"
              type="submit"
            >
              Submit
            </button>
          </div>




        </form>

        <div className="w-full 2xl:w-1/2 2xl:h-[900px] mt-8 lg:mt-28 lg:ml-8 flex-grow lg:max-w-3xl 2xl:mr-28">
          <div className="hidden lg:block mt-24 ">
            <Image
              src='/contact_us_Image.png'
                            alt='our team'
                            width={600}
                            height={600}
                            title='our team'
                            className="rounded-xl border-2 border-primaryBlue"
                        />
                    </div>

                    <div className="flex flex-col  bg-white p-8 rounded-xl shadow-md lg:max-w-[600px] h-[250px] mt-5 border-2 border-primaryBlue text-blue-950 mb-20
                    ">
                        <div className="mb-4 flex items-center">
                            <Phone size={40} className="mr-4 p-2 bg-primaryBlue rounded-full text-blue-950" />
                            <div>
                                Phone <br />
                                <Link rel='nofollow' href="https://wa.me/254797755226" className="hover:underline">+254797755226</Link>
                            </div>
                        </div>
                        <div className="mb-4 flex items-center">
                            <Mail size={40} className="mr-4 p-2 bg-primaryBlue rounded-full text-blue-950" />
                            <div>
                                Email <br />
                                <Link rel='nofollow' href="mailto:scriptershubltd@gmail.com" className="hover:underline">scriptershubltd@gmail.com</Link>
                            </div>
                        </div>
                        <div className="mb-4 flex items-center">
                            <MapPin size={40} className="mr-4 p-2 bg-primaryBlue rounded-full text-blue-950" />
                            <div>
                                Lorem, ipsum. <br />
                                Lorem, ipsum.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default ContactUs;