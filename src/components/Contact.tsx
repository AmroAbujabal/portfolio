"use client";

import { socialLinks } from "@/data/content";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="px-6 pt-28 pb-10 md:pt-36">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <p className="text-xs font-medium tracking-[0.2em] text-fg-muted uppercase">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s get in touch
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <p className="mx-auto mt-6 max-w-md leading-relaxed text-fg-muted">
            Open to internships, collaborations, and conversations about interesting engineering
            problems.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <a
            href="mailto:Amrabujabal35@gmail.com"
            className="mt-8 inline-block cursor-pointer rounded bg-fg px-10 py-3 text-sm font-medium text-bg transition-opacity duration-200 hover:opacity-85"
          >
            Email Me
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-8 flex items-center justify-center gap-8">
            {socialLinks
              .filter((l) => !l.href.startsWith("mailto:"))
              .map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-sm font-medium text-fg-muted underline-offset-4 transition-colors duration-200 hover:text-fg hover:underline"
                >
                  {link.label}
                </a>
              ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <footer className="mt-24 border-t border-border pt-6">
            <p className="text-xs text-fg-muted">
              © {new Date().getFullYear()} Amr Abujabal
            </p>
          </footer>
        </ScrollReveal>
      </div>
    </section>
  );
}
