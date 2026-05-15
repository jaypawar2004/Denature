'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Active link detect karne ke liye
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Current route check karne ke liye

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed z-50 top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[85%] lg:w-[80%] bg-white/70 backdrop-blur-xl rounded-3xl shadow-lg border border-white/20 transition-all duration-300">
      <div className="flex items-center justify-between px-6 py-4 md:px-10">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* <div className="w-8 h-8 bg-[#0f172a] rounded-tr-lg rounded-bl-lg"></div>
          <span className="text-xl md:text-2xl font-bold text-[#0f172a] tracking-tight">Tigris Smile</span> */}
          <Link href={'/'} >
          <Image 
        src="/images/logofix.png" // Aapke image ka path
        alt="Tigris Smile Logo"
        width={0}
        height={0}
        sizes="100vw"
        className="w-auto h-10 md:h-12 object-contain ]" // Tailwind se height set karein, width auto rahegi
        />
        </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`relative py-1 transition-colors hover:text-black group`}
              >
                {link.name}
                {/* Active/Hover Line Animation */}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-[#5ECBE8] transition-all duration-300 
                  ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Book Now Button (Desktop) & Hamburger (Mobile) */}
        <div className="flex items-center gap-4">
          <Link href={'/bookingform'} className="hidden sm:block bg-[#5ECBE8] text-[#fff] px-6 py-2.5 rounded-full font-semibold hover:bg-[#95d1ff] transition-all active:scale-95 shadow-sm">
            Book Now
          </Link>

          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#0f172a] focus:outline-none"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white rounded-b-3xl
        ${isOpen ? 'max-h-[400px] border-t border-gray-100 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="flex flex-col p-6 gap-4 font-medium text-gray-600 text-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className={`hover:text-[#0f172a] py-2 transition-colors ${pathname === link.href ? 'text-[#0f172a] font-bold' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link href={'/bookingform'} 
           onClick={() => setIsOpen(false)}
           className="sm:hidden bg-[#5ECBE8] text-white px-6 py-3 rounded-full font-semibold mt-2">
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;