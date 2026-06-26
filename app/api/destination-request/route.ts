import { NextResponse } from "next/server";
import { z } from "zod";

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
      message: data.vehicle === "van" ? "Le Van accepte entre 1 et 8 passagers." : "Le vehicule Eco accepte entre 1 et 4 passagers."
    });
  }
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = destinationRequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten() }, { status: 400 });
  }

  // Partner taxi email/provider integration goes here. Use only .env.local secrets.
  console.info("Destination partner request prepared", {
    ownerEmail: process.env.OWNER_EMAIL,
    zone: parsed.data.zone,
    vehicle: parsed.data.vehicle,
    need: parsed.data.need
  });

  return NextResponse.json({ ok: true });
}
