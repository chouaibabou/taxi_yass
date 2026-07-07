"use client";

import { ChevronDown } from "lucide-react";
import { getLocalizedFaq } from "@/data/localized";
import { getTranslations } from "@/data/translations";
import { useLocale } from "@/lib/locale-context";

export function FAQSection() {
  const locale = useLocale();
  const t = getTranslations(locale);
  const faq = getLocalizedFaq(locale);

  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-black uppercase tracking-wide text-taxi-gold">{t.faq.eyebrow}</p>
        <h2 className="mt-2 text-3xl font-black text-taxi-black sm:text-4xl">{t.faq.title}</h2>
        <div className="mt-8 divide-y divide-neutral-200 rounded-lg border border-neutral-200">
          {faq.map((item) => (
            <details key={item.question} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-black text-taxi-black">
                {item.question}
                <ChevronDown className="shrink-0 transition group-open:rotate-180" size={20} />
              </summary>
              <p className="mt-4 text-sm leading-7 text-neutral-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
