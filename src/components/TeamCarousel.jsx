"use client"
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
    <section className="max-w-7xl mx-auto px-8 py-24 font-sans overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
        <div className="max-w-xs">
          <h2 className="text-4xl font-bold text-[#0f172a] mb-6 leading-tight">
            Meet Our Denture Experts
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Compassionate care from experienced professionals
          </p>
        </div>

        {/* Custom Navigation Controls */}
        <div className="flex gap-4 mt-8 md:mt-0">
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#0f172a] hover:text-white transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#0f172a] hover:text-white transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {teamMembers.map((member, i) => (
          <div 
            key={i} 
            className="min-w-[280px] md:min-w-[320px] relative h-[450px] rounded-[40px] overflow-hidden group shadow-md"
          >
            <img 
              src={member.img} 
              alt={member.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Gradient Overlay for Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-transparent to-transparent"></div>
            
            {/* Text Content */}
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
              <p className="text-gray-300 text-sm font-medium">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamCarousel;