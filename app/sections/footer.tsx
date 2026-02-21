"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/CHAL7777", Icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/chala-gobena-01a22b346", Icon: Linkedin },
  { label: "Telegram", href: "https://t.me/chaldev", Icon: Send },
];

const stack = ["Next.js 16", "TypeScript", "Tailwind v4", "Framer Motion"];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const prefersReducedMotion = useReducedMotion();

  return (
    <footer className="relative overflow-hidden bg-white pb-12 pt-28 transition-colors duration-500 dark:bg-[#020617]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-[86%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#0EA5E9]/30 to-transparent" />
        <div className="absolute -left-20 bottom-0 h-[24rem] w-[24rem] rounded-full bg-[#0EA5E9]/12 blur-[120px]" />
        <div className="absolute -right-24 top-10 h-[28rem] w-[28rem] rounded-full bg-[#135DCC]/10 blur-[140px]" />
        <div className="absolute right-[14%] top-[30%] h-[18rem] w-[18rem] rounded-full bg-[#D19A2A]/10 blur-[110px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.04)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_28%,transparent_78%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
          className="mb-16 rounded-[2rem] border border-slate-200/80 bg-white/75 p-8 shadow-[0_25px_70px_-30px_rgba(2,6,23,0.32)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/65 md:p-10"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0EA5E9]/25 bg-[#0EA5E9]/12 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#135DCC] dark:text-[#7CC6FF]">
                <Sparkles size={12} />
                Ready to build
              </p>
              <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-900 dark:text-white md:text-4xl">
                Need a fast, modern product experience?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 md:text-base">
                I help teams design and ship polished web products with strong UX and measurable performance.
              </p>
            </div>

            <a
              href="mailto:chalagobena43@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-3.5 text-sm font-black uppercase tracking-[0.12em] text-white transition-all hover:-translate-y-1 hover:bg-[#135DCC] dark:bg-white dark:text-slate-900 dark:hover:bg-[#0EA5E9] dark:hover:text-white"
            >
              Start a Project
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>

        <div className="grid gap-14 pb-14 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <h3 className="text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              CHAL<span className="text-[#135DCC]">.</span>
            </h3>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Product-focused full-stack developer based in Ethiopia, building quality experiences from concept to
              launch.
            </p>

            <div className="mt-8 space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <p className="flex items-center gap-2">
                <MapPin size={16} />
                Addis Ababa, Ethiopia
              </p>
              <p className="flex items-center gap-2">
                <Clock3 size={16} />
                Typically replies within 12 hours
              </p>
              <a
                href="mailto:chalagobena43@gmail.com"
                className="inline-flex items-center gap-2 font-semibold text-slate-700 transition-colors hover:text-[#135DCC] dark:text-slate-300 dark:hover:text-[#7CC6FF]"
              >
                <Mail size={16} />
                chalagobena43@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="lg:col-span-3"
          >
            <p className="mb-5 text-[10px] font-black uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm font-bold text-slate-700 transition-colors hover:text-[#135DCC] dark:text-slate-300 dark:hover:text-[#7CC6FF]"
                  >
                    {link.label}
                    <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-4"
          >
            <p className="mb-5 text-[10px] font-black uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
              Connect
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-between rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-bold text-slate-700 transition-all hover:border-[#135DCC]/40 hover:text-[#135DCC] dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:text-[#7CC6FF]"
                >
                  <span>{social.label}</span>
                  <social.Icon size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-bold text-slate-700 transition-all hover:border-[#135DCC]/40 hover:text-[#135DCC] dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:text-[#7CC6FF]"
              >
                <span>Resume</span>
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-5 border-t border-slate-200/80 pt-8 dark:border-slate-800 md:flex-row md:items-center md:justify-between"
        >
          <p className="text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400">
            © {currentYear} Chala Gobena. Crafted with intent.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-slate-500 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-400"
              >
                {item}
              </span>
            ))}
          </div>
          <a
            href="#hero"
            className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-[0.14em] text-slate-500 transition-colors hover:text-[#135DCC] dark:text-slate-400 dark:hover:text-[#7CC6FF]"
          >
            Back to top
            <motion.span
              animate={prefersReducedMotion ? undefined : { y: [0, -2, 0] }}
              transition={prefersReducedMotion ? undefined : { duration: 1.4, repeat: Infinity }}
            >
              ↑
            </motion.span>
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
