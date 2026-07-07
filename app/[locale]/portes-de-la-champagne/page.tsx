import TourismPage from "@/app/portes-de-la-champagne/page";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function LocalizedTourismPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <TourismPage />;
}
