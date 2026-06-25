"use client";

import { MessageCircle, Phone } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/data/site";
import { trackConversion } from "@/lib/tracking";

export function FloatingContactButtons() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 grid grid-cols-2 gap-3 sm:left-auto sm:right-5 sm:w-72">
      <a
        href={siteConfig.phoneHref}
        onClick={() => trackConversion("phone_click")}
        className="inline-flex h-14 items-center justify-center gap-2 rounded-md bg-taxi-gold px-4 text-sm font-black text-taxi-black shadow-xl"
      >
        <Phone size={19} /> Appeler
      </a>
      <a
        href={whatsappUrl()}
        target="_blank"
        onClick={() => trackConversion("whatsapp_click")}
        className="inline-flex h-14 items-center justify-center gap-2 rounded-md bg-taxi-green px-4 text-sm font-black text-white shadow-xl"
      >
        <MessageCircle size={19} /> WhatsApp
      </a>
    </div>
  );
}
