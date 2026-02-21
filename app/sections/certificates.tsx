"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ExternalLink, X, Download, ShieldCheck, ChevronRight } from "lucide-react";

// --- 1. DEFINE TYPES ---
interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  image: string;
  color: string;
  link: string;
}

// --- 2. PROVIDE DATA ---
const certificates: Certificate[] = [
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "Udacity",
    date: "2025",
    credentialId: "UD-AI-9920",
    image: "/docs/ai.png", 
    color: "from-blue-600 to-indigo-600",
    link: "#"
  },
  {
    title: "Programming Fundamentals",
    issuer: "Udacity",
    date: "2025",
    credentialId: "UD-PROG-4412",
    image: "/docs/web.png",
    color: "from-purple-600 to-pink-600",
    link: "#"
  },
  {
    title: "Web Programming",
    issuer: "Hucisa",
    date: "2024",
    credentialId: "hu-web-2024",
    image: "/docs/web-h.jpg",
    color: "from-orange-500 to-yellow-500",
    link: "#"
  }
];

export default function CertificatesStudio() {
  // We initialize with 0 so there is always a preview visible on the right
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="py-40 px-6 bg-white dark:bg-[#020617] relative overflow-hidden">
      
      {/* BACKGROUND WATERMARK */}
      <div className="absolute top-20 left-0 text-[20vw] font-black text-slate-50 dark:text-white/[0.02] leading-none pointer-events-none select-none">
        PROOF
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col gap-6 mb-32">
           <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-600">Verification</span>
           </div>
           <h2 className="text-6xl md:text-[7vw] font-black tracking-tighter leading-[0.8] dark:text-white">
              CERTIFIED<br />ACHIEVEMENTS<span className="text-blue-600">.</span>
           </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-20 items-start">
          
          {/* LEFT: THE INTERACTIVE LIST */}
          <div className="lg:col-span-7 border-t border-slate-100 dark:border-white/5">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={() => setSelectedCert(cert)}
                className="group relative py-12 border-b border-slate-100 dark:border-white/5 cursor-pointer flex items-center justify-between"
              >
                <motion.div 
                   initial={false}
                   animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                   className="absolute inset-y-0 -left-6 -right-6 bg-slate-50 dark:bg-white/[0.02] -z-10 rounded-2xl transition-opacity"
                />

                <div className="flex items-center gap-8 relative z-10">
                  <span className="text-sm font-mono text-slate-400">0{index + 1}</span>
                  <div className="space-y-1">
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 relative z-10">
                   <div className="hidden md:block text-right mr-4">
                      <p className="text-[10px] font-black uppercase text-slate-400">Credential ID</p>
                      <p className="text-xs font-mono dark:text-slate-500">{cert.credentialId}</p>
                   </div>
                   <div className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all">
                      <ChevronRight size={20} />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: THE STICKY PREVIEW */}
          <div className="hidden lg:block lg:col-span-5 sticky top-40">
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-2xl">
               <AnimatePresence mode="wait">
                  <motion.div
                    key={hoveredIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image 
                      src={certificates[hoveredIndex].image}
                      alt="Certificate Preview"
                      fill
                      className="object-cover p-12 drop-shadow-2xl z-10"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t opacity-40 z-0 ${certificates[hoveredIndex].color}`} />
                  </motion.div>
               </AnimatePresence>
               
               <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl z-20">
                  <div className="flex items-center gap-3 text-white mb-2">
                    <ShieldCheck size={16} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Verified by Third Party</span>
                  </div>
                  <p className="text-white text-sm font-medium leading-tight">
                    This document serves as digital evidence of the mastery of {certificates[hoveredIndex].title} standards.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL POPUP */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-5xl w-full bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-5 h-full">
                <div className="md:col-span-3 bg-slate-100 dark:bg-black relative h-[300px] md:h-[600px]">
                  <Image src={selectedCert.image} alt={selectedCert.title} fill className="object-contain p-8" />
                </div>
                <div className="md:col-span-2 p-10 flex flex-col justify-between">
                  <div>
                    <button onClick={() => setSelectedCert(null)} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                      <X size={24} />
                    </button>
                    <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full mb-4 uppercase tracking-tighter">Official Document</div>
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">{selectedCert.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-8">Issued by {selectedCert.issuer} in {selectedCert.date}.</p>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl space-y-2">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Verification ID</p>
                      <p className="text-slate-900 dark:text-white font-mono text-sm">{selectedCert.credentialId}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-8">
                    <button className="flex-1 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2"><Download size={18} /> Download</button>
                    <a href={selectedCert.link} className="flex-1 py-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2">Verify <ExternalLink size={18} /></a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
