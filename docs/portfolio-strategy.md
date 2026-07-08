# Portfolio Strategy

## Structure

- `app/page.tsx`: one-page portfolio composition.
- `app/sections/*`: isolated content sections for hero, projects, skills, about, experience, education, certificates, achievements, GitHub, testimonials, blog, resume, contact, and footer.
- `app/data/portfolio.ts`: central content source for profile, projects, skills, achievements, links, education, and social proof.
- `components/*`: shared UI behavior such as navbar, reveal animation, typing effect, animated counters, scroll progress, background, and back-to-top.
- `backend/*`: FastAPI contact service with CORS, validation, honeypot handling, optional SMTP, and health check.

## Content Direction

- Lead with a clear software developer positioning statement.
- Show project context, features, technologies, challenges, and lessons learned instead of only screenshots.
- Group skills by recruiter-friendly categories: frontend, backend, databases, programming languages, and tools.
- Separate education, certifications, achievements, GitHub activity, resume, and contact so each signal is easy to scan.

## UI/UX Recommendations

- Keep the first viewport focused on role fit, technical stack, calls to action, and proof points.
- Use dense but calm sections for dashboards, skills, and GitHub data.
- Prefer 8px cards, clear borders, glass surfaces, and small motion details over heavy decoration.
- Keep project search and filters visible near the section heading for quick scanning.
- Preserve accessible focus states, keyboard-friendly controls, semantic headings, and reduced-motion support.

## Color Palette

- Light background: `#f8fafc`
- Dark background: `#080b10`
- Primary ink: `#101623`
- Primary accent: `#2563eb`
- Secondary accent: `#0891b2`
- Success accent: `#16a34a`
- Warm highlight: `#f59e0b`

## Typography

- Display and body: Inter with system fallbacks.
- Use strong weight, zero letter spacing, and responsive Tailwind text steps.
- Reserve large type for section and hero headlines; keep cards compact and readable.

## Component Architecture

- Centralize portfolio data in `app/data/portfolio.ts`.
- Keep animation primitives in reusable client components.
- Use server components for static sections and client components only where interactivity is needed.
- Keep contact handling decoupled through `NEXT_PUBLIC_CONTACT_ENDPOINT`.

## SEO Strategy

- Metadata includes title templates, description, keywords, canonical URL, Open Graph, Twitter card, and robots.
- JSON-LD `Person` schema describes name, role, links, image, email, location, and technical knowledge.
- `app/sitemap.ts` and `app/robots.ts` are included.
- Set `NEXT_PUBLIC_SITE_URL` in production for canonical and sitemap URLs.

## Deployment Strategy

- Deploy the Next.js app to Vercel, Netlify, or another Node-compatible platform.
- Deploy the FastAPI backend separately on Render, Railway, Fly.io, or a VPS.
- Set frontend environment variables:
  - `NEXT_PUBLIC_SITE_URL`
  - `NEXT_PUBLIC_CONTACT_ENDPOINT`
- Set backend environment variables from `backend/.env.example`.
- Configure `CONTACT_ALLOWED_ORIGINS` to the production portfolio URL.
