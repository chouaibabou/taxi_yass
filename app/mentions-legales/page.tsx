import type React from "react";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site";

export const metadata = pageMetadata("Mentions légales - Yas'Taxii", "Mentions légales du site Yas'Taxii.", "/mentions-legales");

export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales">
      <p>�?diteur du site : Yas&apos;Taxii, service de taxi de Gandelu, Crézancy et toute l&apos;agglomération de Château-Thierry, France.</p>
      <p>Téléphone : {siteConfig.phone}.</p>
      <p>Les informations légales complètes, numéro SIRET, responsable de publication et hébergeur sont à compléter avant mise en ligne définitive.</p>
    </LegalPage>
  );
}

function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-white py-8">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-taxi-black">{title}</h1>
        <div className="mt-8 grid gap-4 leading-7 text-neutral-700">{children}</div>
      </div>
    </section>
  );
}

