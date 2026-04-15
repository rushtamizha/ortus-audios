"use client";

import { useState } from "react";
import dynamic from 'next/dynamic';
import { useRouter } from "next/navigation";
import { Save, Globe, ImageIcon, LinkIcon, Loader2, ArrowLeft, X, UploadCloud } from "lucide-react";
import Link from "next/link";

const RichTextEditor = dynamic(() => import('@/components/RichTextEditor'), { ssr: false });

export default function CreatePost() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploadingThumb, setUploadingThumb] = useState(false);
  
  const [post, setPost] = useState({
    title: "",
    slug: "",
    excerpt: "",
    thumbnail: "",
    featuredImage: "",
    content: "",
    category: "Reviews",
  });

  // Cloudinary Upload Logic for Thumbnail
  const handleThumbnailUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadingThumb(true);
    const formData = new FormData();
    formData.append("file", file);
    // Replace with your EXACT 'Unsigned' preset name from Cloudinary
    formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET); 

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        { method: "POST", body: formData }
      );
      const data = await res.json();

      if (data.secure_url) {
        // Optimized 400x400 crop for blog cards
        const optimizedUrl = data.secure_url.replace("/upload/", "/upload/w_400,h_400,c_fill,g_auto/");
        setPost({ ...post, thumbnail: optimizedUrl });
      }
    } catch (err) {
      alert("Thumbnail upload failed. Check Cloudinary preset.");
    } finally {
      setUploadingThumb(false);
    }
  };

const handleTitleChange = (e) => {
  const val = e.target.value;
  
  // This Regex is the industry standard for "Clean" URLs
  const cleanSlug = val
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')    // Remove all non-word chars (DELETES THE DOT)
    .replace(/[\s_-]+/g, '-')     // Replace spaces and underscores with a hyphen
    .replace(/^-+|-+$/g, '');     // Remove leading/trailing hyphens

  setPost({ ...post, title: val, slug: cleanSlug });
};

  const handlePublish = async () => {
    if (!post.title || !post.content) return alert("Title and Content are required.");
    setLoading(true);
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      });
      if (res.ok) {
        router.push("/admin/dashboard");
        router.refresh();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020205] text-white pt-24 pb-20 px-6 sm:px-10 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header & Actions */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div className="flex items-center gap-6">
             <Link href="/admin/dashboard" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all">
                <ArrowLeft size={20} />
             </Link>
             <div>
                <h1 className="text-4xl font-black uppercase tracking-tighter italic">NEW <span className="text-[#8B0000]">POST</span></h1>
                <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold">Admin Panel • Ortus Audios</p>
             </div>
          </div>
          
          <button 
            onClick={handlePublish}
            disabled={loading}
            className="flex items-center gap-3 bg-[#8B0000] text-white px-10 py-4 rounded-2xl font-black text-sm hover:bg-red-700 transition-all disabled:opacity-50"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : <Globe size={20} />}
            PUBLISH LIVE
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            <input 
              type="text"
              placeholder="Post Title..."
              value={post.title}
              onChange={handleTitleChange}
              className="w-full bg-white/5 border border-white/10 p-8 rounded-3xl text-3xl font-bold outline-none focus:border-[#8B0000] transition-colors shadow-inner"
            />

            <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02]">
              <RichTextEditor 
                content={post.content} 
                onChange={(html) => setPost({ ...post, content: html })} 
              />
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-6">
            
            {/* Thumbnail Upload Card */}
            <div className="bg-white/[0.03] border border-white/10 p-8 rounded-[2.5rem] space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-[#8B0000] flex items-center gap-2">
                <ImageIcon size={14}/> Thumbnail
              </h3>
              
              <div className="relative group">
                {post.thumbnail ? (
                  <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10">
                    <img src={post.thumbnail} className="w-full h-full object-cover" alt="Preview" />
                    <button onClick={() => setPost({...post, thumbnail: ""})} className="absolute top-2 right-2 p-2 bg-black/60 rounded-full hover:bg-red-600">
                      <X size={14} />
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center aspect-square rounded-2xl border-2 border-dashed border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#8B0000] transition-all cursor-pointer">
                    {uploadingThumb ? <Loader2 className="animate-spin text-[#8B0000]" /> : (
                      <>
                        <UploadCloud className="text-white/20 mb-2" size={32} />
                        <span className="text-[10px] font-bold text-white/40 uppercase">Upload Image</span>
                      </>
                    )}
                    <input type="file" className="hidden" accept="image/*" onChange={handleThumbnailUpload} />
                  </label>
                )}
              </div>
            </div>

            {/* SEO Configuration Card */}
            <div className="bg-white/[0.03] border border-white/10 p-8 rounded-[2.5rem] space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-[#8B0000] flex items-center gap-2">
                <LinkIcon size={14}/> SEO Configuration
              </h3>
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-white/20 uppercase tracking-tighter">URL Slug</span>
                  <input value={post.slug} onChange={(e) => setPost({...post, slug: e.target.value})} className="w-full bg-black/40 border border-white/5 p-3 rounded-xl text-xs outline-none" />
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-white/20 uppercase tracking-tighter">Short Summary</span>
                  <textarea rows={4} value={post.excerpt} onChange={(e) => setPost({...post, excerpt: e.target.value})} className="w-full bg-black/40 border border-white/5 p-3 rounded-xl text-xs outline-none resize-none" placeholder="Enter meta description..." />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}