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
    { value: "6+ years", label: "experience 1 in house specialist" },
    { value: "5K+", label: "Happy Patients" },
    // { value: "20+", label: "Years of Experience" }
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
         <Image 
    src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?q=80&w=687&auto=format&fit=crop" 
    alt="Our Professional Dentist"
    fill
    className="object-cover transition-transform duration-700 group-hover:scale-105"
    sizes="(max-width: 768px) 100vw, 50vw"
    priority // Above the fold image hai toh priority zaroori hai
  />
        </div>
      </div>

      {/* Right: Stats */}
     {/* Container Fix */}
<div className="lg:pl-16 grid grid-cols-2 lg:grid-cols-1 gap-8 lg:gap-12 mt-10 lg:mt-0">
  {stats.map((stat, i) => (
    <div key={i} className="flex flex-col group">
      <span className="text-3xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight group-hover:text-[#5CCBEA] transition-colors duration-300">
        {stat.value}
      </span>
      <div className="h-1 w-8 bg-[#5CCBEA] mb-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      <span className="text-gray-500 font-semibold text-xs md:text-lg uppercase tracking-wider lg:capitalize lg:tracking-normal">
        {stat.label}
      </span>
    </div>
  ))}
</div>
    </section>
  );
};

export default WhyChoose;