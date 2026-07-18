"use client";

import { Headphones, Phone, FileText } from "lucide-react";

export default function HelpSection() {
  return (
    <section className="bg-[#04112d] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <Headphones className="w-16 h-16 text-[#4A8DFF]" />
          </div>

          {/* Heading */}
          <h2 className="text-white text-2xl md:text-3xl font-bold">
            Need Help Choosing a Service?
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-lg md:text-1xl mt-6 max-w-5xl mx-auto">
            Our team is here to help you find the right solution for your home.
            Get free consultation today.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">

            {/* Call Button */}
            <a
              href="tel:+971561517463"
              className="cursor-pointer bg-[#1f4f9c] hover:bg-[#184896] text-white font-semibold text-base px-7 py-4 rounded-lg flex items-center gap-4 transition-all duration-300 w-full md:w-auto justify-center"
            >
              <Phone size={24} />
              Call Now: +971 56 151 7463
            </a>

            {/* Quote Button */}
            <a
              href="#"
              className="cursor-pointer bg-white hover:bg-gray-100 text-[#081B47] font-semibold text-base px-7 py-4 rounded-lg flex items-center gap-4 transition-all duration-300 w-full md:w-auto justify-center"
            >
              <FileText size={24} />
              Request Free Quote
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}