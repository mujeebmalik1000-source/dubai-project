import ServicesHero from "../services/ServicesHero";
import ACCoolingSection from "../services/ACCoolingSection";
import PlumbingSection from "../services/PlumbingSection";
import RenovationSection from "../services/RenovationSection";
import FlooringSection from "../services/FlooringSection";
import HandymanSection from "../services/HandymanSection";
import SecuritySection from "../services/SecuritySection";
import EmergencySection from "../services/EmergencySection";
import PackagesSection from "../services/PackagesSection";
import WhyChooseSection from "../services/WhyChooseSection";
import HelpSection from "../services/HelpSection";
import FooterSection from "../services/FooterSection";
import ScrollToTop from "../components/ScrollToTop";

        

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ACCoolingSection />
      <PlumbingSection />
      <RenovationSection />
      <FlooringSection />
      <HandymanSection />
      <SecuritySection />
      <EmergencySection />
      <PackagesSection />
      <WhyChooseSection />
      <HelpSection />
      <FooterSection />
      <ScrollToTop />
   
    </>
  );
}