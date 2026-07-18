"use client";

import { Phone } from "lucide-react";

export default function EmergencyCTA() {
  return (
    <section className="bg-[#161d31] py-12 md:py-14">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col items-center text-center">

          {/* Heading */}
          <h2 className="text-white text-xl md:text-2xl font-bold">
            Having an Emergency Right Now?
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-gray-300 text-sm md:text-lg">
            Don't wait. Our team is standing by 24/7.
          </p>

          {/* Button */}
          <a
            href="tel:+971561517463"
            className="mt-10 inline-flex items-center gap-4
            bg-red-600 hover:bg-red-700
            text-white font-bold
            px-2 md:px-5
            py-4 md:py-4
            rounded-lg
            shadow-xl
            pulse-emergency
            transition-all duration-300
            hover:scale-105"
          >
            <Phone size={22} strokeWidth={2.5} />

            <span className="text-xl md:text-1xl">
              +971 56 151 7463
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}