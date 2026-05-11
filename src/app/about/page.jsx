import React from 'react';
import VisionMission from '@/components/VisionMission';
import DirectorMessage from '@/components/DirectorMessage';
import CoreValues from '@/components/CoreValues';
import FounderSection from '@/components/FounderSection';
import ClinicHours from '@/components/ClinicHours';
import CTASectionAbout from '@/components/CTASectionAbout';
import Newsletter from '@/components/Newsletter';

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Introduction */}
      <section className="pt-20 pb-12 px-6 text-center mt-20 md:mt-10">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">About Tigris Smile</h1>
        <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
          Dedicated to helping patients restore their confidence and comfort through 
          high-quality, personalised removable denture care.
        </p>
      </section>
<DirectorMessage />
<VisionMission />
      <CoreValues />
      <FounderSection />
      <ClinicHours />
      <CTASectionAbout />
<Newsletter />

      {/* Final Call to Action */}
      {/* <section className="py-16 text-center bg-[#5DCBEA] text-white">
        <h2 className="text-3xl font-bold mb-4">Every smile has a story.</h2>
        <p className="mb-8 opacity-90">I am honoured to be part of your journey to a more confident you.</p>
        <button className="bg-[#ffffff] text-[#5DCBEA] border border-[#5ECBE8] px-8 py-3 rounded-full font-bold hover:bg-[#8fdbf1] transition-colors">
          Book a Consultation
        </button>
      </section> */}
    </main>
  );
}
