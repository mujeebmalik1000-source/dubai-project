"use client";

import {
  ShieldAlert,
  Siren,
  Asterisk,
  Power,
  ArrowRight,
} from "lucide-react";

export default function EmergencySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex items-center gap-6 mb-10">
          <div className="w-14 h-14 bg-gray-700 rounded-2xl flex items-center justify-center">
            <ShieldAlert size={28} className="text-white" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#081B47]">
            Emergency Services
            </h2>

            <p className="text-gray-500 text-base mt-1">
              3 services available
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="group border border-bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer bg-white">
            <div className="flex justify-between items-start">
              <div className="flex gap-5">
                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center">
                  <Siren size={28} className="text-bg-gray-400" />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#081B47] transition-colors duration-300 group-hover:text-[#184896]">
                    
                  Emergency AC Repair
                  </h3>

                  <p className="text-gray-500 mt-2 text-sm">
                    Skilled professionals for all
                    <br />
                    household tasks
                  </p>
                </div>
              </div>

              <ArrowRight
                size={30}
                className="text-gray-300 group-hover:text-[#184896] transition-all"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="group border border-bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer bg-white">
            <div className="flex justify-between items-start">
              <div className="flex gap-5">
                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center">
                  <Asterisk size={28} className="text-bg-gray-400" />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#081B47] transition-colors duration-300 group-hover:text-[#184896]">
                    Emergency Plumber
                  </h3>

                  <p className="text-gray-500 mt-2 text-sm">
                    Professional TV wall mounting with
                    <br />
                    cable concealment
                  </p>
                </div>
              </div>

              <ArrowRight
                size={30}
                className="text-gray-300 group-hover:text-[#184896] transition-all"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="group border border-bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer bg-white">
            <div className="flex justify-between items-start">
              <div className="flex gap-5">
                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center">
                  <Power size={28} className="text-bg-gray-400" />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#081B47] transition-colors duration-300 group-hover:text-[#184896]">
                    Emergency Electician
                  </h3>

                  <p className="text-gray-500 mt-2 text-sm">
                    IKEA and flat-pack furniture
                    <br />
                    assembly service
                  </p>
                </div>
              </div>

              <ArrowRight
                size={30}
                className="text-gray-300 group-hover:text-[#184896] transition-all"
              />
            </div>
          </div>

       

        </div>
      </div>
    </section>
  );
}
