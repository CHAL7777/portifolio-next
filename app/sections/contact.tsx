"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Copy, Mail, ExternalLink } from "lucide-react";

const icons = {
  github: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.011-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.627-5.373-12-12-12z"/>,
  telegram: <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.891 8.11l-1.92 9.041c-.145.639-.522.796-1.057.496l-2.924-2.154-1.411 1.358c-.156.156-.287.287-.588.287l.21-2.977 5.418-4.894c.235-.21-.051-.326-.366-.117l-6.696 4.217-2.885-.901c-.627-.196-.64-.627.13-.927l11.272-4.346c.522-.19 1.004.145.817.96z"/>,
  leetcode: <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-4.32 4.244a1.09 1.09 0 0 0 0 1.556 1.131 1.131 0 0 0 1.578 0l3.511-3.453 2.31 2.307c.059.058.118.118.182.174l3.356 2.956a1.241 1.241 0 0 1 0 1.848l-3.356 2.956-.182.174-2.31 2.307-3.511-3.453a1.131 1.131 0 0 0-1.578 0 1.09 1.09 0 0 0 0 1.556l4.32 4.245a1.374 1.374 0 0 0 1.947 0l9.997-9.804a1.241 1.241 0 0 0 0-1.848L14.444.414A1.374 1.374 0 0 0 13.483 0zm-8.85 7.16a1.131 1.131 0 0 0-1.577 0l-3.04 2.984a1.241 1.241 0 0 0 0 1.848l9.996 9.8a1.374 1.374 0 0 0 1.948 0l3.04-2.984a1.09 1.09 0 0 0 0-1.556 1.131 1.131 0 0 0-1.577 0l-2.254 2.214-8.283-8.124 2.254-2.214z"/>,
  instagram: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
};

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);
  
  // Directly use the endpoint ID you provided
  const formspreeId = "xojavqep";

  const copyEmail = () => {
    navigator.clipboard.writeText("chalagobena43@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    { name: "GitHub", url: "https://github.com/CHAL7777", icon: icons.github, color: "hover:text-[#333]" },
    { name: "Telegram", url: "https://t.me/chaldev", icon: icons.telegram, color: "hover:text-[#0088cc]" },
    { name: "LeetCode", url: "https://leetcode.com/u/chal7777/", icon: icons.leetcode, color: "hover:text-[#FFA116]" },
    { name: "Instagram", url: "https://instagram.com/chall781", icon: icons.instagram, color: "hover:text-[#E4405F]" },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: formData,
        headers: { 
          'Accept': 'application/json' 
        }
      });

      // Formspree returns a 200 OK if successful
      if (response.ok) {
        setFormState("success");
        form.reset(); // Clear the form
        // Return to idle state after 5 seconds
        setTimeout(() => setFormState("idle"), 5000);
      } else {
        // If the status code is not in the 200 range
        setFormState("error");
      }
    } catch (error) {
      // If there is a network error
      setFormState("error");
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-5 gap-16">
          
          {/* Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-12"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                Let's build <br />
                <span className="text-blue-600">something </span> 
                great.
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-sm">
                Have an idea? I'm currently available for new projects and collaborations.
              </p>
            </div>

            <div className="space-y-6">
              <div className="group relative p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center gap-4 mb-2 text-slate-400">
                  <Mail size={20} />
                  <span className="text-xs font-bold uppercase tracking-widest">Email Address</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <a href="mailto:chalagobena43@gmail.com" className="text-lg font-semibold text-slate-900 dark:text-white hover:text-blue-600 transition-colors truncate">
                    chalagobena43@gmail.com
                  </a>
                  <button 
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-blue-600 transition-colors"
                  >
                    {copied ? <CheckCircle2 size={18} className="text-green-500" /> : <Copy size={18} />}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {socials.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-slate-600 dark:text-slate-400 transition-all hover:border-blue-500 hover:bg-blue-50/50 group"
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24" height="20" width="20" className={`transition-colors ${social.color}`}>
                      {social.icon}
                    </svg>
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 ml-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:text-white transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="yourname@example.com"
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:text-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:text-white transition-all resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={formState !== "idle"}
                  className="w-full relative overflow-hidden group py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all active:scale-[0.98] disabled:opacity-80"
                >
                  <AnimatePresence mode="wait">
                    {formState === "idle" && (
                      <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center justify-center gap-2">
                        Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </motion.div>
                    )}
                    {formState === "loading" && (
                      <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      </motion.div>
                    )}
                    {formState === "success" && (
                      <motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-2">
                        Sent Successfully <CheckCircle2 size={18} />
                      </motion.div>
                    )}
                    {formState === "error" && (
                      <motion.div key="error" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-2 text-red-200">
                        Error Occurred <AlertCircle size={18} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}