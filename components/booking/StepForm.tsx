import { FormEvent, useMemo, useState } from "react";
import { getPageTranslations } from "@/data/page-translations";
import { getTranslations } from "@/data/translations";
import { useLocale } from "@/lib/locale-context";
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
  const [appointmentReason, setAppointmentReason] = useState(String(draft.appointmentReason || ""));
  const locale = useLocale();
  const t = getTranslations(locale);
  const pt = getPageTranslations(locale);
  const service = draft.service || "medical";
  const [businessTripType, setBusinessTripType] = useState(String(draft.businessTripType || t.booking.options.professionalTrip));
  const submitLabel = service === "airport" || service === "business" ? t.common.quote : `${t.common.book} / ${t.common.quote}`;
  const passengerMax = draft.vehicle === "van" ? 8 : 6;
  const fields = useMemo(() => getFields(service, t), [service, t]);
  const isBusinessPersonalTrip = service === "business" && businessTripType === t.booking.options.personalTrip;

  function isFieldRequired(field: Field) {
    if (service === "business" && field.name === "company") {
      return !isBusinessPersonalTrip;
    }

    return Boolean(field.required);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formValues: Record<string, string> = Object.fromEntries(
      Array.from(new FormData(event.currentTarget).entries()).map(([key, value]) => [key, String(value)])
    );
    const nextErrors: Record<string, string> = {};

    fields.forEach((field) => {
      if (isFieldRequired(field) && !String(formValues[field.name] || "").trim()) {
        nextErrors[field.name] = t.booking.errors.required;
      }
    });

    if (service === "medical" && formValues.appointmentReason === t.booking.options.other && !String(formValues.appointmentReasonOther || "").trim()) {
      nextErrors.appointmentReasonOther = t.booking.errors.precise;
    }

    if (formValues.passengers) {
      const passengerCount = Number(formValues.passengers);
      if (!Number.isInteger(passengerCount) || passengerCount < 1 || passengerCount > passengerMax) {
        nextErrors.passengers = draft.vehicle === "van" ? t.booking.errors.vanPassengers : t.booking.errors.taxiPassengers;
      }
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setDraft({ ...draft, ...(formValues as BookingDraft) });
      onNext();
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <p className="text-right text-xs font-medium text-neutral-500">
        <span className="text-red-600">*</span> {pt.requiredFields}
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {fields.map((field) => {
          const required = isFieldRequired(field);

          return field.kind === "address" ? (
            <AddressAutocomplete
              key={field.name}
              id={field.name}
              name={field.name}
              label={field.label}
              required={required}
              defaultValue={String(draft[field.name as keyof BookingDraft] || "")}
              error={errors[field.name]}
            />
          ) : field.kind === "select" ? (
            <label key={field.name} className="grid gap-2 text-sm font-semibold">
              <FieldLabel label={field.label} required={required} />
              <select
                name={field.name}
                required={required}
                defaultValue={String(draft[field.name as keyof BookingDraft] || (field.name === "businessTripType" ? t.booking.options.professionalTrip : ""))}
                onChange={(event) => {
                  if (field.name === "appointmentReason") {
                    setAppointmentReason(event.target.value);
                  }
                  if (field.name === "businessTripType") {
                    setBusinessTripType(event.target.value);
                  }
                }}
                className="h-12 rounded-md border border-neutral-200 bg-white px-4 outline-none focus:border-taxi-gold focus:ring-4 focus:ring-taxi-gold/20"
              >
                <option value="">{t.common.choose}</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors[field.name] ? <span className="text-xs font-medium text-red-600">{errors[field.name]}</span> : null}
            </label>
          ) : field.name === "passengers" ? (
            <label key={field.name} className="grid gap-2 text-sm font-semibold">
              <FieldLabel label={`${field.label} (${draft.vehicle === "van" ? "1-8" : "1-6"})`} required={required} />
              <select
                name={field.name}
                required={required}
                defaultValue={
                  Number(draft.passengers || "0") >= 1 && Number(draft.passengers || "0") <= passengerMax
                    ? String(draft.passengers)
                    : ""
                }
                className="h-12 rounded-md border border-neutral-200 bg-white px-4 outline-none focus:border-taxi-gold focus:ring-4 focus:ring-taxi-gold/20"
              >
                <option value="">{t.common.choose}</option>
                {Array.from({ length: passengerMax }, (_, index) => String(index + 1)).map((passengerCount) => (
                  <option key={passengerCount} value={passengerCount}>
                    {passengerCount}
                  </option>
                ))}
              </select>
              {errors[field.name] ? <span className="text-xs font-medium text-red-600">{errors[field.name]}</span> : null}
            </label>
          ) : (
            <label key={field.name} className="grid gap-2 text-sm font-semibold">
              <FieldLabel label={field.label} required={required} />
              <input
                name={field.name}
                type={field.type || "text"}
                required={required}
                defaultValue={String(draft[field.name as keyof BookingDraft] || "")}
                className="h-12 rounded-md border border-neutral-200 px-4 outline-none focus:border-taxi-gold focus:ring-4 focus:ring-taxi-gold/20"
              />
              {errors[field.name] ? <span className="text-xs font-medium text-red-600">{errors[field.name]}</span> : null}
            </label>
          );
        })}
        {service === "medical" && appointmentReason === t.booking.options.other ? (
          <label className="grid gap-2 text-sm font-semibold">
            <FieldLabel label={t.booking.fields.appointmentReasonOther} required />
            <input
              name="appointmentReasonOther"
              required
              defaultValue={String(draft.appointmentReasonOther || "")}
              className="h-12 rounded-md border border-neutral-200 px-4 outline-none focus:border-taxi-gold focus:ring-4 focus:ring-taxi-gold/20"
            />
            {errors.appointmentReasonOther ? <span className="text-xs font-medium text-red-600">{errors.appointmentReasonOther}</span> : null}
          </label>
        ) : null}
      </div>
      <label className="grid gap-2 text-sm font-semibold">
        {t.booking.fields.comment}
        <textarea name="comment" defaultValue={String(draft.comment || "")} rows={4} className="rounded-md border border-neutral-200 px-4 py-3 outline-none focus:border-taxi-gold focus:ring-4 focus:ring-taxi-gold/20" />
      </label>
      <div className="flex justify-between gap-3">
        <Button type="button" variant="ghost" onClick={onBack}>
          {t.common.back}
        </Button>
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

function FieldLabel({ label, required }: { label: string; required?: boolean }) {
  return (
    <span>
      {label}
      {required ? <span className="ml-1 text-red-600">*</span> : null}
    </span>
  );
}

function commonClientFields(t: ReturnType<typeof getTranslations>): Field[] {
  return [
    { name: "fullName", label: t.booking.fields.fullName, required: true },
    { name: "email", label: t.booking.fields.email, type: "email", required: true },
    { name: "phone", label: t.booking.fields.phone, required: true },
    { name: "pickupAddress", label: t.booking.fields.pickupAddress, required: true, kind: "address" }
  ];
}

function getFields(service: string, t: ReturnType<typeof getTranslations>): Field[] {
  if (service === "medical") {
    return [
      ...commonClientFields(t),
      { name: "destinationAddress", label: t.booking.fields.destinationAddress, required: true, kind: "address" },
      { name: "appointmentReason", label: t.booking.fields.appointmentReason, required: true, kind: "select", options: [t.booking.options.dayHospital, t.booking.options.consultation, t.booking.options.other] },
      { name: "appointmentDate", label: t.booking.fields.appointmentDate, required: true, type: "date" },
      { name: "appointmentTime", label: t.booking.fields.appointmentTime, required: true, type: "time" }
    ];
  }

  if (service === "airport") {
    return [
      ...commonClientFields(t),
      { name: "destinationAddress", label: t.booking.fields.destinationAddress, required: true, kind: "address" },
      { name: "passengers", label: t.booking.fields.passengers, required: true, type: "number" },
      { name: "luggage", label: t.booking.fields.luggage, required: true, type: "number" },
      { name: "babySeat", label: t.booking.fields.babySeat, required: true, kind: "select", options: [t.booking.options.yes, t.booking.options.no] },
      { name: "flightOrTrainNumber", label: t.booking.fields.flightOrTrainNumber },
      { name: "departureDateTime", label: t.booking.fields.departureDateTime, required: true, type: "datetime-local" }
    ];
  }

  if (service === "event") {
    return [
      ...commonClientFields(t),
      { name: "eventAddress", label: t.booking.fields.eventAddress, required: true, kind: "address" },
      { name: "eventDate", label: t.booking.fields.eventDate, required: true, type: "date" },
      { name: "pickupTime", label: t.booking.fields.pickupTime, required: true, type: "time" },
      { name: "returnTime", label: t.booking.fields.returnTime, required: true, type: "time" },
      { name: "passengers", label: t.booking.fields.passengers, required: true, type: "number" }
    ];
  }

  return [
    { name: "businessTripType", label: t.booking.fields.businessTripType, required: true, kind: "select", options: [t.booking.options.professionalTrip, t.booking.options.personalTrip] },
    { name: "company", label: t.booking.fields.company },
    { name: "contactName", label: t.booking.fields.contactName, required: true },
    { name: "businessEmail", label: t.booking.fields.businessEmail, type: "email", required: true },
    { name: "phone", label: t.booking.fields.phone, required: true },
    { name: "pickupAddress", label: t.booking.fields.pickupAddress, required: true, kind: "address" },
    { name: "eventAddress", label: t.booking.fields.eventAddress, required: true, kind: "address" },
    { name: "eventDate", label: t.booking.fields.eventDate, required: true, type: "date" },
    { name: "pickupTime", label: t.booking.fields.pickupTime, required: true, type: "time" },
    { name: "returnTime", label: t.booking.fields.returnTime, required: true, type: "time" },
    { name: "passengers", label: t.booking.fields.passengers, required: true, type: "number" },
    { name: "invoiceNeeded", label: t.booking.fields.invoiceNeeded, required: true, kind: "select", options: [t.booking.options.yes, t.booking.options.no] },
    { name: "tripFrequency", label: t.booking.fields.tripFrequency, required: true, kind: "select", options: [t.booking.options.oneTime, t.booking.options.recurring] }
  ];
}
