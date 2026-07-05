import { BookingWizard } from "@/components/booking/BookingWizard";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FleetSection } from "@/components/sections/FleetSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TourismPartnershipSection } from "@/components/sections/TourismPartnershipSection";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";

export default function HomePage() {
  return (
    <>
      <SEOJsonLd />
      <HeroSection />
      <ServicesSection />
      <TourismPartnershipSection />
      <BookingWizard />
      <FleetSection />
      <ReviewsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
