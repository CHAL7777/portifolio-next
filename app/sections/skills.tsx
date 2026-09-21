import { skillGroups } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";

export default function Skills() {
  return (
    <section id="skills" className="section-band scroll-mt-16" aria-labelledby="skills-title">
      <div className="site-shell">
        <SectionHeading
          index="03"
          kicker="Stack"
          id="skills-title"
          title="Tools I reach for, grouped by where they sit."
          lede="No percentage bars. These are the technologies I've shipped with — each one appears in at least one project on this page."
        />

        <div className="mt-12 grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-2 lg:mt-16 xl:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={Math.min(i * 0.05, 0.2)} className="bg-[var(--background)] p-6 sm:p-7">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="display-title text-lg">{group.title}</h3>
                <span className="meta-mono text-[var(--accent)]">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <p className="body-copy mt-2 text-sm">{group.note}</p>
              <ul className="mt-6 space-y-3">
                {group.skills.map(({ name, Icon }) => (
                  <li key={name} className="flex items-center gap-3">
                    {Icon ? (
                      <Icon className="h-4 w-4 shrink-0 text-[var(--muted)]" aria-hidden="true" />
                    ) : (
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--muted)]" aria-hidden="true" />
                    )}
                    <span className="text-sm font-medium text-[var(--ink)]">{name}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
