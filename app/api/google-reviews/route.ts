import { NextResponse } from "next/server";
import { reviews as fallbackReviews } from "@/data/reviews";
import { siteConfig } from "@/data/site";

export const runtime = "nodejs";

type GooglePlaceReview = {
  name?: string;
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: {
    text?: string;
  };
  authorAttribution?: {
    displayName?: string;
  };
};

type GooglePlaceResponse = {
  rating?: number;
  userRatingCount?: number;
  reviews?: GooglePlaceReview[];
};

function fallbackResponse(error?: string) {
  return NextResponse.json(
    {
      ok: false,
      error,
      rating: siteConfig.googleRating,
      reviewCount: siteConfig.googleReviewCount,
      reviews: fallbackReviews
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=3600"
      }
    }
  );
}

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return fallbackResponse("Google Places is not configured");
  }

  try {
    const response = await fetch(`https://places.googleapis.com/v1/places/${placeId}?languageCode=fr&regionCode=FR`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews"
      },
      next: {
        revalidate: 60 * 60 * 6
      }
    });

    if (!response.ok) {
      return fallbackResponse(`Google Places responded with ${response.status}`);
    }

    const place = (await response.json()) as GooglePlaceResponse;
    const googleReviews =
      place.reviews
        ?.filter((review) => review.text?.text || review.rating)
        .map((review) => ({
          name: review.authorAttribution?.displayName || "Client Google",
          rating: Math.max(1, Math.min(5, Math.round(review.rating || 5))),
          dateLabel: review.relativePublishTimeDescription || "Avis Google",
          text: review.text?.text || "Ce client a laisse une note.",
          source: "Google" as const
        })) || [];

    return NextResponse.json(
      {
        ok: true,
        rating: place.rating || siteConfig.googleRating,
        reviewCount: place.userRatingCount || siteConfig.googleReviewCount,
        reviews: googleReviews.length ? googleReviews : fallbackReviews
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=21600, stale-while-revalidate=86400"
        }
      }
    );
  } catch {
    return fallbackResponse("Google Places request failed");
  }
}
