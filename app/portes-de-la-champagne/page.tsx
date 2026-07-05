import Image from "next/image";
import { ArrowRight, Castle, ExternalLink, Landmark, MapPinned, Route, Wine } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { pageMetadata } from "@/lib/metadata";

const tourismUrl = "https://www.lesportesdelachampagne.com/";

const highlights = [
  {
    title: "Vignoble de Champagne",
    text: "Coteaux, maisons et caves de champagne, accueils en caves et paysages viticoles inscrits à l'UNESCO.",
    Icon: Wine
  },
  {
    title: "Patrimoine et châteaux",
    text: "Condé-en-Brie, Château-Thierry, Fère-en-Tardenois et les traces d'une histoire riche à parcourir.",
    Icon: Castle
  },
  {
    title: "Culture et écrivains",
    text: "Jean de La Fontaine, Paul et Camille Claudel, Jean Racine, Alexandre Dumas et la langue française.",
    Icon: Landmark
  },
  {
    title: "Balades et vallée de la Marne",
    text: "La Vallée du Surmelin, la Marne et les routes préservées pour se ressourcer sans se presser.",
    Icon: Route
  }
];

const places = [
  "Maison de champagne médiévale",
  "Vignerons et accueils en caves",
  "Château de Condé-en-Brie",
  "Ruines du château médiéval de Château-Thierry",
  "Fère-en-Tardenois et pont galerie Anne de Montmorency",
  "Maison natale Jean de La Fontaine",
  "Musée Paul et Camille Claudel",
  "Cité internationale de la langue française"
];

export const metadata = pageMetadata(
  "Les Portes de la Champagne en taxi - Yas'Taxii",
  "Réservez un taxi pour découvrir Les Portes de la Champagne : vignoble, caves, châteaux, vallée de la Marne, Château-Thierry et sorties touristiques.",
  "/portes-de-la-champagne"
);

export default function PortesDeLaChampagnePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-taxi-black py-20 text-white">
        <Image src="/images/hero-yastaxi-vignes-aeroport.jpeg" alt="Taxi vers Les Portes de la Champagne" fill priority className="object-cover opacity-45" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-taxi-black via-taxi-black/86 to-taxi-black/30" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="grid content-center">
            <p className="inline-flex w-fit rounded-md bg-taxi-gold px-3 py-2 text-sm font-black uppercase tracking-wide text-taxi-black">Partenariat tourisme</p>
            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">Découvrir Les Portes de la Champagne en taxi</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
              Entre Champagne-Ardenne et Île-de-France, Yas&apos;Taxii vous accompagne sur les routes d&apos;une destination mêlant vignes, patrimoine, vallée de la Marne et visites culturelles.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/#reserver">Réserver un taxi</ButtonLink>
              <ButtonLink href={tourismUrl} target="_blank" variant="secondary">
                Site officiel <ExternalLink size={16} />
              </ButtonLink>
            </div>
          </div>
          <div className="grid content-center">
            <div className="rounded-lg bg-white p-6 shadow-2xl">
              <Image src="/logo/portes-de-la-champagne.jpg" alt="Les Portes de la Champagne Maison du tourisme" width={720} height={260} className="h-auto w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-wide text-taxi-gold">Expérience locale</p>
            <h2 className="mt-2 text-3xl font-black text-taxi-black sm:text-4xl">Une escapade simple, confortable et organisée</h2>
            <p className="mt-4 leading-7 text-neutral-700">
              Les Portes de la Champagne forment un carrefour unique entre la Brie, le vignoble de Champagne et la rivière Marne. En taxi, vous profitez de la destination sans contrainte de stationnement, de correspondance ou d&apos;organisation du retour.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map(({ title, text, Icon }) => (
              <Card key={title} className="p-5">
                <Icon className="text-taxi-gold" size={30} />
                <h3 className="mt-4 text-xl font-black text-taxi-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-taxi-cream py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-taxi-gold">Idées de trajets</p>
            <h2 className="mt-2 text-3xl font-black text-taxi-black sm:text-4xl">Vignes, châteaux, musées et vallée de la Marne</h2>
            <p className="mt-4 leading-7 text-neutral-700">
              Pour une visite guidée, une sortie en cave, un week-end ou une journée découverte, Yas&apos;Taxii peut organiser votre prise en charge depuis l&apos;agglomération de Château-Thierry, une gare, un hébergement ou un lieu de visite.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/#reserver">Demander une réservation</ButtonLink>
              <ButtonLink href={tourismUrl} target="_blank" variant="dark">
                Voir les animations <ExternalLink size={16} />
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {places.map((place) => (
              <div key={place} className="flex items-center gap-3 rounded-md bg-white p-4 text-sm font-bold text-taxi-black shadow-sm">
                <MapPinned className="shrink-0 text-taxi-gold" size={20} />
                {place}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-taxi-black py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-taxi-gold">Réservation taxi tourisme</p>
            <h2 className="mt-2 text-3xl font-black">Préparez votre visite aux Portes de la Champagne</h2>
            <p className="mt-3 max-w-2xl text-white/70">Indiquez le lieu de prise en charge, les étapes souhaitées et le nombre de passagers dans le formulaire de réservation.</p>
          </div>
          <ButtonLink href="/#reserver">Réserver maintenant <ArrowRight size={16} /></ButtonLink>
        </div>
      </section>
    </>
  );
}
