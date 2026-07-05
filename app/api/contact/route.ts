import { NextResponse } from "next/server";
import { z } from "zod";
import { rowsEmailTable, sendEmail } from "@/lib/email";

const contactSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  message: z.string().min(5)
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const ownerEmail = process.env.OWNER_EMAIL;
  if (!ownerEmail) {
    return NextResponse.json({ ok: false, error: "OWNER_EMAIL is not configured" }, { status: 500 });
  }

  try {
    await sendEmail({
      to: ownerEmail,
      subject: `Nouveau message contact Yas'Taxii - ${parsed.data.fullName}`,
      replyTo: parsed.data.email,
      html: `
        <div style="font-family:Arial,sans-serif;color:#151515">
          <h1>Nouveau message de contact Yas'Taxii</h1>
          <table style="border-collapse:collapse;width:100%;max-width:720px">${rowsEmailTable(parsed.data)}</table>
        </div>
      `
    });

    await sendEmail({
      to: parsed.data.email,
      subject: "Votre message Yas'Taxii a bien ete recu",
      html: `
        <div style="font-family:Arial,sans-serif;color:#151515">
          <h1>Votre message a bien ete recu</h1>
          <p>Bonjour ${parsed.data.fullName},</p>
          <p>Merci pour votre message. Nous avons bien recu votre demande et nous vous repondrons dans les plus brefs delais.</p>
          <p><strong>Telephone indique :</strong> ${parsed.data.phone}</p>
          <p style="color:#666">A tres bientot,<br />Yas'Taxii</p>
        </div>
      `
    });
  } catch (error) {
    console.error("Contact email send failed", error);
    return NextResponse.json({ ok: false, error: "Email send failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
