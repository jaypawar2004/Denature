import React from 'react';

const steps = [
  {
    id: "01",
    title: "Schedule an Appointment",
    desc: "Choose a date and time that works best for you. We offer flexible hours throughout the week."
  },
  {
    id: "02",
    title: "We come to you",
    desc: "Enjoy the convenience of professional care at your doorstep. We bring our expertise and equipment directly to your preferred location."
  },
  {
    id: "03",
    title: "Receive Expert Care",
    desc: "Enjoy calm, personalized dental care thoughtfully designed for your comfort."
  }
];

const HowToStart = () => {
  return (
    <section className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">How to Get Started</h2>
        <p className="text-slate-500">Getting started with Tigris Smile is simple—just follow these easy steps</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.id} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-md transition-all">
            <div className="w-16 h-16 rounded-2xl bg-[#E6F7FB] flex items-center justify-center text-[#5CCBEA] font-bold text-xl mb-8">
              {step.id}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowToStart;