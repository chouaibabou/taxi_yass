"use client";

import { Baby, Bike, Cable, CheckCircle2, CircleDot, PlugZap, Snowflake, Sofa } from "lucide-react";
import { useMemo, useState } from "react";
import { FleetId } from "@/data/fleet";
import { ServiceId } from "@/data/services";
import { getTranslations } from "@/data/translations";
import { BookingPayload } from "@/lib/booking-schema";
import { useLocale } from "@/lib/locale-context";
import { trackConversion } from "@/lib/tracking";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { StepConfirmation } from "@/components/booking/StepConfirmation";
import { StepForm } from "@/components/booking/StepForm";
import { StepService } from "@/components/booking/StepService";
import { StepVehicle } from "@/components/booking/StepVehicle";

export type BookingDraft = Partial<BookingPayload> & {
  vehicle?: FleetId;
  service?: ServiceId;
};

const comfortIcons = [Baby, CircleDot, Baby, Sofa, Snowflake, PlugZap, Cable, Bike];

export function BookingWizard() {
  const locale = useLocale();
  const t = getTranslations(locale);
  const [step, setStep] = useState(1);
  const [draft, setDraft] = useState<BookingDraft>({ vehicle: "eco", service: "medical" });
  const [sent, setSent] = useState(false);
  const currentLabel = useMemo(() => t.booking.steps[step - 1], [step, t.booking.steps]);

  function resetWizard() {
    setDraft({ vehicle: "eco", service: "medical" });
    setStep(1);
    setSent(false);
  }

  async function send() {
    const response = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(draft)
    });

    if (response.ok) {
      const event = draft.service === "airport" || draft.service === "business" ? "quote_sent" : "reservation_sent";
      trackConversion(event, { service: draft.service, vehicle: draft.vehicle });
      trackConversion("booking_sent", { service: draft.service, vehicle: draft.vehicle });
      setSent(true);
    }
  }

  return (
    <section id="reserver" className="bg-taxi-black py-20 text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-wide text-taxi-gold">{t.booking.eyebrow}</p>
          <h2 className="mt-2 text-3xl font-black sm:text-4xl">{t.booking.title}</h2>
          <p className="mt-4 text-white/70">{t.booking.intro}</p>
        </div>

        <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.06] p-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-taxi-gold">{t.booking.comfortEyebrow}</p>
              <h3 className="mt-1 text-2xl font-black">{t.booking.comfortTitle}</h3>
            </div>
            <p className="text-sm text-white/65">{t.booking.comfortText}</p>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {t.booking.comfortItems.map((label, index) => {
              const Icon = comfortIcons[index];
              return (
                <div key={label} className="flex min-h-16 items-center gap-3 rounded-md bg-taxi-black/60 p-3 text-sm font-bold text-white/85">
                  <Icon className="shrink-0 text-taxi-gold" size={20} />
                  {label}
                </div>
              );
            })}
          </div>
        </div>

        <Card className="mt-10 border-white/10 bg-white p-4 text-taxi-black sm:p-6">
          <div className="mb-6 grid grid-cols-4 gap-2">
            {t.booking.steps.map((label, index) => (
              <div key={label} className="min-h-16 rounded-md bg-neutral-100 p-3 text-center text-xs font-black text-neutral-500 data-[active=true]:bg-taxi-gold data-[active=true]:text-taxi-black" data-active={index + 1 === step}>
                <span className="block text-lg">{index + 1}</span>
                <span className="hidden sm:block">{label}</span>
              </div>
            ))}
          </div>

          {sent ? (
            <div className="grid justify-items-center gap-5 py-14 text-center">
              <CheckCircle2 className="text-taxi-green" size={78} />
              <h3 className="text-2xl font-black">{t.booking.successTitle}</h3>
              <p className="max-w-2xl leading-7 text-neutral-700">{t.booking.successText}</p>
              <Button type="button" onClick={resetWizard} className="mt-2">
                {t.booking.newRequest}
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-5 text-sm font-black uppercase tracking-wide text-neutral-500">
                {t.booking.step} {step} - {currentLabel}
              </div>
              {step === 1 ? <StepVehicle draft={draft} setDraft={setDraft} onNext={() => setStep(2)} /> : null}
              {step === 2 ? <StepService draft={draft} setDraft={setDraft} onBack={() => setStep(1)} onNext={() => setStep(3)} /> : null}
              {step === 3 ? <StepForm draft={draft} setDraft={setDraft} onBack={() => setStep(2)} onNext={() => setStep(4)} /> : null}
              {step === 4 ? <StepConfirmation draft={draft} onBack={() => setStep(3)} onSend={send} /> : null}
            </>
          )}
        </Card>
      </div>
    </section>
  );
}
