"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Star, ArrowRight } from "lucide-react";
import Footer from "../components/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// ✅ Reviews Data
const reviews = [
  {
    image: "/images/client1.png",
    name: "Ahmed Hassan",
    location: "Dubai Marina",
    review:
      "Outstanding AC service. Very professional technicians, arrived on time and completed everything perfectly.",
  },
  {
    image: "/images/client2.png",
    name: "Sarah Williams",
    location: "Palm Jumeirah",
    review:
      "Excellent renovation work. Transparent pricing, clean workmanship and amazing customer service.",
  },
  {
    image: "/images/client3.png",
    name: "Mohammed Ali",
    location: "Business Bay",
    review:
      "Highly recommend ProTech Dubai. Fast response, quality work and friendly staff.",
  },
];



const sliderReviews = [
  {
    image: "/images/client1.png",
    name: "Ahmed Hassan",
    location: "Dubai Marina",
    review:
      "Outstanding AC service. Very professional technicians and excellent workmanship.",
  },
  {
    image: "/images/client2.png",
    name: "Sarah Williams",
    location: "Palm Jumeirah",
    review:
      "Amazing renovation service. Clean work and very friendly staff.",
  },
  {
    image: "/images/client3.png",
    name: "Mohammed Ali",
    location: "Business Bay",
    review:
      "Highly recommended. Transparent pricing and on-time completion.",
  },
  {
    image: "/images/client4.png",
    name: "Jessica Brown",
    location: "JVC",
    review:
      "Excellent painting and maintenance work. Five stars!",
  },
  {
    image: "/images/client5.png",
    name: "David Wilson",
    location: "Downtown Dubai",
    review:
      "Professional technicians and fantastic customer support.",
  },
];





