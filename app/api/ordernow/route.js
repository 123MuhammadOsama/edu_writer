import nodemailer from "nodemailer";

export const POST = async (req, res) => {
  try {
    const {
      name,
      email,
      country,
      phoneNumber,
      docType,  
      subject,
      citationFormat,
      sources,
      topic,
      instructions,
      pages,
      deadline,
      poster,
      ppt,
      academicLevel,
      proposedPrice, 
    } = await req.json();

    const toEmail = process.env.SMTPEMAIL; // Replace with actual recipient email
    const fromEmail = process.env.FROMEMAIL; // Replace with sender email
    const password = process.env.SMTPPASSWORD; // Replace with SMTP password

    const transporter = nodemailer.createTransport({
      host: "smtp-relay.sendinblue.com", // Host for Sendinblue SMTP
      port: 587,
      secure: false, // Use TLS, not SSL
      auth: {
        user: fromEmail, // SMTP sender's email address
        pass: password,  // SMTP password
      },
    });

    const mailOptions = {
      from: fromEmail,
      to: toEmail,
      subject: `ORDER NOW: Query from ${name}`,
      text: `
        Order Details:
        Name: ${name}
        Email: ${email}
        Country: ${country}
        PhoneNumber: ${phoneNumber}
        Academic Level: ${academicLevel}
        Document Type: ${docType}
        Subject: ${subject}
        Citation Format: ${citationFormat}
        Sources: ${sources}
        Topic: ${topic}
        Other Instructions: ${instructions}
        Pages Required: ${pages}
        DEADLINE: ${deadline}
        Poster: ${poster}
        PPT Slides: ${ppt}
        Proposed Price: £${proposedPrice}
      `,
    };

    await transporter.sendMail(mailOptions);
    return new Response("Order placed successfully", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error sending order", { status: 500 });
  }
};
