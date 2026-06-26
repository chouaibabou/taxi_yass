import { ExternalLink } from "lucide-react";
import { reviews } from "@/data/reviews";
import { siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { ReviewCard } from "@/components/sections/ReviewsSection";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Avis clients Yas'Taxii - Taxi Chateau-Thierry",
  "Consultez les avis clients Google de Yas'Taxii, taxi conventionne a Chateau-Thierry pour transport medical, gares, aeroports et trajets professionnels.",
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
            Des retours clients pour mieux comprendre la qualite de service : ponctualite, conduite rassurante, accueil et confort.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={siteConfig.googleReviewWriteUrl} target="_blank">
              Laisser un avis Google <ExternalLink size={16} />
            </ButtonLink>
            <ButtonLink href="/#reserver" variant="secondary">
              Reserver un trajet
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-taxi-gold">Google</p>
              <h2 className="mt-2 text-3xl font-black text-taxi-black">Tous les avis clients</h2>
            </div>
            <div className="rounded-lg bg-taxi-cream p-4 text-sm text-neutral-700">
              <strong>Google rating score: {siteConfig.googleRating.toFixed(1)}</strong> of 5, based on <strong>{siteConfig.googleReviewCount} reviews</strong>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard key={`${review.name}-${review.dateLabel}`} review={review} compact />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
