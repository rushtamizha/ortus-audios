"use server";

import nodemailer from "nodemailer";

export async function sendLead(formData) {
  const name = formData.get("name");
  const phone = formData.get("phone");
  const requirement = formData.get("requirement");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail
      pass: process.env.GMAIL_APP_PASSWORD, // Your App Password
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER, // Sending to yourself
    subject: `New Lead: ${name} (Ortus Audios)`,
    html: `
      <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
        <h2 style="color: #8B0000;">New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Requirement:</strong> ${requirement}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("SMTP Error:", error);
    return { success: false };
  }
}