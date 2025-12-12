import { NextResponse } from "next/server";
import crypto from "crypto";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory rate limit per IP
const rateLimit = new Map<string, number>();

export async function POST(req: Request) {
  try {
    // Extract IP
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip") ||
      "unknown";

    // Rate limit (5 seconds)
    const now = Date.now();
    const last = rateLimit.get(ip);
    if (last && now - last < 5000) {
      return NextResponse.json(
        { status: "error", message: "Rate limit hit" },
        { status: 429 }
      );
    }
    rateLimit.set(ip, now);

    // Parse form data
    const formData = await req.formData();

    // Honeypot check
    if (formData.get("extra_field")) {
      return NextResponse.json({ status: "bot" });
    }

    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const subject = String(formData.get("subject") || "");
    const message = String(formData.get("message") || "");
    const fingerprintRaw = String(formData.get("fingerprint") || "");

    // Fingerprint hashing
    const fingerprintHash = crypto
      .createHash("sha256")
      .update(fingerprintRaw + ip)
      .digest("hex");

    // Log for backend review
    console.log("CONTACT SUBMISSION", {
      ip,
      name,
      email,
      subject,
      fingerprintHash,
      timestamp: new Date().toISOString(),
    });

    // SECTION: Email delivery via Resend
    const sendResult = await resend.emails.send({
      from: "MEDVOXA Contact <no-reply@medvoxa.com>",
      to: ["hello@medvoxa.com"], // Always deliver to Zoho
      subject: `New Inquiry from ${name}`,
      reply_to: email,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><strong>Fingerprint:</strong> ${fingerprintHash}</p>
        <p><strong>IP Address:</strong> ${ip}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    console.log("EMAIL SENT", sendResult);

    return NextResponse.json({ status: "success" });
  } catch (err) {
    console.error("CONTACT FORM ERROR:", err);
    return NextResponse.json(
      { status: "error", message: "Server error" },
      { status: 500 }
    );
  }
}
