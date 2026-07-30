import { Award, Leaf, PiggyBank, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";

const FEATURES = [
  {
    icon: Leaf,
    title: "Électricité verte",
    description:
      "Produisez votre propre énergie renouvelable et réduisez votre empreinte carbone.",
  },
  {
    icon: PiggyBank,
    title: "Économies durables",
    description:
      "Réduisez votre facture de 30 à 70% grâce à l'autoconsommation solaire.",
  },
  {
    icon: Award,
    title: "Certifié RGE",
    description:
      "Installateur QualifElec & RGE — éligible aux aides de l'État.",
  },
  {
    icon: Users,
    title: "Accompagnement complet",
    description:
      "De l'étude de faisabilité à la mise en service et le suivi après-vente.",
  },
];

export function Features() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-navy-900 md:text-4xl">
            Électricité verte
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            En installant des panneaux photovoltaïques, vous faites du bien à la
            planète et à votre budget. Chaque bâtiment peut accéder à
            l&apos;énergie renouvelable avec une solution sur mesure.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-solar-50">
                <Icon className="h-6 w-6 text-solar-600" />
              </div>
              <h3 className="text-lg font-semibold text-navy-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/qui-sommes-nous" variant="outline">
            En savoir plus
          </Button>
        </div>
      </div>
    </section>
  );
}
