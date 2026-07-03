import { Briefcase, Users } from "lucide-react";

export const fleet = [
  {
    id: "eco",
    name: "Taxi",
    passengers: "1 à 4 passagers",
    luggage: "1 à 4 bagages",
    description: "Taxi confortable pour trajets quotidiens, gares, aéroports et transport médical conventionné.",
    image: "/images/fleet-eco.webp",
    Icon: Users
  },
  {
    id: "van",
    name: "Van",
    passengers: "1 à 8 passagers",
    luggage: "1 à 8 bagages",
    description: "Idéal familles, groupes, gares, aéroports, événements et déplacements professionnels.",
    image: "/images/fleet-van.jpeg",
    Icon: Briefcase
  }
] as const;

export type FleetId = (typeof fleet)[number]["id"];
