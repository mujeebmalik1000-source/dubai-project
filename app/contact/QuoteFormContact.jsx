"use client";
import { useState, useRef } from "react";


import {
  ShieldCheck,
  BadgeCheck,
  Clock3,
  Send,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function QuoteFormContact() {
  const [urgency, setUrgency] = useState("planning");
    const alertRef = useRef(null);

  return (
    <section className="w-full bg-[#f5f7fb] py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="bg-[#061224] text-white px-6 py-10">
          <h2 className="text-2xl font-bold text-center">
            Request a Quote
          </h2>

          <p className="text-center text-sm text-gray-400 mt-2 mb-4">
            Fill out the form below and we'll get back to you within
            4 business hours
          </p>

          <div className="border-t border-white/20 mt-1 mb-4"></div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] text-gray-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              <span>DED Licensed</span>
            </div>

            <div className="flex items-center gap-2">
              <BadgeCheck className="w-4 h-4 text-green-400" />
              <span>SIRA Certified</span>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              <span>Fully Insured</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock3 className="w-4 h-4 text-green-400" />
              <span>6-Month Warranty</span>
            </div>
          </div>
        </div>

        {/* Emergency Alert */}
        {urgency === "emergency" && (
            
          <div
          ref={alertRef}
           className="mx-6 mt-6 rounded-xl border-2 border-red-300 bg-red-50 p-6">

            <div className="text-center">

              <h3 className="text-2xl md:text-3xl font-bold text-red-600">
                Need Help Right Now?
              </h3>

              <p className="mt-3 text-red-500 text-sm md:text-base">
                For the fastest emergency response, call or WhatsApp us
                directly. Our team is available 24/7.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">

                <a
                  href="tel:+9548025712"
                  className="flex items-center justify-center gap-2 rounded-md bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 font-semibold"
                >
                  <Phone size={18} />
                  Call +971 56 151 7463
                </a>

                <a
                  href="https://wa.me/971561517463"
                  target="_blank"
                  className="flex items-center justify-center gap-2 rounded-md bg-green-500 hover:bg-green-600 transition text-white px-6 py-3 font-semibold"
                >
                  <MessageCircle size={18} />
                  WhatsApp Now
                </a>

              </div>

              <p className="mt-5 text-red-500 text-sm">
                Or continue filling the form below — we'll prioritize your
                request.
              </p>

            </div>
          </div>
        )}

        {/* Form */}
        <div className="p-8">

          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="text-sm text-gray-500 font-medium mb-2 block">
                Name *
              </label>

              <input
                type="text"
                name="name"
                autoComplete="name"
                className="w-full border border-gray-300 rounded-sm px-3 py-3 outline-none focus:border-2 focus:border-[#2C5AA0]"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500 font-medium mb-2 block">
                Phone *
              </label>

              <input
                type="text"
                className="w-full border border-gray-300 rounded-sm px-3 py-3 outline-none focus:border-2 focus:border-[#2C5AA0]"
              />
            </div>

          </div>

          {/* Email */}

          <div className="mt-4">

            <label className="text-sm text-gray-500 font-medium mb-2 block">
              Email *
            </label>

            <input
              type="email"
              className="w-full border border-gray-300 rounded-sm px-3 py-3 outline-none focus:border-2 focus:border-[#2C5AA0]"
            />

          </div>

                    {/* Select */}

          <div className="grid md:grid-cols-2 gap-4 mt-8">

            <div>
              <label className="text-sm font-medium mb-1 block">
                Service Type
              </label>

              <select className="w-full border border-gray-300 text-gray-500 rounded-sm px-3 py-3">
                <option>Select a service</option>
                <option>AC Service</option>
                <option>Plumbing</option>
                <option>Electrical</option>
                <option>Renovation</option>
                <option>Cleaning</option>
                <option>Security/CCTV</option>
                <option>Carpentry</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">
                Property Type
              </label>

              <select className="w-full border border-gray-300 text-gray-500 rounded-sm px-3 py-3">
                <option>Select property type</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Townhouse</option>
                <option>Office</option>
                <option>Other</option>
              </select>
            </div>

          </div>

          {/* Location */}

          <div className="mt-8">

            <label className="text-sm font-medium text-gray-600 mb-2 block">
              Location / Community
            </label>

            <div className="relative">

              <MapPin className="absolute left-3 top-4 w-4 h-4 text-gray-500" />

              <input
                type="text"
                placeholder="e.g. Dubai Marina, JVC, Arabian Ranches"
                className="w-full border border-gray-300 rounded-sm pl-10 pr-3 py-3 outline-none focus:border-2 focus:border-[#2C5AA0]"
              />

            </div>

          </div>

          {/* Description */}

          <div className="mt-8">

            <label className="text-sm font-medium text-gray-600 mb-1 block">
              Description of Work Needed
            </label>

            <textarea
              rows={4}
              placeholder="Please describe the issue or work you need done..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 resize-none outline-none focus:border-2 focus:border-[#2C5AA0]"
            />

          </div>

          {/* Radio */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Preferred Contact */}

            <div>

              <label className="block text-base mt-8 font-medium text-gray-700 mb-4">
                Preferred Contact Method
              </label>

              <div className="flex flex-wrap gap-4">

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="contact_method"
                    defaultChecked
                    className="scale-125 accent-blue-600"
                  />
                  <span className="text-base text-gray-500">
                    Phone
                  </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="contact_method"
                    className="scale-125 accent-blue-600"
                  />
                  <span className="text-base text-gray-500">
                    WhatsApp
                  </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="contact_method"
                    className="scale-125 accent-blue-600"
                  />
                  <span className="text-base text-gray-500">
                    Email
                  </span>
                </label>

              </div>

            </div>

            {/* Urgency */}

            <div>

              <label className="block text-base mt-8 font-medium text-gray-700 mb-4">
                Urgency
              </label>

              <div className="flex flex-col gap-3">

                <label className="flex items-center gap-2 cursor-pointer">

                  <input
                    type="radio"
                    name="urgency"
                    value="emergency"
                    checked={urgency === "emergency"}
                    onChange={(e) => {
                    setUrgency(e.target.value);

                    setTimeout(() => {
                    alertRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                   });
                   }, 100);
                   }}
                    className="scale-125 accent-red-500"
                   
                  />

                  <span className="text-base text-gray-500">
                    Emergency - Need help now
                  </span>

                </label>

                <label className="flex items-center gap-2 cursor-pointer">

                  <input
                    type="radio"
                    name="urgency"
                    value="soon"
                    checked={urgency === "soon"}
                    onChange={(e) => setUrgency(e.target.value)}
                    className="scale-125"
                    style={{ accentColor: "#ab9009" }}
                  />

                  <span className="text-base text-gray-500">
                    Soon - Within 48 hours
                  </span>

                </label>

                <label className="flex items-center gap-2 cursor-pointer">

                  <input
                    type="radio"
                    name="urgency"
                    value="planning"
                    checked={urgency === "planning"}
                    onChange={(e) => setUrgency(e.target.value)}
                    className="scale-125 accent-blue-600"
                  />

                  <span className="text-base text-gray-500">
                    Planning - Just getting quotes
                  </span>

                </label>

              </div>

            </div>

          </div>

          {/* Button */}

          <button className="w-full mt-8 bg-[#123b82] hover:bg-[#0d2d63] text-white py-3 rounded-md flex justify-center items-center gap-2 transition cursor-pointer">

            <Send className="w-4 h-4" />

            Submit Request

          </button>

          <p className="text-center text-sm text-gray-500 mt-4">

            Form submissions are monitored throughout the day.
            For emergencies{" "}

            <a
              href="tel:+9548025712"
              className="text-[#123b82] font-semibold hover:underline"
            >
              call directly
            </a>{" "}

            for fastest response.

          </p>

        </div>

      </div>

    </section>

  );
}



