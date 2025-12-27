"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Award, ExternalLink, X, Download, ShieldCheck } from "lucide-react";

const certificates = [
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
    title: "Data Structures & Algorithms",
    issuer: "LeetCode",
    date: "2024",
    credentialId: "LC-DSA-777",
    image: "/certs/leetcode-cert.jpg",
    color: "from-orange-500 to-yellow-500",
    link: "#"
  }
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  return (
    <section id="certificates" className="py-32 px-6 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 dark:text-white">
              Verified <span className="text-blue-600">Expertise</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              A curated collection of professional certifications and academic achievements.
            </p>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-2 text-blue-600 font-bold text-sm bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full">
            <ShieldCheck size={18} />
            Verified Credentials
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-8 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-8 text-white shadow-xl rotate-3 group-hover:rotate-0 transition-transform duration-500`}>
                <Award size={28} />
              </div>

              <div className="space-y-2 mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium">
                  {cert.issuer} • {cert.date}
                </p>
                <code className="text-[10px] text-slate-400 dark:text-slate-600 font-mono">
                  ID: {cert.credentialId}
                </code>
              </div>
              
              <button 
                onClick={() => setSelectedCert(cert)}
                className="w-full py-4 bg-white dark:bg-slate-800 rounded-2xl text-sm font-bold text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-900 hover:text-white dark:hover:bg-blue-600 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                View Credential <ExternalLink size={14} />
              </button>
            </motion.div>
          ))}
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
                {/* Image Area */}
                <div className="md:col-span-3 bg-slate-100 dark:bg-black relative h-[300px] md:h-[600px]">
                  <Image 
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    fill
                    className="object-contain p-8"
                  />
                </div>
                
                {/* Details Area */}
                <div className="md:col-span-2 p-10 flex flex-col justify-between">
                  <div>
                    <button 
                      onClick={() => setSelectedCert(null)}
                      className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <X size={24} />
                    </button>
                    
                    <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full mb-4 uppercase tracking-tighter">
                      Official Document
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
                      {selectedCert.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-8">
                      Issued by {selectedCert.issuer} in {selectedCert.date}. This credential verifies completion of the curriculum and mastery of the subject matter.
                    </p>
                    
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl space-y-2">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Verification ID</p>
                      <p className="text-slate-900 dark:text-white font-mono">{selectedCert.credentialId}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <button className="flex-1 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2">
                      <Download size={18} /> Download
                    </button>
                    <a href={selectedCert.link} className="flex-1 py-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
                       Verify <ExternalLink size={18} />
                    </a>
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