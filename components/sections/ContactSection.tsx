"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import type React from "react";
import { FormEvent, useState } from "react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.currentTarget));
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    setSent(response.ok);
  }

  return (
    <section id="contact" className="bg-neutral-950 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-wide text-taxi-gold">Contact</p>
          <h2 className="mt-2 text-3xl font-black sm:text-4xl">Besoin d&apos;un taxi ou d&apos;un devis rapide ?</h2>
          <div className="mt-8 grid gap-4 text-sm">
            <a className="flex items-center gap-3 text-white/80" href={siteConfig.phoneHref}><Phone className="text-taxi-gold" /> {siteConfig.phone}</a>
            <a className="flex items-center gap-3 text-white/80" href={`mailto:${siteConfig.email}`}><Mail className="text-taxi-gold" /> {siteConfig.email}</a>
            <div className="flex items-center gap-3 text-white/80"><MapPin className="text-taxi-gold" /> {siteConfig.location}</div>
            <div className="rounded-md bg-white/10 p-4 font-bold text-taxi-amber">{siteConfig.hours}</div>
          </div>
        </div>
        <Card className="p-5 text-taxi-black">
          {sent ? (
            <div className="rounded-md bg-emerald-50 p-5 font-bold text-emerald-700">Votre message a bien ete envoye.</div>
          ) : (
            <form className="grid gap-4" onSubmit={onSubmit}>
              <Input name="fullName" label="Nom et prenom" required />
              <Input name="email" type="email" label="Email" required />
              <Input name="phone" label="Telephone" required />
              <label className="grid gap-2 text-sm font-semibold">
                Message
                <textarea name="message" required rows={5} className="rounded-md border border-neutral-200 px-4 py-3 outline-none focus:border-taxi-gold focus:ring-4 focus:ring-taxi-gold/20" />
              </label>
              <Button type="submit">Envoyer</Button>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, ...inputProps } = props;
  return (
    <label className="grid gap-2 text-sm font-semibold">
      {label}
      <input {...inputProps} className="h-12 rounded-md border border-neutral-200 px-4 outline-none focus:border-taxi-gold focus:ring-4 focus:ring-taxi-gold/20" />
    </label>
  );
}
