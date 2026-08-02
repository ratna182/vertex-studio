"use client";

import { useState } from "react";
import { SITE, SERVICES, waLink } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { trackEvent } from "@/components/analytics";

export function Contact() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [service, setService] = useState(SERVICES[0].title);
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const lines = [
      `Halo ${SITE.name}, saya ${name.trim() || "calon klien"}.`,
      `Kebutuhan: ${service}.`,
      `Kontak saya: ${contact.trim() || "-"}.`,
      message.trim() ? `Detail: ${message.trim()}` : "",
    ].filter(Boolean);
    trackEvent("contact_form_submit", { service });
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "w-full border-b border-line bg-transparent pb-3 text-[15px] text-ink placeholder:text-faint focus:border-accent focus:outline-none";

  return (
    <section
      id="kontak"
      aria-labelledby="kontak-title"
      className="border-t border-line bg-surface"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-16 md:py-[120px]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
                {"06 \u2014 Kontak"}
              </p>
              <h2
                id="kontak-title"
                className="mt-6 font-display text-[clamp(2rem,4.6vw,3.6rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-ink"
              >
                Mulai dari{" "}
                <em className="font-display font-normal italic text-accent">
                  konsultasi gratis.
                </em>
              </h2>
              <p className="mt-6 max-w-[42ch] text-[15px] leading-relaxed text-muted">
                Ceritakan kebutuhan Anda. Kami balas dengan arah kerja dan
                estimasi, tanpa kewajiban apa pun.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <address className="mt-12 space-y-0 border-t border-line text-[14px] not-italic leading-relaxed">
                <p className="flex items-baseline justify-between gap-6 border-b border-line py-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    WhatsApp
                  </span>
                  <a
                    href={waLink("Halo VERTEX STUDIO, saya ingin konsultasi.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink transition-colors hover:text-accent"
                  >
                    {SITE.whatsappDisplay}
                  </a>
                </p>
                <p className="flex items-baseline justify-between gap-6 border-b border-line py-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    Email
                  </span>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-ink transition-colors hover:text-accent"
                  >
                    {SITE.email}
                  </a>
                </p>
                <p className="flex items-baseline justify-between gap-6 border-b border-line py-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    Jam Kerja
                  </span>
                  <span className="text-ink">{SITE.hours}</span>
                </p>
                <p className="flex items-baseline justify-between gap-6 py-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    Lokasi
                  </span>
                  <span className="text-ink">
                    {SITE.city}, melayani seluruh Indonesia
                  </span>
                </p>
              </address>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.12}>
              <form
                onSubmit={handleSubmit}
                className="rounded-lg border border-line bg-canvas p-8 md:p-12"
                aria-label="Formulir konsultasi proyek"
              >
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-3 block font-mono text-[10px] uppercase tracking-[0.2em] text-muted"
                    >
                      Nama
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={inputClass}
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-contact"
                      className="mb-3 block font-mono text-[10px] uppercase tracking-[0.2em] text-muted"
                    >
                      Email atau WhatsApp
                    </label>
                    <input
                      id="contact-contact"
                      type="text"
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      className={inputClass}
                      placeholder="Kontak yang bisa dihubungi"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <label
                    htmlFor="contact-service"
                    className="mb-3 block font-mono text-[10px] uppercase tracking-[0.2em] text-muted"
                  >
                    Layanan
                  </label>
                  <select
                    id="contact-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className={`${inputClass} appearance-none bg-canvas`}
                  >
                    {SERVICES.map((s) => (
                      <option key={s.no} value={s.title} className="bg-canvas">
                        {s.no} - {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-8">
                  <label
                    htmlFor="contact-message"
                    className="mb-3 block font-mono text-[10px] uppercase tracking-[0.2em] text-muted"
                  >
                    Ceritakan kebutuhan Anda
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`${inputClass} resize-none`}
                    placeholder="Contoh: ingin website company profile untuk usaha jasa, 5 halaman, budget di bawah 3 juta."
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-10 bg-ink px-8 py-4 text-sm font-medium text-canvas transition-colors duration-200 hover:bg-accent"
                >
                  Kirim via WhatsApp
                  <span
                    aria-hidden="true"
                    className="ml-2 inline-block transition-transform duration-300 ease-out group-hover:translate-x-1"
                  >
                    {"\u2192"}
                  </span>
                </button>
                <p className="mt-4 text-[12px] leading-relaxed text-faint">
                  Tombol kirim membuka WhatsApp dengan pesan yang sudah terisi
                  untuk Anda. Kami membalas dalam 1x24 jam.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
