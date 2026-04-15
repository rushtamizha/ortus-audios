"use client";

import React from "react";
import {
  Globe,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/0rtusaudios/",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61575452211098",
  }
];

const colors = {
  darkRed: "#8B0000",
  darkBlue: "#00008B",
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Categorized links: Only "Company" includes hrefs
  const footerSections = [
    {
      title: "Solutions",
      isClickable: false,
      links: [
        { name: "Home Theatre" },
        { name: "Premium Audio" },
        { name: "4K Projection" },
        { name: "Smart Automation" },
      ],
    },
    {
      title: "Company",
      isClickable: true,
      links: [
        { name: "Home", href: "/" },
        { name: "Services", href: "#services" },
        { name: "Partners", href: "#partners" },
        { name: "Why Us", href: "#why-us" },
        { name: "Products", href: "#products" },
        { name: "Testimonials", href: "#testimonials" },
      ],
    },
    {
      title: "Support",
      isClickable: false,
      links: [
        { name: "Site Visit" },
        { name: "Consultation" },
        { name: "Warranty" },
        { name: "Service Center" },
      ],
    },
  ];

  return (
    <footer className="bg-[#020205] pt-24 pb-12 px-6 lg:px-12 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Branding Watermark */}
      <div className="absolute -bottom-10 -right-10 text-[18rem] font-black text-white/[0.01] select-none pointer-events-none tracking-tighter uppercase leading-none">
        ORTUS
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section: CTA & Logo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-start">
          <div>
            <a
              href="/"
              className="flex items-center gap-3 group transition-transform duration-500 mb-4"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 overflow-hidden group-hover:border-white/20 transition-all shadow-xl shadow-black/50">
                <img
                  src="/logo.jpg" // Replace with your actual filename (e.g., logo.svg or logo.png)
                  alt="Ortus Audios Logo"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter uppercase leading-none text-white">
                  ORTUS<span style={{ color: colors.darkRed }}>AUDIOS</span>
                </span>
                <span className="text-[8px] font-bold tracking-[0.4em] text-white/40 uppercase mt-1">
                  Karnataka
                </span>
              </div>
            </a>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter leading-tight mb-8">
              Ready to elevate your{" "}
              <span className="text-white/20 ">Acoustic Space?</span>
            </h3>
          </div>

          {/* Showroom Contact Card */}
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
              <MapPin size={14} className="text-[#8B0000]" /> Visit Our Showroom
            </h4>
            <div className="space-y-6">
              <div className="group flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 group-hover:bg-[#8B0000] group-hover:text-white transition-all">
                  <MapPin size={18} />
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  No.27, 2nd Floor,
                  <br /> Kullappa Circle, Venkateshappa Layout, <br /> Nehru
                  Road, Kammanahalli, <br />
                  Karnataka-560084, 
                </p>
              </div>
              <div
                className="group flex items-center gap-4 cursor-pointer"
                onClick={() => window.open("tel:++919108333211")}
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 group-hover:bg-[#8B0000] group-hover:text-white transition-all">
                  <Phone size={18} />
                </div>
                <p className="text-white/60 text-sm font-bold">9108333211 / 9148512123</p>
              </div>
              <div
                className="group flex items-center gap-4 cursor-pointer"
                onClick={() => window.open("mailto:ortusaudios@gmail.com")}
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 group-hover:bg-[#8B0000] group-hover:text-white transition-all">
                  <Mail size={18} />
                </div>
                <p className="text-white/60 text-sm">ortusaudios@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24 border-y border-white/5 py-16">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h5 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">
                {section.title}
              </h5>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {section.isClickable ? (
                      <a
                        href={link.href}
                        className="text-white/60 text-xs font-bold hover:text-[#8B0000] transition-colors uppercase tracking-widest block w-fit"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <span className="text-white/60 text-xs font-bold uppercase tracking-widest cursor-default block">
                        {link.name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Links */}
          {/* Social Links */}
          <div>
            <h5 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">
              Follow Us
            </h5>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-[#8B0000] hover:text-white hover:border-[#8B0000] transition-all duration-500"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        {/* Bottom Section: Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/[0.02] pt-12">
          <div className="flex flex-col md:flex-row items-center gap-6 opacity-30">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">
              © {currentYear} Ortus Audios. All Rights Reserved.
            </p>
          </div>

          {/* Engineered by Wepzite */}
          <div
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => window.open("https://wepzite.in", "_blank")}
          >
            <span className="text-[9px] font-medium uppercase tracking-[0.4em] text-white/20 group-hover:text-white/40 transition-colors duration-500">
              Engineered by
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-[#8B0000] transition-all duration-500">
                Wepzite
                <span className="text-[#8B0000] group-hover:text-white">
                  .in
                </span>
              </span>
              <div className="w-1 h-1 rounded-full bg-[#8B0000] animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
