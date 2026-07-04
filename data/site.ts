export const siteConfig = {
  name: "Yas'Taxii",
  tagline: "Taxi conventionné, gares, aéroports et toutes destinations",
  phone: "+33 6 61 00 11 76",
  phoneHref: "tel:+33661001176",
  whatsappNumber: "33661001176",
  whatsappMessage: "Bonjour Yas'Taxii, je souhaite faire une réservation ou demander un devis.",
  email: process.env.CONTACT_EMAIL || "",
  location: "Gandelu, Crézancy et agglomération de Château-Thierry",
  hours: "24h/24 - 7j/7",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://yastaxii.fr",
  googleReviewsUrl: "https://maps.app.goo.gl/wt6SdhRKcfYZG41v6",
  googleReviewWriteUrl: "https://maps.app.goo.gl/wt6SdhRKcfYZG41v6",
  googleReviewCount: 113,
  googleRating: 5.0,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Yas%27Taxii%20Gandelu%20Crezancy%20Chateau-Thierry",
  nav: [
    { label: "Accueil", href: "/#accueil" },
    { label: "Services", href: "/services" },
    { label: "Réserver", href: "/#reserver" },
    { label: "Flotte", href: "/#flotte" },
    { label: "Avis", href: "/avis" },
    { label: "Destinations", href: "/destinations" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" }
  ],
  seoKeywords: [
    "Taxi Château-Thierry",
    "Taxi Gandelu",
    "Taxi Crézancy",
    "Taxi conventionné agglomération de Château-Thierry",
    "Taxi conventionné département de l'Aisne",
    "Transport médical conventionné département de l'Aisne",
    "Taxi gare Château-Thierry",
    "Taxi aéroport CDG",
    "Taxi aéroport Orly",
    "Taxi Beauvais",
    "Taxi pour trajet professionnel",
    "Taxi toutes distances"
  ]
};

export const whatsappUrl = (message = siteConfig.whatsappMessage) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
