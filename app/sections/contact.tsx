"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2, Clock3, Copy, Github, Send, Sparkles } from "lucide-react";

const contactLinks = [
  { label: "GitHub", href: "https://github.com/CHAL7777", Icon: Github },
  { label: "Telegram", href: "https://t.me/chaldev", Icon: Send },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/chala-gobena-01a22b346", Icon: ArrowUpRight },
];

export default function ContactStudio() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const copyEmail = async () => {
    await navigator.clipboard.writeText("chalagobena43@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState("loading");
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/xojavqep", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormState("success");
        formRef.current?.reset();
        setTimeout(() => setFormState("idle"), 4500);
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white px-6 py-32 transition-colors duration-500 dark:bg-[#020617]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute -left-24 top-[20%] h-[28rem] w-[28rem] rounded-full bg-[#0EA5E9]/12 blur-[130px]" />
      <div className="pointer-events-none absolute -right-24 bottom-[5%] h-[28rem] w-[28rem] rounded-full bg-[#135DCC]/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-[16%] top-[14%] h-[18rem] w-[18rem] rounded-full bg-[#D19A2A]/10 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#135DCC] dark:text-[#7CC6FF]"
        >
          <Sparkles size={14} />
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-4xl font-black leading-[1.06] tracking-tight text-slate-900 dark:text-white md:text-6xl"
        >
          Let&apos;s build something
          <span className="block bg-gradient-to-r from-[#135DCC] via-[#0EA5E9] to-[#D19A2A] bg-clip-text text-transparent">
            useful and beautiful.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ delay: 0.08 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg"
        >
          Share your project idea, timeline, or problem space. I&apos;ll reply with a clear next step and technical
          direction.
        </motion.p>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="space-y-6 lg:col-span-5">
            <motion.article
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-[2rem] border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/65"
            >
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                Availability
              </p>
              <p className="text-lg font-bold text-slate-900 dark:text-white">Open for new work in 2026</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Best for product design/engineering, full-stack implementation, and UI performance optimization.
              </p>
            </motion.article>

            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.06 }}
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-[2rem] border border-slate-200 bg-white/85 p-6 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/65"
            >
              <button
                type="button"
                onClick={copyEmail}
                className="group flex w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-left transition-colors hover:border-[#135DCC]/40 hover:bg-[#0EA5E9]/8 dark:border-slate-800 dark:bg-slate-950/70 dark:hover:bg-slate-900"
              >
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                    Email
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-800 dark:text-slate-100">
                    chalagobena43@gmail.com
                  </p>
                </div>
                {copied ? (
                  <CheckCircle2 size={18} className="text-emerald-500" />
                ) : (
                  <Copy size={18} className="text-slate-400 transition-colors group-hover:text-[#135DCC]" />
                )}
              </button>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition-all hover:border-[#135DCC]/40 hover:text-[#135DCC] dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:hover:text-[#7CC6FF]"
                  >
                    {link.label}
                    <link.Icon size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true, amount: 0.45 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-slate-500 dark:border-slate-800 dark:bg-slate-900/65 dark:text-slate-400"
            >
              <Clock3 size={13} />
              Typical response: within 12 hours
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7"
          >
            <div className="rounded-[2rem] border border-slate-200 bg-white/85 p-7 shadow-[0_25px_70px_-35px_rgba(19,93,204,0.28)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/65 md:p-9">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Name" name="name" type="text" placeholder="Your full name" />
                  <Field label="Email" name="email" type="email" placeholder="you@example.com" />
                </div>

                <Field label="Project Type" name="project_type" type="text" placeholder="Web app, redesign, dashboard..." />

                <div>
                  <label className="mb-2 block text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell me what you want to build, current stage, and timeline."
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-[#135DCC] dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-500"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={formState === "loading"}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-black uppercase tracking-[0.12em] text-white transition-all hover:bg-[#135DCC] disabled:opacity-60 dark:bg-white dark:text-slate-900 dark:hover:bg-[#0EA5E9] dark:hover:text-white"
                >
                  <AnimatePresence mode="wait">
                    {formState === "idle" && (
                      <motion.span
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="inline-flex items-center gap-2"
                      >
                        Send Message <Send size={15} />
                      </motion.span>
                    )}
                    {formState === "loading" && (
                      <motion.span
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        Sending...
                      </motion.span>
                    )}
                    {formState === "success" && (
                      <motion.span
                        key="success"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="inline-flex items-center gap-2 text-emerald-300 dark:text-emerald-500"
                      >
                        Message sent <CheckCircle2 size={15} />
                      </motion.span>
                    )}
                    {formState === "error" && (
                      <motion.span
                        key="error"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-rose-300 dark:text-rose-500"
                      >
                        Something went wrong
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-[#135DCC] dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-500"
      />
    </div>
  );
}
