import React from "react";
import { 
  ShieldCheck, 
  Award, 
  Users, 
  Zap, 
  History, 
  ArrowRight,
  MonitorCheck
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About Ortus Audios | Precision Sound Engineering",
  description: "Learn about Ortus Audios, Bangalore's premier provider of professional home theater and enterprise audio solutions.",
};

export default function AboutPage() {
  const coreValues = [
    {
      title: "Precision Engineering",
      desc: "Every acoustic environment is unique. We calibrate sound based on room physics, not just presets.",
      icon: <Zap className="text-[#8B0000]" size={24} />,
    },
    {
      title: "Certified Trust",
      desc: "Authorized partner for global audio brands, ensuring genuine hardware and full warranty support.",
      icon: <ShieldCheck className="text-[#8B0000]" size={24} />,
    },
    {
      title: "User-Centric Design",
      desc: "We build systems that are powerful yet simple enough for every family member to operate.",
      icon: <Users className="text-[#8B0000]" size={24} />,
    },
  ];

  return (
    <main className="min-h-screen bg-[#020205] text-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B0000]/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#8B0000] mb-6 block">
            Our Legacy
          </span>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter  leading-[0.9] mb-10">
            Defining the <br />
            <span className="text-[#8B0000]">Standard of Sound</span>
          </h1>
          <p className="text-white/40 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
            Based in Bangalore, Ortus Audios was founded on a single principle: 
            Acoustic perfection is not an accident—it’s an engineered experience.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 group">
             <img 
               src="https://lirp.cdn-website.com/91678c75/dms3rep/multi/opt/13-7c9d4407-1920w.jpg" // Add a high-res image of a home theater or speaker
               alt="Home Theater Setup" 
               className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#020205] to-transparent" />
          </div>
          
          <div className="space-y-8">
            <h2 className="text-4xl font-black uppercase tracking-tighter ">
              Beyond Just <span className="text-[#8B0000]">Hardware</span>
            </h2>
            <p className="text-white/60 leading-relaxed text-lg">
              We don't just sell speakers; we curate environments. Whether it’s an 
              enterprise boardroom or a private Dolby Atmos cinema, our team 
              blends aesthetic interior design with mathematical acoustic precision.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
               <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-3xl font-black text-[#8B0000]">150+</p>
                  <p className="text-[10px] uppercase font-bold text-white/40 tracking-widest mt-2">Projects Completed</p>
               </div>
               <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-3xl font-black text-[#8B0000]">10+</p>
                  <p className="text-[10px] uppercase font-bold text-white/40 tracking-widest mt-2">Global Partners</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-4">
              Our Core Values
            </h2>
            <p className="text-3xl font-bold uppercase  tracking-tight">The DNA of Ortus Audios</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-[#8B0000]/40 transition-all duration-500 group">
                <div className="mb-8 p-4 bg-white/5 w-fit rounded-2xl group-hover:bg-[#8B0000]/10 transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{value.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#8B0000] to-red-950 p-12 md:p-20 rounded-[3rem] text-center shadow-2xl shadow-red-900/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none" />
          <h2 className="text-4xl md:text-6xl font-black uppercase  tracking-tighter mb-8 relative z-10">
            Ready to elevate <br /> your auditory space?
          </h2>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 bg-white text-black px-12 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-all duration-500 relative z-10 shadow-xl"
          >
            Start a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}