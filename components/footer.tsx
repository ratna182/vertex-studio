import { SITE, SERVICES, WA_DEFAULT } from "@/lib/site";

const NAV_LINKS = [
  { href: "#layanan", label: "Layanan" },
  { href: "#portofolio", label: "Portofolio" },
  { href: "#proses", label: "Proses" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontak", label: "Kontak" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-20 md:px-16 md:pt-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <a
              href="#"
              className="inline-flex items-baseline gap-2 font-display text-lg font-semibold tracking-[0.14em] text-ink"
              aria-label={`${SITE.name} - kembali ke atas`}
            >
              <span
                aria-hidden="true"
                className="inline-block h-2.5 w-2.5 translate-y-[-1px] bg-accent"
              />
              VERTEX<span className="text-accent">/</span>STUDIO
            </a>
            <p className="mt-6 max-w-[36ch] text-[13px] leading-relaxed text-muted">
              Studio desain dan digital di Jakarta. Website, identitas visual,
              render 3D, dan sistem kasir yang dibangun untuk ditemukan,
              dipercaya, dan dipilih.
            </p>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              {`${SITE.city}, Indonesia \u2014 ${SITE.hours}`}
            </p>
          </div>

          <nav aria-label="Navigasi footer" className="md:col-span-3">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Navigasi
            </h3>
            <ul className="mt-6 space-y-3.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13px] text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Layanan
            </h3>
            <ul className="mt-6 space-y-3.5">
              {SERVICES.map((service) => (
                <li key={service.no}>
                  <a
                    href={WA_DEFAULT}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-muted transition-colors hover:text-accent"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="mt-20 select-none text-center font-display text-[clamp(2.5rem,8vw,6.5rem)] font-bold italic leading-none tracking-[-0.02em] text-line"
        >
          VERTEX/STUDIO
        </p>

        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-line pt-8 md:flex-row md:items-center">
          <p className="text-[12px] text-muted">
            {"\u00a9"} 2026 {SITE.name}. Hak cipta dilindungi.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            Digital Architecture &amp; Creative Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
