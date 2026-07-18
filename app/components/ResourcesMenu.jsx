"use client";

import {
  FileText,
  Thermometer,
  Droplets,
  Wind,
  Volume2,
} from "lucide-react";
import Link from "next/link";

export default function ResourcesMenu({ mobile = false }) {
  return (

    <div
  className={
    mobile
      ? "mt-2 w-full bg-white border border-gray-200 rounded-lg overflow-hidden"
      : "absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[240px] max-w-[95vw] bg-white border border-gray-200 rounded-lg shadow-xl z-50"
  }
>

   

    {/* // <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[240px] max-w-[95vw] bg-white border border-gray-200 rounded-lg shadow-xl z-50"> */}

      {/* Learn */}
      <div>
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-sm font-bold text-gray-400 uppercase">
            Learn
          </h3>
        </div>
        
        <div className="px-2 py-3">
  <Link
    href="/blog"
    className="flex items-center gap-4 px-2 py-3 text-gray-600 hover:text-[#184896] hover:bg-gray-50 transition-all duration-300"
  >
    <FileText size={20} className="text-gray-400" />
    <span className="text-base">Blog & Guides</span>
  </Link>
</div>
</div>

      

      {/* AC Problems */}
      <div className="border-t border-gray-200">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-sm font-bold text-gray-400 uppercase">
            AC Problems
          </h3>
        </div>

        <ul className="py-3">
          <li className="flex items-center gap-4 px-6 py-3 cursor-pointer text-gray-600 hover:text-[#184896] hover:bg-gray-50 transition-all duration-300">
            <Thermometer size={15} className="text-orange-500" />
            <span className="text-sm">AC Not Cooling</span>
          </li>

          <li className="flex items-center gap-4 px-6 py-3 cursor-pointer text-gray-600 hover:text-[#184896] hover:bg-gray-50 transition-all duration-300">
            <Droplets size={15} className="text-blue-500" />
            <span className="text-sm">AC Leaking Water</span>
          </li>

          <li className="flex items-center gap-4 px-6 py-3 cursor-pointer text-gray-600 hover:text-[#184896] hover:bg-gray-50 transition-all duration-300">
            <Wind size={15} className="text-green-500" />
            <span className="text-sm">AC Bad Smell</span>
          </li>

          <li className="flex items-center gap-4 px-6 py-3 cursor-pointer text-gray-600 hover:text-[#184896] hover:bg-gray-50 transition-all duration-300">
            <Volume2 size={15} className="text-purple-500" />
            <span className="text-sm">AC Making Noise</span>
          </li>
        </ul>
      </div>
    </div>
  );
}