import { PrivacyContent } from "@/components/pages/LegalPagesContent";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Politique de confidentialite - Yas'Taxii", "Politique de confidentialite du site Yas'Taxii.", "/politique-confidentialite");

export default function PrivacyPage() {
  return <PrivacyContent />;
}
