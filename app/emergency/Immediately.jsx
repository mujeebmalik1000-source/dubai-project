"use client";

import { Phone, MessageSquareText, FileText } from "lucide-react";

export default function Immediately() {
  return (
    <section className="bg-gradient-to-r from-red-700 via-red-600 to-orange-500 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-white font-bold text-2xl md:text-4xl">
          EMERGENCY? Call Now.
        </h2>

        {/* Phone */}
        <div className="flex justify-center mt-12">
          <a
            href="tel:+971561517463"
            className="phone-pulse bg-white
            rounded-2xl
            px-5 md:px-11
            py-4 md:py-6
            flex items-center gap-5
            shadow-2xl
            pulse-emergency
            hover:scale-105
            hover:shadow-white/30
            transition-all duration-300"
           
            
             
          
          >
            <Phone
              size={35}
              className="text-red-600"
            />

            <span className="text-red-600 font-black text-4xl md:text-4xl">
              +971 56 151 7463
            </span>
          </a>
        </div>

        {/* Text */}
        <p className="mt-14 text-white text-lg md:text-1xl leading-relaxed">
          Don't wait. Don't suffer. Don't risk further damage.
          <br />
          <span className="font-bold">
            We respond immediately, 24 hours a day, 7 days a week.
          </span>
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">

          {/* WhatsApp */}
          <a
            href="#"
            className="btn-pulse bg-green-600 hover:bg-green-700
            text-white
            px-7 py-3
            rounded-lg
            flex items-center justify-center gap-3
            font-bold text-base
            transition-all duration-300"
          >
            <MessageSquareText size={20} />
            WhatsApp
          </a>

          {/* Quote */}
          <a
            href="#"
            className="btn-pulse border border-white/40
            bg-white/10 backdrop-blur-sm
            hover:bg-white/20
            text-white
            px-7 py-3
            rounded-lg
            flex items-center justify-center gap-3
            font-bold text-base
            transition-all duration-300"
          >
            <FileText size={20} />
            Request Quote
          </a>

        </div>

      </div>
    </section>
  );
}