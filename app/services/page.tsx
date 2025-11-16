import ServicesHero from "@/components/services/ServicesHero";
import ServicesOverview from "@/components/services/ServicesOverview";
import CoreModules from "@/components/services/CoreModules";
import AutomationHighlights from "@/components/services/AutomationHighlights";
import ValueDelivery from "@/components/services/ValueDelivery";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <ServicesOverview />
      <CoreModules />
      <AutomationHighlights />
      <ValueDelivery />
      <ServicesCTA />
    </div>
  );
}
