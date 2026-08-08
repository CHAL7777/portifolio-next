import { education } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { Award, BookOpenCheck, GraduationCap, School, Trophy, CheckCircle2 } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section-band bg-[var(--surface-alt)] relative overflow-hidden">
      <div className="site-shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:items-start">
          <Reveal>
            <div>
              <p className="section-kicker">Academic Foundation</p>
              <h2 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-5xl font-black">
                Computer Science & Engineering grounding.
              </h2>
              <p className="body-copy mt-5 text-lg leading-relaxed">
                Formal education in software fundamentals, data structures, algorithms, network architecture, and object-oriented design principles.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="glass-card interactive-card group p-6 md:p-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-xl transition-all hover:border-[var(--accent)]">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between border-b border-[var(--line)] pb-6">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[var(--accent)] bg-[var(--surface-strong)] text-[var(--accent)] shadow-md group-hover:scale-105 transition-transform">
                    <GraduationCap size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-[var(--ink)] leading-tight">{education.degree}</h3>
                    <p className="mt-1 text-base font-bold text-[var(--accent)]">{education.institution}</p>
                  </div>
                </div>
                <span className="inline-flex items-center rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-3.5 py-1 text-xs font-mono font-bold text-[var(--ink)] shadow-sm shrink-0">
                  {education.period}
                </span>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <div className="flex items-center gap-2 text-sm font-black text-[var(--ink)]">
                    <BookOpenCheck size={18} className="text-emerald-400" />
                    <span>Relevant Coursework</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {education.coursework.map((course) => (
                      <span
                        key={course}
                        className="rounded-lg border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-1.5 text-xs font-bold text-[var(--ink)]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-sm font-black text-[var(--ink)]">
                    <Trophy size={18} className="text-amber-400" />
                    <span>Academic Honors & Roles</span>
                  </div>
                  <ul className="mt-4 grid gap-3 text-xs md:text-sm font-medium text-[var(--muted)]">
                    {education.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{achievement}</span>
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

