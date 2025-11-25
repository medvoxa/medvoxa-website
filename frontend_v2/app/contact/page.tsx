import ContactForm from "@/components/contact/ContactForm";
import { buildSEO, schemaBreadcrumb } from "@/lib/seo";

export const metadata = buildSEO({
  title: "Contact MEDVOXA — Sales, Support, Partnerships",
  description:
    "Get in touch with MEDVOXA for product demos, pricing, enterprise onboarding, partnerships, support, and investment inquiries. Our global remote team responds quickly.",
  canonical: "https://medvoxa.com/contact",
  keywords: [
    "contact medvoxa",
    "rcm platform contact",
    "healthcare saas support",
    "ai medical billing contact",
    "healthcare automation help",
    "partner with medvoxa",
    "rcm sales inquiry",
    "medvoxa support"
  ],
  schema: schemaBreadcrumb([
    { name: "Home", url: "https://medvoxa.com" },
    { name: "Contact", url: "https://medvoxa.com/contact" },
  ]),
});

export default function ContactPage() {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="pt-20 pb-6 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight">
            Contact MEDVOXA
          </h1>

          <p className="mt-4 text-neutral-700 text-lg max-w-2xl">
            Providers, partners, and investors — we’re here to help. Send us your inquiry and our team will respond shortly.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-14 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-10">

          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-semibold text-neutral-900 mb-4">
              How can we assist?
            </h2>
            <p className="text-neutral-700 text-lg leading-relaxed mb-5 max-w-md">
              Choose any topic — our team supports demos, onboarding, partnerships, and enterprise requests.
            </p>

            <ul className="space-y-2 text-neutral-700">
              <li>• Product questions & demos</li>
              <li>• Pricing & enterprise onboarding</li>
              <li>• Partnerships & collaborations</li>
              <li>• Provider support & training</li>
              <li>• Investor outreach</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm">
            <div className="[&_textarea]:h-28 [&_textarea]:min-h-[110px] [&_textarea]:text-[15px]">
              <ContactForm />
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[var(--brand-primary)] text-white text-center">
        <h2 className="text-3xl font-semibold mb-3">Need a Faster Response?</h2>
        <p className="max-w-2xl mx-auto text-lg text-white/90 leading-relaxed mb-6">
          Our globally distributed team is always available to assist you.
        </p>
        <a
          href="/"
          className="px-8 py-4 bg-white text-[var(--brand-primary)] rounded-lg font-semibold"
        >
          Go to Home
        </a>
      </section>

    </div>
  );
}
