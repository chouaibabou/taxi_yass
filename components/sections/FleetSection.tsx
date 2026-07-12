"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { getLocalizedFleet } from "@/data/localized";
import { getTranslations } from "@/data/translations";
import { localizedPath } from "@/lib/i18n";
import { useLocale } from "@/lib/locale-context";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function FleetSection() {
  const locale = useLocale();
  const t = getTranslations(locale);
  const fleet = getLocalizedFleet(locale);

  return (
    <section id="flotte" className="bg-neutral-950 py-8 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-wide text-taxi-gold">{t.fleetSection.eyebrow}</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">{t.fleetSection.title}</h2>
            <p className="mt-4 text-white/70">{t.fleetSection.text}</p>
          </div>
          <ButtonLink href={localizedPath("/services", locale)} variant="secondary">
            {t.fleetSection.services}
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {fleet.map(({ id, name, passengers, description, image, Icon }) => (
            <Card key={id} className="overflow-hidden border-white/10 bg-white/[0.06] text-white shadow-2xl">
              <div className="relative h-64 overflow-hidden bg-neutral-100 sm:h-96">
                <Image
                  src={image}
                  alt={`Yas'Taxii ${name}`}
                  fill
                  className="object-cover object-center transition duration-500 hover:scale-105 filter saturate-75"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-3xl font-black">{name}</h3>
                    <p className="mt-3 text-white/70">{description}</p>
                  </div>
                  <Icon className="text-taxi-gold" size={38} />
                </div>
                <div className="mt-6 grid gap-3">
                  <div className="flex items-center gap-2 rounded-md bg-white/10 p-4 text-sm font-bold">
                    <CheckCircle2 className="text-taxi-green" size={18} />
                    {passengers}
                  </div>
                </div>
                <ButtonLink href="#reserver" className="mt-6 w-full">
                  {t.common.book}
                </ButtonLink>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

