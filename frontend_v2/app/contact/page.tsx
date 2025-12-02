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
    "medvoxa support",
  ],
  schema: schemaBreadcrumb([
    { name: "Home", url: "https://medvoxa.com" },
    { name: "Contact", url: "https://medvoxa.com/contact" },
  ]),
});

export default function ContactPage() {
  return (
    <div className="w-full">

      {/* MAIN FORM SECTION (HERO REMOVED) */}
      <section className="pt-12 pb-10 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-10">

          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-semibold text-neutral-900 mb-4">
              How can we assist?
            </h2>

            <p className="text-neutral-700 text-lg leading-relaxed mb-5 max-w-md">
              Choose any topic — our team supports demos, onboarding, partnerships, and enterprise requests.
            </p>

            <p className="text-neutral-700 text-lg leading-relaxed mb-5 max-w-md">
              Prefer email? Reach us anytime at{" "}
              <a
                href="mailto:hello@medvoxa.com"
                className="text-[var(--brand-primary)] font-semibold underline"
              >
                hello@medvoxa.com
              </a>.
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

      {/* REMOVE ALL EXTRA SPACING BELOW */}
    </div>
  );
}
