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

const DENON_PRODUCTS = [
  {
    id: "d1",
    name: "AVR-S660H",
    category: "8K Series",
    price: "82,900",
    image: "/denon/AVR-S660H.webp",
    description:
      "5.2ch 8K AV Receiver with HEOS® Built-in. Delivers 150W per channel with full support for Dolby TrueHD, DTS-HD Master Audio, and Dolby Vision.",
    specs: ["150W / Channel", "8K Ultra HD", "HEOS Built-in"],
  },
  {
    id: "d2",
    name: "AVR-S960H",
    category: "8K Series",
    price: "1,18,900",
    image: "/denon/AVR-S960H.webp",
    description:
      "7.2 channel 8K receiver with 185W per channel. Supports 3D audio formats including Dolby Atmos® and DTS:X® with 8K/60Hz upscaling.",
    specs: ["185W / Channel", "Dolby Atmos", "4K/120Hz Pass-through"],
  },
  {
    id: "d3",
    name: "AVR-X250BT",
    category: "Essential Series",
    price: "52,900",
    image: "/denon/AVR-X250BT.webp",
    description:
      "130W x 5ch discrete power amplifier. Features Bluetooth streaming and 5 HDMI inputs with HDCP 2.2 support for a reliable entry-level home cinema.",
    specs: ["130W / Channel", "Bluetooth Audio", "5 HDMI Inputs"],
  },
  {
    id: "d4",
    name: "AVR-X1800H",
    category: "X-Series",
    price: "1,04,900",
    image: "/denon/AVR-X1800H.webp",
    description:
      "7.2 channel 8K receiver with eARC support. High-performance 175W per channel output with integrated Wi-Fi and voice control compatibility.",
    specs: ["175W / Channel", "eARC Support", "Wi-Fi & Bluetooth"],
  },
  {
    id: "d5",
    name: "AVC-X2800H",
    category: "X-Series Premium",
    price: "1,44,900",
    image: "/denon/AVR-X2800H_Bustack_1.webp",
    description:
      "Advanced 7.2 channel 8K receiver. Offers 185W per channel with full 3D audio support and refined HDMI specifications for gaming and cinema.",
    specs: ["185W / Channel", "3D Audio", "8K Upscaling"],
  },
  {
    id: "d6",
    name: "AVC-X3800H",
    category: "Performance Series",
    price: "2,09,900",
    image: "/denon/AVC-X3800H_scene-angle.webp",
    description:
      "9.4 channel processing with 215W per channel. Features IMAX Enhanced, HDR10+, and Audyssey MultEQ XT32 for professional-grade room calibration.",
    specs: ["215W / Channel", "IMAX Enhanced", "9.4 Ch Processing"],
  },
  {
    id: "d7",
    name: "AVC-X4800H",
    category: "Elite Series",
    price: "2,99,900",
    image: "/denon/AVC-X4800H_scene-angle.webp",
    description:
      "Sophisticated 9.4 channel amplifier delivering 235W. Supports Auro-3D and features heavy-duty construction for the ultimate theater fidelity.",
    specs: ["235W / Channel", "Auro-3D", "Made in Japan"],
  },
  {
    id: "d8",
    name: "AVC-A1H",
    category: "Flagship Anniversary",
    price: "8,00,000",
    image: "/denon/AVC-A1H_buystack_1.webp",
    description:
      "The pinnacle of Denon engineering. 15.4 channel masterpiece with 260W per channel, supporting 9.4.6 configurations for the world's most elite cinemas.",
    specs: ["260W / Channel", "15.4 Channel", "9.4.6 Configuration"],
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
            Denon
          </h1>
        </div>
      </section>

      {/* Product List */}
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-20">
          {DENON_PRODUCTS.map((product, index) => (
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
