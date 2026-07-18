"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

import MegaMenu from "./MegaMenu";
import LocationsMenu from "./LocationsMenu";
import CompanyMenu from "./CompanyMenu";
import ResourcesMenu from "./ResourcesMenu";

export default function Navbar() {

const [open, setOpen] = useState(false);

// Desktop dropdowns
const [servicesOpen, setServicesOpen] = useState(false);
const [locationsOpen, setLocationsOpen] = useState(false);
const [companyOpen, setCompanyOpen] = useState(false);
const [resourcesOpen, setResourcesOpen] = useState(false);

// Mobile accordions
const [mobileServices, setMobileServices] = useState(false);
const [mobileLocations, setMobileLocations] = useState(false);
const [mobileCompany, setMobileCompany] = useState(false);
const [mobileResources, setMobileResources] = useState(false);
  
  
  return (
     <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200  z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/protech.png"
              alt="logo"
              className="w-14 h-14 object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">

            <Link
           href="/"
           className="font-semibold text-gray-900 hover:text-[#184896] transition"
           >
           Home
          </Link>

           


              {/* service */}

        <div
        className="relative"
        onMouseEnter={() => setServicesOpen(true)}
        onMouseLeave={() => setServicesOpen(false)}

        >

  <Link
    href="/services"
    className="flex items-center gap-1 text-gray-600 hover:text-[#184896] cursor-pointer"
  >
    Services

    <ChevronDown
      size={18}
      className={`transition-transform duration-300 ${
        servicesOpen ? "rotate-180" : ""
      }`}
    />
  </Link>

  {servicesOpen && (
    <div
      onMouseEnter={() => setServicesOpen(true)}
      onMouseLeave={() => setServicesOpen(false)}
    >
      <MegaMenu />
    </div>
  )}
</div>


              

            
              {/* location */}
             <div
                 className="relative"
                 onMouseEnter={() => setLocationsOpen(true)}
                 onMouseLeave={() => setLocationsOpen(false)}
                >
             <button className="flex items-center gap-1 text-gray-600 hover:text-[#184896] cursor-pointer">
             Locations

             <ChevronDown
              size={18}
             className={`transition-transform duration-300 ${
            locationsOpen ? "rotate-180" : ""
            }`}
           />
          </button>

         {locationsOpen && <LocationsMenu />}
         </div>



            {/* company */}
            <div
                className="relative"
                onMouseEnter={() => setCompanyOpen(true)}
                onMouseLeave={() => setCompanyOpen(false)}
                 >
                 <button className="flex items-center gap-1 text-gray-600 hover:text-[#184896] cursor-pointer">
                 Company

               <ChevronDown
               size={18}
               className={`transition-transform duration-300 ${
               companyOpen ? "rotate-180" : ""
               }`}
              />
             </button>

            {companyOpen && <CompanyMenu />}
            </div>

            

             {/* Resources */}


             <div
                className="relative"
                onMouseEnter={() => setResourcesOpen(true)}
                onMouseLeave={() => setResourcesOpen(false)}
              >
              <button className="flex items-center gap-1 text-gray-600 hover:text-[#184896] cursor-pointer">
              Resources

              <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${
              resourcesOpen ? "rotate-180" : ""
             }`}
             />
             </button>

             {resourcesOpen && <ResourcesMenu />}
            </div>

            {/* emergency */}

            <Link
            href="/emergency"
            className="text-red-600 font-medium hover:text-red-700 transition"
            >
           ✱ Emergency
          </Link>


          {/* contact */}

          <Link
         href="/contact"
        className="text-gray-700 hover:text-[#184896]"
        >
        Contact
        </Link>

          </div>



          {/* Quote Button */}
          <div className="hidden lg:block">
            <button className="bg-[#184896] text-white px-8 py-3 rounded cursor-pointer font-semibold hover:bg-[#133a79]">
              Request Quote
            </button>
          </div>



          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>



 {/* Mobile Menu */}
{open && (
  <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg max-h-[85vh] overflow-y-auto">

    <div className="px-5 py-4 space-y-1">

      <Link
        href="/"
        onClick={() => setOpen(false)}
        className="block py-3 border-b"
      >
        Home
      </Link>

      {/* Services */}
      <div className="border-b">
        <button
          onClick={() => setMobileServices(!mobileServices)}
          className="w-full flex items-center justify-between py-4"
        >
          <span>Services</span>

          <ChevronDown
            size={18}
            className={`transition ${
              mobileServices ? "rotate-180" : ""
            }`}
          />
        </button>

        {mobileServices && (
          <div className="pb-3 pl-3">
            <MegaMenu mobile />
          </div>
        )}
      </div>

      {/* Locations */}
      <div className="border-b">
        <button
          onClick={() => setMobileLocations(!mobileLocations)}
          className="w-full flex items-center justify-between py-4"
        >
          <span>Locations</span>

          <ChevronDown
            size={18}
            className={`transition ${
              mobileLocations ? "rotate-180" : ""
            }`}
          />
        </button>

        {mobileLocations && (
          <div className="pb-3 pl-3">
            <LocationsMenu mobile />
          </div>
        )}
      </div>

      {/* Company */}
      <div className="border-b">
        <button
          onClick={() => setMobileCompany(!mobileCompany)}
          className="w-full flex items-center justify-between py-4"
        >
          <span>Company</span>

          <ChevronDown
            size={18}
            className={`transition ${
              mobileCompany ? "rotate-180" : ""
            }`}
          />
        </button>

        {mobileCompany && (
          <div className="pb-3 pl-3">
            <CompanyMenu mobile />
          </div>
        )}
      </div>

      {/* Resources */}
      <div className="border-b">
        <button
          onClick={() => setMobileResources(!mobileResources)}
          className="w-full flex items-center justify-between py-4"
        >
          <span>Resources</span>

          <ChevronDown
            size={18}
            className={`transition ${
              mobileResources ? "rotate-180" : ""
            }`}
          />
        </button>

        {mobileResources && (
          <div className="pb-3 pl-3">
            <ResourcesMenu mobile />
          </div>
        )}
      </div>

      <Link
        href="/emergency"
        onClick={() => setOpen(false)}
        className="block py-4 border-b text-red-600 font-medium"
      >
        ✱ 24/7 Emergency Services
      </Link>

      <Link
        href="/contact"
        onClick={() => setOpen(false)}
        className="block py-4"
      >
        Contact
      </Link>

      <button className="w-full mt-3 bg-[#184896] text-white py-1 rounded-md font-semibold">
        📄 Request Free Quote
      </button>

      <div className="mt-3 bg-red-50 rounded-md py-3 text-center text-red-600 font-medium">
        ✱ 24/7 Emergency: +971 56 151 7463
      </div>

    </div>
  </div>
)}



</div>
</nav>
);
}