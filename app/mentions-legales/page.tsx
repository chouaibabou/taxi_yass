import { MentionsLegalesContent } from "@/components/pages/LegalPagesContent";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Mentions legales - Yas'Taxii", "Mentions legales du site Yas'Taxii.", "/mentions-legales");

export default function MentionsLegalesPage() {
  return <MentionsLegalesContent />;
}
