"use client";

import { profile } from "@/app/data/portfolio";
import { Check, Clock, Copy, Github, Linkedin, Mail, MapPin, Send, Sparkles } from "lucide-react";
import type { FormEvent } from "react";
import { useRef, useState } from "react";

const contactEndpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "/api/contact";

const contactLinks = [
  { label: "GitHub", href: profile.links.github, Icon: Github },
  { label: "LinkedIn", href: profile.links.linkedin, Icon: Linkedin },
  { label: "Telegram", href: profile.links.telegram, Icon: Send },
];

const quickTopics = [
  "Full-Stack Web App",
  "Backend API & Database",
  "AI & RAG Pathfinder",
  "UI/UX Modernization",
  "Engineering Leadership",
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
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
      projectType: selectedTopic || String(formData.get("project_type") || ""),
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
      setSelectedTopic("");
      setStatus("success");
      window.setTimeout(() => setStatus("idle"), 3500);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-band bg-[var(--surface-alt)] relative overflow-hidden">
      <div className="site-shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr]">
          <div>
            <p className="section-kicker">Get in Touch</p>
            <h2 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-5xl font-black">
              Let&apos;s build something exceptional together.
            </h2>
            <p className="body-copy mt-5 text-lg leading-relaxed">
              If you have an idea, a product challenge, or a complex system you&apos;d like to launch, I&apos;d love to hear your story. Send the context that matters: what you are trying to make possible, who it serves, and key deadlines.
            </p>
            <p className="body-copy mt-3 text-lg leading-relaxed">
              I reply promptly with concrete ideas and next steps.
            </p>

            <div className="mt-8 grid gap-4">
              <button
                type="button"
                onClick={copyEmail}
                className="glass-card interactive-card flex items-center justify-between gap-4 p-4 text-left rounded-xl border border-[var(--line)] bg-[var(--surface)] shadow-sm transition-all hover:border-[var(--accent)] hover:shadow-md"
              >
                <div>
                  <span className="block text-xs font-black uppercase text-[var(--muted)]">Direct Email</span>
                  <span className="mt-1 block font-bold text-base text-[var(--ink)]">{profile.email}</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-1.5 text-xs font-bold text-[var(--ink)]">
                  {copied ? (
                    <>
                      <Check size={15} className="text-emerald-500" />
                      <span className="text-emerald-500">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={15} />
                      <span>Copy Email</span>
                    </>
                  )}
                </div>
              </button>

              <div className="grid gap-3 sm:grid-cols-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card interactive-card flex items-center justify-between gap-3 p-4 rounded-xl border border-[var(--line)] bg-[var(--surface)] text-sm font-black text-[var(--ink)] transition-all hover:border-[var(--accent)] hover:shadow-md"
                  >
                    {link.label}
                    <link.Icon size={16} className="text-[var(--accent)]" />
                  </a>
                ))}
              </div>

              <div className="glass-card flex items-center gap-3 p-4 rounded-xl border border-[var(--line)] bg-[var(--surface)] text-xs font-bold text-[var(--ink)]">
                <MapPin size={16} className="text-emerald-500 shrink-0" />
                <span>{profile.location}</span>
                <span className="h-3 w-px bg-[var(--line)]" />
                <Clock size={16} className="text-blue-400 shrink-0" />
                <span>{profile.timezone} (Remote friendly)</span>
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-6 md:p-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-xl">
            <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            
            {/* Quick Topic Chips */}
            <div className="mb-6">
              <label className="mb-2 block text-xs font-black uppercase tracking-wider text-[var(--muted)]">
                Select Project Type
              </label>
              <div className="flex flex-wrap gap-2">
                {quickTopics.map((topic) => {
                  const isSelected = selectedTopic === topic;
                  return (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setSelectedTopic(isSelected ? "" : topic)}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
                        isSelected
                          ? "bg-[var(--accent)] text-black shadow-md"
                          : "border border-[var(--line)] bg-[var(--surface-strong)] text-[var(--ink)] hover:border-[var(--accent)]"
                      }`}
                    >
                      {topic}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Name" name="name" type="text" placeholder="Your full name" />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" />
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Field
                label="Context / Goal"
                name="project_type"
                type="text"
                value={selectedTopic}
                onChange={(val) => setSelectedTopic(val)}
                placeholder="Role, project requirement, AI system..."
              />
              <Field label="Timeline" name="budget" type="text" placeholder="Immediate, 1-2 months, flexible..." />
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-xs font-black uppercase tracking-wider text-[var(--muted)]">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me what you are trying to build, what is unclear, and what a successful outcome looks like."
                className="input-field resize-y font-medium text-sm"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="button-base button-primary mt-6 w-full py-3.5 text-sm font-black tracking-wide"
            >
              {status === "loading" ? (
                "Sending message..."
              ) : (
                <>
                  <span>Send Message</span>
                  <Mail size={16} />
                </>
              )}
            </button>
            {status === "success" && (
              <div className="mt-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-3 text-center text-xs font-bold text-emerald-400">
                Message sent successfully! I will reply shortly.
              </div>
            )}
            {status === "error" && (
              <div className="mt-4 rounded-lg bg-red-500/10 border border-red-500/30 p-3 text-center text-xs font-bold text-red-400">
                Could not send message. Please email directly at {profile.email}
              </div>
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
  value,
  onChange,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (val: string) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-black uppercase tracking-wider text-[var(--muted)]">{label}</label>
      <input
        name={name}
        type={type}
        required
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="input-field text-sm font-medium"
      />
    </div>
  );
}

