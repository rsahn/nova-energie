import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-solar-600">
            Excellent
          </p>
          <h2 className="mt-2 text-3xl font-bold text-navy-900 md:text-4xl">
            Ce que nos clients pensent de nous
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.name}
              className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-4 border-t border-gray-100 pt-4">
                <p className="font-semibold text-navy-900">{review.name}</p>
                <p className="text-xs text-gray-400">
                  {review.date} — Avis {review.source}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
