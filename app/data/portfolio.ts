import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa6";
import {
  SiFastapi,
  SiFigma,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://chaldev.vercel.app";

export const profile = {
  name: "Chala Gobena",
  shortName: "Chala",
  role: "Software Engineer · Full-Stack Web Developer",
  tagline:
    "I build web applications end to end — typed React frontends, REST APIs, and the database schemas underneath them — and ship them to production.",
  email: "chalagobena43@gmail.com",
  location: "Addis Ababa, Ethiopia",
  timezone: "GMT+3",
  resumeUrl: "/resume.pdf",
  avatar: "/img/chala.jpg",
  githubUsername: "CHAL7777",
  availability:
    "Open to freelance, internships, and software engineering roles",
  links: {
    github: "https://github.com/CHAL7777",
    linkedin: "https://www.linkedin.com/in/chala-gobena-01a22b346",
    telegram: "https://t.me/chaldev",
    email: "mailto:chalagobena43@gmail.com",
  },
};

export const navItems = [
  { label: "Work", href: "/#work" },
  { label: "Engineering", href: "/#engineering" },
  { label: "Skills", href: "/#skills" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

/* ─────────────────────────────────────────────────────────
   Skills — grouped, no proficiency percentages
   ───────────────────────────────────────────────────────── */

export type Skill = { name: string; Icon?: IconType };

export type SkillGroup = {
  title: string;
  note: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    note: "Where most of my shipped work lives: component systems, routing, state, responsive layout, and motion that stays out of the way.",
    skills: [
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Framer Motion", Icon: SiFramer },
      { name: "HTML & CSS", Icon: SiHtml5 },
    ],
  },
  {
    title: "Backend",
    note: "REST endpoints, validation, authentication, and the unglamorous parts: error shapes, environment config, CORS.",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "FastAPI", Icon: SiFastapi },
      { name: "Python", Icon: SiPython },
      { name: "Java", Icon: FaJava },
      { name: "REST API design" },
      { name: "Authentication" },
    ],
  },
  {
    title: "Database",
    note: "Relational modelling first. Constraints over conventions; queries I can explain.",
    skills: [
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "MySQL", Icon: SiMysql },
      { name: "SQL & schema design" },
      { name: "Supabase" },
    ],
  },
  {
    title: "Tools",
    note: "Version control, design handoff, deployment.",
    skills: [
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
      { name: "Figma", Icon: SiFigma },
      { name: "Vercel / Netlify" },
      { name: "Linux" },
    ],
  },
];

