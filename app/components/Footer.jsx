"use client";

import {
  Phone,
  Mail,
  MapPin,
  Shield,
  BadgeCheck,
  Star,
} from "lucide-react";

import {
  FaWhatsapp,
  FaInstagram,
  FaGoogle,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#05102A] text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}
          <div>
            <img
              src="/images/protech.png"
              alt="Logo"
              className="w-14 h-14 object-contain"
            />

            <p className="mt-6 text-slate-300 text-base leading-8">
              Dubai's trusted home maintenance and renovation company.
              DED licensed, SIRA certified, serving Dubai residents 24/7.
            </p>

            <div className="flex gap-3 mt-8">
                  <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center cursor-pointer hover:bg-[#25D366]  transition-all duration-300">
                <FaWhatsapp size={22}
                            
                 />
              </div>

              <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center cursor-pointer hover:bg-gradient-to-br hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] transition-all duration-300">
                <FaInstagram size={22} />
              </div>

              <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center cursor-pointer hover:bg-red-600 transition-all duration-300">
                <FaGoogle size={22} />
              </div>

            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-x1 font-bold mb-8 uppercase">
              Our Services
            </h3>

            <ul className="space-y-4 text-sm ">
              <li className="cursor-pointer text-slate-400 hover:text-[#1f5ab5] transition-colors duration-300">AC Services</li>
              <li className="cursor-pointer text-slate-400 hover:text-[#1f5ab5] transition-colors duration-300">Plumbing</li>
              <li className="cursor-pointer text-slate-400 hover:text-[#1f5ab5] transition-colors duration-300">Electrical</li>
              <li className="cursor-pointer text-slate-400 hover:text-[#1f5ab5] transition-colors duration-300">Renovation</li>
              <li className="cursor-pointer text-slate-400 hover:text-[#1f5ab5] transition-colors duration-300">Cleaning</li>
              <li className="cursor-pointer text-slate-400 hover:text-[#1f5ab5] transition-colors duration-300">
                View All Services →
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-x1 font-bold mb-8 uppercase">
              Company
            </h3>

            <ul className="space-y-4 text-sm ">
              <li className="cursor-pointer text-slate-400 hover:text-[#1f5ab5] transition-colors duration-300">About Us</li>
              <li className="cursor-pointer text-slate-400 hover:text-[#1f5ab5] transition-colors duration-300">Our Team</li>
              <li className="cursor-pointer text-slate-400 hover:text-[#1f5ab5] transition-colors duration-300">Why Choose Us</li>
              <li className="cursor-pointer text-slate-400 hover:text-[#1f5ab5] transition-colors duration-300">Case Studies</li>
              <li className="cursor-pointer text-slate-400 hover:text-[#1f5ab5] transition-colors duration-300">Projects Gallery</li>
              <li className="cursor-pointer text-slate-400 hover:text-[#1f5ab5] transition-colors duration-300">Blog & Guides</li>
              <li className="cursor-pointer text-slate-400 hover:text-[#1f5ab5] transition-colors duration-300">Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold mb-8 uppercase">
              Contact Us
            </h3>

            <div className="space-y-4">

              <div className="flex gap-4">
                <Phone className="text-[#1f5ab5]" size={21}/>
                <div>
                  <p className="font-bold text-base">
                    +971 56 151 7463
                  </p>
                  <p className="text-slate-400 text-sm hover:text-white transition-colors duration-300 cursor-pointer">
                    24/7 Emergency Line
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-[#1f5ab5]" size={21} />
                <div>
                  <p className="font-bold text-base">
                    info@protechfitout.com
                  </p>
                  <p className="text-slate-400 text-sm hover:text-white transition-colors duration-300 cursor-pointer">
                    Email Us Anytime
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-[#1f5ab5]" size={21} />
                <div>
                  <p className="font-bold text-base">
                   Dubai, United Arab Emirates
                  </p>
                  <p className="text-slate-400 text-sm">
                    Serving All Dubai Areas
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 pt-12">

          <div className="grid md:grid-cols-3 gap-10">

            <div>
              <div className="flex items-center gap-3">
                <BadgeCheck className="text-[#1f5ab5]" />
                <h4 className="font-bold text-lg">
                  Licensed & Certified
                </h4>
              </div>

              <ul className="mt-2 text-sm space-y-1 text-slate-400">
                <li>Trade License: DED Licensed</li>
                <li>SIRA Certified: Security Approved</li>
                <li>DEWA Approved Electricians</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <Shield className="text-[#1f5ab5]" />
                <h4 className="font-bold text-lg">
                  Fully Insured
                </h4>
              </div>

              <ul className="mt-2 text-sm space-y-1 text-slate-400">
                <li>Public Liability Insurance</li>
                <li>Professional Indemnity Insurance</li>
                <li>Workers Compensation Coverage</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <Star className="text-[#1f5ab5]" />
                <h4 className="font-bold text-lg">
                  Our Track Record
                </h4>
              </div>

              <ul className="mt-2 text-sm space-y-1 text-slate-400">
                <li>Trusted by Dubai Homeowners</li>
                <li>Fast Emergency Response</li>
                <li>6-Month Workmanship Warranty</li>
              </ul>
            </div>

          </div>

        </div>

        {/* Service Areas */}
        <div className="border-t text-sm border-white/10 mt-14 py-10 text-center text-slate-400 leading-8">
          <span className="font-semibold text-white">
            Service Areas:
          </span>{" "}
          Palm Jumeirah, Dubai Marina, JVC, Arabian Ranches,
          Downtown Dubai, Business Bay, Emirates Hills,
          Dubai Hills Estate, Al Barsha, Jumeirah,
          and all Dubai communities.
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-slate-400 text-sm text-center md:text-left">
            © 2026 PROTECH Dynamics Technical Services LLC.
            All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-slate-400">
            <span className="cursor-pointer text-sm hover:text-white">
              Privacy Policy
            </span>

            <span className="cursor-pointer text-sm hover:text-white">
              Terms of Service
            </span>

            <span className="cursor-pointer text-sm hover:text-white">
              Made by DevGator
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}