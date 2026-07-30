# Photos du site

Remplacez les URLs Unsplash dans `src/lib/data.ts` par vos fichiers locaux :

```
public/images/
├── hero/           → bannières page d'accueil
├── realisations/   → photos de chantiers (verneuil.jpg, trappes.jpg…)
└── logo.png        → logo entreprise (optionnel, remplace logo.svg)
```

Exemple dans data.ts :
```ts
image: "/images/realisations/verneuil.jpg"
```

Format recommandé : JPEG/WebP, 1200×800 px minimum.
