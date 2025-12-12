// app/contact/page.tsx

import ContactForm from "@/components/contact/ContactForm";
import { buildSEO, schemaBreadcrumb } from "@/lib/seo";

export const metadata = buildSEO({
  title: "Contact MEDVOXA — Sales, Support, Partnerships",
  description:
    "Reach out to MEDVOXA for demos, pricing, collaborations, or support. Our team responds quickly.",
  canonical: "https://medvoxa.com/contact",
  keywords: ["contact medvoxa", "rcm support", "saas contact"],
  schema: schemaBreadcrumb([
    { name: "Home", url: "https://medvoxa.com" },
    { name: "Contact", url: "https://medvoxa.com/contact" },
  ]),
});

export default function ContactPage() {
  return (
    <div className="w-full">

      {/* MAIN SECTION */}
      <section className="py-6 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-[1100px] mx-auto px-4 grid md:grid-cols-2 gap-12">

          {/* LEFT */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-neutral-900">
              How can we assist?
            </h2>

            <p className="text-neutral-700 text-base leading-relaxed max-w-md">
              Our team supports demos, onboarding, pricing, collaborations,
              and provider success.
            </p>

            <p className="text-neutral-700 text-base leading-relaxed max-w-md">
              Prefer email? Contact us anytime at{" "}
              <a
                href="mailto:hello@medvoxa.com"
                className="text-[var(--brand-primary)] font-medium underline"
              >
                hello@medvoxa.com
              </a>.
            </p>

            <ul className="space-y-1.5 text-neutral-700 text-sm">
              <li>• Product questions</li>
              <li>• Demo scheduling</li>
              <li>• Pricing & onboarding</li>
              <li>• Provider support</li>
              <li>• Collaboration inquiries</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="bg-white p-2 rounded-lg border border-neutral-200 shadow-sm w-[330px]">
            <ContactForm />
          </div>

        </div>
      </section>

    </div>
  );
}
