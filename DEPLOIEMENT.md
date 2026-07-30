# Mise en ligne — nova-energie-solaire.fr

## 1. Déployer sur Vercel (gratuit)

### Option A — Via le site (recommandé)

1. Créez un compte sur [vercel.com](https://vercel.com)
2. Poussez le projet sur **GitHub** :
   ```bash
   git init
   git add .
   git commit -m "Nova Énergie — site solaire"
   ```
   Créez un repo GitHub et :
   ```bash
   git remote add origin https://github.com/VOTRE-USER/nova-energie.git
   git push -u origin main
   ```
3. Sur Vercel → **Add New Project** → importez le repo GitHub
4. **Environment Variables** (Settings → Environment Variables) :
   | Variable | Valeur |
   |----------|--------|
   | `NEXT_PUBLIC_SITE_URL` | `https://nova-energie-solaire.fr` |
   | `CONTACT_EMAIL` | `sahnounramy@gmail.com` |
   | `SMTP_HOST` | `smtp.gmail.com` |
   | `SMTP_PORT` | `587` |
   | `SMTP_USER` | `sahnounramy@gmail.com` |
   | `SMTP_PASS` | mot de passe application Google |
5. Cliquez **Deploy**

### Option B — Via CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

---

## 2. Lier le domaine OVH → Vercel

### Dans Vercel

1. Projet → **Settings** → **Domains**
2. Ajoutez : `nova-energie-solaire.fr`
3. Ajoutez aussi : `www.nova-energie-solaire.fr`
4. Vercel affiche les **enregistrements DNS** à créer

### Dans OVH

1. [ovh.com/manager](https://www.ovh.com/manager/) → **Noms de domaine** → `nova-energie-solaire.fr`
2. Onglet **Zone DNS**
3. Modifiez ou ajoutez :

| Type | Sous-domaine | Cible |
|------|--------------|-------|
| **A** | `@` (vide) | `76.76.21.21` |
| **CNAME** | `www` | `cname.vercel-dns.com` |

4. Supprimez les anciens enregistrements A/AAAA en conflit sur `@`
5. Attendez **15 min à 48 h** (souvent < 1 h)

---

## 3. Vérifier

- Site : [https://nova-energie-solaire.fr](https://nova-energie-solaire.fr)
- SSL (cadenas) : automatique via Vercel
- Formulaire devis : [https://nova-energie-solaire.fr/estimer-mon-projet](https://nova-energie-solaire.fr/estimer-mon-projet)

---

## 4. Après mise en ligne

1. **Google Search Console** : [search.google.com/search-console](https://search.google.com/search-console) → ajouter le domaine
2. **Google Business** : [business.google.com](https://business.google.com) → fiche « Nova Énergie »
3. Compléter SIRET dans `src/lib/data.ts` → mentions légales

---

## Mot de passe application Gmail

1. [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Créer un mot de passe pour « Mail »
3. Coller dans `SMTP_PASS` sur Vercel
