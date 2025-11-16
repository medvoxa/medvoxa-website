import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
import DirectContactInfo from "@/components/contact/DirectContactInfo";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <ContactFormSection />
      <DirectContactInfo />
    </div>
  );
}
