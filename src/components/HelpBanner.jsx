import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HelpBanner = () => {
  return (
    <section className="px-6 py-12">
      <div className="max-w-7xl mx-auto bg-[#5ECAEA] rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-stretch min-h-[400px]">
        
        {/* Left Side: Image */}
        <div className="flex-1 relative min-h-[300px] md:min-h-full">
          <Image 
            src="https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Path check kar lena
            alt="Dental Consultation"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Side: Content */}
        <div className="flex-1 p-10 md:p-16 flex flex-col justify-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Not Sure Which <br /> Service You Need?
          </h2>
          <p className="text-slate-700 text-lg max-w-md">
            Get in touch with us for a personalized consultation—we'll guide you every step.
          </p>
          <div>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-900 hover:text-white transition-all shadow-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HelpBanner;