export const SITE = {
  name: "Nova Énergie",
  tagline: "Installateur de panneaux solaires",
  city: "Voisins-le-Bretonneux",
  department: "Yvelines (78)",
  departmentCode: "78",
  region: "Île-de-France",
  phone: "06 66 25 22 41",
  phoneRaw: "+33666252241",
  email: "sahnounramy@gmail.com",
  address: "Voisins-le-Bretonneux, 78960",
  since: 2018,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nova-energie-solaire.fr",
  googleRating: 5.0,
  googleReviewCount: 3,
  coordinates: { lat: 48.7578, lng: 2.0512 },
  seoKeywords: [
    "panneau solaire 78",
    "panneaux solaires 78",
    "panneaux solaires Yvelines",
    "installateur photovoltaïque 78",
    "installateur panneau solaire Yvelines",
    "Nova Énergie",
    "panneaux solaires Voisins-le-Bretonneux",
    "panneaux solaires Montigny-le-Bretonneux",
    "panneau solaire Montigny-le-Bretonneux",
    "autoconsommation Île-de-France",
    "installateur RGE Yvelines",
  ],
  legal: {
    companyName: "Nova Énergie",
    siret: "À compléter",
    rcs: "À compléter",
    tva: "À compléter",
    director: "Ramy Sahnoun",
    capital: "À compléter",
    host: "Vercel Inc.",
    hostAddress: "440 N Barranca Ave #4133, Covina, CA 91723, USA",
    dpoEmail: "sahnounramy@gmail.com",
  },
};

export const MAP_DEFAULT = {
  center: { lat: 48.85, lng: 2.05 } as const,
  zoom: 10,
};

export const HERO_SLIDES = [
  {
    title: "Le photovoltaïque pour une énergie durable",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&h=900&fit=crop",
  },
  {
    title: "L'accompagnement au cœur de nos préoccupations",
    image:
      "https://images.unsplash.com/photo-1466611653731-7197212791b8?w=1600&h=900&fit=crop",
  },
  {
    title: "Certifiée QualifElec & RGE",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1600&h=900&fit=crop",
  },
  {
    title: "30% à 70% d'économie sur votre facture d'énergie",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1600&h=900&fit=crop",
  },
];

export const STATS = [
  { value: "2 500+", label: "Panneaux installés depuis 2018" },
  { value: "1,2 MW", label: "Produits chaque année en électricité verte" },
  { value: "25 ans", label: "Garantie panneaux partenaires" },
  { value: "40%", label: "D'économies sur vos factures" },
];

export const PARTNERS = [
  "Fronius",
  "SMA",
  "SunPower",
  "Qcells",
  "K2 Systems",
  "Renusol",
  "Voltec Solar",
  "DualSun",
];

export const TESTIMONIALS = [
  {
    name: "Franck S.",
    date: "Mars 2025",
    rating: 5,
    text: "Intervention particulièrement diligente, attentive et efficace. Je recommande vivement ce professionnel.",
    source: "Google",
  },
  {
    name: "Philippe F.",
    date: "Août 2024",
    rating: 5,
    text: "Plus d'un an avec mes panneaux photovoltaïques. Compétences commercial, technique et suivi après-vente au top. Toujours réactif.",
    source: "Google",
  },
  {
    name: "Yves C.",
    date: "Mai 2021",
    rating: 5,
    text: "Intervention pour remplacer mon onduleur : diligent, à l'écoute et efficace. Je recommande vivement !",
    source: "Google",
  },
];

export interface Realisation {
  id: string;
  title: string;
  city: string;
  location: string;
  region: string;
  image: string;
  type: "Particulier" | "Professionnel" | "Collectivité";
  lat: number;
  lng: number;
  powerKwc?: number;
}

