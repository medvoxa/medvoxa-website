// components/investors/MarketPain.tsx

export default function MarketPain() {
  const pains = [
    {
      title: "Rising Denial Rates",
      desc: "Denials have increased 20–30% in the last five years, overwhelming billing teams and slowing provider revenue systems.",
      icon: "📉",
    },
    {
      title: "Severe RCM Labor Shortage",
      desc: "Health systems cannot hire or retain enough RCM talent to keep up with payer complexity, driving cost and burnout.",
      icon: "👥",
    },
    {
      title: "High Operational Costs",
      desc: "Billions are spent each year on manual correction, appeals, and rework — a process that scales poorly and inefficiently.",
      icon: "💸",
    },
    {
      title: "Growing Payer Complexity",
      desc: "Coverage rules, LCDs/NCDs, and payer-specific logic update constantly — too fast for human-only workflows to follow.",
      icon: "⚡",
    },
    {
      title: "Fragmented Tech Stack",
      desc: "Most RCM tools are reactive, fragmented, and lack real automation — creating inefficiency across the entire workflow.",
      icon: "🔧",
    },
    {
      title: "Unsustainable Manual Processes",
      desc: "RCM still relies heavily on human review and repetitive correction tasks — making accuracy and scale impossible.",
      icon: "♻️",
    },
  ];

  return (
    <section id="market" className="py-12">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-[#2A2220] mb-8">
          A Market Struggling to Keep Up
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pains.map((p, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white/50 backdrop-blur-sm
                         border border-[#C9B8AE] shadow-sm"
            >
              {/* Icon */}
              <div className="text-4xl mb-3" style={{ color: "#B87A57" }}>
                {p.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#2A2220] mb-2">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-[#6A5045] text-sm leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
