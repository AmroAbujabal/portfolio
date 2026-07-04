"use client";

import { skillGroups } from "@/data/content";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title="What I work with" />

        <div className="mt-12">
          {skillGroups.map((group, gi) => (
            <ScrollReveal key={group.label} delay={0.05 * (gi + 1)}>
              <div className="grid gap-3 border-t border-border py-7 sm:grid-cols-[180px_1fr] sm:gap-8">
                <h3 className="text-xs font-medium tracking-[0.16em] text-fg-muted uppercase sm:pt-1">
                  {group.label}
                </h3>
                <p className="text-[15px] leading-loose">
                  {group.items.map((skill, si) => (
                    <span key={skill}>
                      <span className="whitespace-nowrap">{skill}</span>
                      {si < group.items.length - 1 && (
                        <>
                          {" "}
                          <span className="mx-1.5 text-border" aria-hidden>
                            ·
                          </span>{" "}
                        </>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