export default function TestimonialsPage() {
  return (
    <main>

      {/* ================= HERO ================= */}

      <section className="relative min-h-screen overflow-hidden flex items-center bg-gradient-to-br from-[#061224] via-[#184896] to-[#0b4fb3]">

        {/* Background Image */}

        <Image
          src="/images/testimonial-hero.png"
          alt="Testimonials"
          fill
          priority
          className="object-cover object-center opacity-20"
        />

        {/* Decorative Blur */}

        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-cyan-400/20 blur-[140px]" />

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-blue-500/20 blur-[170px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Badge */}

            <motion.span
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
              }}
              className="inline-flex items-center rounded-full border border-cyan-300/40 bg-white/10 backdrop-blur-xl px-6 py-3 text-white font-semibold tracking-[4px]"
            >
              ⭐ CUSTOMER TESTIMONIALS
            </motion.span>

            {/* Heading */}

            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-white">

              Trusted By
              <span className="block bg-gradient-to-r from-cyan-300 via-white to-blue-300 bg-clip-text text-transparent">
                Thousands
              </span>

              Across Dubai

            </h1>

            {/* Text */}

            <p className="mt-8 text-blue-100 text-lg leading-8 max-w-xl">

              Our customers trust us because we consistently deliver
              quality workmanship, transparent pricing and exceptional
              customer service for every project.

            </p>

            {/* Rating */}

            <div className="flex items-center gap-3 mt-10">

              {[...Array(5)].map((_, index) => (

                <Star
                  key={index}
                  className="fill-yellow-400 text-yellow-400"
                  size={28}
                />

              ))}

              <span className="text-white text-xl font-bold">
                4.9/5 Google Rating
              </span>

            </div>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row gap-5 mt-12">

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="group cursor-pointer rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-[length:250%_250%] px-8 py-4 text-white font-bold shadow-2xl"
              >
                <span className="flex items-center gap-3">
                  Read Reviews

                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition"
                  />

                </span>

              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                className="cursor-pointer rounded-xl border border-white/30 bg-white/10 backdrop-blur-xl px-8 py-4 text-white font-semibold hover:bg-white hover:text-[#184896] transition"
              >
                Contact Us
              </motion.button>

            </div>

          </motion.div>

          {/* Right Video Card */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <div className="relative overflow-hidden rounded-[30px] border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl">

              <Image
                src="/images/customer-video.png"
                alt="Customer Video"
                width={700}
                height={850}
                className="w-full h-[520px] object-cover"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-black/30"></div>

              {/* Play Button */}

              <motion.button
                whileHover={{
                  scale: 1.15,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="absolute inset-0 m-auto w-24 h-24 rounded-full bg-white flex items-center justify-center cursor-pointer shadow-2xl"
              >
                <Play
                  size={38}
                  className="text-[#184896] ml-1"
                  fill="#184896"
                />
              </motion.button>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ================= GOOGLE REVIEWS ================= */}

<section className="py-24 bg-gradient-to-b from-[#061224] to-[#0d2f66]">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    {/* Heading */}

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .7 }}
      className="text-center"
    >

      <span className="inline-block rounded-full bg-cyan-400/10 border border-cyan-400/30 px-5 py-2 text-cyan-300 font-semibold tracking-[3px] uppercase">

        GOOGLE REVIEWS

      </span>

      <h2 className="text-4xl md:text-6xl font-black text-white mt-7">

        Loved By Thousands
        <span className="block text-cyan-300">
          Across Dubai
        </span>

      </h2>

      <p className="text-blue-100 mt-8 text-lg max-w-3xl mx-auto leading-8">

        More than 2,500 homeowners trust ProTech Dubai
        for professional maintenance, renovation and repair services.

      </p>

    </motion.div>

    {/* Rating */}

    <motion.div

      initial={{ opacity: 0, scale: .8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}

      className="mt-16 flex flex-col items-center"

    >

      <div className="flex gap-2">

        {[...Array(5)].map((_, i)=>(

          <Star
            key={i}
            size={40}
            className="fill-yellow-400 text-yellow-400"
          />

        ))}

      </div>

      <h3 className="text-7xl font-black text-white mt-5">

        4.9

      </h3>

      <p className="text-blue-200 text-xl">

        Based on 2,500+ Google Reviews

      </p>

    </motion.div>

    {/* Review Cards */}

             
    <div className="grid lg:grid-cols-3 gap-8 mt-20">

      {reviews.map((review,index)=>(

        <motion.div

          key={index}

          initial={{ opacity:0,y:60 }}

          whileInView={{ opacity:1,y:0 }}

          viewport={{ once:true }}

          transition={{ delay:index*.2 }}

          whileHover={{
            y:-12,
            scale:1.02
          }}

          className="group cursor-pointer rounded-[28px]
          border border-white/10
          bg-white/10
          backdrop-blur-2xl
          p-8
          shadow-2xl
          transition"

        >

          <div className="flex items-center gap-5">

            <Image
             src={review.image}
             alt={review.name}
             width={70}
             height={70}
             className="w-[70px] h-[70px]
             rounded-full object-cover"
           
            />

            <div>

              <h4 className="text-white text-xl font-bold">

                {review.name}

              </h4>

              <p className="text-cyan-300">

                {review.location}

              </p>

            </div>

          </div>

          <div className="flex gap-1 mt-6">

            {[...Array(5)].map((_,i)=>(

              <Star
                key={i}
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />

            ))}

          </div>

          <p className="mt-6 text-blue-100 leading-8">

            "{review.review}"

          </p>

        </motion.div>

      ))}

    </div>

  </div>

</section>


{/* ================= HAPPY CLIENTS ================= */}

<section className="py-24 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    {/* Heading */}

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >

      <span className="inline-block bg-[#184896]/10 text-[#184896] border border-[#184896]/20 px-6 py-2 rounded-full font-semibold tracking-[3px] uppercase">
        Trusted By Thousands
      </span>

      <h2 className="text-4xl md:text-6xl font-black mt-8 text-gray-900">
        Customer Satisfaction
        <span className="block text-[#184896]">
          Is Our Priority
        </span>
      </h2>

      <p className="text-gray-600 text-lg leading-8 max-w-3xl mx-auto mt-8">
        Every completed project reflects our commitment to quality,
        transparency and long-term customer relationships.
      </p>

    </motion.div>

    {/* Statistics */}

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

      {[
        {
          number: "5000+",
          title: "Happy Clients",
        },
        {
          number: "98%",
          title: "Customer Satisfaction",
        },
        {
          number: "10+",
          title: "Years Experience",
        },
        {
          number: "24/7",
          title: "Support",
        },
      ].map((item, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 }}
          whileHover={{
            y: -10,
            scale: 1.05,
          }}
          className="cursor-pointer rounded-3xl bg-gradient-to-br from-[#184896] to-[#0B63CE] text-white p-10 text-center shadow-2xl"
        >

          <h3 className="text-5xl font-black">
            {item.number}
          </h3>

          <p className="mt-4 text-blue-100 text-lg">
            {item.title}
          </p>

        </motion.div>

      ))}

    </div>

    {/* Trust Cards */}

    <div className="grid md:grid-cols-3 gap-8 mt-24">

      {[
        {
          title: "Certified Experts",
          desc: "Our experienced professionals deliver reliable home maintenance solutions.",
          icon: "👨‍🔧",
        },
        {
          title: "Transparent Pricing",
          desc: "No hidden charges. Honest quotes before every project begins.",
          icon: "💎",
        },
        {
          title: "24/7 Emergency Service",
          desc: "Fast response team available whenever you need urgent assistance.",
          icon: "⚡",
        },
      ].map((item, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          whileHover={{
            y: -10,
            scale: 1.03,
          }}
          className="group cursor-pointer rounded-[30px] bg-[#f8fbff] border border-blue-100 p-10 shadow-lg hover:shadow-2xl transition-all duration-500"
        >

          <div className="text-6xl">
            {item.icon}
          </div>

          <h3 className="mt-8 text-2xl font-bold group-hover:text-[#184896] transition">
            {item.title}
          </h3>

          <p className="mt-5 text-gray-600 leading-8">
            {item.desc}
          </p>

        </motion.div>

      ))}

    </div>

  </div>

