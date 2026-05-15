"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    id: "01",
    question: "Why Do People Need Dentures?",
    answer: "People need dentures to replace missing teeth, improve eating and speaking, support facial appearance, and restore confidence in their smile."
  },
  {
    id: "02",
    question: "Do dentures need maintenance?",
    answer: "Yes. Dentures require regular cleaning, care, and occasional adjustments to maintain comfort, fit, and function. Over time, changes in the gums and jaw can affect how dentures fit."
  },
  {
    id: "03",
    question: "What should I do if my denture breaks or feels loose?",
    answer: "Do not try to fix it yourself. Contact us as soon as possible so we can assess the issue and recommend the best repair or adjustment option to restore comfort and function."
  },
  {
    id: "04",
    question: "How long does it take to make dentures?",
    answer: "Treatment time depends on the type of denture and your individual case. Some repairs and adjustments can be completed quickly, while full dentures usually require multiple appointments to ensure the best fit and appearance."
  },
  {
    id: "05",
    question: "Can I sleep with my dentures in?",
    answer: "It is generally recommended to remove dentures at night to allow your gums to rest and to keep the dentures clean."
  },
  {
    id: "06",
    question: "Will dentures feel uncomfortable?",
    answer: "It is normal to need a short adjustment period. Most patients become more comfortable as they adapt to wearing their dentures."
  },
  {
    id: "07",
    question: "How often should dentures be checked?",
    answer: "Regular check-ups are important to ensure your dentures continue fitting comfortably and functioning properly."
  }
];

const FAQSection = () => {
  const [openId, setOpenId] = useState("01");

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Updated Title */}
        <div className="max-w-sm">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight uppercase tracking-tight">
            Frequently Asked <br /> Questions
          </h2>
          <p className="text-slate-500">
            Get the clarity you need to feel confident about your oral health decisions and denture care.
          </p>
        </div>

        {/* Right Side: Accordion List */}
        <div className="space-y-4">
          {faqData.map((item) => (
            <div 
              key={item.id} 
              className="border-b border-slate-100 last:border-none"
            >
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className={`w-full flex items-center justify-between p-6 rounded-2xl transition-all text-left ${
                  openId === item.id ? 'bg-slate-50' : 'bg-white hover:bg-slate-50/50'
                }`}
              >
                <div className="flex items-center gap-6">
                  <span className="text-[#5CCBEA] font-bold">{item.id}</span>
                  <span className="text-slate-900 font-bold">{item.question}</span>
                </div>
                {openId === item.id ? (
                  <ChevronUp className="text-[#5CCBEA] w-5 h-5" />
                ) : (
                  <ChevronDown className="text-slate-400 w-5 h-5" />
                )}
              </button>
              
              {openId === item.id && (
                <div className="px-16 pb-6 pt-2 bg-slate-50 rounded-b-2xl">
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;