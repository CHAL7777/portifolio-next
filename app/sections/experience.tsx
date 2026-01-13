"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { 
  Briefcase, 
  GraduationCap, 
  Globe, 
  Trophy, 
  Clock, 
  CheckCircle2, 
  MapPin, 
  Code2,
  Sparkles
} from "lucide-react";

// --- Data ---
const experiences = [
  {
    role: "Full Stack Developer",
    company: "Freelance / Open Source",
    period: "2023 — Present",
    location: "Remote",
    description: "Developing scalable web applications with a focus on type-safety and performance. Architected custom UI libraries and integrated secure authentication flows for various client projects.",
    metrics: [
      { label: "Lighthouse", value: "98/100" },
      { label: "Bundle Size", value: "-30%" },
      { label: "Features", value: "12+" }
    ],
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    active: true
  },
  {
    role: "Frontend Developer Intern",
    company: "Tech Solutions Inc.",
    period: "2022 — 2023",
    location: "Addis Ababa, ET",
    description: "Collaborated with the design team to implement responsive components. Optimized image loading strategies and refactored legacy state management using modern hooks.",
    metrics: [
      { label: "Vitals", value: "+25%" },
      { label: "Coverage", value: "85%" },
      { label: "PRs", value: "50+" }
    ],
    skills: ["React", "JavaScript", "Git", "Figma"],
    active: false
  }
];

const languages = [
  { name: "English", level: "Professional Proficiency", score: 90 },
  { name: "Afaan Oromoo", level: "Native", score: 100 },
  { name: "Amharic", level: "Native", score: 100 }
];

export default function ExperiencePro() {
  return (
    <section 
      id="experience" 
      className="relative py-32 bg-slate-50 dark:bg-slate-950 overflow-hidden scroll-mt-24"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Decorative Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-8"
        >
           <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">
             Career Timeline
           </span>
        </motion.div>
        
        {/* HEADER */}
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-[1.1] mb-6"
          >
            Experience <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 italic font-serif">History.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LEFT COLUMN: TIMELINE */}
          <div className="lg:col-span-7">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-12 flex items-center gap-3">
              <Sparkles size={14} className="text-blue-500" />
              Professional Path
            </h3>

            <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 space-y-16">
              {experiences.map((exp, idx) => (
                <ExperienceCard key={idx} data={exp} index={idx} />
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: STICKY SIDEBAR */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32 space-y-10">
              
              {/* Education Card */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] opacity-10 blur group-hover:opacity-20 transition duration-1000"></div>
                <div className="relative p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
                  
                  <div className="flex justify-between items-center mb-8">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
                      <CheckCircle2 size={12} /> Active Student
                    </span>
                    <span className="font-mono text-xs text-slate-400 font-bold">2023 — 2028</span>
                  </div>

                  <h4 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter">B.Sc. Software Engineering</h4>
                  <p className="text-slate-500 font-bold mb-10 flex items-center gap-2">
                    <MapPin size={16} /> Haramaya University
                  </p>

                  <div className="flex items-center gap-5 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                    <div className="p-4 rounded-xl bg-blue-500 text-white shadow-lg shadow-blue-500/20">
                      <Trophy size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Academic Standing</p>
                      <p className="text-2xl font-black text-slate-900 dark:text-white">3.6 / 4.0 CGPA</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Languages */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                  <Globe size={14} /> Languages
                </h3>
                <div className="space-y-8">
                  {languages.map((lang, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-3">
                        <span className="font-black text-slate-800 dark:text-slate-200 tracking-tight">{lang.name}</span>
                        <span className="text-slate-400 font-bold text-[10px] uppercase">{lang.level}</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800/50 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.score}%` }}
                          transition={{ duration: 1.5, delay: 0.2 + (i * 0.1), ease: "circOut" }}
                          className="h-full bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.3)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ data, index }) {
  return (
    <div className="relative pl-10 md:pl-16 py-2 group">
      {/* Dot on the timeline */}
      <div className="absolute -left-[9px] top-4 h-4 w-4 rounded-full bg-slate-200 dark:bg-slate-800 group-hover:bg-blue-600 group-hover:scale-125 transition-all duration-500 ring-4 ring-slate-50 dark:ring-slate-950 shadow-sm" />
      
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative p-8 md:p-10 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-blue-500/5"
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-8">
          <div>
            <h4 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter group-hover:text-blue-500 transition-colors">
              {data.role}
            </h4>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-3 text-sm">
               <span className="flex items-center gap-2 font-bold text-slate-600 dark:text-slate-300">
                 <Briefcase size={16} className="text-blue-500"/> {data.company}
               </span>
               <span className="flex items-center gap-2 text-slate-400 font-medium">
                 <MapPin size={16}/> {data.location}
               </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
             <span className="px-4 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-[10px] font-black text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 tracking-widest">
               {data.period}
             </span>
             {data.active && (
                <div className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </div>
             )}
          </div>
        </div>

        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10 font-medium text-lg">
          {data.description}
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {data.metrics.map((m, i) => (
            <div key={i} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800 group-hover:border-blue-500/10 transition-colors">
              <p className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tighter">
                {m.value}
              </p>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mt-1">
                {m.label}
              </p>
            </div>
          ))}
        </div>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2">
          {data.skills.map((s, i) => (
            <span key={i} className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-[10px] font-black text-slate-500 dark:text-slate-400 hover:text-blue-500 hover:border-blue-500/50 transition-all cursor-default uppercase tracking-widest">
              {s}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}