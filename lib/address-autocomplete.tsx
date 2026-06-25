import type React from "react";

type AddressAutocompleteProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function AddressAutocomplete({ label, error, id, ...props }: AddressAutocompleteProps) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-neutral-900" htmlFor={id}>
      {label}
      <input
        id={id}
        {...props}
        className="h-12 rounded-md border border-neutral-200 bg-white px-4 text-sm outline-none transition focus:border-taxi-gold focus:ring-4 focus:ring-taxi-gold/20"
      />
      {error ? <span className="text-xs font-medium text-red-600">{error}</span> : null}
    </label>
  );
}
