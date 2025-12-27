"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackgroundMain() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-slate-50 dark:bg-[#020617] transition-colors duration-1000">
      
      {/* 1. THE 3D SCROLLING GRID */}
      <div className="absolute inset-0 z-0 h-[200vh] w-full bg-grid-infinite pointer-events-none" />

      {/* 2. INFINITE FLOATING BLOBS (Aurora Effect) */}
      {/* Blob A: Blue/Cyan */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -60, 30, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-15%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-blue-400/20 dark:bg-blue-600/10 blur-[100px] pointer-events-none"
      />

      {/* Blob B: Purple/Indigo */}
      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 80, -40, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-purple-400/20 dark:bg-purple-600/10 blur-[120px] pointer-events-none"
      />

      {/* 3. LIGHT STREAKS (Fast moving highlights) */}
      <motion.div
        animate={{
          x: ["-100%", "200%"],
          opacity: [0, 0.2, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          delay: 5
        }}
        className="absolute top-[30%] w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent pointer-events-none"
      />

      {/* 4. HIGH-END TEXTURE (Film Grain) */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* 5. VIGNETTE (Keeps focus on content) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(248,250,252,0.6)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.7)_100%)] pointer-events-none" />
    </div>
  );
}