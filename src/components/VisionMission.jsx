'use client';
import { motion } from 'framer-motion';

const VisionMission = () => {
  const missionPoints = [
    "Deliver high-quality, personalized dental care with integrity and compassion",
    "Foster a stress-free, welcoming clinic environment for all ages",
    "Embrace modern technology and best practices to ensure optimal outcomes",
    "Educate and empower patients to take charge of their oral health"
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
      
      {/* Left: Headline */}
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6">Our Vision & Mission</h2>
          <p className="text-gray-500 text-xl leading-relaxed max-w-md">
            Guided by purpose, driven by care — our goals go beyond just great dental results
          </p>
        </motion.div>
      </div>

      {/* Right: Vision & Mission details */}
      <div className="space-y-16">
        {/* Vision Box */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold text-[#0f172a]">Vision</h3>
          <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-[#ccfbf1] pl-6">
            To become a leading dental care provider known for innovation, empathy, and exceptional patient experiences.
          </p>
        </motion.div>

        {/* Mission List */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-[#0f172a]">Mission</h3>
          <div className="grid gap-6">
            {missionPoints.map((point, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 group"
              >
                {/* Updated Mint Green Checkbox */}
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#ccfbf1] flex items-center justify-center transition-transform group-hover:scale-110">
                  <svg className="w-3.5 h-3.5 text-[#134e4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-600 text-lg leading-snug group-hover:text-black transition-colors">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;