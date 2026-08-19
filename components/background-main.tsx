import StarfieldCanvas from "./starfield-canvas";

export default function BackgroundMain() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden bg-[var(--background)]">
      {/* ─── Starfield Canvas (fluid night sky with stars + nebula) ─── */}
      <StarfieldCanvas />

      {/* Aurora gradient orbs — deep space glow */}
      <div
        className="aurora-pulse absolute -left-[20%] -top-[20%] h-[60rem] w-[60rem] rounded-full opacity-[0.08]"
        style={{
          background: "radial-gradient(circle, rgba(0, 229, 255, 0.25), transparent 60%)",
          animation: "aurora-drift 22s ease-in-out infinite",
        }}
      />
      <div
        className="aurora-pulse absolute -right-[15%] top-[20%] h-[50rem] w-[50rem] rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.25), transparent 60%)",
          animation: "aurora-drift 28s ease-in-out infinite reverse",
          animationDelay: "-8s",
        }}
      />
      <div
        className="aurora-pulse absolute -bottom-[10%] left-[30%] h-[45rem] w-[45rem] rounded-full opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, rgba(255, 107, 107, 0.2), transparent 60%)",
          animation: "aurora-drift 25s ease-in-out infinite",
          animationDelay: "-14s",
        }}
      />

      {/* Noise texture overlay — film grain */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Edge vignette — cinematic darkening */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--background)_100%)]" />
    </div>
  );
}
