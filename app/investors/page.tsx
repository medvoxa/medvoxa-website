import InvestorsHero from "@/components/investors/InvestorsHero";
import MarketPain from "@/components/investors/MarketPain";
import InvestorSolution from "@/components/investors/InvestorSolution";
import MarketOpportunity from "@/components/investors/MarketOpportunity";
import Differentiators from "@/components/investors/Differentiators";
import TractionSignals from "@/components/investors/TractionSignals";
import TechOverview from "@/components/investors/TechOverview";
import InvestorCompliance from "@/components/investors/InvestorCompliance";
import InvestorsCTA from "@/components/investors/InvestorsCTA";

export default function InvestorsPage() {
  return (
    <div className="min-h-screen">

      <InvestorsHero />
      <MarketPain />
      <InvestorSolution />
      <MarketOpportunity />
      <Differentiators />
      <TractionSignals />
      <TechOverview />
      <InvestorCompliance />
      <InvestorsCTA />

    </div>
  );
}
