"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function CaseStudiesPage() {
  return (
    <main>

      {/* ================= HERO ================= */}

      <section className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] overflow-hidden">

        <Image
          src="/images/case-study.png"
          alt="Case Studies"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Premium Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#08152E]/95 via-[#08152E]/75 to-[#F59E0B]/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 lg:px-10 flex items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >

            <span className="inline-flex items-center bg-[#F59E0B] text-white px-5 py-2 rounded-full font-semibold tracking-wide">
              OUR CASE STUDIES
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-bold text-white leading-tight">
              Turning Ideas
              <br />
              Into Reality
            </h1>

            <p className="mt-8 text-lg md:text-xl text-gray-200 leading-8">
              Discover how ProTech has transformed villas,
              apartments and commercial spaces through
              innovative maintenance and renovation solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mt-10">

              <button className="bg-[#F59E0B] hover:bg-[#d88900] text-white px-8 py-4 rounded-xl font-semibold transition duration-300 cursor-pointer shadow-xl">
                View Our Projects
              </button>

              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#08152E] transition duration-300 cursor-pointer">
                Get Free Quote
              </button>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ================= INTRO ================= */}

      <section className="py-20 bg-[#FFF8EF]">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="text-center"
          >

            <span className="text-[#F59E0B] uppercase tracking-[4px] font-bold">
              SUCCESS STORIES
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-5">
              Every Project Has A Story
            </h2>

            <p className="text-gray-600 text-lg leading-8 max-w-3xl mx-auto mt-8">
              Every completed project reflects our dedication,
              craftsmanship and commitment to customer satisfaction.
              Explore some of our best maintenance and renovation work.
            </p>

          </motion.div>

        </div>

      </section>

      {/* ================= FEATURED CASE STUDIES ================= */}

<section className="py-20 bg-white">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >

      <span className="text-[#F59E0B] uppercase tracking-[4px] font-bold">
        FEATURED PROJECTS
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-5">
        Our Recent Success Stories
      </h2>

    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          image: "/images/project1.png",
          title: "Luxury Villa Renovation",
          category: "Renovation",
          bg: "bg-blue-50",
          badge: "bg-blue-600",
        },
        {
          image: "/images/project2.png",
          title: "Complete AC Upgrade",
          category: "AC Services",
          bg: "bg-orange-50",
          badge: "bg-orange-500",
        },
        {
          image: "/images/project3.png",
          title: "Kitchen Remodeling",
          category: "Interior",
          bg: "bg-green-50",
          badge: "bg-green-600",
        },
        {
          image: "/images/project4.png",
          title: "Electrical Installation",
          category: "Electrical",
          bg: "bg-purple-50",
          badge: "bg-purple-600",
        },
        {
          image: "/images/project5.png",
          title: "Luxury Bathroom",
          category: "Bathroom",
          bg: "bg-red-50",
          badge: "bg-red-500",
        },
        {
          image: "/images/project6.png",
          title: "Deep Cleaning Project",
          category: "Cleaning",
          bg: "bg-cyan-50",
          badge: "bg-cyan-600",
        },
      ].map((item, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
          className={`${item.bg} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer`}
        >

          <div className="relative h-64 overflow-hidden">

            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover hover:scale-110 transition duration-700"
            />

            <span
              className={`absolute top-4 left-4 ${item.badge} text-white text-sm px-4 py-2 rounded-full`}
            >
              {item.category}
            </span>

          </div>

          <div className="p-7">

            <h3 className="text-2xl font-bold">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-7 mt-4">
              Professional planning, quality workmanship and timely
              project completion with complete customer satisfaction.
            </p>

            <button className="mt-6 text-[#08152E] font-bold hover:text-[#F59E0B] transition cursor-pointer">
              View Case Study →
            </button>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* ================= BEFORE & AFTER ================= */}

<section className="py-20 bg-[#F8FAFC]">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >

      <span className="text-[#F59E0B] uppercase tracking-[4px] font-bold">
        BEFORE & AFTER
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-5">
        Incredible Transformations
      </h2>

      <p className="text-gray-600 text-lg leading-8 max-w-3xl mx-auto mt-6">
        Every renovation project is carefully planned and executed
        to deliver beautiful, functional and long-lasting results.
      </p>

    </motion.div>

    <div className="grid lg:grid-cols-2 gap-10">

      {/* Before */}

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .7 }}
        className="relative rounded-3xl overflow-hidden shadow-xl cursor-pointer group"
      >

        <Image
          src="/images/before4.png"
          alt="Before"
          width={700}
          height={500}
          className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute top-5 left-5 bg-red-500 text-white px-5 py-2 rounded-full font-semibold">
          BEFORE
        </div>

      </motion.div>

      {/* After */}

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .7 }}
        className="relative rounded-3xl overflow-hidden shadow-xl cursor-pointer group"
      >

        <Image
          src="/images/after2.png"
          alt="After"
          width={700}
          height={500}
          className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute top-5 left-5 bg-green-600 text-white px-5 py-2 rounded-full font-semibold">
          AFTER
        </div>

      </motion.div>

    </div>

  </div>

