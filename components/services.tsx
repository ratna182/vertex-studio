import { SERVICES, waLink } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function Services() {
  return (
    <section
      id="layanan"
      aria-labelledby="layanan-title"
      className="border-t border-line"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-16 md:py-[120px]">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
              {"02 \u2014 Layanan"}
            </p>
            <h2
              id="layanan-title"
              className="mt-6 max-w-[16ch] font-display text-[clamp(1.9rem,4.2vw,3.2rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink"
            >
              Enam bidang. Satu standar.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-[32ch] text-[14px] leading-relaxed text-muted">
              Dari identitas visual hingga sistem kasir. Setiap layanan
              dikerjakan dengan presisi yang sama.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 border-t border-line">
          {SERVICES.map((service, i) => (
            <li key={service.no} className="border-b border-line">
              <Reveal delay={Math.min(i * 0.04, 0.2)}>
                <a
                  href={waLink(service.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-1 items-baseline gap-3 py-8 transition-colors duration-300 hover:bg-hover md:grid-cols-12 md:gap-8 md:px-6"
                >
                  <span className="font-mono text-sm tracking-[0.08em] text-amber md:col-span-1">
                    {service.no}
                  </span>
                  <h3 className="font-display text-xl font-semibold tracking-[-0.01em] text-ink transition-transform duration-300 ease-out group-hover:translate-x-1 md:col-span-4 md:text-2xl">
                    {service.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-muted md:col-span-5">
                    {service.description}
                  </p>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors duration-300 group-hover:text-accent md:col-span-2 md:text-right">
                    Konsultasi
                    <span
                      aria-hidden="true"
                      className="ml-1 inline-block transition-transform duration-300 ease-out group-hover:translate-x-1"
                    >
                      {"\u2192"}
                    </span>
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
