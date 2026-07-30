import type { Metadata } from "next";
import { CheckCircle, Phone } from "lucide-react";
import { EstimateForm } from "@/components/sections/EstimateForm";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Estimer mon projet",
  description:
    "Demandez une étude gratuite pour votre installation de panneaux solaires.",
};

const STEPS = [
  "Étude de faisabilité gratuite",
  "Simulation de rentabilité personnalisée",
  "Accompagnement aides de l'État (MaPrimeRénov', prime autoconsommation)",
  "Devis détaillé sans engagement",
];

export default function EstimatePage() {
  return (
    <>
      <section className="bg-navy-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold md:text-5xl">Estimer mon projet</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Remplissez le formulaire — nous vous recontactons sous 48h pour une
            étude personnalisée et gratuite.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-navy-900">
              Ce que comprend votre étude
            </h2>
            <ul className="mt-6 space-y-4">
              {STEPS.map((step) => (
                <li key={step} className="flex items-start gap-3 text-gray-600">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-solar-600" />
                  {step}
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-xl bg-solar-50 p-6">
              <p className="font-semibold text-navy-900">
                Vous préférez nous appeler ?
              </p>
              <a
                href={`tel:${SITE.phoneRaw ?? SITE.phone.replace(/\s/g, "")}`}
                className="mt-2 flex items-center gap-2 text-solar-700 hover:text-solar-800"
              >
                <Phone className="h-5 w-5" />
                <span className="text-lg font-bold">{SITE.phone}</span>
              </a>
              <p className="mt-2 text-sm text-gray-500">
                Lun–Ven, 9h–18h — {SITE.city}
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <EstimateForm />
          </div>
        </div>
      </section>
    </>
  );
}
