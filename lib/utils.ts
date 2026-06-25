import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPhoneForDisplay(phone: string) {
  return phone.replace(/(\d{2})(?=\d)/g, "$1 ").trim();
}
