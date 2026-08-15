import { achievements } from "@/app/data/portfolio";
import AnimatedCounter from "@/components/animated-counter";
import Reveal from "@/components/reveal";
import { Code2, GitPullRequestArrow, Rocket, Trophy } from "lucide-react";

const icons = [Code2, GitPullRequestArrow, Rocket, Trophy];
const colors = ["#00E5FF", "#A855F7", "#FBBF24", "#FF6B6B"];

export default function Achievements() {
  return (
    <section id="achievements" className="section-band bg-[var(--surface-alt)] relative overflow-hidden">
      <div className="site-shell relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <Reveal><div>
            <p className="section-kicker">Key Metrics & Impact</p>
            <h2 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-5xl">Signals of momentum and consistency.</h2>
          </div></Reveal>
          <Reveal delay={0.08}>
            <p className="body-copy max-w-2xl text-lg leading-relaxed">
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
                <article className="aurora-card group flex h-full flex-col p-6 rounded-xl border border-[var(--line)] bg-[var(--surface)]">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] transition-all group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.1)]" style={{ color }}>
                      <Icon size={22} />
                    </div>
                    <span className="text-[0.68rem] font-[family-name:var(--mono-font)] font-medium uppercase tracking-wider text-[var(--muted)]">Metric 0{i + 1}</span>
                  </div>
                  <p className="mt-6 text-4xl font-bold text-[var(--ink)] tracking-tight"><AnimatedCounter value={a.value} /></p>
                  <h3 className="mt-2 text-base font-bold text-[var(--ink)]">{a.label}</h3>
                  <p className="body-copy mt-2 text-xs leading-relaxed opacity-80">{a.detail}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
