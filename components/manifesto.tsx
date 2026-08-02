import { Reveal } from "@/components/reveal";

export function Manifesto() {
  return (
    <section
      aria-labelledby="manifesto-title"
      className="mx-auto max-w-[1440px] px-5 py-24 md:px-16 md:py-[120px]"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-9">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
              {"01 \u2014 Manifesto"}
            </p>
            <h2
              id="manifesto-title"
              className="mt-8 font-display text-[clamp(1.9rem,4.2vw,3.4rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-ink"
            >
              Sebagian besar website hanya{" "}
              <em className="font-display font-normal italic tracking-[-0.01em] text-accent">
                terlihat bagus
              </em>
              . Kami membangun yang benar-benar bekerja: cepat, mudah ditemukan
              di Google, dan disusun untuk{" "}
              <em className="font-display font-normal italic tracking-[-0.01em] text-accent">
                dikonversi
              </em>
              .
            </h2>
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
