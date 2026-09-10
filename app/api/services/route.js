import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import Service from "../../models/ServicesModel";

// GET - सभी active services
export async function GET() {
  try {
    await connectDB();

    const services = await Service.find({ isActive: true }).sort({
      createdAt: 1,
    });

    return NextResponse.json({
      success: true,
      services,
    });
  } catch (error) {
    console.error("Services GET Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch services",
      },
      { status: 500 }
    );
  }
}

// POST - नई service add करने के लिए
export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();

    const { title, icon, description, slug } = body;

    if (!title || !icon || !slug) {
      return NextResponse.json(
        {
          success: false,
          message: "Title, icon and slug are required",
        },
        { status: 400 }
      );
    }

    const service = await Service.create({
      title,
      icon,
      description,
      slug,
      isActive: true,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Service created successfully",
        service,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Services POST Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create service",
      },
      { status: 500 }
    );
  }
}