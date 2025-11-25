import { buildSEO, schemaBreadcrumb } from "@/lib/seo";

export const metadata = buildSEO({
  title: "Careers — MEDVOXA | Remote Tech, AI, Healthcare RCM Jobs",
  description:
    "Join MEDVOXA’s global remote-first team. We hire engineers, AI/ML developers, designers, healthcare RCM specialists, tech interns, and highly skilled H1B-declined STEM professionals seeking opportunities.",
  canonical: "https://medvoxa.com/careers",
  keywords: [
    "healthcare ai jobs",
    "remote tech jobs",
    "ai developer job",
    "h1b declined jobs",
    "stem graduate opportunities",
    "saas careers remote",
    "medical billing tech jobs",
    "ai rcm platform careers",
    "global remote engineering jobs",
    "visa independent jobs"
  ],
  schema: schemaBreadcrumb([
    { name: "Home", url: "https://medvoxa.com" },
    { name: "Careers", url: "https://medvoxa.com/careers" }
  ]),
});

export default function CareersPage() {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight">
            Build the Future of Healthcare Automation
          </h1>

          <p className="mt-6 text-neutral-700 text-lg max-w-2xl">
            MEDVOXA is developing the next generation of healthcare RCM
            infrastructure through AI, engineering excellence, and scalable SaaS.
            Join our remote-first global team.
          </p>
        </div>
      </section>

      {/* CULTURE */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-semibold text-neutral-900 mb-10">
            Our Culture
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 bg-white border border-neutral-200 rounded-xl">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Remote-First, Global
              </h3>
              <p className="text-neutral-600">
                Work from anywhere in the world. Talent has no boundaries.
              </p>
            </div>

            <div className="p-6 bg-white border border-neutral-200 rounded-xl">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Engineering Excellence
              </h3>
              <p className="text-neutral-600">
                We build with strong foundations—clean code, secure architecture, and scalable systems.
              </p>
            </div>

            <div className="p-6 bg-white border border-neutral-200 rounded-xl">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Outcome-Driven
              </h3>
              <p className="text-neutral-600">
                We prioritize impact, ownership, speed, and accountability—not bureaucracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-semibold text-neutral-900 mb-8">
            Open Positions
          </h2>

          <p className="text-neutral-700 text-lg leading-relaxed mb-10 max-w-3xl">
            Below are the active roles required for our SAAS+ engineering,
            platform development, AI/ML, and operational scale. If your expertise
            doesn’t fit exactly — reach out, we hire exceptional talent proactively.
          </p>

          <div className="grid md:grid-cols-2 gap-12">

            {/* ENGINEERING ROLES */}
            {[
              "Senior Full Stack Engineer",
              "Backend Engineer (Python / FastAPI / PostgreSQL)",
              "Frontend Engineer (Next.js / React)",
              "DevOps & Cloud Engineer (AWS / CI-CD)",
              "Database Engineer (PostgreSQL / ETL / Performance)",
              "AI/ML Engineer (LLMs, Vector DB, Model Optimization)",
              "Data Engineer (Pipelines / Healthcare ETL)",
              "QA Automation Engineer",
              "Security Engineer (Compliance-Focused)"
            ].map((role) => (
              <div key={role} className="p-8 border border-neutral-200 rounded-xl bg-neutral-50">
                <h3 className="text-xl font-semibold mb-2 text-neutral-900">{role}</h3>
                <p className="text-neutral-600 mb-4">Remote · Full time</p>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Join the core engineering team building MEDVOXA’s scalable RCM and AI infrastructure.
                </p>
                <a href="/contact"
                   className="px-6 py-3 bg-[var(--brand-primary)] text-white rounded-lg font-medium">
                  Apply
                </a>
              </div>
            ))}

            {/* PRODUCT + OPERATIONS */}
            {[
              "Product Manager (SaaS Healthcare)",
              "Technical Writer (API, Docs, Product)",
              "RCM Specialist / Healthcare Billing Analyst",
              "Provider Onboarding Specialist",
              "Customer Success Lead (Healthcare SaaS)"
            ].map((role) => (
              <div key={role} className="p-8 border border-neutral-200 rounded-xl bg-neutral-50">
                <h3 className="text-xl font-semibold mb-2 text-neutral-900">{role}</h3>
                <p className="text-neutral-600 mb-4">Remote · Full time</p>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Be part of the team shaping product experience and provider outcomes.
                </p>
                <a href="/contact"
                   className="px-6 py-3 bg-[var(--brand-primary)] text-white rounded-lg font-medium">
                  Apply
                </a>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* SPECIAL SECTION — TECH INTERNS & GLOBAL TALENT */}
      <section className="py-20 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-[1200px] mx-auto px-4">

          <h2 className="text-3xl font-semibold text-neutral-900 mb-6">
            Opportunities for Tech Interns & Global Talent
          </h2>

          <p className="text-neutral-700 text-lg leading-relaxed max-w-3xl mb-10">
            MEDVOXA welcomes ambitious individuals from all backgrounds — especially
            highly educated global professionals seeking real opportunities in
            AI, engineering, and healthcare technology.
          </p>

          <div className="grid md:grid-cols-2 gap-12">

            {/* INTERNS */}
            <div className="p-8 border border-neutral-200 rounded-xl bg-white">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Tech Internships (Engineering, AI, Product)
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-6">
                We provide hands-on experience building real systems — not filler tasks.
                Interns work directly on production-grade SaaS, APIs, AI models, and RCM tools.
              </p>
              <a href="/contact"
                 className="px-6 py-3 bg-[var(--brand-primary)] text-white rounded-lg font-medium">
                Apply as Intern
              </a>
            </div>

            {/* H1B / HIGHLY EDUCATED TALENT */}
            <div className="p-8 border border-neutral-200 rounded-xl bg-white">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                For H1B-Declined & Highly Skilled STEM Talent
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Many exceptional engineers and STEM graduates face H1B lottery challenges.
                MEDVOXA proudly welcomes visa-independent global talent, providing remote-first
                opportunities for high-skill professionals who were:
                <br />• H1B not selected  
                <br />• H1B denied / expired  
                <br />• Highly qualified STEM graduates seeking remote tech roles
                <br /><br />
                Your expertise matters more than your location.
              </p>
              <a href="/contact"
                 className="px-6 py-3 bg-[var(--brand-primary)] text-white rounded-lg font-medium">
                Apply as Global Talent
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--brand-primary)] text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Join MEDVOXA?
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-white/90 leading-relaxed mb-8">
          If you believe in building meaningful healthcare technology,
          we would love to hear from you.
        </p>
        <a
          href="/contact"
          className="px-8 py-4 bg-white text-[var(--brand-primary)] rounded-lg font-semibold"
        >
          Send Your Application
        </a>
      </section>

    </div>
  );
}
