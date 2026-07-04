# Amr Abujabal — Portfolio

Personal portfolio site. Next.js 16 + TypeScript + Tailwind CSS v4 + Framer Motion.

## Local Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to Vercel

### Option A: GitHub (recommended — auto-deploys on push)

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo → Vercel auto-detects Next.js → click **Deploy**
4. Every push to `main` auto-deploys

### Option B: CLI

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

## How to Add a Project

Open `src/data/content.ts` and add an object to the `projects` array:

```ts
{
  title: "My New Project",
  subtitle: "Category / Context",
  description: "What it does, in 2-3 sentences.",
  stack: ["Tech1", "Tech2", "Tech3"],
  repoUrl: "https://github.com/...",
  demoUrl: "https://...",       // optional
  status: "In Progress",       // optional badge
}
```

That's it — no component changes needed.

## How to Update Skills / Bio / Links

Everything is in `src/data/content.ts`:

- `hero` — name, tagline, intro, resume path
- `about` — bio paragraphs
- `skillGroups` — skill categories and items
- `socialLinks` — GitHub, LinkedIn, email

## Resume PDF

Drop your resume at `public/AmrAbujabal_CV.pdf`. The download button links to it.

## Stack

- **Next.js 16** (App Router, statically prerendered)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — scroll reveals, hover effects, staggered animations
- **next-themes** — dark/light mode toggle
- **Fonts** — Montserrat via `next/font`
