"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function BookingRequests() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedBooking, setSelectedBooking] = useState(null);

  // Fetch all bookings
  const fetchBookings = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("/api/booking", {
        cache: "no-store",
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to fetch bookings");
      }

      setBookings(data.bookings || []);
    } catch (error) {
      console.error("Fetch Booking Error:", error);
      setError("Unable to load booking requests.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 pt-28 pb-10">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6">

          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-[#184896]">
              Booking Requests
            </h1>

            <p className="mt-2 text-gray-600">
              All submitted booking requests
            </p>
          </div>

          {/* Loading */}
          {loading && (
            <div className="bg-white rounded-xl p-10 text-center shadow-sm">
              <p className="text-gray-600 text-lg">
                Loading booking requests...
              </p>
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-5 text-center">
              {error}

              <button
                onClick={fetchBookings}
                className="ml-3 bg-[#184896] text-white px-4 py-2 rounded-lg"
              >
                Try Again
              </button>
            </div>
          )}

          {/* No bookings */}
          {!loading && !error && bookings.length === 0 && (
            <div className="bg-white rounded-xl p-10 text-center shadow-sm">
              <p className="text-gray-600 text-lg">
                No booking requests found.
              </p>
            </div>
          )}

          {/* Booking Table */}
          {!loading && !error && bookings.length > 0 && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">

              {/* Horizontal scroll for mobile */}
              <div className="overflow-x-auto">

                <table className="w-full min-w-[1250px]">

                  <thead>
                    <tr className="bg-[#184896] text-white text-left">

                      <th className="px-5 py-4 font-semibold">
                        Name
                      </th>

                      <th className="px-5 py-4 font-semibold">
                        Email
                      </th>

                      <th className="px-5 py-4 font-semibold">
                        Phone
                      </th>

                      <th className="px-5 py-4 font-semibold">
                        Service
                      </th>

                      <th className="px-5 py-4 font-semibold">
                        Property
                      </th>

                      <th className="px-5 py-4 font-semibold">
                        Location
                      </th>

                      <th className="px-5 py-4 font-semibold">
                        Budget
                      </th>

                      <th className="px-5 py-4 font-semibold">
                        Date
                      </th>

                      <th className="px-5 py-4 font-semibold">
                        Time
                      </th>

                      <th className="px-5 py-4 font-semibold">
                        Attachment
                      </th>

                      <th className="px-5 py-4 font-semibold">
                        Details
                      </th>

                    </tr>
                  </thead>

                  <tbody>

                    {bookings.map((booking) => (
                      <tr
                        key={booking._id}
                        className="border-b border-gray-200 hover:bg-gray-50 transition"
                      >

                        {/* Name */}
                        <td className="px-5 py-5 text-gray-800 font-medium">
                          {booking.fullName}
                        </td>

                        {/* Email */}
                        <td className="px-5 py-5 text-gray-600">
                          {booking.email}
                        </td>

                        {/* Phone */}
                        <td className="px-5 py-5 text-gray-600">
                          {booking.phone}
                        </td>

                        {/* Service */}
                        <td className="px-5 py-5">
                          <span className="inline-block bg-blue-50 text-[#184896] px-3 py-1 rounded-full text-sm font-medium">
                            {booking.service}
                          </span>
                        </td>

                        {/* Property */}
                        <td className="px-5 py-5 text-gray-700">
                          {booking.property}
                        </td>

                        {/* Location */}
                        <td className="px-5 py-5 text-gray-700">
                          {booking.location}
                        </td>

                        {/* Budget */}
                        <td className="px-5 py-5 text-gray-700">
                          {booking.budget || "-"}
                        </td>

                        {/* Date */}
                        <td className="px-5 py-5 text-gray-700">
                          {booking.date || "-"}
                        </td>

                        {/* Time */}
                        <td className="px-5 py-5 text-gray-700">
                          {booking.time || "-"}
                        </td>

                        {/* Attachment */}
                        <td className="px-5 py-5">

                          {booking.attachment ? (
                            <a
                              href={booking.attachment}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#184896] hover:underline font-medium"
                            >
                              View File
                            </a>
                          ) : (
                            <span className="text-gray-400">
                              No file
                            </span>
                          )}

                        </td>

                        {/* Details Button */}
                        <td className="px-5 py-5">

                          <button
                            onClick={() =>
                              setSelectedBooking(booking)
                            }
                            className="bg-[#184896] hover:bg-[#133a79] text-white px-5 py-2 rounded-lg font-medium transition"
                          >
                            View Details
                          </button>

                        </td>

                      </tr>
                    ))}

                  </tbody>

                </table>

              </div>

              {/* Total */}
              <div className="px-6 py-5 border-t bg-white">
                <p className="text-lg font-medium text-gray-700">
                  Total Bookings:{" "}
                  <span className="text-[#184896] font-bold">
                    {bookings.length}
                  </span>
                </p>
              </div>

            </div>
          )}

        </div>
      </main>

      {/* ========================= */}
      {/* BOOKING DETAILS MODAL */}
      {/* ========================= */}

      {selectedBooking && (
        <div
          className="fixed inset-0 z-[999] bg-black/60 flex items-center justify-center p-4"
          onClick={() => setSelectedBooking(null)}
        >

          <div
            className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Modal Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b">

              <div>
                <h2 className="text-3xl font-bold text-[#061b3a]">
                  Booking Details
                </h2>

                <p className="text-gray-500 mt-1">
                  Complete booking information
                </p>
              </div>

              <button
                onClick={() => setSelectedBooking(null)}
                className="text-gray-500 hover:text-red-500 text-3xl leading-none"
              >
                ×
              </button>

            </div>

            {/* Modal Body */}
            <div className="p-8 overflow-y-auto max-h-[70vh]">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">

                <Detail
                  label="Full Name"
                  value={selectedBooking.fullName}
                />

                <Detail
                  label="Company"
                  value={selectedBooking.company}
                />

                <Detail
                  label="Email"
                  value={selectedBooking.email}
                />

                <Detail
                  label="Phone"
                  value={selectedBooking.phone}
                />

                <Detail
                  label="Service"
                  value={selectedBooking.service}
                  blue
                />

                <Detail
                  label="Property Type"
                  value={selectedBooking.property}
                />

                <Detail
                  label="Project Location"
                  value={selectedBooking.location}
                />

                <Detail
                  label="Budget"
                  value={selectedBooking.budget || "-"}
                />

                <Detail
                  label="Preferred Date"
                  value={selectedBooking.date || "-"}
                />

                <Detail
                  label="Preferred Time"
                  value={selectedBooking.time || "-"}
                />

                <Detail
                  label="Timeline"
                  value={selectedBooking.timeline || "-"}
                />

              </div>

              {/* Project Details */}
              <div className="mt-8">

                <p className="text-gray-500 mb-2">
                  Project Details
                </p>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-gray-800 leading-7">
                  {selectedBooking.details || "No project details provided."}
                </div>

              </div>

              {/* Attachment */}
              <div className="mt-8">

                <p className="text-gray-500 mb-2">
                  Attachment
                </p>

                {selectedBooking.attachment ? (
                  <a
                    href={selectedBooking.attachment}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#184896] hover:bg-[#133a79] text-white px-6 py-3 rounded-lg font-medium transition"
                  >
                    View Attachment
                  </a>
                ) : (
                  <p className="text-gray-400">
                    No attachment uploaded.
                  </p>
                )}

              </div>

              {/* Created At */}
              <div className="mt-8 pt-6 border-t">

                <p className="text-sm text-gray-500">
                  Booking Submitted
                </p>

                <p className="text-gray-700 font-medium mt-1">
                  {selectedBooking.createdAt
                    ? new Date(
                        selectedBooking.createdAt
                      ).toLocaleString()
                    : "-"}
                </p>

              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-8 py-5 border-t bg-gray-50 flex justify-end">

              <button
                onClick={() => setSelectedBooking(null)}
                className="bg-[#184896] hover:bg-[#133a79] text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Close
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
}


/* ========================= */
/* DETAIL COMPONENT */
/* ========================= */

function Detail({ label, value, blue = false }) {
  return (
    <div>
      <p className="text-gray-500 mb-2">
        {label}
      </p>

      <p
        className={`text-lg font-semibold ${
          blue ? "text-[#184896]" : "text-[#111827]"
        }`}
      >
        {value || "-"}
      </p>
    </div>
  );
}