// import React from 'react';

// const Experience = () => {
//   return (
//     <section className="max-w-7xl mx-auto px-8 py-12 text-center font-sans">
//       <div className="mb-12">
//         <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
//           Discover the Clinician Experience
//         </h2>
//         <p className="text-gray-500 text-lg">
//           See how we make every visit comfortable and effective
//         </p>
//       </div>

//       <div className="relative group max-w-5xl mx-auto h-[500px] rounded-[50px] overflow-hidden shadow-2xl">
//         {/* Main Video/Thumbnail Image */}
//         <img 
//           src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
//           alt="Clinic Experience" 
//           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//         />
        
//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>

//         {/* Play Button */}
//         <button className="absolute inset-0 flex items-center justify-center">
//           <div className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
//             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
//               <svg className="w-8 h-8 text-[#0f172a] ml-1" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M8 5v14l11-7z" />
//               </svg>
//             </div>
//           </div>
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Experience;




'use client';
import React, { useRef, useState } from 'react';

const Experience = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-8 py-12 text-center font-sans">
      <div className="mb-12">
        <div className="inline-block px-4 py-1 rounded-full bg-[#E6F7FB] text-[#5CCBEA] text-sm font-bold mb-4">
          Virtual Tour
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4 leading-tight">
          Discover the Clinician Experience
        </h2>
        <p className="text-gray-500 text-lg">
          See how we make every visit comfortable and effective
        </p>
      </div>

      {/* Video Container */}
      <div className="relative group max-w-5xl mx-auto h-[300px] md:h-[550px] rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl bg-black">
        
        <video
          ref={videoRef}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          poster="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1168" // Video load hone se pehle ye dikhega
          loop
          muted
          playsInline
        >
          {/* Public folder mein video dalo aur uska path yahan likho */}
          <source src="/videos/Denture-Clinic.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Overlay - Sirf tab dikhega jab video pause ho */}
        {!isPlaying && (
            <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40" />
        )}

        {/* Play/Pause Button */}
        <button 
          onClick={toggleVideo}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}
        >
          <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              {isPlaying ? (
                // Pause Icon
                <svg className="w-8 h-8 text-[#0f172a]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                // Play Icon
                <svg className="w-8 h-8 text-[#0f172a] ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Experience;