export const REALISATIONS: Realisation[] = [
  {
    id: "1",
    title: "Installation à Verneuil-sur-Seine",
    city: "Verneuil-sur-Seine",
    location: "Yvelines 78",
    region: "Île-de-France",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
    type: "Particulier",
    lat: 48.9808,
    lng: 1.9828,
    powerKwc: 6,
  },
  {
    id: "2",
    title: "Installation à Trappes",
    city: "Trappes",
    location: "Yvelines 78",
    region: "Île-de-France",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop",
    type: "Particulier",
    lat: 48.7761,
    lng: 2.0018,
    powerKwc: 4.5,
  },
  {
    id: "3",
    title: "Installation à Saint-Rémy-lès-Chevreuse",
    city: "Saint-Rémy-lès-Chevreuse",
    location: "Yvelines 78",
    region: "Île-de-France",
    image:
      "https://images.unsplash.com/photo-1466611653731-7197212791b8?w=800&h=600&fit=crop",
    type: "Particulier",
    lat: 48.7067,
    lng: 2.0711,
    powerKwc: 9,
  },
  {
    id: "4",
    title: "Installation à Chatou",
    city: "Chatou",
    location: "Yvelines 78",
    region: "Île-de-France",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop",
    type: "Professionnel",
    lat: 48.8897,
    lng: 2.1586,
    powerKwc: 36,
  },
  {
    id: "5",
    title: "Installation à Montigny-le-Bretonneux",
    city: "Montigny-le-Bretonneux",
    location: "Yvelines 78",
    region: "Île-de-France",
    image:
      "https://images.unsplash.com/photo-1473341304170-971d0b180325?w=800&h=600&fit=crop",
    type: "Particulier",
    lat: 48.7661,
    lng: 2.0327,
    powerKwc: 6,
  },
  {
    id: "6",
    title: "Installation à Marcoussis",
    city: "Marcoussis",
    location: "Essonne 91",
    region: "Île-de-France",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
    type: "Professionnel",
    lat: 48.6422,
    lng: 2.2158,
    powerKwc: 50,
  },
  {
    id: "7",
    title: "Installation à Limay",
    city: "Limay",
    location: "Yvelines 78",
    region: "Île-de-France",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
    type: "Particulier",
    lat: 48.9953,
    lng: 1.7344,
    powerKwc: 3,
  },
  {
    id: "8",
    title: "Installation à Savigny-sur-Orge",
    city: "Savigny-sur-Orge",
    location: "Essonne 91",
    region: "Île-de-France",
    image:
      "https://images.unsplash.com/photo-1473341304170-971d0b180325?w=800&h=600&fit=crop",
    type: "Particulier",
    lat: 48.6797,
    lng: 2.3457,
    powerKwc: 6,
  },
  {
    id: "9",
    title: "Installation à Saint-Germain-lès-Arpajon",
    city: "Saint-Germain-lès-Arpajon",
    location: "Essonne 91",
    region: "Île-de-France",
    image:
      "https://images.unsplash.com/photo-1466611653731-7197212791b8?w=800&h=600&fit=crop",
    type: "Collectivité",
    lat: 48.5989,
    lng: 2.2567,
    powerKwc: 100,
  },
  {
    id: "10",
    title: "Installation à Voisins-le-Bretonneux",
    city: "Voisins-le-Bretonneux",
    location: "Yvelines 78",
    region: "Île-de-France",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop",
    type: "Particulier",
    lat: 48.7578,
    lng: 2.0512,
    powerKwc: 6,
  },
];

