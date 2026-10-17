
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";
import Booking from "@/app/models/Booking";
import { verifyAdminRequest } from "@/lib/adminAuth";

export async function PATCH(request, { params }) {
  try {
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
        { success: false, message: "Invalid booking ID." },
        { status: 400 }
      );
    }

    const body = await request.json();
    const allowedStatuses = ["New", "Contacted", "Completed"];

    if (!allowedStatuses.includes(body.status)) {
      return NextResponse.json(
        { success: false, message: "Invalid booking status." },
        { status: 400 }
      );
    }

    await connectDB();

    const booking = await Booking.findByIdAndUpdate(
      id,
      { $set: { status: body.status } },
      { new: true, runValidators: true }
    );

    if (!booking) {
      return NextResponse.json(
        { success: false, message: "Booking not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Booking status updated successfully.",
      booking,
    });
  } catch (error) {
    console.error("Update Booking Status Error:", error);

    return NextResponse.json(
      { success: false, message: "Failed to update booking status." },
      { status: 500 }
    );
  }
}
