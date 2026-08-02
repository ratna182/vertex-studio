import type { Metadata, Viewport } from "next";
import { Geist, JetBrains_Mono, Sora } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { Analytics } from "@/components/analytics";
import { JsonLd } from "@/components/jsonld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Jasa Website, Desain Grafis & 3D Render | VERTEX STUDIO Indonesia",
    template: "%s | VERTEX STUDIO",
  },
  description: SITE.description,
  keywords: [
    "jasa website custom Indonesia",
    "jasa landing page",
    "jasa desain grafis",
    "jasa 3D rendering",
    "aplikasi kasir POS",
    "undangan digital",
    "company profile website",
    "SEO website",
    "jasa digital Indonesia",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      id: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title:
      "Jasa Website, Desain Grafis & 3D Render | VERTEX STUDIO Indonesia",
    description: SITE.description,
    url: "/",
    locale: "id_ID",
    countryName: "Indonesia",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Jasa Website, Desain Grafis & 3D Render | VERTEX STUDIO Indonesia",
    description: SITE.description,
  },
  verification: {
    google: "google749393fc552506bd",
  },
  appleWebApp: {
    capable: true,
    title: SITE.name,
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${jetbrainsMono.variable} ${sora.variable}`}
    >
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-canvas"
        >
          Langsung ke konten utama
        </a>
        {children}
        <JsonLd />
        <Analytics />
      </body>
    </html>
  );
}
