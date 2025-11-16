// components/providers/ProvidersCTA.tsx

export default function ProvidersCTA() {
  return (
    <section className="py-16 border-t border-[#C9B8AE] mt-8">
      <div className="mx-auto max-w-5xl px-6 text-center">

        {/* Label */}
        <div className="inline-block mb-4 px-4 py-1.5 
                        rounded-full text-sm font-medium 
                        bg-white/50 backdrop-blur-sm 
                        border border-[#C9B8AE] 
                        text-[#8C756B]">
          Ready to Elevate Your RCM?
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#2A2220] leading-tight">
          Transform Your Revenue Cycle With Autonomous Accuracy
        </h2>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto mt-6 text-[#6A5045] text-lg leading-relaxed">
          Reduce denials, accelerate reimbursements, and eliminate manual claim work 
          with an AI engine designed specifically for real-world provider operations.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          {/* Primary CTA */}
          <a
            href="/contact"
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
            Talk to Our RCM Expert
          </a>

        </div>

      </div>
    </section>
  );
}
