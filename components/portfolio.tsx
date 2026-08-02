"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { Reveal } from "@/components/reveal";

const PORTFOLIO_ITEMS = [
  {
    image: "/images/portfolio-pos.png",
    category: "Aplikasi Kasir Cloud",
    title: "Vertex POS",
    description:
      "Sistem kasir web dengan manajemen stok, laporan real-time, dan struk otomatis via WhatsApp.",
    alt: "Antarmuka aplikasi kasir POS berbasis web untuk toko dan kafe",
  },
  {
    image: "/images/portfolio-3d.png",
    category: "Render 3D & Exhibition",
    title: "Booth & Visual Produk",
    description:
      "Visualisasi photorealistic untuk booth pameran, display produk, dan arsitektur event.",
    alt: "Render 3D booth pameran dan visualisasi produk photorealistic",
  },
] as const;

function ParallaxImage({
  src,
  alt,
  sizes,
  aspect,
}: {
  src: string;
  alt: string;
  sizes: string;
  aspect: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.18, 1.12]);

  return (
    <div ref={ref} className={`relative overflow-hidden bg-surface ${aspect}`}>
      <motion.div
        style={reduce ? undefined : { y, scale }}
        className="absolute inset-0"
      >
        <Image
          src={src}
          alt={alt}
          width={800}
          height={500}
          sizes={sizes}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-0 border border-line/0 transition-colors duration-300 group-hover:border-accent/40"
      />
    </div>
  );
}

export function Portfolio() {
  return (
    <section
      id="portofolio"
      aria-labelledby="portofolio-title"
      className="mx-auto max-w-[1440px] px-5 py-24 md:px-16 md:py-[120px]"
    >
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
            {"03 \u2014 Karya"}
          </p>
          <h2
            id="portofolio-title"
            className="mt-6 max-w-[16ch] font-display text-[clamp(1.9rem,4.2vw,3.2rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink"
          >
            Karya yang bisa dikunjungi.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="max-w-[34ch] text-[14px] leading-relaxed text-muted">
            Beberapa proyek terbaru. Semuanya live, semuanya dikerjakan tanpa
            template.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.06}>
        <article className="group mt-14 grid grid-cols-1 gap-10 border-t border-line pt-12 lg:grid-cols-12 lg:gap-14">
          <a
            href="https://skemahq-website.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block lg:col-span-7"
            aria-label="Buka website Skema HQ yang berjalan live"
          >
            <ParallaxImage
              src="/images/portfolio-skemahq.png"
              alt="Tampilan website Skema HQ, platform web agensi digital yang dibangun dengan Next.js"
              sizes="(min-width: 1024px) 58vw, 92vw"
              aspect="aspect-[16/10]"
            />
          </a>
          <div className="flex flex-col justify-between lg:col-span-5 lg:py-2">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
                {"Featured \u2014 Web Architecture"}
              </p>
              <h3 className="mt-5 font-display text-3xl font-semibold tracking-[-0.02em] text-ink">
                Skema HQ
              </h3>
              <p className="mt-4 max-w-[40ch] text-[15px] leading-relaxed text-muted">
                Platform web agensi dengan arsitektur modern: Next.js,
                TypeScript, dan desain yang ringan. Dioptimalkan untuk
                kecepatan dan SEO.
              </p>
            </div>
            <div className="mt-10">
              <ul className="flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                <li className="rounded-sm border border-line px-2.5 py-1">
                  Next.js
                </li>
                <li className="rounded-sm border border-line px-2.5 py-1">
                  TypeScript
                </li>
                <li className="rounded-sm border border-line px-2.5 py-1">
                  SEO
                </li>
              </ul>
              <a
                href="https://skemahq-website.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link mt-8 inline-block text-sm font-medium text-ink underline decoration-line decoration-1 underline-offset-4 transition-colors hover:decoration-accent"
              >
                Kunjungi Situs Live{" "}
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-300 ease-out group-hover/link:translate-x-1"
                >
                  {"\u2192"}
                </span>
              </a>
            </div>
          </div>
        </article>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-20">
        {PORTFOLIO_ITEMS.map((item, i) => (
          <Reveal
            key={item.title}
            delay={0.05 + i * 0.08}
            className={i === 1 ? "md:mt-16" : undefined}
          >
            <article className="group border-t border-line pt-10">
              <ParallaxImage
                src={item.image}
                alt={item.alt}
                sizes="(min-width: 768px) 44vw, 92vw"
                aspect="aspect-[4/3]"
              />
              <div className="mt-6 flex items-baseline justify-between gap-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  {item.category}
                </p>
                <span
                  aria-hidden="true"
                  className="font-mono text-sm text-faint"
                >
                  {"0" + (i + 2)}
                </span>
              </div>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.01em] text-ink">
                {item.title}
              </h3>
              <p className="mt-3 max-w-[42ch] text-[14px] leading-relaxed text-muted">
                {item.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
