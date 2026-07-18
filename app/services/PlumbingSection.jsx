import {
  Wrench,
  Droplets,
  Zap,
  Wind,
  ArrowRight,
} from "lucide-react";

export default function PlumbingSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex items-center gap-6 mb-10">
          <div className="w-14 h-14 bg-blue-500 rounded -2x1 flex items-center justify-center">
            <Wrench size={28} className="text-white" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#081B47]">
              Plumbing & Electrical
            </h2>
            <p className="text-gray-500 text-base mt-1">
              4 services available
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="group border border-blue-200 rounded -2x1 p-5 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <div className="flex justify-between items-start">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Wrench size={28} className="text-blue-600" />
                </div>

                <div>
                  <h3 className="text-1xl font-semibold text-[#081B47]">
                    Plumbing Services
                  </h3>

                  <p className="text-gray-500 mt-1 text-sm">
                    Complete plumbing solutions from
                    <br />
                    leaks to installations
                  </p>
                </div>
              </div>

              <ArrowRight
                size={30}
                className="text-gray-300 group-hover:text-blue-600"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="group border border-blue-200 rounded -2xl p-5 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <div className="flex justify-between items-start">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Droplets
                    size={28}
                    className="text-blue-600"
                  />
                </div>

                <div>
                  <h3 className="text-1xl font-semibold text-[#081B47]">
                    Leak Repair & Detection
                  </h3>

                  <p className="text-gray-500 mt-1 text-sm">
                    Fast leak detection and repair to
                    <br />
                     prevent water damage
                    
                  </p>
                </div>
              </div>

              <ArrowRight
                size={30}
                className="text-gray-300 group-hover:text-blue-600"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="group border border-blue-200 rounded -2xl p-5 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <div className="flex justify-between items-start">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Wind
                    size={28}
                    className="text-blue-600"
                  />
                </div>

                <div>
                  <h3 className="text-1xl font-semibold text-[#081B47]">
                    Electrician Services
                  </h3>

                  <p className="text-gray-500 mt-1 text-sm">
                    DEWA-compliant electrical work
                    <br/>
                    and safety inspections
                  </p>
                </div>
              </div>

              <ArrowRight
                size={30}
                className="text-gray-300 group-hover:text-blue-600"
              />
            </div>
          </div>

          {/* Card 4 */}
          <div className="group border border-blue-200 rounded -2xl p-5 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <div className="flex justify-between items-start">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Zap size={28} className="text-blue-600" />
                </div>

                <div>
                  <h3 className="text-1xl font-semibold text-[#081B47]">
                    Circuit Breaker Repair
                  </h3>

                  <p className="text-gray-500 mt-1 text-sm">
                    Power tripping and circuit breaker
                    <br />
                    fault resolution
                    
                  </p>
                </div>
              </div>

              <ArrowRight
                size={30}
                className="text-gray-300 group-hover:text-blue-600"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}