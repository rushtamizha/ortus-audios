import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  thumbnail: { type: String }, // URL for the card image
  featuredImage: { type: String }, // URL for the main post header
  excerpt: { type: String }, // Short summary for SEO/Cards
  content: { type: String, required: true }, // The HTML from TipTap
  category: { type: String, default: "Reviews" },
  author: { type: String, default: "Eswaran" },
  readingTime: { type: String },
  published: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);