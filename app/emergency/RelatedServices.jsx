"use client";

import Link from "next/link";
import {
  ArrowRight,
  Zap,
  AirVent,
  Droplets,
  Paintbrush,
  Grid2X2,
  BookOpen,
  Video,
} from "lucide-react";

const services = [
  {
    title: "Circuit Breaker Repair Dubai",
    icon: Zap,
  },
  {
    title: "HVAC Services Dubai",
    icon: AirVent,
  },
  {
    title: "AC Leaking Water Dubai",
    icon: Droplets,
  },
  {
    title: "Painting Services Dubai",
    icon: Paintbrush,
  },
  {
    title: "Flooring Installation Dubai",
    icon: Grid2X2,
  },
  {
    title: "Shelving Installation Dubai",
    icon: BookOpen,
  },
  {
    title: "Leak Repair Dubai",
    icon: Droplets,
  },
  {
    title: "CCTV Installation Dubai",
    icon:  Video,
  },
];

export default function RelatedServices() {
  return (
    <section className="py-16 bg-white border-t">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <h2 className="text-2xl md:text-3xl font-bold text-[#081B47]">
            Related Services
          </h2>

          <p className="mt-3 text-gray-600 text-base">
            Explore more services from PROTECH Dynamics
          </p>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-6">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                href="#"
                key={index}
                className="group"
              >
                <div
                  className="
                  border border-gray-200
                  rounded-xl
                  bg-gray-50
                  h-24
                  px-5
                  flex items-center justify-between
                  transition-all duration-300
                  hover:bg-white
                  hover:border-gray-200
                  hover:shadow-lg
                "
                >
                  <div className="flex items-center gap-6">

                    <div
                      className="
                      w-13 h-13
                      rounded-lg
                      bg-blue-50
                      flex items-center justify-center
                    "
                    >
                      <Icon
                        size={23}
                        className="text-blue-900"
                      />
                    </div>

                    <h3 className="text-base font-bold text-[#081B47] leading-snug  transition-colors duration-300 group-hover:text-blue-900">
                      {service.title}
                    </h3>

                  </div>

                  <ArrowRight
                    size={24}
                    className="
                    text-gray-400
                    transition-all duration-300
                    group-hover:text-blue-900
                    group-hover:translate-x-2
                  "
                  />

                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}