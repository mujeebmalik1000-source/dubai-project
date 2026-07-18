"use client";

import {
  Snowflake,
  Wrench,
  Zap,
  TriangleAlert,
} from "lucide-react";

export default function HandleCards() {
  return (
    <section className="py-8 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#081B47]">
            Emergencies We Handle
          </h2>

          <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="group border border-transparent rounded-xl p-6 bg-white shadow-sm hover:border-red-500 hover:shadow-lg transition-all duration-300 cursor-pointer">

            <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center mb-6">
              <Snowflake size={32} className="text-red-600" />
            </div>

            <h3 className="text-xl font-bold text-[#081B47] mb-3">
              Emergency AC Repair
            </h3>

            <p className="text-gray-600 leading-5 mb-4">
              AC failure during Dubai summer is more than uncomfortable —
              it can be dangerous, especially for elderly family members,
              young children and people with health conditions.
            </p>

            <h4 className="font-semibold text-sm text-gray-400 mb-4">
              Common AC emergencies we handle:
            </h4>

            <ul className="space-y-2 text-sm">
              {[
                "Complete system failure (AC won't turn on)",
                "Compressor failure (runs but no cooling)",
                "Refrigerant leaks (hissing sounds)",
                "Electrical faults causing shutdown",
                "Frozen evaporator coils",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-gray-600"
                >
                  <span className="text-red-600 font-bold text-xl">✱</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 */}
          <div className="group border border-transparent rounded-xl p-6 bg-white shadow-sm hover:border-red-500 hover:shadow-lg transition-all duration-300 cursor-pointer">

            <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
              <Wrench size={32} className="text-blue-600" />
            </div>

            <h3 className="text-xl font-bold text-[#081B47] mb-3">
              Emergency Plumbing
            </h3>

            <p className="text-gray-600 leading-5 mb-4">
              Water emergencies escalate quickly. What starts as a leak
              becomes flooding that damages floors, furniture, walls and
              the property below yours.
            </p>

            <h4 className="font-semibold text-sm text-gray-400 mb-4">
              Plumbing emergencies we respond to:
            </h4>

            <ul className="space-y-2 text-sm">
              {[
                "Burst pipes (high volume water flow)",
                "Major leaks from fixtures",
                "Sewage backups (health hazard)",
                "Water heater failures / leaking",
                "Overflowing toilets that won't stop",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-gray-600"
                >
                  <span className="text-blue-600 font-bold text-xl">✱</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3 */}
          <div className="group border border-transparent rounded-xl p-6 bg-white shadow-sm hover:border-red-500 hover:shadow-lg transition-all duration-300 cursor-pointer">

            <div className="w-16 h-16 rounded-xl bg-yellow-100 flex items-center justify-center mb-6">
              <Zap size={32} className="text-yellow-600" />
            </div>

            <h3 className="text-xl font-bold text-[#081B47] mb-3">
              Emergency Electrical
            </h3>

            <p className="text-gray-600 leading-5 mb-4">
              Electrical emergencies pose immediate safety risks.
              Sparks, burning smells and exposed wiring require
              qualified professionals.
            </p>

            <h4 className="font-semibold text-sm text-gray-400 mb-4">
              Electrical emergencies we handle:
            </h4>

            <ul className="space-y-2 text-sm">
              {[
                "Complete power failure in unit",
                "Sparking outlets or switches",
                "Burning smells from electrical sources",
                "Tripped breakers that won't reset",
                "Exposed or damaged wiring",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-gray-600"
                >
                  <span className="text-yellow-600 font-bold text-xl">✱</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Warning */}
        <div className="mt-12 bg-yellow-50 border border-yellow-300 rounded-xl p-6 flex items-start gap-4">

          <TriangleAlert
            size={30}
            className="text-yellow-600 mt-1 flex-shrink-0"
          />

          <div>
            <h3 className="font-bold text-xl text-[#081B47] mb-2">
              Safety First
            </h3>

            <p className="text-gray-700 leading-7">
              If you experience electrical sparks, burning smells or
              exposed wiring, stay away from the affected area, turn
              off power at the main breaker if safely possible and call
              immediately. Do not attempt DIY repairs.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}