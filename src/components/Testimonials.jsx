import React from 'react';

const reviews = [
  {
    name: "Amanda Lewis",
    img: "https://i.pravatar.cc/150?u=amanda",
    text: "I used to dread dental appointments, but Dentrist changed that. The staff is welcoming, the care is gentle, and I finally feel confident in my smile again.",
    rating: 5
  },
  {
    name: "Daniel Wright",
    img: "https://i.pravatar.cc/150?u=daniel",
    text: "Dentrist exceeded my expectations. The clinic is spotless, the team is professional, and my root canal was completely painless. I always feel well cared for.",
    rating: 5
  },
  {
    name: "Julia Monroe",
    img: "https://i.pravatar.cc/150?u=julia",
    text: "Everything at Dentrist runs smoothly—from booking to follow-up. The dentists take their time, and I never feel rushed. My smile has never looked better.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="bg-[#f8fafc] py-24 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Side: Text & Controls */}
        <div className="lg:col-span-4 flex flex-col justify-between py-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6 leading-tight">
              Hear From Our Happy Patients
            </h2>
            <p className="text-gray-500 text-lg max-w-sm leading-relaxed">
              Real stories from patients who've rediscovered their smile
            </p>
          </div>

          {/* Navigation Arrows (Bottom-Left) */}
          <div className="flex gap-4 mt-12">
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-white hover:shadow-md transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" /></svg>
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-white hover:shadow-md transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
          </div>
        </div>

        {/* Right Side: Feedback Cards Stack */}
        <div className="lg:col-span-8 space-y-6">
          {reviews.map((review, i) => (
            <div 
              key={i} 
              className="bg-white p-8 md:p-10 rounded-[35px] shadow-sm border border-white hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div className="flex items-center gap-4">
                  <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full object-cover shadow-inner" />
                  <span className="text-xl font-bold text-[#0f172a]">{review.name}</span>
                </div>
                {/* Star Rating */}
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed italic">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;