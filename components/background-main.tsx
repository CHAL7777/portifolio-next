"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function BackgroundMain() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[var(--background)] transition-colors duration-1000">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.54),transparent_42%)] dark:bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.08),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-0 mesh-overlay opacity-40 dark:opacity-30" />
      <div className="absolute inset-0 z-0 h-[200vh] w-full bg-grid-infinite pointer-events-none opacity-45" />

      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, 28, -16, 0],
                y: [0, -42, 18, 0],
                scale: [1, 1.08, 0.98, 1],
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[-8%] top-[-14%] h-[68vw] w-[68vw] rounded-full bg-[#135DCC]/14 blur-[120px] dark:bg-[#135DCC]/11"
      />

      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, -36, 28, 0],
                y: [0, 56, -34, 0],
                scale: [1, 0.9, 1.04, 1],
              }
        }
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-[68vw] w-[68vw] rounded-full bg-[#11B3D8]/11 blur-[138px] dark:bg-[#11B3D8]/10"
      />

      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, 20, -12, 0],
                y: [0, -22, 14, 0],
                scale: [1, 1.05, 0.94, 1],
              }
        }
        transition={{
          duration: 21,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.8,
        }}
        className="pointer-events-none absolute left-[28%] top-[38%] h-[42vw] w-[42vw] rounded-full bg-[#E39A31]/10 blur-[125px]"
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply dark:mix-blend-screen [background-image:radial-gradient(rgba(15,23,42,0.28)_0.6px,transparent_0.7px)] [background-size:5px_5px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(244,239,228,0.78)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,17,29,0.84)_100%)]" />
    </div>
  );
}
