import type { Metadata } from "next";
import Image from "next/image";
import { ClipboardCheck, CheckCircle, Users } from "lucide-react";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Stats } from "@/components/sections/Stats";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Qui sommes-nous ?",
  description: `${SITE.name} — accompagnement et mise en relation pour les projets photovoltaïques dans les Yvelines et en ${SITE.region}.`,
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
            {SITE.name}, service local d&apos;accompagnement de projets
            photovoltaïques à {SITE.city} et dans les Yvelines.
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
              Nous aidons particuliers, entreprises et collectivités à clarifier
              leur besoin photovoltaïque. Après cette première qualification,
              nous les mettons en relation avec une entreprise partenaire
              indépendante qui réalise l&apos;étude technique, établit le devis,
              facture et exécute les travaux sous sa responsabilité.
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
                icon: ClipboardCheck,
                title: "Étude personnalisée",
                text: "Un projet étudié selon votre toiture, vos usages et votre budget.",
              },
              {
                icon: Users,
                title: "Équipe locale",
                text: `Basés à ${SITE.city}, nous intervenons rapidement en ${SITE.department}.`,
              },
              {
                icon: CheckCircle,
                title: "Suivi après-vente",
                text: "Le partenaire contractant reste responsable des travaux, des garanties et du SAV.",
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
