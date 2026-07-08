import type { IconType } from "react-icons";
import {
  SiDocker,
  SiFastapi,
  SiGit,
  SiLangchain,
  SiLinux,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const profile = {
  name: "Chala Gobena",
  shortName: "Chala",
  role: "Product-minded Software Engineer",
  headline:
    "I design and build reliable web products, APIs, and AI-assisted workflows with careful attention to how real people use software.",
  email: "chalagobena43@gmail.com",
  location: "Addis Ababa, Ethiopia",
  timezone: "GMT+3",
  resumeUrl: "/resume.pdf",
  avatar: "/img/chala.jpg",
  githubUsername: "CHAL7777",
  links: {
    github: "https://github.com/CHAL7777",
    linkedin: "https://www.linkedin.com/in/chala-gobena-01a22b346",
    telegram: "https://t.me/chaldev",
    email: "mailto:chalagobena43@gmail.com",
  },
};

export const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Systems", href: "#system-design" },
  { label: "AI", href: "#ai-engineering" },
  { label: "Skills", href: "#skills" },
  { label: "Story", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const typingPhrases = [
  "reliable product foundations",
  "clear backend contracts",
  "AI workflows with guardrails",
  "interfaces that feel considered",
];

export const heroMetrics = [
  {
    value: "20+",
    label: "Products and experiments shipped",
    detail: "from dashboards to commerce flows and AI learning paths",
  },
  {
    value: "3+",
    label: "Years building in public",
    detail: "turning coursework, client-style briefs, and product ideas into working software",
  },
  {
    value: "8",
    label: "Architecture concerns I design around",
    detail: "auth, APIs, data, caching, queues, observability, AI context, and UX states",
  },
];

export const trustSignals = [
  "Remote-friendly from Addis Ababa",
  "Backend-first product thinking",
  "AI systems with human-readable guardrails",
  "Interfaces built for real device behavior",
];

export const skillGroups: Array<{
  title: string;
  description: string;
  outcome: string;
  Icon: IconType;
  skills: string[];
}> = [
  {
    title: "Backend Engineering",
    description:
      "I use backend tools to make product behavior predictable: clear contracts, explicit validation, and APIs that frontend teams can trust.",
    outcome: "Useful when a product needs authentication, stable data flows, and integration surfaces that will not collapse as the UI grows.",
    Icon: SiFastapi,
    skills: [
      "FastAPI",
      "Python",
      "REST APIs",
      "Authentication",
      "PostgreSQL",
      "Supabase",
      "Async Programming",
      "API Design",
    ],
  },
  {
    title: "Frontend",
    description:
      "I build interfaces as product surfaces, not decoration: responsive layout, careful state, accessible controls, and motion that supports meaning.",
    outcome: "Useful when teams need polished dashboards, workflows, and user journeys that stay maintainable after the first launch.",
    Icon: SiNextdotjs,
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Database",
    description:
      "I think through the shape of the data early so features have a reliable source of truth and queries stay understandable.",
    outcome: "Useful for products where search, filtering, permissions, reporting, and history matter more than a quick demo.",
    Icon: SiPostgresql,
    skills: ["PostgreSQL", "SQL", "Database Design", "Query Optimization"],
  },
  {
    title: "AI Engineering",
    description:
      "I approach AI as an application layer: define the job, prepare the context, constrain the model, and make outputs reviewable.",
    outcome: "Useful for assistants, document workflows, RAG systems, and automation where the product must be helpful without becoming opaque.",
    Icon: SiOpenai,
    skills: [
      "LLM Applications",
      "RAG",
      "AI Agents",
      "Prompt Engineering",
      "LangChain",
      "Vector Databases",
      "AI API Integration",
      "AI Automation",
    ],
  },
  {
    title: "System Design",
    description:
      "I map features as systems: request paths, failure modes, ownership boundaries, scaling pressure, and the cost of future change.",
    outcome: "Useful when an MVP needs a path toward reliability instead of a rewrite the moment traffic or complexity increases.",
    Icon: SiRedis,
    skills: [
      "Scalable Architecture",
      "Distributed Systems",
      "Caching",
      "Load Balancing",
      "Microservices",
      "Event-Driven Architecture",
      "Message Queues",
      "API Gateway",
      "Cloud Architecture",
    ],
  },
  {
    title: "DevOps",
    description:
      "I keep deployment and collaboration habits practical: reproducible environments, clear Git history, and build checks that protect the team.",
    outcome: "Useful when a product needs to move quickly without losing confidence in what is being shipped.",
    Icon: SiDocker,
    skills: ["Docker", "CI/CD", "Git", "Linux"],
  },
];

export const toolchain = [
  { name: "FastAPI", Icon: SiFastapi },
  { name: "Python", Icon: SiPython },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Supabase", Icon: SiSupabase },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "React", Icon: SiReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "OpenAI APIs", Icon: SiOpenai },
  { name: "LangChain", Icon: SiLangchain },
  { name: "Redis", Icon: SiRedis },
  { name: "Docker", Icon: SiDocker },
  { name: "Git", Icon: SiGit },
  { name: "Linux", Icon: SiLinux },
];

export const projects = [
  {
    title: "Food Delivery Web App",
    category: "Commerce",
    year: "2026",
    image: "/docs/latest.png",
    summary: "A responsive ordering experience designed around fast choice, clear cart state, and checkout confidence.",
    problem:
      "Food ordering products lose trust when menu browsing feels heavy or when cart changes are hard to understand on mobile.",
    goal: "Make the path from discovery to checkout feel obvious, fast, and calm across screen sizes.",
    architecture:
      "A Next.js interface with reusable menu, cart, and checkout modules, structured so API-backed inventory and order submission can be introduced cleanly.",
    decisions: [
      "Separated browsing state from checkout state so the UI can stay responsive while order details change.",
      "Designed the menu around scanning and comparison instead of forcing users through deep category pages.",
      "Kept interaction states explicit: empty cart, updating quantity, checkout review, and mobile navigation.",
    ],
    challenges: "The hard part was making the product feel visual without letting imagery slow down the ordering task.",
    solution:
      "I tightened the layout rhythm, kept cart actions close to the food item, and used consistent confirmation states to reduce hesitation.",
    lessons:
      "Commerce polish is mostly invisible. Users feel the quality when totals, quantities, loading states, and mobile spacing behave exactly as expected.",
    metrics: ["Mobile-first checkout", "Reusable cart flow", "Production deployment"],
    technologies: ["Next.js", "React", "Tailwind CSS", "REST APIs", "Vercel"],
    features: ["Menu browsing", "Cart workflow", "Responsive checkout", "Production deployment"],
    liveUrl: "https://food-delivery-rho-rouge.vercel.app/",
    sourceUrl: "https://github.com/CHAL7777",
  },
  {
    title: "E-commerce Dashboard",
    category: "Operations",
    year: "2025",
    image: "/docs/ecco.png",
    summary: "A dashboard surface for sales, inventory, and operational scanning without burying the signal.",
    problem:
      "Dashboards often become walls of numbers. The user needs quick comparison, not a decorative report.",
    goal: "Create an operational interface where a manager can scan status, notice change, and move to the next decision quickly.",
    architecture:
      "A React dashboard built from reusable metric, inventory, and analytics sections with a layout system tuned for dense information.",
    decisions: [
      "Used consistent card anatomy so the eye can compare metrics without relearning every block.",
      "Prioritized typography and spacing before adding visual accents.",
      "Designed responsive tables and summaries so the dashboard remains useful on smaller laptops.",
    ],
    challenges: "Balancing density with breathing room was the main design and implementation challenge.",
    solution:
      "I reduced decorative weight, grouped related metrics, and used restrained visual hierarchy so the important numbers could lead.",
    lessons:
      "A dashboard succeeds when the interface gets out of the way and helps people answer a small set of repeated questions.",
    metrics: ["Dense KPI layout", "Reusable dashboard components", "Responsive analytics surface"],
    technologies: ["TypeScript", "React", "Tailwind CSS", "Charts", "Responsive UI"],
    features: ["Sales overview", "Inventory cards", "Analytics layout", "Reusable components"],
    liveUrl: "https://eccommercebychal.netlify.app",
    sourceUrl: "https://github.com/CHAL7777",
  },
  {
    title: "Ethiopian E-book Site",
    category: "Content",
    year: "2025",
    image: "/docs/saas.png",
    summary: "A digital library experience focused on discovery, reading intent, and simple content flow.",
    problem:
      "Content-heavy products become difficult when navigation, filtering, and reading context are treated as afterthoughts.",
    goal: "Help visitors move from browsing to choosing a book with clear categories, readable spacing, and low-friction actions.",
    architecture:
      "A Next.js content interface organized around book metadata, category pages, search-friendly structure, and mobile reading behavior.",
    decisions: [
      "Kept content cards consistent so users can compare books quickly.",
      "Designed category navigation before visual detail to protect the browsing path.",
      "Used responsive spacing and image constraints to avoid layout shifts.",
    ],
    challenges: "The challenge was keeping the experience light while still showing enough book context to support choice.",
    solution:
      "I simplified the category structure, made actions predictable, and tuned typography for scanning instead of long marketing copy.",
    lessons:
      "Good content UX is quiet. It works when readers never have to think about where the next useful action is.",
    metrics: ["Search-focused structure", "Mobile reading emphasis", "Content-first UI"],
    technologies: ["Next.js", "Content UI", "Tailwind CSS", "Search UX", "Vercel"],
    features: ["Book browsing", "Category pages", "Download flow", "Mobile reading focus"],
    liveUrl: "https://ethio-book-site.vercel.app/",
    sourceUrl: "https://github.com/CHAL7777",
  },
  {
    title: "Study Buddy App",
    category: "SaaS",
    year: "2026",
    image: "/docs/saas-s.png",
    summary: "A planning hub that turns student work into visible priorities, resources, and progress.",
    problem:
      "Students often know they have work to do, but the plan is scattered across notes, chats, files, and memory.",
    goal: "Create a lightweight SaaS-style workspace that makes the next study action visible without becoming project-management overhead.",
    architecture:
      "A Next.js application shell with task, resource, and progress surfaces designed as independent modules for future backend persistence.",
    decisions: [
      "Kept the app shell calm and repeatable so students can return to it every day.",
      "Structured progress as a workflow signal, not a decorative chart.",
      "Used Framer Motion carefully to make transitions feel alive without slowing the task.",
    ],
    challenges: "The product needed structure, but too much structure would make students abandon it.",
    solution:
      "I reduced the workflow to priority, resource, and progress views so planning feels lighter than the work itself.",
    lessons:
      "Productivity tools should protect momentum. Every extra field has to earn its place.",
    metrics: ["SaaS app shell", "Progress workflow", "Motion-enhanced UI"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "SaaS UI", "Framer Motion"],
    features: ["Task planning", "Resource organization", "Progress sections", "Responsive app shell"],
    liveUrl: "https://student-sass.vercel.app/",
    sourceUrl: "https://github.com/CHAL7777",
  },
];

export const systemPrinciples = [
  {
    title: "Start with the request path",
    text: "I map what happens from the first user action to the final stored record: validation, auth, service boundaries, failure cases, and what the UI should show.",
  },
  {
    title: "Separate product risk from technical risk",
    text: "Some features need quick learning. Others need reliability early. I choose architecture based on the cost of being wrong.",
  },
  {
    title: "Design for the next team member",
    text: "Readable APIs, obvious data ownership, and simple deployment notes matter because software lives longer than the first version.",
  },
];

export const systemFlows = [
  "Client request",
  "API gateway",
  "Auth service",
  "Domain service",
  "Cache",
  "Queue",
  "PostgreSQL",
  "Observability",
];

export const aiWorkflows = [
  {
    title: "Retrieval-Augmented Generation",
    text: "Documents are chunked, embedded, searched, and passed to the model as grounded context so answers are tied to known source material.",
  },
  {
    title: "Agentic task flow",
    text: "The model plans, calls tools, checks intermediate results, and returns a useful answer with limits on what it is allowed to change.",
  },
  {
    title: "Prompt and output contracts",
    text: "Prompts define role, context, constraints, and expected shape. Outputs are validated before they become product behavior.",
  },
  {
    title: "Human review loops",
    text: "For high-impact tasks, AI should prepare decisions, not hide them. The interface needs review states, source traces, and correction paths.",
  },
];

export const experiences = [
  {
    type: "Work",
    role: "Independent Product Builder",
    organization: "Portfolio products and public experiments",
    period: "2024 - Present",
    summary:
      "I turn product ideas into working web applications, paying attention to the parts users notice and the parts future engineers have to maintain.",
    impact: [
      "Built reusable component systems",
      "Connected UI decisions to API and data needs",
      "Shipped responsive products with deployment in mind",
    ],
  },
  {
    type: "Freelance",
    role: "Frontend and Product Interface Developer",
    organization: "Client-style websites, dashboards, and MVPs",
    period: "2024 - Present",
    summary:
      "I translate rough goals into usable screens, then refine spacing, states, and flows until the interface feels ready for real conversations.",
    impact: ["Landing pages", "Dashboards", "MVP workflows", "Performance-focused UI cleanup"],
  },
  {
    type: "Internship",
    role: "Frontend Developer Intern",
    organization: "Tech Solutions Inc.",
    period: "2025 - 2026",
    summary:
      "I improved responsive screens, implemented React updates, and learned how design feedback becomes production detail.",
    impact: ["Component updates", "Image and loading improvements", "Interface cleanup"],
  },
  {
    type: "Leadership",
    role: "Student Project Lead",
    organization: "Software engineering project teams",
    period: "2023 - Present",
    summary:
      "I help small teams reduce uncertainty: define scope, split implementation work, review decisions, and move from idea to demo.",
    impact: ["Planning", "Code reviews", "Team delivery", "Clear demos"],
  },
];

export const education = {
  degree: "B.Sc. Software Engineering",
  institution: "Haramaya University",
  period: "In progress",
  coursework: [
    "Data Structures and Algorithms",
    "Database Systems",
    "Web Programming",
    "Software Engineering",
    "Object-Oriented Programming",
    "Computer Networks",
  ],
  achievements: [
    "Built practical full-stack projects alongside coursework",
    "Focused on clean UI implementation and problem solving",
    "Applied algorithms and database concepts in portfolio products",
  ],
};

export const certificates = [
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "Udacity",
    date: "2025",
    credentialId: "UD-AI-9920",
    image: "/docs/ai.png",
    track: "AI",
  },
  {
    title: "Programming Fundamentals",
    issuer: "Udacity",
    date: "2025",
    credentialId: "UD-PROG-4412",
    image: "/docs/web.png",
    track: "Programming",
  },
  {
    title: "Web Programming",
    issuer: "Hucisa",
    date: "2024",
    credentialId: "HU-WEB-2024",
    image: "/docs/web-h.jpg",
    track: "Web",
  },
];

export const achievements = [
  { label: "Coding practice", value: "150+", detail: "DSA and implementation exercises across core topics" },
  { label: "Public building", value: "Active", detail: "Regular project commits, experiments, and portfolio updates" },
  { label: "MVP delivery", value: "Fast", detail: "Comfortable turning rough ideas into demo-ready product surfaces" },
  { label: "Engineering depth", value: "Growing", detail: "Focused on backend design, AI workflows, and system reliability" },
];

export const repositories = [
  {
    name: "Food delivery experience",
    description: "Ordering UI, responsive menu flow, and production deployment practice.",
    tags: ["Next.js", "Tailwind", "UX"],
  },
  {
    name: "E-commerce dashboard",
    description: "Operational dashboard patterns for metrics, inventory, and business summaries.",
    tags: ["React", "TypeScript", "Charts"],
  },
  {
    name: "Study Buddy SaaS",
    description: "Student productivity concepts with app shell structure and polished UI states.",
    tags: ["SaaS", "Next.js", "Framer Motion"],
  },
];

export const testimonials = [
  {
    role: "Product collaborators",
    quote: "Chala asks the practical questions early: what the user needs to do, where the data comes from, and what could break after launch.",
  },
  {
    role: "Project reviewers",
    quote: "His strongest work is in the small details: responsive behavior, readable components, and screens that feel complete instead of rushed.",
  },
  {
    role: "Engineering peers",
    quote: "He is comfortable owning a feature from rough idea to deployed interface, and he keeps the implementation understandable for the next person.",
  },
];

export const blogPosts = [
  {
    title: "How I approach dashboard UI as a developer",
    summary: "A practical note on hierarchy, density, and building screens that teams can scan quickly.",
    tags: ["UI", "React", "Dashboards"],
    readTime: "4 min read",
  },
  {
    title: "Lessons from building a food ordering flow",
    summary: "State, checkout clarity, and the micro-interactions that make commerce products feel trustworthy.",
    tags: ["Next.js", "UX", "State"],
    readTime: "5 min read",
  },
  {
    title: "What I am learning next",
    summary: "A short roadmap covering backend depth, testing, system design, and stronger product analytics.",
    tags: ["Career", "Backend", "Testing"],
    readTime: "3 min read",
  },
];
