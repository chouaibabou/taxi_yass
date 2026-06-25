export const siteConfig = {
  name: "Yas'Taxii",
  tagline: "Taxi conventionne, gares, aeroports et toutes distances",
  phone: "06 61 00 11 76",
  phoneHref: "tel:0661001176",
  whatsappNumber: "33661001176",
  whatsappMessage: "Bonjour Yas'Taxii, je souhaite faire une reservation ou demander un devis.",
  email: process.env.CONTACT_EMAIL || "contact@yastaxii.fr",
  location: "Chateau-Thierry, France",
  hours: "24h/24 - 7j/7",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://yastaxii.fr",
  googleReviewsUrl: "https://maps.app.goo.gl/wt6SdhRKcfYZG41v6",
  googleReviewWriteUrl: "https://maps.app.goo.gl/wt6SdhRKcfYZG41v6",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Yas%27Taxii%20Chateau-Thierry",
  nav: [
    { label: "Accueil", href: "/#accueil" },
    { label: "Services", href: "/services" },
    { label: "Reserver", href: "/#reserver" },
    { label: "Flotte", href: "/#flotte" },
    { label: "Avis", href: "/avis" },
    { label: "Zones", href: "/#zones" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" }
  ],
  seoKeywords: [
    "Taxi Chateau-Thierry",
    "Taxi conventionne Chateau-Thierry",
    "Taxi VSL conventionne Aisne",
    "Transport medical conventionne Aisne",
    "Taxi gare Chateau-Thierry",
    "Taxi aeroport CDG",
    "Taxi aeroport Orly",
    "Taxi Beauvais",
    "Taxi professionnel Aisne",
    "Taxi toutes distances"
  ]
};

export const whatsappUrl = (message = siteConfig.whatsappMessage) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
