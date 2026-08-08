import { testimonials } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { Quote, Star, UserCheck } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-band bg-[var(--surface-alt)] relative overflow-hidden">
      <div className="site-shell relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <Reveal>
            <div>
              <p className="section-kicker">Endorsements & Feedback</p>
              <h2 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-5xl font-black">
                Collaboration traits teams can expect.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="body-copy max-w-2xl text-lg leading-relaxed">
              Strong portfolios are not only about code syntax. These reference-style signals illustrate work ethic, clear communication, and execution discipline under real project requirements.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.role} delay={index * 0.06}>
              <article className="glass-card interactive-card group flex h-full flex-col p-6 rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-md transition-all hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-xl">
                <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
                  <div className="inline-flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <Quote size={24} className="text-[var(--accent)] opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>

                <p className="mt-5 text-base font-bold leading-relaxed text-[var(--ink)]">
                  &quot;{item.quote}&quot;
                </p>

                <div className="mt-auto pt-6 flex items-center gap-3">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--surface-strong)] text-[var(--accent)]">
                    <UserCheck size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-[var(--ink)]">{item.role}</p>
                    <p className="text-[0.68rem] font-bold text-emerald-400">Verified Collaboration</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

