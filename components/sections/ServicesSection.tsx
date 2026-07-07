"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown, Phone } from "lucide-react";
import { getLocalizedServices } from "@/data/localized";
import { siteConfig } from "@/data/site";
import { getTranslations } from "@/data/translations";
import { localizedPath } from "@/lib/i18n";
import { useLocale } from "@/lib/locale-context";
import { ButtonLink } from "@/components/ui/Button";

export function ServicesSection() {
  const locale = useLocale();
  const t = getTranslations(locale);
  const services = getLocalizedServices(locale);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <section id="services" className="bg-white py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-wide text-taxi-gold">{t.servicesSection.eyebrow}</p>
            <h2 className="mt-2 text-3xl font-black text-taxi-black sm:text-4xl">{t.servicesSection.title}</h2>
            <p className="mt-4 text-neutral-600">{t.servicesSection.text}</p>
          </div>
          <ButtonLink href={localizedPath("/services", locale)} variant="dark">
            {t.servicesSection.all}
          </ButtonLink>
        </div>
        <button
          type="button"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-md border border-taxi-gold bg-taxi-gold px-4 py-3 text-sm font-black text-taxi-black shadow-sm md:hidden"
          aria-expanded={servicesOpen}
          aria-controls="home-services-list"
          onClick={() => setServicesOpen((current) => !current)}
        >
          {servicesOpen ? t.common.close : t.common.showServices}
          <ChevronDown className={`transition duration-200 ${servicesOpen ? "rotate-180" : ""}`} size={20} />
        </button>
        <div
          id="home-services-list"
          className={`${servicesOpen ? "grid" : "hidden"} mt-6 auto-rows-fr gap-5 md:mt-10 md:grid md:grid-cols-2 lg:grid-cols-3`}
        >
          {services.map(({ id, slug, title, description, image, Icon }) => (
            <article
              key={id}
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-56">
                <Image src={image} alt={title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-taxi-black/45 via-transparent to-transparent" />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-5 text-taxi-black">
                <Icon className="text-taxi-gold" size={27} />
                <h3 className="min-h-14 text-xl font-black leading-tight text-taxi-black">{title}</h3>
                <p className="min-h-20 text-sm leading-6 text-neutral-600">{description}</p>
                <ServiceActions serviceId={id} slug={slug} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceActions({ serviceId, slug }: { serviceId: string; slug: string }) {
  const locale = useLocale();
  const t = getTranslations(locale);
  const primary = getPrimaryAction(serviceId, t);

  return (
    <div className="mt-auto grid grid-cols-[minmax(0,7fr)_minmax(116px,3fr)] gap-2">
      <ButtonLink href={primary.href} variant="dark" className="h-12 min-w-0 px-3 text-center text-xs sm:text-sm">
        {primary.icon === "phone" ? <Phone className="shrink-0" size={16} /> : null}
        <span className="truncate">{primary.label}</span>
      </ButtonLink>
      <ButtonLink href={localizedPath(`/services#${slug}`, locale)} variant="primary" className="h-12 min-w-0 px-3 text-center text-xs sm:text-sm">
        <span className="truncate">{t.common.learnMore}</span>
        <ArrowRight className="shrink-0" size={15} />
      </ButtonLink>
    </div>
  );
}

function getPrimaryAction(serviceId: string, t: ReturnType<typeof getTranslations>) {
  if (serviceId === "medical" || serviceId === "tourism") {
    return { href: "#reserver", label: t.common.book };
  }

  if (serviceId === "assistance") {
    return { href: siteConfig.phoneHref, label: t.common.call, icon: "phone" };
  }

  return { href: "#reserver", label: t.common.quote };
}

