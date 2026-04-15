import connectDB from '@/lib/mongodb';
import Blog from '@/models/Blog';
import Link from 'next/link';

export const dynamic = 'force-dynamic'; // Ensures SEO-fresh content

export default async function BlogListPage() {
  await connectDB();
  const posts = await Blog.find({ published: true }).sort({ createdAt: -1 });

  return (
    <main className="min-h-screen bg-[#020205] text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 border-l-4 border-[#8B0000] pl-8">
          <h1 className="text-6xl font-black uppercase tracking-tighter ">The <span className="text-[#8B0000]">Audio</span> Ledger</h1>
          <p className="text-white/40 mt-4 max-w-xl font-medium uppercase tracking-widest text-xs">
            Deep dives into enterprise-grade audio engineering and high-fidelity sound.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <Link key={post._id} href={`/blog/${post.slug}`} className="group relative bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-[#8B0000]/50 transition-all duration-500">
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={post.thumbnail || '/placeholder.jpg'} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#8B0000]">{post.category}</span>
                <h2 className="text-2xl font-bold mt-3 group-hover:text-[#8B0000] transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-white/40 text-sm mt-4 line-clamp-2 font-medium leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest">
                    {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </span>
                  <div className="w-8 h-[1px] bg-white/10 group-hover:w-12 group-hover:bg-[#8B0000] transition-all"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}