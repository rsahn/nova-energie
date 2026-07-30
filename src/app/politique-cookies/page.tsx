import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique cookies",
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-navy-900">Politique cookies</h1>

      <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-navy-900">
            Qu&apos;est-ce qu&apos;un cookie ?
          </h2>
          <p className="mt-2">
            Un cookie est un petit fichier texte déposé sur votre terminal lors
            de la visite d&apos;un site. Il permet de mémoriser des
            informations relatives à votre navigation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy-900">
            Cookies utilisés sur ce site
          </h2>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              <strong>Cookie de consentement</strong> — mémorise votre choix
              (accepter/refuser). Durée : 13 mois. Stockage local (localStorage).
            </li>
            <li>
              <strong>Cookies analytiques</strong> (si acceptés) — mesure
              d&apos;audience anonymisée pour améliorer le site.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy-900">
            Gérer vos préférences
          </h2>
          <p className="mt-2">
            Vous pouvez à tout moment modifier votre choix en supprimant les
            cookies via les paramètres de votre navigateur, ou en effaçant le
            stockage local du site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy-900">
            En savoir plus
          </h2>
          <p className="mt-2">
            Pour toute question : consultez notre{" "}
            <Link
              href="/politique-de-confidentialite"
              className="text-solar-600 underline"
            >
              politique de confidentialité
            </Link>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
