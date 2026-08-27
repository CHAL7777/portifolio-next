import { certificates, education, experiences } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import {
  BriefcaseBusiness,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  Handshake,
  ShieldCheck,
  Users,
} from "lucide-react";

const iconMap = {
  Work: BriefcaseBusiness,
  Freelance: Handshake,
  Internship: GraduationCap,
  Leadership: Users,
  Education: GraduationCap,
};

const timelineItems = [
  ...experiences,
  {
    type: "Education",
    role: education.degree,
    organization: education.institution,
    period: education.period,
    summary: `Coursework: ${education.coursework.join(", ")}.`,
    impact: education.achievements,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-band relative">
      <div className="site-shell relative z-10">
        <SectionHeading
          index="06"
          kicker="Growth & journey"
          title={
            <>
              Ownership built
              <br />
              through shipped work.
            </>
          }
          lede="Independent product building, client-style interfaces, internship practice, student team leadership, and formal software engineering education."
        />

        {/* Timeline as a ruled ledger */}
        <div className="mt-16 border-t border-[var(--line)]">
          {timelineItems.map((item, i) => {
            const Icon = iconMap[item.type as keyof typeof iconMap] ?? BriefcaseBusiness;
            return (
              <Reveal key={`${item.type}-${item.role}`} delay={i * 0.05}>
                <article className="grid gap-6 border-b border-[var(--line)] py-10 md:grid-cols-12 md:gap-10">
                  <div className="md:col-span-3">
                    <span className="meta-mono text-[var(--accent)]">{item.period}</span>
                    <p className="mt-3 inline-flex items-center gap-2">
                      <Icon size={13} className="text-[var(--muted)]" />
                      <span className="meta-mono">{item.type}</span>
                    </p>
                  </div>

                  <div className="md:col-span-9">
                    <h3 className="display-title text-2xl">{item.role}</h3>
                    <p className="meta-mono mt-2 text-[var(--ink-soft)]">{item.organization}</p>
                    <p className="body-copy mt-4 max-w-2xl text-sm">{item.summary}</p>
                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {item.impact.map((p) => (
                        <li key={p} className="flex gap-3 text-sm text-[var(--muted)]">
                          <CheckCircle2 size={14} className="mt-1 shrink-0 text-[var(--accent)]" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Credentials */}
        <Reveal delay={0.2}>
          <div className="mt-14">
            <p className="meta-mono inline-flex items-center gap-2">
              <ShieldCheck size={14} className="text-[var(--accent)]" />
              Certifications
            </p>
            <div className="mt-6 grid gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-3">
              {certificates.map((cert) => (
                <a
                  key={cert.credentialId}
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col bg-[var(--background)] p-6 transition-colors hover:bg-[var(--surface)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="meta-mono text-[var(--accent)]">{cert.track}</span>
                    <span className="meta-mono">{cert.date}</span>
                  </div>
                  <p className="display-title mt-4 text-base">{cert.title}</p>
                  <p className="body-copy mt-1 text-xs">{cert.issuer}</p>
                  <span className="meta-mono mt-4 inline-flex items-center gap-1.5 text-[var(--accent)] opacity-0 transition-opacity group-hover:opacity-100">
                    View credential <ExternalLink size={11} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
