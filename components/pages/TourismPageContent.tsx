"use client";

import Image from "next/image";
import { ArrowRight, Castle, ExternalLink, Landmark, MapPinned, Route, Wine } from "lucide-react";
import { getPageTranslations } from "@/data/page-translations";
import { localizedPath } from "@/lib/i18n";
import { useLocale } from "@/lib/locale-context";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const tourismUrl = "https://www.lesportesdelachampagne.com/";
const icons = [Wine, Castle, Landmark, Route];

export function TourismPageContent() {
  const locale = useLocale();
  const page = getPageTranslations(locale).tourism;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-taxi-black py-8 text-white">
        <Image src="/images/hero-yastaxi-vignes-aeroport.jpeg" alt={page.imageAlt} fill priority className="object-cover opacity-45" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-taxi-black via-taxi-black/86 to-taxi-black/30" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="grid content-center">
            <p className="inline-flex w-fit rounded-md bg-taxi-gold px-3 py-2 text-sm font-black uppercase tracking-wide text-taxi-black">{page.pageBadge}</p>
            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">{page.pageTitle}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">{page.pageIntro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={localizedPath("/#reserver", locale)}>{page.book}</ButtonLink>
              <ButtonLink href={tourismUrl} target="_blank" variant="secondary">
                {page.official} <ExternalLink size={16} />
              </ButtonLink>
            </div>
          </div>
          <div className="grid content-center">
            <div className="rounded-lg bg-white p-6 shadow-2xl">
              <Image src="/logo/portes-de-la-champagne.jpg" alt={page.logoAlt} width={720} height={260} className="h-auto w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-wide text-taxi-gold">{page.localEyebrow}</p>
            <h2 className="mt-2 text-3xl font-black text-taxi-black sm:text-4xl">{page.localTitle}</h2>
            <p className="mt-4 leading-7 text-neutral-700">{page.localText}</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {page.highlights.map(({ title, text }, index) => {
              const Icon = icons[index];
              return (
                <Card key={title} className="p-5">
                  <Icon className="text-taxi-gold" size={30} />
                  <h3 className="mt-4 text-xl font-black text-taxi-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">{text}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-taxi-cream py-8">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-taxi-gold">{page.tripEyebrow}</p>
            <h2 className="mt-2 text-3xl font-black text-taxi-black sm:text-4xl">{page.tripTitle}</h2>
            <p className="mt-4 leading-7 text-neutral-700">{page.tripText}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={localizedPath("/#reserver", locale)}>{page.request}</ButtonLink>
              <ButtonLink href={tourismUrl} target="_blank" variant="dark">
                {page.events} <ExternalLink size={16} />
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {page.places.map((place) => (
              <div key={place} className="flex items-center gap-3 rounded-md bg-white p-4 text-sm font-bold text-taxi-black shadow-sm">
                <MapPinned className="shrink-0 text-taxi-gold" size={20} />
                {place}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-taxi-black py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-taxi-gold">{page.finalEyebrow}</p>
            <h2 className="mt-2 text-3xl font-black">{page.finalTitle}</h2>
            <p className="mt-3 max-w-2xl text-white/70">{page.finalText}</p>
          </div>
          <ButtonLink href={localizedPath("/#reserver", locale)}>
            {page.now} <ArrowRight size={16} />
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
