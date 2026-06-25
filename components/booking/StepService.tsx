import { bookingServices } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { BookingDraft } from "@/components/booking/BookingWizard";

type Props = {
  draft: BookingDraft;
  setDraft: (draft: BookingDraft) => void;
  onBack: () => void;
  onNext: () => void;
};

export function StepService({ draft, setDraft, onBack, onNext }: Props) {
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2">
        {bookingServices.map(({ id, title, description, Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => setDraft({ ...draft, service: id })}
            className="rounded-lg border p-5 text-left transition data-[selected=true]:border-taxi-gold data-[selected=true]:bg-taxi-gold/10"
            data-selected={draft.service === id}
          >
            <Icon className="text-taxi-gold" size={28} />
            <div className="mt-4 text-lg font-black">{title}</div>
            <p className="mt-3 text-sm leading-6 text-neutral-600">{description}</p>
          </button>
        ))}
      </div>
      <div className="mt-6 flex justify-between gap-3">
        <Button variant="ghost" onClick={onBack}>Retour</Button>
        <Button onClick={onNext}>Continuer</Button>
      </div>
    </div>
  );
}
