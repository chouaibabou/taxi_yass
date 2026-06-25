import { Briefcase, Users } from "lucide-react";

export const fleet = [
  {
    id: "eco",
    name: "Eco",
    passengers: "1 a 4 passagers",
    luggage: "1 a 4 bagages",
    description: "Vehicule confortable pour trajets quotidiens, gares, aeroports et transport medical conventionne.",
    image: "/images/fleet-eco.webp",
    Icon: Users
  },
  {
    id: "van",
    name: "Van",
    passengers: "1 a 8 passagers",
    luggage: "1 a 8 bagages",
    description: "Ideal familles, groupes, gares, aeroports, evenements et deplacements professionnels.",
    image: "/images/fleet-van.jpeg",
    Icon: Briefcase
  }
] as const;

export type FleetId = (typeof fleet)[number]["id"];
