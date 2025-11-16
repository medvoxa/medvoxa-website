// components/providers/PainPoints.tsx

export default function PainPoints() {
  const points = [
    {
      title: "Repetitive Denials",
      desc: "Too many denials caused by preventable coding, modifier, and coverage issues — overwhelming staff and slowing revenue.",
      icon: "⚠️",
    },
    {
      title: "Heavy Manual Correction Work",
      desc: "Teams spend hours fixing errors, adjusting ICDs, adding modifiers, and resubmitting claims — a workflow that never ends.",
      icon: "🛠️",
    },
    {
      title: "Changing Payer Rules",
      desc: "Payers constantly update coverage rules and requirements, making it difficult for practices to stay aligned and avoid rework.",
      icon: "🔄",
    },
    {
      title: "Slow Reimbursement Cycles",
      desc: "Even small issues delay payments by days or weeks — hurting cash flow and provider operations.",
      icon: "⏳",
    },
  ];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-[#2A2220] mb-8">
          Challenges Providers Face Every Day
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, i) => (
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
