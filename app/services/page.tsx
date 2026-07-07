"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getLocalizedFleet, getLocalizedServices } from "@/data/localized";
import { getPageTranslations } from "@/data/page-translations";
import { siteConfig, whatsappUrl } from "@/data/site";
import { getTranslations } from "@/data/translations";
import { localizedPath } from "@/lib/i18n";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useLocale } from "@/lib/locale-context";

export default function ServicesPage() {
  const locale = useLocale();
  const services = getLocalizedServices(locale);
  const fleet = getLocalizedFleet(locale);
  const pt = getPageTranslations(locale).servicesPage;
  const t = getTranslations(locale);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-taxi-black py-8 text-white">
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="grid content-center">
            <p className="inline-flex w-fit rounded-md bg-taxi-gold px-3 py-2 text-sm font-black uppercase tracking-wide text-taxi-black">{pt.badge}</p>
            <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">{pt.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">{pt.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={localizedPath("/#reserver", locale)}>{pt.cta}</ButtonLink>
              <ButtonLink href={whatsappUrl()} variant="whatsapp" target="_blank">
                WhatsApp
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.slice(0, 4).map(({ id, title, image }) => (
              <div key={id} className="relative h-48 overflow-hidden rounded-lg border border-white/10 shadow-2xl">
                <Image src={image} alt={title} fill className="object-cover transition duration-500 hover:scale-105" sizes="(min-width: 1024px) 25vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-taxi-black/80 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-sm font-black">{title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-wide text-taxi-gold">{pt.servicesEyebrow}</p>
              <h2 className="mt-2 text-3xl font-black text-taxi-black sm:text-4xl">{pt.servicesTitle}</h2>
              <p className="mt-4 leading-7 text-neutral-600">{pt.servicesText}</p>
            </div>
            <div className="rounded-lg bg-taxi-black p-4 text-white">
              <div className="text-3xl font-black text-taxi-gold">24/7</div>
              <div className="text-sm font-bold text-white/75">{pt.fastQuote}</div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ id, slug, title, description, image, Icon }, index) => (
              <a key={id} href={`#${slug}`} className="group overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-48">
                  <Image src={image} alt={title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 50vw" />
                  <div className="absolute left-4 top-4 rounded-md bg-taxi-gold px-3 py-2 text-xs font-black text-taxi-black">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="grid gap-3 p-5">
                  <Icon className="text-taxi-gold" size={28} />
                  <h3 className="text-xl font-black text-taxi-black">{title}</h3>
                  <p className="text-sm leading-6 text-neutral-600">{description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-black text-taxi-black">
                    {pt.details} <ArrowRight className="transition group-hover:translate-x-1" size={16} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-taxi-cream py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-wide text-taxi-gold">{pt.detailedEyebrow}</p>
            <h2 className="mt-2 text-3xl font-black text-taxi-black sm:text-4xl">{pt.detailedTitle}</h2>
          </div>
          <div className="grid gap-8">
            {services.map(({ id, slug, title, details, image, keywords }, index) => (
              <Card key={id} id={slug} className="scroll-mt-24 overflow-hidden border-neutral-200 shadow-lg">
                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="relative min-h-80">
                    <Image src={image} alt={title} fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
                    <div className="absolute left-5 top-5 rounded-md bg-taxi-black px-3 py-2 text-xs font-black uppercase tracking-wide text-taxi-gold">
                      {pt.serviceLabel} {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="grid content-center gap-5 p-6 sm:p-10">
                    <h2 className="text-3xl font-black text-taxi-black">{title}</h2>
                    <p className="leading-7 text-neutral-700">{details}</p>
                    <div className="grid gap-2">
                      {keywords.map((keyword) => (
                        <div key={keyword} className="flex items-center gap-3 rounded-md bg-neutral-50 p-3 text-sm font-bold text-neutral-700">
                          <CheckCircle2 className="shrink-0 text-taxi-green" size={18} />
                          {keyword}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <ButtonLink href={localizedPath("/#reserver", locale)}>{pt.quote}</ButtonLink>
                      <ButtonLink href={siteConfig.phoneHref} variant="dark">
                        {t.common.call}
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 py-8 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-wide text-taxi-gold">{pt.vehiclesEyebrow}</p>
              <h2 className="mt-2 text-3xl font-black sm:text-4xl">{pt.vehiclesTitle}</h2>
              <p className="mt-4 text-white/70">{pt.vehiclesText}</p>
            </div>
            <ButtonLink href={localizedPath("/#reserver", locale)} variant="secondary">
              {t.hero.book}
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {fleet.map(({ id, name, passengers, description, image }) => (
              <Card key={id} className="overflow-hidden border-white/10 bg-white/[0.06] text-white shadow-2xl">
                <div className="relative h-80 overflow-hidden bg-neutral-100 sm:h-96">
                  <Image
                    src={image}
                    alt={`${pt.vehicleAlt} ${name} Yas'Taxii`}
                    fill
                    className="object-cover object-center transition duration-500 hover:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="grid gap-4 p-6">
                  <h3 className="text-2xl font-black">{name}</h3>
                  <p className="text-white/70">{description}</p>
                  <div className="grid gap-3">
                    <div className="rounded-md bg-white/10 p-4 text-sm font-bold">{passengers}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}



