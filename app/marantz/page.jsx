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

const MARANTZ_PRODUCTS = [
  {
    id: "m1",
    name: "Marantz CINEMA 30",
    category: "AV Receiver",
    series: "Cinema Series",
    price: "₹6,89,900",
    image: "/marantz/CINEMA30-Black_Image_studio-front-on.webp",
    description:
      "The crown jewel of the Cinema Series. Crafted in Shirakawa, Japan, this 11.4 channel masterpiece delivers 250W per channel of reference-grade power with 8K support and HEOS built-in.",
    specs: [
      "11.4 Channels",
      "250W Per Channel",
      "Made in Japan",
      "8K & Dolby Atmos",
    ],
  },
  {
    id: "m2",
    name: "Marantz CINEMA 40",
    category: "AV Receiver",
    series: "Cinema Series",
    price: "₹4,19,900",
    image: "/marantz/CINEMA40-Black_Image_studio-front-on.webp",
    description:
      "Premium 9.4 channel performance featuring the iconic porthole display and large trap door design. Advanced audio components and Zone 3 pre-outs for high-end custom installations.",
    specs: [
      "9.4 Channels",
      "200W Per Channel",
      "11.4ch Processing",
      "Porthole Display",
    ],
  },
  {
    id: "m3",
    name: "Marantz CINEMA 50",
    category: "AV Receiver",
    series: "Cinema Series",
    price: "₹2,69,900",
    image: "/marantz/CINEMA50-Black_Image_studio-front-on.webp",
    description:
      "Powerful 9.4 channel receiver with 11.4ch processing and four independent subwoofer outputs. Ready for Dirac Live and full 8K cinematic immersion.",
    specs: [
      "185W Per Channel",
      "4x Subwoofer Outs",
      "Dirac Live Ready",
      "9.4 Channels",
    ],
  },
  {
    id: "m4",
    name: "Marantz CINEMA 60",
    category: "AV Receiver",
    series: "Cinema Series",
    price: "₹1,99,900",
    image: "/marantz/CINEMA60-Black_Image_studio-front-on.webp",
    description:
      "A high-performance 7.2 channel receiver that balances power and musicality. Perfect for dedicated home theaters looking for the signature Marantz warmth.",
    specs: ["180W Per Channel", "7.2 Channels", "8K Ultra HD", "HEOS Built-in"],
  },
  {
    id: "m5",
    name: "Marantz CINEMA 70s",
    category: "AV Receiver",
    series: "Cinema Series",
    price: "₹1,63,900",
    image: "/marantz/CINEMA70S-Black_Image_studio-front-on.webp",
    description:
      "Slimline 7.2 channel 8K AV receiver. Delivering legendary Marantz sound in a compact chassis that fits where standard receivers cannot.",
    specs: [
      "90W Per Channel",
      "Slimline Design",
      "7.2 Channels",
      "HDR10+ / eARC",
    ],
  },
  {
    id: "m6",
    name: "Marantz STEREO 70s",
    category: "Stereo Receiver",
    series: "Stereo Series",
    price: "₹1,29,900",
    image: "/marantz/CINEMA70S-Black_Image_studio-front-on.webp",
    description:
      "Premium Slimline Stereo Receiver with 100W per channel and Class A/B amplification. Combines the simplicity of stereo with modern 8K HDMI connectivity.",
    specs: ["100W x 2ch", "Class A/B Amp", "HDMI 8K Support", "Dual Sub Outs"],
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
            MARANTZ
          </h1>
        </div>
      </section>

      {/* Product List */}
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-20">
          {MARANTZ_PRODUCTS.map((product, index) => (
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
