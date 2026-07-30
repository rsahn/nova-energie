import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { LEGAL_LINKS, NAV_ITEMS, SITE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo variant="light" />
          <p className="mt-4 text-sm leading-relaxed">
            Installateur de panneaux photovoltaïques certifié RGE depuis{" "}
            {SITE.since}. Accompagnement complet de l&apos;étude à la mise en
            service.
          </p>
        </div>

        <div>
          <p className="mb-4 font-semibold text-white">Navigation</p>
          <ul className="space-y-2 text-sm">
            {NAV_ITEMS.flatMap((item) =>
              item.children
                ? item.children.map((c) => (
                    <li key={c.href}>
                      <Link href={c.href} className="hover:text-solar-100">
                        {c.label}
                      </Link>
                    </li>
                  ))
                : [
                    <li key={item.href}>
                      <Link href={item.href!} className="hover:text-solar-100">
                        {item.label}
                      </Link>
                    </li>,
                  ]
            )}
            <li>
              <Link href="/estimer-mon-projet" className="hover:text-solar-100">
                Estimer mon projet
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 font-semibold text-white">Certifications</p>
          <ul className="space-y-2 text-sm">
            <li>QualifElec</li>
            <li>RGE — Reconnu Garant de l&apos;Environnement</li>
            <li>Garantie panneaux 25 ans</li>
            <li>Assurance décennale</li>
          </ul>
        </div>

        <div>
          <p className="mb-4 font-semibold text-white">Contact</p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-solar-600" />
              {SITE.address}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-solar-600" />
              <a href={`tel:${SITE.phoneRaw ?? SITE.phone.replace(/\s/g, "")}`} className="hover:text-white">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-solar-600" />
              <a href={`mailto:${SITE.email}`} className="hover:text-white">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. Tous droits réservés.</p>
          <ul className="flex flex-wrap justify-center gap-4">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-solar-100">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
