import { NextResponse } from "next/server";
import { z } from "zod";
import { rowsEmailTable, sendEmail } from "@/lib/email";

const destinationRequestSchema = z.object({
  zone: z.string().min(2),
  vehicle: z.enum(["eco", "van"]),
  need: z.string().min(2),
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  pickupAddress: z.string().min(3),
  destinationAddress: z.string().min(3),
  dateTime: z.string().optional(),
  passengers: z.string().optional(),
  comment: z.string().optional()
}).superRefine((data, ctx) => {
  const count = Number(data.passengers || "1");
  const max = data.vehicle === "van" ? 8 : 4;

  if (!Number.isInteger(count) || count < 1 || count > max) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["passengers"],
      message: data.vehicle === "van" ? "Le Taxi Van accepte entre 1 et 8 passagers." : "Le Taxi accepte entre 1 et 4 passagers."
    });
  }
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = destinationRequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten() }, { status: 400 });
  }

  const ownerEmail = process.env.OWNER_EMAIL;
  if (!ownerEmail) {
    return NextResponse.json({ ok: false, error: "OWNER_EMAIL is not configured" }, { status: 500 });
  }

  try {
    await sendEmail({
      to: ownerEmail,
      subject: `Nouvelle demande destination partenaire - ${parsed.data.zone}`,
      replyTo: parsed.data.email,
      html: `
        <div style="font-family:Arial,sans-serif;color:#151515">
          <h1>Nouvelle demande destination / taxi partenaire</h1>
          <table style="border-collapse:collapse;width:100%;max-width:720px">${rowsEmailTable(parsed.data)}</table>
        </div>
      `
    });

    await sendEmail({
      to: parsed.data.email,
      subject: "Votre demande de trajet Yas'Taxii a bien ete recue",
      html: `
        <div style="font-family:Arial,sans-serif;color:#151515">
          <h1>Votre demande de trajet a bien ete recue</h1>
          <p>Bonjour ${parsed.data.fullName},</p>
          <p>Merci pour votre demande. Nous avons bien recu les informations et nous reviendrons vers vous rapidement.</p>
          <p><strong>Zone :</strong> ${parsed.data.zone}</p>
          <p><strong>Vehicule :</strong> ${parsed.data.vehicle === "van" ? "Taxi Van" : "Taxi"}</p>
          <p><strong>Besoin :</strong> ${parsed.data.need}</p>
          <p><strong>Telephone indique :</strong> ${parsed.data.phone}</p>
          <p style="color:#666">A tres bientot,<br />Yas'Taxii</p>
        </div>
      `
    });
  } catch (error) {
    console.error("Destination email send failed", error);
    return NextResponse.json({ ok: false, error: "Email send failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
