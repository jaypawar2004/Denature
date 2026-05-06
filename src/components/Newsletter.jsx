import React from 'react';

const Newsletter = () => {
  return (
    <section className="bg-[#f8fafc] py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Left Side: Heading */}
        <div className="max-w-2xl text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] leading-tight">
            Keep Smiling Bright — <br /> Stay Connected with Us
          </h2>
        </div>

        {/* Right Side: Form */}
        <div className="w-full max-w-md space-y-4">
          <p className="text-gray-500 text-sm md:text-base text-center lg:text-right mb-4">
            Get dental care tips, clinic updates, and exclusive offers straight to your inbox
          </p>
         <div className="w-full max-w-md mx-auto lg:mx-0">
  <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center bg-transparent sm:bg-white p-0 sm:p-1.5 rounded-none sm:rounded-full sm:shadow-sm sm:border border-gray-100 gap-3 sm:gap-0">
    
    {/* Input Field */}
    <input 
      type="email" 
      placeholder="Your Email Address" 
      className="flex-1 bg-white sm:bg-transparent px-6 py-4 sm:py-3 outline-none text-gray-700 placeholder:text-gray-400 rounded-full sm:rounded-none border border-gray-100 sm:border-none shadow-sm sm:shadow-none"
    />
    
    {/* Subscribe Button */}
    <button className="bg-[#0f172a] text-white px-8 py-4 sm:py-3 rounded-full font-bold hover:bg-black transition-all active:scale-95 shadow-md sm:shadow-none">
      Subscribe
    </button>

  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;