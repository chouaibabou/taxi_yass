import { NextResponse } from "next/server";
import { adminNotificationEmail } from "@/emails/admin-notification";
import { customerConfirmationEmail } from "@/emails/customer-confirmation";
import { bookingSchema } from "@/lib/booking-schema";
import { sendEmail } from "@/lib/email";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = bookingSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten() }, { status: 400 });
  }

  const adminEmail = adminNotificationEmail(parsed.data);
  const customerEmail = customerConfirmationEmail(parsed.data);
  const ownerEmail = process.env.OWNER_EMAIL;
  const customerRecipient = parsed.data.email || parsed.data.businessEmail;

  if (!ownerEmail) {
    return NextResponse.json({ ok: false, error: "OWNER_EMAIL is not configured" }, { status: 500 });
  }

  try {
    await sendEmail({
      to: ownerEmail,
      subject: adminEmail.subject,
      html: adminEmail.html,
      replyTo: customerRecipient || undefined
    });

    if (customerRecipient) {
      await sendEmail({
        to: customerRecipient,
        subject: customerEmail.subject,
        html: customerEmail.html
      });
    }
  } catch (error) {
    console.error("Booking email send failed", error);
    return NextResponse.json({ ok: false, error: "Email send failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
