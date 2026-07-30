declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Conversion Google Ads — formulaire devis soumis */
export function trackDevisConversion() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const label = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

  if (adsId && label) {
    window.gtag("event", "conversion", {
      send_to: `${adsId}/${label}`,
    });
  }

  if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
    window.gtag("event", "generate_lead", {
      event_category: "devis",
      event_label: "estimer-mon-projet",
    });
  }
}
