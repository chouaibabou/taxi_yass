import { Button } from "@/components/ui/Button";
import { BookingDraft } from "@/components/booking/BookingWizard";

type Props = {
  draft: BookingDraft;
  onBack: () => void;
  onSend: () => void;
};

const labels: Record<string, string> = {
  vehicle: "Vehicule choisi",
  service: "Prestation choisie",
  fullName: "Nom et prenom",
  company: "Societe",
  contactName: "Contact",
  email: "Email",
  businessEmail: "Email professionnel",
  phone: "Telephone",
  pickupAddress: "Prise en charge",
  destinationAddress: "Arrivee",
  eventAddress: "Evenement / rendez-vous",
  appointmentReason: "Motif",
  appointmentDate: "Date rendez-vous",
  appointmentTime: "Heure rendez-vous",
  departureDateTime: "Depart",
  eventDate: "Date",
  pickupTime: "Heure prise en charge",
  returnTime: "Heure retour",
  passengers: "Passagers",
  luggage: "Bagages",
  babySeat: "Siege bebe",
  flightOrTrainNumber: "Vol / train",
  invoiceNeeded: "Facture",
  tripFrequency: "Trajet",
  comment: "Commentaire"
};

export function StepConfirmation({ draft, onBack, onSend }: Props) {
  const entries = Object.entries(draft).filter(([, value]) => value);

  return (
    <div>
      <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
        <div className="mb-4 text-lg font-black">Recapitulatif avant envoi</div>
        <dl className="grid gap-3 md:grid-cols-2">
          {entries.map(([key, value]) => (
            <div key={key} className="rounded-md bg-white p-3">
              <dt className="text-xs font-black uppercase tracking-wide text-neutral-500">{labels[key] || key}</dt>
              <dd className="mt-1 break-words text-sm font-semibold text-taxi-black">{String(value)}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="mt-6 flex justify-between gap-3">
        <Button type="button" variant="ghost" onClick={onBack}>Modifier</Button>
        <Button type="button" onClick={onSend}>Envoyer</Button>
      </div>
    </div>
  );
}
