"use client";

import { Phone, Asterisk } from "lucide-react";

export default function ContactBanner() {
  return (
    <section className="bg-[#E32222] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <div className="flex items-center justify-center gap-4">
          <Asterisk
            size={36}
            strokeWidth={3.5}
            className="text-white"
          />

          <h2 className="text-lg md:text-2xl font-bold text-white">
            Need Emergency Service?
          </h2>
        </div>

        {/* Description */}
        <p className="mt-4 max-w-5xl mx-auto text-white text-sm md:text-[16px] leading-5">
          Don't wait - call us now for immediate assistance with AC failures,
          burst pipes, electrical hazards, and other <br/> emergencies.
        </p>

        {/* Button */}
        <div className="mt-10">
          <a
            href="tel:+971561517463"
            className="inline-flex items-center gap-4 bg-white text-[#E32222] font-bold
            text-xl px-6 py-4 rounded-sm hover:bg-gray-100 transition-all duration-300"
          >
            <Phone size={22} />
            Call +971 56 151 7463
          </a>
        </div>

      </div>
    </section>
  );
}