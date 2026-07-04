"use client";

import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { siteConfig, whatsappUrl } from "@/data/site";
import { trackConversion } from "@/lib/tracking";
import { ButtonLink } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-taxi-black/95 text-white backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/#accueil" className="flex items-center gap-3" aria-label="Yas'Taxii accueil">
          <div className="grid h-12 w-12 place-items-center rounded-md bg-taxi-gold text-lg font-black text-taxi-black">YT</div>
          <div>
            <div className="text-lg font-black leading-none">Yas&apos;Taxii</div>
            <div className="max-w-40 text-xs font-semibold uppercase tracking-wide text-taxi-amber sm:max-w-none">Taxi conventionné gares et aéroports</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-white/80 transition hover:text-taxi-gold">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ButtonLink href={siteConfig.phoneHref} variant="secondary" onClick={() => trackConversion("phone_click")}>
            <Phone size={18} /> Appeler
          </ButtonLink>
          <ButtonLink href={whatsappUrl()} variant="whatsapp" onClick={() => trackConversion("whatsapp_click")} target="_blank">
            WhatsApp
          </ButtonLink>
        </div>

        <button className="grid h-11 w-11 place-items-center rounded-md bg-white/10 lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 px-4 py-4 lg:hidden">
          <nav className="grid gap-2">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-semibold text-white/85 hover:bg-white/10">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <ButtonLink href={siteConfig.phoneHref} variant="secondary" onClick={() => trackConversion("phone_click")}>
              Appeler
            </ButtonLink>
            <ButtonLink href={whatsappUrl()} variant="whatsapp" target="_blank" onClick={() => trackConversion("whatsapp_click")}>
              WhatsApp
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
