import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Speaker, 
  Tv, 
  Projector, 
  Wrench, 
  PhoneCall, 
  ChevronDown 
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Colors from your requested palette
  const colors = {
    darkRed: '#8B0000',
    darkBlue: '#00008B',
    darkGreen: '#006400',
    darkYellow: '#9B870C',
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home Theatre', icon: <Tv size={18} />, href: '#' },
    { name: 'Speakers', icon: <Speaker size={18} />, href: '#' },
    { name: 'Projectors', icon: <Projector size={18} />, href: '#' },
    { name: 'Installation', icon: <Wrench size={18} />, href: '#' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      scrolled ? 'bg-white/90 backdrop-blur-xl py-3 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          
          {/* Brand Identity */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col leading-none"
          >
            <span className="text-2xl font-black tracking-tighter uppercase" style={{ color: colors.darkBlue }}>
              Ortus<span style={{ color: colors.darkRed }}>Audios</span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 mt-1 uppercase">
              Bangalore • Estd 2025
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group flex items-center space-x-2 text-[13px] font-bold uppercase tracking-widest text-gray-800 hover:text-black transition-all"
              >
                <span className="text-gray-400 group-hover:scale-110 transition-transform" style={{ color: scrolled ? colors.darkBlue : 'inherit' }}>
                  {item.icon}
                </span>
                <span>{item.name}</span>
                <motion.div 
                  className="h-[2px] w-0 bg-current transition-all group-hover:w-full absolute -bottom-1"
                  style={{ backgroundColor: colors.darkYellow }}
                />
              </a>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-6">
            <button 
              className="hidden sm:flex items-center space-x-2 px-6 py-3 rounded-full text-white text-[12px] font-bold uppercase tracking-tighter shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 active:scale-95"
              style={{ backgroundColor: colors.darkRed }}
            >
              <PhoneCall size={16} />
              <span>Consult Expert</span>
            </button>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors"
              style={{ color: colors.darkBlue, backgroundColor: `${colors.darkBlue}10` }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-2xl"
          >
            <div className="p-6 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <span style={{ color: colors.darkBlue }}>{item.icon}</span>
                    <span className="font-bold text-gray-800">{item.name}</span>
                  </div>
                  <ChevronDown size={18} className="-rotate-90 text-gray-400" />
                </a>
              ))}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl border-2 flex flex-col items-center justify-center space-y-2" style={{ borderColor: colors.darkGreen }}>
                  <span className="text-[10px] font-bold uppercase text-gray-500">Service Hours</span>
                  <span className="text-xs font-black">10:30 - 20:00</span>
                </div>
                <div className="p-4 rounded-xl border-2 flex flex-col items-center justify-center space-y-2" style={{ borderColor: colors.darkYellow }}>
                  <span className="text-[10px] font-bold uppercase text-gray-500">Location</span>
                  <span className="text-xs font-black text-center">Kammanahalli</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;