import Image from "next/image";
import { ArrowRight, CalendarDays, MapPinned, Wine } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

export function TourismPartnershipSection() {
  return (
    <section className="bg-taxi-cream py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="grid content-center">
          <p className="text-sm font-black uppercase tracking-wide text-taxi-gold">Partenariat local</p>
          <h2 className="mt-2 text-3xl font-black text-taxi-black sm:text-4xl">Les Portes de la Champagne en taxi</h2>
          <p className="mt-4 leading-7 text-neutral-700">
            Yas&apos;Taxii accompagne vos sorties touristiques autour de Château-Thierry, des vignes de champagne, de la Vallée de la Marne et des sites culturels de la destination.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-md bg-white p-4 text-sm font-bold text-taxi-black shadow-sm">
              <Wine className="mb-2 text-taxi-gold" size={22} />
              Champagne
            </div>
            <div className="rounded-md bg-white p-4 text-sm font-bold text-taxi-black shadow-sm">
              <MapPinned className="mb-2 text-taxi-gold" size={22} />
              Patrimoine
            </div>
            <div className="rounded-md bg-white p-4 text-sm font-bold text-taxi-black shadow-sm">
              <CalendarDays className="mb-2 text-taxi-gold" size={22} />
              Visites guidées
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/portes-de-la-champagne">
              Découvrir l&apos;expérience <ArrowRight size={16} />
            </ButtonLink>
            <ButtonLink href="/#reserver" variant="dark">
              Réserver un taxi
            </ButtonLink>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-xl">
          <div className="relative min-h-72">
            <Image src="/images/hero-yastaxi-vignes-aeroport.jpeg" alt="Taxi Yas'Taxii dans les paysages des Portes de la Champagne" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-taxi-black/75 via-taxi-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="w-fit rounded-md bg-white p-3 shadow-lg">
                <Image src="/logo/portes-de-la-champagne.jpg" alt="Logo Les Portes de la Champagne Maison du tourisme" width={210} height={70} className="h-auto w-52" />
              </div>
              <p className="mt-4 max-w-xl text-lg font-black leading-7 text-white">
                Une destination entre Champagne, Brie, Marne, patrimoine et balades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
