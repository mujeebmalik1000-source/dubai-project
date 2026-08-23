import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import ContactCard from "../components/ContactCard";

export default function BookingPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#08152E] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-[8%] text-center">

          <p className="text-[#4DA3FF] uppercase tracking-[4px] font-semibold">
            Home / Request a Quote
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4">
            Request a Quote
          </h1>

          <p className="text-gray-300 mt-6 max-w-3xl mx-auto text-lg leading-8">
            Tell us about your project and our experts will provide
            a customized quotation within 24 hours.
          </p>

        </div>
      </section>

      {/* Form Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-[8%]">

          <div className="bg-white rounded-2xl shadow-xl p-10">

            <h2 className="text-3xl font-bold text-[#08152E]">
              Project Quote Request
            </h2>

            <p className="text-gray-600 mt-3">
              Please fill in your details. Our team will contact you shortly.
            </p>
            

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
  <div className="lg:col-span-2">
    <BookingForm />
  </div>

  <div>
    <ContactCard />
  </div>
</div>
            

            
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}