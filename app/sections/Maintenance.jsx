"use client";

import { Trophy, Medal, BadgeDollarSign, ArrowRight, Receipt } from "lucide-react";

export default function MaintenancePackages() {
  return (
    <section className="py-16 md:py-24 border-y border-gray-300">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-[1.7fr_0.7fr] gap-10 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1736] leading-tight">
              Maintenance Packages
            </h2>

            <p className="mt-2 text-lg md:text-1xl text-slate-600 leading-relaxed max-w-5xl">
              Avoid surprise costs and get priority scheduling with our
              Bronze, Silver, and Gold maintenance packages.
              Regular maintenance prevents breakdowns and extends equipment life.
            </p>

            {/* Packages */}
            <div className="mt-10 flex flex-col md:flex-row gap-4">

              <div className="bg-[#f5e8b5] hover:bg-[#e7d38d] px-8 py-3 rounded-md flex items-center gap-3 cursor-pointer">
                <Trophy size={21} className="text-[#9c4f00]" />
                <span className="text-base font-bold text-[#9c4f00]">
                  Bronze - AED 999/yr
                </span>
              </div>

              <div className="bg-[#dfe5ee] hover:bg-[#c9d3e2]  px-8 py-3 rounded-md flex items-center gap-3 cursor-pointer">
                <Medal size={21} className="text-[#274b7a]" />
                <span className="text-base font-bold text-[#274b7a]">
                  Silver - AED 1,999/yr
                </span>
              </div>

              <div className="bg-[#f5efb8] hover:bg-[#e6de94] px-8 py-3 rounded-md flex items-center gap-3 cursor-pointer">
                <BadgeDollarSign size={21} className="text-[#9c6500]" />
                <span className="text-base font-bold text-[#9c6500]">
                  Gold - AED 3,999/yr
                </span>
              </div>

            </div>

            {/* Link */}
            <button className="mt-5 flex items-center gap-2 text-[#114a99] font-semibold text-1xl hover:gap-4 transition-all cursor-pointer">
              Compare All Packages
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Right Card */}
          <div className=" border border-gray-200 rounded-2xl bg-gray-50 p-6 text-center max-w-[320px]  mx-auto cursor-pointer">

            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-lg flex items-center justify-center">
                <Receipt size={42} className="text-[#1f4f96]" />
              </div>
            </div>

            <h3 className="mt-5 text-2xl font-bold text-[#0b1736]">
              Save up to 30%
            </h3>

            <p className="mt-2 text-base text-slate-600">
              on annual maintenance costs
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}