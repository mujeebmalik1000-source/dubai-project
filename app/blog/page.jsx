export default function BlogPage() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-[#184896] mb-4">
          Blog & Guides
        </h1>

        <p className="text-gray-600 max-w-3xl mb-12">
          Read our latest articles, maintenance guides, repair tips,
          and expert advice to keep your home and appliances in perfect
          condition.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3">
              AC Maintenance Tips
            </h2>

            <p className="text-gray-600 mb-5">
              Learn how regular maintenance improves AC performance and
              saves electricity.
            </p>

            <button className="text-[#184896] font-semibold">
              Read More →
            </button>
          </div>

          <div className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3">
              Plumbing Guide
            </h2>

            <p className="text-gray-600 mb-5">
              Simple plumbing maintenance tips every homeowner should
              know.
            </p>

            <button className="text-[#184896] font-semibold">
              Read More →
            </button>
          </div>

          <div className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3">
              Electrical Safety
            </h2>

            <p className="text-gray-600 mb-5">
              Important electrical safety practices for homes and
              businesses.
            </p>

            <button className="text-[#184896] font-semibold">
              Read More →
            </button>
          </div>

        </div>

      </div>
    </main>
  );
}