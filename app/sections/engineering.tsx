import { engineeringAreas } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import SystemDiagram from "@/components/system-diagram";

export default function Engineering() {
  return (
    <section id="engineering" className="section-band scroll-mt-16" aria-labelledby="engineering-title">
      <div className="site-shell">
        <SectionHeading
          index="02"
          kicker="Engineering, not just UI"
          id="engineering-title"
          title="The interface is the last mile. Most of the work is underneath it."
          lede="What I own beyond components: data models, APIs, auth, deployments, and the decisions that keep an app working after launch."
        />

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          <Reveal className="drafted border border-[var(--line)] bg-[var(--surface-solid)] p-5 sm:p-7 lg:col-span-5">
            <p className="section-kicker">Anatomy of a request</p>
            <p className="body-copy mt-2 text-sm">How I think about a typical web app I build — each layer has one job.</p>
            <div className="mt-6">
              <SystemDiagram />
            </div>
          </Reveal>

          <ul className="grid gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:col-span-7">
            {engineeringAreas.map((area, i) => (
              <Reveal as="li" key={area.title} delay={Math.min(i * 0.04, 0.2)} className="flex flex-col bg-[var(--background)] p-5 sm:p-6">
                <span className="meta-mono text-[var(--accent)]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display-title mt-3 text-lg">{area.title}</h3>
                <p className="body-copy mt-2 flex-1 text-sm">{area.text}</p>
                <p className="mt-4 border-t border-[var(--line)] pt-3 text-xs text-[var(--muted)]">
                  <span className="meta-mono">Seen in </span>
                  {area.evidence}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
