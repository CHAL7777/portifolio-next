import { experiences } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { BriefcaseBusiness, GraduationCap, Handshake, Users } from "lucide-react";

const iconMap = {
  Work: BriefcaseBusiness,
  Freelance: Handshake,
  Internship: GraduationCap,
  Leadership: Users,
};

export default function Experience() {
  return (
    <section id="experience" className="section-band bg-[var(--background)]">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr]">
          <Reveal>
            <div>
              <p className="section-kicker">Experience</p>
              <h2 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-4xl">
                Ownership built through shipped work.
              </h2>
              <p className="body-copy mt-5 text-lg">
                My experience is a mix of independent product building, client-style interfaces, internship
                practice, and student team leadership. The common thread is taking unclear work and making it
                usable.
              </p>
            </div>
          </Reveal>

          <div className="relative grid gap-5">
            <div className="absolute left-5 top-0 hidden h-full w-px bg-[var(--line)] md:block" aria-hidden="true" />
            {experiences.map((item, index) => {
              const Icon = iconMap[item.type as keyof typeof iconMap] ?? BriefcaseBusiness;

              return (
                <Reveal key={`${item.type}-${item.role}`} delay={index * 0.06}>
                  <article className="glass-card interactive-card relative p-5 md:ml-12 md:p-6">
                    <div className="absolute -left-[3.25rem] top-6 hidden h-10 w-10 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--surface-solid)] text-[var(--accent)] md:flex">
                      <Icon size={18} />
                    </div>
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <span className="tag">{item.type}</span>
                        <h3 className="mt-4 text-2xl font-black text-[var(--ink)]">{item.role}</h3>
                        <p className="mt-1 text-sm font-bold text-[var(--muted)]">{item.organization}</p>
                      </div>
                      <p className="text-sm font-black text-[var(--accent)]">{item.period}</p>
                    </div>
                    <p className="body-copy mt-4">{item.summary}</p>
                    <div className="mt-5">
                      <p className="text-sm font-black text-[var(--ink)]">Impact signals</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.impact.map((point) => (
                          <span key={point} className="tag">
                            {point}
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
      </div>
    </section>
  );
}
