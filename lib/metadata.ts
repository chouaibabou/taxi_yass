import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export function pageMetadata(title: string, description: string, path = "/"): Metadata {
  const url = `${siteConfig.siteUrl}${path}`;

  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title,
    description,
    keywords: siteConfig.seoKeywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "fr_FR",
      type: "website",
      images: [{ url: "/images/hero-taxi-premium.png", width: 1200, height: 630, alt: siteConfig.name }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/hero-taxi-premium.png"]
    }
  };
}