</section>



{/* ================= PREMIUM TESTIMONIAL SLIDER ================= */}

<section className="py-24 bg-gradient-to-b from-[#F8FBFF] to-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    {/* Heading */}

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >

      <span className="inline-block rounded-full bg-[#184896]/10 border border-[#184896]/20 px-6 py-2 font-semibold tracking-[3px] uppercase text-[#184896]">
        CLIENT TESTIMONIALS
      </span>

      <h2 className="mt-8 text-4xl md:text-6xl font-black text-gray-900">
        Real Stories From
        <span className="block text-[#184896]">
          Happy Customers
        </span>
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
        Our customers trust us for quality workmanship, transparent pricing
        and exceptional customer service across Dubai.
      </p>

    </motion.div>

    {/* Swiper */}

    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      loop={true}
      grabCursor={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      }}
    >

      {sliderReviews.map((item, index) => (

        <SwiperSlide key={index}>

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            transition={{ duration: .3 }}
            className="group rounded-[30px] bg-white border border-blue-100 p-8 shadow-lg hover:shadow-2xl cursor-pointer h-full"
          >

            {/* Profile */}

            <div className="flex items-center gap-4">

              <Image
                src={item.image}
                alt={item.name}
                width={70}
                height={70}
                className="rounded-full object-cover border-4 border-[#184896]/10"
              />

              <div>

                <h3 className="font-bold text-xl text-gray-900">
                  {item.name}
                </h3>

                <p className="text-[#184896] font-medium">
                  📍 {item.location}
                </p>

              </div>

            </div>

            {/* Stars */}

            <div className="flex gap-1 mt-6">

              {[...Array(5)].map((_, i) => (

                <Star
                  key={i}
                  size={18}
                  className="fill-yellow-400 text-yellow-400"
                />

              ))}

            </div>

            {/* Review */}

            <p className="mt-6 text-gray-600 leading-8">
              "{item.review}"
            </p>

            {/* Footer */}

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">

              <span className="text-green-600 font-semibold">
                ✔ Verified Customer
              </span>

              <span className="text-[#184896] font-bold">
                Google Review
              </span>

            </div>

          </motion.div>

        </SwiperSlide>

      ))}

    </Swiper>

  </div>

</section>


{/* ================= WHY CUSTOMERS TRUST US ================= */}

<section className="py-24 bg-gradient-to-b from-white to-[#f5f9ff]">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
      className="text-center"
    >

      <span className="inline-block rounded-full bg-[#184896]/10 border border-[#184896]/20 px-6 py-2 font-semibold tracking-[3px] uppercase text-[#184896]">

        WHY CHOOSE US

      </span>

      <h2 className="text-4xl md:text-6xl font-black mt-8">

        Trusted Across
        <span className="block text-[#184896]">
          Dubai Since 2015
        </span>

      </h2>

    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

      {[
        {
          icon:"🏆",
          title:"Premium Quality",
          desc:"Top quality workmanship with premium materials."
        },
        {
          icon:"⚡",
          title:"Fast Response",
          desc:"Emergency team available 24 hours."
        },
        {
          icon:"💰",
          title:"Affordable Pricing",
          desc:"Transparent pricing with no hidden charges."
        },
        {
          icon:"❤️",
          title:"Customer First",
          desc:"Thousands of satisfied homeowners across Dubai."
        }

      ].map((item,index)=>(

        <motion.div

          key={index}

          initial={{ opacity:0,y:60 }}

          whileInView={{ opacity:1,y:0 }}

          viewport={{ once:true }}

          transition={{ delay:index*.15 }}

          whileHover={{
            y:-12,
            scale:1.05
          }}

          className="rounded-[30px] bg-white shadow-xl border border-blue-100 p-10 text-center"

        >

          <div className="text-6xl">

            {item.icon}

          </div>

          <h3 className="mt-7 text-2xl font-bold">

            {item.title}

          </h3>

          <p className="mt-5 text-gray-600 leading-8">

            {item.desc}

          </p>

        </motion.div>

      ))}

    </div>

  </div>

