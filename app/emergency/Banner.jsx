"use client";

import { Phone, MessageSquareText, Asterisk } from "lucide-react";

export default function Banner() {
  return (
    <section className="bg-[#E52521] border-t-8 border-[#111827]">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Left */}

          <div className="flex flex-col sm:flex-row items-center gap-6 lg:translate-x-25">

            <div className="w-15 h-15 rounded-lg bg-white/20 flex items-center justify-center">

              <Asterisk
                size={32}
                strokeWidth={3}
                className="text-white"
              />

            </div>

            <div className="text-center sm:text-left">

              <h2 className="text-white text-1xl md:text-2xl font-bold">
                Need Emergency Service?
              </h2>

              <p className="text-white/90 text-base md:text-base mt-2">
                Our emergency team responds 24/7 across all of Dubai.
              </p>

            </div>

          </div>

          {/* Right */}


          <div className="flex flex-col sm:flex-row gap-5 w-full lg:w-auto lg:mr-25">

            {/* Phone Button */}

            <a
              href="tel:+971561517463"
              className="
                phone-pulse
                bg-white
                text-red-600
                px-7
                py-4
                rounded-lg
                flex items-center
                justify-center
                gap-4
                font-bold
                text-base
                hover:-translate-y-1
                transition-all
                duration-300
                shadow-xl
              "
            >
              <Phone size={20} />

              +971 56 151 7463
            </a>

            {/* WhatsApp */}

            <a
              href="https://wa.me/971561517463"
              target="_blank"
              className="
                bg-[#19B44A]
                hover:bg-[#14963D]
                text-white
                px-7
                py-4
                rounded-lg
                flex items-center
                justify-center
                gap-4
                font-bold
                text-base
                hover:-translate-y-1
                transition-all
                duration-300
                shadow-xl
              "
            >
              <MessageSquareText size={20} />

              WhatsApp
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}