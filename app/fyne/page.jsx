"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  MessageSquare,
  ShieldCheck,
  Zap,
  ArrowRight,
  Speaker,
  Disc,
  Radio,
} from "lucide-react";

const FYNE_PRODUCTS = [
  // --- F300 SERIES ---
  {
    id: "f1",
    name: "Fyne Audio F301i",
    category: "Bookshelf",
    series: "F300 Series",
    price: "42,900",
    image: "/fyne/F301i-Oak-Front-Grille-Off-bookshelf.jpg",
    description:
      "Award-winning 2-way bookshelf speaker with a rear-ported design. Features a 150mm multi-fibre bass/mid driver and a titanium dome tweeter for exceptional detail.",
    specs: ["44Hz - 34kHz", "8Ω Impedance", "Titanium Tweeter", "Pair"],
  },
  {
    id: "f2",
    name: "Fyne Audio F302i",
    category: "Floorstanding",
    series: "F300 Series",
    price: "69,900",
    image: "/fyne/F302i-Light-Oak-Front-Grille-off.webp",
    description:
      'Slim 6" floorstanding speaker providing a massive soundstage. The rear-ported cabinet is engineered for deep, articulate bass in a compact footprint.',
    specs: ['Single 6" Driver', "Titanium Tweeter", "44Hz - 34kHz", "Pair"],
  },
  {
    id: "f3",
    name: "Fyne Audio F303i",
    category: "Floorstanding",
    series: "F300 Series",
    price: "99,900",
    image: "/fyne/F303i-Walnut-Front-Grille-Off-large-floorstander.webp",
    description:
      "Twin-driver floorstanding flagship of the F300 series. D'Appolito driver configuration delivers pinpoint imaging and powerful low-frequency extension.",
    specs: ["Twin 150mm Drivers", "D'Appolito Array", "32Hz - 34kHz", "Pair"],
  },
  {
    id: "f4",
    name: "Fyne Audio F300iC",
    category: "Center",
    series: "F300 Series",
    price: "26,900",
    image: "/fyne/fyne-audio-f301ic-6inch-ceiling-speaker-949_518x518.webp",
    description:
      "Dedicated center channel featuring two 125mm multi-fibre drivers. Optimized for vocal clarity and seamless integration with the F300 series front speakers.",
    specs: [
      'Dual 5" Drivers',
      "Polyester Dome Tweeter",
      "58Hz - 20kHz",
      "Unit",
    ],
  },

  // --- F500 SERIES (Point Source) ---
  {
    id: "f5",
    name: "Fyne Audio F501",
    category: "Floorstanding",
    series: "F500 Series",
    price: "2,09,900",
    image:
      "/fyne/fyne-f501e-floorstanding-speaker-pair-theaudioco-898_518x518.webp",
    description:
      "Premium Point Source floorstander featuring IsoFlare™ technology and the BassTrax™ Tractrix diffuser system for 360-degree bass energy dispersion.",
    specs: ['IsoFlare™ 6" Driver', "BassTrax™ Diffuser", "35-150W RMS", "Pair"],
  },
  {
    id: "f6",
    name: "Fyne Audio F502",
    category: "Floorstanding",
    series: "F500 Series",
    price: "2,99,900",
    image: "/fyne/fyne-f502-floorstanding-speaker-the-audio-392_518x518.webp",
    description:
      'The flagship F500 series tower. Utilizes an 8" IsoFlare™ point source driver and an additional 8" bass driver for breathtaking scale and dynamics.',
    specs: [
      'IsoFlare™ 8" Driver',
      '8" Bass Driver',
      "BassTrax™ System",
      "Pair",
    ],
  },

  // --- ARCHITECTURAL SERIES ---
  {
    id: "f7",
    name: "Fyne Audio FA301iC",
    category: "In-Ceiling",
    series: "Install Series",
    price: "15,900",
    image: "/fyne/fyne-audio-f301ic-6inch-ceiling-speaker-949_518x518.webp",
    description:
      'High-performance 6" in-ceiling coaxial loudspeaker. Features a steerable HF unit to direct sound precisely toward the listening area.',
    specs: ['6" Coaxial Driver', "Steerable HF Unit", "200W Peak", "Unit"],
  },
  {
    id: "f8",
    name: "Fyne Audio FA501iC",
    category: "In-Ceiling",
    series: "Install Series",
    price: "29,900",
    image: "/fyne/fyne-audio-f501ic-6inch-ceiling-speaker-388_518x518.webp",
    description:
      "Audiophile-grade in-ceiling speaker utilizing the renowned Fyne IsoFlare™ technology for a true point-source acoustic radiation pattern.",
    specs: ['6" IsoFlare™ Driver', "Point Source Design", "250W Peak", "Unit"],
  },
];

const DenonPage = () => {
  const router = useRouter();

  const handleWhatsApp = (pName) => {
    const phone = "+919108333211";
    const msg = encodeURIComponent(
      `Inquiry for Denon ${pName}: Please share availability and current corporate offer price for my home theater project.`,
    );
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#020205] text-white font-sans">
      {/* Dynamic Header */}
      <section className="pt-32 pb-20 px-6 lg:px-12 bg-gradient-to-b from-[#0a0a0c] to-transparent">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-3 text-white/30 hover:text-white transition-all mb-10 group"
          >
            <ChevronLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">
              Back to Hub
            </span>
          </button>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase italic leading-none">
            FYNE
          </h1>
        </div>
      </section>

      {/* Product List */}
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-20">
          {FYNE_PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`group flex flex-col lg:flex-row gap-12 lg:gap-20 items-center  ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Visual Side: Minimalistic & Immersive */}
              <div className=" w-full   relative aspect-[5/4] lg:aspect-square overflow-hidden rounded-[3rem] bg-[#ffffff] border border-white/5">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full object-contain h-full   group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                />

                {/* Floating Floating Tech Badges */}
                <div className="absolute top-10 left-10 flex flex-col gap-3">
                  <div className="px-5 py-2 bg-black/50 backdrop-blur-xl border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white text-center">
                    {product.category}
                  </div>
                </div>
              </div>

              {/* Content Side: Typographic Precision */}
              <div className="w-full lg:w-1/2 flex flex-col">
                <div className="mb-10">
                  <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter text-white leading-none mb-6">
                    {product.name}
                  </h2>

                  <div className="flex items-baseline gap-4 mb-8">
                    <span className="text-xl font-black text-white uppercase tracking-widest">
                      MRP
                    </span>
                    <span className="text-3xl font-light tracking-tighter text-white">
                      ₹{product.price}
                    </span>
                  </div>

                  <p className="text-white/50 text-lg leading-relaxed max-w-md font-light">
                    {product.description}
                  </p>
                </div>

                {/* Specs Grid with better contrast */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12">
                  {product.specs.map((spec) => (
                    <div key={spec} className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <Zap size={14} className="text-[#8B0000]" />
                        <span className="text-[10px] font-black uppercase tracking-[0.15em] text-white/80">
                          Spec
                        </span>
                      </div>
                      <span className="text-[11px] font-medium text-white/50 uppercase tracking-wider pl-6">
                        {spec}
                      </span>
                    </div>
                  ))}
                </div>

                {/* High-End CTA Row */}
                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <button
                    onClick={() => handleWhatsApp(product.name)}
                    className="flex-1 py-6 bg-white text-black text-[11px] font-black uppercase tracking-[0.3em] rounded-2xl flex items-center justify-center gap-4 hover:bg-[#8B0000] hover:text-white transition-all duration-500 active:scale-95"
                  >
                    <MessageSquare size={16} /> Get Assured Best Price
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="py-24 text-center border-t border-white/5 mt-20">
        <div className="flex justify-center gap-12 mb-8 opacity-20">
          <Speaker /> <Disc /> <Radio />
        </div>
        <p className="text-white/10 text-[9px] font-black uppercase tracking-[0.8em]">
          Ortus Audios • Authorized Denon Solutions Partner
        </p>
      </footer>
    </main>
  );
};

export default DenonPage;
