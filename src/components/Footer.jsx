import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-8">
        {/* Top Part: Logo & Info */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <div className="space-y-12 w-full lg:w-auto">
            {/* Logo */}
            <div className="flex items-center gap-2">
              {/* <div className="w-8 h-8 bg-[#0f172a] rounded-tr-lg rounded-bl-lg"></div>
              <span className="text-2xl font-bold text-[#0f172a]">Dentrist</span> */}
             <Image 
                   src="/images/logo-denature.jpeg" // Aapke image ka path
                   alt="Tigris Smile Logo"
                   width={0}
                   height={0}
                   sizes="100vw"
                   className="w-auto h-10 md:h-12 object-contain" // Tailwind se height set karein, width auto rahegi
                 />
            </div>

            {/* Nav Links */}
            <div className="flex flex-wrap gap-8 text-gray-500 font-medium">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              <Link href="/about" className="hover:text-black transition-colors">About</Link>
              <Link href="/services" className="hover:text-black transition-colors">Services</Link>
              <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
              <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 text-gray-500">
            <div className="flex items-center gap-3 justify-start lg:justify-end">
              <span className="text-sm">123 Smile Street, San Francisco, CA</span>
              <div className="p-1.5 bg-gray-50 rounded-full text-teal-600">📍</div>
            </div>
            <div className="flex items-center gap-3 justify-start lg:justify-end">
              <span className="text-sm">info@dentristclinic.com</span>
              <div className="p-1.5 bg-gray-50 rounded-full text-teal-600">✉️</div>
            </div>
            <div className="flex items-center gap-3 justify-start lg:justify-end">
              <span className="text-sm">(123) 456-7890</span>
              <div className="p-1.5 bg-gray-50 rounded-full text-teal-600">📞</div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="h-[1px] bg-gray-100 w-full mb-8"></div>

        {/* Bottom Part: Copyright & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span>Copyright © 2026 ByteWings Technology</span>
            <Link href="/privacy" className="hover:text-gray-600">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-600">Term and conditions</Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {['FB', 'IG', 'X'].map((social) => (
              <button 
                key={social}
                className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-xs font-bold text-gray-500 hover:bg-[#0f172a] hover:text-white transition-all shadow-sm"
              >
                {social}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;