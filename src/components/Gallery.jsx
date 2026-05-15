// "use client";
// import React from 'react';
// import Image from 'next/image';

// const galleryData = [
//   { id: 1, src: "/images/owner2.jpeg", title: "Modern Clinic Setup", size: "tall" },
//   { id: 2, src: "/images/Denture Tooth addition.jpeg", title: "Denture Artistry", size: "wide" },
//   { id: 3, src: "/images/denature.jpeg", title: "Patient Care", size: "small" },
//   { id: 4, src: "/images/denatureSecondImg.jpeg", title: "Laboratory Detail", size: "small" },
//   { id: 5, src: "/images/Owner-img.jpeg", title: "Confidence Restored", size: "tall" },
//   { id: 6, src: "/images/Denture Hard reline.jpeg", title: "Sterilization Excellence", size: "small" },
//   { id: 7, src: "/images/Denture repair.jpeg", title: "Consultation Suite", size: "wide" },
//   // { id: 8, src: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=2083&auto=format&fit=crop", title: "Precision Equipment", size: "small" },
//   // { id: 9, src: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop", title: "Final Aesthetic Work", size: "tall" },
//   // { id: 10, src: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=2047&auto=format&fit=crop", title: "Professional Service", size: "small" },
//   // { id: 11, src: "https://images.unsplash.com/photo-1468493858157-0da44aaf1d13?q=80&w=2071&auto=format&fit=crop", title: "Smile Designing Room", size: "wide" },
//   // { id: 12, src: "https://images.unsplash.com/photo-1660732205495-f65510d8180e?q=80&w=1170&auto=format&fit=crop", title: "Welcoming Environment", size: "small" },
// ];

// const Gallery = () => {
//   return (
//     <section className="py-24 px-4 md:px-6 bg-white">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 font-sans">Our Clinic Gallery</h2>
//           <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
//             Take a look inside Tigris Smile. From our professional laboratory to our 
//             welcoming consultation spaces, we focus on quality in every detail.
//           </p>
//         </div>

//         {/* Improved Responsive Masonry Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[250px] md:auto-rows-[200px]">
//           {galleryData.map((img) => (
//             <div 
//               key={img.id}
//               className={`relative overflow-hidden rounded-[2rem] group border border-slate-100 shadow-sm
//                 ${img.size === 'tall' ? 'sm:row-span-2' : ''} 
//                 ${img.size === 'wide' ? 'sm:col-span-2' : ''}
//               `}
//             >
//               <Image
//                 src={img.src}
//                 alt={img.title}
//                 fill
//                 className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
//                 priority={img.id <= 4}
//               />
              
//               {/* Hover Overlay - Always visible on mobile or with touch */}
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
//                 <p className="text-white font-medium text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                   {img.title}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Note */}
//         <div className="mt-12 text-center">
//           <p className="text-slate-400 text-xs md:text-sm italic">
//             * All images represent our actual clinic facilities and equipment in Brisbane.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Gallery;




"use client";
import React from 'react';
import Image from 'next/image';

const galleryData = [
  { id: 1, src: "/images/owner2.jpeg", title: "" },
  // { id: 2, src: "/images/Denture Tooth addition.jpeg", title: "Denture Artistry" },
  { id: 3, src: "/images/denature.jpeg", title: "" },
  { id: 4, src: "/images/denatureSecondImg.jpeg", title: "" },
  { id: 5, src: "/images/Owner-img.jpeg", title: "" },
  { id: 6, src: "/images/Denture Hard reline.jpeg", title: "" },
  { id: 7, src: "/images/Denture repair.jpeg", title: "" },
];

const Gallery = () => {
  return (
    <section className="py-24 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 font-sans">Our Clinic Gallery</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Take a look inside Tigris Smile. From our professional laboratory to our 
            welcoming consultation spaces, we focus on quality in every detail.
          </p>
        </div>

        {/* Normal Portrait Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryData.map((img) => (
            <div 
              key={img.id}
              className="group relative flex flex-col space-y-4"
            >
              {/* Image Container with Portrait Aspect Ratio (3:4 or 4:5) */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] border border-slate-100 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={img.id <= 3}
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                   <p className="text-white font-semibold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {img.title}
                  </p>
                </div>
              </div>

              {/* Title Below Image (Optional - looks cleaner for portraits) */}
              <p className="text-slate-700 font-medium px-4 text-center group-hover:text-[#5CCBEA] transition-colors">
                {img.title}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-xs md:text-sm italic">
            * All images represent our actual clinic facilities and equipment in Brisbane.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;