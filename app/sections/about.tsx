import { profile } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { ArrowUpRight, Compass, DraftingCompass, Lightbulb, Mountain } from "lucide-react";
import Image from "next/image";

const highlights = [
  {
    title: "Why I became a developer",
    text: "Software gave me a way to turn vague ideas into something another person can actually use. That still feels like the most honest test of skill.",
    Icon: Lightbulb,
  },
  {
    title: "How I think",
    text: "I start by tracing the user's path, then the data path. If those two stories do not line up, the product will feel confusing no matter how polished it looks.",
    Icon: Compass,
  },
  {
    title: "What I enjoy building",
    text: "I like products with real workflows: dashboards, ordering flows, content systems, APIs, and AI tools that help people reason through information.",
    Icon: DraftingCompass,
  },
  {
    title: "The long view",
    text: "I want to grow into the kind of engineer who can design reliable systems, communicate tradeoffs clearly, and make teams calmer under pressure.",
    Icon: Mountain,
  },
];

export default function About() {
  return (
    <section id="about" className="section-band bg-[var(--surface-alt)]">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-start">
          <Reveal>
            <div className="cinematic-surface overflow-hidden">
              <div className="relative aspect-[4/5] min-h-[28rem]">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover grayscale-[0.18] sepia-[0.12]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,10,8,0.72),transparent_58%)]" />
                <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/18 bg-black/48 p-4 text-white backdrop-blur-xl">
                  <p className="text-sm font-black">{profile.name}</p>
                  <p className="mt-1 text-sm text-white/78">
                    {profile.role} based in {profile.location}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.08}>
              <p className="section-kicker">Story</p>
              <h2 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-4xl">
                I care about the moment software becomes understandable.
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-6 grid gap-5 text-lg">
                <p className="body-copy">
                  I did not get into development because I wanted to collect frameworks. I stayed because code
                  is one of the few places where careful thinking can become a useful tool in someone else&apos;s
                  hands.
                </p>
                <p className="body-copy">
                  My best work starts before the implementation. I ask what the user is trying to finish, what
                  the system needs to remember, what can fail, and what the next engineer should understand when
                  they open the code later.
                </p>
                <p className="body-copy">
                  Right now I am deepening my backend, system design, and AI engineering practice. I want to
                  build products that feel simple because the messy decisions were handled with discipline
                  behind the scenes.
                </p>
              </div>
              <a href="#contact" className="rule-link mt-7">
                Start a thoughtful conversation
                <ArrowUpRight size={15} />
              </a>
            </Reveal>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="glass-card interactive-card h-full p-5">
                <item.Icon className="h-7 w-7 text-[var(--accent)]" />
                <h3 className="mt-5 text-lg font-black text-[var(--ink)]">{item.title}</h3>
                <p className="body-copy mt-3 text-sm">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
