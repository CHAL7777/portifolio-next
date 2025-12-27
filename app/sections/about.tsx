"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Code2, MapPin } from "lucide-react"; // Install lucide-react if you haven't

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  return (
    <section id="about" className="py-28 px-6 md:px-12 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full" />
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Biography */}
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold mb-6">
            <Code2 size={16} />
            <span>Developer Story</span>
          </motion.div>

          <motion.h2 variants={fadeIn} className="text-4xl md:text-6xl font-black mb-8 text-slate-900 dark:text-white leading-tight">
            Engineering digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              experiences.
            </span>
          </motion.h2>
          
          <motion.p variants={fadeIn} className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
            I started coding to solve problems, but I stayed for the creativity. 
            Now, I build scalable web applications using the latest tech stack, 
            focusing on <span className="text-slate-900 dark:text-white font-semibold underline decoration-blue-500/30">performance, accessibility, and clean architecture.</span>
          </motion.p>
          
          {/* Stats Grid */}
          <motion.div variants={fadeIn} className="grid grid-cols-2 gap-4">
            <div className="group p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">3+</h3>
                  <p className="text-xs uppercase tracking-wider font-bold text-slate-500">Years XP</p>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
                  <Code2 size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">50+</h3>
                  <p className="text-xs uppercase tracking-wider font-bold text-slate-500">Projects</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Profile Image */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Main Image Wrapper */}
            <div className="relative h-[450px] md:h-[550px] w-full rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] group">
              <Image 
                src="/img/chala.jpg" 
                alt="Chala Portfolio Portrait"
                fill
                className="object-cover object-top transition-transform duration-1000 scale-105 group-hover:scale-100"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
              
              {/* Floating Location Tag */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-max">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-2.5 rounded-2xl text-white text-sm font-medium shadow-2xl">
                  <MapPin size={16} className="text-blue-400" />
                  Based in Ethiopia 🇪🇹
                </div>
              </div>
            </div>

            {/* Decorative Frame */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Floating Experience Badge (Optional Side Element) */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 top-20 z-20 hidden lg:flex flex-col items-center bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800"
          >
            <span className="text-xs font-bold text-blue-600 uppercase">Available</span>
            <span className="text-xs text-slate-500">For Projects</span>
            <div className="mt-2 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}