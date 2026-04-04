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
const KLIPSCH_PRODUCTS = [
  {
    id: "k1",
    name: " R-800-F",
    category: "Floorstanding",
    series: " Series",
    price: "1,64,800",
    image: "/klipsch/R-800F-Carousel-3.webp",
    description:
      'Flagship floorstanding speaker featuring dual 8" spun-copper TCP woofers and a 90x90 square Tractrix® Horn for legendary high-efficiency sound.',
    specs: ["98 dB Sensitivity", 'Dual 8" TCP Woofers', "Tractrix® Horn"],
  },
  {
    id: "k2",
    name: " R-600-F",
    category: "Floorstanding",
    series: " Series",
    price: "1,24,800",
    image: "/klipsch/KlipscR-F600.webp",
    description:
      'High-performance tower speakers with dual 6.5" copper woofers. Delivers room-filling sound with incredible accuracy and clarity.',
    specs: ["96 dB Sensitivity", 'Dual 6.5" Woofers', "LTS Tweeter"],
  },
  {
    id: "k3",
    name: " R-40-M",
    category: "Bookshelf",
    series: " Series",
    price: "43,800",
    image: "/klipsch/R-40M-Carousel-3.webp",
    description:
      "Compact but powerful bookshelf speakers. Ideal for smaller spaces or as surrounds in a high-fidelity home theater setup.",
    specs: ["91 dB Sensitivity", '4" TCP Woofer', "90x90 Square Horn"],
  },
  {
    id: "k4",
    name: " R-50-C",
    category: "Center",
    series: " Series",
    price: "48,600",
    image: "/klipsch/R-50C-Carousel-3.webp",
    description:
      'The heart of your home theater. Dual 5.25" woofers ensure every word of dialogue is crisp and perfectly centered.',
    specs: ["96 dB Sensitivity", 'Dual 5.25" Woofers', "Center Channel"],
  },
  {
    id: "k5",
    name: " R-14S",
    category: "Surround",
    series: " Series",
    price: "47,800",
    image: "/klipsch/61zLwPUs32L._SL1143.jpg",
    description:
      'Dedicated surround speakers using dual 1" compression drivers for a wide, immersive soundstage.',
    specs: ["89 dB Sensitivity", 'Dual 1" Drivers', "IMG Woofer"],
  },
  {
    id: "k6",
    name: "RP-1200SW Subwoofer",
    category: "Subwoofer",
    series: " Premiere",
    price: "1,79,800",
    image: "/klipsch/RP-1200SW-Carousel-2.webp",
    description:
      'Elite 12" Ultra Long Throw Cerametallic subwoofer. Reaches down to 16Hz for bone-shaking cinematic bass.',
    specs: ["121 dB Max Output", "16Hz Extension", "Cerametallic Driver"],
  },
  {
    id: "k7",
    name: " R-120SW",
    category: "Subwoofer",
    series: " Series",
    price: "64,800",
    image: "/klipsch/R-120SW_Angle.webp",
    description:
      '12" high-excursion spun-copper IMG woofer with an all-digital amplifier for high efficiency and accuracy.',
    specs: ["116 dB Max Output", "29Hz Extension", '12" IMG Woofer'],
  },
  {
    id: "k8",
    name: " R-100SW",
    category: "Subwoofer",
    series: " Series",
    price: "53,800",
    image: "/klipsch/R-100SW_Front.webp",
    description:
      'High-performance 10" subwoofer that provides deep bass and placement flexibility.',
    specs: ["112 dB Max Output", "32Hz Extension", '10" IMG Woofer'],
  },
  {
    id: "k9",
    name: "DS-250W-LCR",
    category: "In-Wall",
    series: "Designer Series",
    price: "37,800",
    image: "/klipsch/DS-250W-LCR-6.webp",
    description:
      'In-wall LCR speaker with SkyHook™ tool-less installation. Dual 5.25" woofers for a clean, architectural look.',
    specs: ["92 dB Sensitivity", "SkyHook™ Cinch", 'Dual 5.25" Poly'],
  },
  {
    id: "k10",
    name: "PRO-25RW-LCR",
    category: "In-Wall",
    series: "Professional Series",
    price: "46,800",
    image: "/klipsch/PRO-25RW-LCR-4.jpg",
    description:
      'Professional grade in-wall speaker with a 1" aluminum dome tweeter and dual 5.25" IMG woofers.',
    specs: ["93 dB Sensitivity", "IMG Woofers", "Tractrix® Horn"],
  },
  {
    id: "k11",
    name: "PRO-16RW",
    category: "In-Wall",
    series: "Professional Series",
    price: "39,800",
    image: "/klipsch/PRO-16RW-2.webp",
    description:
      '6.5" In-wall speaker designed for high-performance audio without the footprint of traditional speakers.',
    specs: ["93 dB Sensitivity", '6.5" IMG Woofer', "90x90 Horn"],
  },
  {
    id: "k12",
    name: "DS-160C",
    category: "In-Ceiling",
    series: "Designer Series",
    price: "26,800",
    image: "/klipsch/DS-160C-1.webp",
    description:
      "Architectural in-ceiling speaker with a silk dome tweeter mated to a round Tractrix® horn.",
    specs: ["91 dB Sensitivity", "SkyHook™ Cinch", '6.5" Poly Woofer'],
  },
  {
    id: "k13",
    name: "CS-16C II",
    category: "In-Ceiling",
    series: "Custom Series",
    price: "9,500",
    image: "/klipsch/CS-16-2.jpg",
    description:
      'High-quality, affordable in-ceiling audio solution with a 6.5" polymer woofer and dome tweeter.',
    specs: ["91 dB Sensitivity", "Polymer Woofer", "Architectural"],
  },{
    id: "k14",
    name: "F200",
    category: "Floorstanding",
    series: "Custom Series",
    price: "9,500",
    image: "/klipsch/F-200_Angle.webp",
    description:
      'High-quality, affordable Floorstanding audio solution with a 6.5" copper woofer .',
    specs: ["91 dB Sensitivity", "aluminum ", "copper woofer"],
  },{
    id: "k15",
    name: "F8000",
    category: "Floorstanding",
    series: "Custom Series",
    price: "9,500",
    image: "/klipsch/RP-8000F-II-Carousel-1.webp",
    description:
      'High-quality, affordable Floorstanding audio solution with a 6.5" copper woofer .',
    specs: ["91 dB Sensitivity", "aluminum ", "copper woofer"],
  },{
    id: "k16",
    name: "R-820F",
    category: "Floorstanding",
    series: "Custom Series",
    price: "199900",
    image: "/klipsch/R-820F_Angle.webp",
    description:
      'High-quality, affordable Floorstanding audio solution with a  copper woofer .',
    specs: ["97 dB Sensitivity", "aluminum ", "copper woofer"],
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
      <section className="pt-32 pb-20 px-6 lg:px-12 bg-gradient-to-b from-[#000000] to-transparent">
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
            Klipsch
          </h1>
        </div>
      </section>

      {/* Product List */}
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto px-6 space-y-22">
          {KLIPSCH_PRODUCTS.map((product, index) => (
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
