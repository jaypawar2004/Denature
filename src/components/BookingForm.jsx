"use client";
import React from 'react';
import { User, Mail, Phone, Clock, MessageSquare } from 'lucide-react';

const BookingForm = () => {
  const inputBase = "w-full p-4 rounded-xl bg-white border border-slate-300 text-slate-900 outline-none focus:border-[#5CCBEA] focus:ring-4 focus:ring-[#5CCBEA]/5 transition-all shadow-sm placeholder:text-slate-400";

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-50/50 rounded-[3rem] p-8 md:p-16 border border-slate-200 shadow-xl shadow-slate-100">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-2 font-sans">Book Appointment</h2>
            <div className="h-1.5 w-20 bg-[#5CCBEA] rounded-full"></div>
          </div>

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                <input type="text" placeholder="John Doe" className={inputBase} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
                <input type="email" placeholder="john@example.com" className={inputBase} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                <input type="tel" placeholder="+61 XXX XXX XXX" className={inputBase} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Preferred Time</label>
                <select className={inputBase}>
                  <option>Morning (9 AM - 12 PM)</option>
                  <option>Afternoon (12 PM - 4 PM)</option>
                  <option>Evening (4 PM - 6 PM)</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
              <textarea rows="4" placeholder="How can we help you?" className={inputBase}></textarea>
            </div>

            <button className="bg-[#5CCBEA] text-white px-12 py-4 rounded-full font-bold shadow-lg shadow-[#5CCBEA]/20 hover:bg-[#4bb8d8] hover:-translate-y-1 transition-all duration-300">
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;