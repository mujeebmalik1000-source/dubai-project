"use client";

export default function Weekend() {
  const faqs = [
    {
      question: "How fast can you actually respond?",
      answer:
        "We aim to arrive as quickly as possible anywhere in Dubai for genuine emergencies. Actual times depend on traffic conditions and technician locations at the time of your call. We communicate realistic arrival times upfront so you know what to expect.",
    },
    {
      question: "Is there an extra charge for night and weekend emergencies?",
      answer:
        "Yes. Emergency response outside normal business hours includes an emergency call-out fee (AED 150–250 depending on time and location). This fee is always communicated before dispatch so you can decide if immediate service is worth the premium versus waiting for regular business hours.",
    },
    {
      question: "What if you can't fix the emergency completely that night?",
      answer:
        "If complete repair requires parts that must be ordered or work that can't be completed immediately, we implement a safe temporary solution. For AC, this might mean getting one unit working while we order parts. For plumbing, this means stopping the leak even if final repair waits until morning. You won't be left in an unsafe or unbearable situation.",
    },
    {
      question: "Should I try to fix it myself before calling?",
      answer:
        "For safety reasons, we recommend against DIY emergency repairs, especially electrical issues. However, there are helpful things you can do: locate your water shut-off valve (for plumbing), locate your electrical panel (for electrical), and ensure the area is safe. We'll guide you on specific steps when you call.",
    },
    {
      question: "What qualifies as an 'emergency'?",
      answer:
        "We consider these emergencies: complete AC failure during extreme heat, active water leaks or flooding, complete power failure, electrical hazards (sparking, burning smell), and sewage backups. If you're unsure whether your situation qualifies, call us—we'll advise honestly.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100  border border-gray-200">
      <div className="max-w-3xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-1xl md:text-3xl font-bold text-[#081B47]">
            Emergency Service FAQs
          </h2>

          <div className="w-16 h-1 bg-red-600 rounded-full mx-auto mt-4"></div>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg bg-white p-6 hover:shadow-md transition duration-300"
            >
              <h3 className="text-base md:text-base font-bold text-[#081B47] mb-3">
                {faq.question}
              </h3>

              <p className="text-gray-500 leading-6 text-base">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}