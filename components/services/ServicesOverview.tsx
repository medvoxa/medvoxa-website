export default function ServicesOverview() {
  const items = [
    {
      title: "Front-End RCM",
      desc: "Eligibility, prior auth, scheduling accuracy, coverage validation, and demographic integrity checks.",
      icon: "🏥",
    },
    {
      title: "Mid-Cycle RCM",
      desc: "Coding, charge capture, claim preparation, correction logic, and payer-rule compliance.",
      icon: "⚙️",
    },
    {
      title: "Back-End RCM",
      desc: "Denials, appeals, AR follow-up, payment posting, and revenue recovery workflows.",
      icon: "📈",
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold text-[#2A2220] mb-8">
          Complete Revenue Cycle Coverage
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white/50 backdrop-blur-sm 
                         border border-[#C9B8AE] shadow-sm"
            >
              <div className="text-4xl mb-3" style={{ color: "#B87A57" }}>
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-[#2A2220] mb-2">
                {item.title}
              </h3>

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
