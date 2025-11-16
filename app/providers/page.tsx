import ProvidersHero from "@/components/providers/ProvidersHero";
import PainPoints from "@/components/providers/PainPoints";
import HowWeHelp from "@/components/providers/HowWeHelp";
import ProviderMetrics from "@/components/providers/ProviderMetrics";
import AutomationFlow from "@/components/providers/AutomationFlow";
import ComplianceHighlight from "@/components/providers/ComplianceHighlight";
import ProvidersCTA from "@/components/providers/ProvidersCTA";

export default function ProvidersPage() {
  return (
    <div className="min-h-screen">

      <ProvidersHero />
      <PainPoints />
      <HowWeHelp />
      <ProviderMetrics />
      <AutomationFlow />
      <ComplianceHighlight />
      <ProvidersCTA />

    </div>
  );
}
