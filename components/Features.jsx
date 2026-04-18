"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Settings, 
  Award, 
  Users, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

const colors = {
  darkRed: '#8B0000',
  darkBlue: '#00008B',
  bgDark: '#050509',
};

const features = [
  {
    title: "Expert Installation",
    desc: "Precision calibration by certified acoustic engineers.",
    icon: <Settings className="w-6 h-6" />,
    accent: colors.darkRed
  },
  {
    title: "Premium Brands",
    desc: "Exclusive collections from Denon , JVC , and Marantz",
    icon: <Award className="w-6 h-6" />,
    accent: "#9B870C" // Dark Yellow
  },
  {
    title: "Customer Satisfaction",
    desc: "Dedicated after-sales support for ultimate peace of mind.",
    icon: <CheckCircle2 className="w-6 h-6" />,
    accent: "#006400" // Dark Green
  }
];

const Features = () => {
  return (
    <section className="relative py-24 bg-[#050509] overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-blue-900 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-red-900 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-[#8B0000] w-5 h-5" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50">
                The Ortus Standard
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter leading-tight">
              Trusted by <span className="text-white/60">100+ Customers</span> in Bangalore
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500"
            >
              {/* Icon Container */}
              <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 shadow-lg"
                style={{ backgroundColor: `${item.accent}20`, color: item.accent }}
              >
                {item.icon}
              </div>

              <h3 className="text-white font-bold text-lg mb-3 tracking-tight">
                {item.title}
              </h3>
              
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>

              {/* Subtle Decorative Bottom Line */}
              <div 
                className="absolute bottom-0 left-8 right-8 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ backgroundColor: item.accent }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;