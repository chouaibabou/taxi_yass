# PROJECT_MEMORY - Yas'Taxii

## Objectif

Creer un site professionnel, moderne, responsive, SEO local et pret Google Ads pour Yas'Taxii, service de taxi conventionne a Chateau-Thierry : transport medical conventionne, gares, aeroports, courses privees, trajets professionnels et toutes distances dans l'Aisne et departements voisins.

## Stack technique

- Next.js App Router
- TypeScript
- Tailwind CSS
- React components reutilisables
- Donnees separees dans `data`
- Validation formulaire cote client et API avec Zod
- Architecture prevue pour multilingue FR, EN, AR, ES, DE, priorite FR

Node.js 20.11+ est requis pour ce projet. La machine actuelle avait Node 12 pour d'autres projets, donc utiliser un gestionnaire de versions Node par projet. `.nvmrc` indique `20`.

## Identite visuelle

- Esprit Yas'Taxii inspire de l'ancien site.
- Palette : noir, blanc, jaune/dore taxi, vert WhatsApp/confirmation.
- Hero premium avec image generee : `public/images/hero-taxi-premium.png`.
- Logo original a placer dans `public/logo` si disponible. Placeholder actuel : monogramme `YT` dans le header.
- Boutons importants tres visibles : reservation, devis, appel, WhatsApp.

## Pages et sections

Accueil principal dans `app/page.tsx` :

- `HeroSection`
- `ServicesSection`
- `BookingWizard`
- `FleetSection`
- `ReviewsSection`
- `FAQSection`
- `ContactSection`

Pages legales :

- `app/destinations/page.tsx`
- `app/services/page.tsx`
- `app/mentions-legales/page.tsx`
- `app/politique-confidentialite/page.tsx`

SEO technique :

- `app/sitemap.ts`
- `app/robots.ts`
- `components/seo/SEOJsonLd.tsx`
- Metadata via `lib/metadata.ts`

## Services

Donnees dans `data/services.ts`.

Services SEO affiches sur la homepage et la page `/services` :

1. Transport medical conventionne
2. Transfert aeroports
3. Transfert gares
4. Professionnel / entreprise
5. Tourisme et toutes distances
6. Assistance et depannage

Le formulaire de reservation garde volontairement ses 4 prestations via `bookingServices` :

1. Transport medical conventionne
2. Transfert gares et aeroports
3. Evenementiel ou course taxi - Particulier
4. Professionnel / entreprise

Ne pas connecter automatiquement les services SEO supplementaires au wizard sans adapter `bookingSchema` et `StepForm`.

## Flotte

Donnees dans `data/fleet.ts`.

Seulement deux categories :

- Eco : id technique pour le vehicule affiche comme "Taxi", 1 a 4 passagers.
- Van : id technique pour le vehicule affiche comme "Taxi Van", 1 a 8 passagers.

Images actuelles : `public/images/fleet-eco.webp` et `public/images/fleet-van.jpeg`.

Ne pas ajouter Berline ou SUV pour le moment.

## Parcours reservation en 4 etapes

Composant principal : `components/booking/BookingWizard.tsx`.

Etapes :

1. `StepVehicle` : Taxi ou Taxi Van.
2. `StepService` : choix prestation.
3. `StepForm` : formulaire adapte selon prestation.
4. `StepConfirmation` : recapitulatif, modifier, envoyer.

Apres envoi : message de succes avec coche verte.

L'ecran de succes du wizard contient un bouton "Envoyer une nouvelle demande" qui reinitialise le formulaire a l'etape 1 avec Eco + transport medical conventionne par defaut.

## Formulaires

Reservation/devis :

- Client + API route : `app/api/booking/route.ts`
- Schema : `lib/booking-schema.ts`
- Champs adresse via `lib/address-autocomplete.tsx`, pret pour Google Places Autocomplete.
- Aucun diagnostic medical ou donnee medicale sensible ne doit etre demande.

Contact simple :

- Section : `components/sections/ContactSection.tsx`
- API route : `app/api/contact/route.ts`

Demande destinations / partenaires taxi :

