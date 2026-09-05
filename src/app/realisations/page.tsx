import type { Metadata } from "next";
import { RealisationsGrid } from "@/components/sections/RealisationsGrid";
import { InstallationsMap } from "@/components/sections/InstallationsMap";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Projets photovoltaïques et zones couvertes — Yvelines",
  description:
    "Exemples de projets photovoltaïques et de zones couvertes par le réseau partenaire de Nova Énergie en Île-de-France.",
};

export default function RealisationsPage() {
  return (
    <>
      <section className="bg-navy-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold md:text-5xl">Projets photovoltaïques</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Découvrez des exemples de configurations et de secteurs couverts.
            Les travaux sont devisés et réalisés par une entreprise partenaire indépendante.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-6 text-2xl font-bold text-navy-900">
            Carte des zones de projets
          </h2>
          <InstallationsMap showTitle={false} height="560px" fullscreen />
        </div>
      </section>

      <RealisationsGrid showTitle={false} />
      <CtaBanner />
    </>
  );
}
