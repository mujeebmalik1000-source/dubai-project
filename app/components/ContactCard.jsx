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

        <a
  href="tel:+919548025712"
  className="flex items-start gap-4 cursor-pointer group"
>
  <div className="bg-[#184896] p-3 rounded-full group-hover:bg-[#1f5ab5] transition">
    <Phone size={20} />
  </div>

  <div>
    <h4 className="font-semibold">Call Us</h4>
    <p className="text-gray-300">
      +91 954 802 5712
    </p>
  </div>
</a>



<a
  href="https://wa.me/919927101994"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-start gap-4 cursor-pointer group"
>
  <div className="bg-green-600 p-3 rounded-full group-hover:bg-green-500 transition">
    <MessageCircle size={20} />
  </div>

  <div>
    <h4 className="font-semibold group-hover:text-green-400 transition">
      WhatsApp
    </h4>

    <p className="text-gray-300">
      +91 992 710 1994
    </p>
  </div>
</a>



<a
  href="mailto:mujeebmalik1000@gmail.com"
  className="flex items-start gap-4 cursor-pointer group"
>
  <div className="bg-red-600 p-3 rounded-full group-hover:bg-red-500 transition">
    <Mail size={20} />
  </div>

  <div>
    <h4 className="font-semibold group-hover:text-red-400 transition">
      Email
    </h4>

    <p className="text-gray-300 break-all">
      mujeebmalik1000@gmail.com
    </p>
  </div>
</a>



<a
  href="https://www.google.com/maps/search/?api=1&query=Prime+Tower+Business+Bay+Dubai+UAE"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-start gap-4 cursor-pointer group"
>
  <div className="bg-yellow-500 p-3 rounded-full group-hover:bg-yellow-400 transition">
    <MapPin size={20} />
  </div>

  <div>
    <h4 className="font-semibold group-hover:text-yellow-400 transition">
      Office
    </h4>

    <p className="text-gray-300">
      Prime Tower, Business Bay,<br />
      Dubai, UAE
    </p>
  </div>
</a>


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

      <button
  onClick={() => (window.location.href = "tel:9548025712")}
  className="w-full bg-[#1f5ab5] text-white py-3 mt-5 rounded-lg text-center font-semibold hover:bg-[#17498f] cursor-pointer transition"
>
  Call Now
</button>

      

    </div>
  );
}