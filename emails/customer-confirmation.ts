import { BookingPayload } from "@/lib/booking-schema";

export function customerConfirmationEmail(payload: BookingPayload) {
  const name = payload.fullName || payload.contactName || "Bonjour";

  return {
    subject: "Votre demande Yas'Taxii a bien ete recue",
    html: `
      <div style="font-family:Arial,sans-serif;color:#151515">
        <h1>Votre demande a bien ete envoyee !</h1>
        <p>${name}, merci pour votre demande. Notre equipe va l'etudier et vous repondra dans les plus brefs delais.</p>
        <p><strong>Vehicule :</strong> ${payload.vehicle}</p>
        <p><strong>Prestation :</strong> ${payload.service}</p>
        <p><strong>Telephone :</strong> ${payload.phone}</p>
      </div>
    `
  };
}
