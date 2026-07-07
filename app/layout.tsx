import type { Metadata } from "next";
import type React from "react";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "@/app/globals.css";
import { LocaleShell } from "@/components/layout/LocaleShell";
import { pageMetadata } from "@/lib/metadata";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  ...pageMetadata(
  "Yas'Taxii - Taxi conventionné Gandelu, Crézancy et Château-Thierry",
  "Taxi conventionné de Gandelu, Crézancy et toute l'agglomération de Château-Thierry pour transport médical, gares, aéroports CDG, Orly, Beauvais, courses privées et professionnelles."
  ),
  icons: {
    icon: [{ url: "/logo/yastaxii-favicon.jpg", sizes: "32x32", type: "image/jpeg" }],
    shortcut: "/logo/yastaxii-favicon.jpg",
    apple: [{ url: "/logo/yastaxii-favicon.jpg", sizes: "180x180", type: "image/jpeg" }]
  },
  alternates: {
    languages: {
      fr: "/",
      en: "/en",
      es: "/es",
      de: "/de"
    }
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} bg-white font-sans text-neutral-900 antialiased`}>
        {process.env.NEXT_PUBLIC_GTM_ID ? <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} /> : null}
        <LocaleShell>{children}</LocaleShell>
      </body>
    </html>
  );
}
