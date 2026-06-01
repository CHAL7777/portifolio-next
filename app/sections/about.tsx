import { ArrowUpRight } from "lucide-react";

const approach = [
  {
    step: "01",
    title: "Clarify the product",
    text: "I start by understanding the audience, the main action, and the content that needs to be obvious.",
  },
  {
    step: "02",
    title: "Build the interface",
    text: "I turn the direction into responsive components, clean state, and pages that stay readable on every screen.",
  },
  {
    step: "03",
    title: "Polish the release",
    text: "I check loading, layout stability, accessibility basics, and details that make the product feel complete.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-band bg-[var(--surface-alt)]">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-start">
          <div>
            <p className="section-label">[Part 03 / 06] About</p>
            <h2 className="display-title mt-4 text-5xl text-[var(--ink)] md:text-6xl">
              I like work that is clear before it is clever.
            </h2>
          </div>

          <div>
            <p className="body-copy text-lg">
              I&apos;m studying Software Engineering and building real web products along the way. My strongest
              work sits between UI detail and implementation: defining the shape of a page, making it responsive,
              and connecting it to the data or workflow behind it.
            </p>
            <p className="body-copy mt-5 text-lg">
              I keep designs simple, components reusable, and copy direct so people can understand what the
              product does without fighting the interface.
            </p>
            <a href="#contact" className="rule-link mt-7">
              Work with me
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {approach.map((item) => (
            <article key={item.step} className="simple-card p-5">
              <p className="section-label text-[var(--accent)]">{item.step}</p>
              <h3 className="mt-5 text-xl font-black text-[var(--ink)]">{item.title}</h3>
              <p className="body-copy mt-3 text-sm">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