- Page : `app/destinations/page.tsx`
- Formulaire : `components/sections/DestinationsRequestForm.tsx`
- API route : `app/api/destination-request/route.ts`
- Objectif : retirer le bloc zones de la home et proposer une page dediee ou le client choisit une zone, Taxi/Taxi Van, le besoin et ses coordonnees. Certaines zones peuvent etre traitees via des taxis partenaires.
- Nombre de passagers limite par vehicule dans les formulaires : Taxi de 1 a 4, Taxi Van de 1 a 8, avec validation cote API.

## SEO

Mots-cles locaux dans `data/site.ts` :

- Taxi Chateau-Thierry
- Taxi conventionne Chateau-Thierry
- Taxi VSL conventionne Aisne
- Transport medical conventionne Aisne
- Taxi gare Chateau-Thierry
- Taxi aeroport CDG
- Taxi aeroport Orly
- Taxi Beauvais
- Taxi professionnel Aisne
- Taxi toutes distances

JSON-LD LocalBusiness / TaxiService + FAQ dans `components/seo/SEOJsonLd.tsx`.

## Google Ads

Tracking prepare dans `lib/tracking.ts`.

Evenements :

- Clic telephone : `phone_click`
- Clic WhatsApp : `whatsapp_click`
- Formulaire envoye : `booking_sent`
- Devis envoye : `quote_sent`
- Reservation envoyee : `reservation_sent`
- Google Maps : `maps_click`

Google Tag Manager charge dans `app/layout.tsx` si `NEXT_PUBLIC_GTM_ID` est defini.

## Avis clients

Avis manuels dans `data/reviews.ts`.

Structure actuelle :

- `name`
- `rating`
- `dateLabel`
- `text`
- `source: "Google"`

Les avis mockes initiaux ont ete remplaces par 9 vrais avis Google lisibles depuis les captures du fichier technique PDF/DOCX. Les captures tronquees n'ont pas ete inventees.

Ne pas scraper Google Maps. Evolution possible : Google Places API ou Google Business Profile API si acces disponible.

Liens Google a modifier dans `data/site.ts` :

- `googleReviewsUrl`
- `googleReviewWriteUrl`

La homepage affiche maintenant un carrousel d'avis dans `components/sections/ReviewsSection.tsx` : 1 carte visible sur mobile, 3 cartes visibles sur desktop, avec fleches precedent/suivant. La page complete des avis est `app/avis/page.tsx`. Le bouton "Laisser un avis Google" utilise `https://maps.app.goo.gl/wt6SdhRKcfYZG41v6`.

Le site affiche le total Google officiel depuis `data/site.ts` : `googleReviewCount: 113` et `googleRating: 5.0`. Les 9 objets dans `data/reviews.ts` sont des exemples selectionnes pour le carrousel et la page avis, pas le total reel.

## Email

Templates :

- `emails/admin-notification.ts`
- `emails/customer-confirmation.ts`

API reservation prepare les emails mais n'envoie pas encore reellement. Brancher plus tard un fournisseur SMTP/API avec les variables `.env.local`.

Variables :

