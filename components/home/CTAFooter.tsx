// components/home/CTAFooter.tsx

export default function CTAFooter() {
  return (
    <section className="py-14 mt-10 border-t border-[#C9B8AE]">
      <div className="mx-auto max-w-5xl px-6 text-center">

        {/* Label */}
        <div className="inline-block mb-4 px-4 py-1.5 
                        rounded-full text-sm font-medium 
                        bg-white/50 backdrop-blur-sm 
                        border border-[#C9B8AE] 
                        text-[#8C756B]">
          Ready to Move Forward?
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#2A2220] leading-tight">
          Build Your Autonomous Revenue Cycle With MEDVOXA
        </h2>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto mt-6 text-[#6A5045] text-lg leading-relaxed">
          Transform your workflows, reduce denials, and accelerate revenue using the 
          first self-correcting RCM engine designed for real-world providers.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          {/* Primary CTA */}
          <a
            href="#contact"
            className="px-8 py-3 rounded-xl shadow-sm
                       bg-[#5A3A2E] text-white font-medium
                       hover:bg-[#7B5243] transition-colors"
          >
            Get a Demo
          </a>

          {/* Secondary CTA */}
          <a
            href="/contact"
            className="px-8 py-3 rounded-xl font-medium
                       border border-[#5A3A2E] text-[#5A3A2E]
                       hover:bg-[#5A3A2E] hover:text-white
                       transition-colors"
          >
            Talk to Us
          </a>

        </div>

      </div>
    </section>
  );
}
