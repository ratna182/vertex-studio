export const SITE = {
  name: "VERTEX STUDIO",
  legalName: "Vertex Studio Digital Architecture",
  tagline: "Studio desain & digital Indonesia",
  description:
    "VERTEX STUDIO membangun website, identitas visual, dan render 3D yang membuat bisnis Anda ditemukan, dipercaya, dan dipilih. Jasa desain grafis, website custom, landing page, 3D render, undangan digital, dan aplikasi kasir POS di Indonesia.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://vertex-studio-main.vercel.app",
  whatsapp: "6287889527901",
  whatsappDisplay: "0878-8952-7901",
  email: "vertexstudio@example.com",
  city: "Jakarta",
  country: "Indonesia",
  hours: "08.00\u201322.00 WIB, Senin\u2013Minggu",
  gaMeasurementId: "G-Q5DKRY2FKE",
  clarityProjectId: "xqtdrcym0k",
} as const;

export function waLink(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT = waLink(
  "Halo VERTEX STUDIO, saya ingin konsultasi proyek desain dan website."
);

export type Service = {
  no: string;
  title: string;
  description: string;
  message: string;
};

export const SERVICES: Service[] = [
  {
    no: "01",
    title: "Identitas Visual & Branding",
    description:
      "Logo vector, panduan brand, packaging, dan materi cetak yang konsisten di setiap titik kontak bisnis Anda.",
    message: "Halo VERTEX STUDIO, saya tertarik dengan layanan desain grafis dan branding.",
  },
  {
    no: "02",
    title: "Render 3D Photorealistic",
    description:
      "Visualisasi produk, interior, eksterior, dan booth pameran dengan detail material dan pencahayaan yang akurat.",
    message: "Halo VERTEX STUDIO, saya ingin konsultasi jasa 3D rendering.",
  },
  {
    no: "03",
    title: "Website Company Profile",
    description:
      "Situs multi-halaman yang cepat, aman, dan terstruktur dengan baik agar mudah ditemukan di Google.",
    message: "Halo VERTEX STUDIO, saya ingin membuat website company profile.",
  },
  {
    no: "04",
    title: "Landing Page",
    description:
      "Satu halaman fokus untuk kampanye iklan, disusun agar pengunjung memahami dan mengambil tindakan.",
    message: "Halo VERTEX STUDIO, saya ingin membuat landing page untuk kampanye.",
  },
  {
    no: "05",
    title: "Undangan Digital",
    description:
      "Undangan pernikahan dan acara dengan RSVP online, galeri foto, peta lokasi, dan musik latar.",
    message: "Halo VERTEX STUDIO, saya ingin membuat undangan digital.",
  },
  {
    no: "06",
    title: "Aplikasi Kasir POS",
    description:
      "Sistem kasir web untuk toko dan kafe: manajemen stok, laporan penjualan, dan struk otomatis via WhatsApp.",
    message: "Halo VERTEX STUDIO, saya ingin konsultasi aplikasi kasir POS.",
  },
];

export const PROCESS = [
  {
    no: "01",
    title: "Riset",
    description:
      "Audit bisnis, pesaing, dan kata kunci sebelum satu piksel pun dirancang.",
  },
  {
    no: "02",
    title: "Konsep",
    description:
      "Dua arah desain, diskusi terbuka, revisi sampai arahnya tepat.",
  },
  {
    no: "03",
    title: "Bangun",
    description:
      "Kode bersih, mobile-first, cepat, dan dioptimalkan untuk mesin pencari.",
  },
  {
    no: "04",
    title: "Serah Terima",
    description:
      "Hosting, garansi revisi, dan pendampingan setelah situs tayang.",
  },
] as const;

export const STATS = [
  { value: "4.9/5", label: "rating klien" },
  { value: "52+", label: "proyek selesai" },
  { value: "6", label: "bidang layanan" },
  { value: "2\u201310", label: "hari pengerjaan" },
] as const;

export const FAQS = [
  {
    question: "Berapa lama proses pembuatan website atau landing page?",
    answer:
      "Landing page selesai dalam 2\u20134 hari kerja. Website company profile membutuhkan 5\u201310 hari kerja, tergantung jumlah halaman dan fitur. Seluruh situs diuji di perangkat mobile dan desktop sebelum diserahkan.",
  },
  {
    question: "Apakah website buatan VERTEX STUDIO dijamin ramah SEO?",
    answer:
      "Ya. Setiap situs dibangun dengan struktur schema.org JSON-LD, sitemap XML, meta tag lengkap, arsitektur yang rapi, dan kecepatan yang memenuhi standar Core Web Vitals Google.",
  },
  {
    question: "Berapa harga jasa desain dan pembuatan website?",
    answer:
      "Desain logo dan identitas dimulai dari Rp350.000. Website company profile mulai dari Rp1.500.000 untuk 5 halaman, sudah termasuk desain custom, optimasi SEO, integrasi WhatsApp, hosting, dan garansi revisi. Harga final ditentukan setelah diskusi kebutuhan.",
  },
  {
    question: "Apakah menerima klien dari luar kota atau luar negeri?",
    answer:
      "Ya. Seluruh proses berjalan online via WhatsApp, Zoom, atau Google Meet. Hasil dikirim secara digital, sehingga bisa dikerjakan untuk klien di seluruh Indonesia dan luar negeri.",
  },
  {
    question: "Apa saja yang termasuk dalam paket website company profile?",
    answer:
      "Desain UI/UX custom, 5\u201310 halaman, optimasi SEO on-page, JSON-LD schema, sitemap XML, integrasi WhatsApp, form kontak, hosting di Vercel, domain .com atau .id, serta garansi revisi desain.",
  },
  {
    question: "Bagaimana cara memesan jasa 3D rendering?",
    answer:
      "Kirim referensi gambar, ukuran, dan konsep via WhatsApp. Tim membuat mockup 3D dengan revisi sampai Anda puas. Estimasi pengerjaan 2\u20137 hari tergantung kerumitan model.",
  },
] as const;
