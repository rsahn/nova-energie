import { CtaBanner } from "@/components/sections/CtaBanner";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { InstallationsMap } from "@/components/sections/InstallationsMap";
import { Partners } from "@/components/sections/Partners";
import { RealisationsGrid } from "@/components/sections/RealisationsGrid";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-navy-900">
            Estimez votre projet
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Simulation gratuite et sans engagement — découvrez votre potentiel
            d&apos;autoconsommation
          </p>
          <Button href="/estimer-mon-projet" size="lg" className="mt-8">
            Estimer mon projet
          </Button>
        </div>
      </section>

      <RealisationsGrid limit={6} />
      <InstallationsMap />
      <Testimonials />
      <Partners />
      <Features />
      <CtaBanner />
    </>
  );
}
