import nodemailer from "nodemailer";

export default async function handler(req, res) {

    if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

const { name, email, phone} = req.body;


if (!name || !email || !phone) {
  return res.status(400).json({ message: "Missing required fields" });
}


  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"OPTS interior " <${process.env.EMAIL_USER}> `,
      to: "prashant81046@gmail.com",
      replyTo: email,
      subject: "Form Submitted from website ",
      html: `
        <h2>New Application</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false });
  }
}
