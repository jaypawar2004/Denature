// "use client";
// import React, { useState, useEffect } from 'react';
// import { X, Gift, Sparkles } from 'lucide-react';

// const PromoPopup = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     // Testing ke liye session storage hata ke dekh sakte ho
//     const hasSeen = sessionStorage.getItem('hasSeenPopup');
    
//     const timer = setTimeout(() => {
//       if (!hasSeen) {
//         setIsVisible(true);
//       }
//     }, 3000); // 3 seconds delay

//     return () => clearTimeout(timer);
//   }, []);

//   const closePopup = () => {
//     setIsVisible(false);
//     sessionStorage.setItem('hasSeenPopup', 'true');
//   };

//   if (!isVisible) return null;

//   return (
//     <div className="fixed inset-0 z-[9999] flex items-center justify-center px-6">
//       {/* Heavy Blur Backdrop for better focus */}
//       <div 
//         className="absolute inset-0 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-500" 
//         onClick={closePopup}
//       ></div>
      
//       {/* Main Container */}
//       <div className="relative bg-white w-full max-w-lg rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.25)] border border-slate-200 overflow-hidden animate-in zoom-in slide-in-from-bottom-10 duration-500">
        
//         {/* Top Decorative Banner */}
//         <div className="h-32 bg-gradient-to-r from-[#5CCBEA] to-[#4bb8d8] flex items-center justify-center relative">
//             <Sparkles className="absolute top-4 left-4 text-white/30" size={40} />
//             <Gift className="text-white drop-shadow-lg" size={60} />
//             <Sparkles className="absolute bottom-4 right-4 text-white/30" size={40} />
//         </div>

//         <button 
//             onClick={closePopup} 
//             className="absolute top-4 right-4 p-2 rounded-full bg-white/20 text-white hover:bg-white hover:text-[#5CCBEA] transition-all z-20 border border-white/30"
//         >
//           <X size={20} />
//         </button>

//         <div className="p-10 text-center">
//           <h2 className="text-3xl font-extrabold text-slate-900 mb-2 font-sans tracking-tight">
//             Exclusive <span className="text-[#5CCBEA]">Smile</span> 
//           </h2>
//           <p className="text-slate-500 mb-8 text-base leading-relaxed">
//             Join 500+ happy patients in Brisbane. Get a <span className="font-bold text-slate-800">Consultation</span> and a customized denture plan today!
//           </p>

//           <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
//             <div className="relative group">
//                 <input 
//                     type="text" 
//                     placeholder="Enter Your Name" 
//                     className="w-full p-5 rounded-2xl text-zinc-400 bg-slate-50 border-2 border-slate-100 focus:border-[#5CCBEA] focus:bg-white outline-none transition-all shadow-inner placeholder:text-slate-400 font-medium" 
//                 />
//             </div>
            
//             <div className="relative group">
//                 <input 
//                     type="email" 
//                     placeholder="Email Address" 
//                     className="w-full p-5 rounded-2xl bg-slate-50 border-2 text-zinc-400 border-slate-100 focus:border-[#5CCBEA] focus:bg-white outline-none transition-all shadow-inner placeholder:text-slate-400 font-medium" 
//                 />
//             </div>

//             <button className="w-full bg-[#5CCBEA] text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-[#5CCBEA]/30 hover:bg-[#4bb8d8] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 mt-6">
//               Submit Now 
//             </button>
//           </form>

//           <p className="mt-6 text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">
//             secure & Safe 
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PromoPopup;


"use client";
import React, { useState, useEffect } from 'react';
import { X, Gift, Sparkles } from 'lucide-react';

const PromoPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 1. Form inputs initialized with standard keys
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Phone number track empty kiya taaki user input le sake
    date: 'Exclusive Consultation Plan', 
    message: 'This lead registered via the Exclusive Smile Promotion Popup Component.',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ success: null, message: '' });

  useEffect(() => {
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

  // 2. Input Change Handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. API Submission Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ success: null, message: '' });

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ success: true, message: 'Saved! 👍' });
        
        // Clear input states
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: 'Exclusive Consultation Plan',
          message: 'This lead registered via the Exclusive Smile Promotion Popup Component.',
        });

        // 1.5 Seconds baad popup auto-close
        setTimeout(() => {
          closePopup();
        }, 1500);
      } else {
        setStatus({ success: false, message: result.error || 'Error' });
      }
    } catch (error) {
      setStatus({ success: false, message: 'Server Error' });
    } finally {
      setLoading(false);
    }
  };

  if (!isVisible) return null;

  return (
    // Responsive Wrapper: Mobile screen margins balanced via px-4
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 sm:px-6">
      {/* Heavy Blur Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-500" 
        onClick={closePopup}
      ></div>
      
      {/* Main Container: Handled responsive width max-w-sm to max-w-lg and scroll safety via max-h */}
      <div className="relative bg-white w-full max-w-sm sm:max-w-md md:max-w-lg rounded-[2rem] sm:rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.25)] border border-slate-200 overflow-y-auto max-h-[90vh] sm:overflow-hidden animate-in zoom-in slide-in-from-bottom-10 duration-500">
        
        {/* Top Decorative Banner: Scaled height down for small devices */}
        <div className="h-24 sm:h-32 bg-gradient-to-r from-[#5CCBEA] to-[#4bb8d8] flex items-center justify-center relative flex-shrink-0">
            <Sparkles className="absolute top-3 left-3 sm:top-4 sm:left-4 text-white/30 w-8 h-8 sm:w-10 sm:h-10" />
            <Gift className="text-white drop-shadow-lg w-12 h-12 sm:w-16 sm:h-16" />
            <Sparkles className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 text-white/30 w-8 h-8 sm:w-10 sm:h-10" />
        </div>

        {/* Close Button */}
        <button 
            onClick={closePopup} 
            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 rounded-full bg-white/20 text-white hover:bg-white hover:text-[#5CCBEA] transition-all z-20 border border-white/30"
        >
          <X size={18} className="sm:w-5 sm:h-5" />
        </button>

        {/* Form Content Padding optimized for mobile (p-6 to sm:p-10) */}
        <div className="p-6 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1 sm:mb-2 font-sans tracking-tight">
            Exclusive <span className="text-[#5CCBEA]">Smile</span> 
          </h2>
          <p className="text-xs sm:text-base text-slate-500 mb-6 sm:mb-8 leading-relaxed">
            Join 500+ happy patients in Brisbane. Get a <span className="font-bold text-slate-800">Consultation</span> and a customized denture plan today!
          </p>

          <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
            {/* Full Name Input */}
            <div className="relative group">
                <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Your Name" 
                    className="w-full p-4 sm:p-5 text-sm sm:text-base rounded-xl sm:rounded-2xl text-slate-900 bg-slate-50 border-2 border-slate-100 focus:border-[#5CCBEA] focus:bg-white outline-none transition-all shadow-inner placeholder:text-slate-400 font-medium" 
                />
            </div>
            
            {/* Email Address Input */}
            <div className="relative group">
                <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address" 
                    className="w-full p-4 sm:p-5 text-sm sm:text-base rounded-xl sm:rounded-2xl bg-slate-50 border-2 text-slate-900 border-slate-100 focus:border-[#5CCBEA] focus:bg-white outline-none transition-all shadow-inner placeholder:text-slate-400 font-medium" 
                />
            </div>

            {/* NEW FIELD: Phone Number Added */}
            <div className="relative group">
                <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number" 
                    className="w-full p-4 sm:p-5 text-sm sm:text-base rounded-xl sm:rounded-2xl bg-slate-50 border-2 text-slate-900 border-slate-100 focus:border-[#5CCBEA] focus:bg-white outline-none transition-all shadow-inner placeholder:text-slate-400 font-medium" 
                />
            </div>

            {/* Action Button: Padding adjusted dynamically */}
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-[#5CCBEA] text-white py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black text-base sm:text-lg shadow-xl shadow-[#5CCBEA]/30 hover:bg-[#4bb8d8] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 mt-4 sm:mt-6 disabled:bg-gray-400 disabled:scale-100 disabled:shadow-none"
            >
              {loading ? 'Sending...' : 'Submit Now'}
            </button>
          </form>

          {/* Success/Error Alerts */}
          {status.message && (
            <p className={`mt-3 text-xs sm:text-sm font-bold ${status.success ? 'text-green-500' : 'text-red-500'}`}>
              {status.message}
            </p>
          )}

          <p className="mt-4 sm:mt-6 text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">
            secure & Safe 
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;