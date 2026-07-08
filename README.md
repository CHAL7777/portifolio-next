# Chala Gobena Portfolio

Modern software developer portfolio built with Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion, and a FastAPI contact backend scaffold.

## Features

- Responsive one-page portfolio with dark and light mode
- Recruiter-focused hero, projects, skills, experience, education, certifications, achievements, GitHub, testimonials, blog, resume preview, and contact sections
- Project search and category filtering
- Animated typing text, counters, reveal motion, scroll progress, and back-to-top button
- SEO metadata, Open Graph, Twitter card, robots, sitemap, and JSON-LD structured data
- Contact form with local Next.js route fallback and optional FastAPI backend
- Custom loading state and 404 page

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React
- React Icons
- FastAPI contact service

## Project Structure

```text
app/
  api/contact/route.ts
  data/portfolio.ts
  sections/
  layout.tsx
  page.tsx
  globals.css
  loading.tsx
  not-found.tsx
  robots.ts
  sitemap.ts
backend/
  main.py
  requirements.txt
  .env.example
components/
  animated-counter.tsx
  background-main.tsx
  navbar.tsx
  reveal.tsx
  scroll-progress.tsx
  scroll-to-top.tsx
  typing-effect.tsx
docs/
  portfolio-strategy.md
public/
  docs/
  img/
  resume.pdf
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Contact Backend

The frontend posts to `NEXT_PUBLIC_CONTACT_ENDPOINT` when configured. Without that variable, it uses the local Next.js route at `/api/contact`.

Run the FastAPI backend:

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

Then set:

```bash
NEXT_PUBLIC_CONTACT_ENDPOINT=http://localhost:8000/api/contact
```

Configure production SMTP values from `backend/.env.example`.

## Production Environment

Set these variables for best SEO and contact behavior:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_ENDPOINT=https://your-contact-api.com/api/contact
CONTACT_WEBHOOK_URL=https://optional-webhook.example.com
```

## Verification

```bash
npm run lint
npm run build
```

See [docs/portfolio-strategy.md](docs/portfolio-strategy.md) for design, content, SEO, architecture, and deployment notes.
