import CareersHero from "@/components/careers/CareersHero";
import CultureValues from "@/components/careers/CultureValues";
import WhyJoin from "@/components/careers/WhyJoin";
import OpenRoles from "@/components/careers/OpenRoles";
import CareersCTA from "@/components/careers/CareersCTA";

export default function CareersPage() {
  return (
    <div className="min-h-screen">

      <CareersHero />
      <CultureValues />
      <WhyJoin />
      <OpenRoles />
      <CareersCTA />

    </div>
  );
}
