"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const partners = [
  { name: "DENON", type: "AV Receivers" },
  { name: "FYNE AUDIO", type: "Point Source Audio" },
  { name: "INTEGRA", type: "Custom Integration" },
  { name: "JVC", type: "4K Laser Projection" },
  { name: "KLIPSCH", type: "High-Efficiency Sound" },
  { name: "MARANTZ", type: "Musical Fidelity" },
  { name: "ONKYO", type: "THX Certified Audio" },
  { name: "OPTOMA", type: "Cinema Projection" },
  { name: "PIONEER ELITE", type: "Studio Grade AV" },
  { name: "POLK AUDIO", type: "American HiFi" },
  { name: "PURE ACOUSTICS", type: "Cinematic Systems" },
  { name: "WIIM", type: "Smart Streaming" },
  { name: "JAMO", type: "Danish Design" },
  { name: "MONITOR AUDIO", type: "Danish Design" },
  { name: "ELAC", type: "German Engineering" }
];

const Partners = () => {
  return (
    <section id='partners' className="bg-[#050509] py-24 border-y border-white/5 relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15rem] font-black text-white/[0.01] select-none pointer-events-none tracking-tighter uppercase whitespace-nowrap">
        Authorized Enterprise Partner
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-5"
          >
            <div className="p-4 rounded-2xl bg-[#8B0000]/5 border border-[#8B0000]/10">
              <ShieldCheck className="text-[#8B0000] w-6 h-6" />
            </div>
            <div>
              <h2 className="text-white font-black text-2xl tracking-tighter uppercase">Brands We Deal With</h2>
              <p className=" hidden text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold">Genuine Hardware • Direct Warranty</p>
            </div>
          </motion.div>

          <div className="flex gap-12">
             <div className="flex flex-col items-end">
                <span className="text-white text-3xl font-black tracking-tighter leading-none">14+</span>
                <span className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-bold mt-2 text-right">Global Brands</span>
             </div>
             <div className="w-px h-12 bg-white/10" />
             <div className="flex flex-col items-start">
                <span className="text-[#8B0000] text-3xl font-black tracking-tighter leading-none">ESTD</span>
                <span className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-bold mt-2">JAN 2025</span>
             </div>
          </div>
        </div>

        {/* Typographic Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-px bg-white/5 border border-white/5 rounded-[2.5rem] overflow-hidden">
          {partners.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-[#050509] h-48 flex flex-col items-center justify-center p-6 transition-all duration-700 hover:bg-white/[0.03]"
            >
              {/* Text-Based Logo Placeholder */}
              <div className="relative">
                <span className="text-xl md:text-2xl font-black text-white/20 group-hover:text-white transition-all duration-700 tracking-[-0.05em] uppercase pointer-events-none block text-center">
                  {brand.name}
                </span>
                {/* Visual Underline Accent */}
                <motion.div 
                  className="h-[2px] w-0 bg-[#8B0000] mx-auto mt-1 group-hover:w-full transition-all duration-700"
                />
              </div>
              
              {/* Type Label */}
              <div className="absolute bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                <span className="text-[8px] font-black uppercase tracking-[0.5em] text-[#8B0000] whitespace-nowrap">
                  {brand.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <div className="h-px w-20 bg-white/10" />
          <p className="text-center text-[10px] uppercase tracking-[0.5em] text-white/20 font-bold max-w-2xl leading-loose">
            Curating the world's finest acoustic technology for elite residences
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;