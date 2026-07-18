import Image from "next/image";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main>

      {/* ================= HERO ================= */}

      <section className="relative h-[320px] sm:h-[380px] md:h-[450px] lg:h-[520px] flex items-center justify-center">

        <Image
          src="/images/door.png"
          alt="About ProTech"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">

          <span className="inline-block bg-[#184896] text-white px-5 py-2 rounded-full text-sm font-semibold mb-6">
            ABOUT PROTECH
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Dubai's Trusted Home Maintenance Experts
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-8">
            Trusted Home Maintenance & Renovation Experts across Dubai.
            Delivering quality workmanship, fast response,
            and reliable service for homes and businesses.
          </p>

        </div>

      </section>



      {/* ================= COMPANY STORY ================= */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">


            {/* LEFT IMAGE */}

            <div>

              <img
                src="/images/company.png"
                alt="Company"
                className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover rounded-2xl shadow-2xl"
              />

            </div>



            {/* RIGHT CONTENT */}

            <div>

              <span className="text-[#184896] font-bold uppercase tracking-[3px]">
                Who We Are
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-5 mb-6 leading-tight">
                Professional Home Maintenance Company In Dubai
              </h2>

              <p className="text-gray-600 text-base sm:text-lg leading-8 mb-6">
                ProTech Dynamic is one of Dubai's trusted home maintenance
                companies, providing reliable AC repair, plumbing,
                electrical work, handyman services, painting,
                deep cleaning and complete renovation solutions.
              </p>

              <p className="text-gray-600 text-base sm:text-lg leading-8 mb-10">
                Our experienced technicians are committed to quality,
                transparency and customer satisfaction.
                Whether you need emergency repairs or complete home
                renovation, we ensure every project is completed with
                professionalism and attention to detail.
              </p>



              {/* Statistics */}

              <div className="grid grid-cols-2 gap-5">

                <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition">

                  <h3 className="text-4xl font-bold text-[#184896]">
                    10+
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Years Experience
                  </p>

                </div>

                <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition">

                  <h3 className="text-4xl font-bold text-[#184896]">
                    5000+
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Happy Customers
                  </p>

                </div>

                <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition">

                  <h3 className="text-4xl font-bold text-[#184896]">
                    24/7
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Emergency Support
                  </p>

                </div>

                <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition">

                  <h3 className="text-4xl font-bold text-[#184896]">
                    100%
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Customer Satisfaction
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= MISSION & VISION ================= */}

<section className="py-20 bg-gray-50">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <span className="text-[#184896] font-bold uppercase tracking-[3px]">
        OUR PURPOSE
      </span>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
        Mission & Vision
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto mt-5 leading-8">
        We believe every home deserves reliable maintenance,
        premium workmanship and exceptional customer service.
      </p>

    </div>



    <div className="grid md:grid-cols-2 gap-10">

      {/* Mission */}

      <div className="bg-white rounded-2xl shadow-lg p-10 hover:-translate-y-2 transition duration-300">

        <div className="w-16 h-16 rounded-full bg-[#184896] flex items-center justify-center text-white text-3xl mb-6">
          🎯
        </div>

        <h3 className="text-2xl font-bold mb-5">
          Our Mission
        </h3>

        <p className="text-gray-600 leading-8">
          Our mission is to provide trusted, affordable and
          high-quality home maintenance solutions across Dubai.
          We focus on customer satisfaction, transparent pricing,
          timely response and professional workmanship in every
          service we provide.
        </p>

      </div>


      {/* Vision */}

      <div className="bg-white rounded-2xl shadow-lg p-10 hover:-translate-y-2 transition duration-300">

        <div className="w-16 h-16 rounded-full bg-[#184896] flex items-center justify-center text-white text-3xl mb-6">
          👁️
        </div>

        <h3 className="text-2xl font-bold mb-5">
          Our Vision
        </h3>

        <p className="text-gray-600 leading-8">
          To become Dubai's most trusted home maintenance
          company by delivering innovative services,
          experienced professionals and long-lasting
          customer relationships built on quality and trust.
        </p>

      </div>

    </div>

  </div>

</section>



{/* ================= OUR VALUES ================= */}

<section className="py-20 bg-white">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <span className="text-[#184896] font-bold uppercase tracking-[3px]">
        OUR VALUES
      </span>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
        What Makes Us Different
      </h2>

      <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-8">
        Every service we provide is guided by our core values of quality,
        integrity, professionalism and customer satisfaction.
      </p>

    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Card 1 */}

      <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition duration-300">

        <div className="text-5xl mb-5">⭐</div>

        <h3 className="text-xl font-bold mb-4">
          Quality Service
        </h3>

        <p className="text-gray-600 leading-7">
          We deliver high-quality workmanship with attention to every
          detail on every project.
        </p>

      </div>



      {/* Card 2 */}

      <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition duration-300">

        <div className="text-5xl mb-5">🤝</div>

        <h3 className="text-xl font-bold mb-4">
          Integrity
        </h3>

        <p className="text-gray-600 leading-7">
          Honest pricing, transparent communication and reliable
          service are at the heart of our company.
        </p>

      </div>



      {/* Card 3 */}

      <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition duration-300">

        <div className="text-5xl mb-5">⚡</div>

        <h3 className="text-xl font-bold mb-4">
          Fast Response
        </h3>

        <p className="text-gray-600 leading-7">
          Our technicians respond quickly to emergency and scheduled
          maintenance requests across Dubai.
        </p>

      </div>



      {/* Card 4 */}

      <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition duration-300">

        <div className="text-5xl mb-5">❤️</div>

        <h3 className="text-xl font-bold mb-4">
          Customer First
        </h3>

        <p className="text-gray-600 leading-7">
          Customer satisfaction is our highest priority, and we strive
          to exceed expectations on every job.
        </p>

      </div>

    </div>

  </div>

