"use client";

import {
  BadgeCheck,
  Clock3,
  Award,
  Receipt,
  Wrench,
  UserCog,
} from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "SIRA Certified & Licensed",
    description:
      "PROTECH Dynamics is a registered Dubai company with DED trade licenses, SIRA certification for security installations, liability insurance, and workers covered under UAE labor law.",
  },
  {
    icon: Clock3,
    title: "24/7 Emergency Response",
    description:
      "AC failures don't wait for business hours, and neither do we. Our emergency team responds around the clock, 365 days a year. We typically dispatch within 60 minutes.",
  },
  {
    icon: Award,
    title: "6-Month Workmanship Warranty",
    description:
      "All services are backed by our 6-month workmanship warranty, plus manufacturer warranty where applicable on parts and equipment we install.",
  },
  {
    icon: Receipt,
    title: "Transparent, Fixed Pricing",
    description:
      "No call-out fees for standard services. No surprise charges after the work is done. We provide detailed written quotes before starting any job.",
  },
  {
    icon: Wrench,
    title: "One Company, All Services",
    description:
      "Why juggle multiple contractors when one company can handle everything? From routine maintenance to emergency repairs and renovations.",
  },
  {
    icon: UserCog,
    title: "Skilled, Vetted Technicians",
    description:
      "Every PROTECH technician passes background checks, skills assessments, and ongoing training. Many have 10+ years of experience.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f5f7fa] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44]">
            Why Dubai Residents Choose PROTECH
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  bg-white
                  border
                  border-gray-200
                  rounded-xl
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                  hover:border-[#0d4ea6]
                "
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded bg-[#eef2f7] flex items-center justify-center">
                  <Icon
                    size={28}
                    className="text-[#0d4ea6]"
                    strokeWidth={2}
                  />
                </div>

                {/* Title */}
                <h3 className="mt-8 text-[18px] md:text-[20px] font-bold text-[#0a1f44] leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-5 text-[17px] leading-8 text-gray-600">
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