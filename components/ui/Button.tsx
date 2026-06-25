import Link from "next/link";
import type React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "dark" | "ghost" | "whatsapp";
};

const variants = {
  primary: "bg-taxi-gold text-taxi-black hover:bg-taxi-amber shadow-glow",
  secondary: "bg-white text-taxi-black hover:bg-neutral-100",
  dark: "bg-taxi-black text-white hover:bg-neutral-800",
  ghost: "bg-transparent text-taxi-black hover:bg-neutral-100",
  whatsapp: "bg-taxi-green text-white hover:bg-emerald-600"
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-bold transition focus:outline-none focus:ring-4 focus:ring-taxi-gold/30 disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export function ButtonLink({
  className,
  variant = "primary",
  ...props
}: React.ComponentProps<typeof Link> & { variant?: ButtonProps["variant"] }) {
  return (
    <Link
      className={cn(
        "inline-flex h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-bold transition focus:outline-none focus:ring-4 focus:ring-taxi-gold/30",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
