// components/investors/InvestorsCTA.tsx

export default function InvestorsCTA() {
  return (
    <section className="py-16 border-t border-[#C9B8AE] mt-8">
      <div className="mx-auto max-w-5xl px-6 text-center">

        {/* Label */}
        <div className="inline-block mb-4 px-4 py-1.5 
                        rounded-full text-sm font-medium 
                        bg-white/50 backdrop-blur-sm 
                        border border-[#C9B8AE] 
                        text-[#8C756B]">
          For Investors & Strategic Partners
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#2A2220] leading-tight">
          Explore the Future of Autonomous RCM Intelligence
        </h2>

        {/* Subheading */}
        <p className="max-w-2xl mx-auto mt-6 text-[#6A5045] text-lg leading-relaxed">
          Learn more about the MEDVOXA Engine, our product roadmap, 
          and how automation is reshaping a $60B healthcare market.
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
            Request Investor Brief
          </a>

          {/* Secondary CTA */}
          <a
            href="/contact"
            className="px-8 py-3 rounded-xl font-medium
                       border border-[#5A3A2E] text-[#5A3A2E]
                       hover:bg-[#5A3A2E] hover:text-white
                       transition-colors"
          >
            Schedule Investor Call
          </a>

        </div>

      </div>
    </section>
  );
}
