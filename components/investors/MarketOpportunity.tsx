// components/investors/MarketOpportunity.tsx

export default function MarketOpportunity() {
  const items = [
    {
      title: "$60B+ U.S. RCM Market",
      desc: "The revenue cycle management market is massive, growing, and largely manual — with denials and operational inefficiency creating billions in losses each year.",
      icon: "💵",
    },
    {
      title: "Automation-Ready Timing",
      desc: "Rising denial rates, labor shortages, and payer complexity have reached a breaking point — creating a rare AI adoption window across healthcare operations.",
      icon: "⏳",
    },
    {
      title: "Scalable AI Infrastructure",
      desc: "Once payer patterns and correction logic are learned, they scale across providers — creating compounding efficiency and strong structural defensibility.",
      icon: "📈",
    },
  ];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-[#2A2220] mb-8">
          A Massive and Rapidly Growing Market
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
