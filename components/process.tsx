"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useInView, animate } from "motion/react";
import { useEffect, useState } from "react";
import { PROCESS, STATS } from "@/lib/site";
import { Reveal } from "@/components/reveal";

function StepNumber({ index, start }: { index: number; start: boolean }) {
  const [value, setValue] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!start) return;
    if (reduce) {
      setValue(index);
      return;
    }
    const controls = animate(0, index, {
      duration: 0.8,
      delay: index * 0.15,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [start, index, reduce]);

  return (
    <span className="font-mono text-sm tracking-[0.08em] text-accent">
      {String(value).padStart(2, "0")}
    </span>
  );
}

export function Process() {
  const reduce = useReducedMotion();
  const stepsRef = useRef<HTMLOListElement>(null);
  const stepsInView = useInView(stepsRef, { once: true, amount: 0.3 });

  return (
    <section
      id="proses"
      aria-labelledby="proses-title"
      className="border-t border-line"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-16 md:py-[120px]">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
            {"04 \u2014 Proses"}
          </p>
          <h2
            id="proses-title"
            className="mt-6 max-w-[16ch] font-display text-[clamp(1.9rem,4.2vw,3.2rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink"
          >
            Empat langkah, tanpa kejutan.
          </h2>
        </Reveal>

        <ol
          ref={stepsRef}
          className="mt-14 grid grid-cols-1 gap-px border-t border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
        >
          {PROCESS.map((step, i) => (
            <li key={step.no} className="bg-canvas p-8 md:p-10">
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 32 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <StepNumber index={i + 1} start={stepsInView} />
                <h3 className="mt-8 font-display text-lg font-semibold tracking-[-0.01em] text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[34ch] text-[14px] leading-relaxed text-muted">
                  {step.description}
                </p>
              </motion.div>
            </li>
          ))}
        </ol>

        <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line pt-10 md:grid-cols-4">
          {STATS.map((stat) => (
            <Reveal key={stat.label} delay={0.05}>
              <div>
                <dd className="font-display text-4xl font-semibold tracking-[-0.02em] text-ink md:text-5xl">
                  {stat.value}
                </dd>
                <dt className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  {stat.label}
                </dt>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
