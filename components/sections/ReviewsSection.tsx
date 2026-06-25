"use client";

import { ChevronLeft, ChevronRight, ExternalLink, Star } from "lucide-react";
import { useRef } from "react";
import { reviews } from "@/data/reviews";
import { siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function ReviewsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollReviews(direction: "previous" | "next") {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    scroller.scrollBy({
      left: direction === "next" ? scroller.clientWidth : -scroller.clientWidth,
      behavior: "smooth"
    });
  }

  return (
    <section id="avis" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-wide text-taxi-gold">Avis clients</p>
            <h2 className="mt-2 text-3xl font-black text-taxi-black sm:text-4xl">Une relation de confiance, trajet apres trajet</h2>
            <p className="mt-4 text-neutral-600">Note Google 5.0/5 basee sur {reviews.length} avis clients.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/avis" variant="dark">
              Voir tous les avis
            </ButtonLink>
            <ButtonLink href={siteConfig.googleReviewWriteUrl} target="_blank">
              Laisser un avis Google <ExternalLink size={16} />
            </ButtonLink>
          </div>
        </div>

        <div className="relative mt-10">
          <button
            type="button"
            onClick={() => scrollReviews("previous")}
            className="absolute -left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-neutral-200 bg-white text-taxi-black shadow-lg transition hover:bg-taxi-gold"
            aria-label="Avis precedent"
          >
            <ChevronLeft size={22} />
          </button>
          <div ref={scrollerRef} className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {reviews.map((review) => (
              <ReviewCard key={`${review.name}-${review.dateLabel}`} review={review} />
            ))}
          </div>
          <button
            type="button"
            onClick={() => scrollReviews("next")}
            className="absolute -right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-neutral-200 bg-white text-taxi-black shadow-lg transition hover:bg-taxi-gold"
            aria-label="Avis suivant"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="mt-5 text-center text-sm text-neutral-700">
          <strong>Google rating score: 5.0</strong> of 5, based on <strong>{reviews.length} reviews</strong>
        </div>
      </div>
    </section>
  );
}

type Review = (typeof reviews)[number];

export function ReviewCard({ review, compact = false }: { review: Review; compact?: boolean }) {
  return (
    <Card
      className={
        compact
          ? "p-5"
          : "flex min-h-72 shrink-0 basis-full snap-start flex-col p-6 text-center md:basis-[calc((100%_-_40px)/3)]"
      }
    >
      <div className={compact ? "flex gap-1 text-taxi-gold" : "mx-auto flex gap-1 text-taxi-gold"}>
        {Array.from({ length: review.rating }).map((_, index) => (
          <Star key={index} size={18} fill="currentColor" />
        ))}
      </div>
      <p className={compact ? "mt-4 text-sm leading-7 text-neutral-700" : "mx-auto mt-5 max-w-md text-sm leading-7 text-neutral-700"}>
        &quot;{review.text}&quot;
      </p>
      <div className={compact ? "mt-5 text-sm font-black text-taxi-black" : "mt-auto pt-6 text-sm font-black text-taxi-black"}>{review.name}</div>
      <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
        {review.source} - {review.dateLabel}
      </div>
    </Card>
  );
}
