"use client";

import { MapPin } from "lucide-react";

const locations = [
  "Palm Jumeirah",
  "Dubai Marina",
  "Downtown Dubai",
  "Business Bay",
  "JVC",
  "JBR",
  "JLT",
  "Arabian Ranches",
  "Emirates Hills",
  "Dubai Hills Estate",
  "Jumeirah",
  "Al Barsha",
];

export default function LocationsMenu({ mobile = false }) {
  return (
    <div
      className={
        mobile
          ? "mt-2 w-full bg-white border border-gray-200 rounded-lg overflow-hidden"
          : "absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[230px] bg-white border border-gray-200 rounded-lg shadow-xl z-50"
      }
    >
      <div className="px-7 py-3 border-b border-gray-200">
        <h3 className="text-base font-bold text-gray-400 uppercase">
          Areas We Serve
        </h3>
      </div>

      <ul className="py-3 max-h-[600px] overflow-y-auto">
        {locations.map((location, index) => (
          <li
            key={index}
            className="flex items-center gap-2 px-7 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#184896] cursor-pointer"
          >
            <MapPin size={15} />
            {location}
          </li>
        ))}
      </ul>
    </div>
  );
}