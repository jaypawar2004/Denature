import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const RelatedServices = ({ currentId, allServices }) => {
  // Current service ko chhod kar koi bhi 3 services filter karo
  const related = allServices
    .filter(s => s.id !== currentId)
    .slice(0, 3);

  return (
    <section className="py-20 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Related Services</h2>
            <p className="text-slate-500 mt-2">Explore other treatments that support your oral health</p>
          </div>
          <Link href="/services" className="text-teal-600 font-bold hover:underline mt-4 md:mt-0">
            View All Services →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {related.map((service) => (
            <Link key={service.id} href={`/services/${service.id}`} className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 transition-all hover:shadow-md">
                <div className="relative h-48 w-full">
                  <Image 
                    src={service.image || "https://placehold.co/600x400"} 
                    alt={service.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm mt-2 line-clamp-2">
                    {service.shortDesc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;