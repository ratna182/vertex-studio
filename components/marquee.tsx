"use client";

import { motion, useReducedMotion } from "motion/react";

const ITEMS = [
  "Website Custom",
  "Identitas Visual",
  "Render 3D",
  "Landing Page",
  "Undangan Digital",
  "Kasir POS",
];

export function Marquee() {
  const reduce = useReducedMotion();
  const row = (ariaHidden: boolean) => (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center"
    >
      {ITEMS.map((item) => (
        <li
          key={item}
          className="flex items-center whitespace-nowrap px-6 md:px-10"
        >
          <span className="font-display text-3xl font-bold uppercase tracking-[-0.02em] text-line md:text-5xl">
            {item}
          </span>
          <span
            aria-hidden="true"
            className="ml-12 h-2 w-2 rotate-45 border border-accent md:ml-20"
          />
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label="Layanan yang dikerjakan" className="overflow-hidden border-b border-line py-8 md:py-12">
      <motion.div
        className="flex w-max"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {row(false)}
        {row(true)}
      </motion.div>
    </section>
  );
}
