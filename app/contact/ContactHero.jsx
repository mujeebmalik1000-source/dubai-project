"use client";

import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative h-[420px] sm:h-[500px] md:h-[450px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/laptop.png" 
        alt="Contact Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#111827]/95"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6 sm:px-8 lg:px-10">
        <div className="max-w-7xl">

          <h1
            className="
              text-white
              font-bold
              leading-tight
              text-3xl
              xl:text-5xl
              md:text-5xl
              mt-18
            "
          >
            Get in Touch with Dubai's Home Maintenance <br /> Experts
          </h1>

          <p
            className="
              mt-6
              text-white/90
              text-base
              sm:text-lg
              md:text-xl
              max-w-2xl
              leading-relaxed
            "
          >
            Available 24/7 for emergencies. Responsive, helpful, and
            ready to assist.
          </p>

        </div>
      </div>
    </section>
  );
}