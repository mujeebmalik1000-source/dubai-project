import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import Contact from "../../models/Contact";

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();

    const {
      name,
      phone,
      email,
      service,
      propertyType,
      location,
      description,
      contactMethod,
      urgency,
    } = body;

    if (!name || !phone || !email) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, phone and email are required",
        },
        { status: 400 }
      );
    }



    



    const enquiry = await Contact.create({
      name,
      phone,
      email,
      service,
      propertyType,
      location,
      description,
      contactMethod,
      urgency,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your request has been submitted successfully",
        enquiry,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact POST Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit request",
      },
      { status: 500 }
    );
  }
}



// Get all contact enquiries for Admin
export async function GET() {
  try {
    await connectDB();

    const enquiries = await Contact.find({})
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({
      success: true,
      enquiries,
    });
  } catch (error) {
    console.error("Contact GET Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch enquiries",
      },
      { status: 500 }
    );
  }
}
