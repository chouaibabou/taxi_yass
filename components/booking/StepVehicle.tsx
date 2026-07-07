import { getLocalizedFleet } from "@/data/localized";
import { getTranslations } from "@/data/translations";
import { useLocale } from "@/lib/locale-context";
import { Button } from "@/components/ui/Button";
import { BookingDraft } from "@/components/booking/BookingWizard";

type Props = {
  draft: BookingDraft;
  setDraft: (draft: BookingDraft) => void;
  onNext: () => void;
};

export function StepVehicle({ draft, setDraft, onNext }: Props) {
  const locale = useLocale();
  const t = getTranslations(locale);
  const fleet = getLocalizedFleet(locale);

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2">
        {fleet.map(({ id, name, passengers, description, Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => setDraft({ ...draft, vehicle: id })}
            className="rounded-lg border p-5 text-left transition data-[selected=true]:border-taxi-gold data-[selected=true]:bg-taxi-gold/10"
            data-selected={draft.vehicle === id}
          >
            <Icon className="text-taxi-gold" size={28} />
            <div className="mt-4 text-2xl font-black">{name}</div>
            <div className="mt-2 text-sm font-bold text-neutral-600">{passengers}</div>
            <p className="mt-3 text-sm leading-6 text-neutral-600">{description}</p>
          </button>
        ))}
      </div>
      <div className="mt-6 flex justify-end">
        <Button onClick={onNext}>{t.common.continue}</Button>
      </div>
    </div>
  );
}
