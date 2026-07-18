"use client";

import { Phone, MessageCircle, Mail } from "lucide-react";

const contactData = [
  {
    icon: Phone,
    title: "Phone (24/7)",
    value: "+971 56 151 7463",
    description:
      "Our phone lines are staffed faster diagnosis emergencies, this is the fastest way to get a technician dispatched.",
    iconBg: "bg-blue-100",
    iconHoverBg: "group-hover:bg-blue-900",
    iconColor: "text-blue-900",
    valueColor: "text-blue-900",
    borderHover: "hover:border-blue-700",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+971 56 151 7463",
    description:
      "Send us a WhatsApp with diagnosis. We respond quickly with photos of the issue for during business hours.",
    iconBg: "bg-green-100",
    iconHoverBg: "group-hover:bg-green-600",
    iconColor: "text-green-600",
    valueColor: "text-green-600",
    borderHover: "hover:border-green-600",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@protechfitout.com",
    description:
      "For non-urgent inquiries, quotes, faster documentation. We typically 4 business hours.",
    iconBg: "bg-blue-100",
    iconHoverBg: "group-hover:bg-blue-900",
    iconColor: "text-blue-900",
    valueColor: "text-blue-900",
    borderHover: "hover:border-blue-700",
  },
  {
    icon: () => (
      <span className="text-red-500 group-hover:text-white text-5xl font-bold leading-none transition-all duration-300">
        G
      </span>
    ),
    title: "Find Us on Google",
    value: "Google Business Profile",
    description:
      "View our Google Business Profile, for faster reviews, and get directions to our office.",
    iconBg: "bg-red-100",
    iconHoverBg: "group-hover:bg-red-500",
    iconColor: "",
    valueColor: "text-red-500",
    borderHover: "hover:border-red-500",
  },
];

export default function ReachusContact() {
  return (
    <section className="bg-white py-16 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-14">
          How to Reach Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-4 xl:grid-cols-4 gap-5">
          {contactData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`group bg-[#F9FBFD] border border-gray-300 rounded-lg p-5 text-center cursor-pointer transition-all duration-300 hover:shadow-lg ${item.borderHover}`}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 ${item.iconBg} ${item.iconHoverBg} rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300`}
                >
                  {index === 3 ? (
                    <Icon />
                  ) : (
                    <Icon
                      className={`w-7 h-7 ${item.iconColor} group-hover:text-white transition-all duration-300`}
                    />
                  )}
                </div>

                <h3 className="text-[17px] font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>

                <p className={`text-[15px] font-bold ${item.valueColor} mb-6 break-words`}>
                  {item.value}
                </p>

                <p className="text-[15px] leading-5 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}