


// export default async (req, res) => {
//   const { name, email, message } = req.body;
//   console.log(name, email, message);
// 	return res.status(200).json({ error: "" });
// }

import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
   
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'kieran.gaylord20@ethereal.email',
        pass: 'K9MKf2u9JRkJeKf1Fu'
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
      to: "kieran.gaylord20@ethereal.email",
      subject: `Contact form submission from ${name}`,
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