import Image from "next/image";
import { BadgeCheck, Banknote, Clock, MapPin, Plane, ShieldCheck } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";

const highlights = [
  { label: "Ponctualité", Icon: Clock },
  { label: "Confort", Icon: BadgeCheck },
  { label: "Sécurité", Icon: ShieldCheck },
  { label: "24h/24 - 7j/7", Icon: Clock },
  { label: "Transport médical conventionné", Icon: BadgeCheck },
  { label: "Gares et aéroports", Icon: Plane },
  { label: "Paiement CB si besoin", Icon: Banknote },
  { label: "Devis rapide", Icon: MapPin }
];

export function HeroSection() {
  return (
    <section id="accueil" className="relative isolate overflow-hidden bg-taxi-black text-white">
      <Image src="/images/hero-taxi-premium.png" alt="Taxi premium Yas'Taxii" fill priority className="object-cover object-center opacity-55" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-taxi-black via-taxi-black/82 to-taxi-black/20" />
      <div className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl content-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-md bg-taxi-gold px-3 py-2 text-xs font-black uppercase tracking-wide text-taxi-black">
            De toute l&apos;agglomération de Château-Thierry vers toutes destinations
          </p>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Votre taxi conventionné, gares, aéroports et toutes distances
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
            Taxi conventionné de Gandelu, Crézancy et toute l&apos;agglomération de Château-Thierry pour trajets médicaux, transferts, courses privées et déplacements professionnels.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/#reserver">Réserver maintenant</ButtonLink>
            <ButtonLink href="/#reserver" variant="secondary">Demander un devis</ButtonLink>
            <ButtonLink href={siteConfig.phoneHref} variant="dark" className="border border-white/20">Appeler</ButtonLink>
            <ButtonLink href={whatsappUrl()} variant="whatsapp" target="_blank">WhatsApp</ButtonLink>
          </div>
        </div>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ label, Icon }) => (
            <div key={label} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/10 p-3 backdrop-blur">
              <Icon className="text-taxi-gold" size={20} />
              <span className="text-sm font-bold text-white/90">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
