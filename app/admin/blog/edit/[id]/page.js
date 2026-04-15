"use client";

import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import { useRouter, useParams } from "next/navigation";
import { Save, Loader2, ArrowLeft, ImageIcon, LinkIcon, X, UploadCloud, Globe } from "lucide-react";
import Link from "next/link";

// Dynamic import for TipTap to prevent Hydration errors
const RichTextEditor = dynamic(() => import('@/components/RichTextEditor'), { ssr: false });

export default function EditPost() {
  const router = useRouter();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingThumb, setUploadingThumb] = useState(false);
  const [post, setPost] = useState(null);

  // Load existing data
  useEffect(() => {
    const loadPost = async () => {
      try {
        const res = await fetch(`/api/posts/${id}`);
        if (res.ok) {
          const data = await res.json();
          setPost(data);
        }
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };
    if (id) loadPost();
  }, [id]);

  // Handle Thumbnail Update via Cloudinary
  const handleThumbnailUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadingThumb(true);
    const formData = new FormData();
    formData.append("file", file);
    // Replace with your 'Unsigned' preset name
    formData.append("upload_preset", "your_unsigned_preset"); 

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        { method: "POST", body: formData }
      );
      const data = await res.json();

      if (data.secure_url) {
        const optimizedUrl = data.secure_url.replace("/upload/", "/upload/w_400,h_400,c_fill,g_auto/");
        setPost({ ...post, thumbnail: optimizedUrl });
      }
    } catch (err) {
      alert("Thumbnail upload failed.");
    } finally {
      setUploadingThumb(false);
    }
  };

  const handleUpdate = async () => {
    setSaving(true);
    try {
      const res = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      });
      if (res.ok) {
        router.push("/admin/dashboard");
        router.refresh();
      }
    } catch (err) {
      alert("Update failed.");
    } finally {
      setSaving(false);
    }
  };

  if (loading || !post) return (
    <div className="min-h-screen bg-[#020205] flex items-center justify-center">
      <Loader2 className="animate-spin text-[#8B0000]" size={40} />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#020205] text-white pt-24 pb-20 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div className="flex items-center gap-6">
             <Link href="/admin/dashboard" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all">
                <ArrowLeft size={20} />
             </Link>
             <div>
                <h1 className="text-4xl font-black uppercase tracking-tighter italic">EDIT <span className="text-[#8B0000]">POST</span></h1>
                <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold">Modifying: {post.slug}</p>
             </div>
          </div>
          
          <button 
            onClick={handleUpdate}
            disabled={saving}
            className="flex items-center gap-3 bg-[#8B0000] text-white px-10 py-4 rounded-2xl font-black text-sm hover:bg-red-700 transition-all disabled:opacity-50 shadow-xl shadow-red-900/20"
          >
            {saving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
            SAVE CHANGES
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Editor Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/5 border border-white/10 p-2 rounded-3xl focus-within:border-[#8B0000] transition-all">
              <input 
                className="w-full bg-transparent p-6 text-3xl font-bold outline-none"
                value={post.title}
                onChange={(e) => setPost({...post, title: e.target.value})}
              />
            </div>

            <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02]">
              {/* Ensure editor has content before loading */}
              <RichTextEditor 
                content={post.content} 
                onChange={(html) => setPost({...post, content: html})} 
              />
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-6">
            
            {/* Thumbnail Logic */}
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
                        <span className="text-[10px] font-bold text-white/40 uppercase text-center px-4">Upload New Thumbnail</span>
                      </>
                    )}
                    <input type="file" className="hidden" accept="image/*" onChange={handleThumbnailUpload} />
                  </label>
                )}
              </div>
            </div>

            {/* SEO Section */}
            <div className="bg-white/[0.03] border border-white/10 p-8 rounded-[2.5rem] space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-[#8B0000] flex items-center gap-2">
                <LinkIcon size={14}/> Metadata
              </h3>
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-white/20 uppercase">Slug URL</span>
                  <input value={post.slug} onChange={(e) => setPost({...post, slug: e.target.value})} className="w-full bg-black/40 border border-white/5 p-3 rounded-xl text-xs outline-none" />
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-white/20 uppercase">Excerpt</span>
                  <textarea rows={4} value={post.excerpt} onChange={(e) => setPost({...post, excerpt: e.target.value})} className="w-full bg-black/40 border border-white/5 p-3 rounded-xl text-xs outline-none resize-none" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}