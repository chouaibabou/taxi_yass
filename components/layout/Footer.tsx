import Link from "next/link";
import { siteConfig, whatsappUrl } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-taxi-black text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="text-2xl font-black">Yas&apos;Taxii</div>
          <p className="mt-3 max-w-xl text-sm leading-7 text-white/70">
            Taxi conventionné de Gandelu, Crézancy et toute l&apos;agglomération de Château-Thierry pour transport médical, gares, aéroports, courses privées et déplacements professionnels dans le département de l&apos;Aisne et les secteurs voisins.
          </p>
        </div>
        <div>
          <div className="font-bold text-taxi-gold">Contact</div>
          <div className="mt-3 grid gap-2 text-sm text-white/75">
            <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            <a href={whatsappUrl()} target="_blank">
              WhatsApp
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold text-taxi-gold">Légal</div>
          <div className="mt-3 grid gap-2 text-sm text-white/75">
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/politique-confidentialite">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/50">
        (c) {new Date().getFullYear()} Yas&apos;Taxii. Tous droits réservés.
      </div>
    </footer>
  );
}
