import { SITE, SERVICES, FAQS } from "@/lib/site";

const ORG_IMAGES = [
  `${SITE.url}/images/hero.png`,
  `${SITE.url}/images/portfolio-skemahq.png`,
  `${SITE.url}/images/portfolio-pos.png`,
  `${SITE.url}/images/portfolio-3d.png`,
  `${SITE.url}/images/portfolio-booth.svg`,
  `${SITE.url}/images/inspiration.png`,
];

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        alternateName: SITE.legalName,
        url: SITE.url,
        logo: `${SITE.url}/images/hero.png`,
        image: ORG_IMAGES,
        description: SITE.description,
        telephone: `+62${SITE.whatsapp}`,
        email: SITE.email,
        priceRange: "Rp350.000 - Rp15.000.000",
        currenciesAccepted: "IDR",
        paymentAccepted: "Transfer Bank, E-Wallet (GoPay, OVO, DANA)",
        areaServed: "Indonesia",
        sameAs: [`https://wa.me/${SITE.whatsapp}`],
        knowsAbout: [
          "Desain Grafis",
          "Branding",
          "Identitas Visual",
          "Website Development",
          "Company Profile Website",
          "Landing Page",
          "3D Rendering",
          "Photorealistic 3D",
          "Aplikasi Kasir POS",
          "Undangan Digital",
          "SEO",
        ],
        address: {
          "@type": "PostalAddress",
          addressCountry: "ID",
          addressRegion: "Jakarta",
          addressLocality: "Jakarta",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "-6.2088",
          longitude: "106.8456",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "16:00",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: `+62${SITE.whatsapp}`,
          contactType: "customer service",
          availableLanguage: ["Indonesian", "English"],
          url: `https://wa.me/${SITE.whatsapp}`,
        },
        potentialAction: {
          "@type": "ContactAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `https://wa.me/${SITE.whatsapp}?text=Halo%20VERTEX%20STUDIO`,
            actionPlatform: [
              "https://schema.org/DesktopWebPlatform",
              "https://schema.org/MobileWebPlatform",
            ],
          },
          description: "Hubungi VERTEX STUDIO via WhatsApp",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Layanan VERTEX STUDIO",
          itemListElement: SERVICES.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.title,
              description: s.description,
              areaServed: "Indonesia",
              url: `${SITE.url}/#layanan`,
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: `${SITE.name} - Jasa Website, Desain Grafis & 3D Render Indonesia`,
        description: SITE.description,
        publisher: { "@id": `${SITE.url}/#organization` },
        inLanguage: "id-ID",
      },
      {
        "@type": "WebPage",
        "@id": `${SITE.url}/#webpage`,
        url: SITE.url,
        name: `${SITE.name} - Jasa Website, Desain Grafis & 3D Render Indonesia`,
        description: SITE.description,
        inLanguage: "id-ID",
        isPartOf: { "@id": `${SITE.url}/#website` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE.url}/images/hero.png`,
          width: 800,
          height: 600,
        },
        datePublished: "2026-08-01",
        dateModified: new Date().toISOString().slice(0, 10),
        breadcrumb: { "@id": `${SITE.url}/#breadcrumb` },
        mainEntity: [
          { "@id": `${SITE.url}/#organization` },
          { "@id": `${SITE.url}/#faq` },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE.url}/#faq`,
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE.url}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Beranda",
            item: SITE.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Layanan",
            item: `${SITE.url}/#layanan`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Portofolio",
            item: `${SITE.url}/#portofolio`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Konsultasi",
            item: `${SITE.url}/#kontak`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </>
  );
}
