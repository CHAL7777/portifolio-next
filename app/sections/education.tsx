import { education } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { BookOpenCheck, GraduationCap, Trophy, CheckCircle2 } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section-band bg-[var(--surface-alt)] relative overflow-hidden">
      <div className="site-shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:items-start">
          <Reveal>
            <div>
              <p className="section-kicker">Academic Foundation</p>
              <h2 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-5xl">
                Computer Science & Engineering grounding.
              </h2>
              <p className="body-copy mt-5 text-lg leading-relaxed">
                Formal education in software fundamentals, data structures, algorithms, and object-oriented design.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="aurora-card group p-6 md:p-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-xl">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between border-b border-[var(--line)] pb-6">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 text-[var(--accent)] shadow-[0_0_20px_rgba(0,229,255,0.08)] group-hover:scale-105 transition-transform">
                    <GraduationCap size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--ink)] leading-tight">{education.degree}</h3>
                    <p className="mt-1 text-base font-semibold text-[var(--accent)]">{education.institution}</p>
                  </div>
                </div>
                <span className="inline-flex items-center rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-3.5 py-1 text-xs font-[family-name:var(--mono-font)] font-medium text-[var(--ink)] shrink-0">{education.period}</span>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <div className="flex items-center gap-2 text-sm font-bold text-[var(--ink)]">
                    <BookOpenCheck size={18} className="text-[var(--accent)]" /><span>Relevant Coursework</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {education.coursework.map((c) => (
                      <span key={c} className="rounded-lg border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-1.5 text-xs font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)]/30">{c}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm font-bold text-[var(--ink)]">
                    <Trophy size={18} className="text-[var(--accent-2)]" /><span>Academic Honors</span>
                  </div>
                  <ul className="mt-4 grid gap-3 text-xs md:text-sm font-medium text-[var(--muted)]">
                    {education.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" /><span className="leading-snug">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
