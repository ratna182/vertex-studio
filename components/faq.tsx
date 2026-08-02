"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FAQS } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="border-t border-line"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-16 md:py-[120px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
                  {"05 \u2014 FAQ"}
                </p>
                <h2
                  id="faq-title"
                  className="mt-6 font-display text-[clamp(1.9rem,4.2vw,3.2rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink"
                >
                  Pertanyaan yang sering diajukan.
                </h2>
                <p className="mt-6 max-w-[34ch] text-[14px] leading-relaxed text-muted">
                  Jawaban singkat untuk hal yang paling sering ditanyakan.
                  Sisanya bisa dibahas langsung di konsultasi.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-line">
              {FAQS.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={faq.question} delay={Math.min(i * 0.04, 0.2)}>
                    <div className="border-b border-line">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${i}`}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="group flex w-full cursor-pointer items-baseline justify-between gap-6 py-7 text-left text-[15px] font-medium text-ink transition-colors hover:text-accent md:text-base"
                      >
                        <span className="max-w-[52ch]">{faq.question}</span>
                        <motion.span
                          aria-hidden="true"
                          className="shrink-0 font-mono text-lg text-muted"
                          animate={reduce ? undefined : { rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                          +
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`faq-panel-${i}`}
                            initial={reduce ? false : { height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={reduce ? undefined : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="max-w-[58ch] pb-8 pr-12 text-[14px] leading-relaxed text-muted">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
