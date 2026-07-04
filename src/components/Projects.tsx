"use client";

import { projects } from "@/data/content";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { ArrowUpRight } from "./icons";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Selected work" />

        <div className="mt-12 space-y-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={0.05 * (i + 1)}>
              <article className="group rounded-lg border border-border bg-surface p-8 transition-shadow duration-250 hover:shadow-[0_2px_16px_rgba(0,0,0,0.06)] md:p-10 dark:hover:shadow-none dark:hover:border-fg-muted/40">
                <div className="grid gap-8 md:grid-cols-[240px_1fr]">
                  {/* Left: title + meta */}
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                    <p className="mt-2 text-xs font-medium tracking-[0.14em] text-fg-muted uppercase">
                      {project.subtitle}
                    </p>
                    {project.status && (
                      <p className="mt-3 inline-block rounded border border-border px-2 py-0.5 text-[11px] font-medium tracking-wider text-fg-muted uppercase">
                        {project.status}
                      </p>
                    )}
                  </div>

                  {/* Right: description + stack + links */}
                  <div>
                    <p className="leading-relaxed text-fg-muted">{project.description}</p>

                    <p className="mt-5 text-sm text-fg-muted">
                      {project.stack.map((tech, ti) => (
                        <span key={tech}>
                          {tech}
                          {ti < project.stack.length - 1 && (
                            <span className="mx-2 text-border" aria-hidden>
                              ·
                            </span>
                          )}
                        </span>
                      ))}
                    </p>

                    <div className="mt-6 flex gap-6">
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex cursor-pointer items-center gap-1 text-sm font-medium underline-offset-4 transition-colors duration-200 hover:underline"
                      >
                        View Code <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex cursor-pointer items-center gap-1 text-sm font-medium underline-offset-4 transition-colors duration-200 hover:underline"
                        >
                          Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
