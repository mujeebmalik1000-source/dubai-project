
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "../../../../lib/mongodb";
import Service from "../../../models/ServicesModel";

// Update existing service
export async function PUT(request, context) {
  try {
    await connectDB();



    const url = new URL(request.url);
const parts = url.pathname.split("/");
const id = parts[parts.length - 1];

console.log("PUT received ID:", id);

    

    

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid service ID" },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { title, icon, description, slug } = body;

    if (!title?.trim() || !icon?.trim() || !slug?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Title, icon and slug are required",
        },
        { status: 400 }
      );
    }

    const duplicateSlug = await Service.findOne({
      slug: slug.trim(),
      _id: { $ne: id },
    });

    if (duplicateSlug) {
      return NextResponse.json(
        {
          success: false,
          message: "This slug is already in use",
        },
        { status: 409 }
      );
    }

    const service = await Service.findByIdAndUpdate(
      id,
      {
        title: title.trim(),
        icon: icon.trim(),
        description: description?.trim() || "",
        slug: slug.trim(),
      },
      { new: true, runValidators: true }
    );

    if (!service) {
      return NextResponse.json(
        { success: false, message: "Service not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Service updated successfully",
      service,
    });
  } catch (error) {
    console.error("Update Service Error:", error);

    return NextResponse.json(
      { success: false, message: "Failed to update service" },
      { status: 500 }
    );
  }
}

// Delete existing service
export async function DELETE(request, context) {
  try {
    await connectDB();

    const url = new URL(request.url);
const parts = url.pathname.split("/");
const id = parts[parts.length - 1];

console.log("DELETE received ID:", id);

    

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid service ID" },
        { status: 400 }
      );
    }

    const service = await Service.findByIdAndDelete(id);

    if (!service) {
      return NextResponse.json(
        { success: false, message: "Service not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Service deleted successfully",
    });
  } catch (error) {
    console.error("Delete Service Error:", error);

    return NextResponse.json(
      { success: false, message: "Failed to delete service" },
      { status: 500 }
    );
  }
}

