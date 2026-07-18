"use client";

import { MapPin, AlarmClock } from "lucide-react";

const areas = [
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
];

export default function ServiceAreas() {
  return (
    <section className="bg-[#0F172A] py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-white text-2xl md:text-3xl font-bold">
            Service Areas in Dubai
          </h2>

          <p className="text-gray-400 text-base md:text-lg mt-3">
            PROTECH Dynamics serves all communities across Dubai
          </p>

        </div>

        {/* Areas */}

        <div className="mt-14 flex flex-wrap justify-center gap-4">

          {areas.map((area, index) => (
            <button
              key={index}
              className="
                group
                flex items-center gap-3
                px-4 py-3
                rounded-full
                bg-[#293244]
                border border-[#3B4457]
                text-white
                text-xs
                transition-all duration-300 ease-in-out
                hover:bg-[#3A4458]
                cursor-pointer
                hover:-translate-y-1
                hover:scale-105
              "
            >
              <MapPin
                size={15}
                className="text-gray-300 group-hover:text-white"
              />

              {area}
            </button>
          ))}

        </div>

        {/* Bottom Text */}

        <div className="mt-10 flex justify-center">

          <div className="flex items-center gap-3 text-gray-400 text-sm">

            <AlarmClock
              size={15}
              className="text-gray-400"
            />

            <span>
              Emergency response available to any location across Dubai.
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}