</section>

{/* ================= PROJECT STATISTICS ================= */}

<section className="py-20 bg-[#08152E]">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white/10 backdrop-blur rounded-2xl p-10 text-center cursor-pointer"
      >

        <h3 className="text-5xl font-bold text-[#F59E0B]">
          500+
        </h3>

        <p className="text-white mt-3">
          Projects Completed
        </p>

      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white/10 backdrop-blur rounded-2xl p-10 text-center cursor-pointer"
      >

        <h3 className="text-5xl font-bold text-[#F59E0B]">
          98%
        </h3>

        <p className="text-white mt-3">
          Client Satisfaction
        </p>

      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white/10 backdrop-blur rounded-2xl p-10 text-center cursor-pointer"
      >

        <h3 className="text-5xl font-bold text-[#F59E0B]">
          10+
        </h3>

        <p className="text-white mt-3">
          Years Experience
        </p>

      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white/10 backdrop-blur rounded-2xl p-10 text-center cursor-pointer"
      >

        <h3 className="text-5xl font-bold text-[#F59E0B]">
          24/7
        </h3>

        <p className="text-white mt-3">
          Emergency Support
        </p>

      </motion.div>

    </div>

  </div>

</section>

{/* ================= CLIENT TESTIMONIAL ================= */}

<section className="py-20 bg-white">

  <div className="max-w-5xl mx-auto px-6 text-center">

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >

      <span className="text-[#F59E0B] font-bold uppercase tracking-[4px]">
        CLIENT REVIEW
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-5">
        What Our Clients Say
      </h2>

      <div className="mt-12 bg-[#FFF8EF] rounded-3xl p-10 shadow-xl cursor-pointer hover:shadow-2xl transition duration-300">

        <div className="text-5xl mb-6">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="text-gray-600 text-lg leading-9 italic">
          "ProTech completely transformed our villa. The renovation
          exceeded our expectations and the team was extremely
          professional from start to finish. Highly recommended!"
        </p>

        <h4 className="mt-8 text-2xl font-bold">
          Ahmed Al Mansoori
        </h4>

        <p className="text-gray-500">
          Villa Owner • Dubai
        </p>

      </div>

    </motion.div>

  </div>

</section>


{/* ================= CTA ================= */}

<section className="py-24 bg-gradient-to-r from-[#08152E] via-[#123C7A] to-[#184896]">

  <div className="max-w-6xl mx-auto px-6 text-center">

    <motion.div
      initial={{ opacity: 0, scale: .9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
    >

      <span className="inline-block bg-[#F59E0B] text-white px-6 py-2 rounded-full font-semibold mb-6">
        START YOUR PROJECT TODAY
      </span>

      <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
        Let's Build Something Amazing Together
      </h2>

      <p className="text-blue-100 text-lg leading-8 mt-8 max-w-3xl mx-auto">
        Whether it's AC repair, renovation, plumbing or electrical
        work, ProTech is ready to deliver high-quality solutions
        tailored to your needs.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

        <button className="bg-[#F59E0B] hover:bg-[#d88900] text-white px-8 py-4 rounded-xl font-bold transition duration-300 cursor-pointer shadow-xl">
          Request Free Quote
        </button>

        <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#08152E] transition duration-300 cursor-pointer">
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