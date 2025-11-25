import { NextResponse } from "next/server";
import crypto from "crypto";

// Simple in-memory rate limit (per IP)
const rateLimit = new Map<string, number>();

export async function POST(req: Request) {
  try {
    // -------- IP Detection ----------
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip") ||
      "unknown";

    // -------- Rate Limit ----------
    const now = Date.now();
    const last = rateLimit.get(ip);
    if (last && now - last < 5000) {
      return NextResponse.json({ status: "error", message: "Rate limit" });
    }
    rateLimit.set(ip, now);

    // -------- Form Data ----------
    const formData = await req.formData();

    // Honeypot
    if (formData.get("extra_field")) {
      return NextResponse.json({ status: "bot" });
    }

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // -------- Fingerprint ----------
    const fingerprintRaw = formData.get("fingerprint") as string;
    const fingerprintHash = crypto
      .createHash("sha256")
      .update(fingerprintRaw + ip)
      .digest("hex");

    // -------- Log (store or email later) ----------
    console.log("CONTACT SUBMISSION LOG", {
      ip,
      fingerprintHash,
      name,
      email,
      subject,
      timestamp: new Date().toISOString(),
    });

    // You can add email sending or DB storing here

    return NextResponse.json({ status: "success" });
  } catch (err) {
    console.error("Contact Error:", err);
    return NextResponse.json({ status: "error" });
  }
}
