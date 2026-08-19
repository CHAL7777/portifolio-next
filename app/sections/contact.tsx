"use client";

import { profile } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { ArrowUpRight, CheckCircle2, Clock, Github, Linkedin, Mail, MapPin, Send, Sparkles, X } from "lucide-react";
import { useState } from "react";

const socials = [
  { label: "GitHub", href: profile.links.github, Icon: Github },
  { label: "LinkedIn", href: profile.links.linkedin, Icon: Linkedin },
  { label: "Telegram", href: profile.links.telegram, Icon: Send },
  { label: "Email", href: profile.links.email, Icon: Mail },
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
      if (!endpoint) throw new Error("Contact endpoint not configured.");
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: data.get("name"), email: data.get("email"), subject: data.get("subject"), message: data.get("message") }),
      });
      if (!res.ok) throw new Error(`Server returned ${res.status}`);
      setStatus("success");
      form.reset();
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-band relative overflow-hidden">
      <div className="site-shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
          <Reveal>
            <div>
              <p className="section-kicker">Let&apos;s Connect</p>
              <h2 className="display-title mt-4 text-4xl md:text-5xl">
                Let&apos;s build something worth shipping.
              </h2>
              <p className="body-copy mt-5 text-lg leading-relaxed">
                Looking for a full-stack engineer who cares about product quality? I&apos;m open to full-time roles, project collaborations, and meaningful conversations.
              </p>
              <div className="mt-8 grid gap-3 text-sm font-medium text-[var(--muted)]">
                <span className="inline-flex items-center gap-2.5"><MapPin size={16} className="text-[var(--accent)]" />{profile.location} • {profile.timezone}</span>
                <span className="inline-flex items-center gap-2.5"><Clock size={16} className="text-[var(--accent)]" />Usually responds within 24h</span>
                <span className="inline-flex items-center gap-2.5"><Sparkles size={16} className="text-[var(--accent)]" />Open to remote & hybrid roles</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target={s.href.startsWith("mailto:") ? undefined : "_blank"} rel={s.href.startsWith("mailto:") ? undefined : "noopener noreferrer"} className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]" aria-label={s.label}>
                    <s.Icon size={20} />
                  </a>
                ))}
              </div>
              <a href={profile.links.email} className="button-base button-secondary inline-flex items-center gap-2 mt-6 text-xs">
                <Mail size={14} /><span>Direct Email</span><ArrowUpRight size={13} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 md:p-8 shadow-[var(--shadow-soft)] backdrop-blur-2xl">
              <div className="border-b border-[var(--line)] pb-5">
                <h3 className="text-xl font-bold text-[var(--ink)]">Send a Message</h3>
                <p className="body-copy mt-1.5 text-sm">I&apos;ll get back to you within 24 hours.</p>
              </div>
              {status === "success" ? (
                <div className="mt-6 rounded-xl border border-[var(--accent)]/20 bg-[var(--accent)]/5 p-8 text-center">
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)]"><CheckCircle2 size={28} /></div>
                  <p className="text-lg font-bold text-[var(--ink)]">Message sent!</p>
                  <p className="body-copy mt-2 text-sm">I&apos;ll respond within 24 hours.</p>
                  <button type="button" onClick={() => setStatus("idle")} className="button-base button-secondary mt-6 text-xs">Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="text-xs font-semibold text-[var(--ink)]">Full Name</label>
                      <input id="contact-name" name="name" required className="input-field mt-2" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="text-xs font-semibold text-[var(--ink)]">Email Address</label>
                      <input id="contact-email" name="email" type="email" required className="input-field mt-2" placeholder="you@company.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="text-xs font-semibold text-[var(--ink)]">Subject</label>
                    <input id="contact-subject" name="subject" required className="input-field mt-2" placeholder="Collaboration, role, or idea" />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="text-xs font-semibold text-[var(--ink)]">Message</label>
                    <textarea id="contact-message" name="message" rows={5} required className="input-field mt-2 resize-none" placeholder="Tell me about your project or opportunity..." />
                  </div>
                  {status === "error" && (
                    <div className="flex items-center gap-2 rounded-xl border border-[var(--danger)]/30 bg-[var(--danger)]/5 p-3 text-xs font-medium text-[var(--danger)]"><X size={14} /><span>{errorMsg}</span></div>
                  )}
                  <button type="submit" disabled={status === "submitting"} className="button-base button-primary justify-center w-full text-sm disabled:opacity-60 disabled:cursor-not-allowed">
                    {status === "submitting" ? (<><span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />Sending...</>) : (<><Send size={16} />Send Message</>)}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
