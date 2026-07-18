"use client";

import { useEffect, useState } from "react";

import { Phone,
         ShieldCheck,
         MapPin,
         Clock3,
         BadgeCheck,
         ArrowUp,
         }  from "lucide-react";



export default function Hero() {


   const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


 





  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/door.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#07152f]/85" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex min-h-screen items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05]">
              Dubai's Trusted Home
              <br />
              Maintenance & Renovation
              <br />
              Company
            </h1>

            <p className="mt-6 text-base md:text-lg text-gray-200 max-w-4xl">
              AC breakdown? Water leak? Power tripping? We fix it right — backed by
              our manufacturer-backed parts. 6-month workmanship warranty and manufacturer-backed parts.
              
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="bg-[#1d4f9d] hover:bg-[#163f81] px-8 py-3 rounded text-lg font-semibold flex items-center justify-center gap-3 cursor-pointer">
                <Phone size={20} />
                Call/WhatsApp +971 56 151 7463
              </button>

              <button className="border border-white/30 bg-white/10 backdrop-blur-sm px-8 py-3 rounded text-lg font-semibold hover:bg-white/20 cursor-pointer">
                Book Online
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 bg-[#1d4f9d] py-5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center lg:justify-between gap-6 text-white text-sm md:text-base">

            <div className="flex items-center gap-2">
              <ShieldCheck size={18} />
              <span>SIRA Certified & Licensed</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Prime Tower, Business Bay, Dubai</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock3 size={18} />
              <span>24/7 Emergency Support</span>
            </div>

            <div className="flex items-center gap-2">
              <BadgeCheck size={18} />
              <span>
                6-Month Workmanship Warranty + Manufacturer Warranty
              </span>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}