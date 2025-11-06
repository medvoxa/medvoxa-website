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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, TrendingUp, Shield, Zap, LineChart, Rocket, ArrowRight, Mail, Phone, MapPin } from "lucide-react";

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
            <Button className="rounded-2xl">Get a demo</Button>
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
                A clean-claim engine that validates and fixes before submission.
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Self-Repairing Denials</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Suggests historically successful billing patterns per payer.
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Audit-Only Oversight</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Every fix and decision is logged for full compliance clarity.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
}
