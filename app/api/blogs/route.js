import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import Blog from "../../models/BlogModel";

export async function GET() {
  try {
    await connectDB();

    const blogs = await Blog.find({
      isActive: true,
    }).sort({
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      blogs,
    });
  } catch (error) {
    console.error("Blog GET Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch blogs",
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();

    const {
      title,
      category,
      excerpt,
      content,
      image,
      slug,
      author,
    } = body;

    if (!title || !category || !excerpt || !slug) {
      return NextResponse.json(
        {
          success: false,
          message: "Title, category, excerpt and slug are required",
        },
        { status: 400 }
      );
    }

    const existingBlog = await Blog.findOne({ slug });

    if (existingBlog) {
      return NextResponse.json(
        {
          success: false,
          message: "A blog with this slug already exists",
        },
        { status: 400 }
      );
    }

    const blog = await Blog.create({
      title,
      category,
      excerpt,
      content: content || "",
      image: image || "",
      slug,
      author: author || "ProTech Dubai",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Blog created successfully",
        blog,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Blog POST Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create blog",
      },
      { status: 500 }
    );
  }
}