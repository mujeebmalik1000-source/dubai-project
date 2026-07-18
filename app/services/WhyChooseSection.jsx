"use client";

import {
  ShieldCheck,
  Clock3,
  BadgeCheck,
  Wallet,
  ArrowRight,
} from "lucide-react";

export default function WhyChooseSection() {
  return (
    <section className="bg-gradient-to-r from-[#184896] to-[#2646b3] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-12">
              Why Dubai Trusts PROTECH
            </h2>

            <div className="grid sm:grid-cols-2 gap-10">

              {/* Item 1 */}
              <div className="flex gap-4">
                <ShieldCheck
                  size={24}
                  className="text-yellow-400 flex-shrink-0 mt-1"
                />
                <div>
                  <h3 className="text-white text-base font-semibold">
                    Licensed & Insured
                  </h3>
                  <p className="text-blue-100 text-sm mt-1">
                    DED registered, fully compliant
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-4">
                <Clock3
                  size={24}
                  className="text-yellow-400 flex-shrink-0 mt-1"
                />
                <div>
                  <h3 className="text-white text-base font-semibold">
                    Fast Response
                  </h3>
                  <p className="text-blue-100 text-sm mt-1">
                    Rapid emergency dispatch
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-4">
                <BadgeCheck
                  size={24}
                  className="text-yellow-400 flex-shrink-0 mt-1"
                />
                <div>
                  <h3 className="text-white text-base font-semibold">
                    Satisfaction Guarantee
                  </h3>
                  <p className="text-blue-100 text-sm mt-1">
                    100% workmanship warranty
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex gap-4">
                <Wallet
                  size={24}
                  className="text-yellow-400 flex-shrink-0 mt-1"
                />
                <div>
                  <h3 className="text-white text-base font-semibold">
                    Transparent Pricing
                  </h3>
                  <p className="text-blue-100 text-sm mt-1">
                    No hidden fees, upfront quotes
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right">

            <h3 className="text-white text-1xl md:text-2xl font-medium mb-8">
              Ready to get started?
            </h3>

            <button className="group bg-white text-[#184896] hover:bg-gray-100 transition-all duration-300 rounded-lg px-7 py-4 text-base font-semibold flex items-center gap-2 cursor-pointer">
              Learn More About Us

              <ArrowRight
                size={25}
                className="group-hover:translate-x-1 transition-all"
              />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}