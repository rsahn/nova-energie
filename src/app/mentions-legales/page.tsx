import type { Metadata } from "next";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  const { legal } = SITE;

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 prose prose-gray">
      <h1 className="text-3xl font-bold text-navy-900">Mentions légales</h1>

      <section className="mt-8 space-y-4 text-gray-600">
        <h2 className="text-xl font-semibold text-navy-900">Éditeur du site</h2>
        <p>
          {legal.companyName}
          <br />
          Siège social : {SITE.address}
          <br />
          SIRET : {legal.siret}
          <br />
          RCS : {legal.rcs}
          <br />
          N° TVA : {legal.tva}
          <br />
          Capital social : {legal.capital}
          <br />
          Directeur de la publication : {legal.director}
          <br />
          Email :{" "}
          <a href={`mailto:${SITE.email}`} className="text-solar-600">
            {SITE.email}
          </a>
          <br />
          Téléphone : {SITE.phone}
        </p>

        <h2 className="text-xl font-semibold text-navy-900">Hébergement</h2>
        <p>
          {legal.host}
          <br />
          {legal.hostAddress}
        </p>

        <h2 className="text-xl font-semibold text-navy-900">Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble du contenu de ce site (textes, images, graphismes,
          logo) est la propriété de {legal.companyName} ou de ses partenaires.
          Toute reproduction est interdite sans autorisation écrite préalable.
        </p>

        <h2 className="text-xl font-semibold text-navy-900">Responsabilité</h2>
        <p>
          {SITE.name} s&apos;efforce d&apos;assurer l&apos;exactitude des
          informations diffusées sur ce site. Toutefois, elle ne saurait être
          tenue responsable des omissions, inexactitudes ou carences dans la
          mise à jour.
        </p>
      </section>
    </article>
  );
}
