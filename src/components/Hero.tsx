"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { hero } from "@/data/content";

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center">
      <motion.div
        variants={prefersReduced ? undefined : stagger}
        initial={prefersReduced ? false : "hidden"}
        animate={prefersReduced ? undefined : "show"}
        className="mx-auto max-w-3xl"
      >
        <motion.h1
          variants={rise}
          className="text-5xl font-semibold tracking-tight text-balance sm:text-6xl md:text-7xl"
        >
          {hero.name}
        </motion.h1>

        <motion.p
          variants={rise}
          className="mt-6 text-xs font-medium tracking-[0.22em] text-fg-muted uppercase sm:text-sm"
        >
          {hero.tagline}
        </motion.p>

        <motion.p
          variants={rise}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg"
        >
          {hero.intro}
        </motion.p>

        <motion.div
          variants={rise}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href={hero.resumePath}
            download
            className="w-full cursor-pointer rounded bg-fg px-10 py-3 text-sm font-medium text-bg transition-opacity duration-200 hover:opacity-85 sm:w-auto"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="w-full cursor-pointer rounded border border-border bg-surface px-10 py-3 text-sm font-medium transition-colors duration-200 hover:border-fg-muted sm:w-auto"
          >
            View Projects
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
