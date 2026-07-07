"use client";

import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig, whatsappUrl } from "@/data/site";
import { getTranslations } from "@/data/translations";
import { Locale, localeLabels, localeNames, locales, localizedPath, stripLocale } from "@/lib/i18n";
import { useLocale } from "@/lib/locale-context";
import { trackConversion } from "@/lib/tracking";
import { ButtonLink } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const t = getTranslations(locale);
  const nav = [
    { label: t.nav.home, href: "/#accueil" },
    { label: t.nav.services, href: "/services" },
    { label: t.nav.booking, href: "/#reserver" },
    { label: t.nav.fleet, href: "/#flotte" },
    { label: t.nav.reviews, href: "/avis" },
    { label: t.nav.destinations, href: "/destinations" },
    { label: t.nav.faq, href: "/#faq" },
    { label: t.nav.contact, href: "/#contact" }
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-taxi-black/95 text-white backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
        <Link href={localizedPath("/#accueil", locale)} className="flex shrink-0 items-center gap-3" aria-label="Yas'Taxii accueil">
          <div className="grid h-12 w-12 place-items-center rounded-md bg-taxi-gold text-lg font-black text-taxi-black">YT</div>
          <div>
            <div className="text-lg font-black leading-none">Yas&apos;Taxii</div>
            <div className="max-w-52 text-[11px] font-semibold uppercase leading-tight tracking-wide text-taxi-amber">{t.headerSubtitle}</div>
          </div>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-5 xl:flex">
          {nav.map((item) => (
            <Link key={item.href} href={localizedPath(item.href, locale)} className="whitespace-nowrap text-sm font-semibold text-white/80 transition hover:text-taxi-gold">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <LanguageSwitcher pathname={pathname} />
          <ButtonLink href={siteConfig.phoneHref} variant="secondary" onClick={() => trackConversion("phone_click")}>
            <Phone size={18} /> {t.common.call}
          </ButtonLink>
          <ButtonLink href={whatsappUrl()} variant="whatsapp" onClick={() => trackConversion("whatsapp_click")} target="_blank">
            {t.common.whatsapp}
          </ButtonLink>
        </div>

        <button className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-white/10 xl:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 px-4 py-4 xl:hidden">
          <nav className="grid gap-2">
            {nav.map((item) => (
              <Link key={item.href} href={localizedPath(item.href, locale)} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-semibold text-white/85 hover:bg-white/10">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4">
            <LanguageSwitcher pathname={pathname} />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <ButtonLink href={siteConfig.phoneHref} variant="secondary" onClick={() => trackConversion("phone_click")}>
              {t.common.call}
            </ButtonLink>
            <ButtonLink href={whatsappUrl()} variant="whatsapp" target="_blank" onClick={() => trackConversion("whatsapp_click")}>
              {t.common.whatsapp}
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function LanguageSwitcher({ pathname }: { pathname: string }) {
  const currentLocale = useLocale();
  const basePath = stripLocale(pathname);

  return (
    <div className="group relative w-fit">
      <button
        type="button"
        className="flex h-10 items-center gap-2 rounded-md border border-taxi-gold/45 bg-taxi-black px-3 text-sm font-black text-white shadow-sm transition hover:border-taxi-gold hover:bg-white/10"
        aria-label="Changer de langue"
      >
        <FlagIcon locale={currentLocale} />
        <ChevronDown className="text-taxi-gold transition group-hover:rotate-180" size={15} />
      </button>

      <div className="invisible absolute right-0 top-[calc(100%+0.65rem)] z-50 min-w-60 translate-y-2 rounded-md border border-neutral-200 bg-white p-2 text-taxi-black opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        {locales.map((locale) => (
          <Link
            key={locale}
            href={localizedPath(basePath, locale)}
            className="flex items-center justify-between gap-4 rounded-md px-3 py-3 text-sm font-bold transition hover:bg-neutral-50 data-[active=true]:bg-taxi-gold/15 data-[active=true]:shadow-sm"
            data-active={locale === currentLocale}
          >
            <span className="flex items-center gap-3">
              <FlagIcon locale={locale} />
              <span className="text-taxi-black">{localeNames[locale]}</span>
            </span>
            <span className="rounded bg-neutral-100 px-2 py-1 text-[10px] font-black text-neutral-500 data-[active=true]:bg-taxi-black data-[active=true]:text-taxi-gold" data-active={locale === currentLocale}>
              {localeLabels[locale]}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function FlagIcon({ locale }: { locale: Locale }) {
  if (locale === "fr") {
    return (
      <span className="grid h-4 w-6 grid-cols-3 overflow-hidden rounded-[2px] ring-1 ring-black/10" aria-hidden="true">
        <span className="bg-[#1f3f8b]" />
        <span className="bg-white" />
        <span className="bg-[#e3343f]" />
      </span>
    );
  }

  if (locale === "en") {
    return (
      <span className="relative h-4 w-6 overflow-hidden rounded-[2px] bg-[#12327a] ring-1 ring-black/10" aria-hidden="true">
        <span className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-white" />
        <span className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-white" />
        <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-[#d71920]" />
        <span className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-[#d71920]" />
      </span>
    );
  }

  if (locale === "es") {
    return (
      <span className="grid h-4 w-6 grid-rows-[1fr_2fr_1fr] overflow-hidden rounded-[2px] ring-1 ring-black/10" aria-hidden="true">
        <span className="bg-[#c60b1e]" />
        <span className="bg-[#ffc400]" />
        <span className="bg-[#c60b1e]" />
      </span>
    );
  }

  return (
    <span className="grid h-4 w-6 grid-rows-3 overflow-hidden rounded-[2px] ring-1 ring-black/10" aria-hidden="true">
      <span className="bg-black" />
      <span className="bg-[#dd0000]" />
      <span className="bg-[#ffce00]" />
    </span>
  );
}
