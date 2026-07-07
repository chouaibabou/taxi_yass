import DestinationsPage from "@/app/destinations/page";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function LocalizedDestinationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <DestinationsPage />;
}