export const STATE_AIDS = [
  {
    title: "Prime à l'autoconsommation",
    description:
      "Prime versée par EDF OA pour les installations en autoconsommation avec vente du surplus. Montant dégressif selon la puissance installée.",
    amount: "80 à 180 €/kWc",
    eligibility: "Installateur RGE obligatoire",
    link: "https://www.ecologie.gouv.fr/politiques-publiques/dispositif-autoconsommation-photovoltaique",
  },
  {
    title: "TVA réduite à 10%",
    description:
      "Pour les logements de plus de 2 ans, bénéficiez d'un taux de TVA réduit sur la pose de panneaux solaires.",
    amount: "10% au lieu de 20%",
    eligibility: "Logement > 2 ans, puissance ≤ 3 kWc",
    link: "https://www.service-public.fr/particuliers/vosdroits/F35083",
  },
  {
    title: "Obligation d'achat EDF OA",
    description:
      "Revendez votre surplus de production à un tarif garanti par contrat sur 20 ans.",
    amount: "Tarif fixe 20 ans",
    eligibility: "Toute installation raccordée",
    link: "https://www.edf-oa.fr/",
  },
  {
    title: "Exonération d'impôt",
    description:
      "Les revenus de la vente d'électricité photovoltaïque peuvent être exonérés d'impôt sous certaines conditions.",
    amount: "Variable",
    eligibility: "Puissance ≤ 3 kWc, raccordement réseau",
    link: "https://www.service-public.fr/particuliers/vosdroits/F19905",
  },
  {
    title: "Éco-PTZ",
    description:
      "Prêt à taux zéro pour financer votre installation solaire sans avancer les frais.",
    amount: "Jusqu'à 50 000 €",
    eligibility: "Logement principal, travaux RGE",
    link: "https://www.service-public.fr/particuliers/vosdroits/F19905",
  },
];

export const SERVICES = [
  {
    slug: "particuliers",
    title: "Panneaux solaires pour particuliers",
    description:
      "Autoconsommation pour votre maison : étude personnalisée, installation clé en main et suivi de production.",
    benefits: [
      "Réduction de 30 à 70% de votre facture",
      "Valorisation de votre bien immobilier",
      "Énergie propre et renouvelable",
    ],
  },
  {
    slug: "professionnels",
    title: "Panneaux solaires pour professionnels",
    description:
      "Optimisez vos coûts énergétiques et votre image RSE avec une installation adaptée à votre activité.",
    benefits: [
      "Amortissement rapide de l'investissement",
      "Toitures tertiaires et industrielles",
      "Maintenance et monitoring inclus",
    ],
  },
  {
    slug: "collectivites",
    title: "Panneaux solaires pour collectivités",
    description:
      "Équipez vos bâtiments publics et réduisez la facture énergétique de votre commune ou établissement.",
    benefits: [
      "Appels d'offres et marchés publics",
      "Ombrières de parking solaires",
      "Accompagnement administratif complet",
    ],
  },
];

export const NAV_ITEMS = [
  {
    label: "Panneaux photovoltaïques",
    href: "/panneaux-photovoltaiques/particuliers",
    children: [
      { label: "Particuliers", href: "/panneaux-photovoltaiques/particuliers" },
      { label: "Professionnels", href: "/panneaux-photovoltaiques/professionnels" },
      { label: "Collectivités", href: "/panneaux-photovoltaiques/collectivites" },
    ],
  },
  { label: "Autoconsommation", href: "/autoconsommation" },
  { label: "Aides & subventions", href: "/aides-et-subventions" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Qui sommes-nous ?", href: "/qui-sommes-nous" },
];

export const LEGAL_LINKS = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  { label: "Politique cookies", href: "/politique-cookies" },
];

export interface LocalCity {
  slug: string;
  name: string;
  postalCode: string;
  intro: string;
  distance: string;
  highlights: string[];
}

