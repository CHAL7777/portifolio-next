import { achievements } from "@/app/data/portfolio";
import AnimatedCounter from "@/components/animated-counter";
import Reveal from "@/components/reveal";
import { Code2, GitPullRequestArrow, Rocket, Trophy } from "lucide-react";

const icons = [Code2, GitPullRequestArrow, Rocket, Trophy];

export default function Achievements() {
  return (
    <section id="achievements" className="section-band bg-[var(--surface-alt)]">
      <div className="site-shell">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <Reveal>
            <div>
              <p className="section-kicker">Achievements</p>
              <h2 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-6xl">
                Signals of momentum and consistency.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="body-copy max-w-2xl text-lg">
              Recruiters look for more than a tech list. These signals show practice, shipping momentum,
              problem-solving habits, and a growing public engineering footprint.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => {
            const Icon = icons[index] ?? Trophy;

            return (
              <Reveal key={achievement.label} delay={index * 0.06}>
                <article className="glass-card interactive-card h-full p-5">
                  <Icon className="h-7 w-7 text-[var(--accent)]" />
                  <p className="mt-6 text-4xl font-black text-[var(--ink)]">
                    <AnimatedCounter value={achievement.value} />
                  </p>
                  <h3 className="mt-3 text-lg font-black text-[var(--ink)]">{achievement.label}</h3>
                  <p className="body-copy mt-2 text-sm">{achievement.detail}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
