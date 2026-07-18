"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import {
  BadgeCheck,
  Clock3,
  ShieldCheck,
  Wallet,
  Wrench,
  Users,
  Headphones,
  Star,
} from "lucide-react";

export default function WhyChooseUsPage() {
  return (
    <main>

      {/* ================= HERO ================= */}

      <section className="relative h-[340px] sm:h-[420px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">

        <Image
          src="/images/choose-us.png"
          alt="Why Choose Us"
          fill
          priority
          className="object-cover object-[center_15%]"
        />

        {/* Blue Overlay */}

        <div className="absolute inset-0 bg-[#08152E]/90"></div>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-5xl px-6"
        >

          <span className="inline-block bg-white text-[#184896] px-5 py-2 rounded-full text-sm font-semibold mb-6">
            WHY CHOOSE PROTECH
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight">
            Dubai's Most Trusted
            <br />
            Home Maintenance Company
          </h1>

          <p className="mt-8 text-base md:text-lg text-blue-100 leading-8 max-w-3xl mx-auto">
            From AC repair and plumbing to electrical work and full
            home renovation, ProTech delivers premium quality,
            transparent pricing and exceptional customer service.
          </p>

        </motion.div>

      </section>

      {/* ================= INTRO ================= */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >

            <span className="text-[#184896] font-bold uppercase tracking-[3px]">
              WHY PEOPLE TRUST US
            </span>

            <h2 className="text-3xl md:text-5xl font-bold mt-5">
              Delivering Excellence Every Day
            </h2>

            <p className="text-gray-600 text-lg leading-8 max-w-3xl mx-auto mt-8">
              We combine experienced technicians, premium materials,
              transparent pricing and 24/7 customer support to provide
              a service experience that exceeds expectations.
            </p>

          </motion.div>

        </div>

      </section>

      {/* ================= FEATURES ================= */}

<section className="py-20 bg-[#f8fafc]">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <span className="text-[#184896] font-bold uppercase tracking-[3px]">
        OUR ADVANTAGES
      </span>

      <h2 className="text-3xl md:text-5xl font-bold mt-4">
        Why Customers Choose ProTech
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto mt-6 leading-8">
        We focus on quality, reliability and customer satisfaction in
        every project we complete.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          icon: BadgeCheck,
          title: "Certified Experts",
          text: "Highly trained professionals with years of experience.",
        },
        {
          icon: Clock3,
          title: "24/7 Emergency",
          text: "Fast response whenever you need urgent assistance.",
        },
        {
          icon: ShieldCheck,
          title: "Guaranteed Quality",
          text: "Premium workmanship backed by quality assurance.",
        },
        {
          icon: Wallet,
          title: "Transparent Pricing",
          text: "No hidden charges, fair and honest quotations.",
        },
        {
          icon: Wrench,
          title: "Latest Equipment",
          text: "Modern tools for faster and safer maintenance.",
        },
        {
          icon: Users,
          title: "Experienced Team",
          text: "Friendly professionals dedicated to customer satisfaction.",
        },
        {
          icon: Headphones,
          title: "Excellent Support",
          text: "Helpful customer support before and after service.",
        },
        {
          icon: Star,
          title: "5-Star Service",
          text: "Trusted by thousands of happy customers in Dubai.",
        },
      ].map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow hover:shadow-2xl transition cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-[#184896]/10 flex items-center justify-center mb-6">
              <Icon size={28} className="text-[#184896]" />
            </div>

            <h3 className="text-xl font-bold mb-3">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-7">
              {item.text}
            </p>
          </motion.div>
        );
      })}

    </div>

  </div>

</section>

{/* ================= OUR PROCESS ================= */}

<section className="py-20 bg-white">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <span className="text-[#184896] font-bold uppercase tracking-[3px]">
        HOW WE WORK
      </span>

      <h2 className="text-3xl md:text-5xl font-bold mt-4">
        Our Simple Working Process
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto mt-6 leading-8">
        From your first call to project completion, we make the entire
        process smooth, transparent and hassle-free.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          number: "01",
          title: "Book Service",
          text: "Call us or request a free quote online.",
        },
        {
          number: "02",
          title: "Site Inspection",
          text: "Our experts inspect and understand your requirements.",
        },
        {
          number: "03",
          title: "Professional Work",
          text: "Certified technicians complete the work efficiently.",
        },
        {
          number: "04",
          title: "Quality Check",
          text: "Final inspection ensures complete customer satisfaction.",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
          className="bg-[#f8fafc] rounded-2xl p-8 shadow hover:shadow-xl transition cursor-pointer"
        >
          <div className="w-16 h-16 rounded-full bg-[#184896] text-white flex items-center justify-center text-2xl font-bold mb-6">
            {item.number}
          </div>

          <h3 className="text-2xl font-bold mb-4">
            {item.title}
          </h3>

          <p className="text-gray-600 leading-7">
            {item.text}
          </p>
        </motion.div>
      ))}

    </div>

  </div>

