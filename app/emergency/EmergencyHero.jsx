"use client";

import Link from "next/link";
import {
  Phone,
  Zap,
  BadgeCheck,
  MapPin,
  ChevronRight,
} from "lucide-react";

export default function EmergencyHero() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="w-full bg-white border-b border-gray-200 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm">

            <Link
              href="/"
              className="text-gray-500 hover:text-[#184896] transition"
            >
              Home
            </Link>

            <ChevronRight size={16} className="text-gray-400" />

            <Link
              href="/services"
              className="text-gray-500 hover:text-[#184896] transition"
            >
              Services
            </Link>

            <ChevronRight size={16} className="text-gray-400" />

            <span className="font-semibold text-sm cursor-pointer">
              24/7 Emergency Repair
            </span>

          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-700 via-red-600 to-orange-500 text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center  gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-2">

              <span className="relative flex h-3 w-3 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-white"></span>
              </span>

              <span className="font-semibold  text-sm md:text-base">
                24/7 EMERGENCY RESPONSE ACTIVE
              </span>

            </div>
          </div>

          {/* Heading */}
          <h1 className="mt-2 text-center text-5xl md:text-5xl lg:text-6xl font-bold leading-tight">
            24/7 Emergency Home Repair
            <br />
            in Dubai
          </h1>

          {/* Subtitle */}
          <p className="mt-8 text-center text-lg md:text-2xl text-white/95 leading-relaxed">
            AC failure. Burst pipe. Electrical emergency.
            <br />
            <span className="font-bold">
              We respond NOW
            </span>{" "}
            — any time, any day.
          </p>

         {/* Call Button */}
<div className="mt-12 flex justify-center">
  <a
    href="tel:+971561517463"
    className="bg-white rounded-3xl shadow-2xl
    px-4 md:px-12 py-6
    flex items-center gap-5
    emergency-pulse
    hover:shadow-2xl
    hover:scale-105
    transition-all duration-300
    cursor-pointer"
  >
    <Phone
      size={42}
      className="text-red-600"
    />

    <span className="text-red-600 font-bold text-2xl md:text-4xl">
      +971 56 151 7463
    </span>
  </a>
</div>

{/* Availability */}
<p className="text-center mt-8 text-lg md:text-xl">
  Available 24 hours | 7 days | 365 days
</p>

          {/* Features */}
          <div className="mt-10 flex flex-wrap justify-center gap-8 md:gap-12">

            <div className="flex items-center gap-2">
              <Zap
                size={22}
                className="text-yellow-300"
              />
              <span className="text-base md:text-lg">
                Fast Response
              </span>
            </div>

            <div className="flex items-center gap-2">
              <BadgeCheck
                size={22}
                className="text-yellow-300"
              />
              <span className="text-base md:text-lg">
                Licensed Technicians
              </span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin
                size={22}
                className="text-yellow-300"
              />
              <span className="text-base md:text-lg">
                All Dubai Areas
              </span>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}