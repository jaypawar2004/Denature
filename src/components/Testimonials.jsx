import React from 'react';

const reviews = [
  {
    name: "Donia Kamal",
    img: "https://i.pravatar.cc/150?u=cathy",
    text: "I had an adjustment done to my dentures, and the service was excellent! The process was quick, professional, and very comfortable. My dentures fit perfectly now, and the care and attention to detail made all the difference. Highly recommend for anyone needing denture adjustments or dental prosthetic services!",
    rating: 5
  },
  {
    name: "Safiyo Abdirisaq",
    img: "https://i.pravatar.cc/150?u=robert",
    text: "I never thought I’d say this, but going to the dentist was actually… enjoyable?? 😅 The Dentist somehow makes dentures and prosthetic work feel like catching up with a friend while leaving with a brand new smile. Super gentle, professional, and clearly passionate about what she does she really slayed this. If you’re nervous about dentures or dental prosthetics, trust me, she ate and left no crumbs. 10/10 service, amazing results, would happily open my mouth here again. 🦷🤏🏽",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="bg-[#f8fafc] py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Side: Text & Google Badge */}
        <div className="lg:col-span-4 flex flex-col justify-between py-4">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-[#E6F7FB] text-[#5CCBEA] text-sm font-bold mb-6">
              Patient Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6 leading-tight">
              Hear From Our <br /> Happy Patients
            </h2>
            <p className="text-gray-500 text-lg max-w-sm leading-relaxed">
              Real stories from Brisbane patients who've rediscovered their confidence.
            </p>
          </div>

          {/* Google Review Badge */}
          <div className="mt-12 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm inline-block">
             <div className="flex items-center gap-4 mb-3">
                {/* Google G Icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.11c-.22-.66-.35-1.36-.35-2.11s.13-1.45.35-2.11V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.83z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"/>
                </svg>
                <span className="font-bold text-2xl text-slate-900">5.0</span>
                <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                </div>
             </div>
             <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Google Rating</p>
          </div>
        </div>

        {/* Right Side: Feedback Cards Stack */}
        <div className="lg:col-span-8 space-y-6">
          {reviews.map((review, i) => (
            <div 
              key={i} 
              className="bg-white p-8 md:p-10 rounded-[35px] shadow-sm border border-transparent hover:border-[#E6F7FB] hover:shadow-xl hover:scale-[1.01] transition-all duration-300 group relative"
            >
              {/* Floating Google Icon for each card */}
              <div className="absolute top-8 right-8 grayscale group-hover:grayscale-0 transition-all opacity-20 group-hover:opacity-100">
                <svg width="20" height="20" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.11c-.22-.66-.35-1.36-.35-2.11s.13-1.45.35-2.11V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.83z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"/>
                </svg>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img src={review.img} alt={review.name} className="w-14 h-14 rounded-full object-cover border-2 border-slate-50" />
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                        <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    </div>
                  </div>
                  <div>
                    <span className="text-xl font-bold text-[#0f172a] block">{review.name}</span>
                    <span className="text-sm text-[#5CCBEA] font-medium uppercase tracking-tight">Verified Patient</span>
                  </div>
                </div>
                
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed italic group-hover:text-slate-900 transition-colors pr-8">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;