'use client';
import * as React from "react";
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
            <a href="mailto:hello@medvoxa.com">
              <Button className="rounded-2xl">Get a demo</Button>
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center py-10">

            {/* LEFT */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge className="mb-4 rounded-full">Autonomous RCM Engine</Badge>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Self-repairing Revenue Cycle for <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">Providers</span>
              </h1>
              <p className="mt-4 text-lg text-slate-600 max-w-xl">
                MEDVOXA reduces denials, accelerates cash, and keeps you audit-ready — using an AI-assisted, workflow-first engine that learns from every remittance.<br/><br/>
                Seamlessly integrates with your existing billing, clearinghouse, and EMR systems — no migrations required.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:hello@medvoxa.com">
                  <Button className="rounded-2xl">Request a live demo <ArrowRight className="ml-2 h-4 w-4"/></Button>
                </a>
                <Button variant="outline" className="rounded-2xl">View roadmap</Button>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <Pill>ERA-driven denial intelligence</Pill>
                <Pill>Clean claim optimizer</Pill>
                <Pill>Provider-first reporting</Pill>
              </div>
            </motion.div>

            {/* RIGHT */}
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
              <CardHeader><CardTitle>Zero-Friction Submissions</CardTitle></CardHeader>
              <CardContent className="text-slate-600">
                A clean-claim engine that validates, fixes, and explains before payers do — improving first-pass yield.
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader><CardTitle>Self-Repairing Denials</CardTitle></CardHeader>
              <CardContent className="text-slate-600">
                Recommends ICD/CPT pairs proven to pay for your payer mix — with audit-ready reasoning.
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader><CardTitle>Audit-Only Oversight</CardTitle></CardHeader>
              <CardContent className="text-slate-600">
                Humans supervise; the engine explains every action clearly and traceably.
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

                <RoadmapItem num="1" title="Phase 1 — Data Standardization" desc="Unified claims/ERA datasets and validation gates." />
                <RoadmapItem num="2" title="Phase 2 — Denial Self-Repair Engine" desc="CO-16/50/97/109 & PR-204 suggestion logic." />
                <RoadmapItem num="3" title="Phase 3 — CMS-1500 Generator" desc="Flattened form generation and payer layouts." />
                <RoadmapItem icon={<Zap className="h-4 w-4"/>} highlight title="Next — Adaptive Rules & Worklists" desc="Dynamic queues with explainable logic." />

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
                <div className="text-xs text-muted-foreground">* Metrics illustrative; live dashboards later.</div>
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
              { icon: <TrendingUp className="h-5 w-5"/>, title: "Faster Cash", desc: "Shorter A/R cycles and improved liquidity."},
              { icon: <CheckCircle2 className="h-5 w-5"/>, title: "Fewer Denials", desc: "Root cause prevention + automated corrections."},
              { icon: <LineChart className="h-5 w-5"/>, title: "Management Reporting", desc: "Clear provider-centric operational KPIs."},
              { icon: <Shield className="h-5 w-5"/>, title: "Compliance-Ready", desc: "Every action is traceable and audit-logged."}
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
            <Step step={1} label="Ingest" />
            <Step step={2} label="Validate" />
            <Step step={3} label="Repair" />
            <Step step={4} label="Submit" />
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section id="security" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Security & Compliance</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <SecurityCard title="HIPAA-mindful by design" desc="PHI minimization; encryption at rest and in transit." />
            <SecurityCard title="Audit Logging" desc="Immutable trace of every correction and submission." />
            <SecurityCard title="Payer-grade Validation" desc="Pre-adjudication checks tuned per payer region." />
          </div>
        </div>
      </section>

      {/* ✅ CONTACT — TEMPORARY SIMPLE EMAIL BLOCK */}
      <section id="contact" className="py-20 bg-white border-t">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Request a Demo</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto text-center">
            We’re currently onboarding through direct scheduling.
            Reach out anytime:
          </p>

          <a
            href="mailto:hello@medvoxa.com"
            className="inline-block rounded-2xl bg-slate-900 text-white px-6 py-3 text-lg hover:bg-slate-700 transition"
          >
            hello@medvoxa.com
          </a>

          <p className="mt-6 text-sm text-slate-500">
            You’ll receive a response within one business day.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="h-7 w-7 rounded-xl bg-slate-900 text-white grid place-items-center text-sm">M</span>
              <span className="text-sm text-slate-600">
                © {new Date().getFullYear()} MEDVOXA. All rights reserved.
              </span>
            </div>
            <div className="text-xs text-slate-500">
              MEDVOXA is a workflow-first RCM software platform. No PHI is stored on this website.
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

/* UTILITY COMPONENTS — unchanged */
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
        {step === 1 && "Claims and remittances are unified into a clean data layer."}
        {step === 2 && "Clean-claim validations and payer-specific rules applied."}
        {step === 3 && "AI-assisted suggestions resolve denials and coding gaps."}
        {step === 4 && "Claims are submitted with full audit traceability."}
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
