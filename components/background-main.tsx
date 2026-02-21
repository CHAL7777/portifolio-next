"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function BackgroundMain() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-slate-50 transition-colors duration-1000 dark:bg-[#020617]">
      <div className="absolute inset-0 z-0 h-[200vh] w-full bg-grid-infinite pointer-events-none" />

      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, 40, -20, 0],
                y: [0, -60, 30, 0],
                scale: [1, 1.16, 0.94, 1],
              }
        }
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[-10%] top-[-15%] h-[70vw] w-[70vw] rounded-full bg-blue-400/20 blur-[100px] dark:bg-blue-600/10"
      />

      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, -50, 40, 0],
                y: [0, 80, -40, 0],
                scale: [1, 0.84, 1.1, 1],
              }
        }
        transition={{
          duration: 21,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-[70vw] w-[70vw] rounded-full bg-cyan-400/15 blur-[120px] dark:bg-cyan-500/10"
      />

      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: ["-100%", "200%"],
                opacity: [0, 0.2, 0],
              }
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          delay: 5,
        }}
        className="pointer-events-none absolute top-[30%] h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
      />

      <div className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay dark:opacity-[0.06] [background-image:radial-gradient(rgba(15,23,42,0.3)_0.6px,transparent_0.6px)] [background-size:3px_3px]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(248,250,252,0.6)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.72)_100%)]" />
    </div>
  );
}
