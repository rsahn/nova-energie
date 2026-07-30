import type { Metadata } from "next";
import { Battery, Smartphone, TrendingDown, Zap } from "lucide-react";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Autoconsommation solaire",
  description:
    "Produisez et consommez votre propre électricité solaire. Pilotez votre installation depuis votre smartphone.",
};

const BENEFITS = [
  {
    icon: Zap,
    title: "Produisez votre énergie",
    description:
      "Vos panneaux produisent de l'électricité dès que le soleil brille. Vous consommez en direct ce que vous produisez.",
  },
  {
    icon: TrendingDown,
    title: "Réduisez votre facture",
    description:
      "En autoconsommation, vous achetez moins d'électricité au réseau. Économies visibles dès les premiers mois.",
  },
  {
    icon: Battery,
    title: "Vendez le surplus",
    description:
      "L'électricité non consommée peut être revendue à EDF OA, pour un revenu complémentaire.",
  },
  {
    icon: Smartphone,
    title: "Pilotez depuis votre smartphone",
    description:
      "Suivez production, consommation et performances en temps réel via l'application de monitoring.",
  },
];

export default function AutoconsommationPage() {
  return (
    <>
      <section className="bg-navy-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold md:text-5xl">Autoconsommation</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Produisez et consommez votre propre électricité solaire. De avril à
            septembre, votre facture peut ne comporter aucune consommation
            réseau.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-900">
                Exemple d&apos;autoconsommation sur une année
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Sur une maison de 100 m², l&apos;autoconsommation couvre les
                2/3 des besoins énergétiques lors d&apos;une journée ensoleillée,
                même en hiver. De avril à septembre, la production solaire
                couvre l&apos;essentiel de vos besoins.
              </p>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-solar-600" />
                  Production maximale en été — facture quasi nulle
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-solar-600" />
                  Production hivernale complète une partie de la consommation
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-solar-600" />
                  Surplus revendu à tarif garanti sur 20 ans
                </li>
              </ul>
              <Button href="/estimer-mon-projet" className="mt-8">
                Simuler mon autoconsommation
              </Button>
            </div>

            <div className="rounded-xl bg-solar-50 p-8">
              <h3 className="font-semibold text-navy-900">
                Profil type — maison 100 m²
              </h3>
              <dl className="mt-6 space-y-4">
                {[
                  ["Installation", "6 kWc — 16 panneaux"],
                  ["Production annuelle", "~6 500 kWh"],
                  ["Autoconsommation", "~65%"],
                  ["Économie annuelle", "800 à 1 200 €"],
                  ["Amortissement", "8 à 12 ans"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex justify-between border-b border-solar-100 pb-3 text-sm"
                  >
                    <dt className="text-gray-600">{label}</dt>
                    <dd className="font-semibold text-navy-900">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-navy-900">
            Les avantages de l&apos;autoconsommation
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-xl bg-white p-6 shadow-sm">
                <Icon className="mb-4 h-8 w-8 text-solar-600" />
                <h3 className="font-semibold text-navy-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
