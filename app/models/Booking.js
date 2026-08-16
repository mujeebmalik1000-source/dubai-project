import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    company: {
      type: String,
      default: "",
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    service: {
      type: String,
      default: "",
    },

    property: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      default: "",
    },

    budget: {
      type: String,
      default: "",
    },

    date: {
      type: String,
      default: "",
    },

    time: {
      type: String,
      default: "",
    },

    timeline: {
      type: String,
      default: "",
    },

    details: {
      type: String,
      default: "",
    },

    attachment: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Booking =
  mongoose.models.Booking ||
  mongoose.model("Booking", BookingSchema);

export default Booking;