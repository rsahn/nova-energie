"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HERO_SLIDES, SITE } from "@/lib/data";

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[current];

  return (
    <section className="relative min-h-[520px] overflow-hidden md:min-h-[600px]">
      {HERO_SLIDES.map((s, i) => (
        <div
          key={s.title}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-navy-900/65" />
        </div>
      ))}

      <div className="relative mx-auto flex min-h-[520px] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 md:min-h-[600px]">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-solar-100">
          Entreprise locale — {SITE.city}
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          Passez à l&apos;autoconsommation solaire avec une entreprise de
          proximité
        </h1>
        <p className="mt-6 max-w-xl text-lg text-gray-200">{slide.title}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/estimer-mon-projet" size="lg" variant="primary">
            Estimer mon projet
          </Button>
          <Button href="/realisations" size="lg" variant="white">
            Voir nos réalisations
          </Button>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-4">
        <button
          type="button"
          onClick={() =>
            setCurrent((c) => (c - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
          }
          className="rounded-full bg-white/20 p-2 text-white backdrop-blur hover:bg-white/30"
          aria-label="Slide précédent"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-8 bg-solar-600" : "w-2 bg-white/50"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setCurrent((c) => (c + 1) % HERO_SLIDES.length)}
          className="rounded-full bg-white/20 p-2 text-white backdrop-blur hover:bg-white/30"
          aria-label="Slide suivant"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
