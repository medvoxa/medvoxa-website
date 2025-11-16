// components/home/ServicesPreview.tsx

import Link from "next/link";

export default function ServicesPreview() {
  const services = [
    {
      title: "Autonomous Denial Repair",
      description:
        "AI-driven correction workflows that automatically identify, fix, and prevent denials — improving clean claim rates and accelerating reimbursement.",
      icon: "🛠️",
    },
    {
      title: "Revenue Recovery Intelligence",
      description:
        "Identify hidden revenue leakage with payer-specific patterns and historical insight models trained on millions of outcomes.",
      icon: "💰",
    },
    {
      title: "Coding & Claim Validation",
      description:
        "Smart CPT/ICD validation and coverage-rule alignment that reduces coding errors and ensures accurate payer submission.",
      icon: "📄",
    },
    {
      title: "RCM Analytics & Insights",
      description:
        "Impact dashboards that uncover trends, quantify savings, and track automation performance across your entire practice.",
      icon: "📊",
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-[#2A2220] mb-10">
          What MEDVOXA Delivers
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((s, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm 
                         border border-[#C9B8AE] shadow-sm transition-transform
                         hover:scale-[1.02]"
            >
              {/* Icon */}
              <div className="text-4xl mb-3" style={{ color: "#B87A57" }}>
                {s.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#2A2220] mb-2">
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-[#6A5045] text-base leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="px-8 py-3 inline-block rounded-xl font-medium
                       border border-[#5A3A2E] text-[#5A3A2E]
                       hover:bg-[#5A3A2E] hover:text-white
                       transition-colors"
          >
            View All Services
          </Link>
        </div>

      </div>
    </section>
  );
}
