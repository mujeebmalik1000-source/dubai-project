"use client";

export default function Pricing() {
  const pricing = [
    {
      service: "Emergency Call-Out Fee",
      note: "6pm-8am, Weekends, Holidays",
      price: "150 - 250",
      highlight: true,
    },
    {
      service: "Emergency AC Repair",
      note: "Parts charged separately",
      price: "From 350",
    },
    {
      service: "Emergency Plumbing Repair",
      note: "Parts charged separately",
      price: "From 350",
    },
    {
      service: "Emergency Electrical Repair",
      note: "Parts charged separately",
      price: "From 350",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#081B47]">
            Emergency Service Pricing
          </h2>

          <p className="mt-2 text-base md:text-lg text-gray-400">
            Transparent pricing – you'll know the cost before we dispatch
          </p>

          <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">

          {/* Header */}
          <div className="bg-[#161d31] text-white font-bold hidden md:grid grid-cols-12 px-8 py-4 text-base">
            <div className="col-span-8">Service</div>
            <div className="col-span-4 text-right">Price (AED)</div>
          </div>

          {/* Rows */}
          {pricing.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-12 px-8 py-4 border-t border-gray-200 ${
                item.highlight ? "bg-red-50" : "bg-gray-50"
              }`}
            >
              <div className="md:col-span-8">
                <h3 className="text-base font-semibold text-[#081B47]">
                  {item.service}
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  {item.note}
                </p>
              </div>

              <div className="md:col-span-4 flex md:justify-end items-center mt-5 md:mt-0">
                <span
                  className={`text-base font-bold ${
                    item.highlight
                      ? "text-red-600"
                      : "text-[#081B47]"
                  }`}
                >
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <p className="text-center text-gray-400 text-base leading-8 mt-8 max-w-5xl mx-auto">
          The emergency call-out fee covers immediate dispatch and
          after-hours availability. Work performed is quoted separately
          and approved before we begin. No hidden fees.
        </p>

      </div>
    </section>
  );
}