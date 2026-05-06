import React from 'react';

const CTA = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-10">
      <div className="bg-[#d1e9e3] rounded-[50px] py-20 px-10 text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-bold text-[#0f172a] tracking-tight">
          Ready to Smile with Confidence?
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Book your first appointment now and receive a free dental checkup
        </p>
        <button className="bg-white text-[#0f172a] px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all active:scale-95">
          Book an Appointment
        </button>
      </div>
    </section>
  );
};

export default CTA;