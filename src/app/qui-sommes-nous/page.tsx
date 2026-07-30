import type { Metadata } from "next";
import Image from "next/image";
import { Award, CheckCircle, Users } from "lucide-react";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Stats } from "@/components/sections/Stats";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Qui sommes-nous ?",
  description: `${SITE.name} — installateur photovoltaïque certifié RGE depuis ${SITE.since} en ${SITE.region}.`,
};

const VALUES = [
  "Panneaux solaires de marques leaders, garantis 25 ans",
  "Économies jusqu'à 40% sur vos factures d'énergie",
  "Valorisation de votre bien immobilier",
  "Énergie propre et renouvelable",
  "Systèmes intelligents de monitoring",
  "Accompagnement administratif pour les aides de l'État",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold md:text-5xl">Qui sommes-nous ?</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            {SITE.name}, spécialiste du photovoltaïque depuis {SITE.since},
            basée à {SITE.city} en {SITE.region}.
          </p>
        </div>
      </section>

      <Stats />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop"
              alt="Installation panneaux solaires"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-navy-900">
              Une entreprise de confiance
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Depuis {SITE.since}, nous accompagnons particuliers, entreprises et
              collectivités dans leur transition vers l&apos;énergie solaire. Notre
              équipe certifiée RGE et QualifElec intervient sur l&apos;ensemble de
              l&apos;Île-de-France.
            </p>
            <ul className="mt-6 space-y-3">
              {VALUES.map((v) => (
                <li key={v} className="flex items-start gap-2 text-gray-600">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-solar-600" />
                  {v}
                </li>
              ))}
            </ul>
            <Button href="/estimer-mon-projet" className="mt-8">
              Estimer mon projet
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Award,
                title: "Certifié RGE",
                text: "Éligible aux aides de l'État et aux primes autoconsommation.",
              },
              {
                icon: Users,
                title: "Équipe locale",
                text: `Basés à ${SITE.city}, nous intervenons rapidement en ${SITE.department}.`,
              },
              {
                icon: CheckCircle,
                title: "Suivi après-vente",
                text: "Maintenance, monitoring et SAV réactif sur toutes nos installations.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-xl bg-white p-8 shadow-sm">
                <Icon className="mb-4 h-8 w-8 text-solar-600" />
                <h3 className="text-lg font-semibold text-navy-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
