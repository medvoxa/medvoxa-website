export default function StoryBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">

      {/* Warm cocoa gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3E9E2] via-[#F8F4F1] to-[#FBFAF9]" />

      {/* Subtle warm saddle-brown vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(90,58,46,0.05)_0%,rgba(90,58,46,0.12)_75%,rgba(90,58,46,0.25)_100%)]" />

      {/* Film grain texture */}
      <div
        className="absolute inset-0 opacity-[0.18] mix-blend-soft-light"
        style={{ backgroundImage: "url('/grain.png')" }}
      />
    </div>
  );
}
