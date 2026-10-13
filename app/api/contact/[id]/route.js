import { verifyAdminRequest } from "../../../../lib/adminAuth";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "../../../../lib/mongodb";
import Contact from "../../../models/Contact";

export async function PATCH(request, { params }) {
  try {
    await connectDB();

    const { id } = await params;
    const { status } = await request.json();

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid enquiry ID" },
        { status: 400 }
      );
    }

    if (!["new", "contacted", "completed"].includes(status)) {
      return NextResponse.json(
        { success: false, message: "Invalid status" },
        { status: 400 }
      );
    }

    const enquiry = await Contact.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!enquiry) {
      return NextResponse.json(
        { success: false, message: "Enquiry not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, enquiry });
  } catch (error) {
    console.error("Contact PATCH Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update status" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB();





    const admin = await verifyAdminRequest();

if (!admin) {
  return NextResponse.json(
    { success: false, message: "Unauthorized. Please login as admin." },
    { status: 401 }
  );
}





    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid enquiry ID" },
        { status: 400 }
      );
    }

    const enquiry = await Contact.findByIdAndDelete(id);

    if (!enquiry) {
      return NextResponse.json(
        { success: false, message: "Enquiry not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry deleted successfully",
    });
  } catch (error) {
    console.error("Contact DELETE Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete enquiry" },
      { status: 500 }
    );
  }
}
