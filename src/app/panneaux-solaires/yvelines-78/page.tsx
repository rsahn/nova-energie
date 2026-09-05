import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, MapPin, Phone } from "lucide-react";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { InstallationsMap } from "@/components/sections/InstallationsMap";
import { RealisationsGrid } from "@/components/sections/RealisationsGrid";
import { Button } from "@/components/ui/Button";
import { LOCAL_CITIES, SITE, YVELINES_CITIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Panneau solaire 78 — Accompagnement photovoltaïque Yvelines",
  description: `${SITE.name} accompagne votre projet solaire dans les Yvelines (78) et vous met en relation avec une entreprise partenaire indépendante pour l'étude, le devis et les travaux.`,
  keywords: [
    "panneau solaire 78",
    "panneaux solaires 78",
    "panneau solaire Yvelines",
    "installateur panneau solaire 78",
    "photovoltaïque Yvelines",
    "entreprise photovoltaïque 78",
  ],
  alternates: { canonical: `${SITE.url}/panneaux-solaires/yvelines-78` },
  openGraph: {
    title: "Panneau solaire 78 — Nova Énergie",
    description: "Accompagnement et mise en relation pour un projet solaire dans les Yvelines (78).",
    url: `${SITE.url}/panneaux-solaires/yvelines-78`,
  },
};

const HIGHLIGHTS = [
  "Étude personnalisée de votre projet dans le 78",
  "Mise en relation avec une entreprise partenaire indépendante",
  "Autoconsommation avec vente du surplus EDF OA",
  "Devis gratuit sous 48 h dans les Yvelines",
  "Prime autoconsommation et TVA 10 % éligibles",
  "Panneaux partenaires garantis jusqu'à 25 ans",
];

export default function Yvelines78Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Accompagnement projet panneaux solaires Yvelines (78)",
    description:
      "Accompagnement et mise en relation pour les projets photovoltaïques dans les Yvelines (78).",
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      telephone: SITE.phone,
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
      "@type": "AdministrativeArea",
      name: "Yvelines",
      identifier: "FR-78",
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
            Département 78 · Île-de-France
          </p>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">
            Panneau solaire dans les Yvelines (78)
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-300">
            {SITE.name} accompagne votre projet photovoltaïque dans le 78.
            Depuis {SITE.city}, nous qualifions les demandes dans tout le
            département des Yvelines : Saint-Quentin-en-Yvelines, Versailles,
            Rambouillet, Poissy et les communes voisines. Nous étudions des
            besoins solaires en autoconsommation, puis une entreprise partenaire
            indépendante établit le devis, facture et réalise les travaux.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/estimer-mon-projet" size="lg">
              Décrire mon projet
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
                Panneau solaire 78 — pourquoi passer par Nova Énergie ?
              </h2>
              <p className="mt-4 text-gray-600">
                Le département des Yvelines (78) bénéficie d&apos;un
                ensoleillement suffisant pour rentabiliser une installation
                photovoltaïque en autoconsommation. En choisissant un
                professionnel adapté à votre projet, certaines aides peuvent
                exiger des qualifications particulières. Nous vous présentons
                les conditions à vérifier avant tout engagement.
              </p>
              <ul className="mt-6 space-y-3">
                {HIGHLIGHTS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-solar-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-solar-50 p-8">
              <h3 className="text-xl font-semibold text-navy-900">
                Panneaux solaires 78 : nos services
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li>
                  <Link href="/panneaux-photovoltaiques/particuliers" className="text-solar-700 underline">
                    Particuliers
                  </Link>{" "}
                  — maisons individuelles, autoconsommation
                </li>
                <li>
                  <Link href="/panneaux-photovoltaiques/professionnels" className="text-solar-700 underline">
                    Professionnels
                  </Link>{" "}
                  — toitures tertiaires et industrielles
                </li>
                <li>
                  <Link href="/panneaux-photovoltaiques/collectivites" className="text-solar-700 underline">
                    Collectivités
                  </Link>{" "}
                  — bâtiments publics, ombrières
                </li>
                <li>
                  <Link href="/aides-et-subventions" className="text-solar-700 underline">
                    Aides et subventions
                  </Link>{" "}
                  — prime, TVA, éco-PTZ
                </li>
              </ul>
              <p className="mt-6 flex items-center gap-2 text-sm text-navy-900">
                <MapPin className="h-4 w-4 text-solar-600" />
                Siège : {SITE.address}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-navy-900">
            Villes desservies dans le 78
          </h2>
          <p className="mt-2 text-gray-600">
            Nova Énergie intervient dans tout le département des Yvelines.
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {YVELINES_CITIES.map((city) => {
              const local = LOCAL_CITIES.find(
                (c) => c.name.toLowerCase() === city.toLowerCase()
              );
              return (
                <li key={city}>
                  {local ? (
                    <Link
                      href={`/panneaux-solaires/${local.slug}`}
                      className="text-solar-700 hover:underline"
                    >
                      Panneau solaire {city}
                    </Link>
                  ) : (
                    <span className="text-gray-600">{city}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <RealisationsGrid limit={6} />
      <InstallationsMap />
      <CtaBanner />
    </>
  );
}
