import { z } from "zod";

function validatePassengerCount(vehicle: "eco" | "van", passengers?: string) {
  if (!passengers) {
    return true;
  }

  const count = Number(passengers);
  const max = vehicle === "van" ? 8 : 6;
  return Number.isInteger(count) && count >= 1 && count <= max;
}

export const bookingSchema = z.object({
  vehicle: z.enum(["eco", "van"]),
  service: z.enum(["medical", "airport", "event", "business"]),
  fullName: z.string().optional(),
  company: z.string().optional(),
  businessTripType: z.string().optional(),
  contactName: z.string().optional(),
  email: z.string().email("Email invalide").optional().or(z.literal("")),
  businessEmail: z.string().email("Email invalide").optional().or(z.literal("")),
  phone: z.string().min(8, "Téléphone obligatoire"),
  pickupAddress: z.string().min(3, "Adresse de prise en charge obligatoire"),
  destinationAddress: z.string().optional(),
  eventAddress: z.string().optional(),
  appointmentReason: z.string().optional(),
  appointmentReasonOther: z.string().optional(),
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
}).superRefine((data, ctx) => {
  if (!validatePassengerCount(data.vehicle, data.passengers)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["passengers"],
      message: data.vehicle === "van" ? "Le Taxi Van accepte entre 1 et 8 passagers." : "Le Taxi accepte entre 1 et 6 passagers."
    });
  }
  if (data.service === "medical" && data.appointmentReason === "Autre" && !String(data.appointmentReasonOther || "").trim()) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["appointmentReasonOther"],
      message: "Merci de préciser le motif du rendez-vous."
    });
  }
  const personalTripValues = ["Particulier", "Private", "Particular", "Privat"];
  if (data.service === "business" && !personalTripValues.includes(String(data.businessTripType || "")) && !String(data.company || "").trim()) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["company"],
      message: "Le nom de la societe est obligatoire pour un voyage professionnel."
    });
  }
});

export type BookingPayload = z.infer<typeof bookingSchema>;
