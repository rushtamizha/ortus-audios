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

const SUPERNOVA_PRODUCTS = [
  // --- COMPLETE PACKAGES ---
  {
    id: "sn1",
    name: "MovieMate PHT851 Home Cinema Package",
    category: "Home Theater System",
    series: "MovieMate",
    price: "₹44,900",
    image: "/acoustics/images.jpg",
    description:
      'A complete 5.1 cinematic solution featuring a 10" down-firing subwoofer, four 120W satellites, and a dedicated center channel. Includes high-grade speaker wire.',
    specs: ['10" Down-Firing Sub', "120W Per Satellite", "Auto On/Off Amp"],
  },

  // --- FLOORSTANDING SPEAKERS ---
  {
    id: "sn2",
    name: "Supernova 5F (Pair)",
    category: "Floorstanding",
    series: "Supernova Series",
    price: "₹40,000",
    image: "/acoustics/supernova-towers.webp",
    description:
      'Elegant 2-way floor-standing loudspeakers with dual 6.5" woofers. Delivers a 92dB S/N ratio for crisp, high-efficiency audio performance.',
    specs: ["220W Output", 'Dual 6.5" Woofers', "92dB Sensitivity"],
  },
  {
    id: "sn3",
    name: "Supernova 8F (Pair)",
    category: "Floorstanding",
    series: "Supernova Series",
    price: "₹55,000",
    image:
      "/acoustics/65133e0a91bff6336e7a49a5-pure-acoustics-supernova-8-f-350-watt.webp",
    description:
      'High-output tower speakers featuring triple 6.5" woofers. Designed for larger rooms requiring deeper bass and 250W of power handling.',
    specs: ["250W Output", 'Triple 6.5" Woofers', "92dB Sensitivity"],
  },
  {
    id: "sn4",
    name: "Supernova 12F (Pair)",
    category: "Floorstanding",
    series: "Supernova Series",
    price: "₹75,000",
    image: "/acoustics/WhatsApp_Image_2026-01-15_at_17.03.58.webp",
    description:
      'The flagship of the Supernova line. Massive 320W output powered by triple 8" woofers for an earth-shaking high-fidelity experience.',
    specs: ["320W Output", 'Triple 8" Woofers', "90dB Sensitivity"],
  },

  // --- CENTER & SURROUND ---
  {
    id: "sn5",
    name: "Supernova S Surround (Pair)",
    category: "Surround",
    series: "Supernova Series",
    price: "₹14,000",
    image: "/acoustics/Supernova-S-rear-black-section-4-1536x1341.webp",
    description:
      'Compact 2-way surround speakers with a 5" mid-woofer, perfect for creating an immersive 360-degree soundstage.',
    specs: ["140W Output", '5" Mid-Woofer', "65Hz - 20kHz"],
  },
  {
    id: "sn6",
    name: "Supernova C+ Center",
    category: "Center",
    series: "Supernova Series",
    price: "₹18,000",
    image: "/acoustics/2_5e809ecd-efd4-4449-8245-b61988e1aca8.webp",
    description:
      'High-clarity center channel speaker with dual 5.25" mid-woofers, optimized for vocal frequencies and dialogue precision.',
    specs: ["200W Output", 'Dual 5.25" Woofers', "89dB Sensitivity"],
  },

  // --- SUBWOOFERS ---
  {
    id: "sn7",
    name: "SN10 Subwoofer",
    category: "Subwoofer",
    series: "Sub Series",
    price: "₹35,000",
    image: "/acoustics/supernova-sub.webp",
    description:
      '10" high-performance powered subwoofer with an adjustable frequency response (40Hz-180Hz) and RCA connectivity.',
    specs: ["150W Power", '10" Driver', "RCA Connection"],
  },
  {
    id: "sn8",
    name: "SN12 Subwoofer",
    category: "Subwoofer",
    series: "Sub Series",
    price: "₹52,000",
    image: "/acoustics/supernova-sub.webp",
    description:
      'Substantial 12" 300W powered subwoofer designed for medium to large home cinema rooms.',
    specs: ["300W Power", '12" Driver', "Adjustable Crossover"],
  },
  {
    id: "sn9",
    name: "SN15 Subwoofer",
    category: "Subwoofer",
    series: "Sub Series",
    price: "₹65,000",
    image: "/acoustics/supernova-sub.webp",
    description:
      'Ultra-powerful 450W 15" subwoofer for the ultimate low-frequency impact. Built for true bass enthusiasts.',
    specs: ["450W Power", '15" Driver', "Professional Grade"],
  },

  // --- RIFT ARCHITECTURAL SERIES ---
  {
    id: "r1",
    name: "Rift 5LV8 Hybrid (Pair)",
    category: "In-Ceiling",
    series: "Rift Series",
    price: "₹10,000",
    image: "/acoustics/Boost-55-01.webp",
    description:
      'Slim-frame 5" hybrid in-ceiling speakers with magnetic grills. Supports both 100V (institutional) and 8Ω (home) use.',
    specs: ["100W / 8Ω", "Magnetic Grill", "Slim Frame"],
  },
  {
    id: "r2",
    name: "Rift 6LV8 Hybrid (Pair)",
    category: "In-Ceiling",
    series: "Rift Series",
    price: "₹12,000",
    image: "/acoustics/RW065.webp",
    description:
      'Powerful 6" in-ceiling solution with a wider frequency response for high-quality background music and institutional audio.',
    specs: ["120W / 8Ω", '6" Woofer', "Easy Installation"],
  },
  {
    id: "r3",
    name: "Rift RW065 (Pair)",
    category: "In-Ceiling",
    series: "Rift Series",
    price: "₹17,500",
    image: "/acoustics/RW065.webp",
    description:
      'Premium 6.5" magnetic grill in-ceiling speakers featuring a 1" tweeter for detailed high-frequency reproduction.',
    specs: ["120W / 8Ω", '6.5" Woofer', "48Hz - 20kHz"],
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
            Pure Acoustics
          </h1>
        </div>
      </section>

      {/* Product List */}
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-20">
          {SUPERNOVA_PRODUCTS.map((product, index) => (
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
                      {product.price}
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
