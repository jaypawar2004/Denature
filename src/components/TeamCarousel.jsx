"use client"
import Image from 'next/image';
import React, { useRef } from 'react';

const teamMembers = [
  { name: "D.P Shahad Hussein",
     role: "Dental Practitioner & CEO", 
     img: "/images/Owner-img.jpeg" },
  // { name: "Dr. Sara Nguyen", 
  //   role: "Pediatric Dentistry", 
  //   img: "https://images.unsplash.com/photo-1663151064065-cb334788f77d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  // { name: "Dr. Leo Ramirez", 
  //   role: "Oral Surgery", 
  //   img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  // { name: "Dr. James Wilson",
  //    role: "Orthodontics", 
  //   img: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  // { name: "Dr. Anya Taylor", 
  //   role: "Periodontics", 
  //   img: "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const TeamCarousel = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
   <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 font-sans overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div className="max-w-md">
          <div className="inline-block px-4 py-1 rounded-full bg-[#E6F7FB] text-[#5CCBEA] text-sm font-bold mb-4">
            Our Experts
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4 leading-tight">
            Meet Our Denture Experts
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Compassionate care from experienced professionals dedicated to your smile.
          </p>
        </div>

        {/* Custom Navigation Controls */}
        <div className="flex gap-4">
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#5CCBEA] hover:text-white hover:border-[#5CCBEA] transition-all shadow-sm"
            aria-label="Scroll Left"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#5CCBEA] hover:text-white hover:border-[#5CCBEA] transition-all shadow-sm"
            aria-label="Scroll Right"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div 
        ref={scrollRef}
        className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar scroll-smooth pb-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {teamMembers.map((member, i) => (
          <div 
            key={i} 
            className="min-w-[85%] sm:min-w-[45%] lg:min-w-[30%] relative h-[450px] md:h-[550px] rounded-[3rem] overflow-hidden group shadow-lg flex-shrink-0"
          >
            {/* Next.js Image Component */}
            <Image 
              src={member.img} 
              alt={member.name} 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 30vw"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Text Content */}
            <div className="absolute bottom-10 left-10 text-white z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{member.name}</h3>
              <p className="text-[#5CCBEA] text-sm md:text-base font-semibold uppercase tracking-wider">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamCarousel;