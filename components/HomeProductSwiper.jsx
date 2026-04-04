"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ArrowUpRight, LayoutGrid } from 'lucide-react';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/free-mode';

const CATEGORIES = [
  {
    id: 1,
    name: "Denon",
    slug: "denon",
    count: "8+ Products",
    image: "/cards/EISA-award-winning-combo-thin-banner-mobile.webp",
    desc: "Precision engineering for high-fidelity home cinema receivers."
  },
  {
    id: 2,
    name: "Fyne Audio",
    slug: "fyne",
    count: "08+ Products",
    image: "/cards/fyne-audio-vintage-five-05.jpg",
    desc: "Award-winning Scottish speakers featuring IsoFlare™ point source drivers."
  },
  {
    id: 3,
    name: "Integra",
    slug: "integra",
    count: "02+ Products",
    image: "/cards/Integra-SEO-image_green-tinted-cinema-room-with-logo-overlaid_1200x630.avif",
    desc: "The professional choice for advanced custom integration and THX certification."
  },
  {
    id: 4,
    name: "JVC",
    slug: "jvc",
    count: "02+ Products",
    image: "/cards/JVC_NX-D2.webp",
    desc: "Experience the ultimate 4K laser projection with BLU-Escent™ technology."
  },
  {
    id: 5,
    name: "Klipsch",
    slug: "klipsch",
    count: "13+ Products",
    image: "/cards/hq720.jpg",
    desc: "Legendary high-efficiency sound powered by Tractrix® Horn technology."
  },
  {
    id: 6,
    name: "Pure Acoustics",
    slug: "pure-acoustics",
    count: "12+ Products",
    image: "/cards/images.jpg",
    desc: "Premium home cinema packages and high-impact Supernova speakers."
  },
  {
    id: 7,
    name: "Marantz",
    slug: "marantz",
    count: "06+ Products",
    image: "/cards/LINK10n_image_1_na-min.png",
    desc: "The most musical sound. Elegant design meets master-class audio performance."
  },
  {
    id: 8,
    name: "Onkyo",
    slug: "onkyo",
    count: "04+ Products",
    image: "/cards/ONKYO-TX-RZ30-beside-playstation-and-tv-gaming-avr-movie-avr_2000x1333.png",
    desc: "THX Certified receivers delivering immersive 8K cinematic soundscapes."
  },
  {
    id: 9,
    name: "Optoma",
    slug: "optoma",
    count: "08+ Products",
    image: "/cards/s-l400.jpg",
    desc: "Lightning-fast 240Hz gaming and high-brightness 4K laser projectors."
  },
  {
    id: 10,
    name: "Pioneer ",
    slug: "pioneer",
    count: "3+ Products",
    image: "/pioneer/Pioneer Elite VSX-LX305.webp",
    desc: "Studio-grade AV receivers featuring Dirac Live and XLR connectivity."
  },
  {
    id: 11,
    name: "Polk Audio",
    slug: "polk",
    count: "24+ Products",
    image: "/cards/polk-audio-home-theater-speaker.jpg",
    desc: "American HiFi excellence with patented Power Port technology."
  },
  {
    id: 12,
    name: "WiiM",
    slug: "wiim",
    count: "07+ Products",
    image: "/cards/Headphone-zone-Wiim-Pro-010.jpg",
    desc: "Smart, high-resolution streaming solutions for the modern home theater."
  },
  {
    id: 13,
    name: "Jamo",
    slug: "jamo",
    count: "02+ Products",
    image: "/jamo/Jamo-C113-Bookshelf-Speaker-high-gloss-black-front-840-840.webp",
    desc: "Inspire the next generation of music lovers. Delivering unparalleled high-quality audio products since 1968. Danish audio design."
  },
  {
    id: 14,
    name: "monitor audio",
    slug: "monitor-audio",
    count: "05+ Products",
    image: "/monitor/ma_bronze_7g_50_pack_iso_walnut.jpg",
    desc: "Monitor Audio is a British manufacturer of Hi-Fi speaker systems, offering quality stereo home cinema systems, multi-room audio setups, bluetooth, and more."
  },
  {
    id: 15,
    name: "elac",
    slug: "elac",
    count: "10+ Products",
    image: "/elac/DOW42-double-750x750.webp",
    desc: "ELAC builds on its heritage with vision to push thinking beyond the present. This is ELAC, founded on a commitment to making the best sound in the world."
  }
];

const CategorySwiper = () => {
  const router = useRouter();

  const handleNavigation = (slug) => {
    // Navigates to /products?brand=sony or similar
    router.push(`/${slug}`);
  };

  return (
    <section id='products'  className="py-24 bg-[#020205] overflow-hidden">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="h-px w-8 bg-[#8B0000]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50">
              dealers
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-7xl font-extrabold text-white tracking-tighter leading-none">
            Browse by <span className="text-white/50 italic">Brand.</span>
          </h2>
        </div>
        <div className="flex items-center gap-4 text-white/50 text-[10px] font-bold uppercase tracking-widest pb-2">
           <LayoutGrid size={14} className="text-[#8B0000]" /> 
           Select a category to view collection
        </div>
      </div>

      {/* Swiper Container */}
      <div className="pl-6 lg:pl-12">
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={25}
          slidesPerView={1.2}
          freeMode={true}
          loop={true}
          observer={true} 
         observeParents={true}
         watchSlidesProgress={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.5 },
            1440: { slidesPerView: 4.5 },
          }}
          className="!overflow-visible"
        >
          {CATEGORIES.map((cat) => (
            <SwiperSlide key={cat.id}>
              <Link href={`/${cat.slug}`}>
              <motion.div 
                
                whileHover={{ y: -10 }}
                className="group relative h-[450px] rounded-[2.5rem] overflow-hidden cursor-pointer border border-white/5 transition-all duration-700 hover:border-[#8B0000]/50"
              >
                {/* Background Image */}
                <img 
                  src={cat.image} 
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-1000 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pt-20" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#8B0000]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/50">
                      {cat.count}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-black text-white tracking-tighter mb-4 group-hover:text-[#8B0000] transition-colors uppercase">
                    {cat.name}
                  </h3>
                  
                  <p className="text-white/50 text-[11px] font-medium leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {cat.desc}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#8B0000] group-hover:border-[#8B0000] transition-all duration-500">
                      <ArrowUpRight size={20} />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      View Catalog
                    </span>
                  </div>
                </div>

                {/* Top Shine Effect */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />
              </motion.div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CategorySwiper;