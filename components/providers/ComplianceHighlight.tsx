// components/providers/ComplianceHighlight.tsx

export default function ComplianceHighlight() {
  const items = [
    {
      title: "HIPAA-Ready Infrastructure",
      desc: "All PHI is handled using HIPAA-aligned controls with strict access boundaries, secure isolation, and continuous monitoring.",
      icon: "🛡️",
    },
    {
      title: "Full Encryption",
      desc: "Data is encrypted end-to-end — in transit (TLS 1.2+) and at rest — ensuring confidentiality across every workflow.",
      icon: "🔐",
    },
    {
      title: "PHI-Minimalist Processing",
      desc: "The engine processes only the information required for accurate automation, reducing data exposure and compliance risk.",
      icon: "📦",
    },
    {
      title: "Complete Audit Trails",
      desc: "Every automated correction, validation, and claim adjustment is logged with high-fidelity traceability for audits and reviews.",
      icon: "📜",
    },
  ];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-[#2A2220] mb-8">
          Compliance & Data Security for Providers
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white/50 backdrop-blur-sm
                         border border-[#C9B8AE] shadow-sm"
            >
              {/* Icon */}
              <div className="text-4xl mb-3" style={{ color: "#B87A57" }}>
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#2A2220] mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#6A5045] text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
