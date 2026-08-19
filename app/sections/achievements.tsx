import { achievements } from "@/app/data/portfolio";
import AnimatedCounter from "@/components/animated-counter";
import Reveal from "@/components/reveal";
import { Code2, GitPullRequestArrow, Rocket, Trophy } from "lucide-react";

const icons = [Code2, GitPullRequestArrow, Rocket, Trophy];
const colors = ["#00E5FF", "#A855F7", "#FBBF24", "#FF6B6B"];

export default function Achievements() {
  return (
    <section id="achievements" className="section-band relative overflow-hidden">
      <div className="site-shell relative z-10">
        {/* Centered header */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="section-kicker">Key Metrics & Impact</p>
            <h2 className="display-title mt-4 text-4xl md:text-5xl">Signals of momentum and consistency.</h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="body-copy mx-auto mt-5 max-w-2xl text-lg">
              These signals demonstrate practice, shipping momentum, problem-solving habits, and a growing public engineering footprint.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a, i) => {
            const Icon = icons[i] ?? Trophy;
            const color = colors[i % colors.length];
            return (
              <Reveal key={a.label} delay={i * 0.06}>
                <article className="flex h-full flex-col rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-2xl transition-colors hover:border-[var(--line-strong)]">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--surface-strong)]" style={{ color }}>
                      <Icon size={22} />
                    </div>
                    <span className="text-[0.68rem] font-[family-name:var(--mono-font)] font-medium uppercase tracking-wider text-[var(--muted)]">Metric 0{i + 1}</span>
                  </div>
                  <p className="mt-6 text-4xl font-bold text-[var(--ink)] tracking-tight"><AnimatedCounter value={a.value} /></p>
                  <h3 className="mt-2 text-base font-bold text-[var(--ink)]">{a.label}</h3>
                  <p className="body-copy mt-2 text-xs leading-relaxed">{a.detail}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
