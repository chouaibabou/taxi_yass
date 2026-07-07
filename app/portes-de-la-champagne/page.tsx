import { TourismPageContent } from "@/components/pages/TourismPageContent";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Les Portes de la Champagne en taxi - Yas'Taxii",
  "Reservez un taxi pour decouvrir Les Portes de la Champagne : vignoble, caves, chateaux, vallee de la Marne, Chateau-Thierry et sorties touristiques.",
  "/portes-de-la-champagne"
);

export default function PortesDeLaChampagnePage() {
  return <TourismPageContent />;
}
