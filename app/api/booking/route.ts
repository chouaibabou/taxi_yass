import { NextResponse } from "next/server";
import { adminNotificationEmail } from "@/emails/admin-notification";
import { customerConfirmationEmail } from "@/emails/customer-confirmation";
import { bookingSchema } from "@/lib/booking-schema";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = bookingSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten() }, { status: 400 });
  }

  const adminEmail = adminNotificationEmail(parsed.data);
  const customerEmail = customerConfirmationEmail(parsed.data);

  // Email provider integration goes here. Configure SMTP/API secrets only in .env.local.
  console.info("Booking email prepared", {
    adminSubject: adminEmail.subject,
    customerSubject: customerEmail.subject,
    ownerEmail: process.env.OWNER_EMAIL
  });

  return NextResponse.json({ ok: true });
}
