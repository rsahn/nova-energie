import { PARTNERS } from "@/lib/data";

export function Partners() {
  return (
    <section className="border-y border-gray-100 bg-gray-50 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="mb-8 text-center text-sm font-medium text-gray-500">
          L&apos;installation de vos panneaux photovoltaïques avec nos marques
          partenaires
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {PARTNERS.map((name) => (
            <span
              key={name}
              className="text-lg font-semibold text-gray-400 transition-colors hover:text-solar-600"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
