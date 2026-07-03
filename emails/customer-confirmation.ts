import { BookingPayload } from "@/lib/booking-schema";

export function customerConfirmationEmail(payload: BookingPayload) {
  const name = payload.fullName || payload.contactName || "Bonjour";

  return {
    subject: "Votre demande Yas'Taxii a bien été reçue",
    html: `
      <div style="font-family:Arial,sans-serif;color:#151515">
        <h1>Votre demande a bien été envoyée !</h1>
        <p>${name}, merci pour votre demande. Notre équipe va l'étudier et vous répondra dans les plus brefs délais.</p>
        <p><strong>Véhicule :</strong> ${payload.vehicle === "eco" ? "Taxi" : "Van"}</p>
        <p><strong>Prestation :</strong> ${payload.service}</p>
        <p><strong>Téléphone :</strong> ${payload.phone}</p>
      </div>
    `
  };
}
