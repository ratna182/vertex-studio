import { FAQS } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function Faq() {
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
              {FAQS.map((faq, i) => (
                <Reveal key={faq.question} delay={Math.min(i * 0.04, 0.2)}>
                  <details className="group border-b border-line">
                    <summary className="flex cursor-pointer items-baseline justify-between gap-6 py-7 text-[15px] font-medium text-ink transition-colors hover:text-accent md:text-base">
                      <span className="max-w-[52ch]">{faq.question}</span>
                      <span
                        aria-hidden="true"
                        className="shrink-0 font-mono text-lg text-muted transition-transform duration-300 group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="max-w-[58ch] pb-8 pr-12 text-[14px] leading-relaxed text-muted">
                      {faq.answer}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
