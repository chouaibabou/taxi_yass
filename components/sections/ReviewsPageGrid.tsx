"use client";

import { useEffect, useState } from "react";
import { Review, reviews } from "@/data/reviews";
import { getPageTranslations } from "@/data/page-translations";
import { siteConfig } from "@/data/site";
import { useLocale } from "@/lib/locale-context";
import { ReviewCard } from "@/components/sections/ReviewsSection";

export function ReviewsPageGrid() {
  const locale = useLocale();
  const page = getPageTranslations(locale).reviews;
  const [googleRating, setGoogleRating] = useState(siteConfig.googleRating);
  const [googleReviewCount, setGoogleReviewCount] = useState(siteConfig.googleReviewCount);
  const [displayReviews, setDisplayReviews] = useState<Review[]>(reviews);

  useEffect(() => {
    let cancelled = false;

    async function loadGoogleReviews() {
      try {
        const response = await fetch("/api/google-reviews");
        if (!response.ok) return;

        const data = (await response.json()) as {
          rating?: number;
          reviewCount?: number;
          reviews?: Review[];
        };

        if (cancelled) return;
        setGoogleRating(data.rating || siteConfig.googleRating);
        setGoogleReviewCount(data.reviewCount || siteConfig.googleReviewCount);
        if (data.reviews?.length) {
          setDisplayReviews(data.reviews);
        }
      } catch {
        // Keep manual reviews visible if Google is unavailable.
      }
    }

    loadGoogleReviews();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-wide text-taxi-gold">Google</p>
          <h2 className="mt-2 text-3xl font-black text-taxi-black">{page.googleTitle}</h2>
        </div>
        <div className="rounded-lg bg-taxi-cream p-4 text-sm text-neutral-700">
          <strong>{page.score}: {googleRating.toFixed(1)}</strong>/5, {page.basedOn}{" "}
          <strong>{googleReviewCount} {page.reviews}</strong>
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {displayReviews.map((review) => (
          <ReviewCard key={`${review.name}-${review.dateLabel}`} review={review} compact />
        ))}
      </div>
    </>
  );
}
