import { profile } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { ArrowUpRight, Compass, DraftingCompass, Lightbulb, Mountain } from "lucide-react";
import Image from "next/image";

const highlights = [
  { title: "Why I became a developer", text: "Software gave me a way to turn vague ideas into something another person can actually use.", Icon: Lightbulb },
  { title: "How I think", text: "I start by tracing the user's path, then the data path. If those two don't align, the product feels confusing.", Icon: Compass },
  { title: "What I enjoy building", text: "Products with real workflows: dashboards, ordering flows, content systems, APIs, and AI tools.", Icon: DraftingCompass },
  { title: "The long view", text: "I want to grow into the kind of engineer who can design reliable systems and communicate tradeoffs clearly.", Icon: Mountain },
];

export default function About() {
  return (
    <section id="about" className="section-band relative">
      <div className="site-shell relative z-10">
        <SectionHeading
          index="05"
          kicker="Developer story"
          title={
            <>
              I care about the moment
              <br />
              software becomes understandable.
            </>
          }
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:items-start lg:gap-16">
          <Reveal>
            <figure className="m-0">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-[var(--line)] bg-[var(--surface-solid)]">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              {/* Caption block, like a plate in a technical document */}
              <figcaption className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-x border-b border-[var(--line)] px-4 py-3">
                <span className="meta-mono text-[var(--ink-soft)]">{profile.name}</span>
                <span className="meta-mono">
                  {profile.location} — {profile.timezone}
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              <div className="grid gap-6">
                <p className="display-lede text-xl sm:text-2xl">
                  I did not get into development because I wanted to collect frameworks. I
                  stayed because code is one of the few places where careful thinking can
                  become a useful tool in someone else&apos;s hands.
                </p>
                <p className="body-copy text-base">
                  My best work starts before the implementation. I ask what the user is
                  trying to finish, what the system needs to remember, what can fail, and
                  what the next engineer should understand.
                </p>
                <p className="body-copy text-base">
                  Right now I am deepening my backend, system design, and AI engineering
                  practice. I want to build products that feel simple because the messy
                  decisions were handled with discipline.
                </p>
              </div>
              <a href="#contact" className="button-base button-primary mt-9 inline-flex">
                <span>Start a conversation</span>
                <ArrowUpRight size={15} />
              </a>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid border-t border-[var(--line)] md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <article className="h-full border-b border-[var(--line)] py-8 lg:border-b-0 lg:border-r lg:px-7 lg:first:pl-0 lg:last:border-r-0">
                <item.Icon className="h-4 w-4 text-[var(--accent)]" />
                <h3 className="display-title mt-5 text-base">{item.title}</h3>
                <p className="body-copy mt-2.5 text-sm">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
