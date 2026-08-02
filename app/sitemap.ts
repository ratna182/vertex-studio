import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const IMAGES = [
  "/images/hero.png",
  "/images/portfolio-skemahq.png",
  "/images/portfolio-pos.png",
  "/images/portfolio-3d.png",
  "/images/portfolio-booth.svg",
  "/images/inspiration.png",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: SITE.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          id: SITE.url,
          "x-default": SITE.url,
        },
      },
      images: IMAGES.map((src) => `${SITE.url}${src}`),
    },
  ];
}
