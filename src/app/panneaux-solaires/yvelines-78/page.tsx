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
  "Qualification gratuite de votre besoin dans le 78",
  "Mise en relation avec une entreprise partenaire indépendante",
  "Étude technique et devis établis par le partenaire",
  "Comparaison autoconsommation totale ou vente du surplus",
  "Vérification des démarches avant engagement",
  "Un interlocuteur local pour faciliter les échanges",
];

const FAQ = [
  {
    question: "Faut-il une autorisation pour installer des panneaux solaires dans les Yvelines ?",
    answer:
      "Oui, une déclaration préalable de travaux est généralement nécessaire pour une installation en toiture, car elle modifie l'aspect extérieur du bâtiment. Le partenaire chargé du projet vérifie aussi les règles locales d'urbanisme avant les travaux.",
  },
  {
    question: "Qui établit le devis et réalise les travaux ?",
    answer:
      "Nova Énergie qualifie votre demande et organise la mise en relation. L'entreprise partenaire indépendante effectue la visite technique, établit et facture son devis, réalise les travaux et assume les garanties liées à son contrat.",
  },
  {
    question: "Peut-on autoconsommer et vendre le surplus ?",
    answer:
      "Le projet peut être étudié en autoconsommation totale ou avec injection du surplus. Le choix dépend de votre consommation, de la toiture, de la puissance envisagée et des conditions de raccordement applicables.",
  },
  {
    question: "Quelles informations préparer pour une première étude ?",
    answer:
      "Préparez votre code postal, une facture d'électricité récente, le type de toiture, son orientation approximative et, si possible, quelques photos. Ces éléments permettent de mieux qualifier le besoin avant la visite technique.",
  },
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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
                Un bon projet solaire commence par l&apos;analyse de la consommation,
                de l&apos;orientation, de l&apos;ombrage et de l&apos;état de la toiture.
                Nova Énergie recueille ces premiers éléments et organise la mise
                en relation avec un partenaire indépendant. Celui-ci confirme la
                faisabilité sur place et reste seul responsable de son devis et
                des travaux.
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

      <section className="border-y border-gray-100 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-navy-900">
            Les étapes d&apos;un projet de panneaux solaires dans les Yvelines
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["1", "Votre besoin", "Consommation, adresse du projet, toiture et objectifs."],
              ["2", "Mise en relation", "Sélection d'une entreprise partenaire adaptée au secteur."],
              ["3", "Étude et devis", "Visite technique, dimensionnement et offre établis par le partenaire."],
              ["4", "Réalisation", "Démarches, travaux, raccordement et garanties gérés par le partenaire."],
            ].map(([number, title, text]) => (
              <article key={number} className="rounded-xl border border-gray-200 p-6">
                <span className="text-sm font-bold text-solar-700">Étape {number}</span>
                <h3 className="mt-2 font-semibold text-navy-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-navy-900">
            Démarches à anticiper pour une installation photovoltaïque
          </h2>
          <div className="mt-6 space-y-4 text-gray-600">
            <p>
              Une installation en toiture nécessite généralement une déclaration
              préalable en mairie. Les règles peuvent être plus contraignantes à
              proximité d&apos;un site protégé ou selon le plan local d&apos;urbanisme.
              Consultez la {" "}
              <a href="https://www.service-public.fr/particuliers/vosdroits/F36798" target="_blank" rel="noopener noreferrer" className="text-solar-700 underline">
                procédure officielle d&apos;urbanisme
              </a>.
            </p>
            <p>
              Le raccordement et la déclaration de l&apos;installation auprès du
              gestionnaire de réseau dépendent du mode choisi : autoconsommation
              totale, injection du surplus ou vente totale. Enedis détaille les {" "}
              <a href="https://www.enedis.fr/raccordement-installation-production-electrique" target="_blank" rel="noopener noreferrer" className="text-solar-700 underline">
                étapes du raccordement photovoltaïque
              </a>.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-navy-900">
            Villes desservies dans le 78
          </h2>
          <p className="mt-2 text-gray-600">
            Nova Énergie accompagne les demandes dans tout le département des Yvelines.
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

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-navy-900">
            Questions fréquentes sur les panneaux solaires dans le 78
          </h2>
          <div className="mt-8 space-y-4">
            {FAQ.map((item) => (
              <details key={item.question} className="rounded-xl border border-gray-200 bg-white p-5">
                <summary className="cursor-pointer font-semibold text-navy-900">
                  {item.question}
                </summary>
                <p className="mt-3 leading-relaxed text-gray-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RealisationsGrid limit={6} />
      <InstallationsMap />
      <CtaBanner />
    </>
  );
}
