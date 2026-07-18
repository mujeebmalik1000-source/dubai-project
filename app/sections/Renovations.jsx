"use client";

import { Bath, Building2, House } from "lucide-react";

const renovations = [
  {
    icon: Bath,
    title: "Bathroom Renovation",
    description:
      "Complete bathroom transformations with quality tiling, fixtures, and waterproofing.",
  },
  {
    icon: Building2,
    title: "Apartment Renovation",
    description:
      "Full apartment upgrades from flooring to lighting with minimal disruption.",
  },
  {
    icon: House,
    title: "Villa Renovation",
    description:
      "Large-scale villa upgrades with coordinated trades and project management.",
  },
];

export default function RenovationSection() {
  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-3xl font-bold text-[#0b1736]">
            Renovations (Execution-Led)
          </h2>

          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            Bathrooms, apartments, and villa upgrades with disciplined
            sequencing, clean <br /> finishing, and trade coordination.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {renovations.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  bg-white
                  border
                  border-gray-200
                  rounded-xl
                  p-4
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                  hover:border-[#1d4f91]
                "
              >
                {/* Icon */}
                <div className="mb-4">
                  <Icon
                    size={38}
                    className="text-[#1d4f91]"
                    strokeWidth={2}
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#0b1736]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}