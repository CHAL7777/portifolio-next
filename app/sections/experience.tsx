const experience = [
  {
    role: "Full Stack Developer",
    company: "Open Source and freelance-style projects",
    period: "2024 - Present",
    text: "Building practical web products with Next.js, React, Tailwind, databases, and deployment workflows.",
    points: ["Reusable UI components", "API and database integration", "Responsive production pages"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Tech Solutions Inc.",
    period: "2025 - 2026",
    text: "Worked with product and design direction to improve responsive pages and modern React implementation.",
    points: ["Interface cleanup", "Image and loading improvements", "React component updates"],
  },
];

const details = [
  { label: "Education", value: "B.Sc. Software Engineering, Haramaya University" },
  { label: "Languages", value: "English, Afaan Oromoo, Amharic" },
  { label: "Location", value: "Addis Ababa, Ethiopia" },
];

export default function Experience() {
  return (
    <section id="experience" className="section-band bg-[var(--background)]">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            <p className="section-label">[Part 04 / 06] Experience</p>
            <h2 className="display-title mt-4 text-5xl text-[var(--ink)] md:text-6xl">
              Learning by shipping real interfaces.
            </h2>
          </div>

          <div className="grid gap-5">
            {experience.map((item) => (
              <article key={item.role} className="simple-card p-5 md:p-6">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-[var(--ink)]">{item.role}</h3>
                    <p className="mt-1 text-sm font-bold text-[var(--muted)]">{item.company}</p>
                  </div>
                  <p className="text-sm font-black uppercase tracking-[0.12em] text-[var(--accent-2)]">
                    {item.period}
                  </p>
                </div>
                <p className="body-copy mt-4">{item.text}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.points.map((point) => (
                    <span key={point} className="tag">
                      {point}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {details.map((item) => (
            <div key={item.label} className="border-t border-[var(--line)] pt-5">
              <p className="section-label">{item.label}</p>
              <p className="mt-3 text-lg font-black leading-snug text-[var(--ink)]">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
