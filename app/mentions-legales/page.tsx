import type React from "react";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site";

export const metadata = pageMetadata("Mentions legales - Yas'Taxii", "Mentions legales du site Yas'Taxii.", "/mentions-legales");

export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions legales">
      <p>Editeur du site : Yas&apos;Taxii, service de taxi a Chateau-Thierry, France.</p>
      <p>Telephone : {siteConfig.phone}. Email : {siteConfig.email}.</p>
      <p>Les informations legales completes, numero SIRET, responsable de publication et hebergeur sont a completer avant mise en ligne definitive.</p>
    </LegalPage>
  );
}

function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-taxi-black">{title}</h1>
        <div className="mt-8 grid gap-4 leading-7 text-neutral-700">{children}</div>
      </div>
    </section>
  );
}
