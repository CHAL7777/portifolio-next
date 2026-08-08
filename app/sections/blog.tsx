import { blogPosts } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { ArrowUpRight, BookOpen, Clock, FileText } from "lucide-react";

export default function Blog() {
  return (
    <section id="blog" className="section-band bg-[var(--background)] relative overflow-hidden">
      <div className="site-shell relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <Reveal>
            <div>
              <p className="section-kicker">Technical Writing & Thoughts</p>
              <h2 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-5xl font-black">
                Writing that explains how I think.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="body-copy max-w-2xl text-lg leading-relaxed">
              Short technical notes demonstrate depth of reasoning, system tradeoffs, and engineering principles beyond UI screenshots.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Reveal key={post.title} delay={index * 0.06}>
              <article className="glass-card interactive-card group flex h-full flex-col p-6 rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-md transition-all hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-xl">
                <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-black">
                    <FileText size={20} />
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-emerald-400">
                    <Clock size={13} />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-[var(--ink)] leading-snug">{post.title}</h3>
                <p className="body-copy mt-3 text-xs leading-relaxed text-[var(--muted)]">{post.summary}</p>

                <div className="mt-auto pt-6">
                  <div className="flex flex-wrap gap-1.5 pb-4 border-b border-[var(--line)]">
                    {post.tags.map((tag) => (
                      <span key={tag} className="tag text-[0.68rem] font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a href="#contact" className="rule-link mt-4 text-xs font-bold">
                    <span>Discuss Architecture</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

