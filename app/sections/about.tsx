import { profile } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { ArrowUpRight, Compass, DraftingCompass, Lightbulb, MapPin, Mountain, Sparkles } from "lucide-react";
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
    <section id="about" className="section-band bg-[var(--surface-alt)] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="site-shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-start">
          <Reveal>
            <div className="cinematic-surface overflow-hidden rounded-2xl border border-[var(--line)] shadow-2xl">
              <div className="relative aspect-[4/5] min-h-[28rem] w-full">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,10,8,0.85),transparent_55%)]" />
                <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/20 bg-black/60 p-4 text-white backdrop-blur-xl shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-black">{profile.name}</p>
                      <p className="mt-0.5 text-xs text-white/80 font-medium">{profile.role}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/20 px-2.5 py-1 text-[0.7rem] font-bold text-emerald-300">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      {profile.timezone}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-2.5 text-xs text-white/70">
                    <MapPin size={14} className="text-emerald-400" />
                    <span>Based in {profile.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.08}>
              <p className="section-kicker">Developer Story</p>
              <h2 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-5xl font-black">
                I care about the moment software becomes understandable.
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-6 grid gap-5 text-base md:text-lg">
                <p className="body-copy leading-relaxed">
                  I did not get into development because I wanted to collect frameworks. I stayed because code
                  is one of the few places where careful thinking can become a useful tool in someone else&apos;s
                  hands.
                </p>
                <p className="body-copy leading-relaxed">
                  My best work starts before the implementation. I ask what the user is trying to finish, what
                  the system needs to remember, what can fail, and what the next engineer should understand when
                  they open the code later.
                </p>
                <p className="body-copy leading-relaxed">
                  Right now I am deepening my backend, system design, and AI engineering practice. I want to
                  build products that feel simple because the messy decisions were handled with discipline
                  behind the scenes.
                </p>
              </div>
              <a href="#contact" className="button-base button-primary inline-flex items-center gap-2 mt-8">
                <span>Start a conversation</span>
                <ArrowUpRight size={16} />
              </a>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="glass-card interactive-card group h-full rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--surface-strong)] text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-black">
                  <item.Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-black text-[var(--ink)]">{item.title}</h3>
                <p className="body-copy mt-2.5 text-sm leading-relaxed">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

