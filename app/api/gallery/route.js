import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import Gallery from "../../models/GalleryModel";

// ================= GET =================

export async function GET() {
  try {
    await connectDB();

    const projects = await Gallery.find({ isActive: true })
      .sort({ createdAt: -1 });

    const featuredProject = await Gallery.findOne({
      isActive: true,
      isFeatured: true,
    });

    return NextResponse.json({
      success: true,
      projects,
      featuredProject,
    });
  } catch (error) {
    console.error("Gallery GET Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch gallery projects",
      },
      { status: 500 }
    );
  }
}

// ================= POST =================

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();

    const {
      title,
      category,
      image,
      description,
      isFeatured,
      features,
      duration,
      teamMembers,
      rating,
      slug,
    } = body;

    if (!title || !category || !image || !slug) {
      return NextResponse.json(
        {
          success: false,
          message: "Title, category, image and slug are required",
        },
        { status: 400 }
      );
    }

    const existingProject = await Gallery.findOne({ slug });

    if (existingProject) {
      return NextResponse.json(
        {
          success: false,
          message: "A project with this slug already exists",
        },
        { status: 400 }
      );
    }

    const project = await Gallery.create({
      title,
      category,
      image,
      description,
      isFeatured: isFeatured || false,
      features: features || [],
      duration: duration || "",
      teamMembers: teamMembers || "",
      rating: rating || "★★★★★",
      slug,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Gallery project created successfully",
        project,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Gallery POST Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create gallery project",
      },
      { status: 500 }
    );
  }
}

// ================= PUT =================
// Set one project as Featured

export async function PUT(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { slug } = body;

    if (!slug) {
      return NextResponse.json(
        {
          success: false,
          message: "Slug is required",
        },
        { status: 400 }
      );
    }

    // Remove featured status from all projects
    await Gallery.updateMany(
      {},
      { $set: { isFeatured: false } }
    );

    // Make selected project featured
    const project = await Gallery.findOneAndUpdate(
      { slug },
      { $set: { isFeatured: true } },
      { new: true }
    );

    if (!project) {
      return NextResponse.json(
        {
          success: false,
          message: "Project not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Featured project updated successfully",
      project,
    });
  } catch (error) {
    console.error("Gallery PUT Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update featured project",
      },
      { status: 500 }
    );
  }
}