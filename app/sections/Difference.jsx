"use client";

import { Phone, FileText } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ReadyToExperience() {
  return (
    <section className="bg-[#1f4f96] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Ready to Experience the PROTECH Difference?
          </h2>

          <p className="mt-4 text-lg md:text-1xl text-white/90 leading-relaxed">
            Whether you need emergency repairs right now or want to discuss a
            renovation project, we're here to <br/> help.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-col lg:flex-row items-center justify-center gap-6">

          {/* Phone */}
          <button
            className="
              bg-white
              text-[#1f4f96]
              px-7
              py-4
              rounded
              flex
              items-center
              gap-4
              text-base
              font-bold
              cursor-pointer
              transition-all
              duration-300
              hover:bg-gray-100
            "
          >
            <Phone size={28} />
            +971 56 151 7463
          </button>

          {/* WhatsApp */}
          <button
            className="
              bg-[#28c75a]
              text-white
              px-8
              py-4
              rounded
              flex
              items-center
              gap-4
              text-base
              font-bold
              cursor-pointer
              transition-all
              duration-300
              hover:bg-[#22b14c]
            "
          >
            <FaWhatsapp size={32} />
            WhatsApp
          </button>

          {/* Quote */}
          <button
            className="
              border-2
              border-white/40
              text-white
              px-7
              py-4
              rounded
              flex
              items-center
              gap-4
              text-base
              font-bold
              cursor-pointer
              transition-all
              duration-300
              hover:bg-white/10
            "
          >
            <FileText size={28} />
            Get Free Quote
          </button>

        </div>

        {/* Bottom Text */}
        <p className="text-center text-white/50 text-sm md:text-x mt-6">
          Available 24/7 for emergencies
        </p>

      </div>
    </section>
  );
}