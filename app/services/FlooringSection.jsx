"use client";

import {
  Grid2x2,
  LayoutGrid,
  Drill,
  Hammer,
  ArrowRight,
} from "lucide-react";

export default function FlooringSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex items-center gap-6 mb-10">
          <div className="w-14 h-14 bg-emerald-500 rounded -2x1 flex items-center justify-center">
            <Hammer size={28} className="text-white" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#081B47]">
             Flooring & Tiling
            </h2>

            <p className="text-gray-500 text-base mt-1">
              3 services available
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
                  <Grid2x2 size={28} className="text-emerald-600 " />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#081B47] transition-colors duration-300 group-hover:text-[#184896]">
                  Flooring & Tiling
                  </h3>

                  <p className="text-gray-500 mt-2 text-sm">
                    Tile, marble, vinyl, and hardwood
                    <br />
                     flooring services
                    
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
                  <LayoutGrid  size={28} className="text-emerald-600" />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#081B47]  transition-colors duration-300 group-hover:text-[#184896]">
                    Tile Installation
                  </h3>

                  <p className="text-gray-500 mt-2 text-sm">
                    Professional tile installation for
                    
                    <br />
                    floors, walls, and bathrooms
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
                  < Drill size={28} className="text-emerald-600" />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#081B47]  transition-colors duration-300 group-hover:text-[#184896]">
                    Tile Repair & Regrouting
                  </h3>

                  <p className="text-gray-500 mt-2 text-sm">
                    Cracked tile repair and grout 
                    <br />
                    restoration
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