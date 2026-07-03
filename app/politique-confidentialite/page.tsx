import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Politique de confidentialité - Yas'Taxii", "Politique de confidentialité du site Yas'Taxii.", "/politique-confidentialite");

export default function PrivacyPage() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-taxi-black">Politique de confidentialité</h1>
        <div className="mt-8 grid gap-4 leading-7 text-neutral-700">
          <p>Les formulaires collectent uniquement les informations nécessaires pour répondre aux demandes de réservation, devis ou contact.</p>
          <p>Aucune donnée médicale sensible ou diagnostic n&apos;est demandé. Les informations de transport médical se limitent à l&apos;organisation du trajet.</p>
          <p>Les données ne doivent pas être revendues. Les durées de conservation, droits RGPD et contact DPO sont à compléter avant mise en production.</p>
        </div>
      </div>
    </section>
  );
}
