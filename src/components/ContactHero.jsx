import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-16">
        <h1 className="text-5xl font-bold text-slate-900 leading-tight font-sans">
          Get in Touch <br /> with Tigris Smile
        </h1>
        <p className="text-slate-500 max-w-sm mt-4 md:mt-0 leading-relaxed">
          Whether you need to book an appointment or ask a question, we're here to help you regain your confident smile.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Real Google Map Integration */}
        <div className="relative h-[450px] w-full rounded-[3rem] overflow-hidden shadow-sm border border-slate-100 bg-slate-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113281.33256037004!2d152.93524288647037!3d-27.470125027581023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91579aac93d233%3A0x402a35af7235580!2sBrisbane%20QLD%2C%20Australia!5e0!3m2!1sen!2sin!4v1715456000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Tigris Smile Location"
            className="rounded-[3rem]"
          ></iframe>
        </div>

        {/* Right: Info Details */}
        <div className="space-y-10 lg:pl-10">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 font-sans">Contact Information</h2>
            <p className="text-slate-500 mb-8">Reach us anytime—your comfort and care are our top priority at Tigris Smile.</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-slate-50 text-[#5CCBEA]">
                <MapPin size={20}/>
              </div>
              <div>
                <p className="font-bold text-slate-900">Our Clinic</p>
                <p className="text-slate-500 text-sm">Brisbane Australia</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-slate-50 text-[#5CCBEA]">
                <Mail size={20}/>
              </div>
              <div>
                <p className="font-bold text-slate-900">Email Address</p>
                <p className="text-slate-500 text-sm">enquire@tigrissmile.com.au</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-slate-50 text-[#5CCBEA]">
                <Phone size={20}/>
              </div>
              <div>
                <p className="font-bold text-slate-900">Phone Number</p>
                <p className="text-slate-500 text-sm">(07) 2111 9970</p>
              </div>
            </div>
          </div>

          {/* Social Icons Section */}
          <div className="pt-6 border-t border-slate-50">
            <p className="font-bold text-slate-900 mb-4">Follow Our Journey</p>
            <div className="flex gap-4">
  {[
    { 
      name: 'Facebook', 
      url: 'https://facebook.com/share/1CFfmyu1QF/?mibextid=wwXIfr',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/tigrissmile_brisbane?igsh=MWVienFpNjd0czVoZw%3D%3D&utm_source=qr',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    { 
      name: 'TikTok', 
      url: 'https://tiktok.com/@tigris.smile?_r=1&_t=ZS-94QFDbzQJZl',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
        </svg>
      )
    }
  ].map((social) => (
    <a 
      key={social.name}
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-11 h-11 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-500 hover:bg-[#5CCBEA] hover:text-white hover:border-[#5CCBEA] transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
      aria-label={social.name}
    >
      {social.icon}
    </a>
  ))}
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;