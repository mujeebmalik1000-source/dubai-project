"use client";

export default function OfficeLocation() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-1xl md:text-3xl font-bold text-center text-[#0B1736]">
          Our Office Location
        </h2>

        {/* Description */}
        <p className="mt-2 text-center text-sm md:text-[14px] leading-6 text-gray-600 max-w-4xl mx-auto">
          Visit us at Prime Tower, Business Bay, Dubai. We serve all areas
          across Dubai — from Palm <br/> Jumeirah to International City, Mirdif to
          JBR.
        </p>

        {/* Map */}
        <div className="mt-12 overflow-hidden rounded-2xl shadow-xl border border-gray-200">

          <iframe
            title="Prime Tower Business Bay Dubai"
            src="https://www.google.com/maps?q=Prime+Tower+Business+Bay+Dubai&output=embed"
            width="100%"
            height="540"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[540px]"
          />

        </div>

      </div>
    </section>
  );
}