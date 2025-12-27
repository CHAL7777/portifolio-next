"use client";
import { motion } from "framer-motion";
import { 
  Framer, 
  Github, 
  Slack, 
  Trello, 
  Database, 
  Cpu, 
  Globe, 
  Zap,
  Code2
} from "lucide-react";

// Mock data for your tech partners or tools
const logos = [
  { name: "GitHub", icon: <Github size={28} /> },
  { name: "Framer", icon: <Framer size={28} /> },
  { name: "Deployment", icon: <Zap size={28} /> },
  { name: "Database", icon: <Database size={28} /> },
  { name: "Architecture", icon: <Cpu size={28} /> },
  { name: "Global", icon: <Globe size={28} /> },
  { name: "System", icon: <Code2 size={28} /> },
  { name: "Workflow", icon: <Slack size={28} /> },
];

export default function LogoMarquee() {
  // We double the array to ensure a seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-20 bg-[#020617] overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6 mb-12 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
          Trusted Tools & Technologies
        </p>
      </div>

      <div className="relative flex max-w-[100vw] overflow-hidden">
        {/* Left and Right Fades for smooth entry/exit */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#020617] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#020617] to-transparent z-10" />

        <motion.div
          className="flex flex-nowrap shrink-0 gap-16"
          animate={{
            x: [0, "-50%"],
          }}
          transition={{
            duration: 30, // Adjust speed here
            ease: "linear",
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }} // Optional: pause on hover
        >
          {duplicatedLogos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all duration-300">
                {logo.icon}
              </div>
              <span className="text-xl font-black text-slate-700 dark:text-slate-800 uppercase tracking-tighter group-hover:text-slate-400 transition-colors">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}