"use client";

import { useState } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const PROJECT_TYPES = [
  "Particulier — maison individuelle",
  "Professionnel — local commercial / entrepôt",
  "Collectivité — bâtiment public",
];

const ROOF_TYPES = [
  "Tuiles",
  "Ardoise",
  "Toit plat",
  "Autre / je ne sais pas",
];

export function EstimateForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [devMode, setDevMode] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    postalCode: "",
    projectType: "",
    roofType: "",
    message: "",
  });

  const update = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          postalCode: form.postalCode,
          projectType: form.projectType,
          roofType: form.roofType || undefined,
          message: form.message || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Erreur lors de l'envoi");
      }

      setDevMode(Boolean(data.dev));
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-xl bg-solar-50 p-8 text-center">
        <p className="text-xl font-semibold text-solar-800">
          Demande envoyée avec succès !
        </p>
        <p className="mt-2 text-gray-600">
          Nous vous recontactons sous 48h pour une étude personnalisée.
        </p>
        {devMode && (
          <p className="mt-4 text-xs text-amber-700 bg-amber-50 rounded-md p-3">
            Mode développement : configurez SMTP ou Resend dans .env.local pour
            recevoir les emails.
          </p>
        )}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-gray-700">
            Prénom *
          </label>
          <input
            id="firstName"
            required
            type="text"
            value={form.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-solar-600 focus:outline-none focus:ring-1 focus:ring-solar-600"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-gray-700">
            Nom *
          </label>
          <input
            id="lastName"
            required
            type="text"
            value={form.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-solar-600 focus:outline-none focus:ring-1 focus:ring-solar-600"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
            Email *
          </label>
          <input
            id="email"
            required
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-solar-600 focus:outline-none focus:ring-1 focus:ring-solar-600"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">
            Téléphone *
          </label>
          <input
            id="phone"
            required
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-solar-600 focus:outline-none focus:ring-1 focus:ring-solar-600"
          />
        </div>
      </div>

      <div>
        <label htmlFor="postalCode" className="mb-1.5 block text-sm font-medium text-gray-700">
          Code postal *
        </label>
        <input
          id="postalCode"
          required
          type="text"
          placeholder="Ex. 78960"
          value={form.postalCode}
          onChange={(e) => update("postalCode", e.target.value)}
          className="w-full max-w-xs rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-solar-600 focus:outline-none focus:ring-1 focus:ring-solar-600"
        />
      </div>

      <div>
        <label htmlFor="projectType" className="mb-1.5 block text-sm font-medium text-gray-700">
          Type de projet *
        </label>
        <select
          id="projectType"
          required
          value={form.projectType}
          onChange={(e) => update("projectType", e.target.value)}
          className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-solar-600 focus:outline-none focus:ring-1 focus:ring-solar-600"
        >
          <option value="">Sélectionnez...</option>
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="roofType" className="mb-1.5 block text-sm font-medium text-gray-700">
          Type de toiture
        </label>
        <select
          id="roofType"
          value={form.roofType}
          onChange={(e) => update("roofType", e.target.value)}
          className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-solar-600 focus:outline-none focus:ring-1 focus:ring-solar-600"
        >
          <option value="">Sélectionnez...</option>
          {ROOF_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">
          Message (surface, consommation annuelle...)
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-solar-600 focus:outline-none focus:ring-1 focus:ring-solar-600"
          placeholder="Décrivez votre projet..."
        />
      </div>

      {error && (
        <p className="rounded-md bg-red-50 p-3 text-sm text-red-700">{error}</p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={loading}>
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          "Envoyer ma demande"
        )}
      </Button>

      <p className="text-xs text-gray-400">
        * Champs obligatoires. Vos données sont traitées conformément à notre{" "}
        <Link href="/politique-de-confidentialite" className="underline hover:text-solar-600">
          politique de confidentialité
        </Link>
        .
      </p>
    </form>
  );
}
