
"use client";

import { useEffect, useState } from "react";
import { RefreshCw, CalendarDays, Search, AlertCircle } from "lucide-react";

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  async function fetchBookings() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/booking", {
        cache: "no-store",
      });

      const data = await response.json();

      if (!response.ok || data.success === false) {
        throw new Error(data.message || "Bookings load nahi ho sakin.");
      }

      setBookings(
        Array.isArray(data.bookings)
          ? data.bookings
          : Array.isArray(data.data)
          ? data.data
          : []
      );
    } catch (err) {
      setError(err.message || "Kuch galat ho gaya.");
    } finally {
      setLoading(false);
    }
  }




  async function updateBookingStatus(bookingId, status) {
    try {
      setError("");

      const response = await fetch(`/api/booking/${bookingId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Status update nahi hua.");
      }

      setBookings((previousBookings) =>
        previousBookings.map((booking) =>
          booking._id === bookingId
            ? { ...booking, status: data.booking.status }
            : booking
        )
      );
    } catch (err) {
      setError(err.message || "Status update nahi hua.");
      await fetchBookings();
    }
  }






  useEffect(() => {
    fetchBookings();
  }, []);

  const filteredBookings = bookings.filter((booking) => {
    const text = [
      booking.fullName,
      booking.name,
      booking.email,
      booking.phone,
      booking.service,
      booking.location,
      booking.status,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return text.includes(search.toLowerCase());
  });

  return (
    <main className="min-h-screen bg-slate-50 p-4 pt-8 md:p-8">
      <div className="mx-auto max-w-7xl pt-24">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-700">
              Admin Dashboard
            </p>
            <h1 className="text-3xl font-bold text-slate-900">
              Manage Bookings
            </h1>
            <p className="mt-2 text-slate-600">
              Website se aane wali customer booking requests dekhein.
            </p>
          </div>

          <button
            onClick={fetchBookings}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#184896] px-5 py-3 font-semibold text-white hover:bg-blue-800 disabled:opacity-60"
          >
            <RefreshCw size={18} />
            Refresh
          </button>
        </div>

        <div className="mb-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-100 p-3 text-blue-700">
                <CalendarDays size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Total Bookings</p>
                <p className="text-2xl font-bold text-slate-900">
                  {bookings.length}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-emerald-100 p-3 text-emerald-700">
                <Search size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Search Results</p>
                <p className="text-2xl font-bold text-slate-900">
                  {filteredBookings.length}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Name, email, phone ya service se search karein..."
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {error && (
          <div className="mb-5 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
            <AlertCircle className="mt-0.5 shrink-0" size={20} />
            <div>
              <p className="font-semibold">Bookings load nahi hui</p>
              <p className="mt-1 text-sm">{error}</p>
              <p className="mt-2 text-sm">
                API route aur admin login check karna hoga.
              </p>
            </div>
          </div>
        )}

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {loading ? (
            <div className="p-12 text-center text-slate-500">
              Bookings load ho rahi hain...
            </div>
          ) : filteredBookings.length === 0 ? (
            <div className="p-12 text-center">
              <CalendarDays
                size={42}
                className="mx-auto mb-3 text-slate-300"
              />
              <h2 className="font-semibold text-slate-800">
                {bookings.length === 0
                  ? "Abhi koi booking nahi mili"
                  : "Koi matching booking nahi mili"}
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                API response aur search term check karein.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[850px] text-left text-sm">
                <thead className="bg-slate-100 text-slate-600">
                  <tr>
                    <th className="px-5 py-4 font-semibold">Customer</th>
                    <th className="px-5 py-4 font-semibold">Contact</th>
                    <th className="px-5 py-4 font-semibold">Service</th>
                    <th className="px-5 py-4 font-semibold">Location</th>
                    <th className="px-5 py-4 font-semibold">Date</th>
                    <th className="px-5 py-4 font-semibold">Status</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {filteredBookings.map((booking, index) => (
                    <tr
                      key={booking._id || booking.id || index}
                      className="hover:bg-slate-50"
                    >
                      <td className="px-5 py-4 font-medium text-slate-900">
                        {booking.fullName || booking.name || "—"}
                        <p className="mt-1 text-xs font-normal text-slate-500">
                          {booking.email || "—"}
                        </p>
                      </td>

                      <td className="px-5 py-4 text-slate-600">
                        {booking.phone || "—"}
                      </td>

                      <td className="px-5 py-4 text-slate-700">
                        {booking.service || "—"}
                      </td>

                      <td className="px-5 py-4 text-slate-700">
                        {booking.location || "—"}
                      </td>

                      <td className="px-5 py-4 text-slate-700">
                        {booking.date
                          ? String(booking.date).slice(0, 10)
                          : booking.createdAt
                          ? new Date(booking.createdAt).toLocaleDateString()
                          : "—"}
                      </td>


                      
<td className="px-5 py-4">
  <select
    value={booking.status || "New"}
    onChange={(event) =>
      updateBookingStatus(booking._id, event.target.value)
    }
    className="w-full min-w-[125px] cursor-pointer rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
    aria-label={`Update status for ${booking.fullName || "booking"}`}
  >
    <option value="New">New</option>
    <option value="Contacted">Contacted</option>
    <option value="Completed">Completed</option>
  </select>
</td>


                      {/* <td className="px-5 py-4">
                        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                          {booking.status || "New"}
                        </span>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
