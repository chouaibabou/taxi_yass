import { FormEvent, useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { BookingDraft } from "@/components/booking/BookingWizard";
import { AddressAutocomplete } from "@/lib/address-autocomplete";

type Props = {
  draft: BookingDraft;
  setDraft: (draft: BookingDraft) => void;
  onBack: () => void;
  onNext: () => void;
};

export function StepForm({ draft, setDraft, onBack, onNext }: Props) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const service = draft.service || "medical";
  const submitLabel = service === "airport" || service === "business" ? "Demander un devis" : "Reserver / Demander un devis";

  const fields = useMemo(() => getFields(service), [service]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formValues: Record<string, string> = Object.fromEntries(
      Array.from(new FormData(event.currentTarget).entries()).map(([key, value]) => [key, String(value)])
    );
    const nextErrors: Record<string, string> = {};
    fields.forEach((field) => {
      if (field.required && !String(formValues[field.name] || "").trim()) {
        nextErrors[field.name] = "Champ obligatoire";
      }
    });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setDraft({ ...draft, ...(formValues as BookingDraft) });
      onNext();
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        {fields.map((field) => field.kind === "address" ? (
          <AddressAutocomplete key={field.name} id={field.name} name={field.name} label={field.label} defaultValue={String(draft[field.name as keyof BookingDraft] || "")} error={errors[field.name]} />
        ) : field.kind === "select" ? (
          <label key={field.name} className="grid gap-2 text-sm font-semibold">
            {field.label}
            <select name={field.name} defaultValue={String(draft[field.name as keyof BookingDraft] || "")} className="h-12 rounded-md border border-neutral-200 bg-white px-4 outline-none focus:border-taxi-gold focus:ring-4 focus:ring-taxi-gold/20">
              <option value="">Choisir</option>
              {field.options?.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
            {errors[field.name] ? <span className="text-xs font-medium text-red-600">{errors[field.name]}</span> : null}
          </label>
        ) : (
          <label key={field.name} className="grid gap-2 text-sm font-semibold">
            {field.label}
            <input name={field.name} type={field.type || "text"} defaultValue={String(draft[field.name as keyof BookingDraft] || "")} className="h-12 rounded-md border border-neutral-200 px-4 outline-none focus:border-taxi-gold focus:ring-4 focus:ring-taxi-gold/20" />
            {errors[field.name] ? <span className="text-xs font-medium text-red-600">{errors[field.name]}</span> : null}
          </label>
        ))}
      </div>
      <label className="grid gap-2 text-sm font-semibold">
        Commentaire optionnel
        <textarea name="comment" defaultValue={String(draft.comment || "")} rows={4} className="rounded-md border border-neutral-200 px-4 py-3 outline-none focus:border-taxi-gold focus:ring-4 focus:ring-taxi-gold/20" />
      </label>
      <div className="flex justify-between gap-3">
        <Button type="button" variant="ghost" onClick={onBack}>Retour</Button>
        <Button type="submit">{submitLabel}</Button>
      </div>
    </form>
  );
}

type Field = {
  name: string;
  label: string;
  required?: boolean;
  type?: string;
  kind?: "input" | "address" | "select";
  options?: string[];
};

function commonClientFields(): Field[] {
  return [
    { name: "fullName", label: "Nom et prenom", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Telephone", required: true },
    { name: "pickupAddress", label: "Adresse de prise en charge", required: true, kind: "address" }
  ];
}

function getFields(service: string): Field[] {
  if (service === "medical") {
    return [
      ...commonClientFields(),
      { name: "destinationAddress", label: "Adresse d'arrivee", required: true, kind: "address" },
      { name: "appointmentReason", label: "Motif du rendez-vous", required: true, kind: "select", options: ["Hopital de jour / HDJ", "Hospitalisation", "Consultation"] },
      { name: "appointmentDate", label: "Date du rendez-vous", required: true, type: "date" },
      { name: "appointmentTime", label: "Heure du rendez-vous", required: true, type: "time" }
    ];
  }
  if (service === "airport") {
    return [
      ...commonClientFields(),
      { name: "destinationAddress", label: "Adresse d'arrivee", required: true, kind: "address" },
      { name: "passengers", label: "Nombre de passagers", required: true, type: "number" },
      { name: "luggage", label: "Nombre de bagages", required: true, type: "number" },
      { name: "babySeat", label: "Besoin d'un siege bebe", required: true, kind: "select", options: ["Oui", "Non"] },
      { name: "flightOrTrainNumber", label: "Numero de vol ou train optionnel" },
      { name: "departureDateTime", label: "Date et heure de depart", required: true, type: "datetime-local" }
    ];
  }
  if (service === "event") {
    return [
      ...commonClientFields(),
      { name: "eventAddress", label: "Adresse de l'evenement", required: true, kind: "address" },
      { name: "eventDate", label: "Date de l'evenement", required: true, type: "date" },
      { name: "pickupTime", label: "Heure de prise en charge souhaitee", required: true, type: "time" },
      { name: "returnTime", label: "Heure de retour", required: true, type: "time" },
      { name: "passengers", label: "Nombre de passagers", required: true, type: "number" }
    ];
  }
  return [
    { name: "company", label: "Nom de la societe", required: true },
    { name: "contactName", label: "Nom du contact", required: true },
    { name: "businessEmail", label: "Email professionnel", type: "email", required: true },
    { name: "phone", label: "Telephone", required: true },
    { name: "pickupAddress", label: "Adresse de prise en charge", required: true, kind: "address" },
    { name: "eventAddress", label: "Adresse de l'evenement ou du rendez-vous", required: true, kind: "address" },
    { name: "eventDate", label: "Date", required: true, type: "date" },
    { name: "pickupTime", label: "Heure de prise en charge", required: true, type: "time" },
    { name: "returnTime", label: "Heure de retour", required: true, type: "time" },
    { name: "passengers", label: "Nombre de passagers", required: true, type: "number" },
    { name: "invoiceNeeded", label: "Besoin d'une facture", required: true, kind: "select", options: ["Oui", "Non"] },
    { name: "tripFrequency", label: "Trajet", required: true, kind: "select", options: ["Ponctuel", "Recurrent"] }
  ];
}
