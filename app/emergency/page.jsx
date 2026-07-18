import EmergencyHero from "./EmergencyHero";
import Responds from "./Responds";
import HandaleCards from "./HandleCards";
import ProcessSection from "./ProcessSection";
import EmergencyCTA from "./EmergencyCTA";
import Pricing  from "./Pricing";
import Weekend  from "./Weekend";
import Immediately  from "./Immediately";
import RelatedServices from "./RelatedServices";
import ServiceAreas from "./ServiceAreas";
import Banner from "./Banner";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";



export default function EmergencyPage() {
  return (
    <>
      <EmergencyHero />
      <Responds />
      <HandaleCards />
      <ProcessSection />
      <EmergencyCTA />
      <Pricing />
      <Weekend />
      <Immediately />
      <RelatedServices />
      <ServiceAreas />
      <Banner />
      <Footer />
      <ScrollToTop />

    </>
  );
}