"use client";

import { ExternalLink } from "lucide-react";
import { getPageTranslations } from "@/data/page-translations";
import { siteConfig } from "@/data/site";
import { localizedPath } from "@/lib/i18n";
import { useLocale } from "@/lib/locale-context";
import { ButtonLink } from "@/components/ui/Button";
import { ReviewsPageGrid } from "@/components/sections/ReviewsPageGrid";

export function AvisPageContent() {
  const locale = useLocale();
  const page = getPageTranslations(locale).reviews;

  return (
    <>
      <section className="bg-taxi-black py-8 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="inline-flex rounded-md bg-taxi-gold px-3 py-2 text-sm font-black uppercase tracking-wide text-taxi-black">{page.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">{page.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">{page.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={siteConfig.googleReviewWriteUrl} target="_blank">
              {page.write} <ExternalLink size={16} />
            </ButtonLink>
            <ButtonLink href={localizedPath("/#reserver", locale)} variant="secondary">
              {page.book}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ReviewsPageGrid />
        </div>
      </section>
    </>
  );
}
