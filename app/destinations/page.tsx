import { MapPinned } from "lucide-react";
import { zones } from "@/data/zones";
import { ButtonLink } from "@/components/ui/Button";
import { DestinationsRequestForm } from "@/components/sections/DestinationsRequestForm";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Destinations taxi Aisne - Partenaires Yas'Taxii",
  "Demandez un taxi pour Chateau-Thierry, Aisne, Soissons, Laon, Reims, Epernay, Paris, CDG, Orly, Beauvais et villes voisines.",
  "/destinations"
);

export default function DestinationsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-taxi-black py-20 text-white">
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="inline-flex rounded-md bg-taxi-gold px-3 py-2 text-sm font-black uppercase tracking-wide text-taxi-black">
            Destinations
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">Taxi dans l&apos;Aisne, vers Paris et les grands axes</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">
            Pour certaines zones, Yas&apos;Taxii peut travailler avec des taxis partenaires afin de traiter votre demande rapidement et vous orienter vers une solution adaptee.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#demande-destination">Faire une demande</ButtonLink>
            <ButtonLink href="/#reserver" variant="secondary">Reservation classique</ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-wide text-taxi-gold">Zones desservies</p>
            <h2 className="mt-2 text-3xl font-black text-taxi-black sm:text-4xl">Selectionnez votre secteur de depart ou d&apos;arrivee</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {zones.map((zone) => (
              <a key={zone} href="#demande-destination" className="group rounded-lg border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-taxi-gold hover:shadow-xl">
                <MapPinned className="text-taxi-gold" size={28} />
                <h3 className="mt-4 text-xl font-black text-taxi-black">{zone}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">Cliquez pour faire une demande de trajet sur cette destination ou ce secteur.</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div id="demande-destination">
        <DestinationsRequestForm />
      </div>
    </>
  );
}
