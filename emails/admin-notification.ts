import { BookingPayload } from "@/lib/booking-schema";
import { siteConfig, whatsappUrl } from "@/data/site";
import { rowsEmailTable } from "@/lib/email";

export function adminNotificationEmail(payload: BookingPayload) {
  const clientEmail = payload.email || payload.businessEmail || "";
  const clientName = payload.fullName || payload.contactName || payload.company || "Client";
  const rows = rowsEmailTable(payload);

  return {
    subject: `Nouvelle demande Yas'Taxii - ${payload.service}`,
    html: `
      <div style="font-family:Arial,sans-serif;color:#151515">
        <h1>Nouvelle demande Yas'Taxii</h1>
        <p><strong>Client :</strong> ${clientName}</p>
        <p><strong>Téléphone :</strong> <a href="tel:${payload.phone}">${payload.phone}</a></p>
        ${clientEmail ? `<p><strong>Email :</strong> <a href="mailto:${clientEmail}">${clientEmail}</a></p>` : ""}
        <p><a href="${whatsappUrl(`Bonjour ${clientName}, je vous contacte au sujet de votre demande Yas'Taxii.`)}">Ouvrir WhatsApp client</a></p>
        <table style="border-collapse:collapse;width:100%;max-width:720px">${rows}</table>
        <p style="color:#666">Email généré par ${siteConfig.name}.</p>
      </div>
    `
  };
}
