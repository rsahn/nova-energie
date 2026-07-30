"use client";

import dynamic from "next/dynamic";
import { REALISATIONS } from "@/lib/data";

const InstallationsMapInner = dynamic(
  () =>
    import("./InstallationsMapInner").then((m) => m.InstallationsMapInner),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[480px] items-center justify-center rounded-xl bg-gray-100 text-gray-500">
        Chargement de la carte...
      </div>
    ),
  }
);

interface InstallationsMapProps {
  height?: string;
  fullscreen?: boolean;
  showTitle?: boolean;
}

export function InstallationsMap({
  height,
  fullscreen,
  showTitle = true,
}: InstallationsMapProps) {
  return (
    <section className={showTitle ? "py-20 bg-white" : ""}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {showTitle && (
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-navy-900 md:text-4xl">
              Nos installations en France
            </h2>
            <p className="mt-4 text-gray-600">
              Plus de {REALISATIONS.length} chantiers réalisés en Île-de-France
            </p>
          </div>
        )}
        <InstallationsMapInner height={height} fullscreen={fullscreen} />
        {showTitle && (
          <p className="mt-4 text-center">
            <a
              href="/realisations"
              className="text-sm font-medium text-solar-600 hover:text-solar-700"
            >
              Voir toutes nos réalisations →
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
