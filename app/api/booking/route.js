import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Booking from "@/app/models/Booking";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // JSON receive
    const body = await request.json();

    // MongoDB connect
    await connectDB();

    // Booking save
    const booking = await Booking.create({
      fullName: body.fullName,
      company: body.company,
      email: body.email,
      phone: body.phone,
      service: body.service,
      property: body.property,
      location: body.location,
      budget: body.budget,
      date: body.date,
      time: body.time,
      timeline: body.timeline,
      details: body.details,

      // Cloudinary URL
      attachment: body.attachment || "",
    });

    // =========================
    // EMAIL NOTIFICATION
    // =========================

    try {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: process.env.ADMIN_EMAIL,

        subject: `New Booking Request - ${body.fullName}`,

        html: `
          <div style="font-family: Arial, sans-serif; max-width: 700px; margin: auto;">

            <h2 style="color: #184896;">
              New Booking Request
            </h2>

            <p>
              A new booking request has been submitted on your website.
            </p>

            <hr />

            <h3>Customer Information</h3>

            <p>
              <strong>Full Name:</strong> ${body.fullName}
            </p>

            <p>
              <strong>Company:</strong> ${body.company || "N/A"}
            </p>

            <p>
              <strong>Email:</strong> ${body.email}
            </p>

            <p>
              <strong>Phone:</strong> ${body.phone}
            </p>

            <h3>Project Information</h3>

            <p>
              <strong>Service:</strong> ${body.service}
            </p>

            <p>
              <strong>Property Type:</strong> ${body.property}
            </p>

            <p>
              <strong>Location:</strong> ${body.location}
            </p>

            <p>
              <strong>Budget:</strong> ${body.budget || "N/A"}
            </p>

            <p>
              <strong>Preferred Date:</strong> ${body.date}
            </p>

            <p>
              <strong>Preferred Time:</strong> ${body.time}
            </p>

            <p>
              <strong>Timeline:</strong> ${body.timeline}
            </p>

            <h3>Project Details</h3>

            <p>
              ${body.details || "No details provided"}
            </p>

            ${
              body.attachment
                ? `
                  <p>
                    <strong>Attachment:</strong>
                    <a href="${body.attachment}" target="_blank">
                      View Attachment
                    </a>
                  </p>
                `
                : `
                  <p>
                    <strong>Attachment:</strong> No file attached
                  </p>
                `
            }

            <hr />

            <p style="color: #666;">
              This notification was generated automatically from your booking form.
            </p>

          </div>
        `,
      });

      console.log("Booking notification email sent successfully");
    } catch (emailError) {
      // Email fail hone par booking fail nahi hogi
      console.error("Email Error:", emailError);
    }

    // Success response
    return NextResponse.json(
      {
        success: true,
        message: "Booking submitted successfully!",
        booking,
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Booking Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}


// =========================
// GET ALL BOOKINGS
// =========================

export async function GET() {
  try {
    await connectDB();

    const bookings = await Booking.find()
      .sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      bookings,
    });

  } catch (error) {
    console.error("Get Bookings Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch bookings",
      },
      { status: 500 }
    );
  }
}