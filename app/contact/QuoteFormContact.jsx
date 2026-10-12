
"use client";

import { useState, useRef, useEffect } from "react";

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
  const [services, setServices] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    propertyType: "",
    location: "",
    description: "",
    contactMethod: "Phone",
    urgency: "planning",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const alertRef = useRef(null);

  // Fetch dynamic services
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/api/services");
        const data = await response.json();

        if (data.success) {
          setServices(data.services);
        }
      } catch (error) {
        console.error("Failed to fetch services:", error);
      }
    };

    fetchServices();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUrgencyChange = (value) => {
    setUrgency(value);

    setFormData((prev) => ({
      ...prev,
      urgency: value,
    }));

    if (value === "emergency") {
      setTimeout(() => {
        alertRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to submit request");
      }

      setMessage(
        "Your request has been submitted successfully. We will contact you soon."
      );

      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        propertyType: "",
        location: "",
        description: "",
        contactMethod: "Phone",
        urgency: "planning",
      });

      setUrgency("planning");
    } catch (error) {
      console.error("Contact form error:", error);
      setError(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

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
            className="mx-6 mt-6 rounded-xl border-2 border-red-300 bg-red-50 p-6"
          >
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
                  href="tel:+971561517463"
                  className="flex items-center justify-center gap-2 rounded-md bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 font-semibold"
                >
                  <Phone size={18} />
                  Call +971 56 151 7463
                </a>

                <a
                  href="https://wa.me/971561517463"
                  target="_blank"
                  rel="noopener noreferrer"
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
        <form onSubmit={handleSubmit} className="p-8">

          {/* Name + Phone */}
          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="text-sm text-gray-500 font-medium mb-2 block">
                Name *
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
                className="w-full border border-gray-300 rounded-sm px-3 py-3 outline-none focus:border-2 focus:border-[#2C5AA0]"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500 font-medium mb-2 block">
                Phone *
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
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
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-sm px-3 py-3 outline-none focus:border-2 focus:border-[#2C5AA0]"
            />

          </div>

          {/* Service + Property */}
          <div className="grid md:grid-cols-2 gap-4 mt-8">

            <div>
              <label className="text-sm font-medium mb-1 block">
                Service Type
              </label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full border border-gray-300 text-gray-500 rounded-sm px-3 py-3"
              >
                <option value="">Select a service</option>

                {services.map((service) => (
                  <option
                    key={service._id}
                    value={service.title}
                  >
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">
                Property Type
              </label>

              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="w-full border border-gray-300 text-gray-500 rounded-sm px-3 py-3"
              >
                <option value="">Select property type</option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
                <option value="Townhouse">Townhouse</option>
                <option value="Office">Office</option>
                <option value="Other">Other</option>
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
                name="location"
                value={formData.location}
                onChange={handleChange}
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
              name="description"
              value={formData.description}
              onChange={handleChange}
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

                {["Phone", "WhatsApp", "Email"].map((method) => (
                  <label
                    key={method}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="contactMethod"
                      value={method}
                      checked={formData.contactMethod === method}
                      onChange={handleChange}
                      className="scale-125 accent-blue-600"
                    />

                    <span className="text-base text-gray-500">
                      {method}
                    </span>
                  </label>
                ))}

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
                    onChange={(e) =>
                      handleUrgencyChange(e.target.value)
                    }
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
                    onChange={(e) =>
                      handleUrgencyChange(e.target.value)
                    }
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
                    onChange={(e) =>
                      handleUrgencyChange(e.target.value)
                    }
                    className="scale-125 accent-blue-600"
                  />

                  <span className="text-base text-gray-500">
                    Planning - Just getting quotes
                  </span>

                </label>

              </div>

            </div>

          </div>

          {/* Success */}
          {message && (
            <div className="mt-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
              {message}
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-8 bg-[#123b82] hover:bg-[#0d2d63] text-white py-3 rounded-md flex justify-center items-center gap-2 transition cursor-pointer disabled:opacity-60"
          >

            <Send className="w-4 h-4" />

            {loading ? "Submitting..." : "Submit Request"}

          </button>

          <p className="text-center text-sm text-gray-500 mt-4">

            Form submissions are monitored throughout the day.
            For emergencies{" "}

            <a
              href="tel:+971561517463"
              className="text-[#123b82] font-semibold hover:underline"
            >
              call directly
            </a>{" "}
            for fastest response.

          </p>

        </form>

      </div>
    </section>
  );
}




