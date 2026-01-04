"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Globe, Award, Trophy, Clock, CheckCircle2, Calendar, MapPin } from "lucide-react";

// --- Types ---
const experiences = [
  {
    role: "Full Stack Developer",
    company: "Freelance / Self-Employed",
    period: "2023 — Present",
    location: "Remote",
    description: "Architecting end-to-end solutions for international clients, focusing on conversion-optimized user flows and resilient backend systems.",
    metrics: [
      { label: "Client Projects", value: "10+" },
      { label: "Deployment Speed", value: "-60%" },
      { label: "User Base", value: "1k+" }
    ],
    skills: ["Next.js", "TypeScript", "Node.js", "AWS"],
    color: "blue"
  },
  {
    role: "Frontend Developer Intern",
    company: "Tech Solutions",
    period: "2022 — 2023",
    location: "Addis Ababa, ET",
    description: "Collaborated in an agile environment to modernize legacy UI/UX for enterprise-scale dashboard applications.",
    metrics: [
      { label: "Components Built", value: "20+" },
      { label: "Performance Boost", value: "+40%" },
      { label: "Team Size", value: "5+" }
    ],
    skills: ["React", "Redux", "Tailwind CSS", "Git"],
    color: "purple"
  }
];

export default function ExperiencePro() {
  const containerRef = useRef(null);
  
  return (
    <section id="experience" ref={containerRef} className="py-32 px-6 bg-white dark:bg-slate-950 transition-colors duration-500 relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-6"
          >
            <Clock size={14} className="text-blue-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">History & Credibility</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter">
            Milestones & <span className="text-blue-600">Growth</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* LEFT: INTERACTIVE TIMELINE (7 Columns) */}
          <div className="lg:col-span-7 relative">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-12 flex items-center gap-4">
              <Briefcase size={16} /> Professional Experience
            </h3>

            {/* THE TIMELINE LINE */}
            <div className="absolute left-4 top-20 bottom-0 w-[2px] bg-slate-100 dark:bg-slate-800">
               <motion.div 
                className="absolute top-0 left-0 w-full bg-blue-500 origin-top shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
               />
            </div>

            <div className="space-y-12 ml-12">
              {experiences.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* Timeline Node */}
                  <div className="absolute -left-[45px] top-1.5 h-6 w-6 rounded-full border-4 border-white dark:border-slate-950 bg-slate-200 dark:bg-slate-800 group-hover:bg-blue-500 transition-colors duration-500 shadow-xl" />
                  
                  <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all duration-500 shadow-sm">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                      <div>
                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">{exp.role}</h4>
                        <div className="flex items-center gap-4 mt-2 text-sm font-medium text-slate-500">
                           <span className="flex items-center gap-1.5"><Briefcase size={14}/> {exp.company}</span>
                           <span className="flex items-center gap-1.5"><MapPin size={14}/> {exp.location}</span>
                        </div>
                      </div>
                      <span className="px-4 py-1.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-600 dark:text-slate-400 whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                      {exp.description}
                    </p>

                    {/* Pro Metric Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {exp.metrics.map((m, i) => (
                        <div key={i} className="text-center p-3 rounded-2xl bg-white dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800">
                          <p className="text-lg font-black text-blue-600 dark:text-blue-400">{m.value}</p>
                          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-tighter">{m.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((s, i) => (
                        <span key={i} className="text-[10px] font-bold px-3 py-1 rounded-full bg-blue-500/5 text-blue-600 dark:text-blue-400 border border-blue-500/10">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: EDUCATION & LANGUAGES (5 Columns) */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* EDUCATION */}
            <div className="relative">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-8 flex items-center gap-4">
                <GraduationCap size={16} /> Academic Background
              </h3>
              <div className="relative p-8 rounded-[2.5rem] bg-gradient-to-br from-indigo-600 to-blue-700 text-white shadow-2xl overflow-hidden group">
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                   <GraduationCap size={120} />
                </div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1 rounded-lg bg-white/20 backdrop-blur-md text-[10px] font-bold">2023 — 2028</span>
                    <span className="flex items-center gap-1.5 text-xs font-bold bg-emerald-500/90 px-3 py-1 rounded-full">
                      <CheckCircle2 size={12}/> ACTIVE
                    </span>
                  </div>
                  <h4 className="text-2xl font-black mb-2 leading-tight">Bachelor of Software Engineering</h4>
                  <p className="text-blue-100 font-medium mb-6">Haramaya University</p>
                  
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                    <div>
                      <p className="text-[10px] uppercase font-bold opacity-70">Performance</p>
                      <p className="text-xl font-black">Above 3.5</p>
                    </div>
                    <Trophy size={24} className="text-amber-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* LANGUAGES */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-8 flex items-center gap-4">
                <Globe size={16} /> Linguistic Skills
              </h3>
              <div className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800">
                <div className="space-y-6">
                  {[
                    { name: "English", level: "Fluent / C2", p: 90 },
                    { name: "Afaan Oromoo", level: "Native", p: 100 },
                    { name: "Amharic", level: "Native", p: 100 }
                  ].map((l, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-end mb-2">
                        <div>
                          <p className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">{l.name}</p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase">{l.level}</p>
                        </div>
                        <span className="text-xs font-mono text-blue-500">{l.p}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${l.p}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
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