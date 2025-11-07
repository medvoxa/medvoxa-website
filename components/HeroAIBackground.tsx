export default function HeroAIBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <img
        src="/hero/ai-flow.svg"
        alt=""
        className="w-[160%] max-w-none rotate-0 translate-y-12 animate-flow"
      />

      <style jsx>{`
        @keyframes flow {
          0% { transform: translateY(12px) rotate(0deg); }
          50% { transform: translateY(0px) rotate(0.4deg); }
          100% { transform: translateY(12px) rotate(0deg); }
        }
        .animate-flow {
          animation: flow 7s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
