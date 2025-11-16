// components/investors/InvestorSolution.tsx

export default function InvestorSolution() {
  const items = [
    {
      title: "Self-Correcting RCM Engine",
      desc: "MEDVOXA continuously repairs, validates, and optimizes claims using real-time payer patterns and historical paid-data models — creating automation that compounds over time.",
      icon: "🤖",
    },
    {
      title: "Intelligence Layer for Payer Behavior",
      desc: "The engine learns payer rules, coverage logic, and ICD/CPT approval patterns at scale — enabling more accurate claim preparation than traditional rules-based systems.",
      icon: "🧠",
    },
    {
      title: "Automation Infrastructure for RCM",
      desc: "Instead of adding more human labor, MEDVOXA automates correction-heavy workflows end-to-end, reducing operational cost while unlocking revenue opportunities for providers.",
      icon: "⚙️",
    },
  ];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-[#2A2220] mb-8">
          The MEDVOXA Solution
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white/50 backdrop-blur-sm
                         border border-[#C9B8AE] shadow-sm"
            >
              {/* Icon */}
              <div className="text-4xl mb-3" style={{ color: "#B87A57" }}>
                {s.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#2A2220] mb-2">
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-[#6A5045] text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
