"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Layers,
  Handshake,
  ShieldCheck,
  Home,
  Speaker,
  ArrowRight,
  Globe,
  MessageSquareQuote,
  Phone,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const colors = {
    darkRed: "#8B0000",
    darkBlue: "#00008B",
    darkYellow: "#9B870C",
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      name: "Home",
      icon: <Home size={18} />,
      href: "/",
    },
    {
      name: "Services",
      icon: <Layers size={18} />, // Represents layers of integration/setup
      href: "#services",
    },
    {
      name: "Partners",
      icon: <Handshake size={18} />, // Represents business partnerships/brands
      href: "#partners",
    },
    {
      name: "Why Us",
      icon: <ShieldCheck size={18} />, // Represents trust, warranty, and authority
      href: "#whyus",
    },
    {
      name: "Products",
      icon: <Speaker size={18} />, // Represents audio-visual hardware
      href: "#products",
    },
    {
      name: "Testimonials",
      icon: <MessageSquareQuote size={18} />, // Specific testimonial/quote icon
      href: "#testimonials",
    },
  ];

  return (
    <div className="fixed w-full z-[100] top-0 left-0">
      <nav
        className={`mx-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          scrolled
            ? "max-w-[95%] md:max-w-5xl mt-4 rounded-2xl border border-white/10 bg-[#0a0a0c]/90 backdrop-blur-xl shadow-2xl py-3"
            : "max-w-full bg-transparent py-6 border-b border-white/5"
        }`}
      >
        <div className="px-6 lg:px-10 flex justify-between items-center">
          <a
            href="/"
            className="flex items-center gap-3 group transition-transform duration-500"
          >
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 overflow-hidden group-hover:border-white/20 transition-all shadow-xl shadow-black/50">
              <img
                src="/logo.jpg" // Replace with your actual filename (e.g., logo.svg or logo.png)
                alt="Ortus Audios Logo"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter uppercase leading-none text-white">
                ORTUS<span style={{ color: colors.darkRed }}>AUDIOS</span>
              </span>
              <span className="text-[8px] font-bold tracking-[0.4em] text-white/40 uppercase mt-1">
                Bangalore
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-5 py-2 text-[11px] font-bold uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-all"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                const phoneNumber = "+919108333211";
                const message = encodeURIComponent(
                  "Hi Ortus Audios, I'm looking for a professional consultation for my home audio/theatre project. Could you help me get started?",
                );
                window.open(
                  `https://wa.me/${phoneNumber}?text=${message}`,
                  "_blank",
                );
              }}
              className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] bg-white text-black hover:bg-[#8B0000] hover:text-white transition-all duration-500 active:scale-95 shadow-lg shadow-white/5"
            >
              Consult <ArrowRight size={14} />
            </button>

            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2 text-white bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Modern Side-Drawer Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[110]"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[85%] max-w-sm bg-[#0f0f12] z-[120] p-8 shadow-2xl flex flex-col"
            >
              {/* Close Button Header */}
              <div className="flex justify-between items-center mb-12">
                <span className="text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase">
                  Navigation
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-white/5 rounded-full text-white hover:bg-white/10"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Menu Links */}
              <div className="flex flex-col space-y-4">
                {menuItems.map((item, i) => (
                  <motion.a
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    href={item.href}
                    className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-white group hover:bg-white/[0.08] transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-black/40 text-white/60">
                        {item.icon}
                      </div>
                      <span className="font-bold text-sm tracking-wide">
                        {item.name}
                      </span>
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-white/20 group-hover:text-white"
                    />
                  </motion.a>
                ))}
              </div>

              {/* Mobile Footer */}
              <div className="mt-auto pt-8 border-t border-white/5">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#8B0000]/10 border border-[#8B0000]/20">
                  <Phone size={18} className="text-[#8B0000]" />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-white/50">
                      Speak to Expert
                    </p>
                    <p className="text-sm font-bold text-white tracking-tight">
                      ++919108333211 
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