</section>


{/* ================= VIDEO TESTIMONIAL ================= */}

<section className="py-24 bg-gradient-to-br from-[#061224] via-[#184896] to-[#0B63CE]">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left */}

      <motion.div
        initial={{ opacity: 0, x: -70 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
      >

        <span className="inline-block rounded-full bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-2 text-white font-semibold tracking-[3px] uppercase">
          Success Story
        </span>

        <h2 className="text-4xl md:text-6xl font-black text-white mt-8 leading-tight">
          See Why Our
          <span className="block text-cyan-300">
            Clients Love Us
          </span>
        </h2>

        <p className="text-blue-100 text-lg leading-8 mt-8">
          We believe actions speak louder than words. Watch how our
          experienced team transformed homes across Dubai with
          professional maintenance and renovation services.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-6 py-4">
            <h3 className="text-3xl font-black text-white">5000+</h3>
            <p className="text-blue-100">Projects</p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-6 py-4">
            <h3 className="text-3xl font-black text-white">4.9★</h3>
            <p className="text-blue-100">Google Rating</p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-6 py-4">
            <h3 className="text-3xl font-black text-white">24/7</h3>
            <p className="text-blue-100">Support</p>
          </div>

        </div>

      </motion.div>

      {/* Right */}

      <motion.div
        initial={{ opacity: 0, x: 70 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
        whileHover={{ scale: 1.02 }}
        className="relative group cursor-pointer"
      >

        <Image
          src="/images/customer-video.png"
          alt="Customer Testimonial"
          width={700}
          height={500}
          className="rounded-[30px] object-cover w-full h-[500px]"
        />

        <div className="absolute inset-0 bg-black/30 rounded-[30px]" />

        {/* Play Button */}

        <div className="absolute inset-0 flex items-center justify-center">

          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: .9 }}
            className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-2xl"
          >

            <span className="text-[#184896] text-4xl ml-1">
              ▶
            </span>

          </motion.div>

        </div>

      </motion.div>

    </div>

  </div>

</section>

{/* ================= PREMIUM TESTIMONIAL SLIDER ================= */}

<section className="py-24 bg-gradient-to-b from-[#061224] via-[#0b2f6d] to-[#061224] overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    {/* Heading */}

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
      className="text-center mb-16"
    >

      <span className="inline-block px-6 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 uppercase tracking-[3px] font-semibold">
        Happy Customers
      </span>

      <h2 className="text-4xl md:text-6xl font-black text-white mt-8">

        What People
        <span className="block text-cyan-300">
          Say About Us
        </span>

      </h2>

      <p className="text-blue-100 text-lg leading-8 mt-6 max-w-3xl mx-auto">

        Thousands of satisfied homeowners across Dubai trust ProTech
        for professional maintenance and renovation services.

      </p>

    </motion.div>

    {/* Slider */}

    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      }}
    >

      {sliderReviews.map((item, index) => (

        <SwiperSlide key={index}>

          <motion.div
            whileHover={{
              y: -12,
              scale: 1.03,
            }}
            transition={{
              duration: .4,
            }}
            className="group h-full rounded-[30px] border border-white/10 bg-white/10 backdrop-blur-2xl p-8 shadow-2xl"
          >

            <div className="flex items-center gap-5">

              <Image
                src={item.image}
                alt={item.name}
                width={70}
                height={70}
                className="w-[70px] h-[70px] rounded-full object-cover"
              />

              <div>

                <h3 className="text-white text-xl font-bold">
                  {item.name}
                </h3>

                <p className="text-cyan-300">
                  {item.location}
                </p>

              </div>

            </div>

            <div className="flex gap-1 mt-6">

              {[...Array(5)].map((_, i) => (

                <Star
                  key={i}
                  size={18}
                  className="fill-yellow-400 text-yellow-400"
                />

              ))}

            </div>

            <p className="mt-6 text-blue-100 leading-8">

              "{item.review}"

            </p>

          </motion.div>

        </SwiperSlide>

      ))}

    </Swiper>

  </div>

</section>

{/* ================= CTA ================= */}

