"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How much does AC repair cost in Dubai?",
    answer:
      "Standard AC service starts from AED 150. Deep cleaning is AED 250. Emergency call-outs are AED 350. We provide a written quote before starting any work – no hidden charges. Call +971 56 151 7463 for a free estimate.",
  },
  {
    question: "What is included in a home maintenance contract in Dubai?",
    answer:
      "Home maintenance contracts typically include AC servicing, plumbing, electrical inspections, preventive maintenance, and priority support for repairs.",
  },
  {
    question: "Do you provide 24/7 emergency repair in Dubai?",
    answer:
      "Yes, our emergency response team is available 24/7 across Dubai for urgent AC, plumbing, and electrical issues.",
  },
  {
    question: "How do I find a licensed maintenance company in Dubai?",
    answer:
      "Choose a company that is licensed, insured, has verified reviews, and provides clear quotations with warranty coverage.",
  },
  {
    question: "What warranty do you offer on home repairs?",
    answer:
      "We provide a 6-month workmanship warranty on most repair and maintenance services, plus manufacturer warranties where applicable.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f7f8fa] py-10 md:py-24">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1736]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="mt-12 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
                bg-white
                border
                border-gray-200
                rounded-xl
                overflow-hidden
                hover:shadow-xl
                transition-all
                duration-300
                
              "
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  text-left
                  px-6
                  py-6
                  cursor-pointer
                "
              >
                <span className="text-base md:text-1xl font-semibold text-[#0b1736]">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <ChevronUp
                    size={24}
                    className="text-slate-400 flex-shrink-0"
                  />
                ) : (
                  <ChevronDown
                    size={24}
                    className="text-slate-400 flex-shrink-0"
                  />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-8">
                  <p className="text-sm md:text-base leading-relaxed text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}