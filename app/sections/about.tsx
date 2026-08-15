import { profile } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { ArrowUpRight, Compass, DraftingCompass, Lightbulb, MapPin, Mountain } from "lucide-react";
import Image from "next/image";

const highlights = [
  { title: "Why I became a developer", text: "Software gave me a way to turn vague ideas into something another person can actually use.", Icon: Lightbulb },
  { title: "How I think", text: "I start by tracing the user's path, then the data path. If those two don't align, the product feels confusing.", Icon: Compass },
  { title: "What I enjoy building", text: "Products with real workflows: dashboards, ordering flows, content systems, APIs, and AI tools.", Icon: DraftingCompass },
  { title: "The long view", text: "I want to grow into the kind of engineer who can design reliable systems and communicate tradeoffs clearly.", Icon: Mountain },
];

export default function About() {
  return (
    <section id="about" className="section-band bg-[var(--surface-alt)] relative overflow-hidden">
      <div className="section-glow h-[30rem] w-[30rem] bg-[var(--accent)] right-[5%] top-[5%]" />
      <div className="site-shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-start">
          <Reveal>
            <div className="neon-border overflow-hidden rounded-2xl shadow-2xl">
              <div className="relative aspect-[4/5] min-h-[28rem] w-full bg-[var(--surface-solid)]">
                <Image src={profile.avatar} alt={profile.name} fill sizes="(min-width:1024px)42vw,100vw" className="object-cover transition-transform duration-700 hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,7,10,0.9),transparent_55%)]" />
                <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/10 bg-black/60 p-4 text-white backdrop-blur-xl shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-bold">{profile.name}</p>
                      <p className="mt-0.5 text-xs text-white/70 font-medium">{profile.role}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-2.5 py-1 text-[0.7rem] font-semibold text-[var(--accent)]">
                      <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse" />
                      {profile.timezone}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-2.5 text-xs text-white/60">
                    <MapPin size={14} className="text-[var(--accent)]" />
                    <span>Based in {profile.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.08}>
              <p className="section-kicker">Developer Story</p>
              <h2 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-5xl">
                I care about the moment software becomes understandable.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-6 grid gap-5 text-base md:text-lg">
                <p className="body-copy leading-relaxed">
                  I did not get into development because I wanted to collect frameworks. I stayed because code
                  is one of the few places where careful thinking can become a useful tool in someone else&apos;s hands.
                </p>
                <p className="body-copy leading-relaxed">
                  My best work starts before the implementation. I ask what the user is trying to finish, what
                  the system needs to remember, what can fail, and what the next engineer should understand.
                </p>
                <p className="body-copy leading-relaxed">
                  Right now I am deepening my backend, system design, and AI engineering practice. I want to
                  build products that feel simple because the messy decisions were handled with discipline.
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
          {highlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <article className="aurora-card group h-full rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] text-[var(--accent)] transition-all group-hover:bg-[var(--accent)] group-hover:text-[var(--ink-contrast)] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.15)]">
                  <item.Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-[var(--ink)]">{item.title}</h3>
                <p className="body-copy mt-2.5 text-sm leading-relaxed">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
