// app/careers/page.tsx

import { buildSEO, schemaBreadcrumb } from "@/lib/seo";

export const metadata = buildSEO({
  title: "Careers — MEDVOXA",
  description:
    "Join MEDVOXA and help build the future of Autonomous Revenue Intelligence. We welcome engineers, designers, healthcare professionals, interns, and innovators who want to make real impact.",
  canonical: "https://medvoxa.com/careers",
  keywords: [
    "medvoxa careers",
    "healthcare ai jobs",
    "rcm automation jobs",
    "medical billing ai careers",
    "internships medvoxa",
  ],
  schema: schemaBreadcrumb([
    { name: "Home", url: "https://medvoxa.com" },
    { name: "Careers", url: "https://medvoxa.com/careers" }
  ]),
});

export default function CareersPage() {
  return (
    <div className="w-full">

      {/* WHY JOIN MEDVOXA */}
      <section className="pt-14 pb-6 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-[1000px] mx-auto px-4">

          <h1 className="text-2xl md:text-2xl font-semibold text-[#1D1A18] leading-tight mb-4">
            Why Join MEDVOXA?
          </h1>

          <p className="text-neutral-700 text-base max-w-4xl mb-4 leading-relaxed">
            MEDVOXA is defining a new category in healthcare technology:  
            <span className="font-medium"> Autonomous Revenue Intelligence Infrastructure. </span>  
            Joining us means joining the founding movement building the future of healthcare automation.
          </p>

          <div className="grid md:grid-cols-3 gap-5">

            <div className="p-4 bg-white border rounded-lg">
              <h3 className="text-lg font-semibold mb-1">Real Impact</h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Your work reaches providers, clinics, and health systems solving real financial challenges.
              </p>
            </div>

            <div className="p-4 bg-white border rounded-lg">
              <h3 className="text-lg font-semibold mb-1">Elite Engineering Culture</h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                We value ownership, precision, deep thinking, and technical craftsmanship.
              </p>
            </div>

            <div className="p-4 bg-white border rounded-lg">
              <h3 className="text-lg font-semibold mb-1">Mission-Driven</h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                We believe healthcare deserves better systems. If you do too, you belong here.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* INTERNSHIP / EARLY TALENT INVITATION */}
      <section className="py-6 bg-white">
        <div className="max-w-[1000px] mx-auto px-4">

          <h2 className="text-2xl font-semibold text-[#1D1A18] mb-3">
            Internships & Early Career Opportunities
          </h2>

          <p className="text-neutral-700 text-base max-w-4xl leading-relaxed mb-4">
            We welcome interns and early-career talent from all backgrounds — engineering, AI, design,
            business, healthcare, operations, and more. No degree requirements. No “perfect resume”
            needed. If you're curious, driven, and want to build — MEDVOXA is the right place.
          </p>

          <div className="p-5 bg-neutral-50 border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">What You’ll Get</h3>

            <ul className="text-sm text-neutral-700 leading-relaxed space-y-1">
              <li>• Direct mentorship from founders</li>
              <li>• Real product ownership</li>
              <li>• Exposure to engineering, AI, product, and operations</li>
              <li>• Flexible remote / hybrid opportunities</li>
              <li>• Pathway to full-time roles</li>
            </ul>

            <p className="text-sm text-neutral-700 mt-4">
              If you're looking for a team that values growth and real responsibility, you’ll fit right in.
            </p>
          </div>

        </div>
      </section>

      {/* GLOBAL TALENT INVITATION */}
      <section className="py-6 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-[1000px] mx-auto px-4">

          <h2 className="text-2xl font-semibold mb-3">Global Contributors Welcome</h2>

          <p className="text-neutral-700 text-base max-w-3xl leading-relaxed mb-4">
            MEDVOXA welcomes global contributors — students, freelancers, engineers, designers,
            and transitioning professionals. Great talent can come from anywhere.
          </p>

          <ul className="text-sm text-neutral-700 leading-relaxed space-y-1">
            <li>• Remote-friendly</li>
            <li>• No degree or pedigree requirements</li>
            <li>• Skills over credentials</li>
            <li>• Builders, not job titles</li>
            <li>• Portfolios, GitHub, and case studies encouraged</li>
          </ul>

        </div>
      </section>

      {/* CULTURE & VALUES */}
      <section className="py-6 bg-white">
        <div className="max-w-[1000px] mx-auto px-4">

          <h2 className="text-2xl font-semibold mb-3">What We Value</h2>

          <div className="grid md:grid-cols-3 gap-5">

            <div className="p-4 bg-neutral-50 border rounded-lg">
              <h3 className="text-lg font-semibold mb-1">Ownership</h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                We trust people who take initiative and lead solutions.
              </p>
            </div>

            <div className="p-4 bg-neutral-50 border rounded-lg">
              <h3 className="text-lg font-semibold mb-1">Curiosity</h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Asking “why” and pushing boundaries is part of who we are.
              </p>
            </div>

            <div className="p-4 bg-neutral-50 border rounded-lg">
              <h3 className="text-lg font-semibold mb-1">Craftsmanship</h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                We build with care, clarity, and obsession for quality.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 bg-[#FAF9F7] text-center border-t border-neutral-200">

        <h2 className="text-2xl font-semibold mb-2">Join the Team</h2>

        <p className="max-w-xl mx-auto text-sm text-neutral-600 leading-relaxed mb-4">
          Whether you're exploring internships, full-time roles, or collaborative opportunities —
          we'd love to hear from you. Send your resume, portfolio, LinkedIn, or GitHub to:
        </p>

        <a
          href="mailto:hello@medvoxa.com"
          className="inline-block px-6 py-2 bg-brand-primary text-white rounded-lg text-sm"
        >
          hello@medvoxa.com
        </a>
      </section>

    </div>
  );
}
