import Link from "next/link";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { InstallationsMap } from "@/components/sections/InstallationsMap";
import { RealisationsGrid } from "@/components/sections/RealisationsGrid";
import { Stats } from "@/components/sections/Stats";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-navy-900">
            Estimez votre projet
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Simulation gratuite et sans engagement — découvrez votre potentiel
            d&apos;autoconsommation
          </p>
          <Button href="/estimer-mon-projet" size="lg" className="mt-8">
            Estimer mon projet
          </Button>
        </div>
      </section>

      <RealisationsGrid limit={6} />
      <InstallationsMap />
      <Features />

      <section className="border-t border-gray-100 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-navy-900">
            Panneau solaire dans les Yvelines (78)
          </h2>
          <p className="mt-4 max-w-3xl text-gray-600">
            Nova Énergie analyse votre besoin et vous met en relation avec une
            entreprise partenaire indépendante pour votre projet photovoltaïque
            dans le département 78 : Montigny-le-Bretonneux,
            Trappes, Guyancourt, Versailles, Élancourt et les communes
            environnantes. Le partenaire établit le devis, facture et réalise
            les travaux sous sa propre responsabilité.
          </p>
          <Link
            href="/panneaux-solaires/yvelines-78"
            className="mt-6 inline-block text-sm font-medium text-solar-700 hover:underline"
          >
            En savoir plus sur le panneau solaire 78 →
          </Link>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
