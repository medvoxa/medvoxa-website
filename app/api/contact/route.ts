// app/api/contact/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      organization,
      inquiryType,
      message,
    } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Organization:</strong> ${organization || "Not provided"}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>

        <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>

        <br/>
        <p>This email was sent automatically from the MEDVOXA website.</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Your message has been sent!" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
