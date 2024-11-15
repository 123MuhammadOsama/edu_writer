"use server";
import axios from "axios"

// export async function verifyCaptcha(token) {
//   const response = await fetch(
//     `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
//     {
//       method: "POST",
//     }
//   );
  
//   const data = await response.json(); // Manually parse the JSON response
  
//   if (data.success) {
//     return "success!";
//   } else {
//     throw new Error("Failed Captcha");
//   }
// }



export async function verifyCaptcha(token) {
  const res = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
  )
  if (res.data.success) {
    return "success!"
  } else {
    throw new Error("Failed Captcha")
  }
}