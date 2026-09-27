import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default:
        "Completed with premium workmanship, quality materials, and professional finishing.",
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },

    features: {
      type: [String],
      default: [],
    },

    duration: {
      type: String,
      default: "",
    },

    teamMembers: {
      type: String,
      default: "",
    },

    rating: {
      type: String,
      default: "★★★★★",
    },

    slug: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Gallery =
  mongoose.models.Gallery || mongoose.model("Gallery", GallerySchema);

export default Gallery;