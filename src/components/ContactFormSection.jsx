"use client";
import React from 'react';

const ContactFormSection = () => {
  const schedule = [
    { day: "Monday", time: "09:00 AM – 05:00 PM" },
    { day: "Tuesday", time: "09:00 AM – 06:00 PM" },
    { day: "Wednesday", time: "09:00 AM – 06:00 PM" },
    { day: "Thursday", time: "09:00 AM – 06:00 PM" },
    { day: "Friday", time: "09:00 AM – 06:00 PM" },
    { day: "Saturday", time: "09:00 AM – 03:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  // Input styles for reusability
  const inputStyles = "w-full p-4 rounded-xl bg-white border border-slate-200 text-slate-900 outline-none focus:border-[#5CCBEA] focus:ring-4 focus:ring-[#5CCBEA]/10 transition-all placeholder:text-slate-400 shadow-sm";

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Left: Form */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-sans">Send Us a Message</h2>
            <p className="text-slate-500">Fill out the form and our team will get back to you shortly</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name" className={inputStyles} />
              <input type="email" placeholder="Email Address" className={inputStyles} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Phone Number" className={inputStyles} />
              <select className={`${inputStyles} appearance-none cursor-pointer`}>
                <option value="">Subject</option>
                <option value="new">New Dentures</option>
                <option value="repair">Denture Repair</option>
                <option value="consultation">Consultation</option>
              </select>
            </div>

            <textarea 
              placeholder="Message" 
              rows="5" 
              className={inputStyles}
            ></textarea>
            
            <div>
              <button 
                type="button" 
                className="bg-[#5CCBEA] text-white px-12 py-4 rounded-full font-bold hover:bg-[#4bb8d8] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Right: Schedule Card */}
        <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-200 shadow-sm h-fit sticky top-24">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 font-sans">Clinic Hours</h3>
          <div className="space-y-5">
            {schedule.map((item, i) => (
              <div key={i} className="flex justify-between items-center text-sm border-b border-slate-200/50 pb-3 last:border-0 last:pb-0">
                <span className="text-slate-500 font-medium">{item.day}</span>
                <span className="text-slate-900 font-bold">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactFormSection;