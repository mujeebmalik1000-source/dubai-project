import { Snowflake, Wrench, Plug, Phone } from "lucide-react";

const emergencyServices = [
  {
    icon: Snowflake,
    title: "Emergency AC Repair",
    description: "AC stopped? We fix it fast, day or night.",
  },
  {
    icon: Wrench,
    title: "Emergency Plumber",
    description: "Burst pipes and active leaks handled immediately.",
  },
  {
    icon: Plug,
    title: "Emergency Electrician",
    description: "Power outages and electrical faults resolved safely.",
  },
];

export default function Emergency() {
  return (
    <section className="bg-[#ef1d22] py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-3xl font-bold text-white ">
            24/7 Emergency Services
          </h2>

          <p className="mt-5 text-base text-white/90 max-w-4xl mx-auto">
            When you need help fast, we respond immediately.
            Our emergency team handles:
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {emergencyServices.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  bg-[#f03838]
                  rounded-2xl
                  p-1
                  text-center
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-2xl
                  hover:bg-white/15
                "
              >
                <div className="flex justify-center mt-5">
                  <Icon
                    size={36}
                    className="text-white"
                    strokeWidth={2}
                  />
                </div>

                <h3 className="mt-4 text-base font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-white/80 mb-4">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-16">
          <button
            className="
              bg-white
              text-[#ef1d22]
              px-6
              py-4
              rounded
              font-bold
              text-1xl
              flex
              items-center
              gap-4
              cursor-pointer
              transition-all
              duration-300
              hover:scale-105
            "
          >
            <Phone size={20} />
            Call +971 56 151 7463 Now
          </button>
        </div>

      </div>
    </section>
  );
}