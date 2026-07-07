"use client";

import type React from "react";
import { siteConfig } from "@/data/site";
import { getPageTranslations } from "@/data/page-translations";
import { useLocale } from "@/lib/locale-context";

export function MentionsLegalesContent() {
  const page = getPageTranslations(useLocale()).legalPages;

  return (
    <LegalPage title={page.mentionsTitle}>
      <p>{page.mentionsEditor}</p>
      <p>{page.phone} : {siteConfig.phone}.</p>
      <p>{page.mentionsText}</p>
    </LegalPage>
  );
}

export function PrivacyContent() {
  const page = getPageTranslations(useLocale()).legalPages;

  return (
    <LegalPage title={page.privacyTitle}>
      <p>{page.privacy1}</p>
      <p>{page.privacy2}</p>
      <p>{page.privacy3}</p>
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