/** Pages SEO locales — villes desservies en Yvelines */
export const LOCAL_CITIES: LocalCity[] = [
  {
    slug: "montigny-le-bretonneux",
    name: "Montigny-le-Bretonneux",
    postalCode: "78180",
    distance: "5 min de notre base à Voisins-le-Bretonneux",
    intro:
      "Nova Énergie installe des panneaux solaires à Montigny-le-Bretonneux et dans tout le Saint-Quentin-en-Yvelines. Installateur certifié RGE, nous réalisons des projets en autoconsommation pour les maisons individuelles, copropriétés et locaux professionnels du quartier de la Ville-Neuve, du Pas du Lac et des Chênaux.",
    highlights: [
      "Devis gratuit sous 48 h à Montigny-le-Bretonneux",
      "Installations réalisées dans le 78180",
      "Éligible prime autoconsommation et TVA 10 %",
      "Accompagnement administratif EDF OA",
    ],
  },
  {
    slug: "voisins-le-bretonneux",
    name: "Voisins-le-Bretonneux",
    postalCode: "78960",
    distance: "Installateur basé sur place",
    intro:
      "Basés à Voisins-le-Bretonneux depuis 2018, nous sommes votre installateur de proximité pour le photovoltaïque en autoconsommation dans les Yvelines.",
    highlights: [
      "Entreprise locale — intervention rapide",
      "Plus de 2 500 panneaux installés",
      "Certifié QualifElec et RGE",
      "SAV réactif sur place",
    ],
  },
  {
    slug: "trappes",
    name: "Trappes",
    postalCode: "78190",
    distance: "15 min de Voisins-le-Bretonneux",
    intro:
      "Installation de panneaux photovoltaïques à Trappes pour particuliers et professionnels. Étude de rentabilité personnalisée et pose par des techniciens certifiés.",
    highlights: [
      "Projets particuliers et tertiaire à Trappes",
      "Étude de toiture et ombrage incluse",
      "Monitoring de production",
      "Garantie panneaux 25 ans",
    ],
  },
  {
    slug: "guyancourt",
    name: "Guyancourt",
    postalCode: "78280",
    distance: "10 min de Voisins-le-Bretonneux",
    intro:
      "Panneaux solaires à Guyancourt : Nova Énergie accompagne les habitants et entreprises du quartier de Bougival, des Saules et du plateau de Saclay.",
    highlights: [
      "Installateur RGE en Guyancourt",
      "Autoconsommation avec revente du surplus",
      "Aides de l'État prises en charge",
      "Réalisations de référence dans le 78",
    ],
  },
  {
    slug: "saint-quentin-en-yvelines",
    name: "Saint-Quentin-en-Yvelines",
    postalCode: "78180",
    distance: "Au cœur de notre zone d'intervention",
    intro:
      "Installateur panneaux solaires à Saint-Quentin-en-Yvelines (SQY) : Montigny, Trappes, Guyancourt, Élancourt… Nova Énergie intervient sur l'ensemble de l'agglomération.",
    highlights: [
      "Couverture complète SQY",
      "Particuliers, pros et collectivités",
      "Devis gratuit sans engagement",
      "Certifications QualifElec et RGE",
    ],
  },
  {
    slug: "versailles",
    name: "Versailles",
    postalCode: "78000",
    distance: "25 min de Voisins-le-Bretonneux",
    intro:
      "Installation de panneaux solaires à Versailles et dans les communes environnantes. Nova Énergie, installateur RGE dans les Yvelines (78), vous accompagne de l'étude de faisabilité à la mise en service.",
    highlights: [
      "Installateur certifié RGE dans le 78",
      "Autoconsommation et revente surplus EDF OA",
      "Étude personnalisée gratuite",
      "Garantie panneaux 25 ans",
    ],
  },
  {
    slug: "elancourt",
    name: "Élancourt",
    postalCode: "78990",
    distance: "10 min de Voisins-le-Bretonneux",
    intro:
      "Panneaux photovoltaïques à Élancourt : pose clé en main pour maisons et entreprises du plateau de Saint-Quentin-en-Yvelines.",
    highlights: [
      "Intervention rapide à Élancourt",
      "Prime autoconsommation incluse",
      "Monitoring de production",
      "SAV local réactif",
    ],
  },
];

/** Villes principales du 78 — page département */
export const YVELINES_CITIES = [
  "Versailles",
  "Montigny-le-Bretonneux",
  "Trappes",
  "Guyancourt",
  "Voisins-le-Bretonneux",
  "Élancourt",
  "Rambouillet",
  "Poissy",
  "Saint-Germain-en-Laye",
  "Conflans-Sainte-Honorine",
  "Les Mureaux",
  "Plaisir",
  "Maurepas",
  "Houilles",
  "Chatou",
  "Verneuil-sur-Seine",
];
