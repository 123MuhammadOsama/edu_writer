import nodemailer from "nodemailer";

export const POST = async (req, res) => {
  try {
    // Parse incoming JSON form data from the request body
    const { name, email ,subject, message } = await req.json();

    // SMTP configuration using Sendinblue (or any other SMTP provider)
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

    // Email content configuration
    const mailOptions = {
      from: fromEmail,
      to: toEmail,
      subject: `CONTACT: Query from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with a success message
    return new Response("Query Sent", { status: 200 });

  } catch (error) {
    console.error(error);
    return new Response("Error sending query", { status: 500 });
  }
};
