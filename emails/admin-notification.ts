import { BookingPayload } from "@/lib/booking-schema";
import { siteConfig, whatsappUrl } from "@/data/site";

export function adminNotificationEmail(payload: BookingPayload) {
  const clientEmail = payload.email || payload.businessEmail || "";
  const clientName = payload.fullName || payload.contactName || payload.company || "Client";
  const rows = Object.entries(payload)
    .filter(([, value]) => value)
    .map(([key, value]) => `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:700">${key}</td><td style="padding:8px;border-bottom:1px solid #eee">${String(value)}</td></tr>`)
    .join("");

  return {
    subject: `Nouvelle demande Yas'Taxii - ${payload.service}`,
    html: `
      <div style="font-family:Arial,sans-serif;color:#151515">
        <h1>Nouvelle demande Yas'Taxii</h1>
        <p><strong>Client :</strong> ${clientName}</p>
        <p><strong>Telephone :</strong> <a href="tel:${payload.phone}">${payload.phone}</a></p>
        ${clientEmail ? `<p><strong>Email :</strong> <a href="mailto:${clientEmail}">${clientEmail}</a></p>` : ""}
        <p><a href="${whatsappUrl(`Bonjour ${clientName}, je vous contacte au sujet de votre demande Yas'Taxii.`)}">Ouvrir WhatsApp client</a></p>
        <table style="border-collapse:collapse;width:100%;max-width:720px">${rows}</table>
        <p style="color:#666">Email genere par ${siteConfig.name}.</p>
      </div>
    `
  };
}
