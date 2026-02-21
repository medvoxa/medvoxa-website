import { buildSEO, schemaBreadcrumb } from "@/lib/seo";
import Link from "next/link";
import FoundingApplicationForm from "@/components/founding/FoundingApplicationForm";

export const metadata = buildSEO({
  title: "Founding Practices Program — MEDVOXA",
  description:
    "Join MEDVOXA as a founding practice and help shape the future of autonomous revenue intelligence. Limited early partners invited.",
  canonical: "https://medvoxa.com/founding",
  keywords: [
    "founding practice program",
    "design partner healthcare",
    "early access rcm platform",
    "ai billing pilot program",
    "healthcare automation early adopters",
  ],
  schema: schemaBreadcrumb([
    { name: "Home", url: "https://medvoxa.com" },
    { name: "Founding Practices", url: "https://medvoxa.com/founding" },
  ]),
});

export default function FoundingPage() {
  return (
    <div className="w-full bg-[#0A0F1F] text-white">

      {/* HERO + FORM (COMPACT GRID) */}
      <section className="pt-16 pb-12 border-b border-white/5">
        <div className="max-w-[1100px] mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT */}
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
              Become a Founding Practice.
              <br />
              Shape the Future of Revenue Intelligence.
            </h1>

            <p className="mt-4 text-sm text-slate-300 leading-relaxed max-w-md">
              MEDVOXA is inviting a limited number of independent practices
              and specialty providers to participate in our Founding Practices Program —
              gaining early access, influence, and preferential economics.
            </p>

            <div className="mt-5 space-y-2 text-sm text-slate-300">
              <div>• Preferential pricing structure</div>
              <div>• Direct roadmap influence</div>
              <div>• White-glove onboarding</div>
              <div>• Long-term strategic alignment</div>
            </div>

            <div className="mt-6 text-sm">
              Prefer direct conversation?
              <Link
                href="/contact"
                className="ml-2 text-[#4FD1C5] hover:underline"
              >
                Contact our team
              </Link>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-lg">
            <h3 className="text-base font-semibold mb-3">
              Founding Application
            </h3>

            <FoundingApplicationForm />
          </div>

        </div>
      </section>

      {/* WHY JOIN — REDUCED SPACING */}
      <section className="py-10 border-b border-white/5">
        <div className="max-w-[1100px] mx-auto px-6">

          <h2 className="text-xl font-semibold mb-6">
            Why Join as a Founding Partner?
          </h2>

          <div className="grid md:grid-cols-3 gap-5">

            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <h3 className="text-sm font-semibold mb-1">
                Preferential Economics
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Locked-in early partner pricing and long-term commercial advantages.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <h3 className="text-sm font-semibold mb-1">
                Product Influence
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Direct feedback loop with founders shaping workflows and automation logic.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <h3 className="text-sm font-semibold mb-1">
                Priority Support
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dedicated onboarding and implementation partnership.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* IDEAL PRACTICES — COMPACT */}
      <section className="py-10 border-b border-white/5">
        <div className="max-w-[900px] mx-auto px-6">

          <h2 className="text-xl font-semibold mb-4">
            Ideal Founding Practices
          </h2>

          <ul className="grid md:grid-cols-2 gap-y-2 text-xs text-slate-300 leading-relaxed">
            <li>• Independent medical groups</li>
            <li>• Specialty-focused practices</li>
            <li>• Multi-location provider networks</li>
            <li>• Growth-stage healthcare organizations</li>
            <li>• Governance-focused operations</li>
            <li>• Practices seeking AI validation workflows</li>
          </ul>

        </div>
      </section>

      {/* FINAL CTA — TIGHT */}
      <section className="py-12 text-center">

        <h2 className="text-lg font-semibold mb-2">
          Limited Cohort — Applications Open
        </h2>

        <p className="text-xs text-slate-400 max-w-lg mx-auto mb-4 leading-relaxed">
          We are selecting a limited number of founding partners.
          Secure early participation today.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-[#4FD1C5] text-black px-6 py-2 rounded-md text-sm font-medium hover:opacity-90 transition"
        >
          Speak With Our Team
        </Link>

      </section>

    </div>
  );
}