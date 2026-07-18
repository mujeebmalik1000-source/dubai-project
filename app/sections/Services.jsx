import {
  Snowflake,
  Wrench,
  Plug,
  Paintbrush,
  Pencil,
  Grid2X2,
  Hammer,
  Shield,
  Settings,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

const services = [
  { icon: Snowflake, title: "AC Services" },
  { icon: Wrench, title: "Plumbing" },
  { icon: Plug, title: "Electrical" },
  { icon: Paintbrush, title: "Painting" },
  { icon: Pencil, title: "Carpentry" },
  { icon: Grid2X2, title: "Flooring & Tiling" },
  { icon: Hammer, title: "Handyman" },
  { icon: Shield, title: "Security & CCTV" },
  { icon: Settings, title: "Renovations" },
  { icon: BadgeCheck, title: "Maintenance Packages" },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0b1f44]">
            Services We Provide
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            Complete home maintenance and technical services for Dubai
            residents and businesses
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-16">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                group
                h-[145px]
                border border-gray-200
                rounded-xl
                p-5
                flex flex-col items-center
                justify-center
                text-center
                cursor-pointer
                transition-all
                duration-300
                hover:shadow-xl
                hover:-translate-y-2
                hover:border-[#1d4f9d]
               
              "
              >
                <div
                  className={`
                  w-14 h-14
                  rounded-lg
                  flex items-center justify-center
                  mb-3
                  transition-all duration-300
                  ${
                    index === 0
                      ? "bg-[#eef2f7] text-[#1d4f9d] group-hover:bg-[#1d4f9d] group-hover:text-white"
                       : "bg-[#eef2f7] text-[#1d4f9d] group-hover:bg-[#1d4f9d] group-hover:text-white"
                  }
                `}
                >
                  <Icon size={25} />
                </div>

                <h3
                   className="
                     font-semibold
                     text-base
                     text-[#111827]
                     transition-all
                     duration-300
                     group-hover:text-[#1d4f9d]
                   "
                >
                  {service.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* View All */}
        <div className="flex justify-center mt-16">
          <button
            className="
            flex items-center gap-3
            text-[#1d4f9d]
            font-semibold
            text-2xl
            cursor-pointer
            hover:gap-5
            transition-all
          "
          >
            View All Services
            <ArrowRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}