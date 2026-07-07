import { ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { ReviewsPageGrid } from "@/components/sections/ReviewsPageGrid";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Avis clients Yas'Taxii - Taxi Château-Thierry",
  "Consultez les avis clients Google de Yas'Taxii, taxi conventionné de Gandelu, Crézancy et toute l'agglomération de Château-Thierry pour transport médical, gares, aéroports et trajets professionnels.",
  "/avis"
);

export default function AvisPage() {
  return (
    <>
      <section className="bg-taxi-black py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="inline-flex rounded-md bg-taxi-gold px-3 py-2 text-sm font-black uppercase tracking-wide text-taxi-black">
            Avis clients
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">Les avis Google de Yas&apos;Taxii</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">
            Des retours clients pour mieux comprendre la qualité de service : ponctualité, conduite rassurante, accueil et confort.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={siteConfig.googleReviewWriteUrl} target="_blank">
              Laisser un avis Google <ExternalLink size={16} />
            </ButtonLink>
            <ButtonLink href="/#reserver" variant="secondary">
              Réserver un trajet
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ReviewsPageGrid />
        </div>
      </section>
    </>
  );
}
