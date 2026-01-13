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
  Code2
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
      { label: "Core Web Vitals", value: "+25%" },
      { label: "Code Coverage", value: "85%" },
      { label: "PRs Merged", value: "50+" }
    ],
    skills: ["React", "JavaScript", "Git", "Figma"],
    active: false
  }
];

const languages = [
  { name: "English", level: "Professional Working Proficiency", score: 90 },
  { name: "Afaan Oromoo", level: "Native", score: 100 },
  { name: "Amharic", level: "Native", score: 100 }
];

export default function ExperiencePro() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative py-32 bg-slate-50 dark:bg-[#0B0F19] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="mb-24 md:text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Clock size={12} />
            <span>My Journey</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6"
          >
            Crafting digital solutions, <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">layer by layer.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* LEFT COLUMN: TIMELINE */}
          <div className="lg:col-span-7">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-12 flex items-center gap-3">
              <Code2 size={18} className="text-blue-500" />
              Work Experience
            </h3>

            <div className="relative border-l border-slate-200 dark:border-slate-800 ml-3 space-y-16">
              {experiences.map((exp, idx) => (
                <ExperienceCard key={idx} data={exp} index={idx} />
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: STICKY SIDEBAR */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-12 space-y-10">
              
              {/* Education Card */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl opacity-20 blur group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative p-8 rounded-3xl bg-white dark:bg-[#111625] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden">
                  
                  <div className="flex justify-between items-center mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider border border-blue-500/20">
                      <CheckCircle2 size={12} /> Student
                    </span>
                    <span className="font-mono text-xs text-slate-400">2023 — 2028</span>
                  </div>

                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">B.Sc. Software Engineering</h4>
                  <p className="text-slate-500 font-medium mb-8">Haramaya University</p>

                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                    <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                      <Trophy size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Academic Standing</p>
                      <p className="text-lg font-black text-slate-900 dark:text-white">3.6 / 4.0 CGPA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="p-8 rounded-3xl bg-white dark:bg-[#111625] border border-slate-100 dark:border-slate-800 shadow-sm">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Globe size={14} /> Communication
                </h3>
                <div className="space-y-6">
                  {languages.map((lang, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-bold text-slate-700 dark:text-slate-200">{lang.name}</span>
                        <span className="text-slate-400 text-xs">{lang.level}</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.score}%` }}
                          transition={{ duration: 1, delay: 0.2 * i }}
                          className="h-full bg-blue-600 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ data, index }) {
  return (
    <div className="relative pl-8 md:pl-12 py-2 group">
      <div className="absolute -left-[5px] top-3 h-[9px] w-[9px] rounded-full bg-slate-200 dark:bg-slate-800 group-hover:bg-blue-500 transition-colors duration-300 ring-4 ring-white dark:ring-[#0B0F19]" />
      
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative p-6 md:p-8 rounded-2xl bg-white dark:bg-[#111625] border border-slate-100 dark:border-slate-800 hover:border-blue-500/20 transition-all duration-300"
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
          <div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">{data.role}</h4>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm text-slate-500">
               <span className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                 <Briefcase size={14} className="text-blue-500"/> {data.company}
               </span>
               <span className="flex items-center gap-1.5">
                 <MapPin size={14}/> {data.location}
               </span>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 text-xs font-mono font-bold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
            {data.period}
          </span>
        </div>

        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
          {data.description}
        </p>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {data.metrics.map((m, i) => (
            <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
              <p className="text-lg md:text-xl font-black text-slate-900 dark:text-white">
                {m.value}
              </p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                {m.label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {data.skills.map((s, i) => (
            <span key={i} className="px-2.5 py-1 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] font-medium text-slate-600 dark:text-slate-400">
              {s}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}