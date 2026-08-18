
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Booking from "@/app/models/Booking";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // 1. JSON receive
    const body = await request.json();

    // 2. MongoDB connect
    await connectDB();

    // 3. Booking MongoDB me save
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
      attachment: body.attachment || "",
    });

    // ==========================================
    // 4. ADMIN EMAIL
    // ==========================================

    try {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: [process.env.ADMIN_EMAIL],

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

            <p><strong>Full Name:</strong> ${body.fullName}</p>
            <p><strong>Company:</strong> ${body.company || "N/A"}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Phone:</strong> ${body.phone}</p>

            <h3>Project Information</h3>

            <p><strong>Service:</strong> ${body.service}</p>
            <p><strong>Property Type:</strong> ${body.property}</p>
            <p><strong>Location:</strong> ${body.location}</p>
            <p><strong>Budget:</strong> ${body.budget || "N/A"}</p>
            <p><strong>Preferred Date:</strong> ${body.date}</p>
            <p><strong>Preferred Time:</strong> ${body.time}</p>
            <p><strong>Timeline:</strong> ${body.timeline}</p>

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
              This notification was sent automatically from the booking system.
            </p>

          </div>
        `,
      });

      console.log("Admin notification email sent successfully");
    } catch (emailError) {
      console.error("Admin Email Error:", emailError);
    }

    // ==========================================
    // 5. CUSTOMER EMAIL
    // ==========================================

    try {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: [body.email],

        subject: "Booking Request Received - Thank You!",

        html: `
          <div style="font-family: Arial, sans-serif; max-width: 700px; margin: auto;">

            <h2 style="color: #184896;">
              Thank You, ${body.fullName}!
            </h2>

            <p>
              We have successfully received your booking request.
            </p>

            <p>
              Our team will review your request and contact you shortly.
            </p>

            <hr />

            <h3>Your Booking Details</h3>

            <p><strong>Service:</strong> ${body.service}</p>
            <p><strong>Property Type:</strong> ${body.property}</p>
            <p><strong>Location:</strong> ${body.location}</p>
            <p><strong>Budget:</strong> ${body.budget || "N/A"}</p>
            <p><strong>Preferred Date:</strong> ${body.date}</p>
            <p><strong>Preferred Time:</strong> ${body.time}</p>
            <p><strong>Timeline:</strong> ${body.timeline}</p>

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
                      View Uploaded File
                    </a>
                  </p>
                `
                : ""
            }

            <hr />

            <p>
              Thank you for choosing us.
            </p>

            <p style="color: #666;">
              This is an automated confirmation email. Please do not reply
              if you do not recognize this request.
            </p>

          </div>
        `,
      });

      console.log("Customer confirmation email sent successfully");
    } catch (emailError) {
      console.error("Customer Email Error:", emailError);
    }

    // ==========================================
    // 6. SUCCESS RESPONSE
    // ==========================================

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


// ==========================================
// GET ALL BOOKINGS
// ==========================================

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

