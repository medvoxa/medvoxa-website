import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    console.log("📩 Contact API Hit");

    const { name, email, organization, phone, message } = await req.json();
    console.log("Payload:", { name, email, organization, phone, message });

    if (!name || !email || !organization || !message) {
      return new Response("Missing fields", { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_SMTP_USER,
        pass: process.env.ZOHO_SMTP_PASS,
      },
    });

    console.log("SMTP Config Loaded ✅");

    const html = `
      <h2>New Demo Request — MEDVOXA</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Organization:</b> ${organization}</p>
      ${phone ? `<p><b>Phone:</b> ${phone}</p>` : ""}
      <p><b>Message:</b><br/>${message.replace(/\n/g, "<br/>")}</p>
    `;

    const result = await transporter.sendMail({
      from: `"MEDVOXA Website" <${process.env.ZOHO_SMTP_USER}>`,
      to: "hello@medvoxa.com",
      subject: "MEDVOXA — New Demo Request",
      replyTo: email,
      html,
    });

    console.log("Email Sent ✅", result);

    return new Response("OK", { status: 200 });
  } catch (err: any) {
    console.error("❌ Contact API Error:", err);
    return new Response("Server error", { status: 500 });
  }
}
