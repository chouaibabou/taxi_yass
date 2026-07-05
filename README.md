# Yas'Taxii

Site Next.js professionnel pour Yas'Taxii : taxi conventionne, gares, aeroports, courses privees et professionnelles dans l'Aisne et departements voisins.

## Installation

Node.js 20.11+ est requis pour ce projet. Si d'autres projets utilisent Node 12, garde Node 12 et utilise un gestionnaire de versions comme `nvm-windows`, `fnm` ou `Volta` pour lancer seulement ce projet avec Node 20.

```bash
npm install
npm run dev
```

Site local : `http://localhost:3000`

## Commandes

```bash
npm run dev
npm run build
npm run lint
```

## Variables d'environnement

Copier `.env.local.example` vers `.env.local`, puis completer les valeurs utiles.

- `NEXT_PUBLIC_SITE_URL` : URL publique du site.
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` : future cle Google Places Autocomplete.
- `NEXT_PUBLIC_GTM_ID` : futur ID Google Tag Manager.
- `CONTACT_EMAIL`, `OWNER_EMAIL`, `EMAIL_FROM` : adresses email, par defaut `yastaxiireservations@gmail.com`.
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD` : configuration Brevo SMTP pour recevoir les formulaires.

Ne jamais mettre de vraie cle API, mot de passe ou secret directement dans le code.

## Modifier les contenus

- Informations generales : `data/site.ts`
- Services : `data/services.ts`
- Flotte : `data/fleet.ts`
- Avis clients : `data/reviews.ts`
- Zones desservies : `data/zones.ts`
- FAQ : `data/faq.ts`
- Emails : `emails/admin-notification.ts` et `emails/customer-confirmation.ts`

## Ajouter un avis client

Ouvrir `data/reviews.ts` et ajouter un objet :

```ts
{
  name: "Nom client",
  rating: 5,
  dateLabel: "Juin 2026",
  text: "Texte de l'avis",
  source: "Google"
}
```

## Comment travailler avec Codex ou Claude sans repeter tout le contexte

Lis d'abord PROJECT_MEMORY.md et AGENTS.md, respecte le contexte du projet, fais la modification demandee, puis mets a jour PROJECT_MEMORY.md si le contexte change.

Pour Claude, lire aussi `CLAUDE.md`. Ces fichiers rappellent les regles du projet : design premium Yas'Taxii, reservation en 4 etapes, flotte Eco/Van uniquement, SEO local, Google Ads et aucune cle secrete dans le code.

## Changer une image

Les images sont dans `public/images`. Remplacer `public/images/hero-taxi-premium.png` ou ajouter une nouvelle image, puis modifier les chemins dans les composants ou fichiers data.

Le dossier `public/logo` est pret pour recevoir le logo Yas'Taxii original si disponible.

Images services et flotte actuelles :

- Services : `service-medical.jpg`, `service-aeroport.webp`, `service-gares.webp`, `service-professionnel.webp`, `service-tourisme.jpeg`, `service-assistance.jpeg`
- Flotte : `fleet-eco.webp`, `fleet-van.jpeg`

## Page Services SEO

La page detaillee des services est disponible dans `app/services/page.tsx` et accessible via `/services`.

Le resume affiche sur la page d'accueil est dans `components/sections/ServicesSection.tsx`.

Les textes, images, mots-cles et slugs des services se modifient dans `data/services.ts`.

## Reservation et emails

Le formulaire de reservation/devis envoie vers `app/api/booking/route.ts`. Les formulaires contact et destinations utilisent aussi les routes API du projet.

L'envoi email est branche avec Brevo SMTP via `nodemailer`. Les identifiants SMTP doivent rester uniquement dans `.env.local` et ne jamais etre commits.

## Google Ads et tracking

La structure de tracking est dans `lib/tracking.ts`. Les evenements prevus sont :

- `phone_click`
- `whatsapp_click`
- `booking_sent`
- `quote_sent`
- `reservation_sent`
- `maps_click`

Google Tag Manager est charge seulement si `NEXT_PUBLIC_GTM_ID` est renseigne.
