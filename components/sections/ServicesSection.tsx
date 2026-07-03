import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-wide text-taxi-gold">Prestations</p>
            <h2 className="mt-2 text-3xl font-black text-taxi-black sm:text-4xl">Nos différents services taxi</h2>
            <p className="mt-4 text-neutral-600">
              Un résumé clair des prestations Yas&apos;Taxii. Pour plus d&apos;informations, chaque service dispose d&apos;une section détaillée sur la page Services.
            </p>
          </div>
          <ButtonLink href="/services" variant="dark">
            Voir tous les services
          </ButtonLink>
        </div>
        <div className="mt-10 grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ id, slug, title, description, image, Icon }) => (
            <article
              key={id}
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-56">
                <Image src={image} alt={title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-taxi-black/45 via-transparent to-transparent" />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-5 text-taxi-black">
                <Icon className="text-taxi-gold" size={27} />
                <h3 className="min-h-14 text-xl font-black leading-tight text-taxi-black">{title}</h3>
                <p className="min-h-20 text-sm leading-6 text-neutral-600">{description}</p>
                <ServiceActions serviceId={id} slug={slug} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceActions({ serviceId, slug }: { serviceId: string; slug: string }) {
  const primary = getPrimaryAction(serviceId);

  return (
    <div className="mt-auto grid grid-cols-[minmax(0,7fr)_minmax(116px,3fr)] gap-2">
      <ButtonLink href={primary.href} variant="dark" className="h-12 min-w-0 px-3 text-center text-xs sm:text-sm">
        {primary.icon === "phone" ? <Phone className="shrink-0" size={16} /> : null}
        <span className="truncate">{primary.label}</span>
      </ButtonLink>
      <ButtonLink href={`/services#${slug}`} variant="primary" className="h-12 min-w-0 px-3 text-center text-xs sm:text-sm">
        <span className="truncate">En savoir plus</span>
        <ArrowRight className="shrink-0" size={15} />
      </ButtonLink>
    </div>
  );
}

function getPrimaryAction(serviceId: string) {
  if (serviceId === "medical" || serviceId === "tourism") {
    return { href: "/#reserver", label: "Réserver" };
  }

  if (serviceId === "assistance") {
    return { href: siteConfig.phoneHref, label: "Appeler", icon: "phone" };
  }

  return { href: "/#reserver", label: "Demander un devis" };
}
