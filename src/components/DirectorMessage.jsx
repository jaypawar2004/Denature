'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const DirectorMessage = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20 font-sans -mt-15">
      <div className=" rounded-b-[50px] lg:rounded-[50px] overflow-hidden flex flex-col lg:flex-row items-stretch min-h-[550px] relative">
        
        {/* Left Side: Content */}
        <div className="lg:w-[55%] p- lg:p-20 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-8 leading-tight">
              A Message from Our <br /> Clinical Director
            </h2>
           <div className="space-y-8 text-slate-700 text-lg leading-relaxed">
  {/* Intro Section */}
  <div className="space-y-4">
    <p>
      At <span className="font-bold text-[#5CCBEA]">Tigris Smile</span>, we are dedicated to helping patients restore their confidence, comfort, and smile through high-quality removable denture care. Our clinic focuses on providing personalised treatment in a welcoming and supportive environment, understanding that every smile is unique.
    </p>
    <p>
      We offer a range of denture services designed to improve function, appearance, and everyday comfort. From new dentures to repairs, relines, and ongoing maintenance, our goal is to deliver natural-looking results tailored to each patient’s needs.
    </p>
    <p className="font-medium">
      We believe that wearing dentures should never stop you from smiling with confidence. We are committed to honest care, clear communication, and creating smiles that feel as good as they look.
    </p>
  </div>

  {/* Founder Section */}
  <div className="mt-12 pt-8 border-t border-slate-100">
    <div className="inline-block px-4 py-1 rounded-full bg-[#E6F7FB] text-[#5CCBEA] text-sm font-bold mb-6">
      Founder's Vision
    </div>
    <p className="italic text-slate-600 mb-6">
      "I’m the founder of Tigris Smile, a qualified Dental Prosthetist with a Bachelor degree in Dental Prosthetics, and I also hold qualifications in Dental technology."
    </p>
    <div className="space-y-4">
      <p>
        I started Tigris Smile with a simple vision — to help people regain confidence in the most basic human rights: smiling, eating, and enjoying everyday life comfortably. Losing teeth should never make someone feel ashamed to smile or stop them from enjoying meals with family and friends.
      </p>
      <p>
        For me, denture care is more than just treatment. It is a combination of healthcare, artistry, and creativity. I have always been passionate about art and attention to detail, and I use those skills to create smiles that look natural, feel comfortable, and improve quality of life.
      </p>
      <p className="font-bold text-slate-900">
        At Tigris Smile, my goal is to provide compassionate, personalised care while helping patients feel seen, supported, and confident again. Every smile has a story, and I am honoured to be part of that journey.
      </p>
    </div>
  </div>

  {/* Closing Tagline */}
  <p className="font-semibold text-[#5CCBEA] italic pt-4">
    Thank you for trusting us with your smile.
  </p>
</div>
            
            <div className="mt-10">
              <h4 className="text-xl font-bold text-[#0f172a]">D.P Shahad Hussein</h4>
              <p className="text-[#134e4a]/70 font-medium">Dental Practitioner & CEO</p>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Image with Gradient */}
        <div className="lg:w-[45%] relative min-h-[400px]">
          <Image 
            src="/images/denatureSecondImg.jpeg" 
            alt="Director"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          {/* Gradient Overlay: Bottom se dark blue shadow */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/40 via-transparent to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;