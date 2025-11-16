export default function CoreModules() {
  const modules = [
    {
      title: "Eligibility Verification",
      desc: "Real-time coverage checks and pre-visit validations to prevent avoidable denials.",
      icon: "🧾",
    },
    {
      title: "Medical Coding",
      desc: "ICD, CPT, and modifiers applied with payer-informed accuracy and automated error detection.",
      icon: "📘",
    },
    {
      title: "Claim Scrubbing",
      desc: "Automated correction logic, LCD/NCD alignment, and denial-prevention workflows.",
      icon: "🩺",
    },
    {
      title: "Claim Submission",
      desc: "Clean claim preparation with payer-specific formatting and validation.",
      icon: "🚀",
    },
    {
      title: "Denial Management",
      desc: "Automated categorization, correction pathways, specialized appeals, and payer-pattern insights.",
      icon: "⚠️",
    },
    {
      title: "AR Follow-Up",
      desc: "Focused revenue recovery, timely resubmissions, and intelligent workpriortization.",
      icon: "📞",
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-3xl font-bold text-[#2A2220] mb-8">
          Core Revenue Cycle Modules
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white/50 backdrop-blur-sm 
                         border border-[#C9B8AE] shadow-sm"
            >
              <div className="text-4xl mb-3" style={{ color: "#B87A57" }}>
                {m.icon}
              </div>

              <h3 className="text-lg font-semibold text-[#2A2220] mb-2">
                {m.title}
              </h3>

              <p className="text-[#6A5045] text-sm leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
