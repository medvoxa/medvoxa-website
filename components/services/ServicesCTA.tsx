export default function ServicesCTA() {
  return (
    <section className="py-16 border-t border-[#C9B8AE] mt-8">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <div className="inline-block mb-4 px-4 py-1.5 
                        rounded-full text-sm font-medium 
                        bg-white/50 backdrop-blur-sm 
                        border border-[#C9B8AE] text-[#8C756B]">
          Work With Us
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-[#2A2220]">
          Let’s Optimize Your Revenue Cycle
        </h2>

        <p className="max-w-2xl mx-auto mt-6 text-[#6A5045] text-lg leading-relaxed">
          Our team and automation engine work together to reduce denials, recover  
          revenue, and strengthen financial performance.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/contact"
            className="px-8 py-3 rounded-xl shadow-sm
                       bg-[#5A3A2E] text-white font-medium
                       hover:bg-[#7B5243] transition-colors"
          >
            Schedule a Consultation
          </a>
          <a
            href="/contact"
            className="px-8 py-3 rounded-xl font-medium
                       border border-[#5A3A2E] text-[#5A3A2E]
                       hover:bg-[#5A3A2E] hover:text-white
                       transition-colors"
          >
            Contact Our Team
          </a>
        </div>

      </div>
    </section>
  );
}
