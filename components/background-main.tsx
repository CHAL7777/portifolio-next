/**
 * The drafting field: a ruled technical grid with a single warm focus pool.
 * Pure CSS — no canvas loop, no rAF, no animation cost.
 */
export default function BackgroundMain() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-50 overflow-hidden bg-[var(--background)]"
    >
      {/* Ruled grid, fading toward the edges so content always leads */}
      <div
        className="blueprint-field absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 32%, #000 20%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 32%, #000 20%, transparent 78%)",
        }}
      />

      {/* A single pool of light behind the fold — the only "glow" on the site */}
      <div
        className="absolute left-1/2 top-[-20rem] h-[48rem] w-[80rem] -translate-x-1/2 opacity-[0.14]"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--accent) 0%, transparent 62%)",
          filter: "blur(130px)",
        }}
      />
    </div>
  );
}

