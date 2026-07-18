"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function OurTeamPage () {

    return(
    <main>

  {/* ================= HERO ================= */}

  <section className="relative h-[340px] sm:h-[420px] md:h-[500px] lg:h-[600px] overflow-hidden flex items-center justify-center">

    <Image
      src="/images/welcome.png"
      alt="Our Team"
      fill
      priority
      className="object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-r from-[#0A2A5E]/90 via-[#184896]/35 to-[#0A2A5E]/90" />

    <motion.div
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 max-w-5xl mx-auto text-center px-6"
    >

      <span className="inline-block bg-[#184896] text-white px-5 py-2 rounded-full text-sm font-semibold tracking-wide mb-6">
        OUR PROFESSIONAL TEAM
      </span>

      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
        Meet The Experts Behind
        <br />
        ProTech Dubai
      </h1>

      <p className="mt-8 text-lg md:text-xl text-gray-200 leading-8 max-w-3xl mx-auto">
        Our experienced engineers, technicians and customer support team
        work together to deliver exceptional maintenance and renovation
        services across Dubai.
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
          OUR PEOPLE
        </span>

        <h2 className="text-3xl md:text-5xl font-bold mt-5">
          Passionate Professionals You Can Trust
        </h2>

        <p className="text-gray-600 text-lg leading-8 max-w-3xl mx-auto mt-8">
          At ProTech, every project is handled by certified experts who
          are committed to quality, safety and customer satisfaction.
          We believe our people are the biggest strength of our company.
        </p>

      </motion.div>

    </div>

  </section>

  {/* ================= TEAM MEMBERS ================= */}

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
        OUR TEAM
      </span>

      <h2 className="text-3xl md:text-5xl font-bold mt-4">
        Meet Our Leadership
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto mt-6 leading-8">
        Our experienced professionals work together to provide
        world-class maintenance and renovation services across Dubai.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Card 1 */}
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
      >
        <div className="relative h-80 overflow-hidden">
          <Image
            src="/images/team1.png"
            alt="CEO"
            fill
            className="object-cover group-hover:scale-110 transition duration-500"
          />
        </div>

        <div className="p-6 text-center">
          <h3 className="text-2xl font-bold">
            Ahmed Hassan
          </h3>

          <p className="text-[#184896] font-semibold mt-2">
            Founder & CEO
          </p>

          <p className="text-gray-600 mt-4 leading-7">
            15+ years of experience managing premium maintenance
            projects across Dubai.
          </p>
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
      >
        <div className="relative h-80 overflow-hidden">
          <Image
            src="/images/team2.png"
            alt="Operations Manager"
            fill
            className="object-cover group-hover:scale-110 transition duration-500"
          />
        </div>

        <div className="p-6 text-center">
          <h3 className="text-2xl font-bold">
            Mohammed Ali
          </h3>

          <p className="text-[#184896] font-semibold mt-2">
            Operations Manager
          </p>

          <p className="text-gray-600 mt-4 leading-7">
            Ensuring every project is delivered on time with
            outstanding quality standards.
          </p>
        </div>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
      >
        <div className="relative h-80 overflow-hidden">
          <Image
            src="/images/team3.png"
            alt="Senior Engineer"
            fill
            className="object-cover group-hover:scale-110 transition duration-500"
          />
        </div>

        <div className="p-6 text-center">
          <h3 className="text-2xl font-bold">
            Omar Khan
          </h3>

          <p className="text-[#184896] font-semibold mt-2">
            Senior Engineer
          </p>

          <p className="text-gray-600 mt-4 leading-7">
            Specialist in AC systems, electrical maintenance,
            and smart home installations.
          </p>
        </div>
      </motion.div>

      {/* Card 4 */}
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
      >
        <div className="relative h-80 overflow-hidden">
          <Image
            src="/images/team4.png"
            alt="Customer Support"
            fill
            className="object-cover group-hover:scale-110 transition duration-500"
          />
        </div>

        <div className="p-6 text-center">
          <h3 className="text-2xl font-bold">
            Sarah Malik
          </h3>

          <p className="text-[#184896] font-semibold mt-2">
            Customer Success
          </p>

          <p className="text-gray-600 mt-4 leading-7">
            Dedicated to providing exceptional customer support
            and seamless service experiences.
          </p>
        </div>
      </motion.div>

    </div>

  </div>

</section>

