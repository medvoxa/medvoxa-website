export default function AutomationHighlights() {
const auto = [
  {
    title: "Self-Correcting Claim Logic",
    desc: "The engine identifies errors, applies fixes, and learns from historical paid outcomes.",
    icon: "🔁",
  },
  {
    title: "Payer-Behavior Intelligence",
    desc: "Models track approval patterns, coverage tendencies, and denial signals.",
    icon: "🧠",
  },
  {
    title: "Workflow Automation",
    desc: "Automated handling of high-volume correction tasks and rule-based processes.",
    icon: "⚙️",
  },
];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-3xl font-bold text-[#2A2220] mb-8">
          Automation at the Core
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {auto.map((a, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white/50 backdrop-blur-sm 
                         border border-[#C9B8AE] shadow-sm"
            >
              <div className="text-4xl mb-3" style={{ color: "#B87A57" }}>
                {a.icon}
              </div>

              <h3 className="text-lg font-semibold text-[#2A2220] mb-2">
                {a.title}
              </h3>

              <p className="text-[#6A5045] text-sm leading-relaxed">
                {a.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
