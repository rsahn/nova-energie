import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Panneau solaire 78 | Installateur Yvelines RGE`,
    template: `%s | ${SITE.name}`,
  },
  description: `Installateur panneau solaire dans les Yvelines (78). ${SITE.name}, certifié RGE à ${SITE.city} : autoconsommation, devis gratuit, aides État. Intervention SQY, Versailles, Trappes et tout le 78.`,
  keywords: SITE.seoKeywords,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Panneaux solaires ${SITE.department}`,
    description: `Installateur photovoltaïque RGE à ${SITE.city}. Devis gratuit.`,
    images: [{ url: "/logo.svg", width: 120, height: 120, alt: SITE.name }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE.url },
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
