"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function DemoForm() {
  const [status, setStatus] = React.useState<"idle"|"sending"|"ok"|"err">("idle");
  const formRef = React.useRef<HTMLFormElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error();
      setStatus("ok");
      formRef.current?.reset();
    } catch {
      setStatus("err");
    }
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="grid gap-4 max-w-xl mx-auto">
      <div className="grid md:grid-cols-2 gap-4">
        <Input name="name" placeholder="Full Name" required />
        <Input name="email" type="email" placeholder="Work Email" required />
      </div>
      <Input name="organization" placeholder="Organization" required />
      <Input name="phone" placeholder="Phone (optional)" />
      <Textarea name="message" placeholder="What problem are you trying to solve?" rows={4} required />

      <div className="flex items-center justify-between">
        <div className="text-xs text-muted-foreground">We’ll reply within 1 business day.</div>
        <Button type="submit" disabled={status==="sending"} className="rounded-2xl">
          {status==="sending" ? "Sending..." : "Send"}
        </Button>
      </div>

      {status==="ok" && <div className="text-green-600 text-sm text-center">✅ Request received. We'll contact you soon.</div>}
      {status==="err" && <div className="text-red-600 text-sm text-center">❌ Something went wrong. Try again.</div>}
    </form>
  );
}
