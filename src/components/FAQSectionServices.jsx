"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    id: "01",
    question: "Do you accept insurance?",
    answer: "Yes, we accept most major insurance providers and are happy to assist with claims. If you're unsure about your coverage, our front desk staff can help you check eligibility and guide you through the reimbursement process."
  },
  {
    id: "02",
    question: "Is teeth whitening safe?",
    answer: "Professional teeth whitening is perfectly safe when performed by qualified clinicians. We use high-quality materials that protect your enamel while achieving a brighter smile."
  },
  {
    id: "03",
    question: "How often should I visit the dentist?",
    answer: "We generally recommend a check-up every 6 months to maintain optimal oral health and catch any potential issues early."
  },
  {
    id: "04",
    question: "Do you treat children?",
    answer: "Yes, we provide gentle dental care for patients of all ages, including specialized pediatric services for children."
  },
  {
    id: "05",
    question: "What if I have dental anxiety?",
    answer: "We prioritize patient comfort and offer calming spaces and gentle techniques to ensure an anxiety-free visit for everyone."
  }
];

const FAQSection = () => {
  const [openId, setOpenId] = useState("01"); // Pehla wala by default khula rahega

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Header */}
        <div className="max-w-sm">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Answers to Your <br /> Dental Care Questions
          </h2>
          <p className="text-slate-500">
            Get the clarity you need to feel confident about your oral health decisions.
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
                  <span className="text-slate-300 font-medium">{item.id}</span>
                  <span className="text-slate-900 font-bold">{item.question}</span>
                </div>
                {openId === item.id ? (
                  <ChevronUp className="text-slate-400 w-5 h-5" />
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