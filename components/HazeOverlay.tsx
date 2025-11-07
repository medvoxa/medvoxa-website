export default function HazeOverlay() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.55] mix-blend-soft-light"
      style={{
        background:
          "radial-gradient(circle at 50% 20%, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.25) 35%, rgba(255,255,255,0.05) 70%, rgba(0,0,0,0.15) 100%)"
      }}
    />
  );
}
