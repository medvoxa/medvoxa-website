// components/home/Testimonials.tsx

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "MEDVOXA reduced our denial volume dramatically. The autonomous corrections saved our billing team hours every day.",
      author: "Practice Manager (OB/GYN Group)",
      icon: "💬",
    },
    {
      quote:
        "The revenue uplift was immediate. Within weeks, we saw missed opportunities recovered that our team didn't even know existed.",
      author: "RCM Director (Multi-Specialty Clinic)",
      icon: "📈",
    },
    {
      quote:
        "What impressed us most was the compliance-first design. Every automated correction had a clear audit trail.",
      author: "Compliance Lead (Hospital System)",
      icon: "🛡️",
    },
  ];

  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-[#2A2220] mb-12">
          What Our Partners Say
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white/50 backdrop-blur-sm
                         border border-[#C9B8AE] shadow-sm"
            >
              {/* Icon */}
              <div className="text-4xl mb-4" style={{ color: "#B87A57" }}>
                {t.icon}
              </div>

              {/* Quote */}
              <p className="text-[#6A5045] leading-relaxed mb-4">
                “{t.quote}”
              </p>

              {/* Author */}
              <p className="text-[#2F2723] font-medium">{t.author}</p>
            </div>
          ))}
        </div>

        {/* Placeholder CTA for future case studies */}
        <div className="text-center mt-14">
          <a
            href="#"
            className="px-6 py-2 rounded-xl text-sm 
                       border border-[#5A3A2E] text-[#5A3A2E]
                       hover:bg-[#5A3A2E] hover:text-white
                       transition-colors"
          >
            Case Studies Coming Soon
          </a>
        </div>

      </div>
    </section>
  );
}
