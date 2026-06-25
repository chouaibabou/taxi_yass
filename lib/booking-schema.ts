import { z } from "zod";

export const bookingSchema = z.object({
  vehicle: z.enum(["eco", "van"]),
  service: z.enum(["medical", "airport", "event", "business"]),
  fullName: z.string().optional(),
  company: z.string().optional(),
  contactName: z.string().optional(),
  email: z.string().email("Email invalide").optional().or(z.literal("")),
  businessEmail: z.string().email("Email invalide").optional().or(z.literal("")),
  phone: z.string().min(8, "Telephone obligatoire"),
  pickupAddress: z.string().min(3, "Adresse de prise en charge obligatoire"),
  destinationAddress: z.string().optional(),
  eventAddress: z.string().optional(),
  appointmentReason: z.string().optional(),
  appointmentDate: z.string().optional(),
  appointmentTime: z.string().optional(),
  departureDateTime: z.string().optional(),
  eventDate: z.string().optional(),
  pickupTime: z.string().optional(),
  returnTime: z.string().optional(),
  passengers: z.string().optional(),
  luggage: z.string().optional(),
  babySeat: z.string().optional(),
  flightOrTrainNumber: z.string().optional(),
  invoiceNeeded: z.string().optional(),
  tripFrequency: z.string().optional(),
  comment: z.string().optional()
});

export type BookingPayload = z.infer<typeof bookingSchema>;
