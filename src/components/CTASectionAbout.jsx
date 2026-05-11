import React from 'react';
import Image from 'next/image';

const CTASectionAbout = () => {
  return (
    <section className="px-6 py-10">
      <div className="max-w-7xl mx-auto bg-[#5ECAEA] rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-stretch min-h-[450px]">
        
        {/* Left Content */}
        <div className="p-10 md:p-16 flex-1 flex flex-col justify-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-sans">
            Ready to Experience <br /> Better Dental Care?
          </h2>
          <p className="text-slate-700 text-lg max-w-md">
            Schedule your visit today and take the first step toward a healthier, brighter smile.
          </p>
          <div>
            <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-900 hover:text-white transition-all shadow-sm">
              Book Your Appointment
            </button>
          </div>
        </div>

        {/* Right Image Container */}
        <div className="flex-1 relative min-h-[300px] md:min-h-full">
          <Image 
            src="https://plus.unsplash.com/premium_photo-1682097274659-192f3d7c991a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Dental Care Session" 
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority // Top of the page images ke liye best hai
          />
        </div>

      </div>
    </section>
  );
};

export default CTASectionAbout;