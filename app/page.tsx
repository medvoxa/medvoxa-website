// app/page.tsx

import Hero from "@/components/home/Hero";
import ImpactMetrics from "@/components/home/ImpactMetrics";
import WhoWeServe from "@/components/home/WhoWeServe";
import ServicesPreview from "@/components/home/ServicesPreview";
import EngineTeaser from "@/components/home/EngineTeaser";
import SecuritySection from "@/components/home/SecuritySection";
import CTAFooter from "@/components/home/CTAFooter";

export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Impact Metrics */}
      <ImpactMetrics />

      {/* 3. Who We Serve */}
      <WhoWeServe />

      {/* 4. Services Preview */}
      <ServicesPreview />

      {/* 5. Engine Teaser */}
      <EngineTeaser />

      {/* 6. Security Section */}
      <SecuritySection />

      {/* 7. CTA Footer */}
      <CTAFooter />

    </div>
  );
}
