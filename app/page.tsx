'use client';

import * as React from "react";
import { motion } from "framer-motion";

import HeroAIBackground from "@/components/HeroAIBackground";
import HeroRibbon from "@/components/HeroRibbon";
import HeroGlow from "@/components/hero-glow";
import FadeIn from "@/components/FadeIn";
import AdaptiveWave from "@/components/AdaptiveWave";

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

import {
  CheckCircle2,
  Shield,
  LineChart,
  ArrowRight,
} from "lucide-react";

// --- DATA ---
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

      {/* HERO */}
      <section id="home" className="relative overflow-hidden py-20">
        <HeroAIBackground />
        <HeroRibbon />
        <HeroGlow />

        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center py-10">

            {/* LEFT */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <Badge className="mb-4 rounded-full">Autonomous RCM Engine</Badge>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Self-repairing Revenue Cycle for{" "}
                <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                  Providers
                </span>
              </h1>

              <p className="mt-4 text-lg text-slate-600 max-w-xl">
                MEDVOXA reduces denials, accelerates cash, and keeps your RCM operating at peak efficiency —
                using an engine that learns from every adjudication.
              </p>

              <div className="mt-6">
                <a href="mailto:hello@medvoxa.com">
                  <Button className="rounded-2xl bg-[#5A3A2E] hover:bg-[#7B5243] text-white">
                    Request a live demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <Pill>ERA-driven denial intelligence</Pill>
                <Pill>Clean claim optimizer</Pill>
                <Pill>Provider-first reporting</Pill>
              </div>
            </motion.div>

            {/* RIGHT — RCM Snapshot */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              <Card className="rounded-2xl shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LineChart className="h-5 w-5"/> Weekly RCM Snapshot
                  </CardTitle>
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

                  <div style={{ width: "100%", height: 300 }}>
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

      {/* ENGINE */}
      <section id="engine" className="relative py-28 overflow-hidden">
        <AdaptiveWave />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">The MEDVOXA Engine</h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
              Always learning. Always improving. Designed to eliminate recurrence — not react to it.
            </p>
          </FadeIn>
        </div>

        <div className="relative mx-auto max-w-6xl mt-16 grid md:grid-cols-3 gap-10 px-6 text-center">
          <FadeIn><EngineBlock title="Pattern Learning" desc="Learns from payer outcomes and adjudication feedback." /></FadeIn>
          <FadeIn delay={0.15}><EngineBlock title="Self-Correction" desc="Suggests or performs validated correction loops automatically." /></FadeIn>
          <FadeIn delay={0.3}><EngineBlock title="Scalable" desc="Performance increases without needing workforce expansion." /></FadeIn>
        </div>
      </section>

      {/* VALUE / IMPACT */}
      <section id="value" className="py-28">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-3">The Result</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-16 text-lg">
            MEDVOXA reduces rework, prevents denials before they occur, and stabilizes revenue — without increasing staff.
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            <Card className="rounded-2xl border p-8">
              <h3 className="text-2xl font-semibold mb-2">Higher Acceptance Rates</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Claims submitted cleanly the first time — fewer corrections, fewer delays.
              </p>
            </Card>

            <Card className="rounded-2xl border p-8">
              <h3 className="text-2xl font-semibold mb-2">Faster Reimbursement</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Automated corrections and structured submissions shorten payment cycles.
              </p>
            </Card>

            <Card className="rounded-2xl border p-8">
              <h3 className="text-2xl font-semibold mb-2">Stable, Predictable Revenue</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Workload does not depend on individuals — the system learns and improves continuously.
              </p>
            </Card>

          </div>

        </div>
      </section>

      {/* HOW */}
      <section id="how" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
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
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold mb-6">Security & Compliance</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <SecurityCard title="HIPAA-mindful by design" desc="PHI minimization; encryption end-to-end." />
            <SecurityCard title="Audit Logging" desc="Immutable trace of every correction and submission." />
            <SecurityCard title="Payer-grade Validation" desc="Pre-adjudication checks tuned per payer region." />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 border-t bg-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Request a Demo</h2>
          <p className="text-slate-600 mb-6">We are onboarding select provider groups.</p>

          <a href="mailto:hello@medvoxa.com" className="text-lg font-medium text-slate-900 hover:underline">
            hello@medvoxa.com
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} MEDVOXA — All Rights Reserved.
      </footer>

    </div>
  );
}

// --- Sub-Components ---
function EngineBlock({ title, desc }: any) {
  return (
    <div className="px-6">
      <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function Step({ step, label }: any) {
  return (
    <div className="relative rounded-2xl border p-6">
      <div className="absolute -top-3 left-4 rounded-full bg-[#5A3A2E] text-white h-8 w-8 grid place-items-center text-sm">{step}</div>
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
