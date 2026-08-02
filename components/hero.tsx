"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { STATS, WA_DEFAULT } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

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
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 bg-accent"
              />
              {`Studio Desain & Digital \u2014 Jakarta`}
            </motion.p>

            <motion.h1
              {...fade(0.08)}
              id="hero-title"
              className="mt-8 font-display text-[clamp(2.9rem,7vw,5.6rem)] font-bold leading-[1.02] tracking-[-0.04em] text-ink"
            >
              Desain yang{" "}
              <em className="font-display font-normal italic tracking-[-0.01em] text-accent">
                menumbuhkan
              </em>{" "}
              bisnis.
            </motion.h1>

            <motion.p
              {...fade(0.16)}
              className="mt-8 max-w-[50ch] text-[15px] leading-relaxed text-muted md:text-lg"
            >
              Website, identitas visual, dan render 3D yang membuat bisnis Anda
              ditemukan, dipercaya, lalu dipilih. Tanpa template. Tanpa
              kata-kata kosong.
            </motion.p>

            <motion.div
              {...fade(0.24)}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-ink px-8 py-4 text-sm font-medium text-canvas transition-colors duration-200 hover:bg-accent"
              >
                Konsultasi Gratis
                <span
                  aria-hidden="true"
                  className="ml-2 inline-block transition-transform duration-300 ease-out group-hover:translate-x-1"
                >
                  {"\u2192"}
                </span>
              </a>
              <a
                href="#portofolio"
                className="text-sm font-medium text-ink underline decoration-line decoration-1 underline-offset-4 transition-colors hover:decoration-accent"
              >
                Lihat Portofolio
              </a>
            </motion.div>
          </div>

          <motion.figure
            {...fade(0.32)}
            className="relative lg:col-span-4"
          >
            <div className="absolute -left-4 -top-4 hidden h-full w-full border border-line md:block" />
            <Image
              src="/images/hero.png"
              alt="Render 3D arsitektur digital oleh VERTEX STUDIO - visualisasi bangunan modern"
              width={800}
              height={600}
              priority
              sizes="(min-width: 1024px) 34vw, 92vw"
              className="relative aspect-[4/5] w-full object-cover"
            />
            <figcaption className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              <span className="text-amber">{"Render 3D \u2014 Arsitektur"}</span>
              <span>2026</span>
            </figcaption>
          </motion.figure>
        </div>

        <motion.dl
          {...fade(0.4)}
          className="mt-20 grid grid-cols-2 gap-y-10 border-t border-line pt-10 md:mt-24 md:grid-cols-4"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="pr-6">
              <dd className="font-display text-4xl font-semibold tracking-[-0.02em] text-ink md:text-5xl">
                {stat.value}
              </dd>
              <dt className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                {stat.label}
              </dt>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
