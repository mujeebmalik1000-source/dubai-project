"use client";

const locations = [
  "Business Bay",
  "Downtown Dubai",
  "Dubai Marina",
  "JBR",
  "JLT",
  "Palm Jumeirah",
  "Jumeirah",
  "Al Barsha",
  "JVC",
  "Dubai Hills Estate",
  "Arabian Ranches",
  "The Springs",
  "The Meadows",
  "Mirdif",
  "Motor City",
  "Sports City",
  "Discovery Gardens",
  "Al Quoz",
  "Deira",
  "Bur Dubai",
  "Emirates Hills",
];

export default function ServingDubai() {
  return (
    <section className="bg-[#020b1f] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Serving All of Dubai
          </h2>

          <p className="mt-6 text-lg md:text-1xl text-gray-300 leading-relaxed">
            PROTECH Dynamics provides home maintenance and technical
            services across every Dubai <br /> community.
          </p>
        </div>

        {/* Location Pills */}
        <div className="mt-14 flex flex-wrap justify-center gap-5">

          {locations.map((location, index) => (
            <div
              key={index}
              className="
                bg-white/10
                hover:bg-white/20
                text-white
                px-3
                py-2
                rounded-[20px]
                text-[12px]
                md:text-[13px]
                cursor-pointer
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              {location}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}