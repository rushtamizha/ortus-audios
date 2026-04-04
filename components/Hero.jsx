"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Volume2 } from "lucide-react";

// Swiper CSS
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const colors = {
  darkRed: "#8B0000",
  darkBlue: "#00008B",
  bgDark: "#020205", // Deep Luxury Black
};

const slides = [
  {
    id: "01",
    title: "Cinematic Projection.",
    subtitle: "4K Laser Technology",
    desc: "Transform your living space with ultra-bright 4K projection designed for Bangalore's elite homes.",
    img: "/Banners/4k-projector-worth-it_1200x1200_crop_center.webp",
    accent: colors.darkRed,
  },
  {
    id: "02",
    title: "Master the Visuals.",
    subtitle: "Epson & BenQ Certified",
    desc: "Unrivaled brightness and color accuracy for high-end residential and corporate cinema rooms.",
    img: "/Banners/best-4k-projector.webp",
    accent: colors.darkBlue,
  },
  {
    id: "03",
    title: "The Private Cinema.",
    subtitle: "Custom Home Theatre",
    desc: "From acoustic treatment to 9.2.4 Dolby Atmos—we engineer the ultimate movie experience.",
    img: "/Banners/hometheatre.jpg",
    accent: colors.darkRed,
  },
  {
    id: "04",
    title: " Sound Suite.",
    subtitle: "Premium Audio Integration",
    desc: "Experience high-fidelity audio with the LG Sound Suite, calibrated for crystal clear precision.",
    img: "/Banners/LG_Sound_Suite.jpg",
    accent: colors.darkBlue,
  },
  {
    id: "05",
    title: "Wireless Perfection.",
    subtitle: "Multi-Room Audio",
    desc: "Seamless, high-resolution audio that follows you through every room of your modern home.",
    img: "/Banners/LG-Sound-Suite-H7-03.jpg",
    accent: colors.darkRed,
  },
];

export default function PremiumHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative h-screen w-full bg-[#020205] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1500}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            {/* Background Image with Ken Burns Effect */}
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: activeIndex === index ? 1 : 1.1 }}
              transition={{ duration: 8, ease: "linear" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            />
            {/* Dark Cinematic Vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#020205] via-[#020205]/60 to-transparent z-10" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Floating Content Overlay - Decoupled from Swiper to prevent "Messy Text" */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="max-w-7xl mx-auto px-8 h-full flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex} // This key resets the animation every slide change
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="max-w-3xl pointer-events-auto"
            >
              {/* Top Label */}
              <div className="flex items-center gap-4 mb-6">
                <span className="h-[1px] w-12 bg-white/30" />
                <span className="text-[11px] font-bold tracking-[0.5em] uppercase text-white/50">
                  {slides[activeIndex].subtitle}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-6xl md:text-[100px] font-extrabold text-white leading-[0.85] tracking-tighter mb-8">
                {slides[activeIndex].title.split(" ").map((word, i) => (
                  <span
                    key={i}
                    className={i === 1 ? "text-white/50" : "text-white"}
                  >
                    {word}{" "}
                  </span>
                ))}
              </h1>

              <p className="text-lg md:text-xl text-white/50 max-w-lg mb-12 font-light leading-relaxed">
                {slides[activeIndex].desc}
              </p>

              {/* Interaction Row */}
              {/* Interaction Row */}
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 pointer-events-auto">
                {/* Primary Button */}
                <button
                  onClick={() =>
                    window.open(
                      "https://wa.me/+919108333211?text=Hi%20Ortus%20Audios%2C%20I%20am%20interested%20in%20a%20Home%20Theatre%20consultation.",
                      "_blank",
                    )
                  }
                  style={{ backgroundColor: slides[activeIndex].accent }}
                  className="w-full sm:w-auto group relative px-10 py-5 rounded-full overflow-hidden transition-all active:scale-95 shadow-2xl shadow-red-900/20"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                    Get a Quote
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </button>

                {/* WhatsApp Ghost Button */}
                
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Decorative Bottom Elements */}
      <div className="absolute bottom-12 left-8 z-30 flex items-center gap-10">
        <div className="flex flex-col">
          <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] mb-2 font-bold">
            Location
          </span>
          <span className="text-white text-xs font-bold">
            Kammanahalli, BLR
          </span>
        </div>
        <div className="h-8 w-[1px] bg-white/10" />
        
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 4px !important;
          height: 4px !important;
          background: white !important;
          opacity: 0.2 !important;
        }
        .swiper-pagination-bullet-active {
          height: 20px !important;
          opacity: 1 !important;
          border-radius: 4px !important;
        }
        .swiper-pagination {
          right: 40px !important;
          left: auto !important;
          width: auto !important;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
      `}</style>
    </section>
  );
}
