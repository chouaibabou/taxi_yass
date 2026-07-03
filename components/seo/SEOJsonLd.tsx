import { faq } from "@/data/faq";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export function SEOJsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.siteUrl}/images/hero-taxi-premium.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gandelu, Crézancy et agglomération de Château-Thierry",
      addressCountry: "FR"
    },
    areaServed: ["Gandelu", "Crézancy", "Château-Thierry", "Soissons", "Département de l'Aisne", "CDG", "Orly", "Beauvais"],
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "$$",
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description
      }
    }))
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} />
    </>
  );
}
