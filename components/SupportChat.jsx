"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User, Bot, ArrowRight, Phone } from "lucide-react";

const CHAT_DATA = [
  {
    id: 1,
    question: "What audio brands do you deal with?",
    answer: "We are authorized partners for high-end brands like Klipsch, Denon, Marantz, and BenQ. We ensure 100% genuine hardware with official warranties.",
  },
  {
    id: 2,
    question: "Do you provide home theater automation?",
    answer: "Yes! We specialize in complete automation including lighting control, motorized screens, and integrated acoustic treatment for a cinematic experience.",
  },
  {
    id: 3,
    question: "Do you offer on-site consultation in Bangalore?",
    answer: "Absolutely. Our engineers visit your site for acoustic measurement and layout planning to provide a customized proposal.",
  },
  {
    id: 4,
    question: "How long does a typical installation take?",
    answer: "Depending on the complexity, a standard home theater setup takes 7-10 working days, while enterprise audio solutions vary by project scale.",
  },
];

export default function SupportChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);

  const handleWhatsAppRedirection = (q) => {
    const phoneNumber = "+919108333211";
    const text = encodeURIComponent(`Hi Ortus Audios, I have a query regarding: "${q}"`);
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed bottom-8 right-8 z-[1000]">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center shadow-2xl shadow-red-900/40 text-white hover:scale-110 transition-transform active:scale-95"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[350px] md:w-[400px] bg-[#0f0f12] border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#8B0000] p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/20">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-black uppercase text-xs tracking-widest">Ortus Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-white/60 font-bold uppercase tracking-tighter">Instant Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-grow p-6 h-[400px] overflow-y-auto space-y-6 scrollbar-hide">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0"><Bot size={14} className="text-[#8B0000]" /></div>
                <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5">
                  <p className="text-xs text-white/80 leading-relaxed font-medium">
                    Welcome to Ortus Audios. How can I assist you with your acoustic project today?
                  </p>
                </div>
              </div>

              {selectedChat && (
                <>
                  <div className="flex gap-3 justify-end">
                    <div className="bg-[#8B0000] p-4 rounded-2xl rounded-tr-none text-white text-xs font-bold">
                      {selectedChat.question}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0"><Bot size={14} className="text-[#8B0000]" /></div>
                    <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5">
                      <p className="text-xs text-white/60 leading-relaxed">
                        {selectedChat.answer}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Questions Selection / Input Area */}
            <div className="p-4 bg-white/[0.02] border-t border-white/5">
              {!selectedChat ? (
                <div className="space-y-2">
                  <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em] mb-3 ml-2">Choose a Question</p>
                  {CHAT_DATA.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedChat(item)}
                      className="w-full text-left p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#8B0000]/50 hover:bg-white/10 transition-all text-[11px] text-white/70 flex justify-between items-center group"
                    >
                      {item.question}
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#8B0000]" />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => handleWhatsAppRedirection(selectedChat.question)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-lg shadow-green-900/20"
                  >
                    <Phone size={14} /> Talk to Expert on WhatsApp
                  </button>
                  <button
                    onClick={() => setSelectedChat(null)}
                    className="text-[9px] font-black text-white/20 uppercase tracking-widest hover:text-white transition-colors"
                  >
                    Ask another question
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}