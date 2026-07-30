import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-navy-900">
        Politique de confidentialité
      </h1>
      <p className="mt-4 text-sm text-gray-500">
        Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
      </p>

      <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-navy-900">
            1. Responsable du traitement
          </h2>
          <p className="mt-2">
            {SITE.legal.companyName} — {SITE.address}
            <br />
            Email DPO :{" "}
            <a href={`mailto:${SITE.legal.dpoEmail}`} className="text-solar-600">
              {SITE.legal.dpoEmail}
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy-900">
            2. Données collectées
          </h2>
          <p className="mt-2">
            Via le formulaire « Estimer mon projet », nous collectons : nom,
            prénom, email, téléphone, code postal, type de projet et message
            libre. Ces données sont nécessaires pour traiter votre demande de
            devis.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy-900">
            3. Finalités et base légale
          </h2>
          <p className="mt-2">
            Vos données sont traitées pour répondre à votre demande de contact
            (base légale : exécution de mesures précontractuelles, art. 6.1.b
            RGPD) et, avec votre consentement, pour vous envoyer des
            communications commerciales.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy-900">
            4. Durée de conservation
          </h2>
          <p className="mt-2">
            Les données de contact sont conservées 3 ans à compter du dernier
            échange, sauf obligation légale contraire.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy-900">5. Vos droits</h2>
          <p className="mt-2">
            Vous disposez d&apos;un droit d&apos;accès, de rectification,
            d&apos;effacement, de limitation, d&apos;opposition et de
            portabilité. Contactez{" "}
            <a href={`mailto:${SITE.legal.dpoEmail}`} className="text-solar-600">
              {SITE.legal.dpoEmail}
            </a>
            . Vous pouvez introduire une réclamation auprès de la CNIL (
            <a
              href="https://www.cnil.fr"
              className="text-solar-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.cnil.fr
            </a>
            ).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy-900">6. Cookies</h2>
          <p className="mt-2">
            Consultez notre{" "}
            <Link href="/politique-cookies" className="text-solar-600 underline">
              politique cookies
            </Link>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
