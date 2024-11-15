"use client";
import SelectField from "@/components/ui/SelectField";
import { useState, useMemo,useEffect,useRef } from "react";
import pricingData from "@/constants/OrderValues.json";
import PhoneInput from "react-phone-number-input";
import countryList from "react-select-country-list";
import "react-phone-number-input/style.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { verifyCaptcha } from "@/app/api/recaptcha/server_action";
import ReCAPTCHA from "react-google-recaptcha";

const OrderNow = () => {
  const [academicLevel, setAcademicLevel] = useState("College");
  const [pages, setPages] = useState(1);
  const [deadline, setDeadline] = useState("30days");
  const [poster, setPoster] = useState(0);
  const [ppt, setPpt] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [formData, setFormData] = useState({
    academicLevel: "",
    docType: "",
    topic: "",
    instructions: "",
    ppt: "",
    posters: "",
    pages: "",
    deadline: "",
    subject: "",
    citationFormat: "",
    name: "",
    email: "",
    phoneNumber: "",
    country: "",
    proposedPrice: ""
  });

  const paperTypeOptions = [
    { value: "Assignment", label: "Assignment" },
    { value: "Report", label: "Report" },
    { value: "Coursework", label: "Coursework" },
    { value: "Essay", label: "Essay" },
    { value: "Case Study", label: "Case Study" },
    { value: "Dissertation", label: "Dissertation" },
    { value: "Research Paper", label: "Research Paper" },
    { value: "Term Paper", label: "Term Paper" },
    { value: "PPT", label: "PPT" },
    { value: "Homework", label: "Homework" },

  ];
  const citationFormatOptions = [
    { value: "MLA", label: "MLA" },
    { value: "APA", label: "APA" },
    { value: "Harvard", label: "Harvard" },
    { value: "OSCOLA", label: "OSCOLA" },
    { value: "Chicago", label: "Chicago" },
    { value: "IEEE", label: "IEEE" },
    { value: "Other", label: "Other" },
  ];
  useEffect(() => {
    calculateTotalPrice();
  }, [academicLevel, pages, deadline, poster, ppt]);

  useEffect(() => {
    // Update the totalPrice in formData whenever it changes
    setFormData((prevFormData) => ({
      ...prevFormData,
      proposedPrice: `£ ${totalPrice}`
    }));
  }, [totalPrice]);
  const calculateTotalPrice = () => {
    const levelPrice = pricingData.academicLevels[academicLevel];
    const pagePrice = pages * pricingData.pages.basePrice;
    const deadlineData = pricingData.deadlines.find(
      (d) => d.value === deadline
    );
    const deadlineMultiplier = deadlineData ? deadlineData.multiplier : 1.0;
    const posterPrice = poster * pricingData.poster.basePrice;
    const pptPrice = ppt * pricingData.ppt.basePrice;

    const total =
      (levelPrice + pagePrice + posterPrice + pptPrice) * deadlineMultiplier;
    setTotalPrice(total.toFixed(2));
  };

  const pageOptions = Array.from({ length: 200 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1} page${i > 0 ? "s" : ""} / ${250 * (i + 1)} words`,
  }));
  const sourceOptions = Array.from({ length: 100 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1} sources`,
  }));
  const countryoptions = useMemo(() => countryList().getData(), []);

  const handleInputChange = (name, value) => {
    setFormData(
      {
        ...formData,
        [name]: value,
      },
      console.log(formData)
    );
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const id = toast.loading("Sending Request ...", { autoClose: true });
    try {
    
      const response = await fetch("/api/ordernow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.text();
        toast.update(id, {
          render: responseData,
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
        setFormData({
          academicLevel: "",
          docType: "",
          topic: "",
          instructions: "",
          ppt: "",
          posters: "",
          pages: "",
          deadline: "",
          subject: "",
          citationFormat: "",
          name: "",
          email: "",
          phoneNumber: "",
          country: "",
        });
      } else {
        const responseData = await response.json();
        toast.update(id, {
          render: responseData,
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const recaptchaRef = useRef(null);
  const [isVerified, setIsverified] = useState(false);

  async function handleCaptchaSubmission(token) {
    // Server function to verify captcha
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false));
  }

  return (
    <div className="my-32 flex flex-col justify-center  ">
      <h1 className="text-6xl text-blue-950 font-bold text-center ">
        Order Now
      </h1>
      <div className="flex flex-col xl:flex-row xl:px-12 2xl:px-16 gap-y-10 items-center xl:items-start justify-center">



        {/* form */}
        <form 
        onSubmit={onSubmit}
        className="flex flex-col xl:flex-row gap-y-12 gap-x-10 justify-between items-center xl:pr-10 2xl:pr-20 md:pl-0 pl-10 mt-10">
          <div
            className="p-5 bg-primaryBlue/10  rounded-xl w-[350px] md:w-[550px] xl:w-[800px] 2xl:w-[1000px] gap-y-4 flex flex-col items-center"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
            }}
          >
            <span className="text-blue-950 text-xl tracking-tight py-4">
              Your Requirements
            </span>

            <div className="flex flex-col xl:flex-row gap-5 justify-start xl:justify-center items-start w-full">
              <span className=" ">Academic Level</span>
              <div className="flex-wrap flex gap-x-4 gap-y-4">
                {Object.keys(pricingData.academicLevels).map((level) => (
                  <div
                    key={level}
                    style={{ display: "inline-block", margin: "5px" }}
                  >
                    <input
                      type="radio"
                      id={level}
                      name="academicLevel"
                      value={level}
                      checked={academicLevel === level}
                      onChange={(e) => {
                        {
                          setAcademicLevel(e.target.value);
                          handleInputChange("academicLevel", e.target.value);
                        }
                      }}
                      style={{ display: "none" }}
                    />
                    <label
                      htmlFor={level}
                      className={`select-none p-2 cursor-pointer rounded-r-xl rounded-tl-xl border border-Mahroon transition-all ${
                        academicLevel === level
                          ? "bg-Mahroon text-white"
                          : "bg-white text-blue-950"
                      }`}
                      style={{
                        padding: "10px 20px",
                        cursor: "pointer",
                        borderRadius: "5px",
                        border: "1px solid #630009",
                        backgroundColor:
                          academicLevel === level ? "#630009" : "#fff",
                        color: academicLevel === level ? "#fff" : "#630009",
                        transition: "background-color 0.3s, color 0.3s",
                      }}
                    >
                      {level}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="gap-x-5 grid grid-cols-1 xl:grid-cols-6 gap-y-5 items-center w-full text-blue-950">
              <span>Document Type</span>
              <SelectField
                placeholder={"Select An Option"}
                options={paperTypeOptions}
                onChange={(value) => handleInputChange("docType", value.value)}
              />
              <span>Subject Area</span>
              <SelectField
                placeholder={"Select An Option"}
                className="bg-red-50"
                options={[
                  { value: "Accounting", label: "Accounting" },
                  { value: "Agriculture", label: "Agriculture" },
                  { value: "Algebra", label: "Algebra" },
                  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                  { value: "Biology", label: "Biology" },
                  { value: "Business Plan", label: "Business Plan" },
                  { value: "Business development", label: "Business development" },
                  { value: "Business intelligence", label: "Business intelligence" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Cost Accounting", label: "Cost Accounting" },
                  { value: "Criminal Law", label: "Criminal Law" },
                  { value: "Economics", label: "Economics" },
                  { value: "Engineering", label: "Engineering" },
                  { value: "English", label: "English" },
                  { value: "Entrepreneurship", label: "Entrepreneurship" },
                  { value: "Finance", label: "Finance" },
                  { value: "Financial Accounting", label: "Financial Accounting" },
                  { value: "Geography", label: "Geography" },
                  { value: "Healthcare", label: "Healthcare" },
                  { value: "Law", label: "Law" },
                  { value: "Management", label: "Management" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Science", label: "Science" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Telecommunication", label: "Telecommunication" },
                 
                ]}
                onChange={(value) => handleInputChange("subject", value.value)}
              />

              <span>Reference Style</span>
              <SelectField
                placeholder={"Select An Option"}
                options={citationFormatOptions}
                onChange={(value) =>
                  handleInputChange("citationFormat", value.value)
                }
              />
              <span>Sources</span>
              <SelectField
                placeholder={"Select An Option"}
                options={sourceOptions}
              />

              <span>Topic</span>
              <textarea


                className="xl:col-span-5 h-[45px] flex justify-start items-start p-2 rounded-xl border border-primary resize-none outline-none"
                placeholder="Leave Empty To Let Writer Decide"
                type="text"
                onChange={(e) => handleInputChange("topic", e.target.value)}
              ></textarea>
              <span>Other Instructions</span>
              <textarea
                className="xl:col-span-5 h-[85px] flex justify-start items-start p-2 rounded-xl border border-primary resize-none outline-none"
                placeholder="Other instructions for the assignment"
                type="text"
                onChange={(e) =>
                  handleInputChange("instructions", e.target.value)
                }
              ></textarea>

              <span>Pages</span>
              <SelectField
                placeholder={"Select An Option"}
                options={pageOptions}
                value={pages}
                onChange={(selectedOption) => {
                  setPages(parseInt(selectedOption.value));
                  handleInputChange("pages", selectedOption.value);
                }}
              />
              <span>Deadline</span>
              <SelectField
                placeholder={"Select An Option"}
                options={pricingData.deadlines.map((d) => ({
                  value: d.value,
                  label: d.label,
                }))}
                value={deadline}
                onChange={(selectedOption) => {
                  setDeadline(selectedOption.value);
                  handleInputChange("deadline", selectedOption.value);
                }}
              />
              <span>Poster</span>
              <SelectField
                placeholder={"Select An Option"}
                options={pricingData.poster.options.map((option) => ({
                  value: option,
                  label: option.toString(),
                }))}
                value={poster}
                onChange={(selectedOption) => {
                  setPoster(parseInt(selectedOption.value));
                  handleInputChange("posters", selectedOption.value);
                }}
              />

              <span>PPT Slides</span>
              <SelectField
                placeholder={"Select An Option"}
                options={pricingData.ppt.options.map((option) => ({
                  value: option,
                  label: option.toString(),
                }))}
                value={ppt}
                onChange={(selectedOption) => {
                  setPpt(parseInt(selectedOption.value));
                  handleInputChange("ppt", selectedOption.value);
                }}
              />
            </div>
            <span className="text-blue-950 text-xl tracking-tight py-4 ">
              Contact Information
            </span>
            <div className="gap-x-5 grid grid-cols-1 xl:grid-cols-6 gap-y-5 items-center w-full text-blue-950">
              <span>Name</span>
              <input
              required
                type="text"
                placeholder="John Doe"
                className="xl:col-span-2 h-[45px] p-2 outline-none resize-none border-primary border rounded-xl"
                onChange={(e) => handleInputChange("name", e.target.value)}
              ></input>
              <span>Email</span>
              <input
              required

                type="email"
                placeholder="someone@xyz.com"
                className="xl:col-span-2 h-[45px] p-2 outline-none resize-none border-primary border rounded-xl"
                onChange={(e) => handleInputChange("email", e.target.value)}
              ></input>
              <span>Country</span>
              <SelectField
                placeholder={"Country"}
                options={countryoptions}
                onChange={(selectedOption) => {
                  handleInputChange("country", selectedOption.value);
                }}
              />

              <span>Phone Number</span>

              <PhoneInput
              required

                international
                defaultCountry="RU"
                onChange={(selectedOption) => {
                  handleInputChange("phoneNumber", selectedOption);
                }}
                className="xl:col-span-2 h-[45px] p-2 outline-none resize-none border-primary bg-white  border rounded-xl"
              />
              {/* <input
                type="text"
                className="xl:col-span-2 h-[45px] p-2 outline-none resize-none border-primary border rounded-xl"
              ></input> */}
              {/* <div className="flex gap-x-4 justify-center items-center xl:col-span-6 w-full border-secondary py-5 my-5 border border-dashed">
                <HardDriveUpload height={40} width={40} stroke="#042E58" />
                <span className="text-primary text-xl">Upload Files</span>
              </div> */}

            </div>
            <span className="text-primary col-span-6">Note: This price is just an estimation based on the details provided. Real price may be either less or more.</span>

          </div>
          <div
            className="p-5 rounded-xl h-[600px] w-[300px] xl:w-[400px] bg-gradient-to-t from-[#DEF2FF]  to-[#FFE0E3] flex flex-col gap-y-3 items-center"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
            }}
          >
            <span className="text-blue-950 font-bold text-3xl tracking-wider">
              Order Summary
            </span>
            <div className="w-full h-[1px] bg-neutral-400"></div>
          <div className="grid grid-cols-2 text-sm gap-y-3  text-blue-950 w-full">
            <span>Academic Level</span>
            <span className="text-right">{academicLevel}</span>
            <span>Type of Paper</span>
            <span className="text-right">Type of Paper</span>

            <span>Subject</span>
            <span className="text-right">Subject</span>

            <span>Pages</span>
            <span className="text-right">{pages}</span>
            <span>PPT Slides</span>
            <span className="text-right">{ppt}</span>
            <span>Posters</span>
            <span className="text-right">{poster}</span>
            <span>Deadline</span>
            <span className="text-right">{deadline}</span>

            <span>Reference Style</span>
            <span className="text-right">Reference Style</span>

            <span className="text-3xl mt-4 font-bold">TOTAL</span>
            <span className="text-right text-3xl mt-4 font-bold">
              £{totalPrice}
            </span>
          </div>
        <ReCAPTCHA
              sitekey="6LdlnyIpAAAAAO3jl8iqrfTTTKr8Y3t3vcuqv6p9"
              ref={recaptchaRef}
              onChange={handleCaptchaSubmission}
              className="z-10"
            /> 
            <p className="text-blue-950 text-xs z-10">
              Please verify the Captcha to Submit
            </p>
          <button disabled={!isVerified} type="submit" 
          className={`xl:col-span-4 
            ${
              isVerified
                ? "bg-[#FFCF56] text-black "
                : "bg-gray-600 text-gray-400"
            }
          flex justify-center  rounded-xl w-full p-2`}>
            Checkout
          </button>
        </div>
      
        </form>

      
      </div>
      <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          rtl={false}
          theme="dark"
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </div>
  );
};

export default OrderNow;
