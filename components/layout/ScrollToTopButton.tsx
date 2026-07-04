"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsVisible(window.scrollY > 500);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      aria-label="Revenir en haut de page"
      onClick={scrollToTop}
      className="hfe-scroll-to-top-button fixed bottom-24 right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-md border border-white/10 bg-taxi-black text-taxi-gold shadow-2xl transition duration-200 hover:-translate-y-0.5 hover:bg-taxi-gold hover:text-taxi-black focus:outline-none focus:ring-4 focus:ring-taxi-gold/30 data-[visible=false]:pointer-events-none data-[visible=false]:translate-y-3 data-[visible=false]:opacity-0 sm:right-5"
      data-visible={isVisible}
    >
      <ArrowUp size={22} strokeWidth={3} />
    </button>
  );
}
