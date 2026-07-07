export const locales = ["fr", "en", "es", "de"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export const localeLabels: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
  es: "ES",
  de: "DE"
};

export const localeNames: Record<Locale, string> = {
  fr: "Francais",
  en: "English",
  es: "Espanol",
  de: "Deutsch"
};

export function isLocale(value: string | undefined): value is Locale {
  return Boolean(value && locales.includes(value as Locale));
}

export function localizedPath(path: string, locale: Locale) {
  if (locale === defaultLocale) {
    return path;
  }

  if (path === "/") {
    return `/${locale}`;
  }

  if (path.startsWith("/#")) {
    return `/${locale}${path}`;
  }

  return `/${locale}${path}`;
}

export function stripLocale(path: string) {
  const [first, ...rest] = path.split("/").filter(Boolean);

  if (isLocale(first)) {
    return `/${rest.join("/")}` || "/";
  }

  return path || "/";
}
