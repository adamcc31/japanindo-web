import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSection from "@/components/sections/HeroSection";
import PricingSection from "@/components/sections/PricingSection";
import TestimonialSection from "@/components/sections/TestimonialSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureSection variant="prePricing" />
      <CTASection variant="availability" />
      <PricingSection />
      <FeatureSection variant="postPricing" />
      <FAQSection />
      <TestimonialSection />
      <CTASection variant="city" />
    </>
  );
}

