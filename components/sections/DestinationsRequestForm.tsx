"use client";

import { CheckCircle2, MapPinned } from "lucide-react";
import type React from "react";
import { FormEvent, useState } from "react";
import { zones } from "@/data/zones";
import { fleet } from "@/data/fleet";
import { bookingServices } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type FormState = {
  zone: string;
  vehicle: "eco" | "van";
  need: string;
  passengers: string;
};

export function DestinationsRequestForm() {
  const [formState, setFormState] = useState<FormState>({
    zone: zones[0],
    vehicle: "eco",
    need: bookingServices[0].title,
    passengers: "1"
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const passengerMax = formState.vehicle === "eco" ? 4 : 8;

  function updateVehicle(vehicle: "eco" | "van") {
    const max = vehicle === "eco" ? 4 : 8;
    setFormState((current) => {
      const count = Number(current.passengers || "1");
      return {
        ...current,
        vehicle,
        passengers: String(Math.min(Math.max(count, 1), max))
      };
    });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const formData = Object.fromEntries(new FormData(event.currentTarget));
    const payload = { ...formData, ...formState };
    const response = await fetch("/api/destination-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      setSent(true);
      event.currentTarget.reset();
      return;
    }

    setError("Merci de vérifier les champs obligatoires.");
  }

  return (
    <section className="bg-taxi-cream py-8">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-wide text-taxi-gold">Destinations partenaires</p>
          <h2 className="mt-2 text-3xl font-black text-taxi-black sm:text-4xl">Choisissez une zone, nous organisons la demande</h2>
          <p className="mt-4 leading-7 text-neutral-700">
            Yas&apos;Taxii travaille avec d&apos;autres chauffeurs partenaires sur certains secteurs. Sélectionnez la ville, le véhicule souhaité et votre besoin : la demande arrive avec la zone choisie pour organiser rapidement la réservation.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {zones.map((zone) => (
              <button
                key={zone}
                type="button"
                onClick={() => setFormState((current) => ({ ...current, zone }))}
                className="rounded-md border border-neutral-200 bg-white px-4 py-3 text-left text-sm font-black text-taxi-black transition data-[selected=true]:border-taxi-gold data-[selected=true]:bg-taxi-gold data-[selected=true]:text-taxi-black"
                data-selected={formState.zone === zone}
              >
                {zone}
              </button>
            ))}
          </div>
        </div>

        <Card className="p-5 sm:p-6">
          {sent ? (
            <div className="grid justify-items-center gap-5 py-12 text-center">
              <CheckCircle2 className="text-taxi-green" size={72} />
              <h3 className="text-2xl font-black text-taxi-black">Votre demande de destination a bien été envoyée !</h3>
              <p className="max-w-xl leading-7 text-neutral-700">
                Nous avons bien reçu votre demande pour {formState.zone}. Nous allons l&apos;étudier et vous répondre rapidement.
              </p>
              <Button type="button" onClick={() => setSent(false)}>
                Envoyer une nouvelle demande
              </Button>
            </div>
          ) : (
            <form className="grid gap-5" onSubmit={onSubmit}>
              <p className="text-right text-xs font-medium text-neutral-500">
                <span className="text-red-600">*</span> Champs obligatoires
              </p>
              <div className="rounded-lg bg-taxi-black p-4 text-white">
                <div className="flex items-center gap-3 text-sm font-black text-taxi-gold">
                  <MapPinned size={22} />
                  Zone sélectionnée
                </div>
                <div className="mt-2 text-2xl font-black">{formState.zone}</div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-taxi-black">
                  <FieldLabel label="Choisir le véhicule" required />
                  <select
                    value={formState.vehicle}
                    onChange={(event) => updateVehicle(event.target.value as "eco" | "van")}
                    className="h-12 rounded-md border border-neutral-200 bg-white px-4 outline-none focus:border-taxi-gold focus:ring-4 focus:ring-taxi-gold/20"
                  >
                    {fleet.map((vehicle) => (
                      <option key={vehicle.id} value={vehicle.id}>
                        {vehicle.name} - {vehicle.passengers}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-2 text-sm font-semibold text-taxi-black">
                  <FieldLabel label="Votre besoin" required />
                  <select
                    value={formState.need}
                    onChange={(event) => setFormState((current) => ({ ...current, need: event.target.value }))}
                    className="h-12 rounded-md border border-neutral-200 bg-white px-4 outline-none focus:border-taxi-gold focus:ring-4 focus:ring-taxi-gold/20"
                  >
                    {bookingServices.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Input name="fullName" label="Nom et prénom" required />
                <Input name="email" type="email" label="Email" required />
                <Input name="phone" label="Téléphone" required />
                <label className="grid gap-2 text-sm font-semibold text-taxi-black">
                  <FieldLabel label={`Nombre de passagers (${formState.vehicle === "eco" ? "1 à 4" : "1 à 8"})`} required />
                  <select
                    name="passengers"
                    value={formState.passengers}
                    onChange={(event) => setFormState((current) => ({ ...current, passengers: event.target.value }))}
                    className="h-12 rounded-md border border-neutral-200 bg-white px-4 outline-none focus:border-taxi-gold focus:ring-4 focus:ring-taxi-gold/20"
                    required
                  >
                    {Array.from({ length: passengerMax }, (_, index) => String(index + 1)).map((passengerCount) => (
                      <option key={passengerCount} value={passengerCount}>
                        {passengerCount}
                      </option>
                    ))}
                  </select>
                </label>
                <Input name="pickupAddress" label="Adresse de prise en charge" required />
                <Input name="destinationAddress" label="Adresse d'arrivée" required />
                <Input name="dateTime" type="datetime-local" label="Date et heure souhaitées" />
              </div>

              <label className="grid gap-2 text-sm font-semibold text-taxi-black">
                Commentaire optionnel
                <textarea name="comment" rows={4} className="rounded-md border border-neutral-200 px-4 py-3 outline-none focus:border-taxi-gold focus:ring-4 focus:ring-taxi-gold/20" />
              </label>

              {error ? <div className="rounded-md bg-red-50 p-3 text-sm font-bold text-red-700">{error}</div> : null}

              <Button type="submit">Envoyer la demande</Button>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, ...inputProps } = props;
  return (
    <label className="grid gap-2 text-sm font-semibold text-taxi-black">
      <FieldLabel label={label} required={inputProps.required} />
      <input {...inputProps} className="h-12 rounded-md border border-neutral-200 px-4 outline-none focus:border-taxi-gold focus:ring-4 focus:ring-taxi-gold/20" />
    </label>
  );
}

function FieldLabel({ label, required }: { label: string; required?: boolean }) {
  return (
    <span>
      {label}
      {required ? <span className="ml-1 text-red-600">*</span> : null}
    </span>
  );
}

