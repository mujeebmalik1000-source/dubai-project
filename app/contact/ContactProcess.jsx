"use client";

const steps = [
  {
    number: "1",
    title: "Quick Response",
    description:
      "We acknowledge all inquiries within 4 business hours. Emergency calls are answered immediately.",
  },
  {
    number: "2",
    title: "Assessment",
    description:
      "For most services, we can provide a quote based on your description. Complex jobs may require a site visit.",
  },
  {
    number: "3",
    title: "Clear Quote",
    description:
      "You'll receive a detailed written quote specifying all work, materials, timeline, and total cost. No hidden fees.",
  },
  {
    number: "4",
    title: "Scheduling",
    description:
      "Once approved, we schedule the work at a time that suits you. Our technicians are punctual and will confirm before arrival.",
  },
  {
    number: "5",
    title: "Quality Service",
    description:
      "Our technicians complete the work to specification, explain what was done, and ensure you're satisfied before leaving.",
  },
  {
    number: "6",
    title: "Follow-Up",
    description:
      "We follow up to ensure everything is working perfectly. Any issues are addressed promptly under our workmanship guarantee.",
  },
];

export default function ContactProcess() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0B1736] mb-20">
          What Happens After You Contact Us
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">

          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center"
            >

              {/* Circle */}
              <div className="w-13 h-13 rounded-full bg-[#184E97] text-white text-1xl font-bold flex items-center justify-center shadow-md">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="mt-4 text-[16px] font-bold text-[#0B1736]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-1 text-[14px] leading-5 text-gray-500 max-w-sm">
                {step.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}