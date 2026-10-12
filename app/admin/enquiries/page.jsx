
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { RefreshCw, Mail, Phone, MapPin, ClipboardList } from "lucide-react";

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchEnquiries() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/contact", {
        cache: "no-store",
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Enquiries load nahi hui.");
      }

      setEnquiries(data.enquiries || []);
    } catch (err) {
      setError(err.message || "Kuch galat ho gaya.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchEnquiries();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 p-4 pt-24 md:p-8 md:pt-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-[#08152E]">
              Admin Enquiries
            </h1>
            <p className="mt-2 text-slate-600">
              Contact form se aayi customer enquiries yahan dekhein.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={fetchEnquiries}
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-3 font-medium text-[#08152E] hover:bg-slate-100"
            >
              <RefreshCw size={18} />
              Refresh
            </button>

            <Link
              href="/admin/dashboard"
              className="rounded-lg bg-[#184896] px-4 py-3 font-medium text-white hover:bg-blue-800"
            >
              Dashboard
            </Link>
          </div>
        </div>

        <div className="mb-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            Total Enquiries
          </p>
          <p className="mt-2 text-3xl font-bold text-[#184896]">
            {enquiries.length}
          </p>
        </div>

        {loading ? (
          <div className="rounded-xl bg-white p-10 text-center text-slate-600 shadow-sm">
            Enquiries load ho rahi hain...
          </div>
        ) : error ? (
          <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-red-700">
            <p className="font-semibold">{error}</p>
            <button
              onClick={fetchEnquiries}
              className="mt-3 cursor-pointer rounded-lg bg-red-600 px-4 py-2 text-white"
            >
              Try Again
            </button>
          </div>
        ) : enquiries.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <ClipboardList className="mx-auto mb-3 text-slate-400" size={40} />
            <h2 className="text-xl font-semibold text-[#08152E]">
              No Enquiries Yet
            </h2>
            <p className="mt-2 text-slate-600">
              Abhi MongoDB mein koi contact enquiry nahi mili.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {enquiries.map((item) => (
              <article
                key={item._id}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-bold text-[#08152E]">
                      {item.name || "No Name"}
                    </h2>
                    <p className="mt-1 text-xs text-slate-500">
                      {item.createdAt
                        ? new Date(item.createdAt).toLocaleString("en-IN")
                        : "Date unavailable"}
                    </p>
                  </div>

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    Enquiry
                  </span>
                </div>

                <div className="space-y-3 text-sm text-slate-700">
                  <p className="flex items-start gap-2 break-all">
                    <Mail size={17} className="mt-0.5 shrink-0 text-[#184896]" />
                    {item.email || "Email not provided"}
                  </p>

                  <p className="flex items-start gap-2">
                    <Phone size={17} className="mt-0.5 shrink-0 text-[#184896]" />
                    {item.phone || "Phone not provided"}
                  </p>

                  <p className="flex items-start gap-2">
                    <MapPin size={17} className="mt-0.5 shrink-0 text-[#184896]" />
                    {item.location || "Location not provided"}
                  </p>
                </div>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="text-sm text-slate-500">Service</p>
                  <p className="mt-1 font-semibold text-[#08152E]">
                    {item.service || "Not specified"}
                  </p>

                  {item.propertyType && (
                    <p className="mt-3 text-sm text-slate-600">
                      Property: {item.propertyType}
                    </p>
                  )}

                  {item.urgency && (
                    <p className="mt-2 text-sm text-slate-600">
                      Urgency: {item.urgency}
                    </p>
                  )}

                  {item.contactMethod && (
                    <p className="mt-2 text-sm text-slate-600">
                      Preferred contact: {item.contactMethod}
                    </p>
                  )}

                  <p className="mt-4 whitespace-pre-wrap break-words text-sm leading-6 text-slate-700">
                    {item.description || "No message provided."}
                  </p>

                  {item.email && (
                    <a
                      href={`mailto:${item.email}`}
                      className="mt-5 inline-flex cursor-pointer rounded-lg bg-[#184896] px-4 py-2 font-medium text-white hover:bg-blue-800"
                    >
                      Reply by Email
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}