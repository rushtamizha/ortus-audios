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

const OPTOMA_PRODUCTS = [
  // --- LAMP-BASED SERIES (Cinema & Gaming) ---
  {
    id: "o1",
    name: "Optoma HD30HDR",
    category: "Projector",
    series: "Home Entertainment",
    price: "₹1,10,000",
    image: "/optoma/Optoma HD30HDR.jpg",
    description:
      "4K HDR compatible 1080p projector featuring 3,800 lumens for 'lights-on' viewing. Includes a dedicated Game Mode with a lightning-fast 8.4ms response time.",
    specs: ["3,800 Lumens", "120Hz @ 8.4ms", "50,000:1 Contrast", "Full 3D"],
  },
  {
    id: "o2",
    name: "Optoma HD39HDR",
    category: "Projector",
    series: "Home Entertainment",
    price: "₹1,40,000",
    image: "/optoma/Optoma HD39HDR.jpg",
    description:
      "High-brightness 1080p projector with 4,500 lumens and MHL display support. Features powerful 10W speakers and flexible installation options for larger rooms.",
    specs: [
      "4,500 Lumens",
      "10W Internal Speaker",
      "HDMI 2.0 (4K Support)",
      "ISF Mode",
    ],
  },
  {
    id: "o3",
    name: "Optoma GT1080HDR",
    category: "Projector",
    series: "Short Throw Gaming",
    price: "₹1,65,000",
    image: "/optoma/Optoma GT1080HDR.jpg",
    description:
      "Short-throw gaming specialist capable of projecting massive images from inches away. Rec.709 color accuracy and 8.4ms response time at 120Hz.",
    specs: [
      "Short Throw Lens",
      "3,800 Lumens",
      "sRGB & Rec.709",
      "120Hz Support",
    ],
  },
  {
    id: "o4",
    name: "Optoma UHD33",
    category: "Projector",
    series: "4K UHD Series",
    price: "₹2,25,000",
    image: "/optoma/Optoma UHD33.jpg",
    description:
      "True 4K UHD gaming projector with a 240Hz refresh rate and an industry-leading 4.2ms input lag. Features 21:9 Ultra-Wide support for panoramic views.",
    specs: [
      "240Hz / 4.2ms Lag",
      "True 4K Resolution",
      "21:9 Panoramic Mode",
      "1,000,000:1 Contrast",
    ],
  },
  {
    id: "o5",
    name: "Optoma GT2160HDR",
    category: "Projector",
    series: "4K Short Throw",
    price: "₹2,75,000",
    image: "/optoma/gt2160.jpg",
    description:
      "The world's first 4K UHD short-throw cinema gaming projector. Combines 4,000 lumens of brightness with a massive 1,200,000:1 contrast ratio for stunning HDR10 visuals.",
    specs: ["4K Short Throw", "4,000 Lumens", "4ms Input Lag", "HDR10 & HLG"],
  },

  // --- LASER SERIES (DuraCore Technology) ---
  {
    id: "o6",
    name: "Optoma PK52 (Laser)",
    category: "Projector",
    series: "Premium Laser",
    price: "₹2,95,000",
    image: "/optoma/Optoma PK52 (Laser).jpg",
    description:
      "4K UHD Laser Home Cinema projector featuring Filmmaker Mode™. Utilizes Optoma's PureEngine™ visual enhancement for vibrant, accurate colors and 30,000-hour life.",
    specs: [
      "Dual Laser Source",
      "Filmmaker Mode™",
      "3,500 Lumens",
      "PureColor Tech",
    ],
  },
  {
    id: "o7",
    name: "Optoma Wave 130RK",
    category: "Projector",
    series: "Compact Laser",
    price: "₹3,60,000",
    image: "/optoma/Optoma Wave 130RK.jpg",
    description:
      "A compact DuraCore laser projector with 4K UHD resolution and 4,000 lumens. Supports 360-degree and portrait projection for unique architectural installations.",
    specs: [
      "DuraCore Laser",
      "1.6x Zoom",
      "360° Projection",
      "30,000 Hour Life",
    ],
  },
  {
    id: "o8",
    name: "Optoma UHZ50+",
    category: "Projector",
    series: "Flagship Laser",
    price: "₹4,90,000",
    image: "/optoma/Optoma UHZ50+.jpg",
    description:
      "Flagship True 4K Laser Projector with eARC support for high-fidelity audio. Features PureMotion MEMC for judder-free video and 4-corner adjustment for perfect alignment.",
    specs: [
      "2,700,000:1 Contrast",
      "eARC Support",
      "PureMotion MEMC",
      "Vertical Lens Shift",
    ],
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
            ONKYO
          </h1>
        </div>
      </section>

      {/* Product List */}
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-20">
          {OPTOMA_PRODUCTS.map((product, index) => (
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
