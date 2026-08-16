"use client";

import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock3,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

export default function ContactCard() {
  return (
    <div className="bg-[#08152E] text-white rounded-2xl shadow-xl p-8 sticky top-28">

      <h2 className="text-2xl font-bold mb-3">
        Need Immediate Help?
      </h2>

      <p className="text-gray-300 text-sm leading-7 mb-8">
        Contact our support team anytime. We are available 24/7 for
        emergency home maintenance services across Dubai.
      </p>

      {/* Contact Details */}

      <div className="space-y-6">

        <div className="flex items-start gap-4">
          <div className="bg-[#184896] p-3 rounded-full">
            <Phone size={20} />
          </div>

          <div>
            <h4 className="font-semibold">Call Us</h4>
            <p className="text-gray-300">
              +971 56 151 7463
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-green-600 p-3 rounded-full">
            <MessageCircle size={20} />
          </div>

          <div>
            <h4 className="font-semibold">WhatsApp</h4>
            <p className="text-gray-300">
              +971 56 151 7463
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-red-600 p-3 rounded-full">
            <Mail size={20} />
          </div>

          <div>
            <h4 className="font-semibold">Email</h4>
            <p className="text-gray-300 break-all">
              info@dubaihomeservices.com
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-yellow-500 p-3 rounded-full">
            <MapPin size={20} />
          </div>

          <div>
            <h4 className="font-semibold">Office</h4>
            <p className="text-gray-300">
              Prime Tower, Business Bay,<br />
              Dubai, UAE
            </p>
          </div>
        </div>

      </div>

      {/* Divider */}

      <div className="border-t border-white/20 my-8"></div>

      {/* Why Choose Us */}

      <h3 className="text-xl font-semibold mb-5">
        Why Choose Us?
      </h3>

      <div className="space-y-4">

        <div className="flex items-center gap-3">
          <ShieldCheck className="text-green-400" size={20} />
          <span>Licensed & Fully Insured</span>
        </div>

        <div className="flex items-center gap-3">
          <BadgeCheck className="text-blue-400" size={20} />
          <span>6-Month Workmanship Warranty</span>
        </div>

        <div className="flex items-center gap-3">
          <Clock3 className="text-yellow-400" size={20} />
          <span>24/7 Emergency Support</span>
        </div>

      </div>

      {/* Button */}

      <button className="w-full mt-8 bg-[#184896] hover:bg-[#123b79] transition-all duration-300 py-3 rounded-lg font-semibold">
        Call Now
      </button>

    </div>
  );
}