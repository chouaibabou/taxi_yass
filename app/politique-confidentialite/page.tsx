import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Politique de confidentialite - Yas'Taxii", "Politique de confidentialite du site Yas'Taxii.", "/politique-confidentialite");

export default function PrivacyPage() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-taxi-black">Politique de confidentialite</h1>
        <div className="mt-8 grid gap-4 leading-7 text-neutral-700">
          <p>Les formulaires collectent uniquement les informations necessaires pour repondre aux demandes de reservation, devis ou contact.</p>
          <p>Aucune donnee medicale sensible ou diagnostic n&apos;est demande. Les informations de transport medical se limitent a l&apos;organisation du trajet.</p>
          <p>Les donnees ne doivent pas etre revendues. Les durees de conservation, droits RGPD et contact DPO sont a completer avant mise en production.</p>
        </div>
      </div>
    </section>
  );
}
