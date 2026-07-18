"use client";

import {
  Snowflake,
  Wrench,
  Droplets,
  Zap,
  Hammer,
  Shield,
  Lock,
  ArrowRight,
  Paintbrush,
  Bath,
  CookingPot,
  Grid2X2,
  Home,
  Tv,
  Sofa,
  BrushCleaning,
  Camera,
  ScanFace,
  FileText,
} from "lucide-react";

export default function MegaMenu({ mobile = false }) {
  const itemClass =
    "flex items-center gap-3 px-2 py-2 rounded-md cursor-pointer text-sm text-gray-600 hover:bg-gray-50 hover:text-[#184896] transition-all duration-300";

  return (
    <div
      className={
        mobile
          ? "w-full bg-white border border-gray-200 rounded-lg overflow-hidden"
          : "absolute top-full right-[-450px] mt-5 w-[880px] bg-white rounded-xl border border-gray-200 shadow-2xl p-6 z-50"
      }
    >
      <div
        className={
          mobile
            ? "space-y-8 p-5"
            : "grid grid-cols-4 gap-8"
        }
      >
        {/* Column 1 */}
        <div>
          <h3 className="flex items-center gap-2 text-sm font-bold mb-5">
            <Wrench size={22} className="text-[#184896]" />
            Repair & Maintenance
          </h3>

          <ul className="space-y-2">

            <li className={itemClass}>
              <Snowflake size={16} />
              AC Repair
            </li>

            <li className={itemClass}>
              <Hammer size={16} />
              Emergency Repair
            </li>

            <li className={itemClass}>
              <Droplets size={16} />
              Plumbing Services
            </li>

            <li className={itemClass}>
              <Zap size={16} />
              Electrical Services
            </li>

            <li className={itemClass}>
              <Hammer size={16} />
              Handyman Services
            </li>

          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="flex items-center gap-2 text-sm font-bold mb-5">
            <Paintbrush size={22} className="text-[#184896]" />
            Renovation & Fit-Out
          </h3>

          <ul className="space-y-2">

            <li className={itemClass}>
              <CookingPot size={16} />
              Kitchen Renovation
            </li>

            <li className={itemClass}>
              <Bath size={16} />
              Bathroom Renovation
            </li>

            <li className={itemClass}>
              <Paintbrush size={16} />
              Painting Services
            </li>

            <li className={itemClass}>
              <Hammer size={16} />
              Carpentry & Joinery
            </li>

            <li className={itemClass}>
              <Grid2X2 size={16} />
              Flooring & Tiling
            </li>

            <li className={itemClass}>
              <Home size={16} />
              Media Wall
            </li>

          </ul>
        </div>
                {/* Column 3 */}
        <div>
          <h3 className="flex items-center gap-2 text-sm font-bold mb-5">
            <Home size={22} className="text-[#184896]" />
            Cleaning & Home
          </h3>

          <ul className="space-y-2">

            <li className={itemClass}>
              <BrushCleaning size={16} />
              Deep Cleaning
            </li>

            <li className={itemClass}>
              <Home size={16} />
              Maid Services
            </li>

            <li className={itemClass}>
              <Tv size={16} />
              TV Mounting
            </li>

            <li className={itemClass}>
              <Sofa size={16} />
              Furniture Assembly
            </li>

            <li className={itemClass}>
              <Home size={16} />
              Curtain Installation
            </li>

          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="flex items-center gap-2 text-sm font-bold mb-5">
            <Shield size={22} className="text-[#184896]" />
            Security & Smart Home
          </h3>

          <ul className="space-y-2">

            <li className={itemClass}>
              <Camera size={16} />
              CCTV Installation
            </li>

            <li className={itemClass}>
              <Shield size={16} />
              Security Systems
            </li>

            <li className={itemClass}>
              <ScanFace size={16} />
              Smart Home
            </li>

            <li className={itemClass}>
              <Lock size={16} />
              Access Control
            </li>

            <li className={itemClass}>
              <Shield size={16} />
              Annual Maintenance
            </li>

          </ul>
        </div>

      </div>

      {/* Brands - Desktop Only */}
      {!mobile && (
        <>
          <div className="border-t mt-6 pt-5">

            <h4 className="flex items-center gap-2 font-bold text-base mb-4">
              <Snowflake size={22} className="text-[#184896]" />
              AC Repair by Brand
            </h4>

            <div className="flex flex-wrap gap-3">

              <span className="px-4 py-2 rounded bg-red-50 text-red-600 hover:bg-red-100 cursor-pointer">
                O General AC
              </span>

              <span className="px-4 py-2 rounded bg-blue-50 text-blue-600 hover:bg-blue-100 cursor-pointer">
                Daikin AC
              </span>

              <span className="px-4 py-2 rounded bg-pink-50 text-pink-600 hover:bg-pink-100 cursor-pointer">
                LG AC
              </span>

              <span className="px-4 py-2 rounded bg-indigo-50 text-indigo-600 hover:bg-indigo-100 cursor-pointer">
                Carrier AC
              </span>

              <span className="px-4 py-2 rounded bg-cyan-50 text-cyan-600 hover:bg-cyan-100 cursor-pointer">
                Midea AC
              </span>

              <span className="px-4 py-2 rounded bg-purple-50 text-purple-600 hover:bg-purple-100 cursor-pointer">
                Samsung AC
              </span>

            </div>

          </div>
                    {/* Bottom */}
          <div className="border-t mt-6 pt-5 flex items-center justify-between">

            <button className="text-[#184896] text-sm font-semibold flex items-center gap-2 hover:underline underline-offset-4">
              View All Services
              <ArrowRight size={18} />
            </button>

            <button className="bg-[#184896] text-white px-6 py-3 rounded-md hover:bg-[#123b7c] transition-all duration-300 flex items-center gap-2">
              <FileText size={18} />
              Get Free Quote
            </button>

          </div>
        </>
      )}

      {/* Mobile Button */}
      {mobile && (
        <div className="border-t p-4">
          <button className="w-full bg-[#184896] text-white py-3 rounded-md font-semibold flex items-center justify-center gap-2">
            <FileText size={18} />
            Get Free Quote
          </button>
        </div>
      )}
    </div>
  );
}