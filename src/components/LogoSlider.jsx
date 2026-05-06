import React from 'react';

const logos = [
  { name: 'Logo 1', url: 'https://images.unsplash.com/photo-1762939079730-23708c0dd337?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Logo 2', url: 'https://images.unsplash.com/photo-1762939079730-23708c0dd337?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Logo 3', url: 'https://images.unsplash.com/photo-1762939079730-23708c0dd337?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Logo 4', url: 'https://images.unsplash.com/photo-1762939079730-23708c0dd337?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Logo 5', url: 'https://images.unsplash.com/photo-1762939079730-23708c0dd337?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Logo 6', url: 'https://images.unsplash.com/photo-1593022356769-11f762e25ed9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const LogoSlider = () => {
  return (
    <div className="w-full py-12 bg-white overflow-hidden border-b border-gray-100">
      {/* Container for the loop */}
      <div className="flex w-[200%] animate-infinite-scroll">
        {/* Double the list to create a seamless loop */}
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex-shrink-0 w-1/6 flex justify-center px-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <img src={logo.url} alt={logo.name} className="h-8 md:h-10 object-contain" />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LogoSlider;