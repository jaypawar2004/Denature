'use client'; 
import Image from 'next/image';
import { 
  PlusCircle, 
  ShieldCheck, 
  RefreshCcw, 
  Smile, 
  Wrench, 
  Layers, 
  Stethoscope, 
  Users, 
  ClipboardCheck 
} from 'lucide-react';

const services = [
  {
    title: "Denture Tooth Addition",
    description: "Same-day service to restore broken or missing teeth quickly without a full new denture.",
    image: "/images/Denture Tooth addition.jpeg",
    icon: <PlusCircle size={28} />,
  },
  {
    title: "Custom Sports Mouth Guard",
    description: "Precision-fit protection for contact sports, crafted with high-quality materials.",
    image: "/images/Custom Sports Mouth Guard.jpeg",
    icon: <ShieldCheck size={28} />,
  },
  {
    title: "Hard Denture Reline",
    description: "Restore fit and function professionally in our lab for loose or aged dentures.",
    image: "/images/Denture Hard reline.jpeg",
    icon: <RefreshCcw size={28} />,
  },
  {
    title: "Soft Denture Reline",
    description: "Ideal for sensitive gums, providing a cushioning layer for maximum comfort.",
    image: "/images/Soft denture reline.jpeg",
    icon: <Smile size={28} />,
  },
  {
    title: "Denture Repair",
    description: "Fast repair solutions using quality materials to restore comfort and appearance.",
    image: "/images/Denture repair.jpeg",
    icon: <Wrench size={28} />,
  },
  {
    title: "Flexible Partial Denture",
    description: "Lightweight, flexible solution to replace teeth and blend naturally with your smile.",
    image: "/images/Flexible dentures.jpeg",
    icon: <Layers size={28} />,
  },
  {
    title: "Acrylic Partial Denture",
    description: "Custom upper or lower partial dentures designed for comfort and natural look.",
    image: "/images/Acrylic Partial dentures.jpeg",
    icon: <Stethoscope size={28} />,
  },
  {
    title: "Full Upper/Lower Denture",
    description: "Complete denture treatments over 4-6 visits for optimal fit and aesthetics.",
    image: "/images/Full-upper-and-lower-dentures.jpeg",
    icon: <Users size={28} />,
  },
  {
    title: "Consultation & Check",
    description: "Professional 30-minute face-to-face assessment and personalized treatment plan.",
    image: "/images/consultant .jpeg",
    icon: <ClipboardCheck size={28} />,
  }
];

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20 bg-[#f8fafc]">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-4">
            Smile Solutions in Brisbane
          </h2>
          <p className="text-gray-500 text-xl max-w-2xl">
            From same-day repairs to custom-fit dentures, we restore your confidence.
          </p>
        </div>
        <button className="px-8 py-3.5 border-2 border-gray-200 rounded-full font-semibold text-[#0f172a] hover:bg-[#eefcf9] hover:border-[#5CCBEA] transition-all whitespace-nowrap">
          Explore All Services
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group h-[320px] p-10 rounded-[45px] transition-all duration-500 overflow-hidden shadow-sm flex flex-col justify-start hover:-translate-y-1 hover:shadow-xl"
            style={{ background: '#5DCBEA' }}
          >
            {/* Background Image Overlay */}
            {service.image && (
              <>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  /* MOBILE: opacity-100 (Direct Dikhega), LAPTOP: md:opacity-0 (Hover pe Dikhega) */
                  className="object-cover transition-all duration-700 scale-100 md:scale-105 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:scale-100"
                  priority
                />
                {/* Gradient Overlay: Mobile pe hamesha dikhega text readability ke liye, Laptop pe hover pe */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
              </>
            )}

            {/* Lucide Icon Container */}
            <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-sm mb-8 relative z-10 transition-all duration-300 bg-white text-[#5CCBEA] md:group-hover:bg-white/20 md:group-hover:text-white md:group-hover:backdrop-blur-md">
              {service.icon}
            </div>

            {/* Text Content */}
            {/* MOBILE: Text hamesha white rahega image ke upar, LAPTOP: Default dark, hover pe white */}
            <div className="relative z-10 mt-auto transition-colors duration-300 text-white md:text-[#0f172a] md:group-hover:text-white">
              <h3 className="text-2xl font-bold mb-3 tracking-tight">{service.title}</h3>
              <p className="text-gray-200 md:text-gray-600 md:group-hover:text-gray-200 text-lg leading-snug transition-colors duration-300">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;