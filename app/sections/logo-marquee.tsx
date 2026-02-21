"use client";

import { motion } from "framer-motion";
import { 
  Framer, 
  Github, 
  Database, 
  Cpu, 
  Globe, 
  Zap,
  Code2,
  Layers
} from "lucide-react";

const logos = [
  { name: "GitHub", icon: <Github size={24} />, color: "hover:text-white" },
  { name: "Framer", icon: <Framer size={24} />, color: "hover:text-purple-400" },
  { name: "Vercel", icon: <Zap size={24} />, color: "hover:text-blue-400" },
  { name: "PostgreSQL", icon: <Database size={24} />, color: "hover:text-cyan-400" },
  { name: "Architecture", icon: <Cpu size={24} />, color: "hover:text-emerald-400" },
  { name: "Scalability", icon: <Globe size={24} />, color: "hover:text-blue-500" },
  { name: "TypeScript", icon: <Code2 size={24} />, color: "hover:text-blue-400" },
  { name: "Workflow", icon: <Layers size={24} />, color: "hover:text-orange-400" },
];

export default function LogoMarqueePro() {
  // Triple the array to ensure no gaps on very wide screens
  const marqueeItems = [...logos, ...logos, ...logos];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 relative overflow-hidden">
      {/* SECTION HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col items-center text-center">
           <div className="h-px w-12 bg-blue-500 mb-6" />
           <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">
             Powering my development workflow
           </h3>
        </div>
      </div>

      {/* MARQUEE CONTAINER */}
      <div className="relative flex overflow-hidden group">
        {/* Pro CSS Masking for Smooth Fading Edges */}
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-white via-transparent to-white dark:from-slate-950 dark:to-slate-950" />

        <motion.div
          className="flex flex-nowrap shrink-0 gap-20 py-4"
          animate={{ x: [0, "-33.33%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
          // Dynamic speed on hover: instead of pausing, we can slow it down
          style={{ animationPlayState: 'running' }}
        >
          {marqueeItems.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center gap-6 group/item cursor-pointer"
            >
              {/* Icon Container with dynamic glow */}
              <div className={`
                relative w-14 h-14 rounded-2xl flex items-center justify-center 
                bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800
                transition-all duration-500 group-hover/item:border-transparent 
                group-hover/item:shadow-[0_0_30px_rgba(59,130,246,0.2)]
                ${logo.color} text-slate-400 dark:text-slate-600
              `}>
                {logo.icon}
                {/* Subtle internal glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-current opacity-0 group-hover/item:opacity-5 blur-md transition-opacity" />
              </div>

              {/* Text with high contrast reveal */}
              <span className="text-2xl font-black text-slate-200 dark:text-slate-900 uppercase tracking-tighter transition-colors duration-500 group-hover/item:text-slate-900 dark:group-hover/item:text-slate-200">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Subtle Bottom Border */}
      <div className="max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent mt-20" />
    </section>
  );
}
