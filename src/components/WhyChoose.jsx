import Image from 'next/image';
import React from 'react';

const WhyChoose = () => {
  const features = [
    "Patient-first approach with tailored treatments",
    "Certified professionals and specialists",
    "Comfortable, modern facilities",
    "Transparent pricing and flexible plans"
  ];

  const stats = [
    { value: "4.9/5", label: "Average Rating" },
    { value: "6", label: "In-House Specialists" },
    { value: "10K+", label: "Happy Patients" },
    { value: "20+", label: "Years of Experience" }
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center font-sans">
      {/* Left: Features */}
      <div className="space-y-8">
        <div>
          <h2 className="text-4xl font-bold text-[#0f172a] mb-2 leading-tight">
            Why Choose Tigris Smile
          </h2>
          <p className="text-gray-500 text-lg">Trusted by families, backed by technology</p>
        </div>
        
        <div className="space-y-6">
          {features.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-[#ccfbf1] flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5 text-[#134e4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-700 font-medium leading-snug">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Center: Image */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-teal-100 to-blue-100 rounded-[50px] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <div className="relative h-[500px] w-full rounded-[50px] overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Our Professional Dentist"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
           
          />
        </div>
      </div>

      {/* Right: Stats */}
      <div className="lg:pl-16 flex flex-row flex-wrap justify-between gap-6 lg:flex-col lg:space-y-12">
  {stats.map((stat, i) => (
    <div key={i} className="flex flex-col">
      <span className="text-3xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight">
        {stat.value}
      </span>
      <span className="text-gray-500 font-semibold text-sm md:text-lg mt-1">
        {stat.label}
      </span>
    </div>
  ))}
</div>
    </section>
  );
};

export default WhyChoose;