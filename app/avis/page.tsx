import { AvisPageContent } from "@/components/pages/AvisPageContent";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Avis clients Yas'Taxii - Taxi Chateau-Thierry",
  "Consultez les avis clients Google de Yas'Taxii, taxi conventionne de Gandelu, Crezancy et toute l'agglomeration de Chateau-Thierry.",
  "/avis"
);

export default function AvisPage() {
  return <AvisPageContent />;
}
