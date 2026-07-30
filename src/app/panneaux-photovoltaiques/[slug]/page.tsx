import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle } from "lucide-react";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Button } from "@/components/ui/Button";
import { SERVICES } from "@/lib/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: service.title, description: service.description };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <section className="bg-navy-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold md:text-5xl">{service.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            {service.description}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                Pourquoi choisir le solaire ?
              </h2>
              <ul className="mt-6 space-y-4">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-gray-600">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-solar-600" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-solar-50 p-8">
              <h3 className="text-xl font-semibold text-navy-900">
                Notre accompagnement
              </h3>
              <ol className="mt-6 space-y-4">
                {[
                  "Visite et étude de faisabilité gratuite",
                  "Dimensionnement optimal de l'installation",
                  "Montage administratif (déclaration, raccordement Enedis)",
                  "Installation par équipe certifiée RGE",
                  "Mise en service et formation au monitoring",
                  "Suivi et maintenance",
                ].map((step, i) => (
                  <li key={step} className="flex gap-3 text-gray-700">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-solar-600 text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              <Button href="/estimer-mon-projet" className="mt-8 w-full justify-center">
                Demander une étude gratuite
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
