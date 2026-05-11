import React from 'react';
// Note: You can use Lucide-React or any SVG icons
import { Heart, Sparkles, MessageCircle, Smile } from 'lucide-react';

const values = [
  {
    title: "Personalised Care",
    desc: "Every smile is unique. We provide tailored treatment in a supportive environment where you feel seen and heard.",
    icon: <Heart className="w-6 h-6 text-teal-600" />,
  },
  {
    title: "Artistry & Precision",
    desc: "With a background in dental technology, I combine clinical expertise with creative detail for natural-looking results.",
    icon: <Sparkles className="w-6 h-6 text-teal-600" />,
  },
  {
    title: "Honest Communication",
    desc: "We believe in transparent care. We communicate clearly and openly so there are never any surprises.",
    icon: <MessageCircle className="w-6 h-6 text-teal-600" />,
  },
  {
    title: "Confidence Restored",
    desc: "Wearing dentures should never stop you from enjoying life. We help you eat, speak, and smile with ease.",
    icon: <Smile className="w-6 h-6 text-teal-600" />,
  },
];

const CoreValues = () => {
  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">What We Stand For</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our core values guide every smile we restore and every relationship we build at Tigris Smile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <div key={i} className="flex items-start bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
              <div className="bg-teal-50 p-4 rounded-xl mr-6 shrink-0">
                {v.icon}
              </div>
              <div className="text-left">
                <h3 className="font-bold text-lg text-slate-900 mb-1">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;