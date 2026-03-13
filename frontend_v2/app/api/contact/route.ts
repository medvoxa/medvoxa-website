import { NextResponse } from "next/server";
import crypto from "crypto";
import { Resend } from "resend";

// In-memory rate limit: 1 submission per IP per 10 seconds
const rateMap = new Map<string, number>();

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Extract IP
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    // Rate limit
    const now = Date.now();
    const last = rateMap.get(ip);
    if (last && now - last < 10_000) {
      return NextResponse.json(
        { status: "error", message: "Please wait before submitting again." },
        { status: 429 }
      );
    }
    rateMap.set(ip, now);

    const data = await req.formData();

    // Honeypot check
    if (data.get("extra_field")) {
      return NextResponse.json({ status: "bot" });
    }

    const name        = String(data.get("name")        || "").trim().slice(0, 120);
    const email       = String(data.get("email")       || "").trim().slice(0, 200);
    const practice    = String(data.get("practice")    || "").trim().slice(0, 200);
    const subject     = String(data.get("subject")     || "").trim().slice(0, 200);
    const message     = String(data.get("message")     || "").trim().slice(0, 5000);
    const fpRaw       = String(data.get("fingerprint") || "");

    // Validate
    if (!name || !email || !message) {
      return NextResponse.json({ status: "error", message: "Missing required fields." }, { status: 400 });
    }
    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRx.test(email)) {
      return NextResponse.json({ status: "error", message: "Invalid email." }, { status: 400 });
    }

    // Fingerprint hash for logging
    const fpHash = crypto.createHash("sha256").update(fpRaw + ip).digest("hex").slice(0, 16);

    const timestamp = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });

    await resend.emails.send({
      from: "MEDVOXA Contact Form <no-reply@medvoxa.com>",
      to:   [process.env.CONTACT_EMAIL || "hello@medvoxa.com"],
      replyTo: email,
      subject: `[MEDVOXA Contact] ${subject || "New Inquiry"} — ${name}`,
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><style>
  body { font-family: Georgia, serif; color: #1a1714; background: #faf8f5; margin: 0; padding: 0; }
  .wrap { max-width: 580px; margin: 32px auto; background: #fff; border: 1px solid #e8e4dc; border-radius: 12px; overflow: hidden; }
  .header { background: #1a1714; padding: 28px 32px; }
  .logo { color: #fff; font-size: 20px; font-weight: 700; letter-spacing: 1px; }
  .logo em { color: #c8422a; font-style: italic; }
  .body { padding: 32px; }
  .field { margin-bottom: 20px; }
  .label { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #9e9b97; margin-bottom: 4px; }
  .value { font-size: 15px; color: #1a1714; line-height: 1.6; }
  .message-box { background: #faf8f5; border: 1px solid #e8e4dc; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.75; color: #3d3a36; }
  .footer { background: #f3f0ea; border-top: 1px solid #e8e4dc; padding: 16px 32px; font-size: 12px; color: #9e9b97; }
  hr { border: none; border-top: 1px solid #e8e4dc; margin: 24px 0; }
</style></head>
<body>
<div class="wrap">
  <div class="header">
    <div class="logo">MED<em>VOXA</em></div>
    <div style="color:rgba(255,255,255,0.4);font-size:12px;margin-top:4px;font-family:Arial,sans-serif;">New Contact Form Submission</div>
  </div>
  <div class="body">
    <div class="field"><div class="label">Name</div><div class="value">${name}</div></div>
    <div class="field"><div class="label">Email</div><div class="value"><a href="mailto:${email}" style="color:#c8422a;">${email}</a></div></div>
    ${practice ? `<div class="field"><div class="label">Practice / Organization</div><div class="value">${practice}</div></div>` : ""}
    <div class="field"><div class="label">Inquiry Type</div><div class="value">${subject || "Not specified"}</div></div>
    <hr />
    <div class="field">
      <div class="label">Message</div>
      <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
    </div>
  </div>
  <div class="footer">
    Submitted: ${timestamp} ET · IP: ${ip} · FP: ${fpHash}
  </div>
</div>
</body>
</html>
      `,
    });

    return NextResponse.json({ status: "success" });

  } catch (err) {
    console.error("[MEDVOXA contact]", err);
    return NextResponse.json({ status: "error", message: "Server error." }, { status: 500 });
  }
}
