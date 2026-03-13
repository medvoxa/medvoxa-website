import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Specialties — Medical Billing for Every Specialty",
  description:
    "MEDVOXA provides specialty-specific revenue cycle management for family medicine, cardiology, orthopedics, mental health, dermatology, gastroenterology, and more.",
  alternates: { canonical: "https://medvoxa.com/specialties" },
};

const SPECIALTIES = [
  {
    name: "Family Medicine & Primary Care",
    challenges: "High patient volume, complex coding across preventive and acute care, E&M level optimization, and managing wellness visit billing alongside chronic care management codes.",
    approach: "We apply accurate E&M level selection, preventive vs. sick visit coding, and ensure chronic care management and annual wellness visit billing is captured correctly.",
    codes: ["99213–99215 E&M", "Annual Wellness Visits", "Chronic Care Management", "Preventive Services"],
  },
  {
    name: "Cardiology",
    challenges: "High-complexity procedures, global period tracking, bundling rules, prior authorization requirements, and frequent payer-specific coverage policies that vary by procedure.",
    approach: "Cardiology-specific coding workflows with careful global period management, bundling rule compliance, and proactive prior authorization tracking.",
    codes: ["Echocardiography", "Cardiac Catheterization", "Electrophysiology", "Nuclear Cardiology"],
  },
  {
    name: "Orthopedics & Sports Medicine",
    challenges: "Surgical billing complexity, implant billing, global surgery periods, modifier requirements, and frequent multi-procedure encounters with specific coding sequencing rules.",
    approach: "Structured surgical claim preparation with modifier 51/59 application, implant billing coordination, and global surgery period tracking to prevent premature re-billing.",
    codes: ["Surgical Procedures", "Global Period Tracking", "Joint Injections", "Physical Medicine"],
  },
  {
    name: "Mental Health & Behavioral Health",
    challenges: "Session-based billing complexity, documentation requirements for medical necessity, carve-out payer structures, and coordination between psychiatric and primary care billing.",
    approach: "Behavioral health coding expertise including time-based psychotherapy billing, psychiatric diagnostic interview codes, and coordination of care documentation requirements.",
    codes: ["Psychotherapy", "Psychiatric Evaluation", "Crisis Intervention", "E&M with Therapy"],
  },
  {
    name: "Dermatology",
    challenges: "Distinction between surgical and non-surgical procedures, destruction vs. excision coding, lesion size and location documentation, and Mohs surgery billing complexity.",
    approach: "Accurate dermatology coding with attention to procedure distinction, lesion documentation, pathology specimen billing, and Mohs surgery layer-by-layer claim preparation.",
    codes: ["Mohs Surgery", "Destruction Procedures", "Excisions", "Biopsies"],
  },
  {
    name: "Gastroenterology",
    challenges: "Endoscopy bundling rules, colonoscopy vs. sigmoidoscopy distinctions, pathology coordination, and commercial payer policies on screening vs. diagnostic procedure billing.",
    approach: "GI-specific coding that correctly navigates bundling rules, applies appropriate modifier usage for diagnostic vs. therapeutic procedures, and coordinates pathology billing.",
    codes: ["Colonoscopy", "Upper Endoscopy", "Capsule Endoscopy", "Liver Procedures"],
  },
  {
    name: "Urgent Care",
    challenges: "High claim volume with time-sensitive filing, episodic care billing across payers, documentation adequacy for E&M levels, and coordination of after-hours and holiday billing.",
    approach: "Streamlined urgent care billing processes designed for volume and speed, with E&M level documentation review and rapid claim turnaround to minimize days in A/R.",
    codes: ["E&M Services", "Injury Care", "Procedure Billing", "Lab Coordination"],
  },
  {
    name: "Neurology",
    challenges: "EEG and EMG billing complexity, evaluation and management documentation for complex patients, sleep study billing, and infusion therapy coordination.",
    approach: "Neurology billing expertise covering diagnostic testing, complex E&M documentation, and infusion service billing with accurate drug and administration code application.",
    codes: ["EEG / EMG", "Complex E&M", "Infusion Therapy", "Sleep Studies"],
  },
];

export default function SpecialtiesPage() {
  return (
    <div>

      {/* HERO */}
      <section style={{ background: "#fff", padding: "72px 0 64px", borderBottom: "1px solid var(--border)" }}>
        <div className="container-site">
          <div style={{ maxWidth: 680 }}>
            <div className="section-kicker">Specialties We Serve</div>
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 5vw, 50px)",
              fontWeight: 600,
              letterSpacing: "-1.5px",
              color: "var(--ink)",
              lineHeight: 1.1,
              marginBottom: 20,
            }}>
              Specialty-specific billing expertise,
              <em style={{ color: "var(--red)", fontStyle: "italic" }}> not generic RCM.</em>
            </h1>
            <p style={{ fontSize: 16, color: "var(--ink-light)", lineHeight: 1.78 }}>
              Every medical specialty has distinct coding rules, payer policies, and documentation
              requirements. Generic billing services miss the nuance. MEDVOXA's team is trained
              across the specialties we serve — so your claims are coded correctly from the start.
            </p>
          </div>
        </div>
      </section>

      {/* SPECIALTIES LIST */}
      <section style={{ background: "var(--cream)", padding: "72px 0" }}>
        <div className="container-site">
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {SPECIALTIES.map((sp, i) => (
              <div key={sp.name} className="card" style={{ padding: "36px 36px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 220px", gap: 40, alignItems: "start" }} className="sp-grid">
                  {/* Left — specialty info */}
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 12, fontStyle: "italic", color: "var(--red)", marginBottom: 8 }}>
                      Specialty {String(i + 1).padStart(2, "0")}
                    </div>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, color: "var(--ink)", marginBottom: 14, letterSpacing: "-0.5px" }}>
                      {sp.name}
                    </h2>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: 8 }}>
                      Common Billing Challenges
                    </div>
                    <p style={{ fontSize: 14, color: "var(--ink-light)", lineHeight: 1.75, margin: 0 }}>
                      {sp.challenges}
                    </p>
                  </div>

                  {/* Middle — approach */}
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--red)", marginBottom: 8, paddingTop: 28 }}>
                      MEDVOXA Approach
                    </div>
                    <p style={{ fontSize: 14, color: "var(--ink-light)", lineHeight: 1.75, margin: 0 }}>
                      {sp.approach}
                    </p>
                  </div>

                  {/* Right — codes */}
                  <div style={{ paddingTop: 28 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: 12 }}>
                      Service Areas
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                      {sp.codes.map((code) => (
                        <span key={code} style={{
                          display: "flex", alignItems: "center", gap: 8,
                          fontSize: 13, fontWeight: 500,
                          color: "var(--ink-mid)",
                        }}>
                          <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--red)", flexShrink: 0 }} />
                          {code}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Don't see yours */}
          <div style={{
            marginTop: 32,
            background: "#fff",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            padding: "36px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 24,
          }}>
            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, color: "var(--ink)", marginBottom: 8 }}>
                Don't see your specialty listed?
              </h3>
              <p style={{ fontSize: 14, color: "var(--ink-light)", lineHeight: 1.7, margin: 0, maxWidth: 480 }}>
                We work with a wide range of medical specialties beyond those listed here.
                Reach out and we'll discuss whether MEDVOXA is a fit for your practice's billing needs.
              </p>
            </div>
            <Link href="/contact" className="btn-primary btn-red" style={{ flexShrink: 0 }}>
              Ask About Your Specialty
            </Link>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .sp-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
          }
        `}</style>
      </section>

    </div>
  );
}
