import { Phone, MessageSquare, Settings } from "lucide-react";

export default function ServicesPage() {
  return (
    <>
      {/* Breadcrumb */}
      <section className="pt-24 bg-[#f8f9fb] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3 text-sm">
            <span className="text-gray-500 hover:text-[#184896] cursor-pointer">
              Home
            </span>

            <span className="text-gray-400">›</span>

            <span className="font-medium text-[#184896]">
              Services
            </span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#081B47] via-[#233F96] to-[#081B47] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full text-sm text-blue-200">
            <Settings size={16} />
            Dubai's Trusted Home Service Provider
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-2xl md:text-6xl font-bold leading-tight">
            Complete Home
            <br />
            <span className="text-[#61A5FF]">
              Maintenance Solutions
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
            From emergency repairs to full renovations, we handle everything
            your home needs. Professional, reliable, and always on time.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <button className="bg-[#2155A3] hover:bg-[#184896] px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 cursor-pointer">
              <Phone size={18} />
              +971 56 151 7463
            </button>

            <button className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 cursor-pointer">
              <MessageSquare size={18} />
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-t  border-b border-gray-200 text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">

          <div className="text-center py-10 border-r border-gray-200">
            <h3 className="text-2xl md:text-4xl font-bold text-[#184896]">
              10+
            </h3>
            <p className="text-gray-500 mt-2">
              Years Experience
            </p>
          </div>

          <div className="text-center py-10 border-r border-gray-200">
            <h3 className="text-2xl md:text-4xl font-bold text-[#184896]">
              15K+
            </h3>
            <p className="text-gray-500 mt-2">
              Jobs Completed
            </p>
          </div>

          <div className="text-center py-10 border-r border-gray-200">
            <h3 className="text-2xl md:text-4xl font-bold text-[#184896]">
              24/7
            </h3>
            <p className="text-gray-500 mt-2">
              Emergency Service
            </p>
          </div>

          <div className="text-center py-10">
            <h3 className="text-2xl md:text-4xl font-bold text-[#184896]">
              500+
            </h3>
            <p className="text-gray-500 mt-2">
              Projects Completed
            </p>
          </div>

        </div>
      </section>
    </>
  );
}