import { getLocalBusinessJsonLd, getServiceJsonLd } from "@/lib/seo";

export function JsonLd() {
  const schemas = [getLocalBusinessJsonLd(), getServiceJsonLd()];

  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema["@type"] as string}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
