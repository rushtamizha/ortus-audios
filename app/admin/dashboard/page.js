"use client";
import { useEffect, useState } from "react";
import { Plus, Edit3, Trash2, ExternalLink, Loader2 } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/posts", { 
        method: "GET",
        cache: 'no-store' 
      });
      
      if (!res.ok) throw new Error(`Error: ${res.status}`);

      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error("Dashboard Load Error:", err);
    } finally {
      setLoading(false);
    }
  };

  // UPDATED: Matches your dynamic API route /api/posts/[id]
  const handleDelete = async (id) => {
    if (confirm("Delete this masterpiece? This cannot be undone.")) {
      try {
        const res = await fetch(`/api/posts/${id}`, { 
          method: "DELETE" 
        });

        if (res.ok) {
          // Update state locally for instant feedback
          setBlogs(blogs.filter(blog => blog._id !== id));
        } else {
          const errorData = await res.json();
          alert(`Error: ${errorData.error || "Failed to delete"}`);
        }
      } catch (err) {
        console.error("Delete Error:", err);
        alert("An error occurred while deleting.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#020205] pt-32 px-10 pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl font-black text-white tracking-tighter uppercase">
              Content <span className="text-[#8B0000]">Vault</span>
            </h1>
            <p className="text-white/40 text-sm mt-2 font-medium ">
              Managing {blogs.length} high-performance articles
            </p>
          </div>
          <Link href="/admin/blog/new" className="bg-[#8B0000] text-white px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-red-700 transition-all shadow-xl shadow-red-900/20 active:scale-95">
            <Plus size={20} /> NEW ARTICLE
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-[#8B0000]" size={40} />
          </div>
        ) : (
          <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-xl shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead className="bg-white/5 text-[10px] uppercase tracking-[0.2em] text-white/30">
                <tr>
                  <th className="p-8 font-black">Article Details</th>
                  <th className="p-8 font-black">Published Date</th>
                  <th className="p-8 text-right font-black">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-sans">
                {blogs.length > 0 ? (
                  blogs.map((blog) => (
                    <tr key={blog._id} className="hover:bg-white/[0.01] transition-colors group">
                      <td className="p-8">
                        <div className="flex items-center gap-4">
                          {blog.thumbnail ? (
                            <img src={blog.thumbnail} className="w-14 h-14 rounded-xl object-cover border border-white/10" alt={blog.title} />
                          ) : (
                            <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-white/10 text-[8px] font-black uppercase">No Img</div>
                          )}
                          <div>
                            <p className="text-white font-bold text-lg group-hover:text-[#8B0000] transition-colors line-clamp-1">{blog.title}</p>
                            <p className="text-white/30 text-xs mt-1 font-mono tracking-tight">/{blog.slug}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-8 text-white/40 text-sm font-medium">
                        {new Date(blog.createdAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </td>
                      <td className="p-8 text-right">
                        <div className="flex justify-end items-center gap-3">
                          <Link href={`/blog/${blog.slug}`} target="_blank" className="p-2 bg-white/5 rounded-lg text-white/20 hover:text-white transition-all hover:scale-110">
                            <ExternalLink size={18}/>
                          </Link>
                          <Link href={`/admin/blog/edit/${blog._id}`} className="p-2 bg-white/5 rounded-lg text-white/20 hover:text-[#8B0000] transition-all hover:scale-110">
                            <Edit3 size={18}/>
                          </Link>
                          <button onClick={() => handleDelete(blog._id)} className="p-2 bg-white/5 rounded-lg text-white/20 hover:text-red-500 transition-all hover:scale-110">
                            <Trash2 size={18}/>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="p-20 text-center text-white/10 font-black uppercase tracking-widest">
                      The vault is currently empty
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}