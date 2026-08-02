import { SITE, WA_DEFAULT } from "@/lib/site";

const NAV_LINKS = [
  { href: "#layanan", label: "Layanan" },
  { href: "#portofolio", label: "Portofolio" },
  { href: "#proses", label: "Proses" },
  { href: "#faq", label: "FAQ" },
] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/85 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-16">
        <a
          href="#"
          className="flex items-baseline gap-2 font-display text-[15px] font-semibold tracking-[0.14em] text-ink"
          aria-label={`${SITE.name} - kembali ke atas`}
        >
          <span
            aria-hidden="true"
            className="inline-block h-2 w-2 translate-y-[-1px] bg-accent"
          />
          VERTEX<span className="text-accent">/</span>STUDIO
        </a>

        <nav aria-label="Navigasi utama" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative font-mono text-[12px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 ease-out group-hover:w-full"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={WA_DEFAULT}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-line px-4 py-2 text-[13px] font-medium text-ink transition-colors duration-200 hover:border-line-strong hover:bg-hover"
        >
          Konsultasi Gratis
        </a>
      </div>
    </header>
  );
}
