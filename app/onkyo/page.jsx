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

const ONKYO_PRODUCTS = [
  // --- SR SERIES (Core Home Theater) ---
  {
    id: "o1",
    name: "Onkyo TX-SR494",
    category: "AV Receiver",
    series: "SR Series",
    price: "₹78,600",
    image: "/onkyo/TX-SR494_AngleR_2000x2000.webp",
    description:
      "A versatile 7.2 channel receiver delivering 155W per channel. Features Dolby Atmos Height Virtualizer and seamless Bluetooth streaming for a modern cinema experience.",
    specs: [
      "7.2 Channels",
      "155W (6 ohms)",
      "Dolby Atmos / DTS:X",
      "4K HDMI Support",
    ],
  },

  // --- RZ SERIES (Flagship / Custom Install) ---
  {
    id: "o2",
    name: "Onkyo TX-RZ30",
    category: "AV Receiver",
    series: "RZ Series",
    price: "₹1,89,800",
    image: "/onkyo/ONKYO-TX-RZ30-Hero-MMM-MMR_2000x2000.webp",
    description:
      "THX Certified 9.2 channel powerhouse with Dirac Live room correction. Built for the smart home with Chromecast, AirPlay 2, and Sonos integration.",
    specs: ["9.2 Channels", "THX Certified", "Dirac Live", "8K HDMI / WiFi"],
  },
  {
    id: "o3",
    name: "Onkyo TX-RZ50",
    category: "AV Receiver",
    series: "RZ Series",
    price: "₹2,09,800",
    image: "/onkyo/TX-RZ50B_Front-left.webp",
    description:
      "Elite 11.2 channel processing with IMAX Enhanced certification. Delivers 250W of high-current power for massive soundstages and 3-zone audio control.",
    specs: [
      "11.2 Channel Processing",
      "IMAX Enhanced",
      "Dirac Live Full",
      "3 Zone Audio",
    ],
  },
  {
    id: "o4",
    name: "Onkyo TX-RZ70",
    category: "AV Receiver",
    series: "RZ Series",
    price: "₹4,49,800",
    image: "/onkyo/TX-RZ70_Hero_2000x2000.webp",
    description:
      "The ultimate flagship. 11.2 channels of pure THX-certified power featuring Auro 3D and Roon Ready status. The gold standard for premium home cinema installs.",
    specs: [
      "11.2 Channels",
      "140W FTC",
      "Auro 3D / Roon Ready",
      "Advanced CI Features",
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
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase  leading-none">
            ONKYO
          </h1>
        </div>
      </section>

      {/* Product List */}
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-20">
          {ONKYO_PRODUCTS.map((product, index) => (
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
