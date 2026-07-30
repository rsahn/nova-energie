"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const CONSENT_KEY = "nova-cookie-consent";

export function GoogleTags() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(CONSENT_KEY) === "accepted") {
      setEnabled(true);
    }

    const onConsent = (event: Event) => {
      if ((event as CustomEvent<string>).detail === "accepted") {
        setEnabled(true);
      }
    };

    window.addEventListener("cookie-consent", onConsent);
    return () => window.removeEventListener("cookie-consent", onConsent);
  }, []);

  if (!enabled || (!GA_ID && !ADS_ID)) return null;

  const primaryId = ADS_ID ?? GA_ID;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
        strategy="afterInteractive"
      />
      <Script id="google-tags-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${ADS_ID ? `gtag('config', '${ADS_ID}');` : ""}
          ${GA_ID ? `gtag('config', '${GA_ID}');` : ""}
        `}
      </Script>
    </>
  );
}
