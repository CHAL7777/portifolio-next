import { education } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { BookOpenCheck, GraduationCap, Trophy } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section-band bg-[var(--surface-alt)]">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr]">
          <Reveal>
            <div>
              <p className="section-kicker">Education</p>
              <h2 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-6xl">
                Academic foundation for software engineering.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="glass-card p-5 md:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--ink)] text-[var(--ink-contrast)]">
                    <GraduationCap size={22} />
                  </div>
                  <h3 className="mt-5 text-2xl font-black text-[var(--ink)]">{education.degree}</h3>
                  <p className="mt-2 font-bold text-[var(--muted)]">{education.institution}</p>
                </div>
                <span className="tag">{education.period}</span>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <div className="flex items-center gap-2 text-sm font-black text-[var(--ink)]">
                    <BookOpenCheck size={18} className="text-[var(--accent)]" />
                    Relevant coursework
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {education.coursework.map((course) => (
                      <span key={course} className="tag">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-sm font-black text-[var(--ink)]">
                    <Trophy size={18} className="text-[var(--accent-4)]" />
                    Academic achievements
                  </div>
                  <ul className="mt-4 grid gap-3 text-sm text-[var(--muted)]">
                    {education.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-3)]" />
                        {achievement}
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
