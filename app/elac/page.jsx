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

const ELAC_PRODUCTS = [
  // --- Uni-Fi 2.0 Series ---
  {
    id: "elac-uf52",
    name: "Uni-Fi 2.0 UF52",
    brand: "ELAC",
    series: "Uni-Fi 2.0",
    category: "Floorstanding",
    price: "₹1,64,900",
    image: "/elac/UF52-FRONT.webp",
    type: "3-Way Concentric",
    specs: ["1\" Soft Dome", "4\" Alum Mid", "3 x 5.25\" Woofers", "42Hz-35kHz"],
    desc: "Flagship concentric driver technology for pinpoint imaging."
  },
  {
    id: "elac-ub52",
    name: "Uni-Fi 2.0 UB52",
    brand: "ELAC",
    series: "Uni-Fi 2.0",
    category: "Bookshelf",
    price: "₹82,900",
    image: "/elac/elacub52andrewjonesspeaker.webp",
    type: "3-Way Concentric",
    specs: ["1\" Soft Dome", "4\" Alum Mid", "5.25\" Alum Woofer", "46Hz-35kHz"],
    desc: "Audiophile-grade 3-way performance in a compact footprint."
  },
  {
    id: "elac-uc52",
    name: "Uni-Fi 2.0 UC52",
    brand: "ELAC",
    series: "Uni-Fi 2.0",
    category: "Center",
    price: "₹52,900",
    image: "/elac/UC52-FRONT.webp",
    type: "3-Way Concentric",
    specs: ["Concentric Mid/Tweet", "Dual 5.25\" Woofers", "48Hz-35kHz"],
    desc: "Perfect tonal matching for Uni-Fi home theatre systems."
  },

  // --- Debut Reference Series ---
  {
    id: "elac-dfr52",
    name: "Debut Reference DFR52",
    brand: "ELAC",
    series: "Debut Reference",
    category: "Floorstanding",
    price: "₹1,49,900",
    image: "/elac/ElacDFR52.webp",
    type: "3-Way Reflex",
    specs: ["1\" Soft Dome", "3 x 5.25\" Aramid", "42Hz-35kHz", "Oak/Walnut"],
    desc: "Premium aesthetics with dual-flared ports for refined bass."
  },
  {
    id: "elac-dbr62",
    name: "Debut Reference DBR62",
    brand: "ELAC",
    series: "Debut Reference",
    category: "Bookshelf",
    price: "₹69,900",
    image: "/elac/Elac_db62_image.jpg",
    type: "2-Way Reflex",
    specs: ["1\" Soft Dome", "6.5\" Aramid Fiber", "44Hz-35kHz", "8.2kg Build"],
    desc: "The gold standard for high-performance bookshelf audio."
  },

  // --- Debut 3.0 Series (The Latest) ---
  {
    id: "elac-f63",
    name: "Debut 3.0 F6.3",
    brand: "ELAC",
    series: "Debut 3.0",
    category: "Floorstanding",
    price: "₹1,19,900",
    image: "/elac/ELAC_Debut_3.0_DF63-Pair.webp",
    type: "3-Way Reflex",
    specs: ["1\" Alum Dome", "2 x 6.5\" Mid", "6.5\" Woofer", "31Hz-38kHz"],
    desc: "New generation power with high-res aluminum dome tweeters."
  },
  {
    id: "elac-b63",
    name: "Debut 3.0 B6.3",
    brand: "ELAC",
    series: "Debut 3.0",
    category: "Bookshelf",
    price: "₹49,900",
    image: "/elac/Elac-B6.3-Black-Prohifi.webp",
    type: "2-Way Reflex",
    specs: ["1\" Alum Dome", "6.5\" Woofer", "42Hz-38kHz", "Magnet Grilles"],
    desc: "Advanced high-frequency clarity for music and cinema."
  },

  // --- Debut 2.0 Series ---
  {
    id: "elac-f62",
    name: "Debut 2.0 F6.2",
    brand: "ELAC",
    series: "Debut 2.0",
    category: "Floorstanding",
    price: "₹99,900",
    image: "/elac/ELAC_Debut_3.0_DF63-Pair.webp",
    type: "3-Way Reflex",
    specs: ["1\" Cloth Dome", "Triple 6.5\" Aramid", "39Hz-35kHz", "19.9kg"],
    desc: "The classic workhorse of the high-end home theatre."
  },
  {
    id: "elac-b62",
    name: "Debut 2.0 B6.2",
    brand: "ELAC",
    series: "Debut 2.0",
    category: "Bookshelf",
    price: "₹42,900",
    image: "/elac/AVStore2_1200x.progressive_6a6ad313-d8ef-4ba7-b651-c7288c892927.jpg",
    type: "2-Way Reflex",
    specs: ["1\" Cloth Dome", "6.5\" Aramid Fiber", "44Hz-35kHz", "6 Ohm"],
    desc: "Exceptional value bookshelf for stereo or surround use."
  },

  // --- Subwoofers ---
  {
    id: "elac-s102",
    name: "Debut S10.2",
    brand: "ELAC",
    series: "Debut 2.0",
    category: "Subwoofer",
    price: "₹43,900",
    image: "/elac/DS102-BK-10_E2_80_B3-side.webp",
    type: "Powered Reflex",
    specs: ["10\" Doped Paper", "200W Peak", "35Hz-150Hz", "BASH Amp"],
    desc: "Essential low-frequency foundation for any ELAC system."
  }
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
            ELAC
          </h1>
        </div>
      </section>

      {/* Product List */}
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-20">
          {ELAC_PRODUCTS.map((product, index) => (
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

                  <div className="flex items-baseline gap-1 mb-8">
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
