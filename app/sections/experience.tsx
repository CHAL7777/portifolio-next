import { experiences } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { BriefcaseBusiness, GraduationCap, Handshake, Users, CheckCircle2 } from "lucide-react";

const iconMap = {
  Work: BriefcaseBusiness,
  Freelance: Handshake,
  Internship: GraduationCap,
  Leadership: Users,
};

export default function Experience() {
  return (
    <section id="experience" className="section-band bg-[var(--background)] relative overflow-hidden">
      <div className="site-shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr]">
          <Reveal>
            <div>
              <p className="section-kicker">Experience & Journey</p>
              <h2 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-5xl font-black">
                Ownership built through shipped work.
              </h2>
              <p className="body-copy mt-5 text-lg leading-relaxed">
                My experience is a mix of independent product building, client-style interfaces, internship practice, and student team leadership. The common thread is taking unclear work and making it usable.
              </p>
            </div>
          </Reveal>

          <div className="relative grid gap-6">
            {/* Timeline Line */}
            <div className="absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-0.5 bg-[var(--line)] md:block" aria-hidden="true" />
            
            {experiences.map((item, index) => {
              const Icon = iconMap[item.type as keyof typeof iconMap] ?? BriefcaseBusiness;

              return (
                <Reveal key={`${item.type}-${item.role}`} delay={index * 0.06}>
                  <article className="glass-card interactive-card group relative rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-md transition-all hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-xl md:ml-14">
                    {/* Timeline Node Badge */}
                    <div className="absolute -left-[3.85rem] top-6 hidden h-11 w-11 items-center justify-center rounded-xl border border-[var(--accent)] bg-[#0d0f0d] text-[var(--accent)] shadow-lg transition-transform group-hover:scale-110 md:flex">
                      <Icon size={18} />
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-1 text-xs font-bold text-[var(--ink)]">
                          {item.type}
                        </span>
                        <h3 className="mt-3 text-2xl font-black text-[var(--ink)] leading-tight">{item.role}</h3>
                        <p className="mt-1 text-sm font-bold text-[var(--accent)]">{item.organization}</p>
                      </div>
                      <span className="inline-flex items-center rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-1 text-xs font-mono font-bold text-[var(--muted)]">
                        {item.period}
                      </span>
                    </div>

                    <p className="body-copy mt-4 text-sm leading-relaxed">{item.summary}</p>

                    <div className="mt-5 border-t border-[var(--line)] pt-4">
                      <p className="text-xs font-black uppercase tracking-wider text-[var(--muted)]">Impact Signals</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.impact.map((point) => (
                          <span
                            key={point}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--line)] bg-[var(--surface-strong)] px-2.5 py-1 text-xs font-bold text-[var(--ink)]"
                          >
                            <CheckCircle2 size={13} className="text-emerald-400" />
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

