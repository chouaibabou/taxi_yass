import { NextResponse } from "next/server";
import { z } from "zod";

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

  console.info("Contact message prepared", {
    ownerEmail: process.env.OWNER_EMAIL,
    from: parsed.data.email
  });

  return NextResponse.json({ ok: true });
}
