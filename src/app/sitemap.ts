import type { MetadataRoute } from "next";
import { LOCAL_CITIES, SITE, SERVICES } from "@/lib/data";

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

  const cityPages = LOCAL_CITIES.map((c) => `/panneaux-solaires/${c.slug}`);

  const localPages = [...cityPages, "/panneaux-solaires/yvelines-78"];

  return [...staticPages, ...servicePages, ...localPages].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority:
      path === ""
        ? 1
        : path.includes("yvelines-78")
          ? 0.95
          : path.includes("estimer")
            ? 0.9
            : path.includes("panneaux-solaires")
              ? 0.85
              : 0.7,
  }));
}
