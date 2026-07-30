import { SITE } from "./data";

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    description: `Installateur de panneaux photovoltaïques certifié RGE en ${SITE.region}. Autoconsommation et panneaux solaires ${SITE.department}.`,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    image: `${SITE.url}/logo.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address,
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      postalCode: "78960",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.coordinates.lat,
      longitude: SITE.coordinates.lng,
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Yvelines" },
      { "@type": "AdministrativeArea", name: "Essonne" },
      { "@type": "AdministrativeArea", name: "Île-de-France" },
    ],
    priceRange: "€€",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.googleRating,
      reviewCount: SITE.googleReviewCount,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };
}

export function getServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Installation panneaux solaires photovoltaïques",
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: SITE.region,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services photovoltaïques",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Panneaux solaires particuliers",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Panneaux solaires professionnels",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Panneaux solaires collectivités",
          },
        },
      ],
    },
  };
}
