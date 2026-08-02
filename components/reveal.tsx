"use client";

import { motion, useReducedMotion } from "motion/react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article" | "section" | "span";
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  blur?: boolean;
};

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  direction = "up",
  distance = 24,
  blur = false,
}: RevealProps) {
  const reduce = useReducedMotion();
  const Comp = motion[as];

  const offset =
    direction === "up"
      ? { y: distance }
      : direction === "down"
        ? { y: -distance }
        : direction === "left"
          ? { x: distance }
          : direction === "right"
            ? { x: -distance }
            : {};

  return (
    <Comp
      className={className}
      initial={
        reduce
          ? false
          : { opacity: 0, ...offset, ...(blur ? { filter: "blur(8px)" } : {}) }
      }
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        ...(blur ? { filter: "blur(0px)" } : {}),
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </Comp>
  );
}
