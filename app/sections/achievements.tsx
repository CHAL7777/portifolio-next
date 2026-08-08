import { achievements } from "@/app/data/portfolio";
import AnimatedCounter from "@/components/animated-counter";
import Reveal from "@/components/reveal";
import { Code2, GitPullRequestArrow, Rocket, Trophy } from "lucide-react";

const icons = [Code2, GitPullRequestArrow, Rocket, Trophy];
const colors = ["text-emerald-400", "text-sky-400", "text-amber-400", "text-purple-400"];

export default function Achievements() {
  return (
    <section id="achievements" className="section-band bg-[var(--surface-alt)] relative overflow-hidden">
      <div className="site-shell relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <Reveal>
            <div>
              <p className="section-kicker">Key Metrics & Impact</p>
              <h2 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-5xl font-black">
                Signals of momentum and consistency.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="body-copy max-w-2xl text-lg leading-relaxed">
              Recruiters look for more than a tech list. These signals demonstrate practice, shipping momentum, problem-solving habits, and a growing public engineering footprint.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => {
            const Icon = icons[index] ?? Trophy;
            const colorClass = colors[index % colors.length];

            return (
              <Reveal key={achievement.label} delay={index * 0.06}>
                <article className="glass-card interactive-card group flex h-full flex-col p-6 rounded-xl border border-[var(--line)] bg-[var(--surface)] shadow-md transition-all hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] ${colorClass} transition-transform group-hover:scale-110`}>
                      <Icon size={22} />
                    </div>
                    <span className="text-[0.68rem] font-mono font-bold uppercase tracking-wider text-[var(--muted)]">
                      Metric 0{index + 1}
                    </span>
                  </div>

                  <p className="mt-6 text-4xl font-black text-[var(--ink)] tracking-tight">
                    <AnimatedCounter value={achievement.value} />
                  </p>

                  <h3 className="mt-2 text-base font-black text-[var(--ink)]">{achievement.label}</h3>
                  <p className="body-copy mt-2 text-xs leading-relaxed opacity-85">{achievement.detail}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

