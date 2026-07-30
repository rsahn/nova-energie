import { Button } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <section className="bg-navy-900 py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Estimez votre projet solaire gratuitement
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-gray-300">
          Étude personnalisée, simulation de rentabilité et accompagnement pour
          les aides de l&apos;État — sans engagement.
        </p>
        <Button href="/estimer-mon-projet" size="lg" className="mt-8">
          Estimer mon projet
        </Button>
      </div>
    </section>
  );
}
