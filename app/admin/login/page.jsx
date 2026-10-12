"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LockKeyhole, Mail, LogIn } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.message || "Login failed");
        return;
      }

      router.push("/admin/dashboard");
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-[#06132f] via-[#0b2858] to-[#184896] flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">

          <div className="text-center mb-8">

            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-[#184896] text-white flex items-center justify-center shadow-lg">
              <LockKeyhole size={30} />
            </div>

            <h1 className="text-3xl font-bold text-gray-900">
              Admin Login
            </h1>

            <p className="text-gray-500 mt-2">
              Sign in to manage your website
            </p>

          </div>

          <form onSubmit={handleLogin} className="space-y-5">

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>

              <div className="relative">

                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter admin email"
                  required
                  className="w-full border border-gray-200 rounded-xl pl-12 pr-4 py-3.5 outline-none focus:border-[#184896] focus:ring-2 focus:ring-[#184896]/10"
                />

              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>

              <div className="relative">

                <LockKeyhole
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                  className="w-full border border-gray-200 rounded-xl pl-12 pr-4 py-3.5 outline-none focus:border-[#184896] focus:ring-2 focus:ring-[#184896]/10"
                />

              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#184896] hover:bg-[#123875] text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition cursor-pointer disabled:opacity-60"
            >
              <LogIn size={19} />

              {loading ? "Signing in..." : "Login"}
            </button>

          </form>

        </div>

      </div>

    </main>
  );
}