<section className="py-24 bg-white">

  <div className="max-w-5xl mx-auto px-6">

    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
      className="rounded-[40px] overflow-hidden bg-gradient-to-r from-[#184896] via-[#0B63CE] to-[#184896] p-14 text-center shadow-2xl"
    >

      <span className="inline-block bg-white text-[#184896] rounded-full px-6 py-2 font-bold uppercase tracking-[3px]">
        Get Started Today
      </span>

      <h2 className="text-4xl md:text-6xl font-black text-white mt-8">
        Experience
        <span className="block">
          The ProTech Difference
        </span>
      </h2>

      <p className="text-blue-100 text-lg mt-8 leading-8 max-w-3xl mx-auto">
        Join thousands of satisfied homeowners across Dubai.
        Book your professional maintenance service today and
        experience quality workmanship you can trust.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: .95 }}
          className="cursor-pointer bg-white text-[#184896] px-9 py-4 rounded-xl font-bold shadow-xl"
        >
          Request Free Quote
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: .95 }}
          className="cursor-pointer border-2 border-white text-white px-9 py-4 rounded-xl font-bold hover:bg-white hover:text-[#184896] transition"
        >
          Contact Us
        </motion.button>

      </div>

    </motion.div>

  </div>

</section>

{/* ================= FAQ SECTION ================= */}

<section className="py-24 bg-[#f8fbff]">

  <div className="max-w-5xl mx-auto px-6">

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
      className="text-center"
    >

      <span className="inline-block rounded-full bg-[#184896]/10 border border-[#184896]/20 px-6 py-2 text-[#184896] font-semibold uppercase tracking-[3px]">

        Frequently Asked Questions

      </span>

      <h2 className="text-4xl md:text-6xl font-black mt-8">

        Got Questions?

        <span className="block text-[#184896]">

          We Have Answers

        </span>

      </h2>

    </motion.div>

    <div className="space-y-6 mt-20">

      {[
        {
          q:"How quickly can your team arrive?",
          a:"Our emergency team usually arrives within 30–60 minutes anywhere in Dubai."
        },
        {
          q:"Do you provide free quotations?",
          a:"Yes. We provide completely free inspections and quotations before starting work."
        },
        {
          q:"Are your technicians certified?",
          a:"Yes. Every technician is trained, experienced and fully certified."
        },
        {
          q:"Do you provide warranty?",
          a:"Absolutely. Every service includes workmanship warranty for complete peace of mind."
        }

      ].map((item,index)=>(

        <motion.div

          key={index}

          initial={{ opacity:0,y:40 }}

          whileInView={{ opacity:1,y:0 }}

          viewport={{ once:true }}

          transition={{ delay:index*.15 }}

          whileHover={{ scale:1.02 }}

          className="rounded-3xl bg-white p-8 shadow-lg border border-blue-100"

        >

          <h3 className="text-2xl font-bold text-[#184896]">

            {item.q}

          </h3>

          <p className="mt-4 text-gray-600 leading-8">

            {item.a}

          </p>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* ================= FLOATING CTA ================= */}

<section className="py-24 bg-gradient-to-r from-[#061224] via-[#184896] to-[#0B63CE]">

  <div className="max-w-6xl mx-auto px-6">

    <motion.div

      initial={{ opacity:0, scale:.9 }}

      whileInView={{ opacity:1, scale:1 }}

      viewport={{ once:true }}

      transition={{ duration:.8 }}

      className="rounded-[35px] bg-white/10 backdrop-blur-2xl border border-white/20 p-14 text-center shadow-2xl"

    >

      <h2 className="text-4xl md:text-6xl font-black text-white">

        Ready To Transform

        <span className="block text-cyan-300">

          Your Home?

        </span>

      </h2>

      <p className="text-blue-100 text-lg max-w-3xl mx-auto mt-8 leading-8">

        Join more than 5,000 satisfied customers across Dubai.
        Book your professional service today and experience
        premium quality with transparent pricing.

      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">

        <motion.button

          whileHover={{ scale:1.05 }}

          whileTap={{ scale:.95 }}

          className="bg-white text-[#184896] px-10 py-4 rounded-xl font-bold shadow-xl"

        >

          Get Free Quote

        </motion.button>

        <motion.button

          whileHover={{ scale:1.05 }}

          whileTap={{ scale:.95 }}

          className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-[#184896] transition"

        >

          Call Now

        </motion.button>

      </div>

    </motion.div>

  </div>

</section>

{/* ================= FOOTER ================= */}

<Footer />

</main>

  );
}

      