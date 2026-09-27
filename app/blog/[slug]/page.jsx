
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  User,
  Tag,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function BlogDetailPage({ params }) {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [slug, setSlug] = useState("");

  useEffect(() => {
    const getSlug = async () => {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
    };

    getSlug();
  }, [params]);

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        const response = await fetch("/api/blogs");
        const data = await response.json();

        if (data.success) {
          const selectedBlog = data.blogs.find(
            (item) => item.slug === slug
          );

          setBlog(selectedBlog || null);
        }
      } catch (error) {
        console.error("Blog detail error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#184896] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading article...</p>
        </div>
      </main>
    );
  }

  if (!blog) {
    return (
      <main className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#184896] mb-4">
            Blog Not Found
          </h1>

          <p className="text-gray-600 mb-8">
            The article you are looking for does not exist.
          </p>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-[#184896] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#123875] transition cursor-pointer"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white overflow-hidden">

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-[#06132f] via-[#0b2858] to-[#184896] text-white">

        <div className="absolute top-20 left-[-80px] w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-60px] w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-10 transition cursor-pointer"
            >
              <ArrowLeft size={18} />
              Back to Blog
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <Tag size={15} />
            {blog.category}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl"
          >
            {blog.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-blue-100 text-lg md:text-xl leading-8 max-w-3xl mt-6"
          >
            {blog.excerpt}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-6 mt-8 text-sm text-blue-100"
          >
            <span className="flex items-center gap-2">
              <User size={17} />
              {blog.author}
            </span>

            <span className="flex items-center gap-2">
              <CalendarDays size={17} />
              ProTech Dubai
            </span>
          </motion.div>

        </div>
      </section>

      {/* IMAGE */}
      <section className="px-6 -mt-10 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
        >
          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[300px] md:h-[520px] object-cover hover:scale-105 transition-transform duration-700"
            />
          )}
        </motion.div>
      </section>

      {/* CONTENT */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_320px] gap-12">

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 text-[#184896] font-semibold mb-6">
              <Sparkles size={20} />
              Expert Guide
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {blog.title}
            </h2>

            <div className="text-gray-700 text-lg leading-9 whitespace-pre-line">
              {blog.content}
            </div>
          </motion.article>

          {/* SIDEBAR */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="rounded-2xl p-6 bg-gradient-to-br from-[#184896] to-[#06132f] text-white shadow-xl">
              <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mb-4">
                <User size={22} />
              </div>

              <h3 className="text-xl font-bold mb-2">
                {blog.author}
              </h3>

              <p className="text-blue-100 text-sm leading-6">
                Professional home maintenance and renovation experts
                serving Dubai.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-5">
                Why Read This Guide?
              </h3>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2
                    className="text-[#184896] shrink-0"
                    size={20}
                  />
                  <span className="text-gray-600">
                    Practical maintenance advice
                  </span>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2
                    className="text-[#184896] shrink-0"
                    size={20}
                  />
                  <span className="text-gray-600">
                    Professional recommendations
                  </span>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2
                    className="text-[#184896] shrink-0"
                    size={20}
                  />
                  <span className="text-gray-600">
                    Helpful tips for Dubai properties
                  </span>
                </div>
              </div>
            </div>
          </motion.aside>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-[#184896] to-[#0a2c66] p-8 md:p-12 text-white relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">

            <div>
              <p className="text-blue-200 font-semibold mb-2">
                Need Professional Help?
              </p>

              <h2 className="text-3xl md:text-4xl font-bold">
                Let Our Experts Take Care of Your Property
              </h2>

              <p className="text-blue-100 mt-3 max-w-2xl">
                Get reliable home maintenance and renovation services
                from our professional team.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#184896] px-7 py-4 rounded-full font-bold hover:scale-105 transition-transform cursor-pointer whitespace-nowrap"
            >
              Contact Us
              <ArrowRight size={19} />
            </Link>

          </div>
        </motion.div>
      </section>

    </main>
  );
}

