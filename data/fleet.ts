import { Briefcase, Users } from "lucide-react";

export const fleet = [
  {
    id: "eco",
    name: "Taxi",
    passengers: "1 à 6 passagers",
    description: "Taxi confortable pour trajets quotidiens, gares, aéroports et transport médical conventionné.",
    image: "/images/fleet-taxi.jpeg",
    Icon: Users
  },
  {
    id: "van",
    name: "Taxi Van",
    passengers: "1 à 8 passagers",
    description: "Idéal familles, groupes, gares, aéroports, événements et déplacements professionnels.",
    image: "/images/fleet-taxi-van.jpeg",
    Icon: Briefcase
  }
] as const;

export type FleetId = (typeof fleet)[number]["id"];