</section>

{/* ================= COMPANY STATISTICS ================= */}

<section className="py-20 bg-[#184896]">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-8"
    >

      <div className="bg-white rounded-2xl p-10 text-center hover:scale-105 transition duration-300 cursor-pointer shadow-lg">
        <h3 className="text-5xl font-bold text-[#184896]">
          5000+
        </h3>

        <p className="mt-4 text-gray-600 font-medium">
          Happy Clients
        </p>
      </div>

      <div className="bg-white rounded-2xl p-10 text-center hover:scale-105 transition duration-300 cursor-pointer shadow-lg">
        <h3 className="text-5xl font-bold text-[#184896]">
          10+
        </h3>

        <p className="mt-4 text-gray-600 font-medium">
          Years Experience
        </p>
      </div>

      <div className="bg-white rounded-2xl p-10 text-center hover:scale-105 transition duration-300 cursor-pointer shadow-lg">
        <h3 className="text-5xl font-bold text-[#184896]">
          150+
        </h3>

        <p className="mt-4 text-gray-600 font-medium">
          Expert Technicians
        </p>
      </div>

      <div className="bg-white rounded-2xl p-10 text-center hover:scale-105 transition duration-300 cursor-pointer shadow-lg">
        <h3 className="text-5xl font-bold text-[#184896]">
          24/7
        </h3>

        <p className="mt-4 text-gray-600 font-medium">
          Emergency Support
        </p>
      </div>

    </motion.div>

  </div>

</section>

{/* ================= TESTIMONIALS ================= */}

<section className="py-20 bg-[#f8fafc]">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >

      <span className="text-[#184896] font-bold uppercase tracking-[3px]">
        TESTIMONIALS
      </span>

      <h2 className="text-3xl md:text-5xl font-bold mt-4">
        What Our Customers Say
      </h2>

      <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-8">
        Customer satisfaction is our biggest achievement. Here's what
        homeowners across Dubai say about our services.
      </p>

    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {[
        {
          name: "Ahmed Khan",
          text: "Outstanding AC repair service. Very professional technicians and transparent pricing.",
        },
        {
          name: "Sarah Ali",
          text: "Highly recommended! Fast response and excellent home maintenance services.",
        },
        {
          name: "Mohammed Hassan",
          text: "The renovation team exceeded my expectations. Great quality and friendly staff.",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -8 }}
          className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition cursor-pointer"
        >
          <div className="text-yellow-400 text-2xl mb-4">
            ★★★★★
          </div>

          <p className="text-gray-600 leading-8 italic">
            "{item.text}"
          </p>

          <h4 className="mt-6 font-bold text-lg">
            {item.name}
          </h4>

          <span className="text-gray-500 text-sm">
            Happy Customer
          </span>
        </motion.div>
      ))}

    </div>

  </div>

</section>

{/* ================= SERVICE GUARANTEE ================= */}

<section className="py-20 bg-white">

  <div className="max-w-6xl mx-auto px-6 text-center">

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >

      <span className="inline-block bg-[#184896] text-white px-5 py-2 rounded-full font-semibold mb-6">
        OUR GUARANTEE
      </span>

      <h2 className="text-3xl md:text-5xl font-bold">
        Quality You Can Trust
      </h2>

      <p className="text-gray-600 text-lg leading-8 max-w-3xl mx-auto mt-8">
        Every service is backed by skilled professionals, premium
        materials, and our commitment to complete customer satisfaction.
      </p>

    </motion.div>

  </div>

</section>

{/* ================= CTA ================= */}

<section className="py-24 bg-[#184896]">

  <div className="max-w-5xl mx-auto text-center px-6">

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >

      <span className="inline-block bg-white text-[#184896] px-5 py-2 rounded-full font-semibold mb-6">
        GET STARTED TODAY
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-white">
        Ready To Experience Premium Home Services?
      </h2>

      <p className="text-blue-100 text-lg mt-6 leading-8 max-w-3xl mx-auto">
        Contact our expert team today for professional AC repair,
        plumbing, electrical work, renovation and home maintenance
        services across Dubai.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">

        <button className="bg-white text-[#184896] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition cursor-pointer">
          Request Free Quote
        </button>

        <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#184896] transition cursor-pointer">
          Contact Us
        </button>

      </div>

    </motion.div>

  </div>

</section>

{/* ================= FOOTER ================= */}

<Footer />

    </main>
  );
}