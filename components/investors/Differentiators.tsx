// components/investors/Differentiators.tsx

export default function Differentiators() {
  const diffs = [
    {
      title: "Self-Correcting Intelligence",
      desc: "The engine improves autonomously with every processed claim — building a continuously evolving correction model that strengthens over time.",
      icon: "🔁",
    },
    {
      title: "Payer-Pattern Learning",
      desc: "MEDVOXA identifies payer behaviors, coverage tendencies, modifier preferences, and historical approval patterns — creating defensibility through learned behavior.",
      icon: "📘",
    },
    {
      title: "ICD/CPT Optimization Models",
      desc: "Our model analyzes past paid outcomes to predict optimal ICD–CPT combinations for clean claims — offering accuracy beyond rules-based RCM systems.",
      icon: "🧠",
    },
    {
      title: "Automation Infrastructure Layer",
      desc: "Instead of replacing billing software, MEDVOXA automates the correction layer that all RCM workflows depend on — making it irreplaceable across the stack.",
      icon: "⚙️",
    },
  ];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-[#2A2220] mb-8">
          Why MEDVOXA Will Win
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {diffs.map((d, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white/50 backdrop-blur-sm
                         border border-[#C9B8AE] shadow-sm"
            >
              {/* Icon */}
              <div className="text-4xl mb-3" style={{ color: "#B87A57" }}>
                {d.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#2A2220] mb-2">
                {d.title}
              </h3>

              {/* Description */}
              <p className="text-[#6A5045] text-sm leading-relaxed">
                {d.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
