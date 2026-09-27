
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs");
        const data = await response.json();

        if (data.success) {
          setBlogs(data.blogs);
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

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

        {loading ? (
          <p className="text-gray-600">Loading blogs...</p>
        ) : blogs.length === 0 ? (
          <p className="text-gray-600">No blogs available.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold mb-3">
                  {blog.title}
                </h2>

                <p className="text-gray-600 mb-5">
                  {blog.excerpt}
                </p>

                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-[#184896] font-semibold cursor-pointer"
                >
                  Read More →
                </Link>
              </div>
            ))}

          </div>
        )}

      </div>
    </main>
  );
}

