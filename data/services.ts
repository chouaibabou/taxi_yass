import { BriefcaseBusiness, Building2, Car, HeartPulse, MapPinned, Plane, Stethoscope, TrainFront } from "lucide-react";

export const services = [
  {
    id: "medical",
    slug: "transport-medical-conventionne",
    title: "Transport medical conventionne",
    shortTitle: "Taxi conventionne",
    description: "Transport assis professionnalise pour consultations, hospitalisations, hopitaux de jour et rendez-vous medicaux.",
    details:
      "Yas'Taxii accompagne les patients dans leurs trajets medicaux conventionnes depuis Chateau-Thierry et l'Aisne. Le trajet est organise avec ponctualite, discretion et confort, sans demander de donnees medicales sensibles.",
    image: "/images/service-medical.jpg",
    Icon: Stethoscope,
    cta: "Voir le service",
    keywords: ["taxi conventionne Chateau-Thierry", "transport medical conventionne Aisne", "taxi VSL conventionne Aisne"]
  },
  {
    id: "airport",
    slug: "transfert-aeroports",
    title: "Transfert aeroports",
    shortTitle: "Aeroports",
    description: "Navette taxi vers CDG, Orly, Beauvais et les aeroports parisiens, avec prise en charge organisee.",
    details:
      "Pour un depart ou une arrivee aeroport, le trajet est prepare selon votre horaire, vos bagages et le nombre de passagers. Yas'Taxii dessert notamment CDG, Orly et Beauvais depuis Chateau-Thierry et les communes voisines.",
    image: "/images/service-aeroport.webp",
    Icon: Plane,
    cta: "Voir le service",
    keywords: ["taxi aeroport CDG", "taxi aeroport Orly", "taxi Beauvais", "navette aeroport Aisne"]
  },
  {
    id: "stations",
    slug: "transfert-gares",
    title: "Transfert gares",
    shortTitle: "Gares",
    description: "Taxi vers les gares de Chateau-Thierry, Paris, Reims, Marne-la-Vallee et autres correspondances.",
    details:
      "Yas'Taxii facilite vos correspondances train avec une prise en charge claire, une aide pour les bagages si besoin et un horaire adapte a votre depart ou arrivee.",
    image: "/images/service-gares.webp",
    Icon: TrainFront,
    cta: "Voir le service",
    keywords: ["taxi gare Chateau-Thierry", "taxi gare de Lyon", "transfert gare Aisne"]
  },
  {
    id: "business",
    slug: "transport-professionnel",
    title: "Professionnel / entreprise",
    shortTitle: "Professionnels",
    description: "Trajets d'entreprise, rendez-vous, seminaires, clients VIP, facture et organisation recurrente.",
    details:
      "Pour les entreprises, Yas'Taxii propose une solution fiable pour les rendez-vous, transferts collaborateurs, accueils clients, seminaires et trajets recurrents avec demande de facture possible.",
    image: "/images/service-professionnel.webp",
    Icon: Building2,
    cta: "Voir le service",
    keywords: ["taxi professionnel Aisne", "taxi entreprise Chateau-Thierry", "transport professionnel"]
  },
  {
    id: "tourism",
    slug: "tourisme-et-toutes-distances",
    title: "Tourisme et toutes distances",
    shortTitle: "Tourisme",
    description: "Trajets touristiques, Paris, monuments, evenements, sorties et courses longues distances.",
    details:
      "Besoin d'un taxi pour visiter Paris, rejoindre un evenement, accompagner des proches ou organiser une course longue distance ? Yas'Taxii propose un transport confortable et flexible.",
    image: "/images/service-tourisme.jpeg",
    Icon: MapPinned,
    cta: "Voir le service",
    keywords: ["taxi toutes distances", "taxi Paris Ile-de-France", "taxi tourisme Aisne"]
  },
  {
    id: "assistance",
    slug: "assistance-et-depannage",
    title: "Assistance et depannage",
    shortTitle: "Assistance",
    description: "Solution de transport en cas d'immobilisation, panne, retour a domicile ou besoin urgent.",
    details:
      "En cas d'imprevu, de panne ou de vehicule immobilise, Yas'Taxii peut vous accompagner pour rejoindre votre domicile, une gare, un garage ou un rendez-vous urgent.",
    image: "/images/service-assistance.jpeg",
    Icon: HeartPulse,
    cta: "Voir le service",
    keywords: ["assistance taxi Aisne", "taxi urgence transport", "taxi retour domicile"]
  }
] as const;

export const bookingServices = [
  {
    id: "medical",
    title: "Transport medical conventionne",
    shortTitle: "Medical conventionne",
    description: "Transport assis professionnalise pour consultations, hospitalisations et hopitaux de jour.",
    image: "/images/service-medical.jpg",
    Icon: Stethoscope,
    cta: "Reserver"
  },
  {
    id: "airport",
    title: "Transfert gares et aeroports",
    shortTitle: "Gares et aeroports",
    description: "Departs et arrivees vers Chateau-Thierry, CDG, Orly, Beauvais, gares et villes voisines.",
    image: "/images/service-aeroport.webp",
    Icon: Plane,
    cta: "Demander un devis"
  },
  {
    id: "event",
    title: "Evenementiel ou course taxi - Particulier",
    shortTitle: "Particulier",
    description: "Courses privees, evenements, sorties, retours et trajets toutes distances.",
    image: "/images/service-tourisme.jpeg",
    Icon: Car,
    cta: "Reserver"
  },
  {
    id: "business",
    title: "Professionnel / entreprise",
    shortTitle: "Entreprise",
    description: "Trajets ponctuels ou recurrents, rendez-vous, facturation et prise en charge organisee.",
    image: "/images/service-professionnel.webp",
    Icon: BriefcaseBusiness,
    cta: "Demander un devis"
  }
] as const;

export type ServiceId = (typeof bookingServices)[number]["id"];
