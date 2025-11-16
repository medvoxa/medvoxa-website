// components/home/SecuritySection.tsx

export default function SecuritySection() {
  const items = [
    {
      title: "HIPAA-Ready Infrastructure",
      desc: "All PHI is processed within strict HIPAA-aligned controls, encrypted in transit and at rest, and isolated using secure data boundaries.",
      icon: "🔒",
    },
    {
      title: "Complete Audit Trails",
      desc: "Every autonomous correction, claim edit, and validation action is logged with full traceability for compliance, reviews, and payer audits.",
      icon: "📜",
    },
    {
      title: "PHI-Minimalist Design",
      desc: "The MEDVOXA Engine processes only the data required for accurate automation — reducing exposure, improving safety, and protecting providers.",
      icon: "🛡️",
    },
  ];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-[#2A2220] mb-12">
          Enterprise-Grade Security & Compliance
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white/50 backdrop-blur-sm 
                         border border-[#C9B8AE] shadow-sm"
            >
              {/* Icon */}
              <div className="text-4xl mb-4" style={{ color: "#B87A57" }}>
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#2A2220] mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#6A5045] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
