import { DestinationsPageContent } from "@/components/pages/DestinationsPageContent";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Destinations taxi partenaires - Yas'Taxii",
  "Demandez un taxi a Crezancy, Gandelu, Chateau-Thierry ou Soissons. Yas'Taxii organise la demande avec son reseau de chauffeurs partenaires selon le secteur.",
  "/destinations"
);

export default function DestinationsPage() {
  return <DestinationsPageContent />;
}
