"use client";

import { Receipt, Award, ShieldCheck } from "lucide-react";

const guarantees = [
  {
    icon: Receipt,
    title: "No Hidden Charges",
    description:
      "We provide a detailed written quote before starting any work. The price we quote is the price you pay - no surprise fees, no call-out charges for standard services.",
  },
  {
    icon: Award,
    title: "6-Month Warranty",
    description:
      "All services are backed by our 6-month workmanship warranty, plus manufacturer warranty where applicable on parts and equipment we install.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description:
      "SIRA certified, DED licensed, and fully insured. Every technician is background-checked and trained to meet UAE safety standards.",
  },
];

export default function ServiceGuarantee() {
  return (
    <section className="bg-[#f7f8fa] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1736]">
            Our Service Guarantee
          </h2>

          <p className="mt-3 text-lg md:text-1xl text-slate-600 leading-relaxed">
            We stand behind every job with clear commitments to quality,
            transparency, <br /> and accountability.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {guarantees.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  bg-gray-100
                  border
                  border-gray-300
                  rounded-2xl
                  p-4
                  text-center
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                  hover:border-[#1d4f91]
                "
              >
                {/* Icon Circle */}
                <div className="flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#eef2f7] flex items-center justify-center">
                    <Icon
                      size={35}
                      className="text-[#1d4f91]"
                      strokeWidth={2}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-8 text-2xl font-bold text-[#0b1736]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-5 text-lg leading-8 text-slate-600">
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