- `CONTACT_EMAIL`
- `OWNER_EMAIL`
- `EMAIL_FROM`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASSWORD`

Ne jamais commiter de secrets.

## Variables `.env`

Modele : `.env.local.example`.

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- `NEXT_PUBLIC_GTM_ID`
- `CONTACT_EMAIL`
- `OWNER_EMAIL`
- `EMAIL_FROM`
- `SMTP_*`

## Ou modifier le site

- Textes generaux, telephone, WhatsApp, SEO : `data/site.ts`
- Services : `data/services.ts`
- Vehicules : `data/fleet.ts`
- Avis : `data/reviews.ts`
- Zones : `data/zones.ts`
- FAQ : `data/faq.ts`
- Hero : `components/sections/HeroSection.tsx`
- Page services detaillee : `app/services/page.tsx`
- Page destinations et partenaires : `app/destinations/page.tsx`
- Contact : `components/sections/ContactSection.tsx`
- Emails : `emails`
- Tracking : `lib/tracking.ts`

## Regles importantes

- Garder un site mobile-first et conversion-first.
- Garder les boutons appel et WhatsApp visibles en header et flottants.
- Ne pas demander de donnees medicales sensibles.
- Ne pas ajouter Berline ou SUV sans demande explicite.
- Ne pas mettre de secrets dans le code.
- Mettre a jour ce fichier apres toute modification importante.

## Memoire IA / regles Codex & Claude

- `AGENTS.md` contient les regles de travail pour Codex.
- `CLAUDE.md` contient les regles principales pour Claude.
- Codex et Claude doivent lire `PROJECT_MEMORY.md` avant chaque modification.
- Respecter le contexte Yas'Taxii, le design premium noir / blanc / dore / vert WhatsApp, la reservation en 4 etapes et la flotte Taxi/Taxi Van uniquement.
- Penser SEO local et Google Ads a chaque evolution.
- Ne jamais ajouter de cle API, secret Google, mot de passe ou token dans le code.
- Utiliser `.env.local.example` pour documenter les variables.
- Mettre a jour `PROJECT_MEMORY.md` apres chaque modification importante.
- A la fin de chaque tache, lister les fichiers modifies.

## Derniere mise a jour

Generation initiale complete : structure Next.js, Tailwind, composants, data, formulaire 4 etapes, API placeholders, templates email, SEO local, sitemap, robots, JSON-LD, README, `.env.local.example`, image hero et boutons fixes/flottants.

Correction locale : Node 20 fonctionne via nvm-windows. `npm install` a cree `node_modules` et `package-lock.json`. Les erreurs ESLint `react/no-unescaped-entities` ont ete corrigees dans les textes JSX, et le caractere copyright abime du footer a ete remplace.

Build Next reussi avec Node 20. Next regenere `next-env.d.ts`; ce fichier auto-genere est ignore par ESLint via `.eslintignore`.

Ajout memoire IA : creation de `AGENTS.md` et `CLAUDE.md`, ajout d'une section README pour travailler avec Codex/Claude sans repeter le contexte, ajout de la section "Memoire IA / regles Codex & Claude" dans ce fichier. Les vrais avis Google lisibles depuis le fichier technique ont remplace les avis exemples dans `data/reviews.ts`, et `ReviewsSection` affiche maintenant `dateLabel`.

Ajout page services SEO : creation de `app/services/page.tsx`, enrichissement de `data/services.ts` avec 6 services SEO, conservation des 4 prestations du wizard dans `bookingServices`, ajout des images services/flotte dans `public/images`, affichage des vehicules Taxi/Taxi Van avec images, navigation Services vers `/services`, sitemap mis a jour.

Amelioration design : cartes services de la homepage retravaillees avec grandes images, overlay sombre, numerotation et CTA plus visible. Page `/services` modernisee avec hero texture, mosaique visuelle, grille de services numerotee, sections detaillees alternees et flotte Taxi/Taxi Van plus premium. Section flotte homepage enrichie avec visuels et arguments passagers plus lisibles.

Amelioration CTA services homepage : dans `ServicesSection`, chaque carte garde une hauteur stable et les boutons sont alignes en bas. Deux boutons par carte sur la meme ligne : action principale environ 70% (`Reserver`, `Demander un devis` ou `Appeler`) et `En savoir plus` environ 30%.

Ajustement services homepage : suppression de la numerotation 01-06, reduction de la hauteur image, suppression du `min-h` fixe trop grand, titres replaces dans la partie blanche pour une meilleure lisibilite, descriptions compactes et boutons maintenus alignes par ligne sans grand espace blanc.

Ajout avis Google : creation de la page `/avis`, transformation de la section avis homepage en carrousel responsive, ajout du bouton "Laisser un avis Google" avec le lien Maps fourni, menu Avis dirige vers `/avis`, sitemap mis a jour.

Reservation : ajout d'un bouton "Envoyer une nouvelle demande" sur l'ecran de succes du `BookingWizard` pour reinitialiser le formulaire et permettre une nouvelle demande.

Avis : le total affiche est maintenant 113 avis Google via `siteConfig.googleReviewCount`, au lieu de compter seulement les 9 avis exemples presents dans `data/reviews.ts`.

Destinations : retrait du bloc `ZonesSection` de la home. Creation de `/destinations` avec liste des zones, explication des partenariats taxis et formulaire dedie zone + vehicule Taxi/Taxi Van + besoin + coordonnees. Le menu "Destinations" pointe vers `/destinations`, le sitemap inclut cette route.

Formulaires : limite passagers ajoutee selon le vehicule selectionne. Taxi accepte 1 a 4 passagers, Taxi Van accepte 1 a 8 passagers dans le formulaire destinations et dans le wizard reservation, avec validation API.

Corrections contenu Yas'Taxii : textes alignes sur le secteur reel Gandelu, Crezancy et agglomeration de Chateau-Thierry. Les libelles visibles utilisent maintenant "Taxi" au lieu de "Eco" pour le vehicule 1 a 4 passagers, tout en gardant l'id technique `eco`. Le transport medical est ecrit "conventionne" avec accent dans l'interface. La page destinations est limitee a Taxi Crezancy, Taxi Gandelu, Taxi Chateau-Thierry et Taxi Soissons, avec mention des chauffeurs/taxis partenaires. Le formulaire medical propose Hopital de jour, Consultation et Autre avec champ de precision. La reservation affiche les equipements de confort disponibles pour longs trajets.

Reservation : la prestation particulier/evenementiel du wizard est renommee "Course classique de taxi ou mise a disposition" avec un texte couvrant l'agglomeration de Chateau-Thierry, le Sud de l'Aisne, CDG, les gares SNCF de Paris, Reims et villes voisines.

Flotte : le vehicule 1 a 8 passagers est affiche comme "Taxi Van" sur le site. Les badges de capacite bagages ne sont plus affiches dans les sections vehicules, afin de garder uniquement les passagers visibles.

Contact : le telephone public est affiche au format international `+33 6 61 00 11 76`. L'adresse email publique n'est plus affichee dans le footer, la section contact, les mentions legales ni le JSON-LD, et `data/site.ts` ne contient plus de fallback email public. La FAQ aeroports mentionne l'agglomeration de Chateau-Thierry et les departements voisins, sans "departement de l'Aisne".

Flotte : les badges noirs/dorés "Yas'Taxii Taxi" et "Yas'Taxii Taxi Van" ont ete retires des images vehicules sur la home et sur `/services`.
UX : ajout d'un bouton flottant `hfe-scroll-to-top-button` pour revenir en haut de page apres scroll, place au-dessus des boutons flottants Appeler/WhatsApp.

Header : le sous-titre sous le logo affiche "Taxi conventionne gares et aeroports".

Hero : l'image d'accueil utilise maintenant `public/images/hero-yastaxi-vignes-aeroport.jpeg`, issue de la photo fournie par le client.

Favicon : le logo fourni par le client est ajoute dans `public/logo/yastaxii-favicon.jpg` et declare dans les metadata Next via `icons`.

Partenariat tourisme : ajout d'une page `/portes-de-la-champagne` pour presenter le partenariat avec la Maison du Tourisme Les Portes de la Champagne, avec logo `public/logo/portes-de-la-champagne.jpg`, lien officiel, contenu touristique local et CTA vers le formulaire de reservation. Une section resume est ajoutee sur la home avant le wizard.

SEO : ajout de mots-cles locaux supplementaires dans `data/site.ts` pour Chateau-Thierry, Gandelu, Crezancy, Montmirail, Lizy-sur-Ourcq, taxi gare, Taxi VSL et recherches alternatives VTC/Uber. Ne pas ajouter de texte cache invisible dans les pages : privilegier metadata, contenu naturel et pages utiles.

Email : envoi reel branche via SMTP Brevo avec `nodemailer`. Les routes `/api/booking`, `/api/contact` et `/api/destination-request` envoient maintenant les messages vers `OWNER_EMAIL`. L'adresse de reception Yas'Taxii est `yastaxiireservations@gmail.com`. Les secrets doivent rester uniquement dans `.env.local`; `.env.local.example` documente `SMTP_HOST=smtp-relay.brevo.com`, `SMTP_PORT=587`, `SMTP_USER`, `SMTP_PASSWORD`, `OWNER_EMAIL` et `EMAIL_FROM`.

Email client : chaque formulaire envoie aussi un accuse de reception au client quand une adresse email est fournie. La reservation utilise `emails/customer-confirmation.ts`; les formulaires contact et destinations envoient une confirmation simple depuis leurs routes API respectives.
