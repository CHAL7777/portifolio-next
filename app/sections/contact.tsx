"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { Send, CheckCircle2, AlertCircle, Copy, Mail, ExternalLink, Clock, Zap, Sparkles } from "lucide-react";

// --- REUSABLE ICON COMPONENTS ---
const TelegramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
  </svg>
);

export default function ContactStudio() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText("chalagobena43@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch(`https://formspree.io/f/xojavqep`, {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setFormState("success");
        formRef.current?.reset();
        setTimeout(() => setFormState("idle"), 5000);
      } else { setFormState("error"); }
    } catch { setFormState("error"); }
  };

  return (
    <section id="contact" className="py-40 px-6 bg-white dark:bg-[#020617] relative overflow-hidden">
      {/* 1. STUDIO BACKGROUND ORNAMENTATION */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER: MASSIVE & BOLD */}
        <div className="flex flex-col gap-6 mb-32">
           <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-600">Get in Touch</span>
           </div>
           <h2 className="text-[10vw] lg:text-[8vw] font-black tracking-tighter leading-[0.8] dark:text-white">
              START A<br />CONVERSATION<span className="text-blue-600">.</span>
           </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-20">
          
          {/* LEFT: INFORMATION ARCHITECTURE (5 Cols) */}
          <div className="lg:col-span-5 space-y-16">
            
            <div className="space-y-6">
              <p className="text-2xl font-medium text-slate-500 dark:text-slate-400 leading-snug max-w-md">
                Currently taking on new projects for <span className="text-slate-900 dark:text-white font-bold">Q1 2026</span>.
              </p>
              
              <div className="flex items-center gap-3 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full w-fit">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Status: Accepting Work</span>
              </div>
            </div>

            {/* BENTO CONTACT CARDS */}
            <div className="grid gap-4">
              {/* Email Slot */}
              <button 
                onClick={copyEmail}
                className="group flex items-center justify-between p-8 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-[2rem] hover:bg-blue-600 transition-all duration-500 text-left"
              >
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-white/70 mb-2">Drop a line</p>
                  <p className="text-xl font-bold dark:text-white group-hover:text-white truncate">chalagobena43@gmail.com</p>
                </div>
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 group-hover:bg-white/20 text-blue-600 group-hover:text-white transition-colors">
                  {copied ? <CheckCircle2 size={20} /> : <Mail size={20} />}
                </div>
              </button>

              <div className="grid grid-cols-2 gap-4">
                <SocialLink href="https://github.com/CHAL7777" label="GitHub" icon={<GithubIcon />} />
                <SocialLink href="https://t.me/chaldev" label="Telegram" icon={<TelegramIcon />} />
              </div>
            </div>

            {/* TIMEZONE INSIGHT */}
            <div className="p-8 border-l-2 border-slate-100 dark:border-white/5 space-y-4">
               <div className="flex items-center gap-3 text-slate-400">
                  <Clock size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Addis Ababa, Ethiopia (GMT+3)</span>
               </div>
               <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                I typically respond within 12 hours. Best time to reach me is between 09:00 and 21:00 EAT.
               </p>
            </div>
          </div>

          {/* RIGHT: THE STUDIO FORM (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="relative p-8 md:p-16 bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 rounded-[3rem]">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-12">
                
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="group relative">
                    <input type="text" name="name" required placeholder=" " className="peer w-full bg-transparent border-b-2 border-slate-200 dark:border-white/10 py-4 outline-none focus:border-blue-600 dark:text-white transition-colors" />
                    <label className="absolute left-0 top-4 text-slate-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:font-black peer-focus:uppercase peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-black peer-[:not(:placeholder-shown)]:uppercase">Full Name</label>
                  </div>

                  <div className="group relative">
                    <input type="email" name="email" required placeholder=" " className="peer w-full bg-transparent border-b-2 border-slate-200 dark:border-white/10 py-4 outline-none focus:border-blue-600 dark:text-white transition-colors" />
                    <label className="absolute left-0 top-4 text-slate-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:font-black peer-focus:uppercase peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-black peer-[:not(:placeholder-shown)]:uppercase">Email Address</label>
                  </div>
                </div>

                <div className="group relative">
                  <textarea name="message" required rows={4} placeholder=" " className="peer w-full bg-transparent border-b-2 border-slate-200 dark:border-white/10 py-4 outline-none focus:border-blue-600 dark:text-white transition-colors resize-none" />
                  <label className="absolute left-0 top-4 text-slate-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:font-black peer-focus:uppercase peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-black peer-[:not(:placeholder-shown)]:uppercase">Project Details</label>
                </div>

                <button
                  type="submit"
                  disabled={formState !== "idle"}
                  className="w-full group relative flex items-center justify-between p-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black uppercase tracking-widest text-xs overflow-hidden transition-all active:scale-95 disabled:opacity-50"
                >
                  <AnimatePresence mode="wait">
                    {formState === "idle" && (
                      <>
                        <span>Submit Proposal</span>
                        <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                      </>
                    )}
                    {formState === "loading" && <span className="w-full text-center animate-pulse">Processing...</span>}
                    {formState === "success" && <span className="w-full text-center text-emerald-500">Proposal Received</span>}
                  </AnimatePresence>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- HELPER COMPONENTS ---

function SocialLink({ href, label, icon }: { href: string, label: string, icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" className="flex items-center justify-between p-6 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-[2rem] hover:border-blue-600 transition-colors group">
      <span className="text-slate-400 group-hover:text-blue-600 transition-colors">{icon}</span>
      <span className="text-xs font-black uppercase tracking-widest dark:text-white">{label}</span>
    </a>
  );
}

const GithubIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.011-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.627-5.373-12-12-12z"/></svg>;