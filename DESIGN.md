# Design

## Theme

Swiss minimalism, light-first. Near-white ground (#FAFAFA), true-white surfaces, near-black ink. Dark mode is an inversion of the same scale, toggled via `.dark` class (next-themes), never system-driven.

## Color

Semantic tokens defined in `src/app/globals.css` (`:root` light, `.dark` overrides) and mapped to utilities via Tailwind v4 `@theme inline`:

| Token | Light | Dark | Utility |
|---|---|---|---|
| `--bg` | `#fafafa` | `#0a0a0a` | `bg-bg` |
| `--surface` | `#ffffff` | `#141414` | `bg-surface` |
| `--border` | `#e4e4e7` | `#262626` | `border-border` |
| `--fg` | `#171717` | `#f5f5f5` | `text-fg` |
| `--fg-muted` | `#52525b` | `#a1a1aa` | `text-fg-muted` |

No accent color. Emphasis via weight and size only. Inverted `::selection`.

## Typography

Single family: Montserrat (next/font, weights 400/500/600/700, variable `--font-montserrat`).

- Display (hero name): text-5xl → 7xl, font-semibold, tracking-tight, text-balance
- Section titles: text-3xl/4xl, font-semibold, tracking-tight
- Labels/eyebrows: text-xs, font-medium, uppercase, tracking 0.14–0.22em
- Body: base/lg, leading-relaxed, `text-fg-muted` for secondary prose

## Layout

Single page, anchored sections (`#about #projects #skills #contact`). Content columns: max-w-3xl for prose, max-w-5xl for project cards. Section rhythm: py-28 md:py-36. Hairline `border-t` dividers structure lists (skills rows, about facts).

## Components

- `Navbar` — fixed, transparent until scroll > 8px, then hairline border + `bg-bg/85 backdrop-blur`
- `Hero` — full-viewport centered; black pill CTA + outlined secondary
- `Projects` — stacked full-width cards, `md:grid-cols-[240px_1fr]`, hover: soft shadow (light) / border lift (dark)
- `Skills` — table rows: uppercase label left, `·`-separated items right
- `ScrollReveal` — opacity 0→1, y 12→0, 0.4s easeOut, whileInView once
- `SectionHeading` — section title (h2) wrapped in ScrollReveal; no eyebrow labels by design
- `ThemeToggle` — sun/moon icon button, hydration-safe

## Motion

Framer Motion. Durations 200–400ms, easeOut only, no bounce. Hero uses staggerChildren 0.08s. Every animated component checks `useReducedMotion`; globals.css also force-disables animation under `prefers-reduced-motion`.
