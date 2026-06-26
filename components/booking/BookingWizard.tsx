"use client";

import { CheckCircle2 } from "lucide-react";
import { useMemo, useState } from "react";
import { ServiceId } from "@/data/services";
import { FleetId } from "@/data/fleet";
import { BookingPayload } from "@/lib/booking-schema";
import { trackConversion } from "@/lib/tracking";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { StepVehicle } from "@/components/booking/StepVehicle";
import { StepService } from "@/components/booking/StepService";
import { StepForm } from "@/components/booking/StepForm";
import { StepConfirmation } from "@/components/booking/StepConfirmation";

export type BookingDraft = Partial<BookingPayload> & {
  vehicle?: FleetId;
  service?: ServiceId;
};

const stepLabels = ["Vehicule", "Prestation", "Informations", "Recapitulatif"];

export function BookingWizard() {
  const [step, setStep] = useState(1);
  const [draft, setDraft] = useState<BookingDraft>({ vehicle: "eco", service: "medical" });
  const [sent, setSent] = useState(false);
  const currentLabel = useMemo(() => stepLabels[step - 1], [step]);

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
          <p className="text-sm font-black uppercase tracking-wide text-taxi-gold">Reservation / devis</p>
          <h2 className="mt-2 text-3xl font-black sm:text-4xl">Un parcours simple en 4 etapes</h2>
          <p className="mt-4 text-white/70">Choisissez votre vehicule, la prestation, completez les informations utiles et validez le recapitulatif avant envoi.</p>
        </div>

        <Card className="mt-10 border-white/10 bg-white p-4 text-taxi-black sm:p-6">
          <div className="mb-6 grid grid-cols-4 gap-2">
            {stepLabels.map((label, index) => (
              <div key={label} className="min-h-16 rounded-md bg-neutral-100 p-3 text-center text-xs font-black text-neutral-500 data-[active=true]:bg-taxi-gold data-[active=true]:text-taxi-black" data-active={index + 1 === step}>
                <span className="block text-lg">{index + 1}</span>
                <span className="hidden sm:block">{label}</span>
              </div>
            ))}
          </div>

          {sent ? (
            <div className="grid justify-items-center gap-5 py-14 text-center">
              <CheckCircle2 className="text-taxi-green" size={78} />
              <h3 className="text-2xl font-black">Votre demande a bien ete envoyee !</h3>
              <p className="max-w-2xl leading-7 text-neutral-700">
                Merci, nous avons bien recu votre demande. Notre equipe va l&apos;etudier et vous repondra dans les plus brefs delais. Un email recapitulatif vous a ete envoye.
              </p>
              <Button type="button" onClick={resetWizard} className="mt-2">
                Envoyer une nouvelle demande
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-5 text-sm font-black uppercase tracking-wide text-neutral-500">Etape {step} - {currentLabel}</div>
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
