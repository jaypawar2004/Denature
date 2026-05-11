import React from 'react';
import Image from 'next/image';

const ServiceDetail = ({ service }) => {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div className="relative h-[300px] md:h-[400px] w-full bg-slate-900">
        <Image src={service.image} alt={service.title} fill className="object-cover opacity-60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">{service.title}</h1>
          <p className="text-teal-100 text-lg md:text-xl font-medium">Professional Denture Care in Brisbane</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">About The Service</h2>
              <p className="text-slate-600 text-lg leading-relaxed">{service.fullDesc}</p>
            </div>

            {service.process && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.process.map((step, i) => (
                  <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <span className="text-teal-600 font-bold block mb-2">Step {i + 1}</span>
                    <p className="text-slate-900 font-medium">{step}</p>
                  </div>
                ))}
              </div>
            )}
            
            <div className="bg-teal-50 rounded-[2rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Ready to restore your smile?</h3>
                <p className="text-slate-600">Starting from <strong>{service.price}</strong>. Book your consultation today.</p>
              </div>
              <button className="bg-teal-600 text-white px-8 py-4 rounded-full font-bold hover:bg-teal-700 transition-all whitespace-nowrap">
                Book an Appointment
              </button>
            </div>
          </div>

          {/* Sidebar: Why Choose Us / Testimonials */}
          <div className="space-y-8">
            <div className="p-8 bg-slate-50 rounded-[2rem]">
              <h4 className="text-xl font-bold mb-6">Why Choose Tigris Smile?</h4>
              <ul className="space-y-4">
                {['Experienced Clinicians', 'Transparent Pricing', 'On-site Laboratory', 'Personalised Care'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-600">
                    <span className="text-teal-500 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;