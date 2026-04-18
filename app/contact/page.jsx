"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  User, 
  MapPin, 
  Phone, 
  Settings,
  Send,
  ChevronLeft,
  Home
} from 'lucide-react';

const ContactPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Home Theatre',
    message: ''
  });

  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();
    const phoneNumber = "+919108333211"; 
    const text = `*Consultation Request - Ortus Audios*%0A%0A` +
                 `*Name:* ${formData.name}%0A` +
                 `*Service:* ${formData.service}%0A` +
                 `*Requirements:* ${formData.message}`;

    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#020205] pb-24 relative">
      


      {/* --- MAIN CONTENT --- */}
      <div className="pt-40 px-6 lg:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Side: Brand & Info */}
        <div className="flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-[#8B0000]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50">
              Ortus Audios Bangalore
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-extrabold text-white tracking-tighter mb-8">
            Consult <br />
            <span className="text-white/20 ">The Experts.</span>
          </h1>

          <div className="space-y-10 mt-12">
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#8B0000] border border-white/5 group-hover:bg-[#8B0000] group-hover:text-white transition-all">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-white/30 text-[10px] font-black uppercase tracking-widest mb-1">Our Location</p>
                <p className="text-white font-bold text-lg leading-snug">
                  Kammanahalli, <br />Bangalore , Karnataka,560084
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#8B0000] border border-white/5 group-hover:bg-[#8B0000] group-hover:text-white transition-all">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-white/30 text-[10px] font-black uppercase tracking-widest mb-1">Direct Line</p>
                <p className="text-white font-bold text-lg"> 9108333211 / 9148512123</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-8 md:p-12 backdrop-blur-3xl shadow-2xl relative"
        >
          {/* Subtle Glow Effect */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#8B0000]/10 blur-[100px] rounded-full pointer-events-none" />

          <form onSubmit={handleWhatsAppRedirect} className="space-y-6 relative z-10">
            
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/50 ml-4">Full Name</label>
              <div className="relative">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                <input 
                  required
                  type="text" 
                  placeholder="Ortus"
                  className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 pl-14 pr-6 text-white focus:border-[#8B0000]/50 focus:outline-none transition-all"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/50 ml-4">Select Service</label>
              <div className="relative">
                <Settings className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                <select 
                  className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 pl-14 pr-6 text-white focus:border-[#8B0000]/50 focus:outline-none appearance-none transition-all"
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="Home Theatre" className="bg-black">Home Theatre Setup</option>
                  <option value="Audio System" className="bg-black">Premium Audio</option>
                  <option value="Projector" className="bg-black">4K Projectors</option>
                  <option value="Automation" className="bg-black">Smart Automation</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/50 ml-4">Requirements</label>
              <textarea 
                rows="4" 
                placeholder="Tell us about your space and preferences..."
                className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 px-6 text-white focus:border-[#8B0000]/50 focus:outline-none transition-all resize-none"
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-white text-black py-6 rounded-2xl font-black uppercase text-[11px] tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-[#8B0000] hover:text-white transition-all duration-500 shadow-xl"
            >
              Start Consultation <Send size={16} />
            </button>
          </form>
        </motion.div>

      </div>
    </main>
  );
};

export default ContactPage;