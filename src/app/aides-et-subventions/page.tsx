import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, PiggyBank } from "lucide-react";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Button } from "@/components/ui/Button";
import { STATE_AIDS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Aides et subventions panneaux solaires",
  description:
    "Prime autoconsommation, TVA réduite, Éco-PTZ et aides de l'État pour votre installation photovoltaïque. Installateur RGE éligible.",
};

export default function AidesPage() {
  return (
    <>
      <section className="bg-navy-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold md:text-5xl">
            Aides & subventions
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Profitez des dispositifs de l&apos;État pour financer votre
            installation photovoltaïque. En tant qu&apos;installateur RGE, nous
            vous accompagnons dans toutes les démarches.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {STATE_AIDS.map((aid) => (
              <article
                key={aid.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h2 className="text-xl font-semibold text-navy-900">
                    {aid.title}
                  </h2>
                  <span className="shrink-0 rounded-full bg-solar-50 px-3 py-1 text-sm font-medium text-solar-700">
                    {aid.amount}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  {aid.description}
                </p>
                <p className="mt-3 text-xs text-gray-400">
                  Éligibilité : {aid.eligibility}
                </p>
                <a
                  href={aid.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-solar-600 hover:text-solar-700"
                >
                  En savoir plus
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-solar-50 p-8 text-center">
            <PiggyBank className="mx-auto mb-4 h-10 w-10 text-solar-600" />
            <h3 className="text-xl font-semibold text-navy-900">
              Calculez vos aides avec un expert
            </h3>
            <p className="mx-auto mt-2 max-w-lg text-gray-600">
              Chaque projet est unique. Nous simulons gratuitement le montant
              des aides auxquelles vous êtes éligible.
            </p>
            <Button href="/estimer-mon-projet" className="mt-6">
              Demander une simulation gratuite
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-12">
        <div className="mx-auto max-w-3xl px-4 text-center text-sm text-gray-500 sm:px-6">
          <p>
            Les montants et conditions des aides peuvent évoluer. Informations
            indicatives au {new Date().getFullYear()}. Consultez les sites
            officiels pour les conditions à jour.{" "}
            <Link href="/mentions-legales" className="text-solar-600 underline">
              Mentions légales
            </Link>
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
