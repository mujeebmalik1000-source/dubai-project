"use client";

import {
  Info,
  Users,
  BadgeCheck,
  Briefcase,
  ImageIcon,
} from "lucide-react";
import Link from "next/link";

const companyItems = [
  {
    icon: Info,
    title: "About Us",
    href: "/about",
  },
  {
    icon: Users,
    title: "Our Team",
    href: "/our-team",
  },
  {
    icon: BadgeCheck,
    title: "Why Choose Us",
    href: "/why-choose-us",
  },
  {
    icon: Briefcase,
    title: "Case Studies",
    href: "/case-studies",
  },
  {
    icon: ImageIcon,
    title: "Projects Gallery",
    href: "/gallery",
  },
];

export default function CompanyMenu({ mobile = false }) {
  return (
    <div
      className={
        mobile
            ? "mt-2 w-full bg-white border border-gray-200 rounded-lg overflow-hidden"
            : "absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[220px] max-w-[95vw] bg-white border border-gray-200 rounded-lg shadow-xl z-50"
      
      }
    >
      <ul className="py-2">
  {companyItems.map((item, index) => {
    const Icon = item.icon;

    return (
      <li key={index}>
        <Link
          href={item.href}
          className="flex items-center gap-3 px-5 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#184896] transition-all duration-300"
        >
          <Icon size={16} className="shrink-0 text-gray-400" />
          <span>{item.title}</span>
        </Link>
      </li>
    );
  })}

      </ul>
    </div>
  );
}
