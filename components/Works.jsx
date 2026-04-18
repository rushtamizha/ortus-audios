"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectCoverflow, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Maximize2 } from 'lucide-react';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const projects = [
  {
    title: "The Obsidian Cinema",
    location: "Indiranagar, Bangalore",
    tags: ["9.2.4 Dolby Atmos", "4K Laser"],
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1600",
    accent: "#8B0000"
  },
  {
    title: "Sonic Penthouse",
    location: "Whitefield, Bangalore",
    tags: ["Bose Built-in", "Multi-room"],
    image: "https://images.unsplash.com/photo-1545016803-a63d0007179b?q=80&w=1600",
    accent: "#00008B"
  },
  {
    title: "Aura Corporate Suite",
    location: "MG Road, Bangalore",
    tags: ["Epson Pro", "Conference Audio"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600",
    accent: "#9B870C"
  },
  {
    title: "Zen Audio Lounge",
    location: "Jayanagar, Bangalore",
    tags: ["Hi-Res Audio", "Acoustic Walls"],
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1600",
    accent: "#006400"
  }
];

const Works = () => {
  return (
    <section className="bg-[#020205] py-24 relative overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[#8B0000]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#8B0000] mb-4 block">
            Signature Showcase
          </span>
          <h2 className="text-4xl md:text-7xl font-extrabold text-white tracking-tighter leading-none">
            Recent <span className="text-white/20 ">Transformations.</span>
          </h2>
        </div>
        <p className="text-white/50 text-xs md:text-sm max-w-xs md:text-right font-medium tracking-wide">
          "Each project is a unique symphony of high-end hardware and precision calibration."
        </p>
      </div>

      <div className="w-full px-4 overflow-visible">
        <Swiper
          modules={[Autoplay, Navigation, EffectCoverflow, Pagination]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          speed={1000}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          className="portfolio-swiper !overflow-visible py-10"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title} className="max-w-[350px] md:max-w-[750px] group">
              <div className="relative h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 shadow-2xl transition-all duration-500 group-hover:border-white/30">
                {/* Image */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 md:p-14 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-black uppercase tracking-widest flex items-center gap-2">
                       <MapPin size={10} /> {project.location}
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-6 group-hover:mb-8 transition-all">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-8 opacity-0 group-hover:opacity-100 transition-all delay-100 translate-y-4 group-hover:translate-y-0">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-4 py-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/5 text-white/60 text-[9px] font-bold uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button 
                    className="w-fit flex items-center gap-3 px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-all bg-white text-black hover:scale-105 active:scale-95"
                  >
                    View Project <Maximize2 size={14} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .portfolio-swiper .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.2;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .portfolio-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 30px;
          border-radius: 4px;
          background: #8B0000 !important;
        }
        .swiper-slide {
          transition: all 0.5s ease;
          filter: blur(4px) brightness(0.4);
          transform: scale(0.85);
        }
        .swiper-slide-active {
          filter: blur(0) brightness(1);
          transform: scale(1);
        }
      `}</style>
    </section>
  );
};

export default Works;