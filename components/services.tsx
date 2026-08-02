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

        <ul className="mt-14 border-t border-line">
          {SERVICES.map((service, i) => (
            <li key={service.no} className="border-b border-line">
              <Reveal delay={Math.min(i * 0.04, 0.2)}>
                <a
                  href={waLink(service.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative grid grid-cols-1 items-center gap-3 overflow-hidden py-8 transition-colors duration-300 hover:bg-hover md:grid-cols-12 md:gap-8 md:px-6"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-full w-0 bg-accent/10 transition-all duration-300 ease-out group-hover:w-full"
                  />
                  <span className="relative flex items-center gap-5 md:col-span-2">
                    <span className="text-muted transition-colors duration-300 group-hover:text-accent">
                      {ICONS[service.title]}
                    </span>
                    <span className="font-mono text-sm tracking-[0.08em] text-amber">
                      {service.no}
                    </span>
                  </span>
                  <h3 className="relative font-display text-xl font-semibold tracking-[-0.01em] text-ink transition-transform duration-300 ease-out group-hover:translate-x-1 md:col-span-3 md:text-2xl">
                    {service.title}
                  </h3>
                  <p className="relative text-[14px] leading-relaxed text-muted md:col-span-5">
                    {service.description}
                  </p>
                  <span className="relative font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors duration-300 group-hover:text-accent md:col-span-2 md:text-right">
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
