import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { connectDB } from "../../../lib/mongodb";
import Gallery from "../../models/GalleryModel";
import Footer from "../../components/Footer";

export default async function GalleryDetailPage({ params }) {
  const { slug } = await params;

  await connectDB();

  const project = await Gallery.findOne({
    slug,
    isActive: true,
  }).lean();

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative h-[420px] md:h-[520px] overflow-hidden">

        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#071B3B]/95 via-[#184896]/60 to-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 h-full flex items-center">

          <div className="max-w-4xl">

            <Link
              href="/gallery"
              className="inline-block mb-6 text-white/90 hover:text-white font-semibold"
            >
              ← Back to Gallery
            </Link>

            <span className="inline-block bg-[#184896] text-white px-5 py-2 rounded-full text-sm font-bold uppercase">
              {project.category}
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-black text-white leading-tight">
              {project.title}
            </h1>

          </div>

        </div>
      </section>

      {/* PROJECT DETAILS */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-100">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-3 gap-12">

            {/* LEFT */}
            <div className="lg:col-span-2">

              <h2 className="text-3xl md:text-4xl font-black text-[#071B3B]">
                Project Overview
              </h2>

              <p className="mt-6 text-gray-600 text-lg leading-8">
                {project.description}
              </p>

              {project.features?.length > 0 && (
                <div className="mt-10">

                  <h3 className="text-2xl font-bold text-[#071B3B]">
                    Project Features
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4 mt-6">

                    {project.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm"
                      >
                        <div className="w-3 h-3 rounded-full bg-[#184896]" />

                        <span className="font-medium text-gray-700">
                          {feature}
                        </span>
                      </div>
                    ))}

                  </div>

                </div>
              )}

            </div>

            {/* RIGHT */}
            <div>

              <div className="bg-[#071B3B] rounded-3xl p-8 shadow-xl">

                <h3 className="text-2xl font-bold text-white">
                  Project Information
                </h3>

                <div className="mt-8 border-b border-white/10 pb-5">
                  <p className="text-slate-400 text-sm">
                    Category
                  </p>

                  <p className="text-white font-semibold mt-1">
                    {project.category}
                  </p>
                </div>

                {project.duration && (
                  <div className="border-b border-white/10 py-5">
                    <p className="text-slate-400 text-sm">
                      Project Duration
                    </p>

                    <p className="text-white font-semibold mt-1">
                      {project.duration}
                    </p>
                  </div>
                )}

                {project.teamMembers && (
                  <div className="border-b border-white/10 py-5">
                    <p className="text-slate-400 text-sm">
                      Team Members
                    </p>

                    <p className="text-white font-semibold mt-1">
                      {project.teamMembers}
                    </p>
                  </div>
                )}

                <div className="py-5">
                  <p className="text-slate-400 text-sm">
                    Client Rating
                  </p>

                  <p className="text-cyan-400 text-2xl mt-1">
                    {project.rating || "★★★★★"}
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* PROJECT IMAGE */}
      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="overflow-hidden rounded-3xl shadow-2xl">

            <Image
              src={project.image}
              alt={project.title}
              width={1400}
              height={900}
              className="w-full h-auto object-cover"
            />

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#071B3B] via-[#184896] to-[#0A2A5E]">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-black text-white">
            Ready To Start Your Project?
          </h2>

          <p className="mt-6 text-blue-100 text-lg leading-8">
            Let our professional team bring the same quality and
            workmanship to your property.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">

            <Link
              href="/booking"
              className="px-8 py-4 rounded-xl bg-white text-[#184896] font-bold hover:scale-105 transition duration-300"
            >
              Request Free Quote
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl border-2 border-white text-white font-bold hover:bg-white hover:text-[#184896] transition duration-300"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}