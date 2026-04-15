"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Phone, Zap, Loader2 } from "lucide-react";
import { sendLead } from "@/app/actions/sendLead";

export default function LeadPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    // Show popup every 2 minutes (120,000 ms)
    const interval = setInterval(() => {
      setIsVisible(true);
    }, 120000); 

    return () => clearInterval(interval);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const result = await sendLead(formData);

    if (result.success) {
      setSent(true);
      setTimeout(() => {
        setIsVisible(false);
        setSent(false);
      }, 3000);
    }
    setIsSubmitting(false);
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-[#0f0f12] border border-white/10 rounded-[2.5rem] p-10 shadow-2xl overflow-hidden"
          >
            {/* Design Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B0000]/20 blur-3xl rounded-full" />

            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-6 right-6 text-white/20 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            {sent ? (
              <div className="py-10 text-center">
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap size={32} />
                </div>
                <h3 className="text-xl font-black uppercase italic tracking-tighter">Request Received</h3>
                <p className="text-white/40 text-xs mt-2 uppercase tracking-widest font-bold">Our experts will call you shortly</p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-3xl font-black uppercase italic tracking-tighter leading-none">
                    Elevate Your <span className="text-[#8B0000]">Space</span>
                  </h2>
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] mt-3">Free Site Consultation</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[9px] font-black text-white/20 uppercase ml-2 tracking-widest">Full Name</span>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                      <input name="name" required className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:border-[#8B0000] transition-all" placeholder="Enter name" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[9px] font-black text-white/20 uppercase ml-2 tracking-widest">Mobile Number</span>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                      <input name="phone" type="tel" required className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:border-[#8B0000] transition-all" placeholder="+91" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[9px] font-black text-white/20 uppercase ml-2 tracking-widest">I'm interested in...</span>
                    <select name="requirement" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4 text-sm outline-none focus:border-[#8B0000] transition-all appearance-none text-white/60">
                      <option>Home Theater Setup</option>
                      <option>Enterprise Audio Solution</option>
                      <option>Acoustic Treatment</option>
                    </select>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-[#8B0000] py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-red-700 transition-all disabled:opacity-50 mt-4 shadow-xl shadow-red-900/20"
                  >
                    {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <><Send size={16} /> Submit Request</>}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}