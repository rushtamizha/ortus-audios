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

const WIIM_PRODUCTS = [
  {
    id: "w1",
    name: "WiiM Mini",
    category: "Streamer",
    series: "Essential",
    price: "13,900",
    image: "/wiim/4c1a1ce0662a467295dbb78e46ef0f32.png",
    description:
      "The ultimate mini networked streamer. Support for 192 kHz/24-bit high-resolution audio with multi-room capabilities via Airplay 2 and WiiM Home.",
    specs: ["192kHz/24-bit", "Airplay 2 Support", "Optical Out"],
  },
  {
    id: "w2",
    name: "WiiM Pro",
    category: "Streamer",
    series: "Pro Series",
    price: "20,900",
    image: "/wiim/12209f2676ed44d38159f69705f809fd.png",
    description:
      "High-performance streamer adding Google Cast and Voice Assistant support. Includes RoomFit Room Correction for optimized acoustic performance.",
    specs: ["Google Cast", "RoomFit Correction", "Ethernet Port"],
  },
  {
    id: "w3",
    name: "WiiM Pro Plus",
    category: "Streamer",
    series: "Pro Series",
    price: "30,900",
    image: "/wiim/213f4b70424d412494b90ad70b90aee6-1.png",
    description:
      "Audiophile-grade streamer with an advanced AKM AK4493SQ DAC. Features superior ADC integration for pristine analog-to-digital conversion.",
    specs: ["AKM 4493SQ DAC", "Premium ADC", "Line-In support"],
  },
  {
    id: "w4",
    name: "WiiM Ultra",
    category: "Streamer",
    series: "Flagship",
    price: "49,800",
    image: "/wiim/064aefdfefe441afbc0b2efd4d87a86d.png",
    description:
      'The pinnacle of WiiM streaming. Features a 3.5" touchscreen, ES9038 Q2M SABRE DAC, WiFi 6E, and HDMI ARC for seamless TV integration.',
    specs: ["SABRE 32-bit DAC", '3.5" Touchscreen', "HDMI ARC / WiFi 6E"],
  },
  {
    id: "w5",
    name: "WiiM Amp",
    category: "Amplifier",
    series: "Streaming Amp",
    price: "44,900",
    image: "/wiim/c569f3fd2d21475dbd8fbc2bbccc1fc9.png",
    description:
      "Compact networked streaming amplifier delivering 60W per channel. A perfect all-in-one solution for powering passive speakers with modern features.",
    specs: ["60W x 2 @ 8Ω", "HDMI ARC", "Subwoofer Out"],
  },
  {
    id: "w6",
    name: "WiiM Amp Pro",
    category: "Amplifier",
    series: "Streaming Amp",
    price: "56,800",
    image: "/wiim/abc43721dfbd4547b156e42342598f00.png",
    description:
      "Elevated sound quality with PFFB amplifier design and ES9038 Q2M SABRE DAC. Advanced thermal engineering for high-fidelity performance.",
    specs: ["PFFB Tech", "SABRE DAC", "Audiophile Grade"],
  },
  {
    id: "w7",
    name: "WiiM Amp Ultra",
    category: "Amplifier",
    series: "Flagship Amp",
    price: "76,800",
    image: "/wiim/b759d947a4504099ba031698a01ebb73.png",
    description:
      'High-power streaming master delivering 100W per channel. Features the flagship ES9039Q2M SABRE DAC and a stunning 3.5" touch interface.',
    specs: ["100W x 2 @ 8Ω", "ESS ES9039Q2M", '3.5" Touch Display'],
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
            WIIM
          </h1>
        </div>
      </section>

      {/* Product List */}
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-20">
          {WIIM_PRODUCTS.map((product, index) => (
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
