import { SERVICES, waLink } from "@/lib/site";
import { Reveal } from "@/components/reveal";

const ICONS: Record<string, React.ReactNode> = {
  "Identitas Visual & Branding": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  "Render 3D Photorealistic": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <path d="M12 2.5 21 7.5V16.5L12 21.5L3 16.5V7.5L12 2.5Z" />
      <path d="M3 7.5 12 12.5L21 7.5" />
      <path d="M12 12.5V21.5" />
    </svg>
  ),
  "Website Company Profile": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <rect x="3" y="4.5" width="18" height="15" rx="1.5" />
      <path d="M3 9H21" />
      <path d="M6 13H10" />
      <path d="M6 16.5H14" />
    </svg>
  ),
  "Landing Page": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <rect x="3" y="3.5" width="18" height="17" rx="1.5" />
      <path d="M8 9H16" />
      <path d="M8 13H16" />
      <path d="M8 16.5H13" />
    </svg>
  ),
  "Undangan Digital": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M3.5 7 12 13.5L20.5 7" />
    </svg>
  ),
  "Aplikasi Kasir POS": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M8 8H16" />
      <path d="M8 12H16" />
      <path d="M8 16H11.5" />
    </svg>
  ),
};

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

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.no}
              delay={Math.min(i * 0.04, 0.2)}
              className="h-full"
            >
              <a
                href={waLink(service.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/3 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

                <div className="relative flex items-center gap-4">
                  <div className="text-muted transition-colors duration-200 group-hover:text-accent">
                    {React.cloneElement(ICONS[service.title] as React.ReactElement, {
                      className: "h-5 w-5"
                    })}
                  </div>
                  <span className="font-mono text-xs tracking-[0.08em] text-amber">
                    {service.no}
                  </span>
                </div>

                <h3 className="relative mt-6 font-display text-xl font-bold tracking-[-0.01em] text-ink transition-colors duration-200 group-hover:text-accent">
                  {service.title}
                </h3>

                <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>

                <div className="relative mt-6 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted transition-colors duration-200 group-hover:text-accent">
                    Konsultasi
                  </span>
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1"
                  >
                    {"\u2192"}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
