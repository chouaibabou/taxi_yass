type ConversionEvent =
  | "phone_click"
  | "whatsapp_click"
  | "booking_sent"
  | "quote_sent"
  | "reservation_sent"
  | "maps_click";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackConversion(event: ConversionEvent, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
}
