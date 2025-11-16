// components/investors/TechOverview.tsx

export default function TechOverview() {
  const tech = [
    {
      title: "Autonomous Correction Engine",
      desc: "A workflow engine that detects, corrects, validates, and optimizes claims autonomously — applying payer-specific logic, modifier rules, and ICD refinements in real-time.",
      icon: "⚙️",
    },
    {
      title: "Payer Learning Models",
      desc: "Models trained to understand payer tendencies, approval patterns, coverage logic, historical denials, and LCD/NCD alignment — improving accuracy with every claim cycle.",
      icon: "📘",
    },
    {
      title: "ICD/CPT Optimization Intelligence",
      desc: "AI-driven prediction system that selects high-probability ICD–CPT combinations based on historical paid outcomes and real-time payer behaviors.",
      icon: "🧠",
    },
    {
      title: "Compliance-Safe Data Architecture",
      desc: "A PHI-minimalist design with encrypted pipelines, isolated processing, and complete audit trails — ensuring safety while enabling intelligent automation.",
      icon: "🔒",
    },
  ];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-[#2A2220] mb-8">
          Technology Built for Scale, Safety, and Accuracy
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tech.map((t, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white/50 backdrop-blur-sm
                         border border-[#C9B8AE] shadow-sm"
            >
              {/* Icon */}
              <div className="text-4xl mb-3" style={{ color: "#B87A57" }}>
                {t.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#2A2220] mb-2">
                {t.title}
              </h3>

              {/* Description */}
              <p className="text-[#6A5045] text-sm leading-relaxed">
                {t.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
