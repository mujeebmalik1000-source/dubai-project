"use client";

const faqs = [
  {
    question: "How quickly do you respond to inquiries?",
    answer:
      "During business hours, we typically respond within 1-2 hours. All inquiries are answered within 4 business hours. For emergencies, call our main line for immediate assistance.",
  },
  {
    question: "Do you provide free quotes?",
    answer:
      "Yes, quotes are free for all services. Most standard services can be quoted based on your description. Complex renovation projects may require a site visit.",
  },
  {
    question: "What information should I have ready when I call?",
    answer:
      "It helps to know: the type of service needed, your location, a description of the issue or work required, and your preferred timing. Photos are helpful for complex issues.",
  },
  {
    question: "Can I book online?",
    answer:
      "Yes, use the form above or WhatsApp us your requirements. We'll respond with availability and confirm your booking.",
  },
];

export default function CommonQuestions() {
  return (
    <section className="bg-[#f8fafc] py-20 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0B1736] mb-12">
          Common Questions
        </h2>

        {/* FAQ Cards */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-7 shadow-sm"
            >
              <h3 className="text-base font-bold text-[#0B1736] mb-1">
                {faq.question}
              </h3>

              <p className="text-[16px] leading-6 text-gray-500">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}