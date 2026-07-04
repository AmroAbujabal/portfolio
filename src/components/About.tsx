"use client";

import { about } from "@/data/content";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const facts = [
  { label: "School", value: "UBC Okanagan" },
  { label: "Graduating", value: "May 2027" },
  { label: "Focus", value: "Backend · Cloud · Computer Vision" },
] as const;

export default function About() {
  return (
    <section id="about" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-3xl">
        <SectionHeading label="About" title="A little background" />

        <div className="mt-10 space-y-5">
          {about.paragraphs.map((p, i) => (
            <ScrollReveal key={i} delay={0.05 * (i + 1)}>
              <p className="leading-relaxed text-fg-muted">{p}</p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <dl className="mt-14 grid gap-8 border-t border-border pt-8 sm:grid-cols-3">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="text-xs font-medium tracking-[0.16em] text-fg-muted uppercase">
                  {f.label}
                </dt>
                <dd className="mt-2 text-sm font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
        </ScrollReveal>
      </div>
    </section>
  );
}
