"use client";
import React, { useState, useEffect } from 'react';
import { X, Gift, Sparkles } from 'lucide-react';

const PromoPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Testing ke liye session storage hata ke dekh sakte ho
    const hasSeen = sessionStorage.getItem('hasSeenPopup');
    
    const timer = setTimeout(() => {
      if (!hasSeen) {
        setIsVisible(true);
      }
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    sessionStorage.setItem('hasSeenPopup', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-6">
      {/* Heavy Blur Backdrop for better focus */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-500" 
        onClick={closePopup}
      ></div>
      
      {/* Main Container */}
      <div className="relative bg-white w-full max-w-lg rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.25)] border border-slate-200 overflow-hidden animate-in zoom-in slide-in-from-bottom-10 duration-500">
        
        {/* Top Decorative Banner */}
        <div className="h-32 bg-gradient-to-r from-[#5CCBEA] to-[#4bb8d8] flex items-center justify-center relative">
            <Sparkles className="absolute top-4 left-4 text-white/30" size={40} />
            <Gift className="text-white drop-shadow-lg" size={60} />
            <Sparkles className="absolute bottom-4 right-4 text-white/30" size={40} />
        </div>

        <button 
            onClick={closePopup} 
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 text-white hover:bg-white hover:text-[#5CCBEA] transition-all z-20 border border-white/30"
        >
          <X size={20} />
        </button>

        <div className="p-10 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2 font-sans tracking-tight">
            Exclusive <span className="text-[#5CCBEA]">Smile</span> 
          </h2>
          <p className="text-slate-500 mb-8 text-base leading-relaxed">
            Join 500+ happy patients in Brisbane. Get a <span className="font-bold text-slate-800">Consultation</span> and a customized denture plan today!
          </p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="relative group">
                <input 
                    type="text" 
                    placeholder="Enter Your Name" 
                    className="w-full p-5 rounded-2xl text-zinc-400 bg-slate-50 border-2 border-slate-100 focus:border-[#5CCBEA] focus:bg-white outline-none transition-all shadow-inner placeholder:text-slate-400 font-medium" 
                />
            </div>
            
            <div className="relative group">
                <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full p-5 rounded-2xl bg-slate-50 border-2 text-zinc-400 border-slate-100 focus:border-[#5CCBEA] focus:bg-white outline-none transition-all shadow-inner placeholder:text-slate-400 font-medium" 
                />
            </div>

            <button className="w-full bg-[#5CCBEA] text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-[#5CCBEA]/30 hover:bg-[#4bb8d8] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 mt-6">
              Submit Now 
            </button>
          </form>

          <p className="mt-6 text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">
            secure & Safe 
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;