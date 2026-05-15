import React from 'react';
import Image from 'next/image';

const ClinicHours = () => {
  // Aap yahan se timings change kar sakte hain
  const hoursData = [
    { day: "Monday", time: "09:00 AM – 05:00 PM", closed: false },
    { day: "Tuesday", time: "09:00 AM – 05:00 PM", closed: false },
    { day: "Wednesday", time: "09:00 AM – 05:00 PM", closed: false },
    { day: "Thursday", time: "09:00 AM – 05:00 PM", closed: false },
    { day: "Friday", time: "09:00 AM – 05:00 PM", closed: false },
    { day: "Saturday", time: "Closed", closed: true },
    { day: "Sunday", time: "Closed", closed: true },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Side: Text & Image */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-sans">Clinic Hours</h2>
            <p className="text-slate-500 max-w-md">
              Find a time that works for you—our doors are open throughout the week.
            </p>
          </div>
          
          <div className="relative h-[350px] w-full rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100">
            <Image 
              src="https://images.unsplash.com/photo-1629909615957-be38d48fbbe6?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Our Clinic Interior" 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Right Side: Dynamic Hours List */}
        <div className="space-y-3">
          {hoursData.map((item, index) => (
            <div 
              key={index} 
              className="flex justify-between items-center p-5 bg-slate-50/50 rounded-2xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100"
            >
              <span className="text-slate-500 font-medium">{item.day}</span>
              <span className={`font-bold ${item.closed ? 'text-red-400' : 'text-slate-900'}`}>
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicHours;