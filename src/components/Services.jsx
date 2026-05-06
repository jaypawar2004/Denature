'use client'; // dynamic styling ke liye use client zaroori hai
import Image from 'next/image';
import { useState } from 'react';

const services = [
  {
    title: "General Dentistry",
    description: "Preventive care and routine checkups",
     image: "https://plus.unsplash.com/premium_photo-1681967039743-37dc3a27f4ce?q=80&w=2105&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "🦷", // Emojis temporary hain, icons replace kiye ja sakte hain
  },
  {
    title: "Cosmetic Dentistry",
    description: "Smile makeovers with whitening, veneers & more",
     image: "https://plus.unsplash.com/premium_photo-1691367782355-549e5ae4d484?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "✨",
  },
  {
    title: "Orthodontics",
    description: "Braces and Invisalign for a perfect alignment",
     image: "https://plus.unsplash.com/premium_photo-1681967039743-37dc3a27f4ce?q=80&w=2105&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "😬",
  },
  {
    title: "Pediatric Dentistry",
    description: "Gentle, friendly care for children of all ages",
    image: "https://plus.unsplash.com/premium_photo-1681967039743-37dc3a27f4ce?q=80&w=2105&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Is image file ko public folder me ensure karein
    icon: "👶",
  },
  {
    title: "Dental Implants",
    description: "Permanent tooth replacement solutions",
     image: "https://plus.unsplash.com/premium_photo-1681967039743-37dc3a27f4ce?q=80&w=2105&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "🔩",
  },
  {
    title: "Emergency Dental Care",
    description: "Fast, dependable relief when you need it most",
     image: "https://plus.unsplash.com/premium_photo-1681967039743-37dc3a27f4ce?q=80&w=2105&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "🆘",
  }
];

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20 bg-[#f8fafc]">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-4">
            Smile Solutions for Every Need
          </h2>
          <p className="text-gray-500 text-xl max-w-2xl">
            Whether it's a checkup or a full makeover, we've got you covered
          </p>
        </div>
        <button className="px-8 py-3.5 border-2 border-gray-200 rounded-full font-semibold text-[#0f172a] hover:bg-[#eefcf9] hover:border-[#a7f3d0] transition-all whitespace-nowrap">
          Explore All Services
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group h-[300px] p-10 rounded-[45px] transition-all duration-500 overflow-hidden shadow-sm flex flex-col justify-start hover:-translate-y-1 hover:shadow-xl"
            style={{ background: '#e0f1ed' }}
          >
            {/* Background Image - sab cards pe */}
            {service.image && (
              <>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-all duration-700 scale-105 opacity-0 group-hover:opacity-100 group-hover:scale-100"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </>
            )}

            {/* Fallback color overlay (agar image nahi hai) */}
            {!service.image && (
              <div
                className="absolute inset-0 rounded-[45px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-0"
                style={{ background: service.hoverColor }}
              />
            )}

            {/* Watermark */}
            <div className="absolute top-0 right-0 opacity-[0.05] group-hover:opacity-0 pointer-events-none p-4 -rotate-12 transform scale-150 z-0 text-[#065f46] transition-opacity duration-300">
              <svg width="200" height="200" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="50" cy="50" r="45" />
                <circle cx="50" cy="50" r="35" />
              </svg>
            </div>

            {/* Icon */}
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-sm mb-8 relative z-10 transition-all duration-300 bg-white group-hover:bg-white/20 group-hover:backdrop-blur-md">
              {service.icon}
            </div>

            {/* Content - hover pe neeche shift hota hai */}
            <div className="relative z-10 mt-auto transition-colors duration-300 text-[#0f172a] group-hover:text-white">
              <h3 className="text-2xl font-bold mb-3 tracking-tight">{service.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-200 text-lg leading-snug transition-colors duration-300">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
