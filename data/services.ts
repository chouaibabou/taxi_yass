import { BriefcaseBusiness, Building2, Car, HeartPulse, MapPinned, Plane, Stethoscope, TrainFront } from "lucide-react";

export const services = [
  {
    id: "medical",
    slug: "transport-medical-conventionne",
    title: "Transport médical conventionné",
    shortTitle: "Taxi conventionné",
    description: "Transport assis professionnalisé pour consultations, hospitalisations, hôpitaux de jour et rendez-vous médicaux.",
    details:
      "Yas'Taxii accompagne les patients dans leurs trajets médicaux conventionnés depuis Gandelu, Crézancy et toute l'agglomération de Château-Thierry. Le trajet est organisé avec ponctualité, discrétion et confort, sans demander de données médicales sensibles.",
    image: "/images/service-medical.jpg",
    Icon: Stethoscope,
    cta: "Voir le service",
    keywords: ["Taxi conventionné agglomération de Château-Thierry", "Transport médical conventionné département de l'Aisne", "Taxi conventionné Gandelu Crézancy"]
  },
  {
    id: "airport",
    slug: "transfert-aeroports",
    title: "Transfert aéroports",
    shortTitle: "Aéroports",
    description: "Navette taxi vers CDG, Orly, Beauvais et les aéroports parisiens, avec prise en charge organisée.",
    details:
      "Pour un départ ou une arrivée aéroport, le trajet est préparé selon votre horaire, vos bagages et le nombre de passagers. Yas'Taxii dessert notamment CDG, Orly et Beauvais depuis l'agglomération de Château-Thierry et les communes voisines.",
    image: "/images/service-aeroport.webp",
    Icon: Plane,
    cta: "Voir le service",
    keywords: ["Taxi aéroport CDG", "Taxi aéroport Orly", "Taxi Beauvais", "Navette aéroport département de l'Aisne"]
  },
  {
    id: "stations",
    slug: "transfert-gares",
    title: "Transfert gares",
    shortTitle: "Gares",
    description: "Taxi vers les gares de Château-Thierry, Paris, Reims, Marne-la-Vallée et autres correspondances.",
    details:
      "Yas'Taxii facilite vos correspondances train avec une prise en charge claire, une aide pour les bagages si besoin et un horaire adapté à votre départ ou arrivée.",
    image: "/images/service-gares.webp",
    Icon: TrainFront,
    cta: "Voir le service",
    keywords: ["Taxi gare Château-Thierry", "Taxi gare de Lyon", "Transfert gare département de l'Aisne"]
  },
  {
    id: "business",
    slug: "transport-professionnel",
    title: "Professionnel / entreprise",
    shortTitle: "Professionnels",
    description: "Taxi pour trajet professionnel, rendez-vous, séminaires, clients VIP, facture et organisation récurrente.",
    details:
      "Pour les entreprises, Yas'Taxii propose une solution fiable pour les rendez-vous, transferts collaborateurs, accueils clients, séminaires et trajets récurrents avec demande de facture possible.",
    image: "/images/service-professionnel.webp",
    Icon: Building2,
    cta: "Voir le service",
    keywords: ["Taxi pour trajet professionnel", "Taxi entreprise", "Transport professionnel"]
  },
  {
    id: "tourism",
    slug: "tourisme-et-toutes-distances",
    title: "Tourisme et mobilité",
    shortTitle: "Tourisme",
    description: "Taxi pour visites, sorties, Paris, Reims, vignes de champagne et trajets touristiques.",
    details:
      "Besoin d'un taxi pour visiter l'agglomération de Château-Thierry, les vignes de champagne, le musée Jean de La Fontaine, Paris, Reims ou d'autres destinations touristiques ? Yas'Taxii propose un transport confortable et flexible.",
    image: "/images/service-tourisme.jpeg",
    Icon: MapPinned,
    cta: "Voir le service",
    keywords: ["Taxi tourisme agglomération de Château-Thierry", "Taxi Paris Reims", "Taxi toutes distances"]
  },
  {
    id: "assistance",
    slug: "assistance-et-depannage",
    title: "Assistance et dépannage",
    shortTitle: "Assistance",
    description: "Solution de transport en cas d'immobilisation, panne, retour a domicile ou besoin urgent.",
    details:
      "En cas d'imprévu, de panne ou de véhicule immobilisé, Yas'Taxii peut vous accompagner pour rejoindre votre domicile, une gare, un garage ou un rendez-vous urgent.",
    image: "/images/service-assistance.jpeg",
    Icon: HeartPulse,
    cta: "Voir le service",
    keywords: ["Assistance taxi", "Taxi urgence transport", "Taxi retour domicile"]
  }
] as const;

export const bookingServices = [
  {
    id: "medical",
    title: "Transport médical conventionné",
    shortTitle: "Médical conventionné",
    description: "Transport assis professionnalisé pour consultations, hospitalisations et hôpitaux de jour.",
    image: "/images/service-medical.jpg",
    Icon: Stethoscope,
    cta: "Réserver"
  },
  {
    id: "airport",
    title: "Transfert gares et aéroports",
    shortTitle: "Gares et aéroports",
    description: "Départs et arrivées vers Château-Thierry, CDG, Orly, Beauvais, gares et villes voisines.",
    image: "/images/service-aeroport.webp",
    Icon: Plane,
    cta: "Demander un devis"
  },
  {
    id: "event",
    title: "Course classique de taxi ou mise à disposition",
    shortTitle: "Particulier",
    description: "Toute l'agglomération de Château-Thierry (Sud de l'Aisne), Charles de Gaulle (CDG), gares SNCF de Paris, Reims et villes voisines.",
    image: "/images/service-tourisme.jpeg",
    Icon: Car,
    cta: "Réserver"
  },
  {
    id: "business",
    title: "Professionnel / entreprise",
    shortTitle: "Entreprise",
    description: "Trajets ponctuels ou récurrents, rendez-vous, facturation et prise en charge organisée.",
    image: "/images/service-professionnel.webp",
    Icon: BriefcaseBusiness,
    cta: "Demander un devis"
  }
] as const;

export type ServiceId = (typeof bookingServices)[number]["id"];
