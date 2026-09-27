import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import Blog from "../../models/BlogModel";

export async function GET() {
  try {
    await connectDB();

    const count = await Blog.countDocuments();

    if (count > 0) {
      return NextResponse.json({
        success: true,
        message: "Blogs already exist",
        count,
      });
    }

    const blogs = [
      {
        title: "AC Maintenance Tips",
        category: "AC",
        excerpt:
          "Learn how regular AC maintenance improves cooling performance and saves electricity.",
        content:
          "Regular AC maintenance helps improve cooling performance, reduce electricity consumption, and extend the life of your air conditioning system. Professional inspection and cleaning can help keep your AC working efficiently.",
        image: "/images/Acproject7.png",
        slug: "ac-maintenance-tips",
        author: "ProTech Dubai",
      },

      {
        title: "Plumbing Guide",
        category: "Plumbing",
        excerpt:
          "Simple plumbing maintenance tips every homeowner should know.",
        content:
          "Regular plumbing checks can help prevent leaks, blocked drains, and water damage. Checking pipes, faucets, drains, and water pressure regularly can help identify problems before they become expensive repairs.",
        image: "/images/Plumproject9.png",
        slug: "plumbing-guide",
        author: "ProTech Dubai",
      },

      {
        title: "Electrical Safety",
        category: "Electrical",
        excerpt:
          "Important electrical safety practices for homes and businesses.",
        content:
          "Electrical systems should always be handled carefully. Avoid overloaded sockets, damaged wires, and unsafe electrical connections. Professional electrical inspections can help maintain a safe property.",
        image: "/images/Elecproject10.png",
        slug: "electrical-safety",
        author: "ProTech Dubai",
      },
    ];

    await Blog.insertMany(blogs);

    return NextResponse.json({
      success: true,
      message: "3 blogs added successfully",
    });
  } catch (error) {
    console.error("Seed Blog Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to seed blogs",
      },
      { status: 500 }
    );
  }
}