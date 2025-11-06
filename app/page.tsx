'use client';
import * as React from "react";
import DemoForm from "./components/demo-form";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, TrendingUp, Shield, Zap, LineChart, Rocket, ArrowRight } from "lucide-react";

const progressData = [
  { stage: "Phase 1", metric: 68 },
  { stage: "Phase 2", metric: 82 },
  { stage: "Phase 3", metric: 90 },
  { stage: "Now", metric: 93 },
];

const kpiData = [
  { label: "Clean Claim Rate", value: "98.6%" },
  { label: "Denial Reduction", value: "-37%" },
  { label: "Days in A/R", value: "↓ 8.4 days" },
];

const weeklyRCM = [
  { week: "W1", paid: 420, denied: 110 },
  { week: "W2", paid: 510, denied: 90 },
  { week: "W3", paid: 560, denied: 82 },
  { week: "W4", paid: 590, denied: 74 },
  { week: "W5", paid: 640, denied: 61 },
];

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
    <CheckCircle2 className="h-4 w-4" /> {children}
  </span>
);

export default function MEDVOXALanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">

      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center gap-2 font-semibold text-xl">
              <span className="h-8 w-8 rounded-2xl bg-slate-900 text-white grid place-items-center">M</span>
              MEDVOXA
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#vision">Vision</a>
              <a href="#progress">Progress</a>
              <a href="#value">Value</a>
              <a href="#how">How</a>
              <a href="#security">Security</a>
              <a href="#contact">Contact</a>
            </nav>
            <Button 
              className="rounded-2xl"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get a demo
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center py-10">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge className="mb-4 rounded-full">Autonomous RCM Engine</Badge>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Self-repairing Revenue Cycle for <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">Providers</span>
              </h1>
              <p className="mt-4 text-lg text-slate-600 max-w-xl">
                MEDVOXA reduces denials, accelerates cash, and keeps you audit-ready — using an AI-assisted, workflow-first engine that learns from every remittance.
                <br /><br />
                Seamlessly integrates with your existing billing, clearinghouse, and EMR systems — no migrations required.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <Card className="rounded-2xl shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><LineChart className="h-5 w-5"/> Weekly RCM Snapshot</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {kpiData.map((k) => (
                      <div key={k.label} className="rounded-xl border p-3">
                        <div className="text-xs text-muted-foreground">{k.label}</div>
                        <div className="text-xl font-semibold">{k.value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="h-72 pb-4 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={weeklyRCM}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="week" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="paid" radius={[8,8,0,0]} />
                        <Bar dataKey="denied" radius={[8,8,0,0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section id="vision" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center gap-2">
            <Rocket className="h-5 w-5"/>
            <h2 className="text-3xl font-bold">Our Vision</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Zero-Friction Submissions</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                A clean-claim engine that validates, fixes, and explains—before payers do—so your first pass yield keeps rising.
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Self-Repairing Denials</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Mode-B learning suggests ICD/CPT pairs proven to pay under your payers/jurisdictions, with auditable logic.
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Audit-Only Oversight</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Humans supervise; the engine explains. Every fix, reason code, and outcome is logged for compliance.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PROGRESS */}
      <section id="progress" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center gap-2">
            <TrendingUp className="h-5 w-5"/>
            <h2 className="text-3xl font-bold">Progress & Roadmap</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <Card className="rounded-2xl">
              <CardHeader><CardTitle>Milestones</CardTitle></CardHeader>
              <CardContent className="space-y-6">
                <RoadmapItem
                  num="1"
                  title="Phase 1 — Data Standardization & Validation"
                  desc="Unified claims/ERA datasets, validation scripts, and clean data gates."
                />
                <RoadmapItem
                  num="2"
                  title="Phase 2 — Novitas Self-Repair Engine"
                  desc="Smart recommendations for CO-16/50/97/109 & PR-204 using paid-history."
                />
                <RoadmapItem
                  num="3"
                  title="Phase 3 — CMS-1500 Generator"
                  desc="Flattened, pixel-perfect claim forms via ReportLab; payer-specific blocks."
                />
                <RoadmapItem
                  icon={<Zap className="h-4 w-4"/>}
                  highlight
                  title="Next — Adaptive Rules & Worklists"
                  desc="Dynamic queues by payer/J-code/CPT with explainable actions."
                />
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader><CardTitle>Readiness Index</CardTitle></CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {progressData.map((p) => (
                    <div key={p.stage} className="rounded-xl border p-4">
                      <div className="text-xs text-muted-foreground">{p.stage}</div>
                      <div className="mt-1 text-2xl font-bold">{p.metric}%</div>
                    </div>
                  ))}
                </div>
                <div className="text-xs text-muted-foreground">*Metrics are illustrative; connect to live KPIs later.</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section id="value" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center gap-2">
            <Shield className="h-5 w-5"/>
            <h2 className="text-3xl font-bold">Value for Providers</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <TrendingUp className="h-5 w-5"/>, title: "Faster Cash", desc: "Shorter A/R cycles with higher first-pass yield."},
              { icon: <CheckCircle2 className="h-5 w-5"/>, title: "Fewer Denials", desc: "ERA-led root causes; proactive fixes before resubmission."},
              { icon: <LineChart className="h-5 w-5"/>, title: "Management Reporting", desc: "Provider-centric KPIs with audit-critical detail."},
              { icon: <Shield className="h-5 w-5"/>, title: "Compliance-Ready", desc: "Full traceability — who changed what, when, and why."}
            ].map((item) => (
              <Card key={item.title} className="rounded-2xl">
                <CardHeader><CardTitle className="flex items-center gap-2">{item.icon}{item.title}</CardTitle></CardHeader>
                <CardContent className="text-slate-600">{item.desc}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10">How it works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {["Ingest", "Validate", "Repair", "Submit"].map((step, i) => (
              <Step key={step} step={i+1} label={step} />
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section id="security" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Security & Compliance</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <SecurityCard title="HIPAA-mindful by design" desc="PHI minimization; strict role-based access; encrypted data at rest & in transit." />
            <SecurityCard title="Audit Logging" desc="Immutable logs for every change and submission, exportable for review." />
            <SecurityCard title="Payer-grade Validation" desc="Pre-adjudication checks tuned per payer/jurisdiction to reduce surprises." />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-white border-t">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Request a Demo</h2>
          <p className="text-slate-600 mb-10 max-w-xl mx-auto text-center">
            Tell us about your organization and we’ll reach out to schedule a personalized walkthrough.
          </p>

          <DemoForm />
          <div className="mt-6 text-sm text-slate-500 text-center">
            By submitting, you confirm you won’t include PHI. We use submitted details only to contact you about MEDVOXA.
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="h-7 w-7 rounded-xl bg-slate-900 text-white grid place-items-center text-sm">M</span>
              <span className="text-sm text-slate-600">© {new Date().getFullYear()} MEDVOXA. All rights reserved.</span>
            </div>
            <div className="text-xs text-slate-500">
              MEDVOXA is a workflow-first RCM software platform. We do not store PHI on this website. For support or inquiries, email hello@medvoxa.com.
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

function RoadmapItem({ num, icon, title, desc, highlight }: any) {
  return (
    <div className="flex items-start gap-3">
      <div className={`h-8 w-8 rounded-full ${highlight ? "bg-emerald-600" : "bg-slate-900"} text-white grid place-items-center`}>
        {icon || num}
      </div>
      <div>
        <div className="font-semibold">{title}</div>
        <p className="text-sm text-slate-600">{desc}</p>
      </div>
    </div>
  );
}

function Step({ step, label }: any) {
  return (
    <div className="relative rounded-2xl border p-6">
      <div className="absolute -top-3 left-4 rounded-full bg-slate-900 text-white h-8 w-8 grid place-items-center text-sm">{step}</div>
      <div className="font-semibold mb-2">{label}</div>
      <p className="text-sm text-slate-600">
        {step === 1 && "Claims, lines, denials, and ERA unify into a standard model."}
        {step === 2 && "Clean-claim checks and payer rules prevent rework."}
        {step === 3 && "AI-assisted suggestions fix ICD/CPT and documentation gaps."}
        {step === 4 && "Flattened forms and EDI ready for submission — with audit logs."}
      </p>
    </div>
  );
}

function SecurityCard({ title, desc }: any) {
  return (
    <Card className="rounded-2xl">
      <CardHeader><CardTitle>{title}</CardTitle></CardHeader>
      <CardContent className="text-slate-600">{desc}</CardContent>
    </Card>
  );
}

/* —— Contact Form Component —— */
function DemoForm() {
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
      if (!res.ok) throw new Error("Request failed");
      setStatus("ok");
      formRef.current?.reset();
    } catch (err) {
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
        <Button disabled={status==="sending"} className="rounded-2xl" type="submit">
          {status==="sending" ? "Sending..." : "Send"}
        </Button>
      </div>
      {status==="ok" && <div className="text-emerald-600 text-sm text-center">Thanks — we’ve received your request. We’ll reach out at the email you provided.</div>}
      {status==="err" && <div className="text-red-600 text-sm text-center">Something went wrong. Please try again or email hello@medvoxa.com.</div>}
    </form>
  );
}
