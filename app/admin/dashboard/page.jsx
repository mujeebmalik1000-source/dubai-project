"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Wrench,
  Image,
  FileText,
  CalendarCheck,
  LogOut,
  Mail,
} from "lucide-react";

export default function AdminDashboard() {
  const cards = [
    {
      title: "Services",
      description: "Manage website services",
      href: "/admin/services",
      icon: Wrench,
    },
    {
      title: "Gallery",
      description: "Manage gallery projects",
      href: "/admin/gallery",
      icon: Image,
    },
    {
      title: "Blog",
      description: "Manage blog articles",
      href: "/admin/blog",
      icon: FileText,
    },
    {
      title: "Bookings",
      description: "View customer bookings",
      href: "/admin/bookings",
      icon: CalendarCheck,
    },


    {
  title: "Enquiries",
  description: "View customer enquiries",
  href: "/admin/enquiries",
  icon: Mail,
},
  ];

  return (
    <main className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <header className="bg-[#06132f] text-white px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#184896] flex items-center justify-center">
              <LayoutDashboard size={22} />
            </div>

            <div>
              <h1 className="text-xl font-bold">
                ProTech Admin
              </h1>

              <p className="text-blue-200 text-sm">
                Dashboard
              </p>
            </div>
          </div>

          <Link
            href="/"
            className="flex items-center gap-2 text-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition"
          >
            <LogOut size={17} />
            Website
          </Link>

        </div>
      </header>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Welcome, Admin 👋
          </h2>

          <p className="text-gray-500 mt-2">
            Manage your ProTech Dubai website from here.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <Link
                key={card.title}
                href={card.href}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
              >

                <div className="w-12 h-12 rounded-xl bg-[#184896]/10 text-[#184896] flex items-center justify-center mb-5">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {card.title}
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  {card.description}
                </p>

                <div className="text-[#184896] font-semibold text-sm mt-5">
                  Manage →
                </div>

              </Link>
            );
          })}

        </div>

      </section>

    </main>
  );
}