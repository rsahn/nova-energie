import { STATS } from "@/lib/data";

export function Stats() {
  return (
    <section className="bg-solar-600 py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {STATS.map(({ value, label }) => (
          <div key={label} className="text-center">
            <p className="text-4xl font-bold text-white md:text-5xl">{value}</p>
            <p className="mt-2 text-sm text-solar-100">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
