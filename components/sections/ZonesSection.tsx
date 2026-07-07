"use client";

import { MapPinned } from "lucide-react";
import { zones } from "@/data/zones";
import { siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { trackConversion } from "@/lib/tracking";

export function ZonesSection() {
  return (
    <section id="zones" className="bg-taxi-cream py-8">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-wide text-taxi-gold">Zones desservies</p>
          <h2 className="mt-2 text-3xl font-black text-taxi-black sm:text-4xl">Taxi local dans l&apos;agglomération de Château-Thierry</h2>
          <p className="mt-4 text-neutral-700">Départ depuis Gandelu, Crézancy, Château-Thierry et secteurs voisins pour gares, aéroports, rendez-vous médicaux, entreprises et trajets toutes distances.</p>
          <ButtonLink href={siteConfig.mapsUrl} target="_blank" variant="dark" className="mt-6" onClick={() => trackConversion("maps_click")}>Ouvrir Google Maps</ButtonLink>
        </div>
        <div className="relative min-h-80 overflow-hidden rounded-lg bg-taxi-black p-6 text-white">
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:34px_34px]" />
          <MapPinned className="relative text-taxi-gold" size={42} />
          <div className="relative mt-6 grid gap-3 sm:grid-cols-2">
            {zones.map((zone) => (
              <div key={zone} className="rounded-md border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold">{zone}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

