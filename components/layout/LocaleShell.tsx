"use client";

import { usePathname } from "next/navigation";
import type React from "react";
import { FloatingContactButtons } from "@/components/layout/FloatingContactButtons";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollToTopButton } from "@/components/layout/ScrollToTopButton";
import { defaultLocale, isLocale } from "@/lib/i18n";
import { LocaleProvider } from "@/lib/locale-context";

export function LocaleShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  const locale = isLocale(firstSegment) ? firstSegment : defaultLocale;

  return (
    <LocaleProvider locale={locale}>
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollToTopButton />
      <FloatingContactButtons />
    </LocaleProvider>
  );
}
