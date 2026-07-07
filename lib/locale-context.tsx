"use client";

import { createContext, useContext } from "react";
import type React from "react";
import { defaultLocale, Locale } from "@/lib/i18n";

const LocaleContext = createContext<Locale>(defaultLocale);

export function LocaleProvider({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}
