import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import Gallery from "../../models/GalleryModel";

const projects = [
  {
    title: "Luxury Villa AC Installation",
    category: "AC",
    image: "/images/Acproject7.png",
    description:
      "Professional AC installation completed for a luxury villa with premium equipment and expert finishing.",
    slug: "luxury-villa-ac-installation",
    isFeatured: false,
    features: ["AC Installation", "Premium Equipment", "Professional Finishing"],
    duration: "3 Days",
    teamMembers: "5",
    rating: "★★★★★",
    isActive: true,
  },
  {
    title: "Modern Kitchen Renovation",
    category: "Renovation",
    image: "/images/Ranoproject8.png",
    description:
      "Complete modern kitchen renovation with premium materials, elegant finishing and functional design.",
    slug: "modern-kitchen-renovation",
    isFeatured: false,
    features: ["Kitchen Renovation", "Premium Materials", "Modern Design"],
    duration: "14 Days",
    teamMembers: "8",
    rating: "★★★★★",
    isActive: true,
  },
  {
    title: "Luxury Bathroom Upgrade",
    category: "Plumbing",
    image: "/images/Plumproject9.png",
    description:
      "Luxury bathroom upgrade including professional plumbing work, modern fixtures and premium finishing.",
    slug: "luxury-bathroom-upgrade",
    isFeatured: false,
    features: ["Plumbing", "Modern Fixtures", "Premium Finishing"],
    duration: "7 Days",
    teamMembers: "4",
    rating: "★★★★★",
    isActive: true,
  },
  {
    title: "Smart Electrical Installation",
    category: "Electrical",
    image: "/images/Elecproject10.png",
    description:
      "Professional electrical installation with smart lighting systems and safe modern electrical solutions.",
    slug: "smart-electrical-installation",
    isFeatured: false,
    features: ["Electrical Installation", "Smart Lighting", "Safety Systems"],
    duration: "5 Days",
    teamMembers: "5",
    rating: "★★★★★",
    isActive: true,
  },
  {
    title: "Premium Wall Painting",
    category: "Painting",
    image: "/images/Panproject11.png",
    description:
      "Premium wall painting project completed with quality paints, professional preparation and smooth finishing.",
    slug: "premium-wall-painting",
    isFeatured: false,
    features: ["Wall Painting", "Premium Paint", "Smooth Finishing"],
    duration: "4 Days",
    teamMembers: "6",
    rating: "★★★★★",
    isActive: true,
  },
  {
    title: "Complete Home Maintenance",
    category: "Maintenance",
    image: "/images/Mainproject12.png",
    description:
      "Complete home maintenance covering multiple services with professional workmanship and quality results.",
    slug: "complete-home-maintenance",
    isFeatured: false,
    features: ["Home Maintenance", "Multiple Services", "Quality Workmanship"],
    duration: "10 Days",
    teamMembers: "10",
    rating: "★★★★★",
    isActive: true,
  },
];

export async function GET() {
  try {
    await connectDB();

    let inserted = 0;

    for (const project of projects) {
      const exists = await Gallery.findOne({ slug: project.slug });

      if (!exists) {
        await Gallery.create(project);
        inserted++;
      }
    }

    const allProjects = await Gallery.find().sort({ createdAt: 1 });

    return NextResponse.json({
      success: true,
      message: `${inserted} gallery projects added successfully`,
      projects: allProjects,
    });
  } catch (error) {
    console.error("Seed Gallery Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}