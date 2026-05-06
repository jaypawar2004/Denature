import React from 'react';

const Experience = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20 text-center font-sans">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
          Discover the Dentrist Experience
        </h2>
        <p className="text-gray-500 text-lg">
          See how we make every visit comfortable and effective
        </p>
      </div>

      <div className="relative group max-w-5xl mx-auto h-[500px] rounded-[50px] overflow-hidden shadow-2xl">
        {/* Main Video/Thumbnail Image */}
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Clinic Experience" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>

        {/* Play Button */}
        <button className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-[#0f172a] ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Experience;