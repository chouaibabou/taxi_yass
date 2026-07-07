import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { defaultLocale, locales, localizedPath } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/portes-de-la-champagne", "/destinations", "/avis", "/mentions-legales", "/politique-confidentialite"];

  return routes.flatMap((route) =>
    locales.map((locale) => {
      const path = route || "/";
      const urlPath = locale === defaultLocale ? route : localizedPath(path, locale);

      return {
        url: `${siteConfig.siteUrl}${urlPath}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route === "" && locale === defaultLocale ? 1 : 0.6
      };
    })
  );
}
