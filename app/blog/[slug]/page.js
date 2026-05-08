import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { notFound } from "next/navigation";
import { Calendar, User, Clock, ChevronLeft, ListIcon } from "lucide-react";
import Link from "next/link";

export default async function BlogPostPage({ params }) {
  await connectDB();
  const { slug } = await params;
  const post = await Blog.findOne({ slug });

  if (!post) notFound();

  // Helper to extract and inject IDs into headings for anchor links
  const headings = [];
  const processedContent = post.content.replace(
    /<h2>(.*?)<\/h2>/g,
    (match, title) => {
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      headings.push({ title, id });
      return `<h2 id="${id}">${title}</h2>`;
    },
  );

  const heroImage =
    post.featuredImage && post.featuredImage.trim() !== ""
      ? post.featuredImage
      : post.thumbnail && post.thumbnail.trim() !== ""
        ? post.thumbnail
        : null;

  return (
    <article className="min-h-screen bg-[#020205] text-white">
      {/* Hero Header */}
      <div dangerouslySetInnerHTML={{ __html: blogContent }} />
      <div className="relative h-[60vh] w-full bg-[#08080c]">
        {heroImage && (
          <img
            src={heroImage}
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            alt={post.title}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-20 z-10">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/blog"
              className="group flex items-center gap-2 text-[#8B0000] uppercase text-[10px] font-black tracking-widest mb-8"
            >
              <ChevronLeft
                size={14}
                className="group-hover:-translate-x-1 transition-transform"
              />{" "}
              Back to Ledger
            </Link>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-black leading-[1] md:leading-[0.9] tracking-tighter uppercase  break-words">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-4 gap-16">
        {/* SIDEBAR: Table of Contents */}
        <aside className="lg:col-span-1">
          <div className="sticky top-32 space-y-8">
            <div className="bg-white/[0.03] border border-white/5 p-8 rounded-[2rem]">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#8B0000] mb-6 flex items-center gap-2">
                <ListIcon size={14} /> Contents
              </h3>
              <ul className="space-y-4">
                {headings.map((h, i) => (
                  <li key={i}>
                    <a
                      href={`#${h.id}`}
                      className="text-xs font-bold text-white/40 hover:text-[#8B0000] transition-colors uppercase tracking-tight block leading-relaxed"
                    >
                      {h.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <div className="lg:col-span-3">
          <div className="flex items-center gap-8 mb-12 text-white/20 uppercase text-[10px] font-black tracking-widest">
            <span className="flex items-center gap-2">
              <User size={12} className="text-[#8B0000]" />{" "}
              {post.author || "Staff"}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={12} className="text-[#8B0000]" />{" "}
              {new Date(post.createdAt).toLocaleDateString()}
            </span>
          </div>

          <div
            className="prose prose-invert prose-red max-w-none 
            prose-headings:uppercase prose-headings:font-black prose-headings:tracking-tighter prose-headings:scroll-mt-32
            prose-h2:text-3xl prose-h2:text-white prose-h2:border-b prose-h2:border-white/5 prose-h2:pb-4 prose-h2:mt-16
            prose-p:text-white/60 prose-p:text-lg prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />
        </div>
      </div>
    </article>
  );
}
