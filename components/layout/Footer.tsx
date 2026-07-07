"use client";

import Link from "next/link";
import { siteConfig, whatsappUrl } from "@/data/site";
import { getTranslations } from "@/data/translations";
import { localizedPath } from "@/lib/i18n";
import { useLocale } from "@/lib/locale-context";

export function Footer() {
  const locale = useLocale();
  const t = getTranslations(locale);

  return (
    <footer className="bg-taxi-black text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="text-2xl font-black">Yas&apos;Taxii</div>
          <p className="mt-3 max-w-xl text-sm leading-7 text-white/70">{t.footerText}</p>
        </div>
        <div>
          <div className="font-bold text-taxi-gold">{t.nav.contact}</div>
          <div className="mt-3 grid gap-2 text-sm text-white/75">
            <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            <a href={whatsappUrl()} target="_blank">
              {t.common.whatsapp}
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold text-taxi-gold">{t.legal}</div>
          <div className="mt-3 grid gap-2 text-sm text-white/75">
            <Link href={localizedPath("/mentions-legales", locale)}>{t.mentions}</Link>
            <Link href={localizedPath("/politique-confidentialite", locale)}>{t.privacy}</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/50">
        (c) {new Date().getFullYear()} Yas&apos;Taxii. {t.rights}
      </div>
    </footer>
  );
}
