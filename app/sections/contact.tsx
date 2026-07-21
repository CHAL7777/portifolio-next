"use client";

import { profile } from "@/app/data/portfolio";
import { Check, Copy, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import type { FormEvent } from "react";
import { useRef, useState } from "react";

const contactEndpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "/api/contact";

const contactLinks = [
  { label: "GitHub", href: profile.links.github, Icon: Github },
  { label: "LinkedIn", href: profile.links.linkedin, Icon: Linkedin },
  { label: "Telegram", href: profile.links.telegram, Icon: Send },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = profile.links.email;
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      projectType: String(formData.get("project_type") || ""),
      budget: String(formData.get("budget") || ""),
      message: String(formData.get("message") || ""),
      company: String(formData.get("company") || ""),
      source: "portfolio",
    };

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      formRef.current?.reset();
      setStatus("success");
      window.setTimeout(() => setStatus("idle"), 3500);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-band bg-[var(--surface-alt)]">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr]">
          <div>
            <p className="section-kicker">Contact</p>
            <h2 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-4xl">
              Great software starts with understanding the problem.
            </h2>
            <p className="body-copy mt-5 text-lg">
              If you have an idea, a challenge, or a product you&apos;d like to build, I&apos;d be glad to hear
              your story. Send the context that matters: what you are trying to make possible, who it serves,
              and where the current friction lives.
            </p>
            <p className="body-copy mt-4 text-lg">
              I&apos;ll reply with practical next questions, not a generic pitch.
            </p>

            <div className="mt-8 grid gap-3">
              <button
                type="button"
                onClick={copyEmail}
                className="glass-card interactive-card flex items-center justify-between gap-4 p-4 text-left"
              >
                <span>
                  <span className="block text-xs font-black uppercase text-[var(--muted)]">Email</span>
                  <span className="mt-1 block font-bold text-[var(--ink)]">{profile.email}</span>
                </span>
                {copied ? <Check size={18} className="text-[var(--accent-3)]" /> : <Copy size={18} />}
              </button>

              <div className="grid gap-3 sm:grid-cols-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card interactive-card flex items-center justify-between gap-3 p-4 text-sm font-black text-[var(--ink)]"
                  >
                    {link.label}
                    <link.Icon size={16} />
                  </a>
                ))}
              </div>

              <div className="glass-card flex items-center gap-3 p-4 text-sm font-bold text-[var(--ink)]">
                <MapPin size={18} className="text-[var(--accent)]" />
                {profile.location} - Remote-friendly - {profile.timezone}
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-5 md:p-6">
            <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Name" name="name" type="text" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Field label="Context" name="project_type" type="text" placeholder="Role, product, system, AI workflow..." />
              <Field label="Timeline" name="budget" type="text" placeholder="ASAP, this month, flexible..." />
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-xs font-black uppercase text-[var(--muted)]">Message</label>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Tell me what you are trying to build, what is unclear, and what a good outcome would look like."
                className="input-field resize-y"
              />
            </div>
            <button type="submit" disabled={status === "loading"} className="button-base button-primary mt-5 w-full">
              {status === "loading" ? "Sending..." : "Send message"}
              <Mail size={16} />
            </button>
            {status === "success" && <p className="mt-3 text-sm font-bold text-[var(--accent-3)]">Message sent.</p>}
            {status === "error" && (
              <p className="mt-3 text-sm font-bold text-[var(--danger)]">
                Could not send through the form. Email me directly at {profile.email}.
              </p>
            )}
          </form>
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
      <label className="mb-2 block text-xs font-black uppercase text-[var(--muted)]">{label}</label>
      <input name={name} type={type} required placeholder={placeholder} className="input-field" />
    </div>
  );
}