/* ─────────────────────────────────────────────────────────
   Projects — case studies backed by real deployments
   ───────────────────────────────────────────────────────── */

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  role: string;
  status: string;
  featured?: boolean;
  image: string;
  imageAlt: string;
  accent: string;
  summary: string;
  problem: string;
  goals: string[];
  solution: string;
  features: string[];
  architecture: string;
  decisions: string[];
  challenge: string;
  lessons: string;
  result: string;
  technologies: string[];
  liveUrl: string;
  /** Only set when a public repository actually exists. */
  sourceUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "soleflow-store",
    title: "SoleFlow Footwear Store",
    category: "Commerce",
    year: "2026",
    role: "Full-stack developer",
    status: "Live",
    featured: true,
    image: "/docs/nike.png",
    imageAlt:
      "SoleFlow storefront home page with a featured sneaker, price, quick-add button, and a strip of related products.",
    accent: "#2dd4bf",
    summary:
      "A sneaker storefront built around fast catalogue scanning, product detail pages, and a cart and wishlist that survive navigation.",
    problem:
      "Footwear shoppers compare several pairs at once. If moving between the listing, a product page, and the cart drops their selection or their filter, they leave.",
    goals: [
      "Let a shopper move between category, product, wishlist, and cart without losing their place.",
      "Make filtered views shareable and refresh-safe.",
      "Keep the product grid fast even with large imagery.",
    ],
    solution:
      "A Next.js App Router storefront. Category is a URL search parameter, product pages are dynamic routes, and cart and wishlist live in a small global store that persists across navigation.",
    features: [
      "Men / women / kids catalogue with URL-driven filtering",
      "Dynamic product detail routes",
      "Persistent cart and wishlist with quick-add",
      "Price, discount, rating, and review count on the card",
      "Responsive grid from 320px up",
    ],
    architecture:
      "App Router pages for the catalogue and product detail; a client-side store for cart and wishlist; next/image with per-breakpoint sizes for the grid; product data in typed modules so the card and detail views share one shape.",
    decisions: [
      "Category lives in the URL (?category=men) instead of component state, so filtered views can be shared and survive a reload.",
      "Cart and wishlist are global and persistent so a quick-add never forces a context switch away from the grid.",
      "Price, discount, rating, and review count sit on the card itself. Comparison happens in the grid, not by opening each product.",
      "Identical card anatomy across the whole catalogue so the browser reuses layout instead of reflowing.",
    ],
    challenge:
      "Product imagery dominates a footwear store, and loading full-resolution shots for a whole grid made first paint heavy.",
    lessons:
      "In commerce the grid is the product. Most of the engineering effort belongs to the listing view, not the checkout.",
    result:
      "A deployed storefront where filtering, product detail, and cart state all work together and hold up on mobile.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://chala-product-store.vercel.app/",
    sourceUrl: "https://github.com/CHAL7777/chala-product-store",
  },
  {
    slug: "jalo-hotel",
    title: "Jalo Hotel & Resort",
    category: "Hospitality",
    year: "2026",
    role: "Full-stack developer",
    status: "Live",
    featured: true,
    image: "/docs/jalo.png",
    imageAlt:
      "Jalo Hotel & Resort home page with a gold Book Now call to action, availability search, and a photo of the hotel at dusk.",
    accent: "#c9a25a",
    summary:
      "A hotel site for a property in Shashemene, built so a guest can check availability, compare rooms, and reserve directly instead of through an aggregator.",
    problem:
      "Regional hotels lose direct bookings because their own sites bury rates, room differences, and the actual booking action under marketing copy.",
    goals: [
      "Put availability search in the first viewport.",
      "Make every room's rate, capacity, and inclusions comparable at a glance.",
      "Keep a long content page (rooms, dining, spa, events, location, FAQ) navigable.",
    ],
    solution:
      "A Next.js marketing and booking site. The hero carries check-in, check-out, guests, and room-type inputs; rooms share one card anatomy; the gallery and FAQ are grouped by category; a separate staff portal route exists for the property.",
    features: [
      "Date and occupancy availability search in the hero",
      "Three comparable room tiers with rate, capacity, bed configuration, inclusions",
      "Categorised photo gallery and accordion FAQ",
      "Location and transfer guidance (Hawassa airport)",
      "Amharic / English language toggle",
      "Staff portal route",
    ],
    architecture:
      "App Router with banded page sections, a client-side search form that validates dates and occupancy, filterable gallery and FAQ components driven by category data, and a separate staff route.",
    decisions: [
      "Booking intent is the first interaction on the page, not a buried CTA.",
      "Room cards share one anatomy so comparison needs no scrolling back.",
      "Gallery and FAQ are grouped by category so a content-heavy page stays scannable without a search box.",
      "Each concern gets its own banded section with a distinct layout, so length reads as depth rather than clutter.",
    ],
    challenge:
      "The property has a lot to say — rooms, dining, spa, conference, shuttle, location, policies — and a single scrolling page risked becoming an undifferentiated wall.",
    lessons:
      "For a hospitality site, trust is built by answering questions before they are asked. The FAQ and location sections do as much conversion work as the hero.",
    result:
      "A deployed site where a guest can search dates, compare rooms, and reach a booking without leaving the page flow.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://jalo-hotel.vercel.app/",
  },
  {
    slug: "ethiopath-ai",
    title: "EthioPath AI Pathfinder",
    category: "AI product",
    year: "2026",
    role: "Full-stack developer",
    status: "Live",
    featured: true,
    image: "/docs/pathfinder.png",
    imageAlt:
      "EthioPath application showing a career-path assessment with progress nodes and category badges.",
    accent: "#38bdf8",
    summary:
      "A career pathfinder for Ethiopian students and developers: a multi-step technical assessment feeds an AI-guided roadmap of what to learn next.",
    problem:
      "Students choosing a technical direction usually get a list of job titles, not a structured view of which skills lead where or where they currently stand.",
    goals: [
      "Turn a self-assessment into a concrete, ordered learning roadmap.",
      "Make a long multi-question assessment resumable rather than fragile.",
      "Show progress visually at every step.",
    ],
    solution:
      "A Next.js platform with a step-by-step assessment, persisted answer state so a refresh does not lose progress, a visual roadmap of path nodes, and AI-generated recommendations layered on top of the assessment result.",
    features: [
      "Multi-step technical skill assessment",
      "State recovery — refresh or return without losing answers",
      "Visual career-path roadmap with progress nodes",
      "AI-guided recommendations based on results",
      "Category badges and progress tracking",
    ],
    architecture:
      "App Router UI; assessment state persisted client-side and restored on load; roadmap rendered from a typed path tree; AI recommendations requested through a server-side handler so keys never reach the browser.",
    decisions: [
      "Assessment state is persisted after every answer, because losing ten minutes of input to a refresh is the fastest way to lose a user.",
      "The roadmap is a data structure (nodes and edges), not a hard-coded page, so paths can change without touching layout.",
      "AI output is presented as a recommendation next to the deterministic assessment result, not as the only answer.",
    ],
    challenge:
      "Making guidance feel interactive and structured while keeping the assessment fast and the AI calls off the client.",
    lessons:
      "Interactive guidance needs a feedback loop at every step. A single result page at the end is not enough to keep people going.",
    result:
      "A live platform where a student completes an assessment, sees a roadmap, and receives targeted next steps.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "LLM API"],
    liveUrl: "https://ethiopath.vercel.app",
  },
  {
    slug: "food-delivery",
    title: "Food Delivery Web App",
    category: "Commerce",
    year: "2026",
    role: "Frontend developer",
    status: "Live",
    image: "/docs/food.png",
    imageAlt:
      "Food delivery application showing a menu grid, item cards, and a cart panel.",
    accent: "#34d399",
    summary:
      "A responsive ordering experience: browse a menu, adjust a cart, and reach checkout without the interface getting in the way.",
    problem:
      "Ordering products lose trust when menu browsing feels heavy or when cart changes are hard to follow on a phone.",
    goals: [
      "Make discovery → cart → checkout obvious on every screen size.",
      "Keep cart state explicit: empty, updating, reviewing.",
    ],
    solution:
      "A Next.js interface with separate menu, cart, and checkout modules, structured so an inventory and order API can be introduced behind them.",
    features: [
      "Menu browsing",
      "Cart with quantity updates",
      "Responsive checkout review",
      "Mobile navigation",
    ],
    architecture:
      "Reusable menu, cart, and checkout components; browsing state separated from checkout state; layout tuned so imagery never blocks the ordering task.",
    decisions: [
      "Browsing state and checkout state are separate so the menu stays responsive while order details change.",
      "Cart actions sit next to the food item rather than in a distant drawer.",
      "Every interaction state is explicit: empty cart, updating quantity, checkout review.",
    ],
    challenge:
      "Making the product feel visual without letting imagery slow down the ordering task.",
    lessons:
      "Commerce polish is mostly invisible. Users feel quality when totals, quantities, and mobile spacing behave exactly as expected.",
    result: "A deployed ordering flow that works from 320px up.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    liveUrl: "https://food-delivery-rho-rouge.vercel.app/",
    sourceUrl: "https://github.com/CHAL7777/food-delivery",
  },
  {
    slug: "ecommerce-dashboard",
    title: "E-commerce Operations Dashboard",
    category: "Dashboard",
    year: "2025",
    role: "Frontend developer",
    status: "Live",
    image: "/docs/ecco.png",
    imageAlt:
      "Operations dashboard with revenue charts, inventory metrics, and a sales table.",
    accent: "#a78bfa",
    summary:
      "A dense analytics surface for sales, inventory, and revenue that stays readable on a small laptop.",
    problem:
      "Dashboards turn into walls of numbers. A manager needs fast comparison, not a decorative report.",
    goals: [
      "Let someone scan status, notice change, and move on.",
      "Stay useful at 13-inch laptop widths.",
    ],
    solution:
      "A React dashboard built from reusable metric, inventory, and chart components with a layout system tuned for dense information.",
    features: [
      "Sales overview",
      "Inventory cards",
      "Revenue charts",
      "Responsive tables",
    ],
    architecture:
      "Typed KPI, table, and chart components; a grid layout that collapses predictably; charting isolated behind a small wrapper so the library can be swapped.",
    decisions: [
      "Consistent card anatomy so the eye compares metrics without relearning each block.",
      "Typography and spacing were settled before any colour accents were added.",
      "Tables collapse into summaries on narrow viewports instead of scrolling horizontally.",
    ],
    challenge: "Balancing density with breathing room.",
    lessons:
      "A dashboard succeeds when it helps people answer a small set of repeated questions quickly.",
    result:
      "A deployed prototype that shows how I structure information-dense UI.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Charts", "Netlify"],
    liveUrl: "https://eccommercebychal.netlify.app",
    sourceUrl: "https://github.com/CHAL7777/eccomerce-dashboard",
  },
  {
    slug: "ethio-ebook",
    title: "Ethiopian E-book Library",
    category: "Content",
    year: "2025",
    role: "Full-stack developer",
    status: "Live",
    image: "/docs/ebook.png",
    imageAlt:
      "Digital library with a book catalogue, search bar, and category navigation.",
    accent: "#fbbf24",
    summary:
      "A digital library focused on discovery: categories, search-friendly structure, and a light reading flow.",
    problem:
      "Content-heavy sites get hard to use when navigation and filtering are afterthoughts.",
    goals: [
      "Move a visitor from browsing to choosing a book with minimal friction.",
      "Support English and Amharic.",
    ],
    solution:
      "A Next.js content site organised around book metadata, category pages, locale-prefixed routes, and mobile reading behaviour.",
    features: [
      "Book browsing and categories",
      "Localised routes (/en, /am)",
      "Download flow",
      "Mobile reading focus",
    ],
    architecture:
      "Locale-prefixed App Router routes; book metadata in typed modules driving both cards and detail pages; image constraints to avoid layout shift.",
    decisions: [
      "Category navigation was designed before visual detail to protect the browsing path.",
      "Cards are consistent so books can be compared quickly.",
      "Locale is part of the URL so links are shareable in either language.",
    ],
    challenge:
      "Showing enough book context to support a choice while keeping pages light.",
    lessons:
      "Good content UX is quiet. Readers should never have to hunt for the next useful action.",
    result: "A live bilingual library site.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "i18n routing",
      "Vercel",
    ],
    liveUrl: "https://ethio-book-site.vercel.app/",
  },
  {
    slug: "study-buddy",
    title: "Study Buddy",
    category: "SaaS",
    year: "2026",
    role: "Frontend developer",
    status: "MVP",
    image: "/docs/saas-s.png",
    imageAlt:
      "Study Buddy workspace with task boards, progress rings, and a resource list.",
    accent: "#8b5cf6",
    summary:
      "A planning workspace that turns student work into visible priorities, resources, and progress.",
    problem:
      "Students know they have work to do, but the plan is scattered across notes, chats, and memory.",
    goals: [
      "Make the next study action visible.",
      "Avoid becoming project-management overhead.",
    ],
    solution:
      "A Next.js app shell with task, resource, and progress surfaces built as independent modules so a backend can be added without a rewrite.",
    features: [
      "Task planning",
      "Resource organisation",
      "Progress view",
      "Responsive app shell",
    ],
    architecture:
      "App shell with independent task, resource, and progress modules; Framer Motion for transitions between views; structure ready for persistence.",
    decisions: [
      "The shell is calm and repeatable so it can be opened every day.",
      "Progress is a workflow signal, not a decorative chart.",
      "Motion is limited to view transitions.",
    ],
    challenge:
      "Enough structure to help, not so much that students abandon it.",
    lessons:
      "Productivity tools should protect momentum. Every extra field has to earn its place.",
    result: "A deployed MVP of the interface layer.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    liveUrl: "https://student-sass.vercel.app/",
    sourceUrl: "https://github.com/CHAL7777/studen-saas",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const moreProjects = projects.filter((p) => !p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/* ─────────────────────────────────────────────────────────
   Engineering — what I do beyond the UI, with evidence
   ───────────────────────────────────────────────────────── */

export type EngineeringArea = {
  title: string;
  text: string;
  evidence: string;
};

export const engineeringAreas: EngineeringArea[] = [
  {
    title: "Frontend architecture",
    text: "Typed components with one shared data shape per entity, URL-driven state where it should be shareable, and explicit loading, empty, and error states.",
    evidence: "SoleFlow · Jalo Hotel · this site",
  },
  {
    title: "REST APIs",
    text: "Endpoints with validated input, honest error shapes, and CORS and environment configuration handled deliberately. FastAPI and Node.",
    evidence: "Portfolio contact API · fastAPI-class · hucms",
  },
  {
    title: "Databases",
    text: "Relational schemas in PostgreSQL and MySQL. Constraints over conventions; queries I can read back and explain.",
    evidence: "Student-Management-System · hucms",
  },
  {
    title: "Authentication",
    text: "Session and token flows, protected routes, and permission checks that fail safely.",
    evidence: "Jalo staff portal · Secure-Student-Data-Web-Application",
  },
  {
    title: "API integration",
    text: "Third-party and LLM APIs called from the server so secrets stay off the client, with output validated before it reaches the UI.",
    evidence: "EthioPath AI · Telegram bots",
  },
  {
    title: "Deployment",
    text: "Vercel and Netlify deployments, environment-variable boundaries, and build checks before merge.",
    evidence: "Every live project above",
  },
  {
    title: "Performance",
    text: "Image sizing per breakpoint, deferred off-screen media, no layout shift, reduced-motion support.",
    evidence: "SoleFlow product grid · this site",
  },
  {
    title: "Responsive design",
    text: "Layouts tested from 320px up. No accidental horizontal scroll; touch targets sized for thumbs.",
    evidence: "All shipped projects",
  },
];

/** The request path I design around. Rendered by SystemDiagram. */
export const requestPath = [
  {
    id: "client",
    label: "Client",
    detail:
      "Next.js UI. Validated input, optimistic state, explicit error and empty states.",
  },
  {
    id: "edge",
    label: "Edge",
    detail: "Routing and caching before compute. Static where possible.",
  },
  {
    id: "auth",
    label: "Auth",
    detail:
      "Identity and permission checks resolved before business logic runs.",
  },
  {
    id: "api",
    label: "API",
    detail:
      "Typed request and response contracts. Errors have a shape the UI can use.",
  },
  {
    id: "data",
    label: "Postgres",
    detail:
      "Source of truth. Constraints protect integrity; queries stay explainable.",
  },
  {
    id: "cache",
    label: "Cache",
    detail:
      "Repeat reads served fast, with invalidation rules written next to the write path.",
  },
];

/* ─────────────────────────────────────────────────────────
   About — timeline from the résumé, nothing added
   ───────────────────────────────────────────────────────── */

export type TimelineEntry = {
  period: string;
  title: string;
  organization: string;
  text: string;
};

export const timeline: TimelineEntry[] = [
  {
    period: "2024 — now",
    title: "Independent product builder",
    organization: "Self-directed, publicly deployed",
    text: "Commerce, hospitality, dashboard, content, and AI-guided products from idea to live URL. Reusable typed components, route-driven filtering, persistent client state.",
  },
  {
    period: "2024 — now",
    title: "Freelance frontend developer",
    organization: "Client sites, dashboards, MVPs",
    text: "Turning rough briefs into scoped landing pages and dashboards, then refining responsive behaviour, keyboard access, and mobile spacing.",
  },
  {
    period: "2025",
    title: "Frontend developer intern",
    organization: "Tech Solutions",
    text: "Responsive React components and UI fixes from design feedback; code reviews; documented component usage.",
  },
  {
    period: "2023 — now",
    title: "Student project lead",
    organization: "Haramaya University",
    text: "Leading small teams from idea to demo: scoping, splitting implementation, reviewing code, presenting working builds.",
  },
];

export const education = {
  degree: "B.Sc. Software Engineering",
  institution: "Haramaya University, Ethiopia",
  period: "2023 — expected 2028",
  coursework: [
    "Data Structures & Algorithms",
    "Database Systems",
    "Web Programming",
    "Software Engineering",
    "Object-Oriented Programming",
    "Computer Networks",
  ],
};

export const certificates = [
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "Udacity",
    year: "2025",
    image: "/docs/ai.png",
  },
  {
    title: "Programming Fundamentals",
    issuer: "Udacity",
    year: "2025",
    image: "/docs/web.png",
  },
  {
    title: "Web Programming",
    issuer: "Hucisa",
    year: "2024",
    image: "/docs/web-h.jpg",
  },
];

/* ─────────────────────────────────────────────────────────
   GitHub — verified public repositories, used as the
   fallback when the GitHub API is unavailable.
   ───────────────────────────────────────────────────────── */

export type Repo = {
  name: string;
  description: string | null;
  language: string | null;
  url: string;
  stars: number;
  updatedAt?: string;
};

export const pinnedRepos: Repo[] = [
  {
    name: "chala-product-store",
    description:
      "SoleFlow footwear storefront — URL-driven catalogue filtering, product routes, persistent cart and wishlist.",
    language: "JavaScript",
    url: "https://github.com/CHAL7777/chala-product-store",
    stars: 1,
  },
  {
    name: "food-delivery",
    description:
      "Responsive ordering UI with menu, cart, and checkout modules.",
    language: "TypeScript",
    url: "https://github.com/CHAL7777/food-delivery",
    stars: 0,
  },
  {
    name: "eccomerce-dashboard",
    description:
      "Information-dense operations dashboard: KPIs, inventory, revenue charts.",
    language: "TypeScript",
    url: "https://github.com/CHAL7777/eccomerce-dashboard",
    stars: 0,
  },
  {
    name: "hucms",
    description: "Haramaya University Cafeteria Management System (HUCMS).",
    language: "PHP",
    url: "https://github.com/CHAL7777/hucms",
    stars: 1,
  },
  {
    name: "Student-Management-System",
    description: "Student records management with a relational schema.",
    language: "TypeScript",
    url: "https://github.com/CHAL7777/Student-Management-System",
    stars: 1,
  },
  {
    name: "fastAPI-class",
    description: "FastAPI endpoints, validation, and async patterns.",
    language: "Python",
    url: "https://github.com/CHAL7777/fastAPI-class",
    stars: 0,
  },
];
