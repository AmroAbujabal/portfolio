# Product

## Register

brand

## Users

Recruiters and engineers who arrive from Amr's resume or LinkedIn. They skim: they give the page 30–60 seconds to answer "is this person worth a call?" Secondary audience: engineers checking the project links before or after an interview.

## Product Purpose

Personal portfolio for Amr Abujabal, a fourth-year CS student at UBC Okanagan graduating May 2027. The site exists to convert resume views into interview calls by making four projects (PitchVision, World Cup 2026 Predictor, Reproducing ResNet, ByteBites) legible and credible fast. Success = recruiter downloads the resume or clicks a repo/demo link.

## Brand Personality

Restrained, precise, confident. Tesla-style white minimalism: the work speaks, the design stays out of the way. Monochrome, one typeface (Montserrat), hairline borders, weight-based hierarchy.

## Anti-references

- The user explicitly rejected a dark amber "editorial" design and a blueprint/spotlight design as "AI slop." No decorative gradients, noise overlays, glow effects, or ornate type pairings.
- Generic developer-portfolio templates (icon grids, skill progress bars, hero-metric cards).

## Design Principles

1. **Content is the interface** — every element must earn its place; when in doubt, remove.
2. **Whitespace does the work** — hierarchy through spacing and weight, not color or decoration.
3. **Fast and quiet motion** — reveals ≤400ms, easeOut only, full prefers-reduced-motion fallback.
4. **One file to update** — all content lives in `src/data/content.ts`; design never depends on specific content.

## Accessibility & Inclusion

Semantic HTML, keyboard-navigable, visible focus states, WCAG AA contrast in both themes, prefers-reduced-motion respected globally (hard kill-switch in globals.css plus useReducedMotion guards).
