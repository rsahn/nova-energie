import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, MapPin, Phone } from "lucide-react";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { RealisationsGrid } from "@/components/sections/RealisationsGrid";
import { Button } from "@/components/ui/Button";
import { LOCAL_CITIES, REALISATIONS, SITE } from "@/lib/data";

interface PageProps {
  params: Promise<{ ville: string }>;
}

export async function generateStaticParams() {
  return LOCAL_CITIES.map((city) => ({ ville: city.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { ville } = await params;
  const city = LOCAL_CITIES.find((c) => c.slug === ville);
  if (!city) return {};

  const title = `Panneaux solaires ${city.name} (${SITE.departmentCode}) — Installateur RGE`;
  const description = `Installateur panneaux solaires à ${city.name} (${city.postalCode}). Devis gratuit, autoconsommation, aides État. ${SITE.name}, certifié RGE en Yvelines.`;

  return {
    title,
    description,
    keywords: [
      `panneau solaire ${city.name}`,
      `panneaux solaires ${city.name}`,
      `installateur photovoltaïque ${city.postalCode}`,
      `photovoltaïque ${city.name}`,
    ],
    alternates: { canonical: `${SITE.url}/panneaux-solaires/${city.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE.url}/panneaux-solaires/${city.slug}`,
    },
  };
}

export default async function LocalCityPage({ params }: PageProps) {
  const { ville } = await params;
  const city = LOCAL_CITIES.find((c) => c.slug === ville);
  if (!city) notFound();

  const localRealisations = REALISATIONS.filter(
    (r) => r.city.toLowerCase() === city.name.toLowerCase()
  );
  const otherCities = LOCAL_CITIES.filter((c) => c.slug !== city.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Installation panneaux solaires ${city.name}`,
    description: city.intro,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      telephone: SITE.phone,
      email: SITE.email,
      url: SITE.url,
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.city,
        postalCode: "78960",
        addressRegion: "Yvelines",
        addressCountry: "FR",
      },
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      postalCode: city.postalCode,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-navy-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-sm font-medium text-solar-400">
            Yvelines (78) · {city.postalCode}
          </p>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">
            Panneaux solaires à {city.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">{city.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/estimer-mon-projet" size="lg">
              Devis gratuit
            </Button>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 text-sm font-medium hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                Votre installateur RGE à {city.name}
              </h2>
              <p className="mt-4 text-gray-600">
                {SITE.name} intervient à {city.name} ({city.distance}). Nous
                installons des kits photovoltaïques en autoconsommation avec
                vente du surplus à EDF OA, pour réduire votre facture de{" "}
                <strong>30 à 70&nbsp;%</strong>.
              </p>
              <ul className="mt-6 space-y-3">
                {city.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-solar-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-solar-50 p-8">
              <h3 className="text-xl font-semibold text-navy-900">
                Pourquoi le solaire à {city.name} ?
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li>
                  Ensoleillement favorable en Île-de-France pour
                  l&apos;autoconsommation
                </li>
                <li>
                  Prime à l&apos;autoconsommation et TVA réduite à 10&nbsp;%
                  (logement &gt; 2 ans)
                </li>
                <li>
                  Valorisation de votre bien immobilier à {city.postalCode}
                </li>
                <li>
                  Installateur certifié{" "}
                  <Link href="/aides-et-subventions" className="text-solar-700 underline">
                    RGE — aides de l&apos;État
                  </Link>
                </li>
              </ul>
              <p className="mt-6 flex items-center gap-2 text-sm text-navy-900">
                <MapPin className="h-4 w-4 text-solar-600" />
                Basés à {SITE.city} — intervention {city.distance.toLowerCase()}
              </p>
            </div>
          </div>
        </div>
      </section>

      {localRealisations.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-navy-900">
              Nos réalisations à {city.name}
            </h2>
            <RealisationsGrid
              limit={3}
              showTitle={false}
              filter={(r) => r.city.toLowerCase() === city.name.toLowerCase()}
            />
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-navy-900">
            Autres villes desservies
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {otherCities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/panneaux-solaires/${c.slug}`}
                  className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 hover:border-solar-600 hover:text-solar-700"
                >
                  Panneaux solaires {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
