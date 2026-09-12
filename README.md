# NextJobMatch

**Find jobs that actually match your skills, goals, and preferences.** NextJobMatch
uses AI to filter out the noise so you only see roles worth your time — and you stay
in control of what gets through.

This repository contains the **NextJobMatch marketing site**: a fast, SEO-friendly
landing page built with Next.js (App Router) and Tailwind CSS, including a blog.

## Highlights

- **Modern Next.js App Router** site with server components and file-based routing.
- **SEO-ready out of the box** — generated `sitemap.ts` and `robots.ts`, Open Graph
  metadata, and a content-driven blog under `app/blog`.
- **Conversion-focused landing page** composed of clear sections: Hero, Problem,
  Solution, Value, Workflow, Impact, Trust and CTA.
- **Analytics-aware** — Google Analytics helper (`lib/gtag.ts`) and a scroll-depth
  tracker component.
- **Styled with Tailwind CSS** and the Geist font.

## Tech stack

Next.js · TypeScript · React · Tailwind CSS

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Edit
`app/page.tsx` and the components in `components/` — the page hot-reloads as you save.

## Project structure

```
app/          App Router pages, layout, blog, sitemap & robots
components/    Landing-page sections (Hero, Problem, Solution, …)
lib/          Site config (lib/site.ts), blog helpers, analytics
public/        Static assets
```

## Build & deploy

```bash
npm run build
npm run start
```

The site deploys cleanly to any Next.js host (e.g. Vercel).

## License

All rights reserved unless a license file is added.
