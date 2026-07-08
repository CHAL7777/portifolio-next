import { testimonials } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-band bg-[var(--surface-alt)]">
      <div className="site-shell">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <Reveal>
            <div>
              <p className="section-kicker">Testimonials</p>
              <h2 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-6xl">
                Collaboration traits teams can expect.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="body-copy max-w-2xl text-lg">
              Strong portfolios are not only about code. These reference-style signals show how I work with
              product feedback, implementation detail, and teammates.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.role} delay={index * 0.06}>
              <article className="glass-card interactive-card h-full p-5">
                <Quote className="h-7 w-7 text-[var(--accent)]" />
                <p className="mt-5 text-lg font-black leading-relaxed text-[var(--ink)]">&quot;{item.quote}&quot;</p>
                <p className="mt-5 text-sm font-bold text-[var(--muted)]">{item.role}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
