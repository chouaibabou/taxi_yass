"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BadgeCheck, Banknote, Clock, MapPin, Plane, ShieldCheck } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/data/site";
import { getTranslations } from "@/data/translations";
import { useLocale } from "@/lib/locale-context";
import { ButtonLink } from "@/components/ui/Button";

const icons = [Clock, BadgeCheck, ShieldCheck, Clock, BadgeCheck, Plane, Banknote, MapPin];
const heroSlides = [
  "/images/hero-yastaxi-vignes-aeroport.jpeg",
  "/images/hero-yastaxi-destinations-europe.jpeg",
  "/images/hero-yastaxi-evenement.jpeg",
  "/images/hero-yastaxi-gares-aeroports.jpeg"
];

export function HeroSection() {
  const locale = useLocale();
  const t = getTranslations(locale);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="accueil" className="relative isolate overflow-hidden bg-taxi-black text-white">
      <div className="absolute inset-0">
        {heroSlides.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={t.hero.imageAlt}
            fill
            priority={index === 0}
            className={`object-cover object-center opacity-0 transition-opacity duration-1000 ease-out ${
              index === activeSlide ? "opacity-60" : ""
            }`}
            sizes="100vw"
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-taxi-black via-taxi-black/82 to-taxi-black/20" />
      <div className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl content-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-md bg-taxi-gold px-3 py-2 text-xs font-black uppercase tracking-wide text-taxi-black">
            {t.hero.badge}
          </p>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">{t.hero.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">{t.hero.text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="#reserver">{t.hero.book}</ButtonLink>
            <ButtonLink href="#reserver" variant="secondary">
              {t.hero.quote}
            </ButtonLink>
            <ButtonLink href={siteConfig.phoneHref} variant="dark" className="border border-white/20">
              {t.common.call}
            </ButtonLink>
            <ButtonLink href={whatsappUrl()} variant="whatsapp" target="_blank">
              {t.common.whatsapp}
            </ButtonLink>
          </div>
        </div>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {t.hero.highlights.map((label, index) => {
            const Icon = icons[index];
            return (
              <div key={label} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/10 p-3 backdrop-blur">
                <Icon className="text-taxi-gold" size={20} />
                <span className="text-sm font-bold text-white/90">{label}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroSlides.map((src, index) => (
          <button
            key={src}
            type="button"
            aria-label={`Image ${index + 1}`}
            onClick={() => setActiveSlide(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === activeSlide ? "w-8 bg-taxi-gold" : "w-2.5 bg-white/45 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
