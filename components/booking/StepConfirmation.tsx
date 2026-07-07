import { getTranslations } from "@/data/translations";
import { useLocale } from "@/lib/locale-context";
import { Button } from "@/components/ui/Button";
import { BookingDraft } from "@/components/booking/BookingWizard";

type Props = {
  draft: BookingDraft;
  onBack: () => void;
  onSend: () => void;
};

export function StepConfirmation({ draft, onBack, onSend }: Props) {
  const locale = useLocale();
  const t = getTranslations(locale);
  const entries = Object.entries(draft).filter(([, value]) => value);
  const labels = t.booking.confirmationLabels as Record<string, string>;
  const formatValue = (key: string, value: unknown) => {
    if (key === "vehicle") {
      return value === "eco" ? "Taxi" : "Taxi Van";
    }

    return String(value);
  };

  return (
    <div>
      <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
        <div className="mb-4 text-lg font-black">{t.booking.confirmTitle}</div>
        <dl className="grid gap-3 md:grid-cols-2">
          {entries.map(([key, value]) => (
            <div key={key} className="rounded-md bg-white p-3">
              <dt className="text-xs font-black uppercase tracking-wide text-neutral-500">{labels[key] || key}</dt>
              <dd className="mt-1 break-words text-sm font-semibold text-taxi-black">{formatValue(key, value)}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="mt-6 flex justify-between gap-3">
        <Button type="button" variant="ghost" onClick={onBack}>
          {t.common.edit}
        </Button>
        <Button type="button" onClick={onSend}>
          {t.common.send}
        </Button>
      </div>
    </div>
  );
}
