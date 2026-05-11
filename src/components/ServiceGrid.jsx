import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServiceCard = ({ service }) => {
  // Debugging: Agar link abhi bhi undefined aaye toh console check karna
  const id = service?.id;

  return (
    <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full">
      <div className="relative h-64 w-full bg-slate-100">
        <Image 
          src={service.image || "https://placehold.co/600x400?text=Service+Image"} 
          alt={service.title || "Service"} 
          fill 
          className="object-cover"
          unoptimized // Temporary agar images load nahi ho rahi toh
        />
        {service.price && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full font-bold text-teal-600 shadow-sm">
            {service.price}
          </div>
        )}
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{service.shortDesc}</p>
        
        <Link 
          href={`/services/${id}`} 
          className="inline-flex items-center text-teal-600 font-bold hover:gap-2 transition-all"
        >
          View Details <span className="ml-2">→</span>
        </Link>
      </div>
    </div>
  );
};

export default function ServiceGrid({ services }) {
  if (!services || !Array.isArray(services)) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((item) => (
        <ServiceCard key={item.id} service={item} />
      ))}
    </div>
  );
}