"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useInView,
  animate,
} from "motion/react";
import { STATS, WA_DEFAULT } from "@/lib/site";
import { useEffect } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

function useCountUp(target: number, start: boolean, duration = 1.6) {
  const [value, setValue] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!start || reduce) {
      if (reduce) setValue(target);
      return;
    }
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [start, target, duration, reduce]);

  return value;
}

function StatValue({ value, start }: { value: string; start: boolean }) {
  if (!start || /[–—]/.test(value)) return <>{value}</>;
  const match = value.match(/^([\d.]+)(.*)$/);
  if (!match) return <>{value}</>;
  const num = parseFloat(match[1]);
  const suffix = match[2];
  const counted = useCountUp(num, start);
  return (
    <>
      {Number.isInteger(num) ? counted : (counted / 10).toFixed(1)}
      {suffix}
    </>
  );
}

function MagneticLink({
  href,
  children,
  className,
  strength = 0.35,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 15, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 180, damping: 15, mass: 0.3 });

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

function WordReveal({ text, delay }: { text: string; delay: number }) {
  const reduce = useReducedMotion();
  return (
    <span
      className="inline-block overflow-hidden align-bottom"
      style={{ paddingBottom: "0.08em", marginBottom: "-0.08em" }}
    >
      <motion.span
        className="inline-block"
        initial={reduce ? false : { y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        {text}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const figureRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDListElement>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: figureRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: EASE },
  });

  return (
    <section
      id="beranda"
      aria-labelledby="hero-title"
      className="border-b border-line"
    >
      <div className="mx-auto max-w-[1440px] px-5 pb-16 pt-20 md:px-16 md:pb-24 md:pt-28">
        <div className="grid grid-cols-1 items-end gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <motion.p
              {...fade(0)}
              className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-muted"
            >
              <motion.span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 bg-accent"
                animate={reduce ? undefined : { scale: [1, 1.6, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              {`Studio Desain & Digital \u2014 Jakarta`}
            </motion.p>

            <motion.h1
              id="hero-title"
              className="mt-8 font-display text-[clamp(2.9rem,7vw,5.6rem)] font-bold leading-[1.05] tracking-[-0.04em] text-ink"
            >
              {["Desain", "yang"].map((w, i) => (
                <WordReveal key={w} text={w + " "} delay={0.05 + i * 0.08} />
              ))}
              <motion.em
                className="inline-block font-display font-normal italic tracking-[-0.01em] text-accent"
                initial={reduce ? false : { opacity: 0, y: "110%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
                whileHover={reduce ? undefined : { letterSpacing: "-0.02em" }}
              >
                menumbuhkan
              </motion.em>{" "}
              {["bisnis."].map((w, i) => (
                <WordReveal key={w} text={w} delay={0.35 + i * 0.08} />
              ))}
            </motion.h1>

            <motion.p
              {...fade(0.5)}
              className="mt-8 max-w-[50ch] text-[15px] leading-relaxed text-muted md:text-lg"
            >
              Website, identitas visual, dan render 3D yang membuat bisnis Anda
              ditemukan, dipercaya, lalu dipilih. Tanpa template. Tanpa
              kata-kata kosong.
            </motion.p>

            <motion.div
              {...fade(0.6)}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              <MagneticLink
                href={WA_DEFAULT}
                className="group inline-flex items-center bg-ink px-8 py-4 text-sm font-medium text-canvas transition-colors duration-200 hover:bg-accent"
              >
                Konsultasi Gratis
                <span
                  aria-hidden="true"
                  className="ml-2 inline-block transition-transform duration-300 ease-out group-hover:translate-x-1"
                >
                  {"\u2192"}
                </span>
              </MagneticLink>
              <a
                href="#portofolio"
                className="text-sm font-medium text-ink underline decoration-line decoration-1 underline-offset-4 transition-colors hover:decoration-accent"
              >
                Lihat Portofolio
              </a>
            </motion.div>
          </div>

          <motion.figure {...fade(0.45)} className="relative lg:col-span-4">
            <div className="absolute -left-4 -top-4 hidden h-full w-full border border-line md:block" />
            <div ref={figureRef} className="relative aspect-[4/5] overflow-hidden bg-surface">
              <motion.div
                style={reduce ? undefined : { y: imageY }}
                className="absolute inset-0 scale-[1.15]"
              >
                <Image
                  src="/images/hero.png"
                  alt="Render 3D arsitektur digital oleh VERTEX STUDIO - visualisasi bangunan modern"
                  width={800}
                  height={600}
                  priority
                  sizes="(min-width: 1024px) 34vw, 92vw"
                  className="aspect-[4/5] w-full object-cover"
                />
              </motion.div>
              <motion.div
                aria-hidden="true"
                className="absolute inset-0 bg-canvas/0"
                animate={reduce ? undefined : { opacity: [0, 0.35, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <figcaption className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              <span className="text-amber">{"Render 3D \u2014 Arsitektur"}</span>
              <span>2026</span>
            </figcaption>
          </motion.figure>
        </div>

        <motion.dl
          ref={statsRef}
          className="mt-20 grid grid-cols-2 gap-y-10 border-t border-line pt-10 md:mt-24 md:grid-cols-4"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="pr-6"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
            >
              <dd className="font-display text-4xl font-semibold tracking-[-0.02em] text-ink md:text-5xl">
                <StatValue value={stat.value} start={statsInView} />
              </dd>
              <dt className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                {stat.label}
              </dt>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
