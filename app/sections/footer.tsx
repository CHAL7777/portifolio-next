"use client";

import { motion } from "framer-motion";
import { Github, Instagram, ArrowUpRight, Heart, Send } from "lucide-react"; // Swapped Telegram for Send

// Custom Telegram SVG since Lucide doesn't have it
const TelegramIcon = ({ size = 18 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <Github size={18} />, href: "https://github.com/CHAL7777", name: "GitHub" },
    { icon: <TelegramIcon size={18} />, href: "https://t.me/chaldev", name: "Telegram" },
    { icon: <Instagram size={18} />, href: "https://instagram.com/chall781", name: "Instagram" },
  ];

  return (
    <footer className="relative z-10 pt-24 pb-12 mt-20 border-t border-slate-200/60 dark:border-slate-800/60 bg-white/30 dark:bg-slate-950/30 backdrop-blur-2xl transition-all duration-500">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Branding */}
          <div className="lg:col-span-1 space-y-6">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent inline-block cursor-default"
            >
              Chal.
            </motion.span>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
              Full-stack developer specializing in building exceptional digital experiences. Based in Ethiopia, working worldwide.
            </p>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for new projects
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="space-y-6">
            <h4 className="text-slate-900 dark:text-white font-bold uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group gap-1 text-sm font-medium">
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div className="space-y-6">
            <h4 className="text-slate-900 dark:text-white font-bold uppercase tracking-widest text-xs">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-slate-600 dark:text-slate-400 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: CTA */}
          <div className="space-y-6">
            <h4 className="text-slate-900 dark:text-white font-bold uppercase tracking-widest text-xs">Work with me</h4>
            <div className="p-6 bg-blue-600 rounded-[2rem] text-white shadow-xl shadow-blue-600/20 group">
              <p className="text-sm font-medium mb-4 opacity-90 group-hover:opacity-100 transition-opacity">
                Got a project in mind? Let's turn your vision into reality.
              </p>
              <a href="#contact" className="inline-block px-5 py-2 bg-white text-blue-600 rounded-xl text-xs font-black uppercase tracking-wide hover:scale-105 transition-transform active:scale-95">
                Start a Conversation
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200/40 dark:border-slate-800/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-500 font-medium">
            © {currentYear} Built with <Heart size={12} className="inline text-rose-500 animate-pulse" /> by Chal Dev.
          </p>
          
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Next.js 15</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Tailwind CSS</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}