import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-8">
        {/* Top Part: Logo & Navigation */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <div className="space-y-12 w-full lg:w-auto">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Image 
                src="/images/logo-denature.jpeg" 
                alt="Tigris Smile Logo"
                width={200}
                height={60}
                className="w-auto h-10 md:h-12 object-contain"
              />
            </div>

            {/* Nav Links Grouped by Category */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-4">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900">Practice</span>
                <Link href="/" className="text-gray-500 hover:text-teal-600 transition-colors text-sm">Home</Link>
                <Link href="/about" className="text-gray-500 hover:text-teal-600 transition-colors text-sm">About</Link>
                <Link href="/services" className="text-gray-500 hover:text-teal-600 transition-colors text-sm">Services</Link>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900">Policies</span>
                {/* <Link href="/payment-plan" className="text-gray-500 hover:text-teal-600 transition-colors text-sm font-semibold">Payment Plan Policy</Link> */}

                <Link href="/payment-plan" className="text-gray-500 hover:text-teal-600 transition-colors text-sm font-semibold">
  Payment Plan Policy
</Link>
                <Link href="/terms" className="text-gray-500 hover:text-teal-600 transition-colors text-sm">Terms of Service</Link>
                <Link href="/privacy" className="text-gray-500 hover:text-teal-600 transition-colors text-sm">Privacy Policy</Link>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900">Resources</span>
                {/* <Link href="/blog" className="text-gray-500 hover:text-teal-600 transition-colors text-sm">Blog</Link> */}
                <Link href="/contact" className="text-gray-500 hover:text-teal-600 transition-colors text-sm">Contact</Link>
              </div>
            </div>
          </div>

          {/* Contact Details & Summary */}
          <div className="lg:text-right space-y-6">
            <div className="space-y-4 text-gray-500">
              <div className="flex items-center gap-3 justify-start lg:justify-end">
                <span className="text-sm">Brisbane Australia</span>
                <div className="p-1.5 bg-slate-50 rounded-full text-teal-600">📍</div>
              </div>
              <div className="flex items-center gap-3 justify-start lg:justify-end">
                <span className="text-sm">enquire@tigrissmile.com.au</span>
                <div className="p-1.5 bg-slate-50 rounded-full text-teal-600"> <Mail /></div>
              </div>
              <div className="flex items-center gap-3 justify-start lg:justify-end">
                <span className="text-sm">+61 072 1119 970</span>
                <div className="p-1.5 bg-slate-50 rounded-full text-teal-600"><Phone size={20}  /> </div>
              </div>
            </div>
            
            {/* Quick Note about Payment Plans */}
            <div className="bg-teal-50/50 p-4 rounded-xl max-w-xs lg:ml-auto">
              <p className="text-[11px] text-teal-800 leading-relaxed italic">
                Payment plans available for approved treatments. Cleared prior to collection. 
                Compliant with Australian Consumer Law.
              </p>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="h-[1px] bg-gray-100 w-full mb-8"></div>

        {/* Bottom Part: Copyright & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-400">
            <span>Copyright © 2026 Tigris Smile & ByteWings Technology. All rights reserved.</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {['FB', 'IG', 'X'].map((social) => (
              <button 
                key={social}
                className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-xs font-bold text-gray-500 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all shadow-sm"
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