"use client";

import { Check } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Call Our Emergency Line",
    description:
      "Dial +971 56 151 7463. A real person answers 24/7 – even at 3am, even on holidays. Describe your emergency briefly: 'AC completely dead', 'pipe burst in bathroom', 'power out in apartment'.",
  },
  {
    number: "2",
    title: "Immediate Technician Dispatch",
    description:
      "We dispatch the nearest qualified technician immediately. You'll receive confirmation including the technician's name and immediate safety steps. For water estimated technician arrives equipped for the arrival time.",
  },
  {
    number: "3",
    title: "Safety Guidance While You Wait",
    description:
      "Our team advises on immediate safety technician arrives equipped for the steps. For water emergencies: locate your main shut-off valve. For electrical: isolate equipped for the most the affected area.",
  },
  {
    number: "4",
    title: "Technician Arrival & Assessment",
    description:
      "Your technician arrives equipped for the most common for the most emergency scenarios. They quickly assess the situation and clear quote before work begins explain equipped for the most what's needed.",
  },
  {
    number: "5",
    title: "Quote & Approval",
    description:
      "Even in emergencies, we provide a clear quote before work begins. You know the cost upfront — no surprises. resolves the emergency by restoring your AC.",
  },
  {
    number: "6",
    title: "Emergency Resolution",
    description:
      "Our technician resolves the emergency by restoring your AC, stopping the leak or restoring electrical power arrives equipped for the most common for the most emergency scenarios.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-[#081B47]">
            Our Emergency Response Process
          </h2>

          <p className="text-gray-500 mt-2">
            From your call to problem solved
          </p>

          <div className="w-16 h-1 bg-red-600 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col sm:flex-row gap-5 border-b border-gray-200 pb-7"
            >
              {/* Number */}
              <div className="flex-shrink-0">
                <div className="w-11 h-11 rounded-full bg-red-600 text-white font-bold flex items-center justify-center">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-bold text-[#081B47] mb-2">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {step.description}
                </p>
              </div>
            </div>
          ))}

          {/* Last Step */}
          <div className="flex flex-col sm:flex-row gap-5">

            <div className="flex-shrink-0">
              <div className="w-11 h-11 rounded-full bg-green-600 text-white flex items-center justify-center">
                <Check size={22} />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#081B47] mb-2">
                Payment & Documentation
              </h3>

              <p className="text-gray-600 leading-7">
                Pay by cash or card. Receive full documentation of work
                performed. If follow-up is needed, we schedule it before
                leaving.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}