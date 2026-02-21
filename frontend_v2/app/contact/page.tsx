import ContactForm from "@/components/contact/ContactForm";
import Container from "@/components/shared/Container";
import { buildSEO, schemaBreadcrumb } from "@/lib/seo";

export const metadata = buildSEO({
  title: "Contact | MEDVOXA",
  description:
    "Connect with MEDVOXA for structured engagement discussions, operational alignment, and platform demonstrations.",
  canonical: "https://medvoxa.com/contact",
  schema: schemaBreadcrumb([
    { name: "Home", url: "https://medvoxa.com" },
    { name: "Contact", url: "https://medvoxa.com/contact" }
  ])
});

export default function ContactPage() {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="relative overflow-hidden text-white min-h-[45vh]">

        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1F] via-[#141936] to-[#2E2A63]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:40px_40px]" />

        <Container className="relative pt-20 pb-10 max-w-3xl">

          <h1 className="text-[2.6rem] md:text-[3rem] font-semibold leading-[1.22] tracking-[-0.005em]">
            Structured Engagement Begins Here
          </h1>

          <p className="mt-4 text-[0.98rem] text-slate-300/85 leading-[1.7]">
            Reach out for platform demonstrations, operational alignment,
            governance discussions, or structured engagement planning.
          </p>

        </Container>
      </section>

      {/* CONTACT CONTENT */}
      <section className="relative py-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#141936] via-[#0F1529] to-[#0B1124]" />

        <Container className="relative grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE */}
          <div>

            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-[-0.01em]">
              How We Can Assist
            </h2>

            <p className="mt-4 text-sm text-slate-300/85 leading-[1.7] max-w-md">
              Our team supports structured onboarding, governance alignment,
              pricing discussions, and platform demonstrations.
            </p>

            <p className="mt-4 text-sm text-slate-300/85 leading-[1.7]">
              Prefer direct communication? Email us at{" "}
              <a
                href="mailto:hello@medvoxa.com"
                className="underline hover:text-white"
              >
                hello@medvoxa.com
              </a>
            </p>

            <ul className="mt-4 space-y-2 text-sm text-slate-300/85 leading-[1.7]">
              <li>• Platform demonstrations</li>
              <li>• Pricing engagement models</li>
              <li>• Provider operational alignment</li>
              <li>• Governance discussions</li>
              <li>• Strategic partnerships</li>
            </ul>

          </div>

          {/* RIGHT SIDE — GLASS FORM PANEL */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <ContactForm />
          </div>

        </Container>
      </section>

    </div>
  );
}