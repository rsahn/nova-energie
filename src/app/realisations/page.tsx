import type { Metadata } from "next";
import { RealisationsGrid } from "@/components/sections/RealisationsGrid";
import { InstallationsMap } from "@/components/sections/InstallationsMap";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Nos réalisations — Installations panneaux solaires Yvelines",
  description:
    "Carte et galerie de nos installations photovoltaïques en Île-de-France : Yvelines, Essonne et région parisienne.",
};

export default function RealisationsPage() {
  return (
    <>
      <section className="bg-navy-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold md:text-5xl">Nos réalisations</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Plus de 2 500 panneaux installés en Île-de-France. Particuliers,
            professionnels et collectivités.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-6 text-2xl font-bold text-navy-900">
            Carte de nos installations
          </h2>
          <InstallationsMap showTitle={false} height="560px" fullscreen />
        </div>
      </section>

      <RealisationsGrid showTitle={false} />
      <CtaBanner />
    </>
  );
}
