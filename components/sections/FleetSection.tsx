import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { fleet } from "@/data/fleet";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function FleetSection() {
  return (
    <section id="flotte" className="bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-wide text-taxi-gold">Notre flotte</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">Taxi ou Taxi Van, selon vos passagers</h2>
            <p className="mt-4 text-white/70">Deux formats simples, lisibles et rassurants pour choisir le véhicule adapté au trajet.</p>
          </div>
          <ButtonLink href="/services" variant="secondary">
            Voir les services
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {fleet.map(({ id, name, passengers, description, image, Icon }) => (
            <Card key={id} className="overflow-hidden border-white/10 bg-white/[0.06] text-white shadow-2xl">
              <div className="relative h-64 bg-[radial-gradient(circle_at_50%_20%,rgba(244,176,0,0.16),transparent_45%),linear-gradient(180deg,#ffffff,#f4f4f4)]">
                <Image src={image} alt={`Véhicule ${name} Yas'Taxii`} fill className="object-contain p-5 transition duration-500 hover:scale-105" sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-3xl font-black">{name}</h3>
                    <p className="mt-3 text-white/70">{description}</p>
                  </div>
                  <Icon className="text-taxi-gold" size={38} />
                </div>
                <div className="mt-6 grid gap-3">
                  <div className="flex items-center gap-2 rounded-md bg-white/10 p-4 text-sm font-bold">
                    <CheckCircle2 className="text-taxi-green" size={18} />
                    {passengers}
                  </div>
                </div>
                <ButtonLink href="/#reserver" className="mt-6 w-full">
                  Réserver
                </ButtonLink>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
