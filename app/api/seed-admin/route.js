import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "../../../lib/mongodb";
import Admin from "../../models/Admin";

export async function GET() {
  try {
    await connectDB();

    const existingAdmin = await Admin.findOne({
      email: "admin@protechdubai.com",
    });

    if (existingAdmin) {
      return NextResponse.json({
        success: true,
        message: "Admin already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(
      "Admin@12345",
      12
    );

    const admin = await Admin.create({
      name: "ProTech Admin",
      email: "admin@protechdubai.com",
      password: hashedPassword,
    });

    return NextResponse.json({
      success: true,
      message: "Admin created successfully",
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
      },
    });
  } catch (error) {
    console.error("Seed Admin Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create admin",
      },
      { status: 500 }
    );
  }
}