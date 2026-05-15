import Image from 'next/image';
import React from 'react';

const FounderSection = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text Content */}
        <div className="order-2 lg:order-1">
          <h3 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-2">
            Meet Our Founder
          </h3>
          <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Healthcare, Artistry, <br /> and Creativity
          </h2>
          
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              I started Tigris Smile with a simple vision — to help people regain confidence in the 
              most basic human rights: smiling, eating, and enjoying everyday life comfortably.
            </p>
            <p>
              To me, denture care is more than just treatment. It is a combination of healthcare and 
              artistry. I use my passion for detail to create smiles that feel as good as they look.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-teal-500">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Qualification</p>
              <p className="text-slate-800 font-medium">B. Dental Prosthetics</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-teal-500">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Expertise</p>
              <p className="text-slate-800 font-medium">Dental Technology</p>
            </div>
          </div>
        </div>

        {/* Right Side: Visual/Image Placeholder */}
        <div className="order-1 lg:order-2 relative">
          <div className="aspect-[4/5] bg-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10">
            {/* Replace with your actual image path */}
           <div className="relative w-full h-full overflow-hidden rounded-[3rem]">
  <Image 
    src="/images/owner2.jpeg" 
    alt="Founder of Tigris Smile" 
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 50vw"
    priority
  />
</div>
          </div>
          {/* Decorative background element */}
          <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        </div>

      </div>
    </section>
  );
};

export default FounderSection;