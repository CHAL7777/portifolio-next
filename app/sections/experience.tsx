import { experiences } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { BriefcaseBusiness, GraduationCap, Handshake, Users, CheckCircle2 } from "lucide-react";

const iconMap = { Work: BriefcaseBusiness, Freelance: Handshake, Internship: GraduationCap, Leadership: Users };

export default function Experience() {
  return (
    <section id="experience" className="section-band relative overflow-hidden">
      <div className="site-shell relative z-10">
        {/* Centered header */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="section-kicker">Experience & Journey</p>
            <h2 className="display-title mt-4 text-4xl md:text-5xl">
              Ownership built through shipped work.
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="body-copy mx-auto mt-5 max-w-2xl text-lg">
              My experience is a mix of independent product building, client-style interfaces, internship practice, and student team leadership.
            </p>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-14 max-w-4xl grid gap-6">
          {/* Timeline line */}
          <div className="absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px md:block" aria-hidden="true" style={{ background: "linear-gradient(to bottom, var(--accent), var(--accent-2), transparent)" }} />

          {experiences.map((item, i) => {
            const Icon = iconMap[item.type as keyof typeof iconMap] ?? BriefcaseBusiness;
            return (
              <Reveal key={`${item.type}-${item.role}`} delay={i * 0.06}>
                <article className="group relative rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-2xl transition-colors hover:border-[var(--line-strong)] md:ml-14">
                  <div className="absolute -left-[3.85rem] top-6 hidden h-11 w-11 items-center justify-center rounded-xl border border-[var(--accent)] bg-[var(--surface-solid)] text-[var(--accent)] shadow-[0_0_20px_rgba(0,229,255,0.1)] md:flex">
                    <Icon size={18} />
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-1 text-xs font-medium text-[var(--ink)]">{item.type}</span>
                      <h3 className="mt-3 text-2xl font-bold text-[var(--ink)] leading-tight">{item.role}</h3>
                      <p className="mt-1 text-sm font-semibold text-[var(--accent)]">{item.organization}</p>
                    </div>
                    <span className="inline-flex items-center rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-1 text-xs font-[family-name:var(--mono-font)] font-medium text-[var(--muted)]">{item.period}</span>
                  </div>
                  <p className="body-copy mt-4 text-sm leading-relaxed">{item.summary}</p>
                  <div className="mt-5 border-t border-[var(--line)] pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] font-[family-name:var(--mono-font)]">Impact Signals</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.impact.map((p) => (
                        <span key={p} className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--line)] bg-[var(--surface-strong)] px-2.5 py-1 text-xs font-medium text-[var(--ink)]">
                          <CheckCircle2 size={13} className="text-[var(--accent)]" />{p}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
