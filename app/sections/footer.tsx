"use client";

import { motion } from "framer-motion";
import { Github, Instagram, ArrowUpRight, Heart, Globe, MessageCircle } from "lucide-react";

// --- CUSTOM TELEGRAM ICON (Studio Style) ---
const TelegramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Archive", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative pt-40 pb-12 overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-500">
      
      {/* 1. VISUAL NOISE & GLOW LAYERS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Column 1: LARGE BRANDING (4 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-6xl font-black tracking-tighter dark:text-white"
              >
                CHAL<span className="text-blue-600">.</span>
              </motion.h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-sm">
                Designing systems, not just screens. Building high-performance digital products from Ethiopia to the world.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
               <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-950 bg-slate-200 dark:bg-slate-800" />
                  ))}
               </div>
               <p className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                 Trusted by 12+ Global Clients
               </p>
            </div>
          </div>

          {/* Column 2: NAVIGATION (3 Cols) */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Navigation</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="group flex items-center gap-2 text-2xl font-bold dark:text-white hover:text-blue-600 transition-colors">
                    {link.name}
                    <ArrowUpRight size={20} className="text-blue-600 scale-0 group-hover:scale-100 transition-transform" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: SOCIAL & CONNECT (4 Cols) */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Connect</h4>
            <div className="grid grid-cols-2 gap-4">
              <SocialButton icon={<Github size={20} />} label="GitHub" href="https://github.com/CHAL7777" />
              <SocialButton icon={<TelegramIcon size={20} />} label="Telegram" href="https://t.me/chaldev" />
              <SocialButton icon={<Instagram size={20} />} label="Instagram" href="https://instagram.com/chall781" />
              <SocialButton icon={<Globe size={20} />} label="Portfolio" href="#" />
            </div>
            
            <a href="mailto:hello@chal.dev" className="flex items-center justify-between p-6 bg-slate-50 dark:bg-white/5 rounded-3xl group hover:bg-blue-600 transition-all duration-500">
               <div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-white/70">Email me</p>
                 <p className="text-sm font-bold dark:text-white group-hover:text-white">chalagobena43@gmail.com</p>
               </div>
               <MessageCircle className="text-blue-600 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* BOTTOM BAR: Minimalist Information */}
        <div className="pt-12 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            <span>© {currentYear} Chal Dev</span>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
            <span className="flex items-center gap-1">Built with <Heart size={10} className="text-rose-500 fill-rose-500" /> in Addis</span>
          </div>
          
          <div className="flex items-center gap-8">
            <TechBadge label="Next.js 15" />
            <TechBadge label="Tailwind" />
            <TechBadge label="Framer" />
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- SUB-COMPONENTS ---

function SocialButton({ icon, label, href }: { icon: React.ReactNode, label: string, href: string }) {
  return (
    <a href={href} className="flex items-center gap-3 p-4 border border-slate-100 dark:border-white/5 rounded-2xl hover:border-blue-600/50 dark:hover:border-blue-500/50 transition-colors group">
      <span className="text-slate-400 group-hover:text-blue-600 transition-colors">{icon}</span>
      <span className="text-xs font-bold dark:text-white">{label}</span>
    </a>
  );
}

function TechBadge({ label }: { label: string }) {
  return (
    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500 dark:text-slate-500 hover:text-blue-600 transition-colors cursor-default">
      {label}
    </span>
  );
}