</section>


{/* ================= WHY CHOOSE US ================= */}

<section className="py-20 bg-[#f8fafc]">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <span className="text-[#184896] font-bold uppercase tracking-[3px]">
        WHY CHOOSE US
      </span>

      <h2 className="text-3xl md:text-5xl font-bold mt-4">
        Why Thousands of Customers Trust ProTech
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto mt-5 leading-8">
        We provide premium home maintenance and renovation services
        with experienced technicians, transparent pricing and
        exceptional customer support across Dubai.
      </p>

    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Card 1 */}
      <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition duration-300">

        <div className="text-5xl mb-5">
          👨‍🔧
        </div>

        <h3 className="text-xl font-bold mb-3">
          Certified Experts
        </h3>

        <p className="text-gray-600 leading-7">
          Highly trained professionals with years of experience
          delivering reliable maintenance and renovation services.
        </p>

      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition duration-300">

        <div className="text-5xl mb-5">
          ⏰
        </div>

        <h3 className="text-xl font-bold mb-3">
          24/7 Emergency Support
        </h3>

        <p className="text-gray-600 leading-7">
          Our emergency team is always ready to respond quickly,
          ensuring your home stays safe and comfortable.
        </p>

      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition duration-300">

        <div className="text-5xl mb-5">
          💰
        </div>

        <h3 className="text-xl font-bold mb-3">
          Transparent Pricing
        </h3>

        <p className="text-gray-600 leading-7">
          No hidden charges. We provide honest quotations and
          affordable pricing before starting any work.
        </p>

      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition duration-300">

        <div className="text-5xl mb-5">
          🏆
        </div>

        <h3 className="text-xl font-bold mb-3">
          Customer Satisfaction
        </h3>

        <p className="text-gray-600 leading-7">
          Thousands of satisfied customers trust ProTech for
          quality workmanship, reliability and professional service.
        </p>

      </div>

    </div>

  </div>

</section>
      






{/* ================= COMPANY STATISTICS ================= */}

<section className="py-20 bg-white">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">

      <span className="text-[#184896] font-bold uppercase tracking-[3px]">
        OUR ACHIEVEMENTS
      </span>

      <h2 className="text-3xl md:text-5xl font-bold mt-4">
        Numbers That Speak For Us
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto mt-5 leading-8">
        We have successfully completed thousands of maintenance and
        renovation projects across Dubai with complete customer
        satisfaction.
      </p>

    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-[#184896] text-white rounded-2xl p-10 text-center">

        <h3 className="text-5xl font-bold">
          5000+
        </h3>

        <p className="mt-3 text-blue-100">
          Happy Clients
        </p>

      </div>

      <div className="bg-[#184896] text-white rounded-2xl p-10 text-center">

        <h3 className="text-5xl font-bold">
          10+
        </h3>

        <p className="mt-3 text-blue-100">
          Years Experience
        </p>

      </div>

      <div className="bg-[#184896] text-white rounded-2xl p-10 text-center">

        <h3 className="text-5xl font-bold">
          150+
        </h3>

        <p className="mt-3 text-blue-100">
          Expert Technicians
        </p>

      </div>

      <div className="bg-[#184896] text-white rounded-2xl p-10 text-center">

        <h3 className="text-5xl font-bold">
          24/7
        </h3>

        <p className="mt-3 text-blue-100">
          Emergency Support
        </p>

      </div>

    </div>

  </div>

</section>


{/* ================= CTA SECTION ================= */}

<section className="py-24 bg-[#184896]">

  <div className="max-w-5xl mx-auto px-6 text-center">

    <span className="inline-block bg-white text-[#184896] px-5 py-2 rounded-full font-semibold mb-6">
      GET STARTED TODAY
    </span>

    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">

      Need Professional Home Maintenance Services?

    </h2>

    <p className="text-blue-100 text-lg mt-6 leading-8 max-w-3xl mx-auto">

      Whether it's AC repair, plumbing, electrical work,
      renovation or emergency maintenance,
      our experienced team is ready to help you 24/7.

    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">

      <button className="bg-white text-[#184896] font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition">

        Request Free Quote

      </button>

      <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-[#184896] transition">

        Call Now

      </button>

    </div>

  </div>
  

</section>

<Footer />



    </main>
    
  );
}