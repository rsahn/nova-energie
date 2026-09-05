import { Button } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <section className="bg-navy-900 py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Estimez votre projet solaire gratuitement
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-gray-300">
          Décrivez votre besoin. Nova Énergie le qualifie puis vous met en
          relation avec une entreprise partenaire indépendante — sans engagement.
        </p>
        <Button href="/estimer-mon-projet" size="lg" className="mt-8">
          Estimer mon projet
        </Button>
      </div>
    </section>
  );
}
