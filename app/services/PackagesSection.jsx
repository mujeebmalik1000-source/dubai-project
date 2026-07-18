"use client";

import {
  PackageCheck,
  Settings,
  Package,
  Crown,
  ArrowRight,
} from "lucide-react";

export default function PackagesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex items-center gap-6 mb-10">
          <div className="w-14 h-14 bg-cyan-500 rounded-2xl flex items-center justify-center">
            <PackageCheck size={28} className="text-white" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#081B47]">
                Maintenance Packages
            </h2>

            <p className="text-gray-500 text-base mt-1">
              3 services available
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="group border border-cyan-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer bg-white">
            <div className="flex justify-between items-start">
              <div className="flex gap-5">
                <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center">
                  < Settings size={28} className="text-cyan-600" />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#081B47] transition-colors duration-300 group-hover:text-[#184896]">
                    Bronze Package-AED 999/yr
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
                className="text-gray-300 group-hover:text-cyan-600 transition-all"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="group border border-cyan-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer bg-white">
            <div className="flex justify-between items-start">
              <div className="flex gap-5">
                <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center">
                  <Package size={28} className="text-cyan-600" />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#081B47] transition-colors duration-300 group-hover:text-[#184896]">
                    Silver Package - AED 1,999/yr
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
                className="text-gray-300 group-hover:text-cyan-600 transition-all"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="group border border-cyan-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer bg-white">
            <div className="flex justify-between items-start">
              <div className="flex gap-5">
                <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center">
                  <Crown size={28} className="text-cyan-600" />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#081B47] transition-colors duration-300 group-hover:text-[#184896]">
                    Gold Package - AED 3,999/yr
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
                className="text-gray-300 group-hover:text-cyan-600 transition-all"
              />
            </div>
          </div>

          

        </div>
      </div>
    </section>
  );
}