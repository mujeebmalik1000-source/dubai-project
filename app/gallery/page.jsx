"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Footer from "../components/Footer";

const projects = [
  {
    title: "Luxury Villa AC Installation",
    category: "AC Services",
    image: "/images/Acproject7.png",
  },
  {
    title: "Modern Kitchen Renovation",
    category: "Renovation",
    image: "/images/Ranoproject8.png",
  },
  {
    title: "Luxury Bathroom Upgrade",
    category: "Plumbing",
    image: "/images/Plumproject9.png",
  },
  {
    title: "Smart Electrical Installation",
    category: "Electrical",
    image: "/images/Elecproject10.png",
  },
  {
    title: "Premium Wall Painting",
    category: "Painting",
    image: "/images/Panproject11.png",
  },
  {
    title: "Complete Home Maintenance",
    category: "Maintenance",
    image: "/images/Mainproject12.png",
  },
];

export default function GalleryPage() {
  return (
    <main>

      {/* ================= HERO ================= */}

      <section className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] overflow-hidden flex items-center">

        <Image
          src="/images/gallery-hero1.png"
          alt="Projects Gallery"
          fill
          priority
          className="object-cover object-[center_10%]"
        />

        {/* Premium Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#071B3B]/95 via-[#184896]/60 to-[#071B3B]/90" />

        {/* Decorative Blur */}

        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-400/20 blur-[40px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/20 blur-[50px] rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 lg:ml-20"
        >

          {/* Badge */}

          <motion.span
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{
    opacity: 1,
    y: [0, -5, 0],
    scale: [1, 1.03, 1],
  }}
  transition={{
    duration: 2.5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  whileHover={{
    scale: 1.08,
    boxShadow: "0 0 30px rgba(34,211,238,0.7)",
  }}
  className="relative inline-flex items-center mt-16 overflow-hidden rounded-full px-4 py-3 cursor-pointer bg-white/6 backdrop-blur-2xl border border-cyan-300/30 shadow-[0_0_25px_rgba(24,72,150,0.4)]"
>

  {/* Shine Effect */}
  <motion.span
    animate={{ x: ["-150%", "250%"] }}
    transition={{
      duration: 2.5,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute inset-y-0 left-0 w-20 -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent"
  />

  <span className="relative z-10 text-sm md:text-base font-bold uppercase tracking-[5px] text-white">
    ✦ PROJECTS GALLERY ✦
  </span>

</motion.span>

          {/* Heading */}

          <h1 className="mt-8 text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black text-white leading-tight max-w-5xl">
            See Our
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-blue-300 bg-clip-text text-transparent">
              Finest Work
            </span>
            Across Dubai
          </h1>

          {/* Description */}

          <p className="mt-8 text-base md:text-base text-blue-100 leading-8 max-w-3xl">
            Explore our portfolio of AC repairs, plumbing,
            electrical installations, painting, renovations and
            complete home maintenance projects delivered with
            exceptional quality.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-col sm:flex-row gap-5">

            {/* Animated Gradient Button */}

            <motion.button
              whileHover={{
                scale: 1.06,
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden rounded-xl px-8 py-4 font-bold text-white cursor-pointer shadow-2xl"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#00C6FF] via-[#184896] to-[#00C6FF] bg-[length:250%_250%] animate-[gradient_5s_ease_infinite]"></span>

              <span className="relative flex items-center gap-3">
                View Our Projects
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </motion.button>

            {/* Glass Button */}

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl border border-white/30 bg-white/10 backdrop-blur-lg px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#184896] cursor-pointer"
            >
              Contact Our Team
            </motion.button>

          </div>

        </motion.div>

      </section>

      {/* ================= PROJECT GALLERY ================= */}

<section className="py-24 bg-gradient-to-b from-white to-slate-100">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >

      <span className="text-[#184896] uppercase tracking-[4px] font-bold">
        OUR PORTFOLIO
      </span>

      <h2 className="text-3xl md:text-5xl font-bold mt-5">
        Recent Projects
      </h2>

      <p className="text-gray-600 text-lg leading-8 max-w-3xl mx-auto mt-6">
        Browse some of our completed maintenance, renovation,
        electrical and AC projects across Dubai.
      </p>

    </motion.div>

    {/* Category Buttons */}

    <div className="flex flex-wrap justify-center gap-4 mt-12">

      {[
        "All",
        "AC",
        "Renovation",
        "Plumbing",
        "Electrical",
        "Painting",
      ].map((item) => (

        <button
          key={item}
          className="cursor-pointer rounded-full border border-[#184896] px-6 py-3 font-semibold text-[#184896] transition-all duration-300 hover:bg-[#184896] hover:text-white hover:scale-105"
        >
          {item}
        </button>

      ))}

    </div>

    {/* Gallery Grid */}

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

      {projects.map((project, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -10 }}
          className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
        >

          <div className="relative overflow-hidden">

            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={420}
              className="h-[270px] w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <span className="absolute top-5 left-5 bg-[#184896] text-white text-xs font-bold px-4 py-2 rounded-full">
              {project.category}
            </span>

          </div>

          <div className="p-6">

            <h3 className="text-2xl font-bold group-hover:text-[#184896] transition">
              {project.title}
            </h3>

            <p className="text-gray-600 mt-3 leading-7">
              Completed with premium workmanship, quality materials,
              and professional finishing.
            </p>

            <button className="mt-6 font-bold text-[#184896] cursor-pointer hover:translate-x-2 transition-all duration-300">
              View Project →
            </button>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* ================= FEATURED PROJECT ================= */}

<section className="py-24 bg-[#0B1220] overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Image */}

      <motion.div
        initial={{ opacity: 0, x: -70 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative group cursor-pointer"
      >

        <div className="overflow-hidden rounded-3xl">

          <Image
            src="/images/featured-project.png"
            alt="Featured Project"
            width={700}
            height={850}
            className="w-full rounded-3xl object-cover transition duration-700 group-hover:scale-110"
          />

        </div>

        {/* Floating Badge */}

        <div className="absolute bottom-8 left-8 bg-white rounded-2xl px-6 py-5 shadow-xl">

          <h3 className="text-4xl font-black text-[#184896]">
            100%
          </h3>

          <p className="text-gray-600 font-medium">
            Client Satisfaction
          </p>

        </div>

      </motion.div>

      {/* Right Content */}

      <motion.div
        initial={{ opacity: 0, x: 70 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <span className="text-cyan-400 uppercase tracking-[4px] font-bold">
          FEATURED PROJECT
        </span>

        <h2 className="text-4xl md:text-5xl font-black text-white mt-6 leading-tight">
          Luxury Villa
          Renovation in Dubai Hills
        </h2>

        <p className="text-slate-300 text-lg leading-8 mt-8">
          Our expert team transformed this luxury villa with complete
          renovation services including premium painting, smart
          electrical systems, modern plumbing, AC installation and
          elegant interior finishing.
        </p>

        {/* Features */}

        <div className="grid grid-cols-2 gap-6 mt-10">

          {[
            "Complete Renovation",
            "Luxury Interior",
            "Premium Materials",
            "Smart Lighting",
            "Modern Plumbing",
            "5-Star Finishing",
          ].map((item, index) => (

            <div
              key={index}
              className="flex items-center gap-3"
            >

              <div className="w-3 h-3 rounded-full bg-cyan-400"></div>

              <span className="text-white">
                {item}
              </span>

            </div>

          ))}

        </div>

        {/* Stats */}

        <div className="flex flex-wrap gap-10 mt-12">

          <div>

            <h3 className="text-5xl font-black text-cyan-400">
              30+
            </h3>

            <p className="text-slate-300 mt-2">
              Days Project
            </p>

          </div>

          <div>

            <h3 className="text-5xl font-black text-cyan-400">
              18
            </h3>

            <p className="text-slate-300 mt-2">
              Team Members
            </p>

          </div>

          <div>

            <h3 className="text-5xl font-black text-cyan-400">
              ★★★★★
            </h3>

            <p className="text-slate-300 mt-2">
              Client Rating
            </p>

          </div>

        </div>

      </motion.div>

    </div>

  </div>

</section>

{/* ================= CTA SECTION ================= */}

<section className="relative overflow-hidden py-24 bg-gradient-to-r from-[#071B3B] via-[#184896] to-[#0A2A5E]">

  {/* Background Blur */}

  <div className="absolute -top-24 left-0 w-80 h-80 bg-cyan-400/20 rounded-full blur-[130px]"></div>

  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[150px]"></div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >

      <span className="inline-block bg-white text-[#184896] px-6 py-2 rounded-full font-bold tracking-[3px] uppercase">
        Let's Build Something Amazing
      </span>

      <h2 className="mt-8 text-4xl md:text-6xl font-black text-white leading-tight">
        Ready To Start
        <br />
        Your Next Project?
      </h2>

      <p className="mt-8 text-blue-100 text-lg leading-8 max-w-3xl mx-auto">
        Whether it's AC services, plumbing, electrical work,
        painting or complete renovation,
        ProTech Dubai is ready to deliver exceptional results.
      </p>

      {/* Buttons */}

      <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

        <button className="cursor-pointer px-9 py-4 rounded-xl bg-white text-[#184896] font-bold hover:scale-105 transition duration-300 shadow-xl">
          Request Free Quote
        </button>

        <button className="cursor-pointer px-9 py-4 rounded-xl border-2 border-white text-white font-bold hover:bg-white hover:text-[#184896] transition duration-300">
          Contact Us
        </button>

      </div>

    </motion.div>

    {/* Statistics */}

    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
    >

      {[
        {
          number: "5000+",
          title: "Projects Completed",
        },
        {
          number: "98%",
          title: "Happy Clients",
        },
        {
          number: "24/7",
          title: "Emergency Support",
        },
        {
          number: "10+",
          title: "Years Experience",
        },
      ].map((item, index) => (

        <div
          key={index}
          className="cursor-pointer rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 text-center hover:bg-white/20 transition duration-300"
        >

          <h3 className="text-5xl font-black text-white">
            {item.number}
          </h3>

          <p className="text-blue-100 mt-4 text-lg">
            {item.title}
          </p>

        </div>

      ))}

    </motion.div>

  </div>

</section>

{/* ================= FOOTER ================= */}

<Footer />

    </main>
  );
}