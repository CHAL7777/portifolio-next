import type { IconType } from "react-icons";
import {
  SiDocker,
  SiFigma,
  SiGithub,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

type SkillGroup = {
  title: string;
  description: string;
  skills: Array<{ name: string; Icon: IconType }>;
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Interfaces, state, responsive layout, and product polish.",
    skills: [
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    description: "APIs, databases, auth-ready flows, and structured data.",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "Prisma", Icon: SiPrisma },
      { name: "Supabase", Icon: SiSupabase },
    ],
  },
  {
    title: "Shipping",
    description: "Practical design handoff, version control, deployment, and iteration.",
    skills: [
      { name: "GitHub", Icon: SiGithub },
      { name: "Vercel", Icon: SiVercel },
      { name: "Docker", Icon: SiDocker },
      { name: "Figma", Icon: SiFigma },
    ],
  },
];

const principles = [
  "Start with the user path before the component tree.",
  "Keep layouts simple enough to scan and maintain.",
  "Make performance and responsive behavior part of the first pass.",
];

export default function Skills() {
  return (
    <section id="skills" className="section-band bg-[var(--background)]">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            <p className="section-label">[Part 02 / 06] Skills</p>
            <h2 className="display-title mt-4 text-5xl text-[var(--ink)] md:text-6xl">
              Tools I use to build.
            </h2>
            <p className="body-copy mt-5 text-lg">
              I focus on clear frontend work, dependable data flow, and practical release habits.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {skillGroups.map((group) => (
              <article key={group.title} className="simple-card p-5">
                <h3 className="text-xl font-black text-[var(--ink)]">{group.title}</h3>
                <p className="body-copy mt-3 text-sm">{group.description}</p>
                <div className="mt-6 grid gap-3">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-3 text-sm font-bold text-[var(--ink)]">
                      <skill.Icon className="text-lg text-[var(--accent-3)]" />
                      {skill.name}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 border-y border-[var(--line)] py-7 md:grid-cols-3">
          {principles.map((item, index) => (
            <p key={item} className="text-base font-bold leading-relaxed text-[var(--ink)]">
              <span className="mr-3 text-[var(--accent)]">0{index + 1}</span>
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
