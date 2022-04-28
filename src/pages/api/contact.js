
import nodemailer from "nodemailer";

export default async (req, res) => {
  const { firstname, lastname, company, email, message } = req.body;
  const transporter = nodemailer.createTransport({
   
    host: 'mail.immunitas.uk',
    port: 587,
    auth: {
        user: 'contact@immunitas.uk',
        pass: 'Lesmurdie12%%'
    }


  });

  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });




  try {
    await transporter.sendMail({
      from: email,
      to: "contact@immunitas.uk",
      subject: `Contact form submission from ${firstname} ${lastname} ${company} `,
      html: `<p>You have a contact form submission</p><br>
        <p><strong>Email: </strong> ${email}</p><br>
        <p><strong>Message: </strong> ${message}</p><br>
      `
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};