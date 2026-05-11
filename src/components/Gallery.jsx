"use client";
import React from 'react';
import Image from 'next/image';

// const galleryData = [
//   { id: 1, src: "/images/gallery-1.jpg", title: "Modern Clinic", size: "tall" },
//   { id: 2, src: "/images/gallery-2.jpg", title: "Denture Crafting", size: "wide" },
//   { id: 3, src: "/images/gallery-3.jpg", title: "Patient Care", size: "small" },
//   { id: 4, src: "/images/gallery-4.jpg", title: "Laboratory Detail", size: "small" },
//   { id: 5, src: "/images/gallery-5.jpg", title: "Happy Smile", size: "tall" },
//   { id: 6, src: "/images/gallery-6.jpg", title: "Sterilization Area", size: "small" },
//   { id: 7, src: "/images/gallery-7.jpg", title: "Consultation Room", size: "wide" },
//   { id: 8, src: "/images/gallery-8.jpg", title: "Precision Tools", size: "small" },
//   { id: 9, src: "/images/gallery-9.jpg", title: "Final Product", size: "tall" },
//   { id: 10, src: "/images/gallery-10.jpg", title: "Friendly Staff", size: "small" },
//   { id: 11, src: "/images/gallery-11.jpg", title: "Smile Design", size: "wide" },
//   { id: 12, src: "/images/gallery-12.jpg", title: "Waiting Area", size: "small" },
// ];

const galleryData = [
  { 
    id: 1, 
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop", 
    title: "Modern Clinic Setup", 
    size: "tall" 
  },
  { 
    id: 2, 
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop", 
    title: "Denture Artistry", 
    size: "wide" 
  },
  { 
    id: 3, 
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop", 
    title: "Patient Care", 
    size: "small" 
  },
  { 
    id: 4, 
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1780&auto=format&fit=crop", 
    title: "Laboratory Detail", 
    size: "small" 
  },
  { 
    id: 5, 
    src: "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?q=80&w=2070&auto=format&fit=crop", 
    title: "Confidence Restored", 
    size: "tall" 
  },
  { 
    id: 6, 
    src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop", 
    title: "Sterilization Excellence", 
    size: "small" 
  },
  { 
    id: 7, 
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2070&auto=format&fit=crop", 
    title: "Consultation Suite", 
    size: "wide" 
  },
  { 
    id: 8, 
    src: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=2083&auto=format&fit=crop", 
    title: "Precision Equipment", 
    size: "small" 
  },
  { 
    id: 9, 
    src: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop", 
    title: "Final Aesthetic Work", 
    size: "tall" 
  },
  { 
    id: 10, 
    src: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=2047&auto=format&fit=crop", 
    title: "Professional Service", 
    size: "small" 
  },
  { 
    id: 11, 
    src: "https://images.unsplash.com/photo-1468493858157-0da44aaf1d13?q=80&w=2071&auto=format&fit=crop", 
    title: "Smile Designing Room", 
    size: "wide" 
  },
  { 
    id: 12, 
    src: "https://images.unsplash.com/photo-1660732205495-f65510d8180e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    title: "Welcoming Environment", 
    size: "small" 
  },
];

const Gallery = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Clinic Gallery</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Take a look inside Tigris Smile. From our professional laboratory to our 
            welcoming consultation spaces, we focus on quality in every detail.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryData.map((img) => (
            <div 
              key={img.id}
              className={`relative overflow-hidden rounded-[2rem] group border border-slate-100 shadow-sm
                ${img.size === 'tall' ? 'row-span-2' : ''} 
                ${img.size === 'wide' ? 'col-span-2' : ''}
              `}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
                priority={img.id <= 4} // Pehli 4 images fast load hongi
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm italic">
            * All images represent our actual clinic facilities and equipment in Brisbane.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;