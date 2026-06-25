import type { Metadata } from "next";
import type React from "react";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "@/app/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContactButtons } from "@/components/layout/FloatingContactButtons";
import { pageMetadata } from "@/lib/metadata";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = pageMetadata(
  "Yas'Taxii - Taxi conventionne Chateau-Thierry, Aisne, gares et aeroports",
  "Taxi conventionne a Chateau-Thierry pour transport medical, gares, aeroports CDG, Orly, Beauvais, courses privees et professionnelles dans l'Aisne."
);

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} bg-white font-sans text-neutral-900 antialiased`}>
        {process.env.NEXT_PUBLIC_GTM_ID ? <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} /> : null}
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContactButtons />
      </body>
    </html>
  );
}
