'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const DirectorMessage = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20 font-sans -mt-15">
      <div className="bg-[#5DCBEA] rounded-[50px] overflow-hidden flex flex-col lg:flex-row items-stretch min-h-[550px] relative">
        
        {/* Left Side: Content */}
        <div className="lg:w-[55%] p-10 lg:p-20 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-8 leading-tight">
              A Message from Our <br /> Clinical Director
            </h2>
            <div className="space-y-6 text-[#134e4a] text-lg leading-relaxed opacity-90">
              <p>
                We believe a healthy smile is more than just a sign of good oral hygiene—it's a reflection of confidence and well-being. Since day one, our mission has been to offer accessible, personalized dental care that blends clinical expertise with a human touch.
              </p>
              <p>
                We aim to make every visit comfortable, every treatment effective, and every patient feel like family.
              </p>
              <p className="font-semibold italic pt-4">Thank you for trusting us with your smile.</p>
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