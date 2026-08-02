"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Reveal } from "@/components/reveal";

function AccentWord({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <span className="relative inline-block">
      <em className="font-display font-normal italic tracking-[-0.01em] text-accent">
        {children}
      </em>
      <motion.span
        aria-hidden="true"
        className="absolute -bottom-1 left-0 right-0 h-px origin-left bg-accent"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      />
    </span>
  );
}

export function Manifesto() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="manifesto-title"
      className="mx-auto max-w-[1440px] px-5 py-24 md:px-16 md:py-[120px]"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-9">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
              {"01 \u2014 Manifesto"}
            </p>
            <motion.h2
              id="manifesto-title"
              style={reduce ? undefined : { y: titleY }}
              className="mt-8 font-display text-[clamp(1.9rem,4.2vw,3.4rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-ink"
            >
              Sebagian besar website hanya{" "}
              <AccentWord>terlihat bagus</AccentWord>. Kami membangun yang
              benar-benar bekerja: cepat, mudah ditemukan di Google, dan
              disusun untuk <AccentWord>dikonversi</AccentWord>.
            </motion.h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-x-16 gap-y-8 border-t border-line pt-10 md:grid-cols-2">
            <Reveal delay={0.05}>
              <p className="text-[15px] leading-relaxed text-muted">
                VERTEX STUDIO adalah studio desain dan digital di Jakarta yang
                mengerjakan identitas visual, website, render 3D, dan sistem
                kasir untuk bisnis yang menjadikan desain sebagai alat, bukan
                sekadar hiasan.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[15px] leading-relaxed text-muted">
                Setiap proyek dikerjakan oleh tim kecil dengan alur yang jelas:
                riset, konsep, eksekusi, revisi. Tidak ada subkontraktor, tidak
                ada template, dan tidak ada janji yang tidak bisa ditepati.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
