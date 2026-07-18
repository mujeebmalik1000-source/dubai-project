"use client";

import {
  Bath,
  Building2,
  Building,
  Paintbrush,
  Hammer,
  ArrowRight,
} from "lucide-react";

export default function RenovationSection() {
  return (
    <section className="py-16 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex items-center gap-6 mb-10">
          <div className="w-14 h-14 bg-emerald-500 rounded -2x1 flex items-center justify-center">
            <Hammer size={28} className="text-white" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#081B47]">
              Renovation & Fit-Out
            </h2>

            <p className="text-gray-500 text-base mt-1">
              5 services available
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-2 gap-8">

          {/* Card 1 */}
          <div className="group border border-emerald-300 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer bg-white">
            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-5">
                <div className="w-14 h-14 bg-emerald-50  rounded-xl flex items-center justify-center">
                  <Bath size={28} className="text-emerald-600 " />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#081B47] transition-colors duration-300 group-hover:text-[#184896]">
                    Bathroom Renovation
                  </h3>

                  <p className="text-gray-500 mt-2 text-sm">
                    Complete bathroom remodeling
                    <br />
                    with waterproofing guarantee
                  </p>
                </div>
              </div>

              <ArrowRight
                size={30}
                className="text-gray-300 group-hover:text-emerald-600 transition-all"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="group border border-emerald-300 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer bg-white">
            <div className="flex justify-between items-start">
              <div className="flex  items-center gap-5">
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center">
                  <Building2 size={28} className="text-emerald-600" />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#081B47]  transition-colors duration-300 group-hover:text-[#184896]">
                    Villa Renovation
                  </h3>

                  <p className="text-gray-500 mt-2 text-sm">
                    Large-scale villa upgrades with
                    <br />
                    coordinated trades
                  </p>
                </div>
              </div>

              <ArrowRight
                size={30}
                className="text-gray-300 group-hover:text-emerald-600 transition-all"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="group border border-emerald-300 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer bg-white">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center">
                  <Building size={28} className="text-emerald-600" />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#081B47]  transition-colors duration-300 group-hover:text-[#184896]">
                    Apartment Renovation
                  </h3>

                  <p className="text-gray-500 mt-2 text-sm">
                    Full apartment makeovers from
                    <br />
                    flooring to lighting
                  </p>
                </div>
              </div>

              <ArrowRight
                size={30}
                className="text-gray-300 group-hover:text-emerald-600 transition-all"
              />
            </div>
          </div>

          {/* Card 4 */}
          <div className="group border border-emerald-300 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer bg-white">
            <div className="flex justify-between items-start">
              <div className="flex  items-center gap-5">
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center">
                  <Paintbrush size={28} className="text-emerald-600" />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#081B47]  transition-colors duration-300 group-hover:text-[#184896]">
                    Painting Services
                  </h3>

                  <p className="text-gray-500 mt-2 text-sm">
                    Interior & exterior painting with
                    <br />
                    premium finishes
                  </p>
                </div>
              </div>

              <ArrowRight
                size={30}
                className="text-gray-300 group-hover:text-emerald-600 transition-all"
              />
            </div>
          </div>

          {/* Card 5 */}
          <div className="group border border-emerald-300 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer bg-white">
            <div className="flex justify-between items-start">
              <div className="flex  items-center gap-5">
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center">
                  <Hammer size={28} className="text-emerald-600" />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#081B47]  transition-colors duration-300 group-hover:text-[#184896]">
                    Carpentry & Joinery
                  </h3>

                  <p className="text-gray-500 mt-2 text-sm">
                    Custom woodwork, furniture &
                    <br />
                    built-in solutions
                  </p>
                </div>
              </div>

              <ArrowRight
                size={30}
                className="text-gray-300 group-hover:text-emerald-600 transition-all"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}