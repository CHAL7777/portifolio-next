"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, MouseEvent, useMemo } from "react";
// Swapping SiVisualstudiocode for SiVsc or a stable Lucide icon
import { Terminal, Code2, Cpu, BarChart3 } from "lucide-react"; 
import { 
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiFramer, 
  SiNodedotjs, SiPostgresql, SiMongodb, SiPrisma, SiPython, 
  SiGithub, SiDocker, SiFigma, SiVercel
} from "react-icons/si";

// --- Data Structure (Defined outside for cleanliness) ---
const skillCategories = [
  {
    title: "Frontend Engineering",
    gradient: "from-blue-600 to-cyan-500",
    glow: "rgba(37, 99, 235, 0.2)",
    icon: <Code2 className="text-white text-xl" />,
    skills: [
      { name: "Next.js", level: 90, icon: SiNextdotjs, color: "#000000" },
      { name: "React", level: 95, icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", level: 85, icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind", level: 98, icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Framer", level: 80, icon: SiFramer, color: "#0055FF" },
    ],
  },
  {
    title: "Backend & Systems",
    gradient: "from-emerald-600 to-teal-500",
    glow: "rgba(16, 185, 129, 0.2)",
    icon: <Cpu className="text-white text-xl" />,
    skills: [
      { name: "Node.js", level: 85, icon: SiNodedotjs, color: "#339933" },
      { name: "PostgreSQL", level: 75, icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", level: 80, icon: SiMongodb, color: "#47A248" },
      { name: "Prisma", level: 70, icon: SiPrisma, color: "#2D3748" },
      { name: "Python", level: 65, icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    title: "Tools & DevOps",
    gradient: "from-purple-600 to-pink-500",
    glow: "rgba(168, 85, 247, 0.2)",
    icon: <Terminal className="text-white text-xl" />,
    skills: [
      { name: "GitHub", level: 90, icon: SiGithub, color: "#181717" },
      { name: "Docker", level: 60, icon: SiDocker, color: "#2496ED" },
      { name: "Figma", level: 75, icon: SiFigma, color: "#F24E1E" },
      { name: "Vercel", level: 90, icon: SiVercel, color: "#000000" },
    ],
  },
];

function PerspectiveCard({ children, glowColor }: { children: React.ReactNode, glowColor: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const springConfig = { damping: 25, stiffness: 150 };
  
  const x = useSpring(useMotionValue(0), springConfig);
  const y = useSpring(useMotionValue(0), springConfig);

  const rotateX = useTransform(y, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative h-full w-full rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-10 shadow-2xl transition-colors duration-500"
    >
      <div 
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition duration-500"
        style={{ background: `radial-gradient(600px circle at center, ${glowColor}, transparent 80%)` }}
      />
      <div style={{ transform: "translateZ(60px)" }} className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

export default function SkillsPro() {
  const categories = useMemo(() => skillCategories, []);

  return (
    <section className="py-32 px-6 bg-slate-50 dark:bg-slate-950 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-24 text-center">
          <h2 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter leading-none mb-4">
            Technical <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 italic font-serif">Arsenal.</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 perspective-[1500px]">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <PerspectiveCard glowColor={cat.glow}>
                <div className="flex items-center justify-between mb-12">
                  <h3 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-white">{cat.title}</h3>
                  <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center shadow-lg`}>
                    {cat.icon}
                  </div>
                </div>

                <div className="space-y-8">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="group/item">
                      <div className="flex justify-between items-end mb-3">
                        <div className="flex items-center gap-4">
                          <skill.icon style={{ color: skill.color }} className="text-lg" />
                          <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{skill.name}</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-blue-500">{skill.level}%</span>
                      </div>
                      <div className="h-1 w-full bg-slate-100 dark:bg-slate-800/50 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${cat.gradient}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </PerspectiveCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}