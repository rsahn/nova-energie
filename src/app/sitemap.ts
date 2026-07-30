import type { MetadataRoute } from "next";
import { SITE, SERVICES } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;

  const staticPages = [
    "",
    "/autoconsommation",
    "/aides-et-subventions",
    "/realisations",
    "/qui-sommes-nous",
    "/estimer-mon-projet",
    "/mentions-legales",
    "/politique-de-confidentialite",
    "/politique-cookies",
  ];

  const servicePages = SERVICES.map(
    (s) => `/panneaux-photovoltaiques/${s.slug}`
  );

  return [...staticPages, ...servicePages].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.includes("estimer") ? 0.9 : 0.7,
  }));
}
