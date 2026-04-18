"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Projector, 
  Speaker, 
  Layout, 
  Wrench, 
  ArrowUpRight 
} from 'lucide-react';

const services = [
  {
    title: "Home Theatre Systems",
    category: "Full Cinematic Setup",
    desc: "Bespoke design and integration of high-end audio-visual systems for residential spaces.",
    icon: <Layout className="w-6 h-6" />,
    image: "/Services/Subwoofer-placements.webp",
  },
  {
    title: "Projector Solutions",
    category: "4K projectors",
    desc: "Authorized dealer and calibration experts for EPSON and BenQ high-performance projectors.",
    icon: <Projector className="w-6 h-6" />,
    image: "/Services/Welcome-to-a-new-era-in-Home-Cinema.avif",
  },
  {
    title: "Premium Audio",
    category: "Klipsh & Hi-Fi Systems",
    desc: "Wholesale and retail of world-class audio speakers and multi-room sound engineering.",
    icon: <Speaker className="w-6 h-6" />,
    image: "/Services/20240924_Getting_Started_with_Dolby_Atmos_Mixing_Choosing_Your_Speakers_1600x838_01.webp",
  },
  {
    title: "Professional Installation",
    category: "Expert Calibration",
    desc: "Acoustic treatment and technical installation services ensuring peak hardware performance.",
    icon: <Wrench className="w-6 h-6" />,
    image: "/Services/The-Ultimate-Guide-to-Acoustic-Treatment-for-Churches-_-Primacoustic-Panels-11-13-screenshot-2400x1350-1.png",
  }
];

const Services = () => {
  return (
    <section id='services' className="bg-[#020205] py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-black uppercase tracking-[0.5em] text-[#8B0000]"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter mt-4"
          >
            Precision <span className="text-white/60 ">Sound & Vision.</span>
          </motion.h2>
        </div>

        {/* Services Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[450px] bg-[#050509] overflow-hidden flex flex-col justify-end p-8 md:p-12 cursor-pointer"
            >
              {/* Background Image - Appears on Hover */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
              {/* Content Overlay */}
              <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-4">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white">
                    {service.icon}
                  </div>
                  
                </div>

                <span className="text-[10px] font-bold uppercase tracking-widest text-[#9B870C] mb-2 block">
                  {service.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {service.desc}
                </p>
              </div>

              {/* Bottom Gradient for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;