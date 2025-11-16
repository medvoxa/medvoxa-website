export default function ValueDelivery() {
  const values = [
    {
      title: "Reduce Denials",
      desc: "Fix errors before submission, accelerate approvals, and eliminate repeat-denial patterns.",
      icon: "📉",
    },
    {
      title: "Accelerate Payments",
      desc: "Cleaner claims mean faster reimbursements and predictable cash flow.",
      icon: "⏱️",
    },
    {
      title: "Lower Operational Cost",
      desc: "Automation reduces manual work, rework cycles, and dependence on large billing teams.",
      icon: "💰",
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-3xl font-bold text-[#2A2220] mb-8">
          Delivering Real Revenue Value
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {values.map((v, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white/50 backdrop-blur-sm 
                         border border-[#C9B8AE] shadow-sm"
            >
              <div className="text-4xl mb-3" style={{ color: "#B87A57" }}>
                {v.icon}
              </div>

              <h3 className="text-lg font-semibold text-[#2A2220] mb-2">
                {v.title}
              </h3>

              <p className="text-[#6A5045] text-sm leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
