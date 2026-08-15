import { blogPosts } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { ArrowUpRight, Clock, FileText } from "lucide-react";

export default function Blog() {
  return (
    <section id="blog" className="section-band bg-[var(--background)] relative overflow-hidden">
      <div className="site-shell relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <Reveal><div>
            <p className="section-kicker">Technical Writing</p>
            <h2 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-5xl">Writing that explains how I think.</h2>
          </div></Reveal>
          <Reveal delay={0.08}>
            <p className="body-copy max-w-2xl text-lg leading-relaxed">
              Short technical notes on system tradeoffs, engineering principles, and product thinking beyond UI screenshots.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.06}>
              <article className="aurora-card group flex h-full flex-col p-6 rounded-2xl border border-[var(--line)] bg-[var(--surface)]">
                <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] text-[var(--accent)] transition-all group-hover:bg-[var(--accent)] group-hover:text-[var(--ink-contrast)] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.15)]">
                    <FileText size={20} />
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-[family-name:var(--mono-font)] font-medium text-[var(--accent)]"><Clock size={13} />{post.readTime}</span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-[var(--ink)] leading-snug">{post.title}</h3>
                <p className="body-copy mt-3 text-xs leading-relaxed">{post.summary}</p>
                <div className="mt-auto pt-6">
                  <div className="flex flex-wrap gap-1.5 pb-4 border-b border-[var(--line)]">
                    {post.tags.map((t) => (<span key={t} className="tag text-[0.68rem]">{t}</span>))}
                  </div>
                  <a href="#contact" className="rule-link mt-4 text-xs font-semibold"><span>Discuss</span><ArrowUpRight size={13} /></a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
