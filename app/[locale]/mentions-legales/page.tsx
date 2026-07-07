import LegalPage from "@/app/mentions-legales/page";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function LocalizedLegalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <LegalPage />;
}
