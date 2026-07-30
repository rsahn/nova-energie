import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { REALISATIONS } from "@/lib/data";

interface RealisationsGridProps {
  limit?: number;
  showTitle?: boolean;
  filter?: (item: (typeof REALISATIONS)[number]) => boolean;
}

export function RealisationsGrid({
  limit,
  showTitle = true,
  filter,
}: RealisationsGridProps) {
  let items = filter ? REALISATIONS.filter(filter) : REALISATIONS;
  if (limit) items = items.slice(0, limit);

  return (
    <section className={showTitle ? "py-20 bg-gray-50" : ""}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {showTitle && (
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-navy-900 md:text-4xl">
              Nos installations en France
            </h2>
            <p className="mt-4 text-gray-600">
              Découvrez nos réalisations en Île-de-France et partout en France
            </p>
          </div>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute left-3 top-3 rounded-full bg-solar-600 px-3 py-1 text-xs font-medium text-white">
                  {item.type}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                  <MapPin className="h-3.5 w-3.5" />
                  {item.location} — {item.region}
                </p>
              </div>
            </article>
          ))}
        </div>

        {limit && (
          <div className="mt-10 text-center">
            <Button href="/realisations" variant="outline">
              Voir toutes nos réalisations
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
