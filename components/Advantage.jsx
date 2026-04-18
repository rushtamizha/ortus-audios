"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Wrench,
  Award,
  Zap,
  HeartHandshake,
  CircleDollarSign,
  Gem,
} from "lucide-react";

const advantages = [
  {
    title: "Expert Technicians",
    desc: "Certified professionals with years of hands-on experience in acoustic calibration.",
    icon: <Wrench className="w-6 h-6" />,
    color: "#8B0000", // Dark Red
  },
  {
    title: "Premium Equipment",
    desc: "Only top-tier, globally-recognized audio brands like Epson, and BenQ.",
    icon: <Award className="w-6 h-6" />,
    color: "#00008B", // Dark Blue
  },
  {
    title: "Affordable Pricing",
    desc: "Competitive enterprise rates without ever compromising on hardware quality.",
    icon: <CircleDollarSign className="w-6 h-6" />,
    color: "#006400", // Dark Green
  },
  {
    title: "Quick Installation",
    desc: "Fast turnaround from initial consultation to your first cinematic experience.",
    icon: <Zap className="w-6 h-6" />,
    color: "#9B870C", // Dark Yellow
  },
  {
    title: "Customer First",
    desc: "Your satisfaction is our top priority, backed by dedicated after-sales support.",
    icon: <HeartHandshake className="w-6 h-6" />,
    color: "#4B0082", // Indigo
  },
  {
    title: "Signature Experience",
    desc: "Experience pure luxury in our state-of-the-art demo lounge with personalized concierge service.",
    icon: <Gem className="w-6 h-6" />, // Gem icon for luxury/exclusivity
    color: "#1A1A1A", // Neutral Black/Silver (The color of high-end tech)
  },
];

const Advantage = () => {
  return (
    <section id="whyus" className="bg-[#020205] py-24 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="h-px w-8 bg-[#8B0000]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50">
                The Ortus Advantage
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter"
            >
              Why Choose <span className="text-white/50 ">Us.</span>
            </motion.h2>
          </div>
          <p className="text-white/50 text-sm font-medium tracking-wide max-w-xs md:text-right ">
            "Delivering world-class acoustic engineering to elite
            spaces."
          </p>
        </div>

        {/* Advantage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/5 overflow-hidden transition-all duration-500"
            >
              {/* Animated Glow on Hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${item.color} 0%, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-8 border border-white/10 transition-all duration-500 group-hover:bg-white group-hover:text-black"
                  style={{ color: item.color }}
                >
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Special "Talk to Us" Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group p-8 rounded-3xl border border-[#8B0000]/30 bg-[#8B0000]/5 hidden flex-col justify-center items-center text-center space-y-4 cursor-pointer hover:bg-[#8B0000]/10 transition-all"
          >
            <div className="w-16 h-16 rounded-full bg-[#8B0000] flex items-center justify-center shadow-[0_0_30px_rgba(139,0,0,0.3)]">
              <Zap size={24} className="text-white fill-current" />
            </div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mt-2">
              Ready to Upgrade?
            </h4>
            <p className="text-white/60 text-xs">
              Start your consultation today.
            </p>
            <button
              onClick={() => {
                const phoneNumber = "+919108333211"; // Your verified Ortus Audios number
                const message = encodeURIComponent(
                  "Hi Ortus Audios, I would like to book a professional site visit and consultation for my home theatre project.",
                );
                window.open(
                  `https://wa.me/${phoneNumber}?text=${message}`,
                  "_blank",
                );
              }}
              className="px-8 py-3 bg-white text-black text-[10px] font-black uppercase rounded-full tracking-[0.3em] hover:bg-[#8B0000] hover:text-white active:scale-95 transition-all duration-500 shadow-xl shadow-white/5"
            >
              Book Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