{/* ================= WHY OUR TEAM ================= */}

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
        WHY OUR TEAM
      </span>

      <h2 className="text-3xl md:text-5xl font-bold mt-4">
        Excellence Is Our Standard
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto mt-6 leading-8">
        Every member of ProTech is committed to delivering premium
        workmanship, fast response times, and exceptional customer
        service throughout Dubai.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      <motion.div
        whileHover={{ y: -10 }}
        className="bg-[#f8fafc] rounded-2xl p-8 text-center shadow hover:shadow-xl transition cursor-pointer"
      >
        <div className="text-5xl mb-5">🏆</div>
        <h3 className="text-xl font-bold mb-3">Certified Experts</h3>
        <p className="text-gray-600">
          Skilled professionals with industry certifications.
        </p>
      </motion.div>

      <motion.div
        whileHover={{ y: -10 }}
        className="bg-[#f8fafc] rounded-2xl p-8 text-center shadow hover:shadow-xl transition cursor-pointer"
      >
        <div className="text-5xl mb-5">⚡</div>
        <h3 className="text-xl font-bold mb-3">Fast Response</h3>
        <p className="text-gray-600">
          Quick arrival and efficient solutions for every job.
        </p>
      </motion.div>

      <motion.div
        whileHover={{ y: -10 }}
        className="bg-[#f8fafc] rounded-2xl p-8 text-center shadow hover:shadow-xl transition cursor-pointer"
      >
        <div className="text-5xl mb-5">🤝</div>
        <h3 className="text-xl font-bold mb-3">Trusted Service</h3>
        <p className="text-gray-600">
          Thousands of satisfied customers across Dubai.
        </p>
      </motion.div>

      <motion.div
        whileHover={{ y: -10 }}
        className="bg-[#f8fafc] rounded-2xl p-8 text-center shadow hover:shadow-xl transition cursor-pointer"
      >
        <div className="text-5xl mb-5">💯</div>
        <h3 className="text-xl font-bold mb-3">Quality Guaranteed</h3>
        <p className="text-gray-600">
          Every project is completed with attention to detail.
        </p>
      </motion.div>

    </div>

  </div>
</section>

{/* ================= COMPANY STATS ================= */}

<section className="py-20 bg-[#184896]">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="text-center bg-white rounded-2xl p-8 shadow-lg cursor-pointer"
      >
        <h3 className="text-5xl font-bold text-[#184896]">5000+</h3>
        <p className="mt-4 text-gray-600 font-medium">
          Happy Clients
        </p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="text-center bg-white rounded-2xl p-8 shadow-lg cursor-pointer"
      >
        <h3 className="text-5xl font-bold text-[#184896]">10+</h3>
        <p className="mt-4 text-gray-600 font-medium">
          Years Experience
        </p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="text-center bg-white rounded-2xl p-8 shadow-lg cursor-pointer"
      >
        <h3 className="text-5xl font-bold text-[#184896]">150+</h3>
        <p className="mt-4 text-gray-600 font-medium">
          Expert Technicians
        </p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="text-center bg-white rounded-2xl p-8 shadow-lg cursor-pointer"
      >
        <h3 className="text-5xl font-bold text-[#184896]">24/7</h3>
        <p className="mt-4 text-gray-600 font-medium">
          Emergency Support
        </p>
      </motion.div>

    </div>

  </div>

</section>

{/* ================= JOIN OUR TEAM ================= */}

<section className="py-20 bg-[#f8fafc]">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >

      <span className="text-[#184896] font-bold uppercase tracking-[3px]">
        CAREERS
      </span>

      <h2 className="text-3xl md:text-5xl font-bold mt-4">
        Want To Join Our Team?
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto mt-6 leading-8">
        We are always looking for passionate professionals who want
        to build an exciting career in Dubai's leading home
        maintenance company.
      </p>

      <button className="mt-10 bg-[#184896] hover:bg-[#12396f] text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 cursor-pointer hover:scale-105">
        Apply Now
      </button>

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
        CONTACT OUR TEAM
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
        Need Professional Home Maintenance?
      </h2>

      <p className="text-blue-100 text-lg leading-8 max-w-3xl mx-auto mt-6">
        Whether it's AC repair, plumbing, electrical work,
        renovation or emergency maintenance,
        our experts are available 24/7 across Dubai.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">

        <button className="bg-white text-[#184896] font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition cursor-pointer">
          Request Free Quote
        </button>

        <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-[#184896] transition cursor-pointer">
          Call Now
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
