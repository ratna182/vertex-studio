import { PROCESS, STATS } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function Process() {
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

        <ol className="mt-14 grid grid-cols-1 gap-px border-t border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, i) => (
            <li key={step.no} className="bg-canvas p-8 md:p-10">
              <Reveal delay={i * 0.06}>
                <span className="font-mono text-sm tracking-[0.08em] text-accent">
                  {step.no}
                </span>
                <h3 className="mt-8 font-display text-lg font-semibold tracking-[-0.01em] text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[34ch] text-[14px] leading-relaxed text-muted">
                  {step.description}
                </p>
              </Reveal>
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
