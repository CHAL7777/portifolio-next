import { blogPosts } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { ArrowUpRight, FileText } from "lucide-react";

export default function Blog() {
  return (
    <section id="blog" className="section-band bg-[var(--background)]">
      <div className="site-shell">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <Reveal>
            <div>
              <p className="section-kicker">Blog</p>
              <h2 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-6xl">
                Writing that explains how I think.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="body-copy max-w-2xl text-lg">
              Short technical notes make the portfolio more credible by showing reasoning, tradeoffs, and
              learning depth beyond screenshots.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Reveal key={post.title} delay={index * 0.06}>
              <article className="solid-card interactive-card flex h-full flex-col p-5">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--tag-bg)] text-[var(--accent)]">
                  <FileText size={20} />
                </div>
                <p className="mt-5 text-sm font-black text-[var(--accent-2)]">{post.readTime}</p>
                <h3 className="mt-3 text-xl font-black text-[var(--ink)]">{post.title}</h3>
                <p className="body-copy mt-3 text-sm">{post.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="#contact" className="rule-link mt-auto pt-6 text-sm">
                  Discuss this topic
                  <ArrowUpRight size={14} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
