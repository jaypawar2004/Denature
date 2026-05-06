'use client';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Do you accept insurance?",
      a: "Yes, we accept most major insurance providers and are happy to assist with claims. If you're unsure about your coverage, our front desk staff can help you check eligibility and guide you through the reimbursement process."
    },
    { q: "Is teeth whitening safe?", a: "Professional teeth whitening is completely safe under expert supervision." },
    { q: "How often should I visit the dentist?", a: "We generally recommend a check-up every six months." },
    { q: "Do you treat children?", a: "Yes, we provide specialized pediatric dental care for kids of all ages." },
    { q: "What if I have dental anxiety?", a: "We offer various sedation options and a calming environment to ensure you stay comfortable." }
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
      {/* Left Content */}
      <div className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] leading-tight">
          Answers to Your Dental Care Questions
        </h2>
        <p className="text-gray-500 text-lg max-w-md leading-relaxed">
          Get the clarity you need to feel confident about your oral health decisions
        </p>
      </div>

      {/* Right FAQ Accordion */}
      <div className="divide-y divide-gray-200">
        {faqs.map((faq, i) => (
          <div key={i} className="py-6 first:pt-0">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              className="w-full flex justify-between items-center text-left"
            >
              <span className={`text-xl font-bold transition-colors ${openIndex === i ? 'text-[#0f172a]' : 'text-gray-600 hover:text-black'}`}>
                {faq.q}
              </span>
              <span className={`transform transition-transform duration-300 text-2xl ${openIndex === i ? '-rotate-45' : 'rotate-45'}`}>
                ↘
              </span>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ${openIndex === i ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
              <p className="text-gray-500 leading-relaxed text-lg">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;