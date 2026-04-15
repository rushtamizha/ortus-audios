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

const POLK_PRODUCTS = [
  // --- SIGNATURE ELITE SERIES ---
  {
    id: "p1",
    name: "Signature Elite ES60 (Pair)",
    category: "Floorstanding",
    series: "Signature Elite",
    price: "1,39,000",
    image: "/polk/Signature-Elite-ES60-White_Image_angle-right.png",
    description:
      'High-Resolution Hi-Fi Floorstanding Speaker featuring a 1" Terylene dome tweeter and three 6.5" mica-fortified polypropylene drivers.',
    specs: ["36Hz – 40kHz", "90dB Sensitivity", "300W Max Power"],
  },
  {
    id: "p2",
    name: "Signature Elite ES10 SUB",
    category: "Subwoofer",
    series: "Signature Elite",
    price: "79,000",
    image: "/polk/Signature-Elite-Sub-ES10_Buystack_745453-2.png",
    description:
      '200W Class D 10" mineral-filled polypropylene cone woofer with Dual Power Port® technology and Hi-Res certification.',
    specs: ["200W Class D", '10" Driver', "Time Smart Phase"],
  },
  {
    id: "p3",
    name: "Signature Elite ES12 SUB",
    category: "Subwoofer",
    series: "Signature Elite",
    price: "97,000",
    image: "/polk/Signature-Elite-Sub-ES12_Buystack_745502-1.png",
    description:
      'Powerful 300W Class D 12" subwoofer designed for deep, cinematic bass with Smart Phase Control.',
    specs: ["300W Class D", '12" Driver', "Hi-Res Audio"],
  },

  // --- MONITOR XT SERIES ---
  {
    id: "p4",
    name: "Monitor XT70 (Pair)",
    category: "Floorstanding",
    series: "Monitor XT",
    price: "87,000",
    image: "/polk/Monitor-XT70-Black_Image_front-angle-right-no-grille.png",
    description:
      'High-Resolution tower speaker with dual 6.5" mica-reinforced woofers and Terylene dome tweeter.',
    specs: ["35Hz – 40kHz", "89dB Sensitivity", "200W Rec Power"],
  },
  {
    id: "p5",
    name: "Monitor XT60 (Pair)",
    category: "Floorstanding",
    series: "Monitor XT",
    price: "65,000",
    image: "/polk/Monitor-XT60-Black_Image_front-angle-right-no-grille.webp",
    description:
      "Dynamic floorstanding speaker offering crystal clear highs and powerful bass in a sleek black finish.",
    specs: ["38Hz – 40kHz", "87dB Sensitivity", '6.5" Drivers'],
  },
  {
    id: "p6",
    name: "Monitor XT20 (Pair)",
    category: "Bookshelf",
    series: "Monitor XT",
    price: "37,000",
    image: "/polk/Monitor-XT20-Black_Image_pair-angle-right-no-grille.png",
    description:
      "High-performance bookshelf speakers perfect for front or surround channels in a home theater.",
    specs: ["42Hz – 40kHz", "88dB Sensitivity", '6.5" Driver'],
  },
  {
    id: "p7",
    name: "Monitor XT15 (Pair)",
    category: "Bookshelf",
    series: "Monitor XT",
    price: "26,000",
    image: "/polk/Monitor-XT15-Black_Image_pair-front-angle-right-grille.png",
    description:
      'Compact bookshelf speakers featuring 5.25" drivers, delivering signature Polk sound in smaller rooms.',
    specs: ["48Hz – 40kHz", "86dB Sensitivity", "150W Rec Power"],
  },
  {
    id: "p8",
    name: "Monitor XT35 (Unit)",
    category: "Center",
    series: "Monitor XT",
    price: "32,000",
    image: "/polk/Monitor-XT35-Black_Image_front-straight-on-grille.png",
    description:
      'Slim center channel speaker with four 3" drivers, designed to fit easily under any TV.',
    specs: ["Slim Design", "88dB Sensitivity", '4x 3" Drivers'],
  },
  {
    id: "p9",
    name: "Monitor XT30 (Unit)",
    category: "Center",
    series: "Monitor XT",
    price: "22,000",
    image: "/polk/Monitor-XT30-Black_Image_single-front-angle-right-grille.png",
    description:
      "Dedicated center channel for clear dialogue and high-resolution cinema audio.",
    specs: ["55Hz – 40kHz", 'Dual 5.25" Drivers', "88dB Sensitivity"],
  },
  {
    id: "p10",
    name: "Monitor XT90 (Pair)",
    category: "Atmos",
    series: "Monitor XT",
    price: "25,000",
    image: "/polk/Monitor-XT90_Image_Front-Angle-Grille.png",
    description:
      "Dolby Atmos height elevation speakers for a truly immersive multidimensional soundstage.",
    specs: ["Atmos Height", '4" Driver', "86dB Sensitivity"],
  },
  {
    id: "p11",
    name: "Monitor XT10",
    category: "Subwoofer",
    series: "Monitor XT",
    price: "42,000",
    image: "/polk/Monitor-XT10-Black_Image_front-angle-left-grille.png",
    description:
      '10" High performance 100W powered subwoofer with bass reflex porting.',
    specs: ["100W Peak", "Bass Reflex", '10" Driver'],
  },
  {
    id: "p12",
    name: "Monitor XT12",
    category: "Subwoofer",
    series: "Monitor XT",
    price: "62,000",
    image: "/polk/Monitor-XT12_prod-front-angle-right-no-grille.png",
    description:
      '12" High performance powered subwoofer for deeper impact and room-filling low end.',
    specs: ["100W Peak", '12" Driver', "LFE Support"],
  },

  // --- RESERVE SERIES ---
  {
    id: "p13",
    name: "Reserve R700 (Pair)",
    category: "Floorstanding",
    series: "Reserve",
    price: "2,97,000",
    image: "/polk/Reserve-R700-Black_Image_angle-right.png",
    description:
      "Flagship Reserve tower featuring Pinnacle Ring Radiator and Turbine Cone midrange for elite fidelity.",
    specs: ['Dual 8" Woofers', "Power Port 2.0", "34.5 kg build"],
  },
  {
    id: "p14",
    name: "Reserve R600 (Pair)",
    category: "Floorstanding",
    series: "Reserve",
    price: "2,10,000",
    image: "/polk/Reserve-R600-White_Image_angle-right.png",
    description:
      'Powerful floorstanding speaker with dual 6.5" Turbine Cone woofers and high-res Pinnacle tweeter.',
    specs: ["38Hz – 50kHz", "87dB Sensitivity", "Pinnacle Tweeter"],
  },
  {
    id: "p15",
    name: "Reserve R500 (Pair)",
    category: "Floorstanding",
    series: "Reserve",
    price: "1,50,000",
    image: "/polk/Reserv-R500-White_Image_angle-right.png",
    description:
      "Slim tower speaker that delivers big sound without taking up much floor space.",
    specs: ['Dual 5.25" Woofers', "86dB Sensitivity", "Turbine Cone"],
  },
  {
    id: "p16",
    name: "Reserve R200 (Pair)",
    category: "Bookshelf",
    series: "Reserve",
    price: "84,500",
    image: "/polk/Reserve-R200-White_Image_pair-angle-right.webp",
    description:
      "Premium bookshelf speakers featuring the same drivers as the flagship R700 towers.",
    specs: ['6.5" Turbine Cone', "39Hz – 50kHz", "Pinnacle Tweeter"],
  },
  {
    id: "p17",
    name: "Reserve R100 (Pair)",
    category: "Bookshelf",
    series: "Reserve",
    price: "69,500",
    image: "/polk/Reserve-R100-White_Image_pair-angle-right.png",
    description:
      "Compact bookshelf speaker delivering exceptional high-resolution audio performance.",
    specs: ['5.25" Turbine Cone', "44Hz – 50kHz", "Power Port 2.0"],
  },
  {
    id: "p18",
    name: "Reserve R400C (Unit)",
    category: "Center",
    series: "Reserve",
    price: "90,000",
    image: "/polk/Reserve-R400-Black_Image_angle-right-no-grille.png",
    description:
      'Elite center channel with dual 6.5" Turbine cones for crystal clear dialogue.',
    specs: ["89dB Sensitivity", 'Dual 6.5" Drivers', "48Hz - 39kHz"],
  },
  {
    id: "p19",
    name: "Reserve R350C (Unit)",
    category: "Center",
    series: "Reserve",
    price: "76,000",
    image: "/polk/Reserve-R350-White_Image_angle-right-grille.png",
    description:
      'Slim LCR speaker with four 4" Turbine cones, versatile for horizontal or vertical mounting.',
    specs: ["Slim Design", 'Four 4" Drivers', "87dB Sensitivity"],
  },
  {
    id: "p20",
    name: "Reserve R300C (Unit)",
    category: "Center",
    series: "Reserve",
    price: "61,000",
    image: "/polk/Reserve-R300-Black_Image_angle-right-grille.png",
    description:
      'Compact center channel speaker featuring dual 5.25" Turbine cones for restricted spaces.',
    specs: ["Compact Form", "86.5dB Sensitivity", "3.8Ω Minimum"],
  },
  {
    id: "p21",
    name: "Reserve R900 (Pair)",
    category: "Atmos",
    series: "Reserve",
    price: "61,000",
    image: "/polk/Reserve-R900-White_Image-pair-angle-left-grille.png",
    description:
      "IMAX Enhanced height modules designed to sit atop Reserve towers or mount to the wall.",
    specs: ["Atmos Height", '4" Turbine Cone', "70Hz – 32kHz"],
  },

  // --- T-SERIES ---
  {
    id: "p22",
    name: "T50 (Pair)",
    category: "Floorstanding",
    series: "T-Series",
    price: "37,000",
    image: "/polk/T50_Image_angle-left.png",
    description:
      "Entry-level tower speakers with 150W power handling and dual bass radiators.",
    specs: ["150W Power", "88dB Sensitivity", "8 Ohm"],
  },
  {
    id: "p23",
    name: "T15 (Pair)",
    category: "Bookshelf",
    series: "T-Series",
    price: "16,500",
    image: "/polk/T15_Image_angle-right-left.png",
    description:
      "Highly versatile bookshelf speakers built with Polk's proprietary Dynamic Balance technology.",
    specs: ["150W Power", "88dB Sensitivity", "Compact Design"],
  },
  {
    id: "p24",
    name: "T30 (Unit)",
    category: "Center",
    series: "T-Series",
    price: "16,500",
    image: "/polk/T30_Image_angle-right-grille.png",
    description:
      "The workhorse center channel of the T-series, delivering clean and accurate vocals.",
    specs: ["100W Power", "88dB Sensitivity", "Center Channel"],
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
            polk
          </h1>
        </div>
      </section>

      {/* Product List */}
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-20">
          {POLK_PRODUCTS.map((product, index) => (
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
