'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const HowItWorks = () => {
  // Image change karne ke liye state
  const [activeStep, setActiveStep] = useState(1); // Default step 02 active rakha hai jaisa design mein tha

  const steps = [
    { 
      id: '01', 
      title: 'Book a Visit', 
      description: 'Easily schedule your appointment online or by phone.',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1170&auto=format&fit=crop' 
    },
    { 
      id: '02', 
      title: 'Meet Your Clinician', 
      description: 'Consult with our expert team for a personalized plan.',
      image: '/images/owner2.jpeg' 
    },
    { 
      id: '03', 
      title: 'Get Diagnosed', 
      description: 'Advanced scanning to identify your specific needs.',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1170&auto=format&fit=crop' 
    },
    { 
      id: '04', 
      title: 'Receive Treatment', 
      description: 'Comfortable and effective care using latest tech.',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1074&auto=format&fit=crop' 
    },
    { 
      id: '05', 
      title: 'Follow-Up & Smile', 
      description: 'Ensuring your results last and you stay happy.',
      image: 'https://images.unsplash.com/photo-1663182234283-28941e7612da?q=80&w=1993&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
  ];

  return (
    <section className="bg-white py-24 font-sans">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left: Steps Timeline */}
        <div className="space-y-12">
          <div className="mb-10">
            <h2 className="text-4xl font-bold text-[#0f172a] mb-3">How It Works</h2>
            <p className="text-gray-500 text-lg">Simple steps to a healthier, brighter smile</p>
          </div>

          <div className="relative border-l-2 border-gray-100 ml-4 space-y-14">
            {steps.map((step, i) => {
              const isActive = activeStep === i;
              return (
                <div 
                  key={i} 
                  className="relative pl-12 group cursor-pointer"
                  onClick={() => setActiveStep(i)} // Click hone par state change
                >
                  {/* Vertical Line Dot */}
                  <div className={`absolute -left-[11px] top-1.5 w-5 h-5 rounded-full border-4 border-white shadow-md transition-all duration-300
                    ${isActive ? 'bg-[#ccfbf1] scale-125 ring-8 ring-[#ccfbf1]/20' : 'bg-gray-200 group-hover:bg-gray-300'}
                  `}></div>
                  
                  <div className="flex gap-8 items-start">
                    <span className={`text-xl font-bold transition-colors duration-300 ${isActive ? 'text-[#0f172a]' : 'text-gray-300'}`}>
                      {step.id}
                    </span>
                    <div>
                      <h3 className={`text-2xl font-bold transition-colors duration-300 
                        ${isActive ? 'text-[#0f172a]' : 'text-gray-400 group-hover:text-gray-700'}
                      `}>
                        {step.title}
                      </h3>
                      {/* Active hone par description smoothly dikhegi */}
                      <div className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                        <p className="text-gray-500 text-lg">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Feature Image */}
        <div className="relative">
          {/* Decorative Pink Ring */}
          {/* <div className="absolute top-12 left-12 w-8 h-8 border-[6px] border-pink-400 rounded-full z-10 animate-bounce"></div> */}
          
          <div className="relative h-[600px] w-full rounded-[60px] overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            {/* Next.js Image Component */}
            <Image 
              src={steps[activeStep].image} 
              alt={steps[activeStep].title}
              fill
              priority
              className="object-cover transition-all duration-700 ease-in-out" // Image change par smooth effect
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-900/10"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;