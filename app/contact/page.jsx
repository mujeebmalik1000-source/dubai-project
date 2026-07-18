import ContactHero from "./ContactHero";
import ReachusContact from "./ReachusContact";
import QuoteFormContact from "./QuoteFormContact";
import ContactProcess from "./ContactProcess";
import CommonQuestions from "./CommonQuestions";
import OfficeLocation from "./OfficeLocation";
import ContactBanner from "./ContactBanner";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";










export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ReachusContact />
      <QuoteFormContact />
      <ContactProcess />
      <CommonQuestions />
      <OfficeLocation />
      <ContactBanner />
      <Footer />
      <ScrollToTop />
      
    </>
  );
}