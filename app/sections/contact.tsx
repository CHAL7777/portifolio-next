"use client";

import { profile } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          projectType: data.get("subject"),
          message: data.get("message"),
          company: data.get("company"),
          source: "portfolio-contact-form",
        }),
      });
      const result = await res.json().catch(() => null);
      if (!res.ok || !result?.ok) {
        throw new Error(result?.error || `Server returned ${res.status}`);
      }
      setStatus("success");
      form.reset();
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-band relative">
      <div className="site-shell relative z-10">
        <SectionHeading
          index="08"
          kicker="Let’s connect"
          title={
            <>
              Let&apos;s build something
              <br />
              worth shipping.
            </>
          }
          lede="Looking for a full-stack engineer who cares about product quality? I&rsquo;m open to full-time roles, project collaborations, and meaningful conversations."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:items-start lg:gap-16">
          <Reveal>
            <div>
              <dl className="grid gap-5 border-t border-[var(--line)] pt-6">
                <div className="flex items-center gap-3">
                  <MapPin size={14} className="text-[var(--accent)]" />
                  <span className="meta-mono text-[var(--ink-soft)]">
                    {profile.location} — {profile.timezone}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={14} className="text-[var(--accent)]" />
                  <span className="meta-mono text-[var(--ink-soft)]">Responds within 24h</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles size={14} className="text-[var(--accent)]" />
                  <span className="meta-mono text-[var(--ink-soft)]">Remote &amp; hybrid</span>
                </div>
              </dl>

              <div className="mt-8 flex flex-wrap gap-1 border-t border-[var(--line)] pt-6">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={s.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-[3px] text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                    aria-label={s.label}
                  >
                    <s.Icon size={18} />
                  </a>
                ))}
              </div>

              <a href={profile.links.email} className="rule-link mt-6">
                <Mail size={13} /> Direct email <ArrowUpRight size={13} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="drafted p-6 md:p-8">
              <div className="flex items-baseline justify-between border-b border-[var(--line)] pb-5">
                <h3 className="display-title text-2xl">Send a message</h3>
                <span className="meta-mono">Form 01</span>
              </div>
              {status === "success" ? (
                <div className="mt-8 border-l border-[var(--accent)] pl-5">
                  <CheckCircle2 size={22} className="text-[var(--accent)]" />
                  <p className="display-title mt-4 text-xl">Message sent.</p>
                  <p className="body-copy mt-2 text-sm">I&apos;ll respond within 24 hours.</p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="button-base button-secondary mt-6"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
                  <div className="absolute left-[-9999px]" aria-hidden="true">
                    <label htmlFor="contact-company">Company</label>
                    <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
                  </div>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="meta-mono">Full name</label>
                      <input id="contact-name" name="name" required className="input-field mt-2" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="meta-mono">Email address</label>
                      <input id="contact-email" name="email" type="email" required className="input-field mt-2" placeholder="you@company.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="meta-mono">Subject</label>
                    <input id="contact-subject" name="subject" required className="input-field mt-2" placeholder="Collaboration, role, or idea" />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="meta-mono">Message</label>
                    <textarea id="contact-message" name="message" rows={5} required className="input-field mt-2 resize-none" placeholder="Tell me about your project or opportunity…" />
                  </div>
                  {status === "error" && (
                    <div className="flex items-center gap-2 border-l border-[var(--danger)] py-2 pl-4 text-xs text-[var(--danger)]">
                      <X size={14} />
                      <span>{errorMsg}</span>
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="button-base button-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "submitting" ? (
                      <>
                        <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send message
                      </>
                    )}
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
