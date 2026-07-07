"use client";

import { MapPinned } from "lucide-react";
import { zones } from "@/data/zones";
import { getPageTranslations } from "@/data/page-translations";
import { localizedPath } from "@/lib/i18n";
import { useLocale } from "@/lib/locale-context";
import { ButtonLink } from "@/components/ui/Button";
import { DestinationsRequestForm } from "@/components/sections/DestinationsRequestForm";

export function DestinationsPageContent() {
  const locale = useLocale();
  const page = getPageTranslations(locale).destinations;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-taxi-black py-8 text-white">
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="inline-flex rounded-md bg-taxi-gold px-3 py-2 text-sm font-black uppercase tracking-wide text-taxi-black">{page.badge}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">{page.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">{page.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#demande-destination">{page.request}</ButtonLink>
            <ButtonLink href={localizedPath("/#reserver", locale)} variant="secondary">
              {page.classic}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-wide text-taxi-gold">{page.zonesEyebrow}</p>
            <h2 className="mt-2 text-3xl font-black text-taxi-black sm:text-4xl">{page.zonesTitle}</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {zones.map((zone) => (
              <a key={zone} href="#demande-destination" className="group rounded-lg border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-taxi-gold hover:shadow-xl">
                <MapPinned className="text-taxi-gold" size={28} />
                <h3 className="mt-4 text-xl font-black text-taxi-black">{zone}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">{page.zoneText}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div id="demande-destination">
        <DestinationsRequestForm />
      </div>
    </>
  );
}
